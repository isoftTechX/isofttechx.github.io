const env = import.meta.env;

export const site = {
  name: "isoftTechX",
  url: (env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || "",
  contactEmail: (env.VITE_CONTACT_EMAIL as string | undefined) || "",
  contactEndpoint: (env.VITE_CONTACT_ENDPOINT as string | undefined) || "",
  socials: [
    { label: "GitHub", href: env.VITE_SOCIAL_GITHUB as string | undefined },
    { label: "LinkedIn", href: env.VITE_SOCIAL_LINKEDIN as string | undefined },
    { label: "X", href: env.VITE_SOCIAL_X as string | undefined },
    { label: "YouTube", href: env.VITE_SOCIAL_YOUTUBE as string | undefined },
  ].filter((s): s is { label: string; href: string } => Boolean(s.href)),
  founded: 2021,
  /** Owner-supplied founder details. Leave null until verified material is available. */
  founder: null as null | { name: string; role: string; bio: string; photo?: string },
};
