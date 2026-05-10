"use client";

import { useEffect, useState } from "react";

export function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    const newBubbles = [...Array(20)].map((_, i) => ({
      id: i,
      width: `${Math.random() * 6 + 2}px`,
      height: `${Math.random() * 6 + 2}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${8 + Math.random() * 10}s`,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full bg-primary/20 animate-float-slow"
          style={{
            width: b.width,
            height: b.height,
            left: b.left,
            top: b.top,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </div>
  );
}
