export const projects = [
  {
    id: "lumen-compositor",
    title: "Lumen Compositor",
    summary:
      "Customizable industrial lamp built with modular optics and a WebGL product configurator for live demos.",
    tags: ["CAD", "Configurator", "React"],
    media: {
      type: "model",
      src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      alt: "Lumen Compositor CAD model",
    },
    category: "3d",
    detail: {
      heroNote: "Adaptive lighting rig for research labs",
      overview:
        "Lumen Compositor is a modular light that lets lab teams reconfigure optics, cooling, and filters without swapping fixtures.",
      scope: ["Industrial Design", "Mechanical Engineering", "WebGL"],
      year: 2024,
      client: "Lumen Labs",
      heroMedia: {
        type: "model",
        src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        alt: "Lumen Compositor exploded view",
      },
      problem:
        "Labs had to use three separate fixtures to cover the range of wavelengths required for their experiments, leading to downtime and calibration drift.",
      approach:
        "Designed a cartridge-based head where optics, filters, and emitters snap in via a keyed rail. Built a real-time configurator so operators could pre-plan assemblies and share BOMs.",
      gallery: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80",
          alt: "CMF exploration",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80",
          alt: "Render of assembly",
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/KluDYNT3cAw",
          alt: "Configurator walkthrough",
        },
      ],
    },
  },
  {
    id: "vector-drive-launch",
    title: "Vector Drive Launch",
    summary:
      "Narrative landing page with layered motion, scroll storytelling, and an embedded teaser cut.",
    tags: ["Web", "Scroll", "Video"],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/KluDYNT3cAw",
      alt: "Vector drive launch film",
    },
    category: "video",
    detail: {
      heroNote: "Autonomy perception stack reveal",
      overview:
        "Vector Drive wanted a single page to align investors and early partners on how their perception stack fuses radar, lidar, and onboard compute.",
      scope: ["Creative Direction", "Web Development", "Film"],
      year: 2023,
      client: "Vector Drive",
      heroMedia: {
        type: "video",
        src: "https://www.youtube.com/embed/KluDYNT3cAw",
        alt: "Launch trailer",
      },
      problem:
        "The engineering team had dozens of technical diagrams but nothing that felt cohesive or cinematic for the unveil.",
      approach:
        "Created a scroll-triggered story with layered parallax, composite renders, and embedded teaser film to communicate the sensing pipeline.",
      gallery: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
          alt: "Storyboard",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80",
          alt: "Website section",
        },
      ],
    },
  },
  {
    id: "aerie-hud",
    title: "Aerie HUD",
    summary:
      "Augmented reality interface for cockpit diagnostics. Includes film-quality renders and live UI prototype.",
    tags: ["Prototype", "Figma", "Vision"],
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      alt: "Aerie HUD interface",
    },
    category: "web",
    detail: {
      heroNote: "Spatial display for electric aircraft",
      overview:
        "Aerie Systems needed a richer HUD to display engine diagnostics, airspace alerts, and AI copilots cues without overloading the pilot.",
      scope: ["Product Strategy", "UI Systems", "AR Prototype"],
      year: 2022,
      client: "Aerie Systems",
      heroMedia: {
        type: "image",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        alt: "HUD render",
      },
      problem:
        "Existing avionics were ported to AR verbatim, creating floating data tables that obscured the horizon.",
      approach:
        "Developed density maps for information layers, prototyped depth-responsive cards, and aligned visuals with airworthiness standards.",
      gallery: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
          alt: "Interface detail",
        },
      ],
    },
  },
];
