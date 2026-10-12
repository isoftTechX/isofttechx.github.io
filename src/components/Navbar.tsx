import { useEffect, useState } from "react";
import { navItems } from "@/data/content";
import logo from "@/img/logo_white.png";

const navIds = navItems.map((n) => n.id);

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const on = () => {
      const line = window.innerHeight * 0.35;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [ids]);
  return active;
}

export function Wordmark({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      aria-label="isoftTechX — back to top"
      className={`inline-flex items-center transition-opacity hover:opacity-85 ${className}`}
    >
      <img
        src={logo}
        alt="isoftTechX home"
        className="block h-[1.5rem] w-auto object-contain"
        width={105}
        height={24}
      />
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navIds);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-line bg-ink/90 backdrop-blur" : "border-transparent bg-ink"}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? "location" : undefined}
              className={`inline-flex items-center py-2 text-[0.95rem] font-medium underline-offset-8 hover:text-violet-soft ${active === n.id ? "text-violet-soft underline decoration-2" : "text-paper"}`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
