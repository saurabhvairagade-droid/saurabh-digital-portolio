import { ExternalLink } from "lucide-react";
import { RevealWrapper } from "@/components/RevealWrapper";
import Image from "next/image";

const projects = [
  {
    title: "Braston Hall & Associates",
    desc: "Strategic Advisory firm website.",
    tags: ["React", "Vite", "Tailwind", "Netlify Forms"],
    href: "https://brastonhall.pages.dev",
    img: "https://picsum.photos/seed/braston/800/500",
  },
  {
    title: "Shivali Digital",
    desc: "Digital Marketing Agency website.",
    tags: ["React", "Vite", "Tailwind", "Netlify Forms"],
    href: "https://shivali-website.pages.dev",
    img: "https://picsum.photos/seed/shivali/800/500",
  },
  {
    title: "Kartari Exim",
    desc: "Agricultural Export business website.",
    tags: ["React", "Vite", "Tailwind", "Netlify Forms"],
    href: "https://kartari-exim-website.pages.dev",
    img: "https://picsum.photos/seed/kartari/800/500",
  },
  {
    title: "AI Outbound Cold Calling Agent",
    desc: "Built on Retell AI for Kartari Exim.",
    tags: ["Retell AI", "GPT-4", "Prompt Engineering"],
    href: "#",
    img: "https://picsum.photos/seed/cold/800/500",
  },
  {
    title: "AI Legal Receptionist",
    desc: "Personal injury law firm intake agent built on Retell AI.",
    tags: ["Retell AI", "GPT-4.1", "Warm Transfer"],
    href: "#",
    img: "https://picsum.photos/seed/legal/800/500",
  },
  {
    title: "Personal Portfolio",
    desc: "This very site — built with React + TanStack.",
    tags: ["React", "Vite", "Tailwind"],
    href: "#",
    img: "https://picsum.photos/seed/portfolio/800/500",
  },
];

export default function PortfolioClient() {
  return (
    <RevealWrapper className="mx-auto max-w-7xl px-6 pt-40 pb-24">
      <div className="text-center max-w-2xl mx-auto reveal">
        <div className="text-sm text-primary uppercase tracking-widest mb-3">Portfolio</div>
        <h1 className="text-4xl md:text-5xl font-bold">Live Projects I Have Built</h1>
        <p className="mt-4 text-muted-foreground">
          Real shipping work — websites and AI agents in production today.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="reveal group rounded-2xl border border-border bg-surface overflow-hidden card-shadow transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-background">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={i < 3}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                View Live Site <ExternalLink size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </RevealWrapper>
  );
}
