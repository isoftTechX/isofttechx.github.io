import { Link } from "react-router-dom";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label="isoftTechX — home" className={`font-display text-2xl font-extrabold tracking-tighter ${className}`}>
      isoft<span className="text-violet">Tech</span>X
    </Link>
  );
}
