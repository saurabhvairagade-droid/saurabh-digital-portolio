import { Code2, Target, PhoneCall } from "lucide-react";
import { RevealWrapper } from "@/components/RevealWrapper";

const services = [
  {
    icon: Code2,
    title: "Custom React Website",
    desc: "Fast, mobile-responsive websites built with React + Vite + Tailwind CSS. Deployed free on Netlify. You own every file. No Wix. No monthly fees.",
    price: "From $100",
    href: "https://saurabhv-portfolio.lemonsqueezy.com/checkout/buy/4c100d83-7381-45e9-96f4-c681d194cf53",
  },
  {
    icon: Target,
    title: "Lead Generation Landing Page",
    desc: "High-converting landing pages wired to send every lead directly to your inbox via Netlify Forms. Perfect for Google and Facebook ad campaigns.",
    price: "From $100",
    href: "https://saurabhv-portfolio.lemonsqueezy.com/checkout/buy/7e97c11d-5665-4a49-a1c4-21c58e6ae01d",
  },
  {
    icon: PhoneCall,
    title: "AI Voice Receptionist",
    desc: "Custom AI agent built on Retell AI that answers calls, books appointments, reschedules and cancels 24/7. Never miss a lead again.",
    price: "From $150",
    href: "https://saurabhv-portfolio.lemonsqueezy.com/checkout/buy/e57952a8-2108-461a-9c28-0c56eb723e4b",
  },
];

export default function ServicesClient() {
  return (
    <RevealWrapper className="mx-auto max-w-7xl px-6 pt-40 pb-24">
      <div className="text-center max-w-2xl mx-auto reveal">
        <div className="text-sm text-primary uppercase tracking-widest mb-3">Services</div>
        <h1 className="text-4xl md:text-5xl font-bold">What I Build For You</h1>
        <p className="mt-4 text-muted-foreground">
          Three core offerings. Honest pricing. Premium delivery.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="reveal group rounded-2xl border border-border bg-surface p-8 card-shadow transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={24} />
            </div>
            <h2 className="text-xl font-bold">{s.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <div className="mt-6 text-2xl font-bold text-gradient-blue">{s.price}</div>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>

      <div className="reveal mt-16 rounded-2xl border-2 border-accent/40 bg-accent/10 p-8 md:p-10 text-center">
        <p className="text-lg md:text-xl text-foreground">
          Every React website I build comes with{" "}
          <span className="text-accent font-semibold">free Netlify hosting</span>. Your only ongoing
          cost is your domain — <span className="font-semibold">$15 to $20 per year</span>. That is it.
        </p>
      </div>
    </RevealWrapper>
  );
}
