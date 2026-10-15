"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { pageBubbleOrder, StoryPageView } from "@/components/reading-champ/PageView";
import { ReadingHeader } from "@/components/reading-champ/ReadingHeader";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import { stripByGenreLevel } from "@/lib/reading-champ/content";
import { stripPassed } from "@/lib/reading-champ/placement";
import { ensurePlacement, submitPlacementStrip } from "@/lib/reading-champ/state";
import { updateReading, useReading } from "@/lib/reading-champ/store";
import { speakWords, wordStarts } from "@/components/reading-champ/speak";
import { stopSpeaking } from "@/lib/speech";

export default function PlacementPage() {
  const reading = useReading();
  const router = useRouter();
  const [panelIndex, setPanelIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [heard, setHeard] = useState<{ bubbleId: string; index: number } | null>(null);
  const [showQuestions, setShowQuestions] = useState(false);

  useEffect(() => {
    if (!reading || reading.placed) return;
    updateReading(ensurePlacement);
  }, [reading]);

  useEffect(() => () => stopSpeaking(), []);

  if (!reading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={80} />
      </div>
    );
  }

  if (reading.placed) {
    return (
      <main className="flex flex-1 flex-col gap-4 text-center">
        <ReadingHeader title="Story Scout" />
        <Mascot mood="cheer" size={120} />
        <h1 className="font-display text-4xl font-semibold">Your stories are ready</h1>
        <p className="font-bold text-ink/65">We picked comics that should feel comfortable.</p>
        <Button onClick={() => router.push("/reading")}>Pick 1 of 3</Button>
        <Link href="/parent/gate?next=/parent/reading" className="text-sm font-bold text-ink/50">
          Grown-up, you can change this
        </Link>
      </main>
    );
  }

  const probe = reading.placement?.pending[0];
  const strip = probe ? stripByGenreLevel(probe.genre, probe.level) : undefined;
  if (!strip) {
    return (
      <main className="flex flex-1 flex-col gap-4">
        <ReadingHeader title="Story Scout" />
        <Mascot mood="think" size={96} />
      </main>
    );
  }

  const pages = strip.pages;
  const page = pages[Math.min(panelIndex, pages.length - 1)];
  const question = strip.questions[questionIndex];

  function resetStrip() {
    setPanelIndex(0);
    setQuestionIndex(0);
    setCorrect(0);
    setShowQuestions(false);
    setHeard(null);
  }

  return (
    <main className="flex flex-1 flex-col gap-4">
      <ReadingHeader title="Story Scout" />
      <p className="text-center font-bold text-ink/60">Help Bo find stories that fit. There is no score.</p>
      {!showQuestions && page && (
        <section className="space-y-3">
          <p className="text-center text-sm font-bold text-ink/55">
            Page {panelIndex + 1} of {pages.length}
          </p>
          <StoryPageView
            page={page}
            book={strip.genre === "nonfiction"}
            textSize={reading.textSize}
            dyslexia={reading.dyslexiaFont}
            heard={heard}
            onWord={() => {}}
          />
          <Button
            variant="secondary"
            onClick={() => {
              const order = pageBubbleOrder(page);
              const text = order.map((item) => item.text).join(" ");
              setHeard({ bubbleId: order[0]?.bubbleId ?? "", index: -1 });
              speakWords(
                text,
                reading.voice,
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
            }}
          >
            Hear this page
          </Button>
          <Button
            onClick={() => {
              if (panelIndex < pages.length - 1) setPanelIndex((n) => n + 1);
              else setShowQuestions(true);
            }}
          >
            {panelIndex < pages.length - 1 ? "Next page" : "Tap the picture"}
          </Button>
        </section>
      )}
      {showQuestions && question && (
        <section className="space-y-3 rounded-[2rem] bg-white p-5 shadow-chunky">
          <h1 className="font-display text-2xl font-semibold">{question.prompt}</h1>
          {question.options.map((option) => (
            <button
              key={option.id}
              type="button"
              className="flex min-h-14 w-full items-center gap-3 rounded-2xl bg-cream px-4 text-left text-lg font-bold"
              onClick={() => {
                const nextCorrect = correct + (option.id === question.answerId ? 1 : 0);
                if (questionIndex + 1 < strip.questions.length) {
                  setCorrect(nextCorrect);
                  setQuestionIndex((n) => n + 1);
                  return;
                }
                updateReading((state) =>
                  submitPlacementStrip(state, stripPassed(nextCorrect, strip.questions.length), new Date().toISOString()),
                );
                resetStrip();
              }}
            >
              <span className="text-2xl" aria-hidden>
                {option.emoji}
              </span>
              {option.label}
            </button>
          ))}
        </section>
      )}
    </main>
  );
}
