"use client";

import { Mascot } from "@/components/ui/Mascot";

/** Encouraging feedback. Never a red X: try-again gently wiggles. */
export function Feedback({
  tone,
  children,
  animKey,
}: {
  tone: "good" | "try" | "brave";
  children: React.ReactNode;
  animKey?: number | string;
}) {
  const cls =
    tone === "good"
      ? "border-leaf/40 bg-mint/25 animate-bounce-in"
      : tone === "brave"
        ? "border-plum/40 bg-plum/15 animate-bounce-in"
        : "border-sun bg-sun/25 animate-wiggle";
  const mood = tone === "good" ? "cheer" : tone === "brave" ? "brave" : "think";
  return (
    <div
      key={animKey}
      role="status"
      aria-live="polite"
      className={`flex items-center gap-3 rounded-3xl border-2 px-3 py-2 text-lg font-bold leading-snug text-ink ${cls}`}
    >
      <Mascot mood={mood} size={56} float={false} />
      <p className="flex-1">{children}</p>
    </div>
  );
}
