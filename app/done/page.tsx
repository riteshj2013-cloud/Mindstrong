"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Confetti } from "@/components/ui/Confetti";
import { Mascot } from "@/components/ui/Mascot";
import { mondayPack } from "@/lib/content/monday";
import { localDay } from "@/lib/date";
import { displayStreak, hardAttemptsThisWeek, todaySummary } from "@/lib/session";
import { useProfile, useProgress } from "@/lib/storage";
import type { ReflectItem } from "@/lib/types";

const reflectItem = mondayPack.phases.reflect.items[0] as ReflectItem;
function reflectLabel(q: "feltHard" | "whatTried", id?: string) {
  const opt = reflectItem.questions.find((x) => x.id === q)?.options.find((o) => o.id === id);
  return opt ? `${opt.emoji} ${opt.label}` : null;
}

export default function DonePage() {
  const progress = useProgress();
  const profile = useProfile();
  if (progress === undefined || profile === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={96} />
      </div>
    );
  }

  const today = localDay();
  const summary = todaySummary(progress, today) ?? progress.history[0];
  const streak = displayStreak(progress, today);
  const hard = hardAttemptsThisWeek(progress, today);

  if (!summary) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <Mascot mood="think" size={130} />
        <h1 className="text-3xl font-semibold">No session finished yet</h1>
        <Link href="/" className="block w-full max-w-sm">
          <Button>Go home</Button>
        </Link>
      </main>
    );
  }

  const felt = reflectLabel("feltHard", summary.reflection?.feltHard);
  const tried = reflectLabel("whatTried", summary.reflection?.whatTried);
  const name = profile?.childName;

  return (
    <main className="flex flex-1 flex-col items-center gap-5 text-center">
      <Confetti seed={3} count={48} />
      <div className="mt-4">
        <Mascot mood="cheer" size={160} />
      </div>
      <h1 className="text-4xl font-semibold leading-tight">
        {name ? `Amazing, ${name}!` : "Amazing work!"}
      </h1>
      <p className="max-w-xs text-lg font-bold text-ink/70">
        You used <span className="text-coral">Try before hint</span>. That’s how brave
        brains grow.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        <Badge emoji="✅" label="Session done" tone="mint" />
        {summary.hardTryAttempted && <Badge emoji="🦁" label="Brave Try!" tone="coral" />}
        {streak >= 2 && <Badge emoji="🔥" label={`${streak}-day streak`} tone="sun" />}
        {summary.hardTryAttempted && summary.hardTryHints === 0 && summary.hardTrySolved && (
          <Badge emoji="⭐" label="Solo star" tone="plum" />
        )}
      </div>

      <div className="grid w-full grid-cols-2 gap-3">
        <div className="rounded-[2rem] bg-white p-4 shadow-soft">
          <p className="text-3xl" aria-hidden>🔥</p>
          <p className="font-display text-3xl font-semibold">{streak}</p>
          <p className="text-sm font-bold text-ink/55">day streak</p>
        </div>
        <div className="rounded-[2rem] bg-white p-4 shadow-soft">
          <p className="text-3xl" aria-hidden>🦁</p>
          <p className="font-display text-3xl font-semibold">
            {hard}
            <span className="text-lg text-ink/40">/4</span>
          </p>
          <p className="text-sm font-bold text-ink/55">brave tries this week</p>
        </div>
      </div>

      {(felt || tried) && (
        <div className="w-full space-y-2 rounded-[2rem] bg-white p-5 text-left shadow-soft">
          <h2 className="text-xl font-semibold">What you told Bo</h2>
          {felt && (
            <p className="text-base font-semibold">
              <span className="text-ink/50">Felt hard:</span> {felt}
            </p>
          )}
          {tried && (
            <p className="text-base font-semibold">
              <span className="text-ink/50">You tried:</span> {tried}
            </p>
          )}
        </div>
      )}

      <div className="mt-auto w-full">
        <Link href="/" className="block">
          <Button variant="success">See you tomorrow 👋</Button>
        </Link>
      </div>
    </main>
  );
}
