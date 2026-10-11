"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Confetti } from "@/components/ui/Confetti";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import { defineWord, nextEpisode, toMeta } from "@/lib/reading-champ/content";
import { flatPanels } from "@/lib/reading-champ/text";
import { abandonStory, finishStory, markGoalCelebrated, saveWord, setPanel, startStory } from "@/lib/reading-champ/state";
import { updateReading, useReading } from "@/lib/reading-champ/store";
import type { Story } from "@/lib/reading-champ/types";
import { localDay } from "@/lib/date";
import { stopSpeaking } from "@/lib/speech";
import { BubbleText } from "./BubbleText";
import { PanelArt } from "./PanelArt";
import { ReadingHeader } from "./ReadingHeader";
import { speakWords } from "./speak";

export function Reader({ story, challenge }: { story: Story; challenge: boolean }) {
  const reading = useReading();
  const router = useRouter();
  const panels = useMemo(() => flatPanels(story), [story]);
  const meta = useMemo(() => toMeta(story), [story]);
  const [phase, setPhase] = useState<"read" | "questions" | "enough">("read");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [heard, setHeard] = useState<{ bubbleId: string; index: number } | null>(null);
  const [defined, setDefined] = useState<{ word: string; meaning: string | null } | null>(null);
  const [tools, setTools] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);
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

  const index = reading.current?.storyId === story.id ? reading.current.panelIndex : 0;
  const panel = panels[Math.min(index, panels.length - 1)];
  const textSize = reading.textSize;
  const dyslexia = reading.dyslexiaFont;

  function go(next: number) {
    stopSpeaking();
    setHeard(null);
    updateReading((state) => setPanel(state, next));
  }

  function hear(bubbleId: string, text: string) {
    setHeard({ bubbleId, index: -1 });
    speakWords(
      text,
      reading!.voice,
      (wordIndex) => setHeard({ bubbleId, index: wordIndex }),
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

  return (
    <main className="flex flex-1 flex-col gap-4">
      <ReadingHeader title={story.title} />
      {phase === "read" && panel && (
        <section
          className="space-y-3"
          onTouchStart={(event) => setTouchX(event.changedTouches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (touchX == null) return;
            const dx = (event.changedTouches[0]?.clientX ?? touchX) - touchX;
            if (dx < -40 && index < panels.length - 1) go(index + 1);
            if (dx > 40 && index > 0) go(index - 1);
            setTouchX(null);
          }}
        >
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-chunky">
            <PanelArt scene={panel.panel.scene} characters={panel.panel.characters} />
          </div>
          <p className="text-center text-sm font-bold text-ink/50">
            Panel {index + 1} of {panels.length}
          </p>
          <ul className="space-y-3">
            {panel.panel.bubbles.map((bubble) => (
              <li key={bubble.id} className="rounded-[1.5rem] bg-white p-4 shadow-soft">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-ink/55">
                    {bubble.kind === "speech" || bubble.kind === "thought"
                      ? bubble.speaker
                      : bubble.kind === "narration"
                        ? "Narration"
                        : "Caption"}
                  </p>
                  <button
                    type="button"
                    className="inline-flex min-h-12 items-center rounded-full bg-sky/20 px-4 text-sm font-bold"
                    onClick={() => hear(bubble.id, bubble.text)}
                  >
                    Hear it
                  </button>
                </div>
                <BubbleText
                  text={bubble.text}
                  textSize={textSize}
                  dyslexia={dyslexia}
                  activeIndex={heard?.bubbleId === bubble.id ? heard.index : null}
                  onWord={onDefine}
                />
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary" disabled={index === 0} onClick={() => go(index - 1)}>
              Back
            </Button>
            {index < panels.length - 1 ? (
              <Button onClick={() => go(index + 1)}>Next</Button>
            ) : (
              <Button onClick={() => setPhase("questions")}>Questions</Button>
            )}
          </div>
          <button
            type="button"
            className="min-h-12 text-sm font-bold text-ink/60"
            onClick={() => setTools((open) => !open)}
          >
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
