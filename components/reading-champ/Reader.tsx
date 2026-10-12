"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Confetti } from "@/components/ui/Confetti";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import { defineWord, nextEpisode, toMeta } from "@/lib/reading-champ/content";
import { displayMinutes, estimateReadingMinutes } from "@/lib/reading-champ/reading-time";
import { flatPanels } from "@/lib/reading-champ/text";
import {
  abandonStory,
  finishStory,
  markGoalCelebrated,
  saveWord,
  setGuidedView,
  setPanel,
  startStory,
} from "@/lib/reading-champ/state";
import { updateReading, useReading } from "@/lib/reading-champ/store";
import type { Story, StoryPage } from "@/lib/reading-champ/types";
import { localDay } from "@/lib/date";
import { stopSpeaking } from "@/lib/speech";
import { pageBubbleOrder, StoryPageView } from "./PageView";
import { ReadingHeader } from "./ReadingHeader";
import { speakWords, wordStarts } from "./speak";

export function Reader({ story, challenge }: { story: Story; challenge: boolean }) {
  const reading = useReading();
  const router = useRouter();
  const pages = story.pages;
  const panels = useMemo(() => flatPanels(story), [story]);
  const meta = useMemo(() => toMeta(story), [story]);
  const [phase, setPhase] = useState<"read" | "questions" | "enough">("read");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [heard, setHeard] = useState<{ bubbleId: string; index: number } | null>(null);
  const [defined, setDefined] = useState<{ word: string; meaning: string | null } | null>(null);
  const [tools, setTools] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [touchX, setTouchX] = useState<number | null>(null);
  const pinch = useRef<{ distance: number; zoom: number } | null>(null);
  const startedFor = useRef<string | null>(null);

  useEffect(() => {
    if (!reading || startedFor.current === story.id) return;
    startedFor.current = story.id;
    if (reading.current?.storyId !== story.id) {
      const day = localDay();
      const now = new Date().toISOString();
      updateReading((state) => startStory(state, meta, { isChallenge: challenge, now, day }));
    }
    return () => stopSpeaking();
  }, [reading, story.id, challenge, meta]);

  if (!reading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={80} />
      </div>
    );
  }

  const guideAllowed = story.ladderLevel <= 6 || reading.dyslexiaFont;
  const guided = guideAllowed && reading.guidedView;
  const total = guided ? panels.length : pages.length;
  const index = Math.min(
    reading.current?.storyId === story.id ? reading.current.panelIndex : 0,
    Math.max(0, total - 1),
  );
  const page: StoryPage | undefined = guided
    ? panels[index]
      ? { id: `guided-${panels[index].panel.id}`, panels: [panels[index].panel] }
      : undefined
    : pages[index];
  const book = story.genre === "nonfiction";
  const textSize = reading.textSize;
  const dyslexia = reading.dyslexiaFont;

  function go(next: number) {
    stopSpeaking();
    setHeard(null);
    updateReading((state) => setPanel(state, Math.min(Math.max(0, next), total - 1)));
  }

  function hear(target: StoryPage) {
    const order = pageBubbleOrder(target);
    const text = order.map((item) => item.text).join(" ");
    setHeard({ bubbleId: order[0]?.bubbleId ?? "", index: -1 });
    speakWords(
      text,
      reading!.voice,
      (wordIndex) => {
        let remaining = wordIndex;
        for (const item of order) {
          const count = wordStarts(item.text).length;
          if (remaining < count) {
            setHeard({ bubbleId: item.bubbleId, index: remaining });
            return;
          }
          remaining -= count;
        }
      },
      () => setHeard(null),
    );
  }

  function onDefine(word: string) {
    stopSpeaking();
    const meaning = defineWord(word, story.glossary);
    setDefined({ word, meaning });
    updateReading((state) =>
      saveWord(state, {
        word,
        definition: meaning ?? "Saved to ask a grown-up. We do not have a simple meaning yet.",
        storyId: story.id,
        now: new Date().toISOString(),
      }),
    );
  }

  function toggleGuide() {
    stopSpeaking();
    setHeard(null);
    if (!reading!.guidedView) {
      const pageIndex = Math.min(index, pages.length - 1);
      const flatIndex = Math.max(
        0,
        panels.findIndex((item) => item.pageIndex === pageIndex),
      );
      updateReading((state) => setGuidedView(state, true, flatIndex));
      return;
    }
    const pageIndex = panels[index]?.pageIndex ?? 0;
    updateReading((state) => setGuidedView(state, false, pageIndex));
  }

  function finish() {
    const started = Date.parse(reading?.current?.startedAt ?? "") || Date.now();
    const minutes = Math.max(0.5, Math.round(((Date.now() - started) / 60000) * 10) / 10);
    updateReading((state) =>
      finishStory(state, meta, {
        comprehensionCorrect: correctCount,
        comprehensionTotal: story.comprehension.length,
        minutes,
        day: localDay(),
        now: new Date().toISOString(),
      }),
    );
    setPhase("enough");
  }

  const upcoming = nextEpisode(story);
  const progress = total === 0 ? 0 : ((index + 1) / total) * 100;
  const readMinutes = displayMinutes(estimateReadingMinutes(story));

  return (
    <main className="flex flex-1 flex-col gap-4">
      <ReadingHeader title={story.title} />
      {phase === "read" && page && (
        <section
          className="space-y-3"
          onTouchStart={(event) => {
            if (event.touches.length === 2) {
              const [a, b] = [event.touches[0], event.touches[1]];
              pinch.current = {
                distance: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY),
                zoom,
              };
              return;
            }
            pinch.current = null;
            setTouchX(event.changedTouches[0]?.clientX ?? null);
          }}
          onTouchMove={(event) => {
            if (event.touches.length !== 2 || !pinch.current) return;
            const [a, b] = [event.touches[0], event.touches[1]];
            const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
            const next = pinch.current.zoom * (distance / pinch.current.distance);
            setZoom(Math.min(2.4, Math.max(1, next)));
          }}
          onTouchEnd={(event) => {
            if (pinch.current) {
              pinch.current = null;
              return;
            }
            if (touchX == null || zoom > 1) return;
            const dx = (event.changedTouches[0]?.clientX ?? touchX) - touchX;
            if (dx < -48 && index < total - 1) go(index + 1);
            if (dx > 48 && index > 0) go(index - 1);
            setTouchX(null);
          }}
        >
          <div className="space-y-1">
            <div
              className="h-3 overflow-hidden rounded-full bg-white"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={total}
              aria-valuenow={index + 1}
              aria-label={guided ? "Panel progress" : "Page progress"}
            >
              <div className="h-full rounded-full bg-coral" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-center text-sm font-bold text-ink/60">
              About {readMinutes} min · {guided ? "Panel" : "Page"} {index + 1} of {total}
            </p>
          </div>
          <div className="relative">
            <button
              type="button"
              aria-label={guided ? "Previous panel" : "Previous page"}
              className="absolute top-0 bottom-0 left-0 z-10 w-8"
              disabled={index === 0}
              onClick={() => go(index - 1)}
            />
            <button
              type="button"
              aria-label={guided ? "Next panel" : "Next page"}
              className="absolute top-0 bottom-0 right-0 z-10 w-8"
              disabled={index >= total - 1}
              onClick={() => go(index + 1)}
            />
            <div className="overflow-x-auto">
              <div style={{ width: `${zoom * 100}%` }}>
                <StoryPageView
                  page={page}
                  book={book}
                  textSize={textSize}
                  dyslexia={dyslexia}
                  heard={heard}
                  onWord={onDefine}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary" disabled={index === 0} onClick={() => go(index - 1)}>
              {guided ? "Previous panel" : "Previous page"}
            </Button>
            {index < total - 1 ? (
              <Button onClick={() => go(index + 1)}>{guided ? "Next panel" : "Next page"}</Button>
            ) : (
              <Button onClick={() => setPhase("questions")}>Questions</Button>
            )}
          </div>
          <Button variant="secondary" onClick={() => page && hear(page)}>
            {guided ? "Hear this panel" : "Hear this page"}
          </Button>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="min-h-12 rounded-full bg-white px-4 font-bold"
              onClick={() => setZoom((value) => (value > 1 ? 1 : 1.6))}
            >
              {zoom > 1 ? "Fit page" : "Zoom page"}
            </button>
            {guideAllowed && (
              <button
                type="button"
                className={`min-h-12 rounded-full px-4 font-bold ${guided ? "bg-sun" : "bg-white"}`}
                onClick={toggleGuide}
              >
                {guided ? "Show the whole page" : "One panel at a time"}
              </button>
            )}
          </div>
          <button type="button" className="min-h-12 text-sm font-bold text-ink/60" onClick={() => setTools((open) => !open)}>
            Text size and font
          </button>
          {tools && (
            <div className="space-y-3 rounded-[1.5rem] bg-white p-4 shadow-soft">
              <div className="flex flex-wrap gap-2">
                {(["sm", "md", "lg"] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`min-h-12 rounded-full px-4 font-bold ${reading.textSize === size ? "bg-sun" : "bg-cream"}`}
                    onClick={() => updateReading((state) => ({ ...state, textSize: size }))}
                  >
                    {size === "sm" ? "A" : size === "md" ? "A+" : "A++"}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className={`min-h-12 w-full rounded-2xl px-4 font-bold ${dyslexia ? "bg-mint/50" : "bg-cream"}`}
                onClick={() => updateReading((state) => ({ ...state, dyslexiaFont: !state.dyslexiaFont }))}
              >
                {dyslexia ? "Dyslexia font on" : "Dyslexia-friendly font"}
              </button>
              <button
                type="button"
                className="min-h-12 w-full rounded-2xl bg-cream px-4 font-bold"
                onClick={() =>
                  updateReading((state) => ({
                    ...state,
                    voice: state.voice === "en-IN" ? "default" : "en-IN",
                  }))
                }
              >
                Voice: {reading.voice === "en-IN" ? "Indian English" : "Default"}
              </button>
            </div>
          )}
          <Button
            variant="ghost"
            onClick={() => {
              const started = Date.parse(reading.current?.startedAt ?? "") || Date.now();
              const minutes = Math.max(0.5, Math.round(((Date.now() - started) / 60000) * 10) / 10);
              updateReading((state) =>
                abandonStory(state, meta, { minutes, day: localDay(), now: new Date().toISOString() }),
              );
              router.push("/reading");
            }}
          >
            Stop for now
          </Button>
        </section>
      )}

      {phase === "questions" && (
        <QuestionCard
          story={story}
          index={questionIndex}
          onAnswer={(right) => {
            if (right) setCorrectCount((count) => count + 1);
            if (questionIndex + 1 >= story.comprehension.length) finish();
            else setQuestionIndex((n) => n + 1);
          }}
        />
      )}

      {phase === "enough" && (
        <section className="space-y-4 rounded-[2rem] bg-white p-6 text-center shadow-chunky">
          {reading.pendingCelebration && <Confetti />}
          <Mascot mood="cheer" size={110} />
          <h1 className="font-display text-4xl font-semibold">That is enough for today</h1>
          {reading.pendingCelebration && (
            <p className="text-lg font-bold text-ink/70">You reached your story goal this week.</p>
          )}
          <p className="font-bold text-ink/65">The next episode waits. Nothing plays by itself.</p>
          {story.source.origin === "adapted" && (
            <p className="rounded-2xl bg-cream px-3 py-2 text-sm font-semibold text-ink/70">{story.source.attribution}</p>
          )}
          {reading.pendingCelebration && (
            <Button variant="secondary" onClick={() => updateReading((state) => markGoalCelebrated(state, localDay()))}>
              Nice
            </Button>
          )}
          {upcoming && (
            <Link href={`/reading/read/${upcoming.id}`} className="block">
              <Button variant="secondary">Next episode</Button>
            </Link>
          )}
          <Button onClick={() => router.push("/reading")}>Back to my shelf</Button>
        </section>
      )}

      {defined && (
        <div className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-lg p-4">
          <div className="rounded-[1.5rem] bg-ink p-4 text-cream shadow-chunky">
            <p className="font-display text-2xl font-semibold">{defined.word}</p>
            <p className="mt-1 font-bold">
              {defined.meaning ?? "Saved in your Word Collection. Ask a grown-up what it means here."}
            </p>
            <button type="button" className="mt-3 min-h-12 font-bold text-sun" onClick={() => setDefined(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function QuestionCard({
  story,
  index,
  onAnswer,
}: {
  story: Story;
  index: number;
  onAnswer: (right: boolean) => void;
}) {
  const question = story.comprehension[index];
  return (
    <section className="space-y-3 rounded-[2rem] bg-white p-5 shadow-chunky">
      <p className="text-sm font-bold text-ink/45">
        A quick picture check · {index + 1} of {story.comprehension.length}
      </p>
      <h1 className="font-display text-2xl font-semibold">{question.prompt}</h1>
      <div className="space-y-2">
        {question.options.map((option) => (
          <button
            key={option.id}
            type="button"
            className="flex min-h-14 w-full items-center gap-3 rounded-2xl bg-cream px-4 text-left text-lg font-bold"
            onClick={() => onAnswer(option.id === question.answerId)}
          >
            <span className="text-2xl" aria-hidden>
              {option.emoji}
            </span>
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
}
