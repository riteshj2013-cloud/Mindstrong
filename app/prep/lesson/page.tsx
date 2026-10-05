"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LessonPlayer } from "@/components/prep/LessonPlayer";
import { Mascot } from "@/components/ui/Mascot";
import { getPrepPack, markLessonDone, savePrepActive, usePrepActive } from "@/lib/prep";

export default function PrepLessonPage() {
  const router = useRouter();
  const active = usePrepActive();

  if (active === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={96} />
      </div>
    );
  }

  if (!active || active.kind !== "lesson" || !active.chapterId) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Mascot mood="think" size={100} />
        <p className="text-lg font-semibold">No lesson in progress.</p>
        <Link href="/prep" className="font-bold text-coral underline">
          Back to test prep
        </Link>
      </main>
    );
  }

  const pack = getPrepPack(active.subject, active.grade);
  const chapter = pack.chapters.find((c) => c.id === active.chapterId);
  if (!chapter) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        <p>Chapter missing.</p>
        <Link href="/prep">Back</Link>
      </main>
    );
  }

  function finish(markDone: boolean) {
    if (markDone) markLessonDone(active!.subject, active!.grade, active!.chapterId!);
    savePrepActive(null);
    router.push("/prep");
  }

  return (
    <main className="flex flex-1 flex-col gap-3">
      <header className="flex items-center justify-between">
        <Link href="/prep" className="rounded-full bg-white px-3 py-2 text-sm font-bold shadow-soft">
          ← Prep
        </Link>
        <p className="font-display text-lg font-semibold">
          {chapter.emoji} {chapter.title}
        </p>
        <span className="w-14" />
      </header>
      <p className="text-center text-xs font-bold text-ink/45">
        Optional lesson · skip anytime · sets stay unlocked
      </p>
      <LessonPlayer
        steps={chapter.lesson}
        onDone={() => finish(true)}
        onSkip={() => finish(false)}
      />
    </main>
  );
}
