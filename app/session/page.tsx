"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PhaseDots } from "@/components/session/PhaseDots";
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
import { localDay } from "@/lib/date";
import {
  advance,
  completeSession,
  currentItem,
  currentPhase,
  getResult,
  setReflection,
  setResult,
  startSession,
  todaySummary,
} from "@/lib/session";
import { canSpeak, itemSpeech, speak } from "@/lib/speech";
import {
  saveActiveSession,
  useActiveSession,
  useProgress,
  useSettings,
} from "@/lib/storage";
import type { ItemResult } from "@/lib/types";

export default function SessionPage() {
  const router = useRouter();
  const active = useActiveSession();
  const progress = useProgress();
  const settings = useSettings();
  const today = localDay();

  // Clear a stale session from a previous calendar day.
  useEffect(() => {
    if (active && active.date !== today) saveActiveSession(null);
  }, [active, today]);

  if (active === undefined || progress === undefined) {
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
    const pack = packForToday(today);
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <Mascot mood={doneToday ? "cheer" : "happy"} size={140} />
        {doneToday ? (
          <>
            <h1 className="text-4xl font-semibold">All done today!</h1>
            <p className="text-lg text-ink/70">
              Your brave brain did the work. Come back tomorrow.
            </p>
            <div className="w-full max-w-sm space-y-3">
              <Link href="/done" className="block">
                <Button variant="success">See my stars ⭐</Button>
              </Link>
              <Link href="/" className="block">
                <Button variant="ghost">Home</Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-semibold">Ready, brave brain?</h1>
            <p className="text-lg text-ink/70">{pack.title} · about 15–20 minutes</p>
            <div className="w-full max-w-sm">
              <Button onClick={() => startSession(pack)}>Start! 🚀</Button>
            </div>
          </>
        )}
      </main>
    );
  }

  const pack = getPack(session.packId) ?? mondayPack;
  const phase = currentPhase(session);
  const item = currentItem(session, pack);
  const phaseSpec = phase ? pack.phases[phase] : null;
  const itemsInPhase = phaseSpec?.items.length ?? 0;

  const next = () => advance(session, pack);
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

      <PhaseDots phase={session.phase} />

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
      </section>
    </main>
  );
}
