import type { ReactNode } from "react";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import { socials, type SocialId } from "@/data/content";

/** Lucide's brand set has no X mark, so it is drawn inline with the same 2px stroke. */
function XIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.7 16H20L8.3 4z" />
      <path d="M4 20l6.8-6.8M13.2 10.8L20 4" />
    </svg>
  );
}

const icons: Record<SocialId, ReactNode> = {
  instagram: <Instagram aria-hidden className="h-6 w-6" />,
  linkedin: <Linkedin aria-hidden className="h-6 w-6" />,
  github: <Github aria-hidden className="h-6 w-6" />,
  x: <XIcon />,
};

/**
 * Base card shell.
 * - rounded-lg  → soft corners; overflow-hidden clips the bg precisely to the radius.
 * - Below sm (< 640 px): icon-only square, centred content.
 * - From sm up: icon + label + handle row with arrow.
 */
const card =
  "group relative flex overflow-hidden rounded-lg border transition-colors" +
  /* narrow: square, centred */
  " min-h-16 w-full items-center justify-center p-4" +
  /* wide: left-aligned row */
  " sm:min-h-28 sm:justify-start sm:gap-4 sm:p-5 lg:p-6";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="screen">
      <div className="wrap grid gap-12 py-12 md:grid-cols-12 md:items-center md:py-16">
        <div className="md:col-span-5">
          <p className="label">connect with us</p>
          <h2 id="contact-title" className="mt-5 text-huge font-extrabold">find us around the internet.</h2>
          <p className="copy mt-6">follow the work, explore our projects, and stay connected as we build.</p>
        </div>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:col-span-6 md:col-start-7">
          {socials.map((s) => {
            const iconBox = (
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line text-violet-soft sm:h-12 sm:w-12">
                {icons[s.id]}
              </span>
            );

            const textBlock = (
              /* Hidden below sm; always present in the DOM for AT via aria-label on the <a> */
              <span className="hidden min-w-0 flex-1 sm:block">
                <span className="block text-xl font-semibold">{s.label}</span>
                <span className="block truncate text-mute">{s.href ? s.handle : "not set up yet"}</span>
              </span>
            );

            const arrow = s.href && (
              <ArrowUpRight aria-hidden className="hidden h-5 w-5 shrink-0 text-mute transition-colors group-hover:text-violet-soft sm:block" />
            );

            return (
              <li key={s.id}>
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label}, ${s.handle} (opens in a new tab)`}
                    className={`${card} border-line bg-surface hover:border-violet-soft hover:bg-ink`}
                  >
                    {iconBox}
                    {textBlock}
                    {arrow}
                  </a>
                ) : (
                  <div className={`${card} cursor-default border-dashed border-line text-mute`}>
                    {iconBox}
                    {textBlock}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}