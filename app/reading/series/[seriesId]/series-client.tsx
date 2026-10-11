"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ReadingHeader } from "@/components/reading-champ/ReadingHeader";
import { Mascot } from "@/components/ui/Mascot";
import { seriesById, storiesInSeries } from "@/lib/reading-champ/content";
import { setNudge } from "@/lib/reading-champ/state";
import { updateReading, useReading } from "@/lib/reading-champ/store";

export function SeriesClient() {
  const params = useParams<{ seriesId: string }>();
  const reading = useReading();
  const seriesId = Array.isArray(params.seriesId) ? params.seriesId[0] : params.seriesId;
  const series = seriesId ? seriesById(seriesId) : undefined;
  const stories = series ? storiesInSeries(series.id) : [];

  if (!series) {
    return (
      <main className="flex flex-1 flex-col gap-4">
        <ReadingHeader />
        <Mascot mood="think" size={80} />
        <p className="font-bold">That series is not in the library yet.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-4">
      <ReadingHeader title={series.title} />
      <section className="rounded-[2rem] bg-white p-5 shadow-chunky">
        <p className="text-4xl" aria-hidden>
          {series.emoji}
        </p>
        <p className="mt-2 font-bold text-ink/70">{series.blurb}</p>
        {stories.some((story) => story.source.origin === "adapted") && (
          <p className="mt-3 text-sm font-semibold text-ink/55">
            {stories.find((story) => story.source.origin === "adapted")?.source.attribution}
          </p>
        )}
      </section>
      <ul className="space-y-3">
        {stories.map((story) => {
          const done = reading?.finishedIds.includes(story.id);
          return (
            <li key={story.id} className="rounded-[1.5rem] bg-white p-4 shadow-soft">
              <Link href={`/reading/read/${story.id}`}>
                <p className="text-sm font-bold text-ink/45">Episode {story.episode}</p>
                <p className="font-display text-2xl font-semibold">{story.title}</p>
                {done && <p className="text-sm font-bold text-leaf">On your shelf</p>}
              </Link>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="min-h-12 rounded-2xl bg-mint/30 font-bold"
                  onClick={() => updateReading((state) => setNudge(state, -1))}
                >
                  Easier
                </button>
                <button
                  type="button"
                  className="min-h-12 rounded-2xl bg-sun/70 font-bold"
                  onClick={() => updateReading((state) => setNudge(state, 1))}
                >
                  Harder
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
