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
  title: "Saurabh V. — React Developer & AI Voice Agent Builder",
  description: "Custom React websites and AI voice receptionists built by Saurabh V., based in Pune, India. No monthly fees. You own the code.",
  metadataBase: new URL("https://saurabh-v.com"),
  openGraph: {
    title: "Saurabh V. — React Developer & AI Voice Agent Builder",
    description: "Custom React websites and AI voice receptionists. No monthly fees.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
