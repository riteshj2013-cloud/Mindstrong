"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { QuizPlayer } from "@/components/prep/QuizPlayer";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import {
  clearPrepActive,
  getMockPaper,
  getPrepPack,
  savePaperScore,
  savePrepActive,
  usePrepActive,
} from "@/lib/prep";

export default function PrepPaperPage() {
  const router = useRouter();
  const active = usePrepActive();

  const subject = active?.kind === "paper" ? active.subject : null;
  const grade = active?.kind === "paper" ? active.grade : null;

  const questions = useMemo(() => {
    if (!subject || grade == null) return [];
    return getMockPaper(subject, grade);
  }, [subject, grade]);

  const onFinish = useCallback(
    (correct: number, total: number) => {
      if (!subject || grade == null) return;
      savePaperScore(subject, grade, correct, total);
    },
    [subject, grade],
  );

  const onContinue = useCallback(() => {
    savePrepActive(null);
    router.push("/prep");
  }, [router]);

  if (active === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={96} />
      </div>
    );
  }

  if (!active || active.kind !== "paper" || !questions.length) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Mascot mood="think" size={100} />
        <p className="font-semibold">No mock paper loaded.</p>
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

  return (
    <main className="flex flex-1 flex-col gap-3">
      <header className="flex items-center justify-between">
        <Link href="/prep" className="inline-flex min-h-11 items-center rounded-full bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-soft border border-ink/10">
          ← Prep
        </Link>
        <p className="max-w-[60%] truncate text-center font-display text-sm font-semibold">
          {pack.paperTitle}
        </p>
        <span className="w-14" />
      </header>
      <QuizPlayer
        title={pack.paperTitle}
        questions={questions}
        tryBeforeHint={false}
        onFinish={onFinish}
        onContinue={onContinue}
      />
    </main>
  );
}
