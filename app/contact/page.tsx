import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Saurabh V.",
  description: "Let's work together. Get in touch with Saurabh V.",
  openGraph: {
    title: "Contact — Saurabh V.",
    description: "Let's work together.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
