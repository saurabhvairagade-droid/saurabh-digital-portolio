"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-lg border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          Saurabh <span className="text-primary">V.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${pathname === l.href
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/saurabh-vairagade/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 glow-blue"
          >
            Book a Free Call
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${pathname === l.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/saurabh-vairagade/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
