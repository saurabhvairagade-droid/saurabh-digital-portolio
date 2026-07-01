import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio — Web Design Projects in Pune by Saurabh V.",
  description: "Explore my portfolio of custom React websites and AI voice agents built for clients in Pune and beyond.",
  openGraph: {
    title: "Portfolio — Web Design Projects in Pune by Saurabh V.",
    description: "Live React websites and AI voice agents shipped by Saurabh V.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
