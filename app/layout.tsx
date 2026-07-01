import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Saurabh V. — Web Designer in Pune",
    default: "Saurabh V. — Web Designer in Pune & AI Voice Agent Builder",
  },
  description: "Top-rated Web Designer in Pune. I build custom React websites and AI voice receptionists for businesses in Pune and beyond. No monthly fees. You own the code.",
  keywords: ["web designer in pune", "web design services pune", "React developer Pune", "AI voice agent builder", "freelance web designer Pune", "custom websites Pune"],
  metadataBase: new URL("https://saurabh-web-designer-pune.netlify.app"),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    title: "Saurabh V. — Web Designer in Pune & AI Voice Agent Builder",
    description: "Custom React websites and AI voice receptionists in Pune. No monthly fees.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "zIhBbGar6Graz6qWXFcC_idrrBsKOyjNxQCFAlO1iXo",
  },
};

export const viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Saurabh V. — Web Designer in Pune",
              "image": "https://saurabh-web-designer-pune.netlify.app/headshot.jpg",
              "url": "https://saurabh-web-designer-pune.netlify.app",
              "description": "Top-rated Web Designer in Pune. I build custom React websites and AI voice receptionists.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "priceRange": "$$"
            })
          }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
