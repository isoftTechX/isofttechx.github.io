import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/content";

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

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" aria-label="isoftTechX — back to top" className={`text-xl font-extrabold tracking-tighter ${className}`}>
      isoft<span className="text-violet-soft">Tech</span>X
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navIds);
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const p = panel.current!;
    const focusables = () => Array.from(p.querySelectorAll<HTMLElement>("a, button"));
    focusables()[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        restoreFocusRef.current = true;
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const f = focusables();
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };

    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      restoreFocusRef.current = false;
      setOpen(false);
    };
    mq.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", onKey);
    const btn = toggle.current;

    return () => {
      mq.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (restoreFocusRef.current) {
        restoreFocusRef.current = false;
        btn?.focus();
      }
    };
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-line bg-ink/90 backdrop-blur" : "border-transparent bg-ink"}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "location" : undefined}
              className={`py-2 text-[0.95rem] font-medium underline-offset-8 hover:text-violet-soft ${active === n.id ? "text-violet-soft underline decoration-2" : "text-paper"}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <button ref={toggle} type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-haspopup="dialog" aria-expanded={open}
          className="grid h-12 w-12 place-items-center border border-line hover:border-violet md:hidden">
          <Menu aria-hidden />
        </button>
      </div>
      {open && (
        <div ref={panel} role="dialog" aria-modal="true" aria-label="Site menu" className="fixed inset-0 z-[60] flex flex-col bg-ink px-5 py-3 md:hidden">
          <div className="flex h-16 items-center justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={() => {
                restoreFocusRef.current = true;
                setOpen(false);
              }}
              aria-label="Close menu"
              className="grid h-12 w-12 place-items-center border border-line hover:border-violet"
            >
              <X aria-hidden />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-8 flex flex-col">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => {
                  restoreFocusRef.current = false;
                  setOpen(false);
                }}
                aria-current={active === n.id ? "location" : undefined}
                className={`border-b border-line py-5 text-4xl font-semibold tracking-tight ${active === n.id ? "text-violet-soft" : ""}`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
