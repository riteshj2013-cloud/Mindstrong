"use client";

import type { Phase } from "@/lib/types";
import { PLAY_PHASES } from "@/lib/types";
import { phaseIndex } from "@/lib/session";

const STOPS = [
  { label: "Warm-up", emoji: "🌅", bg: "bg-sun" },
  { label: "Patterns", emoji: "🧩", bg: "bg-plum" },
  { label: "Tens", emoji: "🧮", bg: "bg-sky" },
  { label: "Hard try", emoji: "🦁", bg: "bg-coral" },
  { label: "Think", emoji: "💭", bg: "bg-mint" },
];

/** A little journey map across the 5 session steps. */
export function PhaseDots({ phase }: { phase: Phase }) {
  const current = phaseIndex(phase);
  const pct = Math.max(0, Math.min(1, current / (PLAY_PHASES.length - 1)));
  return (
    <nav aria-label="Session journey" className="relative px-2">
      <div className="absolute left-7 right-7 top-6 h-2 rounded-full bg-ink/10" />
      <div
        className="absolute left-7 top-6 h-2 rounded-full bg-leaf transition-all duration-700"
        style={{ width: `calc((100% - 3.5rem) * ${pct})` }}
      />
      <ol className="relative flex justify-between">
        {PLAY_PHASES.map((p, i) => {
          const done = i < current;
          const active = i === current;
          const s = STOPS[i];
          return (
            <li key={p} className="flex w-14 flex-col items-center gap-1">
              <span
                aria-current={active ? "step" : undefined}
                className={`flex h-14 w-14 items-center justify-center rounded-full border-4 text-2xl transition ${
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
                className={`text-[11px] font-extrabold uppercase tracking-wide ${
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
