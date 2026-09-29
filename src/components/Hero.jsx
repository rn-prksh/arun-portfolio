import { useState } from 'react';
import { Play, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import Hero3DCanvas from './3d/Hero3DCanvas';
import { PORTFOLIO_INFO } from '../data/portfolioData';

function Hero({ onOpenShowreel }) {
  return (
    <section id="home" className="heroSection" aria-label="Introduction">
      <Hero3DCanvas />

      <div className="heroVignette" aria-hidden="true"></div>

      <div className="heroForeground">
        <div className="heroBadge">
          <Sparkles size={14} className="sparkleIcon" aria-hidden="true" />
          <span>Real-Time Cinematics • Hard-Surface • Organic Sculpting</span>
        </div>

        <h1 className="heroNameTitle">
          <span className="heroPretitle">PORTFOLIO OF</span>
          <span className="heroMainName">{PORTFOLIO_INFO.name}</span>
          <span className="heroRoleHighlight">{PORTFOLIO_INFO.title}</span>
        </h1>

        <p className="heroDescription">
          {PORTFOLIO_INFO.tagline}. Specializing in photorealistic look-development, game-ready topology, and dynamic visual storytelling.
        </p>

        <div className="heroCtaGroup">
          <a href="#projects" className="btn primary glowEffect">
            <span>Explore 3D Work</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>

          <button
            onClick={onOpenShowreel}
            className="btn secondary reelCtaBtn"
            aria-label="Play 2026 Showreel video"
          >
            <div className="playPulseIcon" aria-hidden="true">
              <Play size={16} fill="currentColor" />
            </div>
            <span>Watch 2026 Showreel</span>
          </button>
        </div>

        <div className="pipelineTicker" aria-label="Core 3D software pipeline">
          <span className="tickerLabel">CORE PIPELINE:</span>
          <div className="tickerItems">
            <span>Blender 4.x</span>
            <span className="tickerDivider">•</span>
            <span>Unreal Engine 5 (Lumen/Nanite)</span>
            <span className="tickerDivider">•</span>
            <span>ZBrush 2025</span>
            <span className="tickerDivider">•</span>
            <span>Substance 3D Painter</span>
            <span className="tickerDivider">•</span>
            <span>Cinema 4D & Octane</span>
            <span className="tickerDivider">•</span>
            <span>Houdini FX</span>
          </div>
        </div>
      </div>

      <a href="#projects" className="heroScrollIndicator" aria-label="Scroll down to projects">
        <span className="scrollText">SCROLL</span>
        <ChevronDown size={18} className="scrollChevron" aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
