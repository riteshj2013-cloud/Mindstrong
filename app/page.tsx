"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AgePicker } from "@/components/ui/AgePicker";
import { Brand } from "@/components/ui/Brand";
import { Button } from "@/components/ui/Button";
import { Mascot, MascotSays } from "@/components/ui/Mascot";
import { packForToday } from "@/lib/content";
import { BAND_LABELS, ageToBand, clampAge } from "@/lib/content/age";
import { localDay } from "@/lib/date";
import { displayStreak, hardAttemptsThisWeek, startSession, todaySummary } from "@/lib/session";
import { saveProfile, useActiveSession, useProfile, useProgress } from "@/lib/storage";
import { PLAY_PHASES, type ChildAge } from "@/lib/types";

const PHASE_COLORS = ["bg-sun", "bg-plum", "bg-sky", "bg-coral", "bg-mint"];

export default function Home() {
  const router = useRouter();
  const profile = useProfile();
  const progress = useProgress();
  const active = useActiveSession();
  const [name, setName] = useState("");
  const [age, setAge] = useState<ChildAge>(8);

  if (profile === undefined || progress === undefined || active === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={96} />
      </div>
    );
  }

  // First run: friendly name + age ask.
  if (profile === null) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <Mascot mood="cheer" size={150} />
        <div>
          <h1 className="text-4xl font-semibold">Hi! I’m Bo.</h1>
          <p className="mt-2 text-lg text-ink/70">I’m a brave little brain. What’s your name?</p>
        </div>
        <form
          className="w-full max-w-sm space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            saveProfile({
              childName: name.trim().slice(0, 24),
              age: clampAge(age),
              createdAt: new Date().toISOString(),
            });
          }}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            aria-label="Your name"
            className="min-h-16 w-full rounded-3xl border-4 border-white bg-white px-5 text-center font-display text-2xl shadow-soft outline-none focus:border-sky"
          />
          <AgePicker value={age} onChange={setAge} />
          <Button type="submit">{name.trim() ? "That’s me! 👋" : "Skip for now"}</Button>
        </form>
      </main>
    );
  }

  const today = localDay();
  const childAge = clampAge(profile.age);
  const pack = packForToday(today, childAge);
  const doneToday = !!todaySummary(progress, today);
  const resumable =
    active && active.date === today && active.phase !== "complete" ? active : null;
  const streak = displayStreak(progress, today);
  const hard = hardAttemptsThisWeek(progress, today);
  const currentIdx = resumable ? PLAY_PHASES.findIndex((p) => p === resumable.phase) : -1;
  const bandLabel = BAND_LABELS[ageToBand(childAge)];

  function go() {
    if (!resumable) startSession(pack);
    router.push("/session");
  }

  const hello = profile.childName ? `Hi, ${profile.childName}!` : "Hi, brave brain!";

  return (
    <main className="flex flex-1 flex-col gap-5">
      <header className="flex items-center justify-between">
        <Brand />
        <div className="flex items-center gap-2">
          <span
            className="rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-ink/60 shadow-soft"
            title={bandLabel}
          >
            Age {childAge}
          </span>
          <div className="flex items-center gap-1 rounded-full bg-white px-3 py-2 font-display text-lg font-semibold shadow-soft">
            <span aria-hidden>🔥</span>
            {streak}
            <span className="sr-only">day streak</span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sun via-sun/80 to-coral/60 p-6 shadow-chunky">
        <div className="relative z-10 max-w-[60%]">
          <h1 className="text-4xl font-semibold leading-tight">{hello}</h1>
          <p className="mt-2 text-lg font-bold text-ink/75">
            {doneToday
              ? "You did today’s session. Brave brain!"
              : resumable
                ? "Let’s pick up where you left off."
                : "Ready to think hard and stay brave?"}
          </p>
        </div>
        <div className="absolute -bottom-2 right-2">
          <Mascot mood={doneToday ? "cheer" : "brave"} size={140} />
        </div>
      </section>

      <section className="rounded-[2rem] bg-white p-5 shadow-soft">
        <div className="mb-4 flex items-baseline justify-between gap-2">
          <h2 className="text-2xl font-semibold">Today’s journey</h2>
          <span className="shrink-0 text-sm font-bold text-ink/45">~15–20 min</span>
        </div>
        <p className="mb-3 text-sm font-bold text-ink/45">{pack.title}</p>
        <ol className="space-y-2">
          {PLAY_PHASES.map((p, i) => {
            const spec = pack.phases[p];
            const done = doneToday || (currentIdx > -1 && i < currentIdx);
            const now = i === currentIdx;
            return (
              <li
                key={p}
                className={`flex items-center gap-3 rounded-2xl px-2 py-1.5 ${now ? "bg-sky/10" : ""}`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${
                    done ? "bg-mint/40" : PHASE_COLORS[i]
                  }`}
                  aria-hidden
                >
                  {done ? "✅" : spec.emoji}
                </span>
                <span className="flex-1 text-lg font-bold">{spec.kidTitle}</span>
                <span className="text-sm font-bold text-ink/40">
                  {now ? "you’re here" : `${spec.estimatedMin} min`}
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[2rem] bg-white p-4 text-center shadow-soft">
          <p className="text-3xl" aria-hidden>🔥</p>
          <p className="font-display text-3xl font-semibold">{streak}</p>
          <p className="text-sm font-bold text-ink/55">day streak</p>
        </div>
        <div className="rounded-[2rem] bg-white p-4 text-center shadow-soft">
          <p className="text-3xl" aria-hidden>🦁</p>
          <p className="font-display text-3xl font-semibold">
            {hard}
            <span className="text-lg text-ink/40">/4</span>
          </p>
          <p className="text-sm font-bold text-ink/55">brave tries this week</p>
        </div>
      </div>

      <div className="mt-auto space-y-3">
        {doneToday ? (
          <>
            <MascotSays mood="cheer" size={56}>
              See you tomorrow for a new adventure!
            </MascotSays>
            <Link href="/done" className="block">
              <Button variant="success">See my stars ⭐</Button>
            </Link>
          </>
        ) : (
          <Button onClick={go} className="min-h-16 text-2xl">
            {resumable ? "Keep going ▶" : "Start today’s session 🚀"}
          </Button>
        )}
        <Link
          href="/parent/gate"
          className="block py-2 text-center text-sm font-bold text-ink/45 underline-offset-4 hover:underline"
        >
          Grown-ups →
        </Link>
      </div>
    </main>
  );
}
