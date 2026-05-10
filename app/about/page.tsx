import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About — Saurabh V.",
  description: "React developer and AI voice agent builder based in Pune, India.",
  openGraph: {
    title: "About — Saurabh V.",
    description: "React developer & AI voice agent builder, Pune, India.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
