"use client";

import Link from "next/link";
import { RevealWrapper } from "@/components/RevealWrapper";
import { Counter } from "@/components/home/Counter";
import { FloatingBubbles } from "@/components/home/FloatingBubbles";
import { Glass } from "@/components/ui/glass";
import SplitText from "@/components/SplitText";
import ShinyText from "@/components/ShinyText";

export default function Home() {
  const stats = [
    { v: 6, suffix: "+", label: "Projects Delivered" },
    { v: 2, suffix: "", label: "AI Agents Live" },
    { v: 100, suffix: "%", label: "Code Ownership" },
    { v: 0, prefix: "$", label: "Monthly Hosting" },
  ];

  return (
    <RevealWrapper className="relative overflow-hidden flex-1 flex flex-col justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <FloatingBubbles />

      <section className="relative mx-auto max-w-5xl px-6 pt-40 pb-32 text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new projects · Pune, India
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
          <span>Professional </span>
          <span
            style={{
              background: 'linear-gradient(135deg, oklch(0.85 0.13 230), oklch(0.7 0.15 250))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            Web Designer in Pune
          </span>
          <br className="hidden md:block" />
          <span>& AI Agent Builder</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          I build custom React websites and AI voice receptionists that work while you sleep. As a freelance web designer in Pune, I offer high-performance solutions with no monthly fees.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-1 glow-blue"
          >
            <ShinyText text="View My Services" disabled={false} speed={3} className="custom-class" color="rgba(0,0,0,0.8)" shineColor="grey" />
          </Link>
          <Glass width="auto" height="auto" borderRadius={100} className="transition-all hover:-translate-y-1">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-foreground"
            >
              See My Work
            </Link>
          </Glass>
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
        
        <div className="reveal mt-32 text-left bg-surface/30 border border-border rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Premium Web Design Services in Pune</h2>
          <p className="text-muted-foreground mb-4">
            Are you looking for a reliable <strong>web designer in Pune</strong>? I specialize in creating bespoke, high-performance websites for startups and established businesses. Unlike traditional agencies, I build modern React applications and AI-driven solutions without tying you into expensive monthly retainers.
          </p>
          <p className="text-muted-foreground">
            From technical SEO optimizations to AI voice receptionists, my custom web design services in Pune are tailored to help your brand stand out and convert visitors into loyal customers.
          </p>
        </div>
      </section>
    </RevealWrapper>
  );
}
