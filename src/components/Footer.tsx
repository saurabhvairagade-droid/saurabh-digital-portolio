import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-xl font-bold">
            Saurabh <span className="text-primary">V.</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Web Designer in Pune &amp; AI Voice Agent Builder
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Serving businesses in Pune and globally.
          </p>
        </div>
        <div className="flex flex-col md:items-center gap-2 text-sm">
          <div className="font-semibold mb-2">Quick Links</div>
          {["/", "/services", "/portfolio", "/about", "/contact"].map((href, i) => {
            const labels = ["Home", "Services", "Portfolio", "About", "Contact"];
            return (
              <Link
                key={href}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {labels[i]}
              </Link>
            );
          })}
        </div>
        <div className="text-sm text-muted-foreground md:text-right">
          Built with Next.js + Tailwind CSS.
          <br />
          Hosted free on Netlify.
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-muted-foreground text-center">
          © 2026 Saurabh V. All rights reserved. Pune, India
        </div>
      </div>
    </footer>
  );
}
