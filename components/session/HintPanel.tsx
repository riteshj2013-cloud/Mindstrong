"use client";

import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";

/**
 * Try-before-hint ladder. Hints are authored answer-free.
 * Locked until the first attempt (or, for hard try, an explicit “I tried”).
 */
export function HintPanel({
  hints,
  unlocked,
  level,
  onUnlockTry,
  onShowNext,
  requireExplicitTry,
}: {
  hints: string[];
  unlocked: boolean;
  level: number;
  onUnlockTry?: () => void;
  onShowNext: () => void;
  requireExplicitTry?: boolean;
}) {
  if (!hints.length) return null;
  const canReveal = unlocked && level < hints.length;
  const shown = hints.slice(0, level);

  return (
    <div className="space-y-3">
      {shown.map((h, i) => (
        <div key={i} className="flex animate-fade-up items-start gap-2">
          <Mascot mood="think" size={48} float={false} />
          <div className="flex-1 rounded-3xl rounded-tl-md border-2 border-sun bg-white px-4 py-3 text-base font-semibold leading-snug">
            <span className="mr-1 font-display text-amber-600">💡 Hint {i + 1}:</span>
            {h}
          </div>
        </div>
      ))}

      {!unlocked &&
        (requireExplicitTry ? (
          <div className="space-y-2">
            <p className="text-center text-sm font-bold text-ink/55">
              🔒 Hints open after you tap <span className="text-coral">I tried</span>
            </p>
            <Button variant="warn" onClick={onUnlockTry}>
              🙋 I tried
            </Button>
          </div>
        ) : (
          <p className="rounded-full bg-white/70 px-4 py-2 text-center text-sm font-bold text-ink/55">
            🔒 Hints unlock after your first brave try
          </p>
        ))}

      {canReveal && (
        <Button variant="secondary" onClick={onShowNext}>
          💡 {level === 0 ? "Show a hint" : "Another hint"}
        </Button>
      )}
    </div>
  );
}
