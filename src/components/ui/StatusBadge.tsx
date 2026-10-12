import { CircleDashed, Hammer, FlaskConical, CheckCircle2 } from "lucide-react";
import type { ProjectStatus } from "@/data/projects";

const map = {
  "In Development": { Icon: Hammer, cls: "border-violet text-violet" },
  Concept: { Icon: CircleDashed, cls: "border-moss text-moss" },
  Prototype: { Icon: FlaskConical, cls: "border-paper/50 text-paper" },
  Available: { Icon: CheckCircle2, cls: "border-paper text-paper" },
} as const;

/** Status is always shown as icon + text, never colour alone. */
export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { Icon, cls } = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-xs ${cls}`}>
      <Icon aria-hidden className="h-3.5 w-3.5" />
      <span className="sr-only">Status: </span>
      {status}
    </span>
  );
}
