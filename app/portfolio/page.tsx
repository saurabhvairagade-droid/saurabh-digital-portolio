import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio — Saurabh V.",
  description: "Live React websites and AI voice agents shipped by Saurabh V.",
  openGraph: {
    title: "Portfolio — Saurabh V.",
    description: "Live React websites and AI voice agents.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
