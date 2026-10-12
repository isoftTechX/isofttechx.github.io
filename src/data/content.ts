export const navItems = [
  { label: "projects", id: "projects" },
  { label: "about", id: "about" },
  { label: "contact", id: "contact" },
] as const;

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
    category: "personal AI · voice interaction · virtual presence",
    description:
      "MayaVE is an evolving desktop AI assistant project exploring natural voice interaction, local-first computing, persistent memory, and an expressive 3D virtual presence.",
    areasLabel: "implementation areas",
    areas: [
      "desktop AI voice assistant",
      "Python-based asynchronous backend",
      "local LLM integration through Ollama",
      "voice processing and speech synthesis",
      "persistent semantic memory",
      "live 3D avatar built on web-based 3D technologies",
    ],
    note: "MayaVE is the latest evolution of the EVE project (Evolving Virtual Entity). It combines local LLM inference with internet-assisted speech recognition in an ongoing desktop AI assistant project.",
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
      "Python-based backend and MongoDB integration",
    ],
    note: "A sustainability-focused prototype exploring smart waste identification and reward-driven recycling.",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  line: string;
  /** True for the open invitation card. */
  invite?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Prashant Gautam",
    role: "Founder & CEO",
    line: "the best way to understand an idea is to build it, test it, and make it better.",
  },
  {
    name: "Ankush Yadav",
    role: "CTO",
    line: "good technology isn't just about what it can do — it's about how thoughtfully it's built.",
  },
  {
    name: "YOU",
    role: "Dream Role",
    line: "every meaningful thing starts with someone willing to imagine what comes next.",
    invite: true,
  },
];

export type SocialId = "instagram" | "linkedin" | "github" | "x";

export interface Social {
  id: SocialId;
  label: string;
  href: string | null;
}

/** Company profiles. Change URLs here; the Contact section reads from this list. */
export const socials: Social[] = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/isofttechx/" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/isofttechx/" },
  { id: "github", label: "GitHub", href: "https://github.com/isofttechx" },
  { id: "x", label: "X", href: "https://x.com/isofttechx" },
];