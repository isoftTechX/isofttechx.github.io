import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { MayaVisual } from "@/components/visual/MayaVisual";
import { EcoRewardVisual } from "@/components/visual/EcoRewardVisual";
import { GenericVisual } from "@/components/visual/GenericVisual";

export function ProjectVisual({ project, className = "" }: { project: Project; className?: string }) {
  if (project.id === "mayave") return <MayaVisual className={className} label={project.imageAlt} />;
  if (project.id === "ecoreward-bin") return <EcoRewardVisual className={className} label={project.imageAlt} />;
  return <GenericVisual className={className} label={project.imageAlt} />;
}

/** Editorial index row. `flip` alternates the composition so entries aren't identical cards. */
export function ProjectRow({ project, index, flip }: { project: Project; index: number; flip?: boolean }) {
  return (
    <article className="rule py-12 md:py-20">
      <div className={`grid items-center gap-10 md:grid-cols-12 ${flip ? "" : ""}`}>
        <div className={`md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}>
          <Link to={project.href} aria-label={`${project.name} — view project`} className="block overflow-hidden bg-surface">
            <ProjectVisual project={project} className="aspect-[4/3] w-full md:aspect-[16/11]" />
          </Link>
        </div>
        <div className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}>
          <p className="meta mb-5">
            {String(index + 1).padStart(2, "0")} / {project.category}
          </p>
          <h2 className="text-huge font-semibold">
            <Link to={project.href} className="hover:text-violet">{project.name}</Link>
          </h2>
          <p className="mt-2 font-display text-xl text-mute">{project.tagline}</p>
          <p className="prose-ed mt-6">{project.shortDescription}</p>
          <div className="mt-6"><StatusBadge status={project.status} /></div>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm text-mute" aria-label="Technologies">
            {project.technologies.slice(0, 5).map((t) => <li key={t}>{t}</li>)}
          </ul>
          <Link to={project.href} className="mt-8 inline-flex min-h-12 items-center gap-2 border-b border-paper pb-1 font-semibold hover:border-violet hover:text-violet">
            Read the project story <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
