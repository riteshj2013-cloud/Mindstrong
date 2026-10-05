"use client";

import type { Phase, PlayPhase } from "@/lib/types";
import { PHASE_META, PLAY_PHASES } from "@/lib/types";
import { phaseIndex } from "@/lib/session";

const BG: Record<PlayPhase, string> = {
  warm_up: "bg-sun",
  focus_a: "bg-plum",
  focus_b: "bg-sky",
  focus_c: "bg-mint",
  hard_try: "bg-coral",
  reflect: "bg-sun",
};

export function PhaseDots({
  phase,
  phases = PLAY_PHASES,
}: {
  phase: Phase;
  phases?: PlayPhase[];
}) {
  const list = phases.length > 0 ? phases : PLAY_PHASES;
  const current = phaseIndex(phase, list);
  const denom = Math.max(1, list.length - 1);
  const pct = Math.max(0, Math.min(1, current / denom));
  return (
    <nav aria-label="Session journey" className="relative px-1">
      <div className="absolute left-5 right-5 top-5 h-1.5 rounded-full bg-ink/10" />
      <div
        className="absolute left-5 top-5 h-1.5 rounded-full bg-leaf transition-all duration-700"
        style={{ width: `calc((100% - 2.5rem) * ${pct})` }}
      />
      <ol className="relative flex justify-between">
        {list.map((p, i) => {
          const done = i < current;
          const active = i === current;
          const meta = PHASE_META[p];
          return (
            <li key={p} className="flex w-11 flex-col items-center gap-0.5">
              <span
                aria-current={active ? "step" : undefined}
                className={`flex h-11 w-11 items-center justify-center rounded-full border-4 text-lg transition ${
                  done
                    ? "border-leaf bg-white"
                    : active
                      ? `border-white ${BG[p]} scale-110 shadow-chunky animate-pop`
                      : "border-white bg-white/70 opacity-60 grayscale"
                }`}
              >
                {done ? "✅" : meta.emoji}
              </span>
              <span
                className={`text-[9px] font-extrabold uppercase tracking-wide ${
                  active ? "text-ink" : "text-ink/45"
                }`}
              >
                {meta.short}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
