import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

const topics = [
  { value: "general", label: "General inquiry" },
  { value: "mayave", label: "MayaVE" },
  { value: "ecoreward", label: "ecoReward Bin" },
  { value: "collaboration", label: "Collaboration" },
  { value: "other", label: "Other" },
];

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;
type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  useSeo({
    title: "Contact — isoftTechX",
    description: "Get in touch with isoftTechX about our products, collaboration, or technical discussions.",
    path: "/contact",
  });
  const [params] = useSearchParams();
  const initial = topics.some((t) => t.value === params.get("topic")) ? params.get("topic")! : "general";
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("name")) next.name = "Enter your name.";
    if (!v("email")) next.email = "Enter your email address.";
    else if (!emailRe.test(v("email"))) next.email = "Enter a valid email, like name@isofttechx.github.io.";
    if (v("message").length < 10) next.message = "Write at least 10 characters so we know what you're asking.";
    if (!fd.get("consent")) next.consent = "Please confirm you're happy for us to use your details to reply.";
    setErrors(next);
    if (Object.keys(next).length) {
      (form.querySelector("[aria-invalid='true']") as HTMLElement | null)?.focus();
      return;
    }
    if (v("company")) { setStatus("sent"); return; } // honeypot: silently drop bots
    if (!site.contactEndpoint) { setStatus("unconfigured"); return; }

    setStatus("sending");
    try {
      const res = await fetch(site.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: v("name"), email: v("email"), topic: v("topic"), subject: v("subject"), message: v("message") }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "mt-2 block min-h-12 w-full border bg-surface px-4 py-3 text-paper placeholder:text-mute/70";
  const border = (k: keyof Errors) => (errors[k] ? "border-[#FF8A8A]" : "border-line");
  const Err = ({ id, k }: { id: string; k: keyof Errors }) =>
    errors[k] ? <p id={id} className="mt-2 text-sm text-[#FF9A9A]">Error: {errors[k]}</p> : null;

  return (
    <div className="wrap grid gap-14 pb-24 pt-12 md:grid-cols-12 md:pt-20">
      <div className="md:col-span-5">
        <p className="meta mb-6">Contact</p>
        <h1 className="text-huge font-extrabold">Say hello.</h1>
        <p className="prose-ed mt-6">Questions about MayaVE or ecoReward Bin, ideas for collaboration, or technical conversations are welcome. We don't take custom development work.</p>
        {site.contactEmail && <p className="mt-6">Or email <a className="underline underline-offset-4 hover:text-violet" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>}
      </div>

      <div className="md:col-span-7">
        {status === "sent" ? (
          <div role="status" className="border border-violet p-8">
            <h2 className="font-display text-3xl font-semibold">Message sent.</h2>
            <p className="prose-ed mt-3">Thanks for writing. We'll reply to the email address you gave.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby="form-status">
            {/* Honeypot: hidden from people, visible to naive bots */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label>Company<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
            </div>

            <div>
              <label htmlFor="name" className="font-medium">Name</label>
              <input id="name" name="name" autoComplete="name" required aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={`${field} ${border("name")}`} />
              <Err id="name-err" k="name" />
            </div>
            <div>
              <label htmlFor="email" className="font-medium">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} className={`${field} ${border("email")}`} />
              <Err id="email-err" k="email" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="topic" className="font-medium">What's it about?</label>
                <select id="topic" name="topic" defaultValue={initial} className={`${field} border-line`}>
                  {topics.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="subject" className="font-medium">Subject <span className="text-mute">(optional)</span></label>
                <input id="subject" name="subject" className={`${field} border-line`} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="font-medium">Message</label>
              <textarea id="message" name="message" rows={6} required aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} className={`${field} ${border("message")}`} />
              <Err id="message-err" k="message" />
            </div>
            <div>
              <label className="flex items-start gap-3">
                <input type="checkbox" name="consent" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-err" : undefined} className="mt-1 h-5 w-5 accent-violet" />
                <span className="text-mute">I agree that isoftTechX may use my name and email only to reply to this message.</span>
              </label>
              <Err id="consent-err" k="consent" />
            </div>

            <div id="form-status" role="status" aria-live="polite">
              {status === "unconfigured" && (
                <p className="border border-moss p-4 text-moss">
                  Message not sent. Form submissions aren't enabled on this site yet.
                  {site.contactEmail ? <> Please email <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> instead.</> : " Please try again later."}
                </p>
              )}
              {status === "error" && <p className="border border-[#FF8A8A] p-4 text-[#FF9A9A]">Error: the message couldn't be sent. Check your connection and try again.</p>}
            </div>

            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" && <Loader2 aria-hidden className="h-4 w-4 animate-spin" />}
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
