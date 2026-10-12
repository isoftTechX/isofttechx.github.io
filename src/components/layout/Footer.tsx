import { Link } from "react-router-dom";
import { navItems } from "@/data/navigation";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="rule mt-24 bg-surface">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark />
          <p className="mt-5 max-w-sm text-mute">
            An independent technology venture building original products in AI and emerging technology. Started in {site.founded}.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="meta mb-4">Site</p>
          <ul className="space-y-2">{navItems.map((n) => <li key={n.to}><Link className="hover:text-violet" to={n.to}>{n.label}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Projects" className="md:col-span-2">
          <p className="meta mb-4">Projects</p>
          <ul className="space-y-2">{projects.map((p) => <li key={p.id}><Link className="hover:text-violet" to={p.href}>{p.name}</Link></li>)}</ul>
        </nav>
        <div className="md:col-span-2">
          <p className="meta mb-4">Elsewhere</p>
          <ul className="space-y-2">
            {site.contactEmail && <li><a className="hover:text-violet" href={`mailto:${site.contactEmail}`}>Email</a></li>}
            {site.socials.map((s) => <li key={s.label}><a className="hover:text-violet" href={s.href} rel="noopener noreferrer" target="_blank">{s.label}</a></li>)}
            {!site.contactEmail && site.socials.length === 0 && <li><Link className="hover:text-violet" to="/contact">Contact form</Link></li>}
          </ul>
        </div>
      </div>
      <div className="rule"><p className="wrap meta py-5">© {new Date().getFullYear()} isoftTechX. All rights reserved.</p></div>
    </footer>
  );
}
