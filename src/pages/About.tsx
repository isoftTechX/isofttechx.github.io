import { useSeo } from "@/hooks/useSeo";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";

export default function About() {
  useSeo({
    title: "About — isoftTechX",
    description: "isoftTechX is an independent, product-focused technology venture started in 2021, building original AI and technology products.",
    path: "/about",
  });
  return (
    <>
      <section className="wrap pb-16 pt-12 md:pt-20">
        <p className="meta mb-6">About</p>
        <h1 className="text-mega max-w-5xl font-extrabold">A small venture with a long list of ideas.</h1>
      </section>

      <section className="rule" aria-labelledby="why">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <h2 id="why" className="text-big font-semibold md:col-span-5">Why isoftTechX exists</h2>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            <p className="prose-ed">isoftTechX is a product-focused technology venture. We build our own software and technology initiatives, with a strong interest in artificial intelligence, machine learning, deep learning and practical engineering.</p>
            <p className="prose-ed">We want to make technology that people can use, aimed at everyday challenges and at new possibilities. We are not a custom software agency and we don't take client development work.</p>
          </div>
        </div>
      </section>

      <section id="philosophy" className="rule bg-surface" aria-labelledby="phil">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <h2 id="phil" className="text-big font-semibold md:col-span-5">Philosophy</h2>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            <p className="font-display text-big">Technology should be more than code.</p>
            <p className="prose-ed">It should solve problems, enable new experiences and improve how people interact with the world. That is a direction we work toward, not a finished achievement.</p>
          </div>
        </div>
      </section>

      <section className="rule" aria-labelledby="story">
        <div className="wrap py-20 md:py-28">
          <h2 id="story" className="text-huge font-semibold">The story so far</h2>
          <ol className="mt-12 grid gap-px bg-line md:grid-cols-3">
            <li className="bg-ink py-6 md:pr-6">
              <p className="meta">{site.founded}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">Started</h3>
              <p className="mt-2 text-mute">The founder starts isoftTechX, driven by an interest in programming, AI, technology and entrepreneurship.</p>
            </li>
            <li className="bg-ink py-6 md:px-6">
              <p className="meta">Ongoing</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">Maya and the EVE project</h3>
              <p className="mt-2 text-mute">A personal AI assistant that has gone through several iterations and is now Maya.</p>
            </li>
            <li className="bg-ink py-6 md:pl-6">
              <p className="meta">Concept</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">ecoReward Bin</h3>
              <p className="mt-2 text-mute">A sustainability idea that rewards recycling, currently at concept stage.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="rule bg-surface" aria-labelledby="founder">
        <div className="wrap py-20 md:py-28">
          <h2 id="founder" className="text-big font-semibold">Founder</h2>
          {site.founder ? (
            <div className="mt-8 max-w-2xl">
              <p className="font-display text-2xl font-semibold">{site.founder.name}</p>
              <p className="meta mt-1">{site.founder.role}</p>
              <p className="prose-ed mt-4">{site.founder.bio}</p>
            </div>
          ) : (
            <p className="prose-ed mt-6">isoftTechX was started in {site.founded} by its founder. Full founder details will be added here when supplied.</p>
          )}
        </div>
      </section>

      <section className="rule">
        <div className="wrap py-24">
          <h2 className="text-huge max-w-3xl font-semibold">See the work, or say hello.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/projects">Explore our projects</ButtonLink>
            <ButtonLink to="/contact" variant="ghost">Get in touch</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
