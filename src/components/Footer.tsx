import { navItems } from "@/data/content";
import { Wordmark } from "./Navbar";

export function Footer() {
  return (
    <footer className="rule bg-surface">
      <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Wordmark />
          <p className="mt-3 text-mute">independent thinking. original technology.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-6">
            {navItems.map((n) => <li key={n.id}><a className="inline-block py-2 hover:text-violet-soft" href={`#${n.id}`}>{n.label}</a></li>)}
          </ul>
        </nav>
      </div>
      <div className="rule"><p className="wrap py-5 text-sm text-mute">© {new Date().getFullYear()} isoftTechX. all rights reserved.</p></div>
    </footer>
  );
}
