"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { storyById } from "@/lib/reading-champ/content";
import { weeklyMetrics } from "@/lib/reading-champ/analytics";
import { topTopics } from "@/lib/reading-champ/interests";
import { PARENT_LEVEL_CHOICES, plainWords } from "@/lib/reading-champ/levels";
import { REMINDER_COPY, reminderDue } from "@/lib/reading-champ/schedule";
import {
  defaultReadingState,
  markOffApp,
  setDailyLimit,
  setParentLevels,
  setPersonalize,
  setReminder,
  setWeeklyGoal,
} from "@/lib/reading-champ/state";
import { readReading, saveReading, useReading } from "@/lib/reading-champ/store";
import { localDay, weekStart } from "@/lib/date";
import { useProfile } from "@/lib/storage";

export default function ParentReadingPage() {
  const reading = useReading();
  const profile = useProfile();
  const [note, setNote] = useState<string | null>(null);
  if (!reading || profile === undefined) return null;

  const today = localDay();
  const metrics = weeklyMetrics(reading.events, today);
  const topics = topTopics(reading.interests, 3);
  const week = weekStart(today);
  const talks = reading.outcomes.filter(
    (item) => item.finished && weekStart(item.day) === week,
  );

  function sendReminder() {
    const now = new Date();
    const due = reminderDue({
      ...reading!.reminder,
      nowMinutes: now.getHours() * 60 + now.getMinutes(),
      today,
    });
    if (!reading!.reminder.enabled) {
      setNote("Turn the reminder on first. It stays off until you opt in.");
      return;
    }
    if (!due) {
      setNote("Not now. Quiet hours, or one note was already sent today.");
      return;
    }
    if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") {
      new Notification("Reading Champ", { body: REMINDER_COPY });
    }
    saveReading(setReminder(readReading(), { lastSentDay: today }));
    setNote(REMINDER_COPY);
  }

  return (
    <main className="flex flex-1 flex-col gap-5">
      <div>
        <h1 className="text-3xl font-semibold">Reading Champ</h1>
        <p className="text-sm font-semibold text-ink/55">
          {profile?.childName ? `${profile.childName} · ` : ""}
          This week on this device. No comparisons.
        </p>
      </div>

      <section className="rounded-[1.75rem] border border-sun/70 bg-sun/30 p-4 text-sm font-semibold">
        Verifiable parental consent (DPDP) is not wired yet. This is a stub. Reading Champ uses the same
        on-device nickname as the rest of Mindstrong. Nothing here is sent to an ad network, and there is no chat.
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Stat label="Stories finished" value={String(metrics.storiesCompleted)} />
        <Stat label="Reading days" value={String(metrics.activeDays)} />
      </section>

      <section className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Stories right now</h2>
        <p className="mt-2 font-bold">Fiction: {plainWords(reading.fictionLevel)}</p>
        <p className="font-bold">Non-fiction: {plainWords(reading.nonfictionLevel)}</p>
        <p className="mt-2 text-xs font-semibold text-ink/45">
          Non-fiction starts one step gentler. This screen does not keep a level history.
        </p>
        <div className="mt-3 space-y-2">
          <LevelRow
            label="Fiction stories"
            value={reading.fictionLevel}
            onChange={(level) =>
              saveReading(setParentLevels(readReading(), level, reading.nonfictionLevel, new Date().toISOString()))
            }
          />
          <LevelRow
            label="Non-fiction stories"
            value={reading.nonfictionLevel}
            onChange={(level) =>
              saveReading(setParentLevels(readReading(), reading.fictionLevel, level, new Date().toISOString()))
            }
          />
        </div>
      </section>

      <section className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Interests</h2>
        <p className="mt-1 font-bold">
          {reading.personalize
            ? topics.length
              ? `Lately: ${topics.join(", ")}.`
              : "Still learning what they like."
            : "Personalization is off, so the shelf is not using these interests."}
        </p>
        <label className="mt-3 flex min-h-12 items-center justify-between gap-3 rounded-2xl bg-cream px-4">
          <span className="font-semibold">Use interests on the shelf</span>
          <input
            type="checkbox"
            className="h-6 w-6 accent-coral"
            checked={reading.personalize}
            onChange={(event) => saveReading(setPersonalize(readReading(), event.target.checked))}
          />
        </label>
      </section>

      <section className="space-y-3 rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Talk about it</h2>
        {talks.length === 0 && <p className="text-sm font-semibold text-ink/55">No finished stories this week yet.</p>}
        {talks.map((item) => {
          const story = storyById(item.storyId);
          if (!story) return null;
          return (
            <div key={`${item.storyId}-${item.at}`} className="rounded-2xl bg-cream px-3 py-3">
              <p className="font-bold">{story.title}</p>
              <p className="text-sm font-semibold text-ink/70">{story.talkAbout}</p>
            </div>
          );
        })}
        <p className="text-sm font-semibold text-ink/55">
          Genres this week: {metrics.genres.length ? metrics.genres.join(", ") : "none yet"}.
        </p>
      </section>

      <section className="space-y-3 rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Weekly story goal</h2>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((goal) => (
            <button
              key={goal}
              type="button"
              className={`min-h-12 flex-1 rounded-2xl font-bold ${reading.weeklyGoal === goal ? "bg-coral text-white" : "bg-cream"}`}
              onClick={() => saveReading(setWeeklyGoal(readReading(), goal))}
            >
              {goal}
            </button>
          ))}
        </div>
        <h2 className="text-lg font-semibold">Daily reading time</h2>
        <div className="flex flex-wrap gap-2">
          {[null, 15, 20, 30].map((limit) => (
            <button
              key={String(limit)}
              type="button"
              className={`min-h-12 rounded-2xl px-4 font-bold ${reading.dailyLimitMin === limit ? "bg-sky/40" : "bg-cream"}`}
              onClick={() => saveReading(setDailyLimit(readReading(), limit))}
            >
              {limit == null ? "Off" : `${limit} min`}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Reminder</h2>
        <p className="text-sm font-semibold text-ink/60">Parents only. Calm tone. At most one a day. Off during quiet hours.</p>
        <label className="flex min-h-12 items-center justify-between rounded-2xl bg-cream px-4">
          <span className="font-semibold">Opt in</span>
          <input
            type="checkbox"
            className="h-6 w-6 accent-coral"
            checked={reading.reminder.enabled}
            onChange={(event) => saveReading(setReminder(readReading(), { enabled: event.target.checked }))}
          />
        </label>
        <label className="block text-sm font-bold">
          Time
          <input
            type="time"
            value={reading.reminder.time}
            className="mt-1 min-h-12 w-full rounded-2xl bg-cream px-3"
            onChange={(event) => saveReading(setReminder(readReading(), { time: event.target.value }))}
          />
        </label>
        <div className="grid grid-cols-2 gap-2">
          <label className="text-sm font-bold">
            Quiet from
            <input
              type="time"
              value={reading.reminder.quietStart}
              className="mt-1 min-h-12 w-full rounded-2xl bg-cream px-3"
              onChange={(event) => saveReading(setReminder(readReading(), { quietStart: event.target.value }))}
            />
          </label>
          <label className="text-sm font-bold">
            Quiet until
            <input
              type="time"
              value={reading.reminder.quietEnd}
              className="mt-1 min-h-12 w-full rounded-2xl bg-cream px-3"
              onChange={(event) => saveReading(setReminder(readReading(), { quietEnd: event.target.value }))}
            />
          </label>
        </div>
        <Button variant="secondary" onClick={sendReminder}>
          Send today’s note
        </Button>
        {note && <p className="text-sm font-semibold text-ink/70">{note}</p>}
        <label className="flex min-h-12 items-center justify-between rounded-2xl bg-cream px-4">
          <span className="font-semibold">We also read off the app this week</span>
          <input
            type="checkbox"
            className="h-6 w-6 accent-coral"
            checked={reading.offAppDays.includes(today)}
            onChange={() => saveReading(markOffApp(readReading(), today, new Date().toISOString()))}
          />
        </label>
      </section>

      <section className="space-y-2">
        <Button
          variant="secondary"
          onClick={() => {
            const blob = new Blob([JSON.stringify(readReading(), null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "reading-champ.json";
            link.click();
            URL.revokeObjectURL(url);
          }}
        >
          Export reading data
        </Button>
        <Button
          variant="warn"
          onClick={() => {
            saveReading(defaultReadingState(new Date().toISOString()));
          }}
        >
          Delete reading data
        </Button>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-ink/10 bg-white p-4 text-center shadow-soft">
      <p className="font-display text-3xl font-semibold">{value}</p>
      <p className="text-sm font-bold text-ink/55">{label}</p>
    </div>
  );
}

function LevelRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (level: number) => void;
}) {
  return (
    <label className="block text-sm font-bold">
      {label}
      <select
        className="mt-1 min-h-12 w-full rounded-2xl bg-cream px-3"
        value={PARENT_LEVEL_CHOICES.includes(value as (typeof PARENT_LEVEL_CHOICES)[number]) ? value : 5}
        onChange={(event) => onChange(Number(event.target.value))}
      >
        {PARENT_LEVEL_CHOICES.map((level) => (
          <option key={level} value={level}>
            {plainWords(level)}
          </option>
        ))}
      </select>
    </label>
  );
}
