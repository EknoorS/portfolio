export const projects = [
{
  id: "beanbot",
  title: "The BeanBot",
  detailPage: "beanbot.html",
  summary:
    "Electromechanical embedded system for automated object selection and retrieval.",
  tags: ["Arduino", "Embedded Systems", "Motors", "PCB", "CAD"],
  media: {
    type: "model",
    src: "./media/beanbot/beanbot.glb",
    alt: "BeanBot CAD model",
    scale: "5 5 5",

  },
  category: "3d",
  detail: {
    heroNote: "Embedded electromechanical automation project",
    overview:
      "BeanBot is an electromechanical system designed to autonomously identify, select, and retrieve specific items using a combination of sensors, motor actuation, and embedded control logic. The project integrates mechanical design, custom electronics, and firmware into a single cohesive system.",
    scope: [
      "Embedded Systems",
      "Electromechanical Design",
      "PCB Design",
      "Control Logic",
      "Mechanical CAD",
    ],
    year: 2023,
    client: "Academic Project",
    heroMedia: {
      // TODO: Replace with actual exploded view or assembly animation
      type: "model",
      src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      alt: "BeanBot system overview",
      scale: "3 3 3",
    },
    problem:
      "Manual sorting and retrieval of small objects is repetitive, error-prone, and inefficient. The challenge was to design a compact system capable of reliably selecting predefined targets while handling mechanical constraints, power limitations, and real-time control.",
    approach:
      "Designed a modular electromechanical architecture combining stepper, servo, and DC motors controlled by an Arduino-based system. Developed custom PCB circuitry for motor drivers and power regulation, and iteratively refined the mechanical design in CAD to ensure repeatable motion and robustness. System-level debugging and testing were used to validate reliability under real operating conditions.",
    gallery: [
      {
        // TODO: Replace with real prototype or PCB photos
        type: "image",
        src: "./media/beanbot/beanbot.jpg",
        alt: "Mechanical prototype exploration",
      },
      {
        // TODO: Replace with CAD render or assembled system image
        type: "image",
        src: "./media/beanbot/PCB_photo.png",
        alt: "System assembly render",
      },
      {
        // TODO: Replace with real demo video if available
        type: "video",
        src: "https://www.youtube.com/embed/cjZvFY6__qw",
        alt: "BeanBot system demonstration",
      },
    ],
  },
},

  {
    id: "easelock",
    title: "Easelock",
    detailPage: "easelock.html",
    summary:
      "Embedded IoT: keyless door access through RFID-based authentication and microcontroller control.",
    tags: ["Raspberry Pi", "Embedded Systems", "Electronics","Python"],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/8vVTECEe0kM?si=l4wL65hKFfd4DS2X",
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
    id: "face-mask-qr",
    title: "Face Mask & QR-Code Access Control System",
    detailPage: "face-mask-qr.html",
    summary:
      "Vision-Based Access Control with Face Mask & QR Verification",
    tags: ["Raspberry Pi", "IoT", "Face Recognition", "Sockets"],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/0Kxg_7-8nl0?si=PPkp0l3Nz4IbQCFJ",
      alt: "Demonstration of the Face Mask & QR-Code Access Control System",
    },
    category: "electronics",
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
