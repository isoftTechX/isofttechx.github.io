import { useSeo } from "@/hooks/useSeo";
import { getProject, type CapabilityState } from "@/data/projects";
import { MayaVisual } from "@/components/visual/MayaVisual";
import { ArchitectureDiagram } from "@/components/visual/ArchitectureDiagram";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/data/site";

const stateOrder: CapabilityState[] = ["Implemented", "Under development", "Planned", "Vision"];

const timeline = [
  { v: "Jarvis", d: "The first personal-assistant iteration of the idea." },
  { v: "Jessica", d: "A later iteration, now retired as the public identity." },
  { v: "Maya, VE10", d: "Maya becomes the assistant's identity within the EVE project." },
  { v: "Maya, VE11", d: "The latest version in the development lineage." },
];

export default function MayaVE() {
  const p = getProject("mayave")!;
  useSeo({
    title: p.seoTitle,
    description: p.seoDescription,
    path: p.href,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Projects", item: `${site.url}/projects` },
        { "@type": "ListItem", position: 2, name: "MayaVE", item: `${site.url}${p.href}` },
      ],
    },
  });

  return (
    <>
      <section className="relative overflow-hidden" aria-labelledby="maya-h1">
        <MayaVisual label={p.imageAlt} caption={false} className="absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" aria-hidden />
        <div className="wrap relative flex min-h-[78vh] flex-col justify-end pb-14 pt-32">
          <p className="meta mb-5">{p.tagline} · Evolving Virtual Entity</p>
          <h1 id="maya-h1" className="text-mega font-extrabold">Maya.</h1>
          <p className="mt-6 max-w-2xl font-display text-big text-paper/90">A local-first voice assistant with a persistent virtual presence.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <StatusBadge status={p.status} />
            <span className="meta">Visuals on this page are conceptual renderings.</span>
          </div>
        </div>
      </section>

      <section className="rule" aria-labelledby="intro">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <h2 id="intro" className="text-big font-semibold md:col-span-5">Maya is the assistant. EVE is the project.</h2>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            <p className="prose-ed">EVE stands for <strong>Evolving Virtual Entity</strong>: the long-running project behind our personal AI assistant. Maya is its current identity, the latest evolution after earlier versions named Jarvis and Jessica.</p>
            <p className="prose-ed">Maya is a Windows desktop voice assistant inspired by the futuristic assistants of fiction. It aims for natural conversation, contextual understanding, and a presence you can see: a live 3D VRM avatar.</p>
          </div>
        </div>
      </section>

      <section className="rule bg-surface" aria-labelledby="local">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <h2 id="local" className="text-big font-semibold md:col-span-5">Local-first, honestly described.</h2>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            <p className="prose-ed">Maya is designed so that the heavy parts, the language model, memory, intent handling and voice synthesis, run on your own machine. That keeps conversations close to home and makes the system hackable.</p>
            <p className="prose-ed"><strong>It is not fully offline today.</strong> Speech recognition currently uses Google Speech Recognition, which needs an internet connection. Moving that step local is a goal, not a finished feature.</p>
          </div>
        </div>
      </section>

      <section className="rule" aria-labelledby="caps">
        <div className="wrap py-20 md:py-28">
          <h2 id="caps" className="text-huge max-w-4xl font-semibold">What exists, and what doesn't yet.</h2>
          <p className="prose-ed mt-4">Every capability carries a status label so the line between built and imagined stays visible.</p>
          <div className="mt-12 space-y-12">
            {stateOrder.map((state) => {
              const items = p.capabilities.filter((c) => c.state === state);
              if (!items.length) return null;
              return (
                <div key={state} className="grid gap-6 md:grid-cols-12">
                  <h3 className="meta md:col-span-3">{state}</h3>
                  <ul className="md:col-span-9">
                    {items.map((c) => (
                      <li key={c.label} className="rule grid gap-1 py-4 md:grid-cols-2 md:gap-8">
                        <span className="font-display text-xl font-semibold">{c.label}</span>
                        <span className="text-mute">{c.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rule bg-surface" aria-labelledby="arch">
        <div className="wrap py-20 md:py-28">
          <h2 id="arch" className="text-huge max-w-4xl font-semibold">How a spoken request travels.</h2>
          <p className="prose-ed mt-4 mb-10">Select a stage to read what it does. One stage currently needs the internet.</p>
          <ArchitectureDiagram />
          <p className="mt-6 text-sm text-mute">Technologies: {p.technologies.join(", ")}.</p>
        </div>
      </section>

      <section className="rule" aria-labelledby="avatar">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <h2 id="avatar" className="text-big font-semibold md:col-span-5">A presence, not just a voice.</h2>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            <p className="prose-ed">Maya's avatar frontend is built with Three.js and @pixiv/three-vrm and talks to the Python backend over WebSocket. The idea is that speech, expression and context belong together on screen.</p>
            <p className="prose-ed">We haven't published a final avatar, screenshots or a demo. When we do, they'll appear here. This site has no chat window, because it isn't connected to Maya.</p>
          </div>
        </div>
      </section>

      <section className="rule bg-surface" aria-labelledby="tl">
        <div className="wrap py-20 md:py-28">
          <h2 id="tl" className="text-huge font-semibold">Evolution</h2>
          <ol className="mt-12 grid gap-px bg-line md:grid-cols-4">
            {timeline.map((t, i) => (
              <li key={t.v} className="bg-surface py-6 md:pr-6">
                <p className="meta">Stage {i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{t.v}</h3>
                <p className="mt-2 text-mute">{t.d}</p>
              </li>
            ))}
          </ol>
          <p className="meta mt-4">Release dates aren't published. VE numbers are internal version labels.</p>
        </div>
      </section>

      <section className="rule" aria-labelledby="limits">
        <div className="wrap grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h2 id="limits" className="text-big font-semibold">Limitations and status</h2>
            <ul className="mt-8 space-y-4">{p.limitations.map((l) => <li key={l} className="rule pt-4 text-mute">{l}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-big font-semibold">Where it may go</h2>
            <p className="meta mt-2">Planned or aspirational, not promised.</p>
            <ul className="mt-6 space-y-4">{p.futurePlans.map((l) => <li key={l} className="rule pt-4 text-mute">{l}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="rule bg-surface">
        <div className="wrap py-24">
          <h2 className="text-huge max-w-3xl font-semibold">Want to follow Maya's progress?</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/contact?topic=mayave">Express interest</ButtonLink>
            <ButtonLink to="/projects/ecoreward-bin" variant="ghost">See ecoReward Bin</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
