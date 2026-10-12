import { team } from "@/data/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="rule bg-surface">
      <div className="wrap py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="label">about us</p>
            <h2 id="about-title" className="mt-5 text-huge font-extrabold">small beginnings. ambitious thinking.</h2>
          </div>
          <div className="space-y-6 md:col-span-5 md:col-start-8 md:pt-10">
            <p className="text-xl font-semibold leading-snug">isoftTechX started with a simple instinct: don't just imagine what technology could become. start building it.</p>
            <p className="copy">Founded in 2021 by a teenage programmer, the initiative grew from a curiosity for code into an ongoing pursuit of original products, intelligent systems, and ideas with practical purpose.</p>
            <p className="copy">Today, the focus is on building our own technology: learning through experimentation, refining through iteration, and turning ambitious ideas into working products. We make our own products and do not take client work.</p>
          </div>
        </div>

        <div id="team-members" role="group" aria-labelledby="team-title" className="mt-24 scroll-mt-20 md:mt-32">
          <p className="label">the people behind the work</p>
          <h3 id="team-title" className="mt-5 text-big font-extrabold">built by people who build.</h3>
          <ul className="mt-12 grid gap-px bg-line md:grid-cols-12">
            {team.map((m, i) => (
              <li key={m.name} className={`bg-ink ${i === 0 ? "md:col-span-7" : "md:col-span-5"}`}>
                <Reveal className="flex h-full flex-col justify-between gap-16 p-6 sm:p-8 md:min-h-[26rem] md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="label text-violet-soft">{m.index}</span>
                    <span className="label">{m.role}</span>
                  </div>
                  <div>
                    <p className="text-big font-extrabold tracking-tight [overflow-wrap:anywhere]" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}>{m.name}</p>
                    <p className="mt-2 text-mute">{m.role}</p>
                    <p className="mt-8 max-w-[38ch] border-l-2 border-violet pl-4 leading-relaxed text-paper/90">“{m.line}”</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
