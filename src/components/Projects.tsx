import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects, type Project } from "@/data/content";
import { Reveal } from "./Reveal";

/** Abstract CSS-only motif, one per project. Decorative. */
function Motif({ id }: { id: string }) {
  if (id === "mayave") {
    return (
      <div aria-hidden className="relative aspect-square w-full max-w-[22rem]">
        <div className="absolute inset-0 rounded-full border border-violet/30" />
        <div className="absolute inset-[12%] rounded-full border border-dashed border-violet/50" />
        <div className="absolute inset-[26%] rounded-full border-2 border-violet-soft border-r-transparent border-b-transparent" />
        <div className="absolute inset-[40%] rounded-full border border-paper/40" />
        <div className="absolute inset-[47%] rounded-full bg-paper" />
      </div>
    );
  }
  return (
    <div aria-hidden className="relative aspect-square w-full max-w-[22rem]">
      <div className="absolute inset-[6%] rounded-full border-2 border-dotted border-moss/60" />
      <div className="absolute left-1/2 top-[6%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-moss" />
      <div className="absolute bottom-[22%] right-[10%] h-3 w-3 bg-moss/70" />
      <div className="absolute bottom-[22%] left-[10%] h-3 w-3 bg-moss/70" />
      <div className="absolute inset-[34%] border border-moss/60" />
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
            <div className={`flex ${flip ? "md:justify-end" : ""}`}><Motif id={p.id} /></div>
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
    <section id="projects" aria-labelledby="projects-title">
      <div className="wrap py-20 md:py-28">
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
