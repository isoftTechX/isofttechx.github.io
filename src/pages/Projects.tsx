import { useMemo, useState } from "react";
import { useSeo } from "@/hooks/useSeo";
import { categories, projects, type ProjectCategory } from "@/data/projects";
import { ProjectRow } from "@/components/ui/ProjectCard";

export default function Projects() {
  useSeo({
    title: "Projects — isoftTechX",
    description: "Original products and experiments from isoftTechX: MayaVE, a local-first AI assistant, and ecoReward Bin, a smart recycling concept.",
    path: "/projects",
  });
  const [cat, setCat] = useState<ProjectCategory | "All">("All");
  const shown = useMemo(() => (cat === "All" ? projects : projects.filter((p) => p.category === cat)), [cat]);

  return (
    <div className="wrap pb-10 pt-12 md:pt-20">
      <p className="meta mb-6">Index of original work</p>
      <h1 className="text-mega max-w-5xl font-extrabold">Things we're building.</h1>
      <p className="prose-ed mt-8">Every entry is a product or experiment of our own, with its real development status shown. Nothing here is for hire.</p>

      {categories.length > 1 && (
        <div role="group" aria-label="Filter projects by category" className="mt-12 flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
              className={`min-h-11 border px-4 py-2 text-sm font-medium ${cat === c ? "border-paper bg-paper text-ink" : "border-line hover:border-violet"}`}>
              {c}
            </button>
          ))}
        </div>
      )}
      <p className="meta mt-4" role="status" aria-live="polite">Showing {shown.length} of {projects.length} projects</p>

      <div className="mt-10">
        {shown.map((p, i) => <ProjectRow key={p.id} project={p} index={i} flip={i % 2 === 1} />)}
        <div className="rule py-12 text-mute">The lab is evolving. Future experiments will appear here once they exist.</div>
      </div>
    </div>
  );
}
