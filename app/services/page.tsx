import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Saurabh V.",
  description: "React websites, lead-gen landing pages, and AI voice receptionists.",
  openGraph: {
    title: "Services — Saurabh V.",
    description: "React websites, lead-gen pages, and AI voice agents.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
