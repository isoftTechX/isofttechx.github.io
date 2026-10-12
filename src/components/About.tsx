import { team } from "@/data/content";
import { Reveal } from "./Reveal";

const nameFontClasses: Record<string, string> = {
  Gautam: "text-[2rem] lg:text-[2.7rem]",
  Yadav: "text-[2.1rem] lg:text-[3rem]",
  YOU: "text-[2.5rem] lg:text-[3.5rem]",
};

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="screen bg-ink">
      <div className="wrap py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="label">about us</p>
            <h2 id="about-title" className="mt-5 text-huge font-extrabold">small beginnings. <span className="text-violet-soft">ambitious thinking.</span></h2>
          </div>
          <div className="space-y-6 md:col-span-5 md:col-start-8 md:pt-10">
            <p className="text-xl font-semibold leading-snug">
              isoftTechX started with a simple instinct: <br /> don't just imagine what technology could become.<br />
              <span className="text-4xl font-extrabold">start building it!</span>
            </p>
            <p className="copy">Founded in 2021 by a teenage programmers, the initiative grew from a curiosity for code into an ongoing pursuit of intelligent systems, solution products, and ideas with practical purpose.</p>
            <p className="copy">Today, the focus is on building our own technology: learning through experimentation, refining through iteration, and turning ambitious ideas into working products.</p>
          </div>
        </div>

        <div id="team-members" role="group" aria-labelledby="team-title" className="mt-24 scroll-mt-20 md:mt-32">
          <p className="label">the people behind the work</p>
          <h3 id="team-title" className="mt-5 text-big font-extrabold">built by people who build.</h3>
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {team.map((m) => (
              <li key={m.name} className="flex">
                <Reveal className="flex w-full">
                  <div
                    className={`group flex w-full flex-col border p-6 transition-colors sm:p-8 lg:min-h-[22rem] ${
                      m.invite
                        ? "border-dashed border-violet/60 bg-violet/[0.06] hover:border-violet-soft"
                        : "border-line bg-surface hover:border-paper/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className={`label ${m.invite ? "text-violet-soft" : ""}`}>{m.role}</span>
                      {m.invite && <span className="label text-violet-soft">open invitation</span>}
                    </div>
                    <div className="mt-16 lg:mt-auto lg:pt-16">
                      <p
                        className={`font-extrabold tracking-tight [overflow-wrap:anywhere] ${m.invite ? "text-violet-soft" : ""}`}
                        style={{ fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)", lineHeight: 1.05 }}
                      >
                        {m.name.split(" ").map((part, idx) => (
                          <span
                            key={idx}
                            className={`block ${nameFontClasses[part] ?? ""}`}
                          >
                            {part}
                          </span>
                        ))}
                      </p>
                      <p className={`mt-6 border-l-2 pl-4 leading-relaxed text-paper/90 ${m.invite ? "border-violet-soft" : "border-violet"}`}>
                        “{m.line}”
                      </p>
                    </div>
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