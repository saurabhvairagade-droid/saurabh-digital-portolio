"use client";

import { useReveal } from "@/hooks/use-reveal";
import { ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
}

export function RevealWrapper({ children, className }: RevealWrapperProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
