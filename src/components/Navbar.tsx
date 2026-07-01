"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Glass } from "@/components/ui/glass";

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
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl ${
        scrolled ? "translate-y-0" : "translate-y-0"
      }`}
    >
      <Glass
        borderRadius={100}
        className={`border border-white/10 shadow-2xl transition-all duration-300 ${
          scrolled ? "py-0" : "py-1"
        }`}
      >
        <div className="w-full px-4 md:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
          <Link href="/" className="font-display text-xl font-bold tracking-tight shrink-0">
            Saurabh <span className="text-primary">V.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com/saurabh-vairagade/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-xs font-bold text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 glow-blue"
            >
              Book a Call
            </a>

            <button
              aria-label="Toggle menu"
              className="md:hidden text-foreground p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Glass>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-3 md:hidden">
          <Glass borderRadius={24} className="border border-white/10 shadow-2xl overflow-hidden">
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-base font-medium transition-colors ${
                    pathname === l.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <hr className="border-white/10 my-2" />
              <a
                href="https://calendly.com/saurabh-vairagade/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
              >
                Book a Free Call
              </a>
            </div>
          </Glass>
        </div>
      )}
    </header>
  );
}
