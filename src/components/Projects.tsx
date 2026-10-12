import { useId, useState } from "react";
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

/** ecoReward Bin: an item is detected, dropped into the bin, and a reward coin responds. */
function EcoMotif() {
  return (
    <div aria-hidden className="relative aspect-square w-full max-w-[22rem]">
      <svg viewBox="0 0 200 200" className="block h-full w-full text-moss" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* outer dotted orbit */}
        <circle cx="100" cy="100" r="92" strokeWidth="2" strokeDasharray="0.1 7" opacity="0.6" />

        {/* detection brackets around the incoming item */}
        <g opacity="0.7" strokeWidth="1.75">
          <path d="M82 42v-6h6" />
          <path d="M112 36h6v6" />
          <path d="M118 88v6h-6" />
          <path d="M88 94h-6v-6" />
        </g>

        {/* item (bottle) falling toward the bin */}
        <g className="eco-drop" stroke="#F3F0EA">
          <path d="M96 44h8v6l4 6v22a3 3 0 0 1-3 3H95a3 3 0 0 1-3-3V56l4-6z" />
          <path d="M92 62h16" opacity="0.5" />
        </g>

        {/* bin: lid + body */}
        <path d="M54 108h92" />
        <path d="M88 108v-6h24v6" />
        <path d="M62 108l7 62h62l7-62" />
        {/* recycle mark */}
        <path d="M108 136A10 10 0 1 0 110 145" />
        <path d="M106 129v7h7" />

        {/* flow from bin to reward */}
        <path className="eco-flow" d="M140 112Q160 104 158 80" strokeDasharray="4 6" opacity="0.7" />

        {/* reward coin */}
        <g className="eco-pop">
          <circle cx="158" cy="62" r="16" />
          <path d="M158 54v16M150 62h16" />
        </g>
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
            <button type="button" aria-expanded={open} aria-controls={panel} onClick={() => setOpen((o) => !o)}
              className="mt-8 inline-flex min-h-12 items-center gap-2 border-b border-paper pb-1 font-semibold hover:border-violet-soft hover:text-violet-soft">
              {open ? "hide details" : "see details"}
              <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            <div id={panel} hidden={!open} className="mt-6 border border-line bg-surface p-6">
              <p className="label">{p.areasLabel}</p>
              <ul className="mt-4 space-y-2">
                {p.areas.map((a) => <li key={a} className="border-t border-line pt-2 text-paper">{a}</li>)}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-mute">{p.note}</p>
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