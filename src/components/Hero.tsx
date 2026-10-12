import { ArrowDown } from "lucide-react";

const primary = "inline-flex min-h-12 items-center justify-center gap-2 bg-paper px-6 py-3 font-semibold text-ink transition-colors hover:bg-violet-soft";
const ghost = "inline-flex min-h-12 items-center justify-center gap-2 border border-paper/30 px-6 py-3 font-semibold transition-colors hover:border-violet-soft hover:text-violet-soft";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="screen relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="wrap relative py-12 md:py-16">
        <p className="label rise">an independent technology venture</p>
        <h1 id="hero-title" className="rise mt-8 text-mega font-extrabold" style={{ animationDelay: ".08s" }}>
          ideas into<br />
          <span className="text-violet-soft">intelligence.</span>
        </h1>
        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <p className="copy rise text-xl md:col-span-6 md:col-start-7" style={{ animationDelay: ".2s" }}>
            We build original products and intelligent systems through experimentation, engineering, and a belief that good ideas deserve to become real.
          </p>
          <div className="rise flex flex-wrap gap-3 md:col-span-6 md:col-start-7" style={{ animationDelay: ".3s" }}>
            <a href="#projects" className={primary}>explore projects <ArrowDown aria-hidden className="h-4 w-4" /></a>
            <a href="#team-members" className={ghost}>meet the team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
