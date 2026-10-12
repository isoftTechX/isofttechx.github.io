import { useSeo } from "@/hooks/useSeo";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  useSeo({ title: "Page not found — isoftTechX", description: "This page doesn't exist.", path: "/404", noindex: true });
  return (
    <div className="wrap py-28">
      <p className="meta">Error 404</p>
      <h1 className="text-mega mt-4 font-extrabold">That page isn't here.</h1>
      <p className="prose-ed mt-6">The link may be old or mistyped. Try the project index or head back home.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink to="/">Go home</ButtonLink>
        <ButtonLink to="/projects" variant="ghost">View projects</ButtonLink>
      </div>
    </div>
  );
}
