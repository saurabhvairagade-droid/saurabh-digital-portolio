import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Saurabh V. — Freelance Web Designer in Pune",
  description: "Learn more about Saurabh V., a professional freelance web designer and AI voice agent builder based in Pune, India.",
  openGraph: {
    title: "About Saurabh V. — Freelance Web Designer in Pune",
    description: "React developer & AI voice agent builder based in Pune, India.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
