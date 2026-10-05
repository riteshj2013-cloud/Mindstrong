"use client";

import type { Phase } from "@/lib/types";
import { PLAY_PHASES } from "@/lib/types";
import { phaseIndex } from "@/lib/session";

const STOPS = [
  { label: "Warm", emoji: "🌅", bg: "bg-sun" },
  { label: "Think", emoji: "🧩", bg: "bg-plum" },
  { label: "Maths", emoji: "🧮", bg: "bg-sky" },
  { label: "Spell", emoji: "🔤", bg: "bg-mint" },
  { label: "Hard", emoji: "🦁", bg: "bg-coral" },
  { label: "Reflect", emoji: "💭", bg: "bg-sun" },
];

export function PhaseDots({ phase }: { phase: Phase }) {
  const current = phaseIndex(phase);
  const pct = Math.max(0, Math.min(1, current / (PLAY_PHASES.length - 1)));
  return (
    <nav aria-label="Session journey" className="relative px-1">
      <div className="absolute left-5 right-5 top-5 h-1.5 rounded-full bg-ink/10" />
      <div
        className="absolute left-5 top-5 h-1.5 rounded-full bg-leaf transition-all duration-700"
        style={{ width: `calc((100% - 2.5rem) * ${pct})` }}
      />
      <ol className="relative flex justify-between">
        {PLAY_PHASES.map((p, i) => {
          const done = i < current;
          const active = i === current;
          const s = STOPS[i];
          return (
            <li key={p} className="flex w-11 flex-col items-center gap-0.5">
              <span
                aria-current={active ? "step" : undefined}
                className={`flex h-11 w-11 items-center justify-center rounded-full border-4 text-lg transition ${
                  done
                    ? "border-leaf bg-white"
                    : active
                      ? `border-white ${s.bg} scale-110 shadow-chunky animate-pop`
                      : "border-white bg-white/70 opacity-60 grayscale"
                }`}
              >
                {done ? "✅" : s.emoji}
              </span>
              <span
                className={`text-[9px] font-extrabold uppercase tracking-wide ${
                  active ? "text-ink" : "text-ink/45"
                }`}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
