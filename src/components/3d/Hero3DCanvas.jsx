import { useEffect, useRef, useState } from 'react';

/**
 * High-performance, zero-dependency interactive 3D WebGL / Canvas Viewport.
 * Renders an interactive 3D geometric polyhedral wireframe + ambient particle dust
 * with mouse-parallax, touch interaction, depth perspective, and glowing vertices.
 * Fully responsive across all mobile, tablet, and desktop viewports.
 */
function Hero3DCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [wireframeMode, setWireframeMode] = useState('cyan'); // 'cyan' | 'amber' | 'emerald'

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;

    let targetRotX = 0.4;
    let targetRotY = 0.6;
    let rotX = 0;
    let rotY = 0;

    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 2.2;
      targetRotX = -y * 2.2;
    };

    const handleTouchMove = (e) => {
      if (!containerRef.current || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const x = (touch.clientX - rect.left) / rect.width - 0.5;
      const y = (touch.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 2.2;
      targetRotX = -y * 2.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Generate 3D geometry: Icosahedron / Geodesic Sphere
    const t = (1.0 + Math.sqrt(5.0)) / 2.0;
    const baseVertices = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
    ].map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [x / len, y / len, z / len];
    });

    const faces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
    ];

    const edgeSet = new Set();
    const edges = [];
    faces.forEach(([a, b, c]) => {
      [[a, b], [b, c], [c, a]].forEach(([p1, p2]) => {
        const key = p1 < p2 ? `${p1}-${p2}` : `${p2}-${p1}`;
        if (!edgeSet.has(key)) {
          edgeSet.add(key);
          edges.push([p1, p2]);
        }
      });
    });

    const innerRingCount = 3;
    const innerRings = [];
    for (let r = 0; r < innerRingCount; r++) {
      const ring = [];
      const steps = 16;
      const radius = 0.5 + r * 0.22;
      for (let s = 0; s < steps; s++) {
        const theta = (s / steps) * Math.PI * 2;
        ring.push([Math.cos(theta) * radius, 0, Math.sin(theta) * radius]);
      }
      innerRings.push(ring);
    }

    const particleCount = 70;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 6,
        z: (Math.random() - 0.5) * 6,
        size: Math.random() * 2 + 0.8,
        speed: Math.random() * 0.003 + 0.001,
        alpha: Math.random() * 0.7 + 0.2
      });
    }

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.008;
      rotX += (targetRotX - rotX) * 0.05 + 0.002;
      rotY += (targetRotY - rotY) * 0.05 + 0.005;

      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Adaptive positioning: on mobile screens (< 768px), center the mesh in the background
      const isMobile = width < 768;
      const centerX = isMobile ? width * 0.5 : width * 0.65;
      const centerY = isMobile ? height * 0.42 : height * 0.5;
      const baseScale = Math.min(width, height) * (isMobile ? 0.36 : 0.32);
      const camDist = 3.6;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const project = (x, y, z) => {
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;

        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const distance = camDist + z2;
        const fov = 1.8 / Math.max(distance, 0.1);

        return {
          px: centerX + x1 * fov * baseScale,
          py: centerY + y2 * fov * baseScale,
          depth: z2,
          scale: fov
        };
      };

      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > 3) p.y = -3;

        const proj = project(p.x, p.y, p.z);
        if (proj.depth > -camDist + 0.2) {
          const depthAlpha = Math.max(0.1, Math.min(1, (proj.depth + 2) / 4));
          ctx.beginPath();
          ctx.arc(proj.px, proj.py, p.size * proj.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha * depthAlpha * 0.5})`;
          ctx.fill();
        }
      });

      innerRings.forEach((ring, idx) => {
        ctx.beginPath();
        const tiltAngle = (idx * Math.PI) / 3 + time * 0.3;
        ring.forEach((pt, i) => {
          const rx = pt[0] * Math.cos(tiltAngle) - pt[1] * Math.sin(tiltAngle);
          const ry = pt[0] * Math.sin(tiltAngle) + pt[1] * Math.cos(tiltAngle);
          const proj = project(rx, ry, pt[2]);
          if (i === 0) ctx.moveTo(proj.px, proj.py);
          else ctx.lineTo(proj.px, proj.py);
        });
        ctx.closePath();
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const breathe = 1.0 + Math.sin(time * 2) * 0.04;
      const projectedVerts = baseVertices.map(([vx, vy, vz]) => {
        return project(vx * breathe, vy * breathe, vz * breathe);
      });

      edges.forEach(([i1, i2]) => {
        const p1 = projectedVerts[i1];
        const p2 = projectedVerts[i2];

        const avgDepth = (p1.depth + p2.depth) * 0.5;
        const depthAlpha = Math.max(0.15, Math.min(0.9, (avgDepth + 1.2) / 2.2));

        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);

        if (wireframeMode === 'amber') {
          ctx.strokeStyle = `rgba(245, 158, 11, ${depthAlpha})`;
        } else if (wireframeMode === 'emerald') {
          ctx.strokeStyle = `rgba(16, 185, 129, ${depthAlpha})`;
        } else {
          ctx.strokeStyle = `rgba(56, 189, 248, ${depthAlpha})`;
        }

        ctx.lineWidth = 1.2 * Math.max(0.5, (avgDepth + 1.5) / 2);
        ctx.stroke();
      });

      projectedVerts.forEach((v) => {
        const nodeAlpha = Math.max(0.2, Math.min(1, (v.depth + 1.2) / 2.2));
        ctx.beginPath();
        ctx.arc(v.px, v.py, 3 * v.scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${nodeAlpha * 0.95})`;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      observer.disconnect();
    };
  }, [wireframeMode]);

  return (
    <div className="hero3DContainer" ref={containerRef} aria-hidden="true">
      <canvas ref={canvasRef} className="hero3DCanvas" />
      <div className="canvasControls">
        <span className="canvasLabel">3D Mesh Viewport:</span>
        <button
          className={`viewportModeBtn ${wireframeMode === 'cyan' ? 'active' : ''}`}
          onClick={() => setWireframeMode('cyan')}
          title="Cyan Wireframe"
          aria-label="Cyan 3D Wireframe"
        >
          Cyan
        </button>
        <button
          className={`viewportModeBtn ${wireframeMode === 'amber' ? 'active' : ''}`}
          onClick={() => setWireframeMode('amber')}
          title="Amber Wireframe"
          aria-label="Amber 3D Wireframe"
        >
          Amber
        </button>
        <button
          className={`viewportModeBtn ${wireframeMode === 'emerald' ? 'active' : ''}`}
          onClick={() => setWireframeMode('emerald')}
          title="Emerald Wireframe"
          aria-label="Emerald 3D Wireframe"
        >
          Emerald
        </button>
      </div>
      <div className="viewportHint">
        <span>Interactive 3D Mesh • Orbit camera</span>
      </div>
    </div>
  );
}

export default Hero3DCanvas;
