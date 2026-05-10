import dynamic from "next/dynamic";
import Link from "next/link";
import { RevealWrapper } from "@/components/RevealWrapper";

const Counter = dynamic(() => import("@/components/home/Counter").then(mod => mod.Counter));
const FloatingBubbles = dynamic(() => import("@/components/home/FloatingBubbles").then(mod => mod.FloatingBubbles));

export default function Home() {
  const stats = [
    { v: 6, suffix: "+", label: "Projects Delivered" },
    { v: 2, suffix: "", label: "AI Agents Live" },
    { v: 100, suffix: "%", label: "Code Ownership" },
    { v: 0, prefix: "$", label: "Monthly Hosting" },
  ];

  return (
    <RevealWrapper className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <FloatingBubbles />

      <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-32 text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new projects · Pune, India
        </div>
        <h1 className="reveal text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
          I Build Websites &amp; <span className="text-gradient-blue">AI Agents</span>
          <br className="hidden md:block" /> That Work While You Sleep
        </h1>
        <p className="reveal mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Custom React websites with free hosting. AI voice receptionists that answer calls 24/7.
          No monthly fees. No lock-in. Just results.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 glow-blue"
          >
            View My Services
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-md border border-primary/40 bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
          >
            See My Work
          </Link>
        </div>

        <div className="reveal mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-surface/60 backdrop-blur p-5 text-center card-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-blue">
                <Counter end={s.v} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </RevealWrapper>
  );
}
