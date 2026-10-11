"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Reader } from "@/components/reading-champ/Reader";
import { ReadingHeader } from "@/components/reading-champ/ReadingHeader";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import { storyById } from "@/lib/reading-champ/content";
import { minutesOnDay } from "@/lib/reading-champ/state";
import { useReading } from "@/lib/reading-champ/store";
import { localDay } from "@/lib/date";

export function ReadClient() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-1 items-center justify-center">
          <Mascot size={80} />
        </div>
      }
    >
      <ReadInner />
    </Suspense>
  );
}

function ReadInner() {
  const params = useParams<{ storyId: string }>();
  const search = useSearchParams();
  const reading = useReading();
  const [bypassPause, setBypassPause] = useState(false);
  const storyId = Array.isArray(params.storyId) ? params.storyId[0] : params.storyId;
  const story = storyId ? storyById(storyId) : undefined;
  if (!reading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={80} />
      </div>
    );
  }
  const overLimit =
    !bypassPause &&
    story &&
    reading.dailyLimitMin != null &&
    minutesOnDay(reading, localDay()) >= reading.dailyLimitMin &&
    reading.current?.storyId !== story.id;
  if (story && overLimit) {
    return (
      <main className="flex flex-1 flex-col gap-4">
        <ReadingHeader title={story.title} />
        <section className="space-y-3 rounded-[2rem] bg-white p-5 text-center shadow-chunky">
          <Mascot mood="happy" size={96} float={false} />
          <h1 className="font-display text-3xl font-semibold">That is a good pausing place</h1>
          <p className="font-bold text-ink/70">A grown-up set a reading time for today. You can stop here.</p>
          <Link href="/reading">
            <Button>That is enough for today</Button>
          </Link>
          <Button variant="ghost" onClick={() => setBypassPause(true)}>
            Read a little more
          </Button>
        </section>
      </main>
    );
  }
  if (!story || story.status !== "reviewed") {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Mascot mood="think" size={96} />
        <h1 className="font-display text-3xl font-semibold">That story is not in the library</h1>
        <Link href="/reading" className="w-full">
          <Button>Back to Reading Champ</Button>
        </Link>
      </main>
    );
  }
  return <Reader story={story} challenge={search.get("challenge") === "1"} />;
}
