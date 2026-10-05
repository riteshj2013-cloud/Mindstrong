"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { QuizPlayer } from "@/components/prep/QuizPlayer";
import { Mascot } from "@/components/ui/Mascot";
import {
  getChapterSetQuestions,
  getPrepPack,
  savePrepActive,
  saveSetScore,
  usePrepActive,
} from "@/lib/prep";

export default function PrepQuizPage() {
  const router = useRouter();
  const active = usePrepActive();

  const questions = useMemo(() => {
    if (!active || active.kind !== "set" || !active.chapterId || !active.setId) return [];
    return getChapterSetQuestions(active.subject, active.grade, active.chapterId, active.setId);
  }, [active]);

  if (active === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={96} />
      </div>
    );
  }

  if (!active || active.kind !== "set" || !active.chapterId || !active.setId || !questions.length) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Mascot mood="think" size={100} />
        <p className="font-semibold">No practice set loaded.</p>
        <Link href="/prep" className="font-bold text-coral underline">
          Back to test prep
        </Link>
      </main>
    );
  }

  const pack = getPrepPack(active.subject, active.grade);
  const chapter = pack.chapters.find((c) => c.id === active.chapterId);
  const set = chapter?.sets.find((s) => s.id === active.setId);

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
        onFinish={(correct, total) => {
          saveSetScore(active.subject, active.grade, active.chapterId!, active.setId!, correct, total);
          savePrepActive(null);
          router.push("/prep");
        }}
      />
    </main>
  );
}
