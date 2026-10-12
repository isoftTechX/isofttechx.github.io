export const navItems = [
  { label: "projects", id: "projects" },
  { label: "about", id: "about" },
  { label: "contact", id: "contact" },
] as const;

export const site = {
  name: "isoftTechX",
  founded: 2021,
  contactEndpoint: (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || "",
};

export interface Project {
  id: string;
  index: string;
  name: string;
  category: string;
  description: string;
  tagline?: string;
  areasLabel: string;
  areas: string[];
  note: string;
}

export const projects: Project[] = [
  {
    id: "mayave",
    index: "01",
    name: "MayaVE",
    category: "personal ai · voice interaction · virtual presence",
    description:
      "MayaVE is an evolving desktop AI assistant project exploring natural voice interaction, local-first computing, persistent memory, and an expressive 3D virtual presence.",
    areasLabel: "implementation areas",
    areas: [
      "desktop ai voice assistant",
      "python-based asynchronous backend",
      "local llm integration through Ollama",
      "voice processing and speech synthesis",
      "persistent semantic memory",
      "live 3d avatar built on web-based 3d technologies",
    ],
    note: "MayaVE is the latest version of the EVE project (Evolving Virtual Entity). It is an engineering work in progress, and it is not fully offline: speech recognition currently relies on an internet connection.",
  },
  {
    id: "ecoreward",
    index: "02",
    name: "ecoReward Bin",
    category: "sustainability · smart systems · rewards",
    tagline: "Recycle, Redeem, Repeat.",
    description:
      "ecoReward Bin explores how technology can encourage responsible recycling by connecting waste identification with a rewarding, points-based experience.",
    areasLabel: "concept areas",
    areas: [
      "smart waste-disposal concept",
      "bottle or recyclable-item identification",
      "reward points and balance concepts",
      "python-based backend and MongoDB integration",
    ],
    note: "A sustainability-focused prototype initiative. It is not deployed, and there are no impact figures or partners to report.",
  },
];

export const team = [
  {
    index: "01",
    name: "Prashant Gautam",
    role: "Founder & CEO",
    line: "the best way to understand an idea is to build it, test it, and make it better.",
  },
  {
    index: "02",
    name: "Ankush Yadav",
    role: "CTO",
    line: "good technology isn't just about what it can do — it's about how thoughtfully it's built.",
  },
];
