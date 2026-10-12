import { useRef, type PointerEvent } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** The brand motif: an "evolving loop" of concentric, broken rings. Used in the hero, MayaVE and diagrams. */
export function Rings({ animate = true, stroke = "#9B7BFF" }: { animate?: boolean; stroke?: string }) {
  const spin = (d: number, rev = false) => (animate ? { className: `ring-spin ${rev ? "rev" : ""}`, style: { ["--d" as string]: `${d}s` } } : {});
  return (
    <g fill="none" stroke={stroke} strokeLinecap="round">
      <circle cx="200" cy="200" r="190" strokeOpacity=".18" />
      <g {...spin(90)}><circle cx="200" cy="200" r="168" strokeWidth="1.5" strokeDasharray="340 716" strokeOpacity=".9" /></g>
      <g {...spin(60, true)}><circle cx="200" cy="200" r="138" strokeWidth="1" strokeDasharray="4 10" strokeOpacity=".6" /></g>
      <g {...spin(45)}><circle cx="200" cy="200" r="108" strokeWidth="3" strokeDasharray="220 460" /></g>
      <g {...spin(30, true)}><circle cx="200" cy="200" r="78" strokeWidth="1.5" strokeDasharray="90 400" strokeOpacity=".8" /></g>
      <circle cx="200" cy="200" r="44" strokeOpacity=".35" />
    </g>
  );
}

export function HeroVisual({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const core = useRef<SVGGElement>(null);
  const frame = useRef(0);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      core.current?.setAttribute("transform", `translate(${(x * 18).toFixed(1)} ${(y * 18).toFixed(1)})`);
    });
  };
  const onLeave = () => core.current?.setAttribute("transform", "translate(0 0)");

  return (
    <div onPointerMove={onMove} onPointerLeave={onLeave} className={className}>
      <svg viewBox="0 0 400 400" role="img" aria-label="Abstract concentric rings representing an evolving intelligence core. Decorative; moves slightly with the pointer." className="h-full w-full">
        <Rings animate={!reduced} />
        <g ref={core} style={{ transition: "transform .25s ease-out" }}>
          <circle cx="200" cy="200" r="18" fill="#F2F0EC" />
          <circle cx="200" cy="200" r="30" fill="none" stroke="#C8F264" strokeWidth="1.5" strokeDasharray="2 7" />
        </g>
      </svg>
    </div>
  );
}
