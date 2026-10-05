"use client";

import { useMemo } from "react";

const COLORS = ["#FFD54A", "#4FA8F0", "#5FD3B0", "#FF7A66", "#9B7EDE", "#FF9EBB"];

/** CSS-only confetti burst. Hidden under reduced motion. */
export function Confetti({ count = 36, seed = 1 }: { count?: number; seed?: number }) {
  const pieces = useMemo(() => {
    let s = seed * 9301 + 49297;
    const rnd = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    return Array.from({ length: count }, (_, i) => ({
      left: rnd() * 100,
      delay: rnd() * 0.6,
      color: COLORS[i % COLORS.length],
      rot: rnd() * 360,
      round: rnd() > 0.6,
    }));
  }, [count, seed]);

  return (
    <div className="confetti" aria-hidden>
      {pieces.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rot}deg)`,
            borderRadius: p.round ? "999px" : "3px",
          }}
        />
      ))}
    </div>
  );
}
