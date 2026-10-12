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

export interface TeamMember {
  name: string;
  role: string;
  line: string;
  /** True for the aspirational placeholder card. Not a real person. */
  invite?: boolean;
}

/** Proposed editorial copy, not verified personal quotations. Edit freely. */
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
  handle: string;
  /** Set to null to show the platform as "not set up yet" (renders as a non-link). */
  href: string | null;
}

/** Company profiles. Change URLs here; the Contact section reads from this list. */
export const socials: Social[] = [
  { id: "instagram", label: "Instagram", handle: "@isofttechx", href: "https://www.instagram.com/isofttechx/" },
  { id: "linkedin", label: "LinkedIn", handle: "isofttechx", href: "https://www.linkedin.com/company/isofttechx/" },
  { id: "github", label: "GitHub", handle: "isofttechx", href: "https://github.com/isofttechx" },
  { id: "x", label: "X", handle: "@isofttechx", href: "https://x.com/isofttechx" },
];