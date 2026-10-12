import { Rings } from "./RingCore";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function MayaVisual({ className = "", label, caption = true }: { className?: string; label: string; caption?: boolean }) {
  const reduced = useReducedMotion();
  return (
    <figure className={`relative m-0 overflow-hidden bg-[radial-gradient(ellipse_at_30%_20%,#241a4a,#0B0B0D_70%)] ${className}`}>
      <svg viewBox="0 0 400 400" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full scale-125">
        <Rings animate={!reduced} />
        {/* abstract bust silhouette built from arcs — a concept, not a product render */}
        <path d="M150 300c0-44 22-70 50-70s50 26 50 70" fill="none" stroke="#F2F0EC" strokeOpacity=".7" strokeWidth="1.5" />
        <circle cx="200" cy="190" r="26" fill="none" stroke="#F2F0EC" strokeOpacity=".9" strokeWidth="1.5" />
        <path d="M60 300h280" stroke="#9B7BFF" strokeOpacity=".4" />
      </svg>
      {caption && (
        <figcaption className="meta absolute bottom-3 left-4 bg-ink/70 px-2 py-1">Conceptual rendering, not a product screenshot</figcaption>
      )}
    </figure>
  );
}
