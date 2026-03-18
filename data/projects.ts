export interface Project {
  slug: string;
  title: string;
  label: string;
  description: string;
  tags: string[];
  category: "hardware" | "software";
  mediaPlaceholder: string;
  image?: string;
  externalUrl?: string;
  featured?: boolean;
  linkText?: string;
}

export const projects: Project[] = [
  {
    slug: "truck-window-retrofit",
    title: "Truck Window Retrofit",
    label: "Self-initiated · Electronics class final",
    description:
      "Retrofitted the manual crank windows on my own truck to automatic power windows. Arduino controls relays and motor drivers; current sensing detects stall and reverses direction automatically. Designed, wired, and documented entirely on my own — also served as my electronics class final.",
    tags: [
      "Arduino",
      "Embedded C",
      "KiCad",
      "Relays",
      "Motor Drivers",
      "Current Sensing",
    ],
    category: "hardware",
    mediaPlaceholder: "[ truck retrofit — hero photo ]",
    image: "/images/truck-images/truck-door-open.jpg",
    featured: true,
    linkText: "View full project →",
  },
  {
    slug: "solar-boat",
    title: "Solar Boat",
    label: "$26k Yamaha Grant · Junior Capstone",
    description:
      "Secured $26k from Yamaha Motor Corporation to convert a pontoon boat into a solar-powered vessel. Led electrical system design, carpentry, and CAD across a cross-functional team. Presented at Davidson's Verna Miller Case Symposium.",
    tags: ["Electrical Systems", "Fusion 360", "Carpentry", "Project Lead"],
    category: "hardware",
    mediaPlaceholder: "[ solar boat — project photo ]",
    image: "/images/solarboat-images/solar-boat-hero.jpg",
    linkText: "View full project →",
  },
  {
    slug: "baja-sae",
    title: "Baja SAE — Suspension Lead",
    label: "Senior Capstone · 50+ Member Team",
    description:
      "Lead suspension design and fabrication for Davidson's Baja SAE team. Custom components in Fusion 360 and SolidWorks, coordinating with local manufacturers, writing BOMs, negotiating sponsorships.",
    tags: ["Fusion 360", "SolidWorks", "Welding", "Fabrication"],
    category: "hardware",
    mediaPlaceholder: "[ baja sae — project photo ]",
    image: "/images/baja/baja-front.jpg",
    linkText: "View full project →",
  },
  {
    slug: "reaction-time-pcb",
    title: "Custom PCB — Reaction Time Game",
    label: "KiCad · Hand-soldered",
    description:
      "Designed and fabricated a custom PCB from scratch using KiCad. Schematic to physical board, hand-soldered and fully functional.",
    tags: ["KiCad", "PCB Design", "Arduino"],
    category: "hardware",
    mediaPlaceholder: "[ pcb — project photo ]",
    image: "/images/reaction-game/pcb-assembled.jpg",
    linkText: "Watch demo →",
  },
  {
    slug: "cnc-pencil-machine",
    title: "CNC Pencil Writing Machine",
    label: "Self-built · Motion Control",
    description:
      "Built a CNC machine from scratch — gantry system, motion control, mechanical design. No kit.",
    tags: ["CNC", "Motion Control", "Fabrication"],
    category: "hardware",
    mediaPlaceholder: "[ cnc machine — project photo ]",
    image: "/images/cnc/cnc-drawing.jpg",
    linkText: "Watch demo →",
  },
  {
    slug: "campus-swap",
    title: "Campus Swap",
    label: "Founder · Closing seed round",
    description:
      "Full-stack student marketplace for move-out consignment. Students drop off furniture at move-out, we sell it at move-in, they get a cut. Built with Flask/Python, live at UNC Chapel Hill. Currently closing a $100k seed round.",
    tags: ["Flask", "Python", "Full-Stack", "Founder"],
    category: "software",
    externalUrl: "usecampusswap.com",
    mediaPlaceholder: "[ campus swap — screenshot ]",
    image: "/images/campusswap/campus-swap-hero.png",
  },
  {
    slug: "ai-projects",
    title: "AI Project Portfolio",
    label: "AI Agents · 2026",
    description:
      "A collection of AI and agent projects built while finishing senior year — Gmail Declutter Agent, bracketAnalyzer, Autogram, and more. Full portfolio with live GitHub links tracked at vibepm-six.vercel.app.",
    tags: ["Claude API", "AWS Lambda", "Next.js", "Python", "Multi-Agent"],
    category: "software",
    externalUrl: "vibepm-six.vercel.app",
    mediaPlaceholder: "[ ai projects — screenshot ]",
    image: "/images/vibepm/vibepm-screenshot.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const hardwareProjects = projects.filter(
  (p) => p.category === "hardware"
);
export const softwareProjects = projects.filter(
  (p) => p.category === "software"
);
