import { useSeo } from "@/hooks/useSeo";
import { getProject } from "@/data/projects";
import { EcoRewardVisual } from "@/components/visual/EcoRewardVisual";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/data/site";

const journey = [
  { t: "Identify a bottle", d: "The bin is designed to read a plastic bottle's barcode to recognise what is being recycled." },
  { t: "Take part in recycling", d: "The bottle goes into the smart bin as part of a guided, simple interaction." },
  { t: "Earn eligible rewards", d: "Where supported, the app is intended to credit cashback, coupons, offers or points." },
  { t: "Build the habit", d: "Small, visible rewards are meant to make recycling feel worth repeating." },
];

export default function EcoRewardBin() {
  const p = getProject("ecoreward-bin")!;
  useSeo({
    title: p.seoTitle,
    description: p.seoDescription,
    path: p.href,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Projects", item: `${site.url}/projects` },
        { "@type": "ListItem", position: 2, name: "ecoReward Bin", item: `${site.url}${p.href}` },
      ],
    },
  });

  return (
    <>
      <section className="on-light bg-moss text-ink" aria-labelledby="eco-h1">
        <div className="wrap grid items-center gap-10 py-14 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <p className="font-mono text-xs">Sustainability concept · Status: {p.status}</p>
            <h1 id="eco-h1" className="text-mega mt-5 font-extrabold">Recycle, Redeem, Repeat.</h1>
            <p className="mt-6 max-w-[48ch] text-xl leading-relaxed">ecoReward Bin is a smart recycling concept that connects bottle identification with digital incentives.</p>
          </div>
          <EcoRewardVisual label={p.imageAlt} className="aspect-square w-full md:col-span-6" />
        </div>
      </section>

      <section className="rule" aria-labelledby="problem">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <h2 id="problem" className="text-big font-semibold md:col-span-5">Recycling asks for effort and gives nothing back.</h2>
          <div className="space-y-6 md:col-span-6 md:col-start-7">
            <p className="prose-ed">Throwing a bottle in the right bin is a small act with no feedback. The idea behind ecoReward Bin is that a little recognition, and where possible a little reward, could make the habit easier to keep.</p>
            <p className="prose-ed">We're not publishing impact numbers. There are none to report yet.</p>
          </div>
        </div>
      </section>

      <section className="rule bg-surface" aria-labelledby="journey">
        <div className="wrap py-20 md:py-28">
          <h2 id="journey" className="text-huge max-w-4xl font-semibold">The intended journey.</h2>
          <p className="prose-ed mt-4">This describes how the product is meant to work, not what is available today.</p>
          <ol className="mt-12 grid gap-px bg-line md:grid-cols-4">
            {journey.map((s, i) => (
              <li key={s.t} className="bg-surface py-6 md:pr-6">
                <p className="meta">Step {i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-mute">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rule" aria-labelledby="detail">
        <div className="wrap grid gap-12 py-20 md:grid-cols-3 md:py-28">
          <div>
            <h2 id="detail" className="text-big font-semibold">Barcode identification</h2>
            <p className="prose-ed mt-4">Barcodes give a standard way to tell which product a bottle is. The bin is designed around scanning that code.</p>
          </div>
          <div>
            <h2 className="text-big font-semibold">Digital incentives</h2>
            <p className="prose-ed mt-4">Cashback, coupons, offers and reward points are the kinds of incentives we want to explore. Which ones are possible depends on partners we haven't confirmed.</p>
          </div>
          <div>
            <h2 className="text-big font-semibold">The companion app</h2>
            <p className="prose-ed mt-4">An integrated app is intended to show what you've recycled and what you've earned. There is no app to download yet.</p>
          </div>
        </div>
      </section>

      <section className="rule bg-surface" aria-labelledby="status">
        <div className="wrap grid gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h2 id="status" className="text-big font-semibold">Current status</h2>
            <ul className="mt-8 space-y-4">{p.limitations.map((l) => <li key={l} className="rule pt-4 text-mute">{l}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-big font-semibold">Next opportunities</h2>
            <ul className="mt-8 space-y-4">{p.futurePlans.map((l) => <li key={l} className="rule pt-4 text-mute">{l}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="wrap py-24">
          <h2 className="text-huge max-w-3xl font-semibold">Interested in smarter recycling?</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/contact?topic=ecoreward">Express interest</ButtonLink>
            <ButtonLink to="/projects/mayave" variant="ghost">See MayaVE</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
