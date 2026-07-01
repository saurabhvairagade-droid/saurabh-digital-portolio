"use client";

import { Award } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import Image from "next/image";

const credentials = [
  "MS Project Management — University of the Cumberlands",
  "MS Mechanical Engineering — Cleveland State University",
];

export default function AboutClient() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="mx-auto max-w-6xl px-6 pt-40 pb-24">
      <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
        <div className="reveal flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl" />
            <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-primary/30 bg-surface">
              <Image
                src="/headshot.webp"
                alt="Saurabh V."
                width={280}
                height={280}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="text-sm text-primary uppercase tracking-widest mb-3">About</div>
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I am Saurabh</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I am a React developer and AI voice agent builder based in Pune, India. I help businesses
            get online fast without monthly platform fees, and automate their call handling with AI
            receptionists that sound human and work 24/7.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My background is in Quality Engineering at Shockwave Medical Inc in the USA — which means
            I am precise, deadline-driven, and I deliver exactly what I promise.
          </p>

          <div className="mt-8 grid sm:grid-cols-1 gap-3">
            {credentials.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3"
              >
                <Award className="text-accent shrink-0 mt-0.5" size={18} />
                <span className="text-sm">{c}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
