"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { QuizPlayer } from "@/components/prep/QuizPlayer";
import { Mascot } from "@/components/ui/Mascot";
import {
  getMockPaper,
  getPrepPack,
  savePaperScore,
  savePrepActive,
  usePrepActive,
} from "@/lib/prep";

export default function PrepPaperPage() {
  const router = useRouter();
  const active = usePrepActive();

  const questions = useMemo(() => {
    if (!active || active.kind !== "paper") return [];
    return getMockPaper(active.subject, active.grade);
  }, [active]);

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
      </main>
    );
  }

  const pack = getPrepPack(active.subject, active.grade);

  return (
    <main className="flex flex-1 flex-col gap-3">
      <header className="flex items-center justify-between">
        <Link href="/prep" className="rounded-full bg-white px-3 py-2 text-sm font-bold shadow-soft">
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
        onFinish={(correct, total) => {
          savePaperScore(active.subject, active.grade, correct, total);
          savePrepActive(null);
          router.push("/prep");
        }}
      />
    </main>
  );
}
