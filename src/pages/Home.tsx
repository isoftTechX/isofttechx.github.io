import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { projects, getProject } from "@/data/projects";
import { HeroVisual } from "@/components/visual/RingCore";
import { MayaVisual } from "@/components/visual/MayaVisual";
import { EcoRewardVisual } from "@/components/visual/EcoRewardVisual";
import { ButtonLink } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  { t: "Build with purpose", d: "We start from a problem or an experience worth improving, then decide what to build." },
  { t: "Experiment with intelligence", d: "AI, machine learning and deep learning are tools we explore hands-on, not slogans." },
  { t: "Make technology usable", d: "A clever system that people can't use isn't finished. Interaction is part of the engineering." },
  { t: "Improve through iteration", d: "Maya has gone through several identities and versions. We expect to keep revising." },
];

export default function Home() {
  useSeo({
    title: "isoftTechX — Independent technology venture building original products",
    description: "isoftTechX builds original products at the intersection of intelligent software, emerging technology and real-world problems. Meet MayaVE and ecoReward Bin.",
    path: "/",
  });
  const maya = getProject("mayave")!;
  const eco = getProject("ecoreward-bin")!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-title">
        <div className="wrap relative pb-16 pt-10 md:pb-28 md:pt-16">
          <div aria-hidden={false} className="pointer-events-auto absolute -right-24 top-4 h-[26rem] w-[26rem] opacity-90 sm:right-0 sm:h-[34rem] sm:w-[34rem] lg:right-6 lg:top-0 lg:h-[46rem] lg:w-[46rem]">
            <HeroVisual className="h-full w-full" />
          </div>
          <p className="meta relative mb-8">Independent technology venture · est. 2021</p>
          <h1 id="hero-title" className="relative text-mega font-extrabold">
            <span className="hero-line block">Technology for</span>
            <span className="hero-line block">ideas that refuse</span>
            <span className="hero-line block">to stay ideas.</span>
          </h1>
          <div className="relative mt-12 grid gap-8 md:grid-cols-12">
            <p className="prose-ed text-xl md:col-span-6 lg:col-span-5">
              <strong>isoftTechX</strong> builds original products at the intersection of intelligent software, emerging technology and real-world problems. We make our own products. We don't build apps for hire.
            </p>
            <div className="flex flex-wrap items-start gap-3 md:col-span-6 md:col-start-7 lg:col-start-8">
              <ButtonLink to="/projects">Explore our projects</ButtonLink>
              <ButtonLink to="/about#philosophy" variant="ghost" arrow={false}>Our philosophy</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="rule" aria-labelledby="intro-title">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <h2 id="intro-title" className="text-big font-semibold md:col-span-5">Technology should be more than code.</h2>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            <p className="prose-ed">It should be an instrument: for solving problems, for making new experiences possible, and for improving how people interact with the world around them.</p>
            <p className="prose-ed">Our founder started isoftTechX in 2021, driven by an interest in programming, AI and entrepreneurship. Today the company is a small, product-focused venture working on two original projects, one in personal AI and one in sustainability.</p>
          </div>
        </div>
      </section>

      {/* Featured: MayaVE */}
      <section className="rule bg-surface" aria-labelledby="maya-title">
        <div className="wrap grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-7">
            <Link to={maya.href} aria-label="MayaVE project page" className="block">
              <MayaVisual label={maya.imageAlt} className="aspect-[5/4] w-full" />
            </Link>
          </Reveal>
          <div className="md:col-span-5">
            <p className="meta mb-4">Flagship project · {maya.tagline}</p>
            <h2 id="maya-title" className="text-huge font-semibold">Maya is our exploration of a more personal kind of AI.</h2>
            <p className="prose-ed mt-6">{maya.shortDescription}</p>
            <ul className="mt-6 space-y-2 text-paper">
              <li className="border-t border-line pt-2">Local language models through Ollama</li>
              <li className="border-t border-line pt-2">Semantic memory backed by SQLite</li>
              <li className="border-t border-line pt-2">Spoken replies and a live VRM avatar frontend</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <StatusBadge status={maya.status} />
              <span className="text-sm text-mute">Some capabilities still need internet.</span>
            </div>
            <ButtonLink to={maya.href} className="mt-8">Meet Maya</ButtonLink>
          </div>
        </div>
      </section>

      {/* Featured: ecoReward Bin — contrasting treatment */}
      <section className="on-light bg-moss text-ink" aria-labelledby="eco-title">
        <div className="wrap grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <p className="font-mono text-xs">Sustainability concept</p>
            <h2 id="eco-title" className="mt-4 text-huge font-extrabold">Recycle, Redeem, Repeat.</h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed">
              Recycling is easy to skip when nothing about it feels rewarding. ecoReward Bin is a concept that pairs barcode-based plastic-bottle identification with digital incentives such as cashback, coupons, offers and reward points, to make the habit more engaging.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-ink px-2.5 py-1 font-mono text-xs">Status: {eco.status}. Not deployed.</div>
            <div className="mt-8">
              <Link to={eco.href} className="inline-flex min-h-12 items-center gap-2 bg-ink px-6 py-3 font-semibold text-paper hover:bg-violet-deep">
                Read the product story <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <Reveal className="md:col-span-7">
            <Link to={eco.href} aria-label="ecoReward Bin project page" className="block">
              <EcoRewardVisual label={eco.imageAlt} className="aspect-[5/4] w-full" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* How we think */}
      <section aria-labelledby="think-title">
        <div className="wrap py-20 md:py-28">
          <h2 id="think-title" className="text-huge max-w-4xl font-semibold">How we think about building things.</h2>
          <p className="meta mt-4">Our own working principles, not outside claims.</p>
          <ul className="mt-14 grid gap-px bg-line md:grid-cols-2">
            {principles.map((p) => (
              <li key={p.t} className="bg-ink py-8 md:px-8 md:first:pl-0 md:odd:pl-0">
                <h3 className="text-big font-semibold">{p.t}</h3>
                <p className="prose-ed mt-3">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Portfolio index */}
      <section className="rule" aria-labelledby="portfolio-title">
        <div className="wrap py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="portfolio-title" className="text-huge font-semibold">The evolving portfolio</h2>
            <Link to="/projects" className="font-semibold underline underline-offset-8 hover:text-violet">All projects</Link>
          </div>
          <ul className="mt-12">
            {projects.map((p, i) => (
              <li key={p.id} className="rule">
                <Link to={p.href} className="group grid items-baseline gap-2 py-7 md:grid-cols-12 md:gap-6">
                  <span className="meta md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-big font-semibold group-hover:text-violet md:col-span-5">{p.name}</span>
                  <span className="text-mute md:col-span-4">{p.category}</span>
                  <span className="md:col-span-2 md:justify-self-end"><StatusBadge status={p.status} /></span>
                </Link>
              </li>
            ))}
            <li className="rule border-b border-line py-7 text-mute">
              The lab is evolving. New products and experiments will be added here as they become real.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="rule bg-surface" aria-labelledby="cta-title">
        <div className="wrap py-24 text-left md:py-32">
          <h2 id="cta-title" className="text-mega max-w-5xl font-extrabold">Curious about what we're building?</h2>
          <p className="prose-ed mt-8">Follow the projects, tell us what interests you, or start a conversation about genuine collaboration.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/projects">Explore our projects</ButtonLink>
            <ButtonLink to="/contact" variant="ghost">Get in touch</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
