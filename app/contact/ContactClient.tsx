"use client";

import { Github, Linkedin, Briefcase, Mail, MapPin, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export default function ContactClient() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center max-w-2xl mx-auto reveal">
        <div className="text-sm text-primary uppercase tracking-widest mb-3">Contact</div>
        <h1 className="text-4xl md:text-5xl font-bold">Let's Work Together</h1>
        <p className="mt-4 text-muted-foreground">
          Tell me about your project. As a local web designer in Pune, I reply within 24 hours.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-[1.3fr_1fr] gap-10">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="reveal rounded-2xl border border-border bg-surface p-8 space-y-5 card-shadow"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill: <input name="bot-field" />
            </label>
          </p>

          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <SelectField
            label="Service Interested In"
            name="service"
            options={["React Website", "Lead Gen Landing Page", "AI Voice Agent", "Other"]}
          />
          <SelectField
            label="Budget Range"
            name="budget"
            options={["Under $100", "$100–$300", "$300–$500", "$500+"]}
          />
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition glow-blue"
          >
            Send Message
          </button>
        </form>

        <aside className="reveal space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-6 space-y-4 card-shadow">
            <Detail icon={Mail} label="Email" value="saurabh.vairagade@gmail.com" />
            <Detail icon={MapPin} label="Location" value="Pune, Maharashtra, India (Serving Globally)" />
            <Detail icon={Clock} label="Response time" value="Within 24 hours" />
          </div>

          <div className="flex gap-3">
            <SocialIcon href="https://github.com" icon={Github} label="GitHub" />
            <SocialIcon href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
            <SocialIcon href="https://www.upwork.com/freelancers/~01af1d092d3c9914ab?mp_source=share" icon={Briefcase} label="Upwork" />
          </div>

          <div className="rounded-2xl border-2 border-accent/40 bg-accent/10 p-6">
            <p className="text-foreground font-semibold">
              Prefer to talk? Book a free 15-minute discovery call
            </p>
            <a
              href="https://calendly.com/saurabh-vairagade/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition"
            >
              Book a Call
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        name={name}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Detail({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-lg border border-border bg-surface flex items-center justify-center hover:border-primary hover:text-primary transition"
    >
      <Icon size={18} />
    </a>
  );
}
