"use client";

import { GateGuard } from "@/components/parent/GateGuard";
import { Mascot } from "@/components/ui/Mascot";
import { localDay, shortDayLabel, weekDays } from "@/lib/date";
import { displayStreak, hardAttemptsThisWeek } from "@/lib/session";
import { useProfile, useProgress } from "@/lib/storage";

export default function ProgressPage() {
  return (
    <GateGuard>
      <ProgressInner />
    </GateGuard>
  );
}

function ProgressInner() {
  const progress = useProgress();
  const profile = useProfile();

  if (progress === undefined || profile === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={72} float={false} />
      </div>
    );
  }

  const today = localDay();
  const streak = displayStreak(progress, today);
  const hard = hardAttemptsThisWeek(progress, today);
  const days = weekDays(today);
  const byDate = new Map(progress.history.map((h) => [h.date, h]));
  const latest = progress.history[0];

  return (
    <main className="flex flex-1 flex-col gap-5">
      <div>
        <h1 className="text-3xl font-semibold">Progress</h1>
        <p className="text-sm font-semibold text-ink/55">
          {profile?.childName ? `${profile.childName} · ` : ""}
          Effort over accuracy — streak, brave tries, sessions.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Metric emoji="🔥" value={String(streak)} label="Streak" />
        <Metric emoji="🦁" value={`${hard}/4`} label="Brave tries" />
        <Metric
          emoji="✅"
          value={String(progress.sessionsCompleted)}
          label="Sessions"
        />
      </div>

      <section className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
        <h2 className="mb-3 text-lg font-semibold">This week</h2>
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((d) => {
            const s = byDate.get(d);
            const isToday = d === today;
            return (
              <div key={d} className="flex flex-col items-center gap-1">
                <span className="text-[11px] font-bold uppercase text-ink/45">
                  {shortDayLabel(d)}
                </span>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl text-lg ${
                    s?.completed
                      ? "bg-mint/40"
                      : isToday
                        ? "bg-sun/50"
                        : "bg-ink/5"
                  }`}
                  title={
                    s?.completed
                      ? `Done · brave try ${s.hardTryAttempted ? "yes" : "no"}`
                      : isToday
                        ? "Today"
                        : "—"
                  }
                >
                  {s?.completed ? (s.hardTryAttempted ? "🦁" : "✅") : isToday ? "·" : ""}
                </span>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs font-semibold text-ink/45">
          Target: 4 brave attempts this week. ✅ = session · 🦁 = hard try attempted.
        </p>
      </section>

      {latest && (
        <section className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
          <h2 className="mb-2 text-lg font-semibold">Latest session</h2>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div>
              <dt className="font-semibold text-ink/45">Date</dt>
              <dd className="font-bold">{latest.date}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink/45">Duration</dt>
              <dd className="font-bold">{Math.round(latest.durationSec / 60)} min</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink/45">Hard try</dt>
              <dd className="font-bold">
                {latest.hardTryAttempted
                  ? latest.hardTrySolved
                    ? `Solved · ${latest.hardTryHints} hint(s)`
                    : "Attempted"
                  : "Not attempted"}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink/45">Tried before hint</dt>
              <dd className="font-bold">{latest.triedBeforeHintCount} items</dd>
            </div>
          </dl>
          {latest.reflection && (
            <p className="mt-3 rounded-2xl bg-cream px-3 py-2 text-sm font-semibold text-ink/70">
              Reflection saved — process praise over score.
            </p>
          )}
        </section>
      )}

      <p className="text-center text-xs font-semibold text-ink/40">
        We don’t lead with % correct. Streak · brave tries · sessions.
      </p>
    </main>
  );
}

function Metric({
  emoji,
  value,
  label,
}: {
  emoji: string;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-ink/10 bg-white p-4 text-center shadow-soft">
      <p className="text-2xl" aria-hidden>
        {emoji}
      </p>
      <p className="font-display text-2xl font-semibold">{value}</p>
      <p className="text-xs font-bold text-ink/55">{label}</p>
    </div>
  );
}
