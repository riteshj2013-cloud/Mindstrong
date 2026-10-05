"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { QuizPlayer } from "@/components/prep/QuizPlayer";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import {
  clearPrepActive,
  getChapterSetQuestions,
  getPrepPack,
  savePrepActive,
  saveSetScore,
  usePrepActive,
} from "@/lib/prep";

export default function PrepQuizPage() {
  const router = useRouter();
  const active = usePrepActive();

  const subject = active?.kind === "set" ? active.subject : null;
  const grade = active?.kind === "set" ? active.grade : null;
  const chapterId = active?.kind === "set" ? active.chapterId : null;
  const setId = active?.kind === "set" ? active.setId : null;

  const questions = useMemo(() => {
    if (!subject || grade == null || !chapterId || !setId) return [];
    return getChapterSetQuestions(subject, grade, chapterId, setId);
  }, [subject, grade, chapterId, setId]);

  const onFinish = useCallback(
    (correct: number, total: number) => {
      if (!subject || grade == null || !chapterId || !setId) return;
      saveSetScore(subject, grade, chapterId, setId, correct, total);
      savePrepActive(null);
      router.push("/prep");
    },
    [subject, grade, chapterId, setId, router],
  );

  if (active === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={96} />
      </div>
    );
  }

  if (!active || active.kind !== "set" || !chapterId || !setId || !questions.length) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Mascot mood="think" size={100} />
        <p className="font-semibold">No practice set loaded.</p>
        <Link href="/prep" className="font-bold text-coral underline">
          Back to test prep
        </Link>
        {active ? (
          <Button
            variant="ghost"
            onClick={() => {
              clearPrepActive();
              router.push("/prep");
            }}
          >
            Clear stuck session
          </Button>
        ) : null}
      </main>
    );
  }

  const pack = getPrepPack(active.subject, active.grade);
  const chapter = pack.chapters.find((c) => c.id === chapterId);
  const set = chapter?.sets.find((s) => s.id === setId);

  return (
    <main className="flex flex-1 flex-col gap-3">
      <header className="flex items-center justify-between">
        <Link href="/prep" className="rounded-full bg-white px-3 py-2 text-sm font-bold shadow-soft">
          ← Prep
        </Link>
        <p className="font-display text-base font-semibold">
          {chapter?.emoji} {set?.title}
        </p>
        <span className="w-14" />
      </header>
      <QuizPlayer
        title={`${chapter?.title ?? ""} · ${set?.title ?? ""}`}
        questions={questions}
        onFinish={onFinish}
      />
    </main>
  );
}
