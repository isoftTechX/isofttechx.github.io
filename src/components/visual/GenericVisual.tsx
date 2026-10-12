export function GenericVisual({ className = "", label }: { className?: string; label: string }) {
  return (
    <div className={`bg-surface ${className}`}>
      <svg viewBox="0 0 400 300" role="img" aria-label={label} className="h-full w-full">
        <rect x="40" y="40" width="320" height="220" fill="none" stroke="#2C2C32" strokeDasharray="6 8" />
      </svg>
    </div>
  );
}
