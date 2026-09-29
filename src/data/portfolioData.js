export const PORTFOLIO_INFO = {
  name: "Arun Prakash V",
  title: "3D Generalist & CGI Animator",
  tagline: "Crafting High-Fidelity 3D Worlds, Cinematic Characters & Visual Effects",
  bio: "Passionate 3D Generalist and CGI Animator with 4+ years of dedicated craft in hard-surface modeling, organic sculpting, cinematic lighting, and real-time visual experiences. Proficient across Blender, Unreal Engine 5, ZBrush, and Substance 3D Painter with a focus on photorealism, procedural workflows, and emotive motion design.",
  availability: "Available for Freelance & Full-time Contracts",
  commissionStatus: "Open for Q3 / Q4 Commissions",
  location: "India / Worldwide Remote",
  email: "rnprkshv@gmail.com",
  socials: {
    artstation: "https://www.artstation.com",
    behance: "https://www.behance.net",
    instagram: "https://www.instagram.com",
    discord: "https://discord.com",
    youtube: "https://www.youtube.com",
    github: "https://github.com/rn-prksh",
    linkedin: "https://www.linkedin.com/in/arun-prakash-v"
  }
};

export const SHOWREEL_DATA = {
  title: "Arun Prakash V - 2026 3D CGI & Animation Showreel",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&rel=0",
  embedSrc: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0",
  duration: "2m 14s",
  resolution: "4K UHD 60FPS",
  featuredProjects: [
    { time: "0:00", title: "Cyber-Ronin: Nexus 09", category: "Character Design" },
    { time: "0:28", title: "Solaris: Orbital Colony", category: "Environment Art" },
    { time: "0:56", title: "Aerokinetic: Chrono Apex Watch", category: "Product Visualization" },
    { time: "1:22", title: "Neo-Tokyo Drift: Kanji Express", category: "Motion Graphics" },
    { time: "1:45", title: "Mecha-Beast: Titanus Megalodon", category: "Character Design" },
    { time: "2:02", title: "Hyperion X: Electric Hypercar", category: "Product Visualization" }
  ]
};

export const CATEGORIES = [
  "All Work",
  "Character Design",
  "Environment Art",
  "Product Visualization",
  "Motion Graphics",
  "Personal Projects"
];

export const PROJECTS_DATA = [
  {
    id: "cyber-ronin",
    title: "Cyber-Ronin: Nexus 09",
    category: "Character Design",
    year: "2025",
    client: "Riot / Sci-Fi Narrative Studio",
    role: "Concept, High-Poly Sculpt, Retopology, Texturing, Rigging",
    software: ["ZBrush", "Blender", "Substance 3D Painter", "Marvelous Designer", "Unreal Engine 5"],
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    hoverGif: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
    overview: "Nexus 09 is a futuristic cybernetic samurai designed for next-generation cinematic game pipelines. The character blends traditional Japanese armor silhouettes with active-cooling carbon chassis plates, hydraulic joint actuation, and high-frequency emissive cybernetic circuitry.",
    conceptBrief: "Explored a fusion of feudal warrior motifs with near-future aerospace engineering. Extensive moodboards were collected from aerospace blueprints, composite materials, and Edo-period katchu armor. Emphasized functional mechanical joints that preserve natural range of motion.",
    wipPasses: {
      wireframe: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      clay: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
      lighting: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
      final: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80", caption: "Hero Stance - 3-Point Studio Lighting" },
      { url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80", caption: "Helmet & Visor Macro Texture Detail (4K PBR)" },
      { url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80", caption: "Back Hydraulic Spine & Exoskeleton Articulation" },
      { url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80", caption: "Emissive Plasma Katana In-Engine Unreal Engine 5" }
    ],
    polycount: "78,500 Quads (Game-Ready LOD0)",
    textureSets: "4 x 4096x4096 UDIM PBR (Albedo, Normal, Roughness, Metallic, Emissive)"
  },
  {
    id: "solaris-colony",
    title: "Solaris: Abandoned Orbital Colony",
    category: "Environment Art",
    year: "2025",
    client: "Indie Game Pitch / Cinematics",
    role: "Modular Kit Architecture, Procedural Shading, Volumetric Lighting, Composition",
    software: ["Unreal Engine 5", "Blender", "Houdini", "Substance Designer"],
    heroImage: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    hoverGif: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    overview: "A monolithic deep-space research habitat suspended in high orbit above a barren planet. Built using modular hard-surface kits with trim sheets, custom nanite meshes, and dynamic Lumen volumetric light shafts piercing through shattered pressurized viewports.",
    conceptBrief: "Atmosphere of forgotten human ambition inspired by brutalist architecture and 1970s sci-fi cinema. Created procedural metal wear shaders with parallax occlusion mapping to keep draw calls minimal without sacrificing fine rivet details.",
    wipPasses: {
      wireframe: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
      clay: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      lighting: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80",
      final: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80", caption: "Central Observation Deck looking out at planet terminator" },
      { url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80", caption: "Orbital Docking Bay with volumetric dust particles" },
      { url: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80", caption: "Cryo Sleep Pods corridor with procedural wear" }
    ],
    polycount: "2.4M Nanite Tris (Real-Time 60 FPS on RTX 4080)",
    textureSets: "Procedural Trim Sheets + 2K Decals"
  },
  {
    id: "chrono-apex",
    title: "Aerokinetic: Chrono Apex Watch",
    category: "Product Visualization",
    year: "2024",
    client: "Chrono Horology Atelier",
    role: "CAD Solid Clean-up, Micro-Bevels, Photorealistic Shader Development, Macro Animation",
    software: ["Cinema 4D", "Octane Render", "Substance 3D Painter", "DaVinci Resolve"],
    heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    hoverGif: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    overview: "Commercial CGI visualization for a bespoke skeletonized automatic timepiece. Features precision-machined grade 5 titanium plates, hand-beveled tourbillon cages, and anti-reflective sapphire crystal reflections rendered with spectral dispersion caustics.",
    conceptBrief: "The client required photorealistic advertising renders indistinguishable from physical macro photography. Developed custom spectral dispersion glass shaders and anisotropy maps to simulate fine concentric lathe marks on watch gears.",
    wipPasses: {
      wireframe: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      clay: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80",
      lighting: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
      final: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80", caption: "Frontal Dial with exposed balance wheel" },
      { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80", caption: "Macro 45-degree angle showing anti-reflective sapphire coat" },
      { url: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80", caption: "Exhibition Caseback with winding rotor weight" }
    ],
    polycount: "840,000 Polys (Sub-D Level 2)",
    textureSets: "Procedural Car Paint & Anisotropic Metal Shaders"
  },
  {
    id: "neo-tokyo-drift",
    title: "Neo-Tokyo Drift: Kanji Express",
    category: "Motion Graphics",
    year: "2024",
    client: "Synthwave / Cyberpunk Record Label",
    role: "Creative Direction, Kinetic Typography, Procedural Particle Sims, Audio Reactivity",
    software: ["Cinema 4D", "After Effects", "Redshift", "Houdini"],
    heroImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    hoverGif: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80",
    overview: "High-octane audio-reactive visualizer and title sequence featuring kinetic Japanese neon typography speeding through a warp tunnel of fiber-optic wires and holographic rain.",
    conceptBrief: "Designed custom procedural splines in Houdini that deform based on high-frequency audio stem tracks. Rendered in Redshift with deep ACES color pipeline for vibrant neon contrast and deep blacks.",
    wipPasses: {
      wireframe: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      clay: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      lighting: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80",
      final: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80", caption: "Title Drop Kinetic Frame" },
      { url: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80", caption: "Holographic Rain Distortion Field" }
    ],
    polycount: "Procedural Mograph Cloners",
    textureSets: "Emissive Neon Shaders + Glitch Noise Maps"
  },
  {
    id: "mecha-beast",
    title: "Mecha-Beast: Titanus Megalodon",
    category: "Character Design",
    year: "2024",
    client: "Personal Creature Design Project",
    role: "Creature Sculpting, Hard-Surface Paneling, Rigging & Underwater LookDev",
    software: ["ZBrush", "Blender", "Substance 3D Painter", "Cycles"],
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    hoverGif: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    overview: "A colossal cybernetic apex predator designed to operate at abyssal depths. Features articulated jaw hydro-pistons, titanium ribbed armor, bioluminescent ventral gills, and sonar targeting array.",
    conceptBrief: "Researched deep sea anatomy and submarine sonar systems to balance biological ferocity with military hardware credibility. Hand-sculpted organic muscle beneath mechanical outer plating.",
    wipPasses: {
      wireframe: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      clay: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
      lighting: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      final: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80", caption: "Full Dorsal View with Underwater Volumetric Caustics" },
      { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80", caption: "Hydraulic Jaw Detail & Titanium Teeth Array" }
    ],
    polycount: "125,000 Quads",
    textureSets: "6 x 4K PBR Weathered Subsea Textures"
  },
  {
    id: "hyperion-x",
    title: "Hyperion X: Electric Hypercar Concept",
    category: "Product Visualization",
    year: "2025",
    client: "Automotive Pitch / Private Commission",
    role: "Class-A Surfacing, Automotive Paint LookDev, Dynamic Rolling Rig",
    software: ["Blender", "Maya", "Unreal Engine 5", "V-Ray"],
    heroImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    hoverGif: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    overview: "Pure aerodynamic electric hypercar concept engineered with active aero wings, carbon monocoque, and bespoke multi-layer metallic candy flake paint.",
    conceptBrief: "Modeled completely with clean quad-patch Class-A surface continuity to ensure zero pinching in studio specular reflections. Animated on a dynamic physics chassis in Unreal Engine 5.",
    wipPasses: {
      wireframe: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      clay: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80",
      lighting: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      final: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80", caption: "Front 3/4 Studio Shot in Dark Horizon Dome" },
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80", caption: "Rear Carbon Diffuser and Lightbar in Rain" }
    ],
    polycount: "620,000 Quads",
    textureSets: "Complex Clearcoat + Carbon Weave Anisotropic Shaders"
  },
  {
    id: "terracotta-oasis",
    title: "Terracotta Oasis: Desert Sanctuary",
    category: "Environment Art",
    year: "2024",
    client: "Architectural Viz & Worldbuilding",
    role: "Terrain Heightfields, Foliage Scatters, Sun Shading, Warm Atmosphere",
    software: ["Unreal Engine 5", "Gaea", "Blender", "SpeedTree"],
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    hoverGif: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    overview: "A monolithic desert palace embedded into wind-eroded sandstone canyons. Lush date palms and turquoise plunge pools contrast with searing desert heat and golden hour god rays.",
    conceptBrief: "Generated real-world thermal erosion masks in Gaea, imported as 32-bit displacement into Unreal Engine. Utilized Nanite foliage and Lumen bounce lighting.",
    wipPasses: {
      wireframe: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      clay: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
      lighting: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      final: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80", caption: "Sunset Canyon Overview" }
    ],
    polycount: "Procedural Landscape Nanite",
    textureSets: "8K Photogrammetry Quixel Megascans"
  },
  {
    id: "astral-drift",
    title: "Astral Drift: Void Explorer",
    category: "Personal Projects",
    year: "2025",
    client: "Personal Exploration",
    role: "Full Production (Concept to Post-Processing)",
    software: ["Blender", "Substance 3D", "Photoshop", "Cycles"],
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    hoverGif: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    overview: "A lone astronaut in an experimental spacesuit examining alien floating geodes that defy local gravity. An exploration in moody color grading, volumetric dust, and cinematic solitude.",
    conceptBrief: "Inspired by Moebius and classical sci-fi book covers. The goal was combining realistic PBR shaders with hyper-saturated chromatic lighting.",
    wipPasses: {
      wireframe: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      clay: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
      lighting: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
      final: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    },
    gallery: [
      { url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80", caption: "Astronaut with illuminated helmet HUD" }
    ],
    polycount: "95,000 Quads",
    textureSets: "PBR Specular / Glossiness"
  }
];

export const SOFTWARE_PROFICIENCY = [
  { name: "Blender 4.x", category: "Modeling, Animation, Cycles / Eevee", level: 95, icon: "Box" },
  { name: "Unreal Engine 5", category: "Lumen, Nanite, Sequencer, Blueprints", level: 90, icon: "Cpu" },
  { name: "ZBrush", category: "Organic Sculpting, High-Frequency Detailing", level: 88, icon: "Layers" },
  { name: "Substance 3D Painter", category: "PBR Material Creation & Texturing", level: 92, icon: "Sparkles" },
  { name: "Cinema 4D & Octane", category: "Motion Design & Product Viz", level: 85, icon: "Move" },
  { name: "Houdini FX", category: "VDB Sims, Destruction & Procedural Kits", level: 75, icon: "Flame" },
  { name: "DaVinci Resolve / Fusion", category: "ACES Color Grading & Final Comp", level: 88, icon: "Film" }
];

export const HARDWARE_SPECS = [
  {
    category: "Primary Compute & GPU",
    title: "Dual NVIDIA RTX 4090 (24GB VRAM each)",
    detail: "48GB combined VRAM for large Octane & Cycles out-of-core scene rendering and instant real-time OptiX denoising."
  },
  {
    category: "Processor (CPU)",
    title: "AMD Ryzen 9 7950X (16 Cores / 32 Threads)",
    detail: "5.7 GHz boost clock for lightning-fast Houdini pyro simulations, mesh bake times, and physics caching."
  },
  {
    category: "System Memory",
    title: "128GB DDR5 6000MHz Kingston Fury",
    detail: "Zero bottleneck when managing 50M+ polygon ZBrush subtools and multi-UDIM 8K texturing sessions."
  },
  {
    category: "Storage Architecture",
    title: "4TB Samsung 990 Pro NVMe PCIe 4.0 SSD",
    detail: "Dedicated 7,450 MB/s high-throughput scratch drive for cache files and raw EXR render sequences."
  },
  {
    category: "Color-Accurate Displays",
    title: "32\" ASUS ProArt 4K HDR (100% DCI-P3 / Adobe RGB)",
    detail: "Factory hardware-calibrated for Delta E < 1 color fidelity across digital cinema pipelines."
  },
  {
    category: "Input & Sculpting Peripherals",
    title: "Wacom Cintiq Pro 24 + 3Dconnexion SpaceMouse",
    detail: "Pressure-sensitive 4K direct-screen sculpting and 6-degrees-of-freedom 3D camera navigation."
  }
];

export const PIPELINE_PROCESS = [
  {
    step: "01",
    title: "Concept & Reference Gathering",
    description: "Curating Pureref moodboards, sketching silhouettes, defining emotional tone, lighting palettes, and mechanical references."
  },
  {
    step: "02",
    title: "3D Blockout & Silhouette Validation",
    description: "Quick primitive geometry pass to establish scale, proportions, camera focal lengths, and visual balance before detailing."
  },
  {
    step: "03",
    title: "Sculpting & Hard-Surface Detailing",
    description: "Developing micro-details in ZBrush and high-precision Sub-D bevels in Blender for tactile physical realism."
  },
  {
    step: "04",
    title: "Retopology & UV UDIM Unwrapping",
    description: "Optimizing edge flow for deformation and clean rigging; layout of zero-stretch UV islands across multi-tile UDIMs."
  },
  {
    step: "05",
    title: "PBR Material & Texturing Craft",
    description: "Layering custom roughness micro-scratches, dust occlusions, edge wear, and organic subsurface scattering in Substance 3D."
  },
  {
    step: "06",
    title: "Cinematic Lighting & Animation Rigging",
    description: "Physically based studio light setups, volumetric fog, rim accent separation, and character armature weighting."
  },
  {
    step: "07",
    title: "Render Engine & ACES Post-Grading",
    description: "High-sample raytracing (Cycles/Octane/Unreal), multipass EXR compositing, lens breathing, and filmic grading in DaVinci."
  }
];

export const FREE_RESOURCES = [
  {
    id: "hardsurface-kit",
    title: "Sci-Fi Hardsurface Kitbash Pack (Vol. 1)",
    type: "Free 3D Model Pack",
    format: ".BLEND, .FBX, .OBJ (45+ Meshes)",
    downloads: "4.8k+",
    description: "Production-ready mid-poly vents, hydraulic pistons, sci-fi hinges, and panel cutouts ready for hard-surface detailing.",
    fileSize: "128 MB",
    link: "#download-kitbash"
  },
  {
    id: "surface-imperfections",
    title: "4K Grunge & Surface Imperfection Maps",
    type: "PBR Texture Pack",
    format: "16-bit PNG (25 Seamless Textures)",
    downloads: "7.2k+",
    description: "Handcrafted smudge, fingerprint, micro-scratch, and wipe mark roughness maps to elevate photorealism in any 3D renderer.",
    fileSize: "340 MB",
    link: "#download-imperfections"
  },
  {
    id: "procedural-shaders",
    title: "Procedural Cyberpunk & Glass Shader Library",
    type: "Shader Assets",
    format: "Blender Asset Browser (.blend)",
    downloads: "3.5k+",
    description: "12 customizable procedural shaders including dispersion glass, carbon fiber, worn anodized aluminum, and animated neon.",
    fileSize: "45 MB",
    link: "#download-shaders"
  }
];

export const TUTORIALS = [
  {
    title: "Mastering Real-Time Cinematic Lighting in Unreal Engine 5.4",
    platform: "YouTube Breakdown",
    duration: "28 mins",
    views: "42k views",
    link: "https://www.youtube.com"
  },
  {
    title: "Hard Surface Retopology Masterclass: Eliminating Pinches & Artifacts",
    platform: "Tutorial & Article",
    duration: "15 min read",
    views: "18k reads",
    link: "https://www.artstation.com"
  },
  {
    title: "Photorealistic Car Paint LookDev in Cycles & Octane Render",
    platform: "Gumroad & PDF Guide",
    duration: "Complete Walkthrough",
    views: "Free Download",
    link: "https://www.behance.net"
  }
];
