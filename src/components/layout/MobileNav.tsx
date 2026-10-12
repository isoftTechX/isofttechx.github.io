import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { navItems } from "@/data/navigation";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const panel = ref.current!;
    const focusables = () => Array.from(panel.querySelectorAll<HTMLElement>("a, button"));
    focusables()[0]?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const f = focusables();
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div ref={ref} role="dialog" aria-modal="true" aria-label="Site menu" className="fixed inset-0 z-[60] flex flex-col bg-ink px-5 py-4 md:hidden">
      <div className="flex justify-end">
        <button type="button" onClick={onClose} aria-label="Close menu" className="grid h-12 w-12 place-items-center border border-line"><X aria-hidden /></button>
      </div>
      <nav aria-label="Mobile" className="mt-10 flex flex-1 flex-col gap-2">
        {navItems.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.to === "/"} onClick={onClose}
            className={({ isActive }) => `border-b border-line py-4 font-display text-4xl font-semibold ${isActive ? "text-violet" : ""}`}>
            {n.label}
          </NavLink>
        ))}
      </nav>
      <p className="meta pb-4">Independent technology venture, since 2021</p>
    </div>
  );
}
