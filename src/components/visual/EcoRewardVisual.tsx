export function EcoRewardVisual({ className = "", label, caption = true }: { className?: string; label: string; caption?: boolean }) {
  const nodes = [
    { x: 200, y: 70, t: "Recycle" },
    { x: 310, y: 262, t: "Redeem" },
    { x: 90, y: 262, t: "Repeat" },
  ];
  return (
    <figure className={`relative m-0 overflow-hidden bg-moss text-ink ${className}`}>
      <svg viewBox="0 0 400 400" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#0B0B0D" />
          </marker>
        </defs>
        <g fill="none" stroke="#0B0B0D" strokeWidth="2.5" strokeLinecap="round">
          <path d="M228 84A140 140 0 0 1 300 215" markerEnd="url(#arr)" />
          <path d="M282 288Q200 330 118 288" markerEnd="url(#arr)" />
          <path d="M100 215A140 140 0 0 1 172 84" markerEnd="url(#arr)" />
          <circle cx="200" cy="200" r="150" strokeOpacity=".15" strokeWidth="1" />
        </g>
        {nodes.map((n) => (
          <g key={n.t}>
            <circle cx={n.x} cy={n.y} r="34" fill="#0B0B0D" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#C8F264" fontSize="12" fontFamily="JetBrains Mono, monospace">{n.t}</text>
          </g>
        ))}
        {/* bottle glyph */}
        <g fill="none" stroke="#0B0B0D" strokeWidth="2.5" strokeLinejoin="round">
          <path d="M192 168h16v10l8 12v50a6 6 0 0 1-6 6h-20a6 6 0 0 1-6-6v-50l8-12z" />
          <path d="M184 205h32M184 215h32" strokeWidth="1.5" strokeDasharray="2 3" />
        </g>
      </svg>
      {caption && <figcaption className="meta absolute bottom-3 left-4 bg-moss/90 px-2 py-1 !text-ink">Concept illustration of the intended journey</figcaption>}
    </figure>
  );
}
