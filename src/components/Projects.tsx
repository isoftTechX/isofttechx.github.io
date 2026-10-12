import { useEffect, useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects, type Project } from "@/data/content";
import { Reveal } from "./Reveal";

/** MayaVE: concentric rings in slow counter-rotation, an orbiting dot and a pulsing core. */
function MayaMotif() {
  return (
    <div aria-hidden className="relative aspect-square w-full max-w-[22rem]">
      <div className="absolute inset-0 rounded-full border border-violet/30" />
      <div className="spin-slow absolute inset-[12%] rounded-full border border-dashed border-violet/50" />
      <div className="spin-fast absolute inset-[6%]">
        <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-soft" />
      </div>
      <div className="spin-rev absolute inset-[26%] rounded-full border-2 border-violet-soft border-b-transparent border-r-transparent" />
      <div className="absolute inset-[40%] rounded-full border border-paper/40" />
      <div className="core-pulse absolute inset-[47%] rounded-full bg-paper" />
    </div>
  );
}

/** ecoReward Bin: three bottle drops, a short beat, one coin, a rest. A timer drives the sequence; only one element is mounted at a time. */
const ECO_SEQUENCE = [
  { kind: "drop", ms: 3000 },
  { kind: "drop", ms: 3000 },
  { kind: "drop", ms: 3000 },
  { kind: "beat", ms: 1200 },
  { kind: "coin", ms: 3300 },
  { kind: "rest", ms: 2000 },
] as const;

function EcoMotif() {
  const [i, setI] = useState(ECO_SEQUENCE.length - 1); // open on the rest step for a short wait
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    if (mq.addEventListener) {
      mq.addEventListener("change", on);
      return () => mq.removeEventListener("change", on);
    } else {
      mq.addListener(on);
      return () => mq.removeListener(on);
    }
  }, []);

  useEffect(() => {
    if (reduced) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % ECO_SEQUENCE.length), ECO_SEQUENCE[i].ms);
    return () => window.clearTimeout(t);
  }, [i, reduced]);

  const kind = reduced ? "still" : ECO_SEQUENCE[i].kind;

  const coin = (
  <>
    <circle cx="100" cy="45" r="16" />
    {/* ₹ sign: two bars, a bowl and a diagonal leg */}
    <path d="M94 36h12M94 41h12M94 36h3a5.5 5.5 0 0 1 0 11h-3l8 7" strokeWidth="1.75" />
  </>
);

  return (
    <div aria-hidden className="relative aspect-square w-full max-w-[28rem]">
      <svg viewBox="30 10 140 160" className="block h-full w-full text-moss" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <clipPath id="eco-clip">
            <rect x="0" y="0" width="200" height="104" />
          </clipPath>
        </defs>

        <g clipPath="url(#eco-clip)">
          {kind === "drop" && (
            // key remounts the node so each drop restarts from the top
            <g key={i} className="eco-drop">
              <path d="M96 26h8v8l5 7v19a3 3 0 0 1-3 3H94a3 3 0 0 1-3-3V41l5-7z" />
            </g>
          )}
          {kind === "coin" && <g key={i} className="eco-coin">{coin}</g>}
          {kind === "still" && <g>{coin}</g>}
        </g>

        <path d="M58 104h84" />
        <path d="M68 104l6 60h52l6-60" />
        {/* logo mark on the bin */}
        <path
          fill="currentColor"
          stroke="none"
          fillRule="evenodd"
          d="M79.5 118.5L78.3 120.8L78.0 123.3L78.4 125.3L79.8 127.8L81.8 130.1L85.7 133.1L92.5 136.2L90.5 140.5L89.4 144.4L89.5 147.3L91.2 149.9L94.8 151.4L99.3 151.6L105.1 150.5L112.3 147.8L111.7 145.8L103.5 147.8L99.3 147.7L97.0 146.1L96.5 145.1L96.8 142.7L99.0 137.5L111.5 136.2L115.6 135.0L119.0 133.0L121.0 130.7L122.0 127.5L121.8 125.6L120.2 123.5L118.1 122.3L114.8 121.5L109.5 122.0L105.2 123.8L102.6 125.5L96.4 131.0L94.8 125.3L93.5 122.3L91.8 120.0L90.0 118.3L86.8 116.8L83.5 116.5L81.8 116.8ZM115.3 125.6L115.8 126.9L115.8 128.0L115.4 129.3L114.7 130.5L113.7 131.6L112.8 132.2L111.1 133.1L110.1 133.4L107.1 134.3L105.1 134.8L103.2 134.9L101.5 135.2L100.4 135.2L101.0 134.0L102.5 131.8L104.5 129.2L106.9 126.6L109.0 125.1L110.8 124.3L112.9 124.1L114.1 124.5L114.8 125.0ZM84.1 122.1L85.1 121.9L86.2 121.9L86.8 122.1L87.8 122.6L88.8 123.3L89.7 124.0L90.4 124.8L91.9 127.1L93.6 130.7L94.1 132.7L94.2 133.5L94.0 134.1L93.3 133.9L92.0 133.2L89.6 131.8L88.0 130.4L85.8 128.3L84.5 126.3L83.3 124.2L83.3 123.3L83.8 122.5Z"
        />
      </svg>
    </div>
  );
}

function ProjectEntry({ p, flip }: { p: Project; flip: boolean }) {
  const [open, setOpen] = useState(false);
  const panel = useId();
  const accent = p.id === "mayave" ? "text-violet-soft" : "text-moss";
  return (
    <article className="rule py-14 md:py-20" aria-labelledby={`${p.id}-name`}>
      <Reveal>
        <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
          <div className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
            <div className={`flex ${flip ? "md:justify-end" : ""}`}>{p.id === "mayave" ? <MayaMotif /> : <EcoMotif />}</div>
          </div>
          <div className={`md:col-span-7 ${flip ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}>
            <p className="label"><span className={accent}>{p.index}</span> &nbsp;/&nbsp; {p.category}</p>
            <h3 id={`${p.id}-name`} className="mt-5 text-huge font-extrabold">{p.name}</h3>
            {p.tagline && <p className={`mt-3 text-xl font-semibold ${accent}`}>{p.tagline}</p>}
            <p className="copy mt-6">{p.description}</p>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panel}
              onClick={() => setOpen((o) => !o)}
              className="mt-8 inline-flex min-h-12 items-center gap-2 border-b border-paper pb-1 font-semibold transition-colors duration-200 hover:border-violet-soft hover:text-violet-soft"
            >
              <span>{open ? "hide details" : "see details"}</span>
              <ChevronDown aria-hidden className={`h-4 w-4 transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`} />
            </button>
            <div
              id={panel}
              className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                open ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border border-line bg-surface p-6">
                  <p className="label">{p.areasLabel}</p>
                  <ul className="mt-4 space-y-2">
                    {p.areas.map((a) => <li key={a} className="border-t border-line pt-2 text-paper">{a}</li>)}
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-mute">{p.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="screen">
      <div className="wrap py-12 md:py-16">
        <p className="label">selected work</p>
        <h2 id="projects-title" className="mt-5 max-w-4xl text-huge font-extrabold">built from ideas. shaped by iteration.</h2>
        <p className="copy mt-6">A look at the products and experiments shaping our approach to technology.</p>
        <div className="mt-14">
          {projects.map((p, i) => <ProjectEntry key={p.id} p={p} flip={i % 2 === 1} />)}
        </div>
      </div>
    </section>
  );
}