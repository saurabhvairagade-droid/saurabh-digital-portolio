import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Web Design Services in Pune — Saurabh V.",
  description: "Professional web design services in Pune. I build high-performance React websites, lead-gen landing pages, and AI voice receptionists.",
  openGraph: {
    title: "Web Design Services in Pune — Saurabh V.",
    description: "Custom React websites, lead-gen pages, and AI voice agents for businesses in Pune.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
