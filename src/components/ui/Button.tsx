import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "ghost" | "moss";
const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200";
const variants: Record<Variant, string> = {
  primary: "bg-paper text-ink hover:bg-violet",
  moss: "bg-moss text-ink hover:bg-paper",
  ghost: "border border-paper/30 text-paper hover:border-violet hover:text-violet",
};

interface LinkProps { to: string; variant?: Variant; children: ReactNode; className?: string; arrow?: boolean }

export function ButtonLink({ to, variant = "primary", children, className = "", arrow = true }: LinkProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow && <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button {...rest} className={`${base} ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`} />;
}
