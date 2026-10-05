"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SectionPicker } from "@/components/session/SectionPicker";
import { AccountButton } from "@/components/auth/AccountButton";
import { SiteFooter } from "@/components/auth/SiteFooter";
import { AgePicker } from "@/components/ui/AgePicker";
import { Brand } from "@/components/ui/Brand";
import { Button } from "@/components/ui/Button";
import { NavChip } from "@/components/ui/NavChip";
import { Mascot, MascotSays } from "@/components/ui/Mascot";
import { MORE_DAILY_PACKS_SOON, todayPackInfo } from "@/lib/content";
import { BAND_LABELS, ageToBand, clampAge } from "@/lib/content/age";
import {
  clearAllCompleted,
  countDailyDone,
  restartDailyExercises,
  useCompleted,
} from "@/lib/completed";
import { localDay } from "@/lib/date";
import {
  countRemainingItems,
  displayStreak,
  hardAttemptsThisWeek,
  startSession,
  todaySummary,
} from "@/lib/session";
import {
  DEFAULT_SETTINGS,
  resetProgress,
  saveProfile,
  saveSettings,
  useActiveSession,
  useProfile,
  useProgress,
  useSettings,
} from "@/lib/storage";
import { PLAY_PHASES, type ChildAge, type PlayPhase } from "@/lib/types";

const PHASE_COLORS = ["bg-sun", "bg-plum", "bg-sky", "bg-mint", "bg-coral", "bg-sun"];

export default function Home() {
  const router = useRouter();
  const profile = useProfile();
  const progress = useProgress();
  const active = useActiveSession();
  const settings = useSettings();
  const completed = useCompleted();
  const [name, setName] = useState("");
  const [age, setAge] = useState<ChildAge>(8);
  const [picking, setPicking] = useState(false);
  const [selected, setSelected] = useState<PlayPhase[]>([...PLAY_PHASES]);
  const [confirmRestart, setConfirmRestart] = useState(false);

  useEffect(() => {
    if (!settings) return;
    const saved = settings.dailySections;
    if (saved && saved.length > 0) {
      setSelected(PLAY_PHASES.filter((p) => saved.includes(p)));
    }
  }, [settings]);

  if (
    profile === undefined ||
    progress === undefined ||
    active === undefined ||
    settings === undefined ||
    completed === undefined
  ) {
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
            // Fresh profile → clear any leftover progress/session/done history
            // so home never shows phantom ✅ / streak / brave tries.
            resetProgress();
            clearAllCompleted();
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
  const packInfo = todayPackInfo(today, childAge);
  const pack = packInfo.pack;
  const doneToday = !!todaySummary(progress, today);
  const resumable =
    active && active.date === today && active.phase !== "complete" ? active : null;
  const streak = displayStreak(progress, today);
  const hard = hardAttemptsThisWeek(progress, today);
  const journeyPhases = resumable?.selectedPhases?.length
    ? resumable.selectedPhases
    : PLAY_PHASES;
  const currentIdx = resumable
    ? journeyPhases.findIndex((p) => p === resumable.phase)
    : -1;
  const dailyDoneCount = countDailyDone(completed);
  const remainingSelected = countRemainingItems(
    pack,
    selected.length ? selected : PLAY_PHASES,
  );

  function persistSections(next: PlayPhase[]) {
    setSelected(next);
    const s = settings ?? DEFAULT_SETTINGS;
    saveSettings({ ...s, dailySections: next });
  }

  function openPicker() {
    if (resumable) {
      router.push("/session");
      return;
    }
    setPicking(true);
    setConfirmRestart(false);
  }

  function beginSession() {
    if (selected.length === 0) return;
    const result = startSession(pack, selected);
    if (!result.ok) {
      setConfirmRestart(false);
      return;
    }
    const s = settings ?? DEFAULT_SETTINGS;
    saveSettings({ ...s, dailySections: selected });
    setPicking(false);
    router.push("/session");
  }

  function doRestartDaily() {
    restartDailyExercises();
    setPicking(true);
    setConfirmRestart(false);
  }

  const hello = profile.childName ? `Hi, ${profile.childName}!` : "Hi, brave brain!";

  return (
    <main className="flex flex-1 flex-col gap-5">
      <header className="flex items-center justify-between gap-2">
        <Brand />
        <div className="flex items-center gap-2">
          <AccountButton />
          <Link
            href="/parent/gate?next=/parent/settings"
            className="inline-flex min-h-11 items-center rounded-full border border-ink/10 bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-soft"
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
            Pick a path: daily practice or olympiad prep.
          </p>
        </div>
        <div className="absolute -bottom-2 right-2">
          <Mascot mood="brave" size={130} />
        </div>
      </section>

      {picking ? (
        <SectionPicker
          pack={pack}
          selected={selected}
          onChange={persistSections}
          onStart={beginSession}
          onCancel={() => setPicking(false)}
          exhausted={remainingSelected === 0}
          onRestart={() => setConfirmRestart(true)}
          lastSaved={settings?.dailySections}
          moreSoon={packInfo.isFallback}
        />
      ) : (
        <section className="grid gap-3">
          <button
            type="button"
            onClick={openPicker}
            className="rounded-[2rem] bg-gradient-to-br from-plum/30 to-sky/40 p-5 text-left shadow-chunky"
          >
            <p className="text-3xl" aria-hidden>
              💪
            </p>
            <p className="font-display text-2xl font-semibold">Daily practice</p>
            <p className="text-sm font-bold text-ink/60">
              Pick sections · skip finished ones
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
            <p className="font-display text-2xl font-semibold">Olympiad prep</p>
            <p className="text-sm font-bold text-ink/60">
              Maths · English · Science · lessons optional
            </p>
          </Link>
        </section>
      )}

      {confirmRestart && (
        <div className="space-y-2 rounded-[1.75rem] border-2 border-coral/40 bg-white p-4 shadow-soft">
          <p className="font-display text-lg font-semibold">Start over daily exercises?</p>
          <p className="text-sm font-semibold text-ink/60">
            You’ll see finished questions again. Your streak and brave-try stars stay.
          </p>
          <Button
            variant="warn"
            onClick={() => {
              doRestartDaily();
            }}
          >
            Yes — start over
          </Button>
          <Button variant="ghost" onClick={() => setConfirmRestart(false)}>
            Keep going
          </Button>
        </div>
      )}

      {!picking && (
        <section className="rounded-[2rem] bg-white p-5 shadow-soft">
          <div className="mb-3 flex items-baseline justify-between gap-2">
            <h2 className="text-xl font-semibold">Today’s daily journey</h2>
            <span className="text-xs font-bold text-ink/45">{packInfo.shortLabel}</span>
          </div>
          {packInfo.isFallback && (
            <p className="mb-3 rounded-2xl bg-cream px-3 py-2 text-xs font-bold text-ink/55">
              🌱 Today we pick fresh questions from the Monday pack that you haven’t done yet.{" "}
              {MORE_DAILY_PACKS_SOON}!
            </p>
          )}
          <ol className="space-y-1.5">
            {journeyPhases.map((p, i) => {
              const spec = pack.phases[p];
              const done = doneToday || (currentIdx > -1 && i < currentIdx);
              const now = i === currentIdx;
              const colorIdx = PLAY_PHASES.indexOf(p);
              return (
                <li
                  key={p}
                  className={`flex items-center gap-3 rounded-2xl px-2 py-1 ${now ? "bg-sky/10" : ""}`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl ${
                      done ? "bg-mint/40" : PHASE_COLORS[colorIdx] ?? "bg-sun"
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
          {dailyDoneCount > 0 && !confirmRestart && (
            <button
              type="button"
              onClick={() => setConfirmRestart(true)}
              className="mt-3 flex min-h-11 w-full items-center justify-center rounded-2xl border border-ink/15 bg-sun/70 px-3 py-3 text-sm font-bold text-ink shadow-soft"
            >
              Start over daily exercises ({dailyDoneCount} finished) 🔄
            </button>
          )}
        </section>
      )}

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
          Daily done — try olympiad prep or see your stars!
        </MascotSays>
      )}

      <div className="flex flex-col items-center gap-2 py-2">
        <NavChip href="/plans" tone="soft">
          Plans for families →
        </NavChip>
        <NavChip href="/parent/gate" tone="solid">
          Grown-ups →
        </NavChip>
      </div>

      <SiteFooter />
    </main>
  );
}
