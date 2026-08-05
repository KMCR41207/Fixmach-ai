import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — FixMach AI" }, { name: "description", content: "Get in touch with the FixMach AI team for support, sales or partnership enquiries." }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Get in touch.</h1>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "hello@fixmach.ai", href: "mailto:hello@fixmach.ai" },
              { icon: Phone, label: "Phone", value: "+91 1800 XXX XXXX", href: "tel:+911800XXXXXXX" },
              { icon: MapPin, label: "Office", value: "Bengaluru, Karnataka, India", href: "#" },
            ].map((c) => (
              <div key={c.label} className="surface-card flex items-center gap-4 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">{c.label}</p>
                  <a href={c.href} className="text-sm font-semibold hover:text-primary">{c.value}</a>
                </div>
              </div>
            ))}
          </div>

          <form className="surface-card space-y-4 p-6" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-base font-semibold">Send a message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Your name" className="rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" placeholder="Email address" className="rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <input type="text" placeholder="Subject" className="w-full rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            <textarea rows={4} placeholder="Your message…" className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            <button type="submit" className="rounded-xl bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Send message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
