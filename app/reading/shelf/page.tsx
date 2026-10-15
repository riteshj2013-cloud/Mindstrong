"use client";

import Link from "next/link";
import { ReadingHeader } from "@/components/reading-champ/ReadingHeader";
import { Mascot } from "@/components/ui/Mascot";
import { GENRE_BADGES, storyById } from "@/lib/reading-champ/content";
import { finishesInWeek, restDaysThisWeek, setWeeklyGoal, toggleRestDay } from "@/lib/reading-champ/state";
import { useReading, updateReading } from "@/lib/reading-champ/store";
import { localDay, weekDays } from "@/lib/date";

export default function ShelfPage() {
  const reading = useReading();
  if (!reading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={80} />
      </div>
    );
  }
  const today = localDay();
  const days = weekDays(today);
  const done = finishesInWeek(reading, today);
  const rests = new Set(restDaysThisWeek(reading, today));
  const read = new Set(reading.readingDays);

  return (
    <main className="flex flex-1 flex-col gap-4">
      <ReadingHeader title="My shelf" />
      {reading.finishedIds.length > 0 && (
        <p className="rounded-[1.5rem] bg-sun/50 px-4 py-3 font-display text-xl font-semibold">I am a reader</p>
      )}
      <section className="rounded-[2rem] bg-white p-5 shadow-chunky">
        <h2 className="font-display text-2xl font-semibold">This week</h2>
        <p className="font-bold text-ink/60">
          {done} of {reading.weeklyGoal} stories
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((goal) => (
            <button
              key={goal}
              type="button"
              className={`min-h-12 min-w-12 rounded-full font-bold ${reading.weeklyGoal === goal ? "bg-coral text-white" : "bg-cream"}`}
              onClick={() => updateReading((state) => setWeeklyGoal(state, goal))}
            >
              {goal}
            </button>
          ))}
        </div>
      </section>
      <section className="rounded-[2rem] bg-white p-5 shadow-soft">
        <h2 className="font-display text-2xl font-semibold">Reading days</h2>
        <p className="text-sm font-bold text-ink/50">Blank days are just blank. Rest days are part of the week.</p>
        <div className="mt-3 grid grid-cols-7 gap-1.5">
          {days.map((day) => {
            const isRead = read.has(day);
            const isRest = rests.has(day);
            return (
              <div key={day} className="flex flex-col items-center gap-1">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl text-lg ${
                    isRead ? "bg-mint/50" : isRest ? "bg-sky/20" : "bg-ink/5"
                  }`}
                  aria-label={isRead ? "Read" : isRest ? "Rest day" : "Open day"}
                >
                  {isRead ? "📘" : isRest ? "🌙" : ""}
                </span>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          className="mt-3 min-h-12 w-full rounded-2xl bg-cream font-bold"
          onClick={() => updateReading((state) => toggleRestDay(state, today))}
        >
          {reading.restDays.includes(today) ? "Today is a rest day" : "Mark today as a rest day"}
        </button>
      </section>
      <section>
        <h2 className="mb-2 font-display text-2xl font-semibold">Finished covers</h2>
        {reading.covers.length === 0 ? (
          <p className="font-bold text-ink/55">Finish a story and its cover lands here.</p>
        ) : (
          <ul className="grid grid-cols-2 gap-3">
            {reading.covers.map((cover) => {
              const story = storyById(cover.storyId);
              if (!story) return null;
              return (
                <li key={cover.storyId}>
                  <Link href={`/reading/read/${story.id}`} className="block rounded-[1.5rem] bg-white p-4 shadow-soft">
                    <p className="text-3xl" aria-hidden>
                      {story.genre === "nonfiction" ? "🔎" : "📘"}
                    </p>
                    <p className="font-display text-lg font-semibold">{story.title}</p>
                    <p className="text-sm font-bold text-ink/55">About {story.expectedMinutes} min</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
      <section className="flex flex-wrap gap-2">
        {GENRE_BADGES.filter((badge) => reading.badges.includes(badge.id)).map((badge) => (
          <span key={badge.id} className="rounded-full bg-white px-3 py-2 text-sm font-bold shadow-soft">
            {badge.emoji} {badge.label}
          </span>
        ))}
      </section>
    </main>
  );
}
