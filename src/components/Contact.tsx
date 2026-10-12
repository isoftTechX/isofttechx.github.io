import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { site } from "@/data/content";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact() {
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
    else if (!emailRe.test(v("email"))) next.email = "Enter a valid email address, like name@example.com.";
    if (v("message").length < 10) next.message = "Write at least 10 characters so we know what you're asking.";
    setErrors(next);
    if (Object.keys(next).length) {
      requestAnimationFrame(() => form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
      return;
    }
    if (!site.contactEndpoint) { setStatus("unconfigured"); return; }
    setStatus("sending");
    try {
      const res = await fetch(site.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: v("name"), email: v("email"), message: v("message") }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "mt-2 block min-h-12 w-full border bg-surface px-4 py-3 text-paper";
  const border = (k: keyof Errors) => (errors[k] ? "border-[#FF8A8A]" : "border-line");
  const Err = ({ id, k }: { id: string; k: keyof Errors }) =>
    errors[k] ? <p id={id} className="mt-2 text-sm text-[#FF9A9A]">Error: {errors[k]}</p> : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="rule">
      <div className="wrap grid gap-14 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="label">get in touch</p>
          <h2 id="contact-title" className="mt-5 text-huge font-extrabold">have an idea worth exploring?</h2>
          <p className="copy mt-6">We're interested in thoughtful conversations about technology, product ideas, and meaningful collaboration.</p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          {status === "sent" ? (
            <div role="status" className="border border-violet p-8">
              <p className="text-3xl font-semibold">Message sent.</p>
              <p className="copy mt-3">Thanks for writing. We'll reply to the address you gave.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="name" className="font-medium">name</label>
                <input id="name" name="name" autoComplete="name" required aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={`${field} ${border("name")}`} />
                <Err id="name-err" k="name" />
              </div>
              <div>
                <label htmlFor="email" className="font-medium">email</label>
                <input id="email" name="email" type="email" autoComplete="email" required aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} className={`${field} ${border("email")}`} />
                <Err id="email-err" k="email" />
              </div>
              <div>
                <label htmlFor="message" className="font-medium">message</label>
                <textarea id="message" name="message" rows={6} required aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} className={`${field} ${border("message")}`} />
                <Err id="message-err" k="message" />
              </div>
              <div role="status" aria-live="polite">
                {status === "unconfigured" && (
                  <p className="border border-moss p-4 text-moss">Message not sent. Delivery isn't set up on this site yet, so nothing was transmitted. The site owner needs to configure a contact endpoint.</p>
                )}
                {status === "error" && <p className="border border-[#FF8A8A] p-4 text-[#FF9A9A]">Error: the message couldn't be sent. Check your connection and try again.</p>}
              </div>
              <button type="submit" disabled={status === "sending"}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-paper px-6 py-3 font-semibold text-ink transition-colors hover:bg-violet-soft disabled:cursor-not-allowed disabled:opacity-60">
                {status === "sending" && <Loader2 aria-hidden className="h-4 w-4 animate-spin" />}
                {status === "sending" ? "sending…" : "send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
