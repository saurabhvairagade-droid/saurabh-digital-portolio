"use client";

import React from 'react';

interface GlassProps {
  children: React.ReactNode;
  className?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
}

export function Glass({ 
  children, 
  className = "", 
  width,
  height,
  borderRadius = 12,
}: GlassProps) {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
      }}
      className={`
        relative overflow-hidden
        bg-white/[0.03] backdrop-blur-xl 
        border border-white/10
        shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        transition-all duration-300
        hover:bg-white/[0.08]
        hover:border-white/20
        ${className}
      `}
    >
      {children}
    </div>
  );
}