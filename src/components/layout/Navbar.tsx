import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { navItems } from "@/data/navigation";
import { Wordmark } from "./Wordmark";
import { MobileNav } from "./MobileNav";
import { ButtonLink } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-line bg-ink/90 backdrop-blur" : "border-transparent bg-ink"}`}>
      <div className={`wrap flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-20"}`}>
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"}
              className={({ isActive }) => `py-2 text-[0.95rem] font-medium underline-offset-8 hover:text-violet ${isActive ? "text-violet underline decoration-2" : "text-paper"}`}>
              {n.label}
            </NavLink>
          ))}
          <ButtonLink to="/projects" className="!min-h-10 !px-4 !py-2">Explore our work</ButtonLink>
        </nav>
        <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-haspopup="dialog" aria-expanded={open}
          className="grid h-12 w-12 place-items-center border border-line md:hidden"><Menu aria-hidden /></button>
      </div>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
