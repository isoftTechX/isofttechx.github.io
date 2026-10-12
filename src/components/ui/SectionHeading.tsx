import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  children,
  as: Tag = "h2",
  className = "",
}: {
  kicker?: string;
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={className}>
      {kicker && <p className="meta mb-4">{kicker}</p>}
      <Tag className="text-huge font-semibold">{children}</Tag>
    </div>
  );
}
