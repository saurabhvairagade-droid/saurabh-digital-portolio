"use client";

import { Briefcase, Mail, MapPin, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export default function ContactClient() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="mx-auto max-w-6xl px-6 pt-40 pb-24">
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
            <Detail 
              icon={WhatsappIcon} 
              label="WhatsApp" 
              value="+91 7499 0431 90" 
              href="https://wa.me/917499043190" 
              iconClass="bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
              hoverTextClass="group-hover:text-accent"
            />
            <Detail icon={Mail} label="Email" value="saurabh.vairagade@gmail.com" />
            <Detail icon={MapPin} label="Location" value="Pune, Maharashtra, India (Serving Globally)" />
            <Detail icon={Clock} label="Response time" value="Within 24 hours" />
          </div>

          <div className="flex gap-3">
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

function Detail({ icon: Icon, label, value, href, iconClass, hoverTextClass }: { icon: React.ElementType; label: string; value: string; href?: string; iconClass?: string; hoverTextClass?: string }) {
  const content = (
    <>
      <div className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 transition-colors ${iconClass || "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"}`}>
        <Icon size={16} />
      </div>
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className={`text-sm font-medium transition-colors ${hoverTextClass || "group-hover:text-primary"}`}>{value}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-3">
      {content}
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

function WhatsappIcon(props: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  const { size, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size || 24} height={size || 24} {...rest}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
