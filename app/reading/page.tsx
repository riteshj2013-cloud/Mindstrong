"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ReadingHeader } from "@/components/reading-champ/ReadingHeader";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import { catalog, seriesById, storyById } from "@/lib/reading-champ/content";
import { SERIES } from "@/lib/reading-champ/content";
import { buildShelf, startedSeriesFrom } from "@/lib/reading-champ/recommend";
import { dismissNotice, noteSeen, openSeries, setNudge, tapTopic } from "@/lib/reading-champ/state";
import { updateReading, useReading } from "@/lib/reading-champ/store";
import { localDay } from "@/lib/date";
import { useProfile } from "@/lib/storage";

export default function ReadingHomePage() {
  const profile = useProfile();
  const reading = useReading();

  useEffect(() => {
    if (!reading || reading.firstSeenDay) return;
    updateReading((state) => noteSeen(state, localDay()));
  }, [reading]);

  if (profile === undefined || reading === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={88} />
      </div>
    );
  }

  if (!profile) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Mascot mood="cheer" size={120} />
        <h1 className="font-display text-3xl font-semibold">Tell Bo your name first</h1>
        <Link href="/" className="w-full">
          <Button>Back home</Button>
        </Link>
      </main>
    );
  }

  const name = profile.childName || "reader";
  const outside = profile.age < 8 || profile.age > 10;
  const stories = catalog();
  const current = reading.current ? storyById(reading.current.storyId) : undefined;
  const shelf = reading.placed
    ? buildShelf({
        catalog: stories,
        fictionLevel: reading.fictionLevel,
        nonfictionLevel: reading.nonfictionLevel,
        finishedIds: reading.finishedIds,
        startedSeries: startedSeriesFrom(
          reading.finishedIds,
          stories,
          reading.outcomes.map((item) => stories.find((story) => story.id === item.storyId)?.seriesId ?? ""),
        ).filter(Boolean),
        lastSeriesId:
          current?.seriesId ?? storyById(reading.outcomes.at(-1)?.storyId ?? "")?.seriesId ?? null,
        storiesStarted: reading.storiesStarted,
        interests: reading.interests,
        personalize: reading.personalize,
        nudge: reading.nudge,
      })
    : [];

  return (
    <main className="flex flex-1 flex-col gap-4">
      <ReadingHeader title="Reading Champ" backHref="/" backLabel="Mindstrong" />
      <section className="rounded-[2rem] bg-gradient-to-br from-sky/40 via-sun/70 to-mint/50 p-5 shadow-chunky">
        <p className="font-display text-3xl font-semibold">Hi, {name}</p>
        <p className="mt-1 font-bold text-ink/70">Comics that fit you. One story, then a stop.</p>
      </section>
      {outside && (
        <p className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-ink/70 shadow-soft">
          These comics are written for ages 8–10. Story Scout still picks a gentle fit.
        </p>
      )}
      {reading.notice && (
        <button
          type="button"
          className="rounded-2xl bg-white px-4 py-3 text-left font-bold shadow-soft"
          onClick={() => updateReading(dismissNotice)}
        >
          {reading.notice === "easier-picks" ? "Here are some easier picks." : "New stories are ready."} Tap to hide.
        </button>
      )}
      {current && !reading.finishedIds.includes(current.id) && (
        <Link href={`/reading/read/${current.id}`} className="rounded-[1.75rem] bg-white p-4 shadow-chunky">
          <p className="text-sm font-bold text-ink/50">Continue</p>
          <p className="font-display text-2xl font-semibold">{current.title}</p>
          <p className="text-sm font-bold text-ink/55">About {current.expectedMinutes} min</p>
        </Link>
      )}
      {!reading.placed ? (
        <section className="space-y-3 rounded-[2rem] bg-white p-5 text-center shadow-chunky">
          <Mascot mood="think" size={96} />
          <h2 className="font-display text-2xl font-semibold">Story Scout</h2>
          <p className="font-bold text-ink/65">A short game finds comics that feel just right.</p>
          <Link href="/reading/placement">
            <Button>Start Story Scout</Button>
          </Link>
        </section>
      ) : (
        <section className="space-y-3">
          <div className="flex items-end justify-between gap-2">
            <h2 className="font-display text-2xl font-semibold">Pick 1 of 3</h2>
            {reading.nudge !== 0 && (
              <button type="button" className="min-h-11 text-sm font-bold text-ink/60" onClick={() => updateReading((s) => setNudge(s, 0))}>
                My usual stories
              </button>
            )}
          </div>
          {shelf.map((slot) => (
            <article key={slot.story.id} className="rounded-[1.75rem] bg-white p-4 shadow-soft">
              <p className="text-sm font-bold text-ink/45">{slot.reason}</p>
              <Link href={`/reading/read/${slot.story.id}${slot.role === "challenge" ? "?challenge=1" : ""}`}>
                <p className="font-display text-2xl font-semibold">{slot.story.title}</p>
                <p className="text-sm font-bold text-ink/55">
                  {seriesById(slot.story.seriesId)?.title} · About {slot.story.expectedMinutes} min
                </p>
              </Link>
              <div className="mt-2 flex flex-wrap gap-2">
                {slot.story.themes.map((theme) => (
                  <button
                    key={theme}
                    type="button"
                    className="min-h-11 rounded-full bg-cream px-3 text-sm font-bold"
                    onClick={() => updateReading((state) => tapTopic(state, theme, new Date().toISOString()))}
                  >
                    {theme}
                  </button>
                ))}
              </div>
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
            </article>
          ))}
        </section>
      )}
      <section className="space-y-2">
        <h2 className="font-display text-2xl font-semibold">Series</h2>
        {SERIES.map((series) => (
          <Link
            key={series.id}
            href={`/reading/series/${series.id}`}
            onClick={() => updateReading((state) => openSeries(state, series.id, new Date().toISOString()))}
            className="flex min-h-16 items-center gap-3 rounded-[1.5rem] bg-white px-4 py-3 shadow-soft"
          >
            <span className="text-3xl" aria-hidden>
              {series.emoji}
            </span>
            <span>
              <span className="block font-display text-lg font-semibold">{series.title}</span>
              <span className="text-sm font-bold text-ink/55">{series.blurb}</span>
            </span>
          </Link>
        ))}
      </section>
      <div className="grid grid-cols-2 gap-3">
        <Link href="/reading/shelf" className="rounded-[1.5rem] bg-white p-4 text-center font-display text-lg font-semibold shadow-soft">
          My shelf
        </Link>
        <Link href="/reading/words" className="rounded-[1.5rem] bg-white p-4 text-center font-display text-lg font-semibold shadow-soft">
          Words
        </Link>
      </div>
    </main>
  );
}
