"use client";

import { Button } from "@/components/ui/Button";
import { PHASE_META, PLAY_PHASES, type ContentPack, type PlayPhase } from "@/lib/types";
import { remainingByPhase } from "@/lib/session";

const PHASE_COLORS: Record<PlayPhase, string> = {
  warm_up: "bg-sun",
  focus_a: "bg-plum/40",
  focus_b: "bg-sky/50",
  focus_c: "bg-mint/50",
  hard_try: "bg-coral/40",
  reflect: "bg-sun/70",
};

export function SectionPicker({
  pack,
  selected,
  onChange,
  onStart,
  onCancel,
  exhausted,
  onRestart,
}: {
  pack: ContentPack;
  selected: PlayPhase[];
  onChange: (next: PlayPhase[]) => void;
  onStart: () => void;
  onCancel?: () => void;
  exhausted?: boolean;
  onRestart?: () => void;
}) {
  const remaining = remainingByPhase(pack);
  const selectedCount = selected.reduce((n, p) => n + remaining[p], 0);

  function toggle(phase: PlayPhase) {
    if (selected.includes(phase)) {
      onChange(selected.filter((p) => p !== phase));
    } else {
      onChange(PLAY_PHASES.filter((p) => selected.includes(p) || p === phase));
    }
  }

  function selectAll() {
    onChange([...PLAY_PHASES]);
  }

  return (
    <div className="flex flex-col gap-4 rounded-[2rem] bg-white p-5 shadow-chunky">
      <div>
        <h2 className="font-display text-2xl font-semibold">Pick today’s sections</h2>
        <p className="text-sm font-bold text-ink/55">
          Tap to turn on or off. We’ll skip ones you’ve already finished.
        </p>
      </div>

      <ul className="space-y-2">
        {PLAY_PHASES.map((phase) => {
          const meta = PHASE_META[phase];
          const on = selected.includes(phase);
          const left = remaining[phase];
          const kidTitle = pack.phases[phase].kidTitle;
          return (
            <li key={phase}>
              <button
                type="button"
                onClick={() => toggle(phase)}
                aria-pressed={on}
                className={`flex w-full min-h-14 items-center gap-3 rounded-2xl px-3 py-2 text-left shadow-soft transition ${
                  on ? PHASE_COLORS[phase] : "bg-ink/5 opacity-70"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-xl ${
                    on ? "" : "grayscale"
                  }`}
                  aria-hidden
                >
                  {left === 0 ? "✅" : meta.emoji}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-semibold">
                    {kidTitle || meta.label}
                  </span>
                  <span className="text-xs font-bold text-ink/50">
                    {left === 0 ? "All done — start over to redo" : `${left} left`}
                  </span>
                </span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold ${
                    on ? "bg-leaf text-white" : "bg-white text-ink/35"
                  }`}
                >
                  {on ? "✓" : ""}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-2">
        <Button variant="ghost" className="!min-h-12 !text-base" onClick={selectAll}>
          All on
        </Button>
        {onCancel && (
          <Button variant="ghost" className="!min-h-12 !text-base" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>

      {exhausted ? (
        <div className="space-y-2 rounded-2xl bg-cream p-4">
          <p className="text-center text-base font-bold text-ink/70">
            You’ve finished every exercise in these sections!
          </p>
          {onRestart && (
            <Button variant="warn" onClick={onRestart}>
              Start over daily exercises 🔄
            </Button>
          )}
        </div>
      ) : (
        <Button
          onClick={onStart}
          disabled={selected.length === 0 || selectedCount === 0}
        >
          {selected.length === 0
            ? "Pick at least one section"
            : selectedCount === 0
              ? "Nothing left — start over?"
              : `Start! (${selectedCount} fresh) 🚀`}
        </Button>
      )}
    </div>
  );
}
