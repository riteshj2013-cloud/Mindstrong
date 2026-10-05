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

const PHASE_COLORS = ["bg-sun", "bg-plum", "bg-sky", "bg-mint", "bg-coral", "bg-sun"];

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

  function goDaily() {
    if (!resumable) startSession(pack);
    router.push("/session");
  }

  const hello = profile.childName ? `Hi, ${profile.childName}!` : "Hi, brave brain!";

  return (
    <main className="flex flex-1 flex-col gap-5">
      <header className="flex items-center justify-between">
        <Brand />
        <div className="flex items-center gap-2">
          <Link
            href="/parent/settings"
            className="rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-ink/60 shadow-soft"
            title={`${BAND_LABELS[ageToBand(childAge)]} · tap to change`}
          >
            Age {childAge}
          </Link>
          <div className="flex items-center gap-1 rounded-full bg-white px-3 py-2 font-display text-lg font-semibold shadow-soft">
            <span aria-hidden>🔥</span>
            {streak}
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sun via-sun/80 to-coral/60 p-6 shadow-chunky">
        <div className="relative z-10 max-w-[62%]">
          <h1 className="text-4xl font-semibold leading-tight">{hello}</h1>
          <p className="mt-2 text-lg font-bold text-ink/75">
            Pick a path: daily practice or SOF test prep.
          </p>
        </div>
        <div className="absolute -bottom-2 right-2">
          <Mascot mood="brave" size={130} />
        </div>
      </section>

      {/* Dual-mode entry */}
      <section className="grid gap-3">
        <button
          type="button"
          onClick={goDaily}
          className="rounded-[2rem] bg-gradient-to-br from-plum/30 to-sky/40 p-5 text-left shadow-chunky"
        >
          <p className="text-3xl" aria-hidden>
            💪
          </p>
          <p className="font-display text-2xl font-semibold">Daily practice</p>
          <p className="text-sm font-bold text-ink/60">
            Reasoning · Maths · Spelling · Hard try
            {doneToday ? " · done today ✅" : resumable ? " · resume ▶" : " · ~15–20 min"}
          </p>
        </button>
        <Link
          href="/prep"
          className="rounded-[2rem] bg-gradient-to-br from-mint/50 to-leaf/30 p-5 text-left shadow-chunky"
        >
          <p className="text-3xl" aria-hidden>
            🏆
          </p>
          <p className="font-display text-2xl font-semibold">Test prep (SOF)</p>
          <p className="text-sm font-bold text-ink/60">
            Maths · English · Science · lessons optional
          </p>
        </Link>
      </section>

      <section className="rounded-[2rem] bg-white p-5 shadow-soft">
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <h2 className="text-xl font-semibold">Today’s daily journey</h2>
          <span className="text-xs font-bold text-ink/45">{pack.title}</span>
        </div>
        <ol className="space-y-1.5">
          {PLAY_PHASES.map((p, i) => {
            const spec = pack.phases[p];
            const done = doneToday || (currentIdx > -1 && i < currentIdx);
            const now = i === currentIdx;
            return (
              <li
                key={p}
                className={`flex items-center gap-3 rounded-2xl px-2 py-1 ${now ? "bg-sky/10" : ""}`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl ${
                    done ? "bg-mint/40" : PHASE_COLORS[i]
                  }`}
                  aria-hidden
                >
                  {done ? "✅" : spec.emoji}
                </span>
                <span className="flex-1 text-base font-bold">{spec.kidTitle}</span>
                <span className="text-xs font-bold text-ink/40">
                  {now ? "here" : `${spec.estimatedMin}m`}
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[2rem] bg-white p-4 text-center shadow-soft">
          <p className="text-3xl">🔥</p>
          <p className="font-display text-3xl font-semibold">{streak}</p>
          <p className="text-sm font-bold text-ink/55">day streak</p>
        </div>
        <div className="rounded-[2rem] bg-white p-4 text-center shadow-soft">
          <p className="text-3xl">🦁</p>
          <p className="font-display text-3xl font-semibold">
            {hard}
            <span className="text-lg text-ink/40">/4</span>
          </p>
          <p className="text-sm font-bold text-ink/55">brave tries</p>
        </div>
      </div>

      {doneToday && (
        <MascotSays mood="cheer" size={56}>
          Daily done — try SOF prep or see your stars!
        </MascotSays>
      )}

      <Link
        href="/parent/gate"
        className="block py-2 text-center text-sm font-bold text-ink/45 underline-offset-4 hover:underline"
      >
        Grown-ups →
      </Link>
    </main>
  );
}
