"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PhaseDots } from "@/components/session/PhaseDots";
import { SectionPicker } from "@/components/session/SectionPicker";
import {
  BuildCard,
  ChoiceCard,
  HardTryCard,
  IntroCard,
  ModelCard,
  ReflectCard,
  RitualCard,
} from "@/components/session/items";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import { getPack, packForToday } from "@/lib/content";
import { mondayPack } from "@/lib/content/monday";
import { clampAge } from "@/lib/content/age";
import { clearDailyCompleted } from "@/lib/completed";
import { localDay } from "@/lib/date";
import {
  advance,
  completeSession,
  countRemainingItems,
  currentItem,
  currentPhase,
  getResult,
  itemsInPhaseCount,
  sessionPhases,
  setReflection,
  setResult,
  startSession,
  todaySummary,
} from "@/lib/session";
import { canSpeak, itemSpeech, speak } from "@/lib/speech";
import {
  DEFAULT_SETTINGS,
  saveActiveSession,
  saveSettings,
  useActiveSession,
  useProfile,
  useProgress,
  useSettings,
} from "@/lib/storage";
import { PLAY_PHASES, type ItemResult, type PlayPhase } from "@/lib/types";

export default function SessionPage() {
  const router = useRouter();
  const active = useActiveSession();
  const progress = useProgress();
  const profile = useProfile();
  const settings = useSettings();
  const today = localDay();
  const [selected, setSelected] = useState<PlayPhase[]>([...PLAY_PHASES]);
  const [showPicker, setShowPicker] = useState(false);
  const [confirmRestart, setConfirmRestart] = useState(false);

  useEffect(() => {
    if (active && active.date !== today) saveActiveSession(null);
  }, [active, today]);

  useEffect(() => {
    if (!settings) return;
    const saved = settings.dailySections;
    if (saved && saved.length > 0) {
      setSelected(PLAY_PHASES.filter((p) => saved.includes(p)));
    }
  }, [settings]);

  if (active === undefined || progress === undefined || profile === undefined || settings === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={96} />
      </div>
    );
  }

  const session =
    active && active.date === today && active.phase !== "complete" ? active : null;

  if (!session) {
    const doneToday = todaySummary(progress, today);
    const pack = packForToday(today, clampAge(profile?.age ?? 8));
    const remaining = countRemainingItems(pack, selected.length ? selected : PLAY_PHASES);

    function begin() {
      const result = startSession(pack, selected);
      if (!result.ok) {
        setConfirmRestart(true);
        return;
      }
      saveSettings({ ...(settings ?? DEFAULT_SETTINGS), dailySections: selected });
      setShowPicker(false);
    }

    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <Mascot mood={doneToday ? "cheer" : "happy"} size={140} />
        {doneToday && !showPicker ? (
          <>
            <h1 className="text-4xl font-semibold">All done today!</h1>
            <p className="text-lg text-ink/70">
              Your brave brain did the work. Come back tomorrow — or pick more sections.
            </p>
            <div className="w-full max-w-sm space-y-3">
              <Link href="/done" className="block">
                <Button variant="success">See my stars ⭐</Button>
              </Link>
              <Button variant="secondary" onClick={() => setShowPicker(true)}>
                Practice more sections
              </Button>
              <Link href="/" className="block">
                <Button variant="ghost">Home</Button>
              </Link>
            </div>
          </>
        ) : showPicker || !doneToday ? (
          <div className="w-full max-w-md text-left">
            {!showPicker && (
              <>
                <h1 className="mb-2 text-center text-4xl font-semibold">Ready, brave brain?</h1>
                <p className="mb-4 text-center text-lg text-ink/70">
                  {pack.title} · pick your sections
                </p>
              </>
            )}
            <SectionPicker
              pack={pack}
              selected={selected}
              onChange={setSelected}
              onStart={begin}
              onCancel={doneToday ? () => setShowPicker(false) : () => router.push("/")}
              exhausted={remaining === 0}
              onRestart={() => setConfirmRestart(true)}
            />
            {confirmRestart && (
              <div className="mt-3 space-y-2 rounded-[1.75rem] border-2 border-coral/40 bg-white p-4 shadow-soft">
                <p className="font-display text-lg font-semibold">Start over daily exercises?</p>
                <p className="text-sm font-semibold text-ink/60">
                  Finished questions come back. Streak & brave tries stay.
                </p>
                <Button
                  variant="warn"
                  onClick={() => {
                    clearDailyCompleted();
                    setConfirmRestart(false);
                  }}
                >
                  Yes — start over
                </Button>
                <Button variant="ghost" onClick={() => setConfirmRestart(false)}>
                  Keep going
                </Button>
              </div>
            )}
          </div>
        ) : null}
      </main>
    );
  }

  const pack = getPack(session.packId) ?? mondayPack;
  const phase = currentPhase(session);
  const item = currentItem(session, pack);
  const phaseSpec = phase ? pack.phases[phase] : null;
  const itemsInPhase = phase ? itemsInPhaseCount(session, pack, phase) : 0;
  const phases = sessionPhases(session);

  const next = () => {
    const updated = advance(session, pack);
    if (updated.phase === "complete") {
      completeSession(updated);
      router.push("/done");
    }
  };
  const onResult = (patch: Partial<ItemResult>) => {
    if (item) setResult(session, item.id, patch);
  };

  function finish() {
    if (!session) return;
    completeSession(session);
    router.push("/done");
  }

  return (
    <main className="flex flex-1 flex-col gap-4">
      <header className="flex items-center justify-between gap-2">
        <Link
          href="/"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-soft"
          aria-label="Pause and go home"
          title="Pause — we’ll save your spot"
        >
          ⏸️
        </Link>
        {phaseSpec && (
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft">
            <span aria-hidden className="text-xl">
              {phaseSpec.emoji}
            </span>
            <span className="font-display text-lg font-semibold">{phaseSpec.kidTitle}</span>
            <span className="text-sm font-bold text-ink/40">
              {session.itemIndex + 1}/{itemsInPhase}
            </span>
          </div>
        )}
        {settings?.readAloud && canSpeak() && item ? (
          <button
            type="button"
            onClick={() => speak(itemSpeech(item))}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-soft"
            aria-label="Read to me"
            title="Read to me"
          >
            🔊
          </button>
        ) : (
          <span className="h-14 w-14" />
        )}
      </header>

      <PhaseDots phase={session.phase} phases={phases} />

      <section
        key={item?.id}
        className="flex flex-1 animate-fade-up flex-col gap-4 rounded-[2.5rem] bg-white/60 p-4 shadow-soft backdrop-blur-sm"
      >
        {item?.type === "intro" && <IntroCard item={item} onNext={next} />}
        {item?.type === "ritual" && <RitualCard item={item} onNext={next} />}
        {item?.type === "model" && <ModelCard item={item} onNext={next} />}
        {item?.type === "choice" && (
          <ChoiceCard
            item={item}
            result={getResult(session, item.id)}
            onResult={onResult}
            onNext={next}
          />
        )}
        {item?.type === "build" && (
          <BuildCard
            item={item}
            result={getResult(session, item.id)}
            onResult={onResult}
            onNext={next}
          />
        )}
        {item?.type === "hard_try" && (
          <HardTryCard
            item={item}
            result={getResult(session, item.id)}
            onResult={onResult}
            onNext={next}
          />
        )}
        {item?.type === "reflect" && (
          <ReflectCard
            item={item}
            reflection={session.reflection ?? {}}
            onReflect={(r) => setReflection(session, r)}
            onFinish={finish}
          />
        )}
        {!item && (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <Mascot mood="cheer" size={100} />
            <p className="text-lg font-bold">Section complete!</p>
            <Button onClick={finish}>Finish ⭐</Button>
          </div>
        )}
      </section>
    </main>
  );
}
