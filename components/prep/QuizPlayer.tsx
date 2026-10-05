"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import type { PrepQuestion } from "@/lib/prep/types";
import { SpeakButton } from "./SpeakButton";
import { HintPanel } from "@/components/session/HintPanel";
import { FigureRenderer } from "./FigureRenderer";

export function QuizPlayer({
  title,
  questions,
  onFinish,
  tryBeforeHint = true,
}: {
  title: string;
  questions: PrepQuestion[];
  onFinish: (correct: number, total: number) => void;
  tryBeforeHint?: boolean;
}) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [tried, setTried] = useState<Record<string, boolean>>({});
  const [hints, setHints] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const q = questions[i];
  const total = questions.length;
  const correctCount = useMemo(
    () => questions.filter((qq) => answers[qq.id] === qq.answerId).length,
    [answers, questions],
  );

  if (!q && !done) return null;

  if (done) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Mascot mood="cheer" size={120} />
        <h2 className="text-3xl font-semibold">Set complete!</h2>
        <p className="font-display text-4xl font-semibold text-coral">
          {correctCount}/{total}
        </p>
        <p className="text-ink/60">Brave tries count. Review explanations as you go next time.</p>
        <Button onClick={() => onFinish(correctCount, total)}>Save & continue</Button>
      </div>
    );
  }

  const picked = answers[q.id];
  const hintCount = hints[q.id] ?? 0;
  const hasTried = !!tried[q.id] || !!picked;
  const hintLocked = tryBeforeHint && !hasTried;
  const optionsHaveFigures = q.options.some((o) => !!o.figure);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-sm font-bold text-ink/45">{title}</p>
          <p className="font-display text-lg font-semibold">
            Q{i + 1} / {total}
          </p>
        </div>
        <SpeakButton text={q.prompt} />
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-ink/10">
        <div
          className="h-full bg-plum transition-all"
          style={{ width: `${((i + (picked ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <div className="flex-1 space-y-3 rounded-[2rem] bg-white/70 p-4 shadow-soft">
        <p className="whitespace-pre-wrap text-lg font-bold leading-snug">{q.prompt}</p>

        {q.figure && (
          <div className="rounded-2xl border border-ink/5 bg-cream/80 p-3">
            <FigureRenderer spec={q.figure} />
          </div>
        )}

        <div className={optionsHaveFigures ? "grid grid-cols-2 gap-2" : "grid gap-2"}>
          {q.options.map((o) => {
            const selected = picked === o.id;
            const show = revealed && !!picked;
            const isCorrect = o.id === q.answerId;
            const letter = o.id.toUpperCase();
            return (
              <button
                key={o.id}
                type="button"
                disabled={!!picked && revealed}
                onClick={() => {
                  setAnswers((a) => ({ ...a, [q.id]: o.id }));
                  setTried((t) => ({ ...t, [q.id]: true }));
                  setRevealed(true);
                }}
                className={`rounded-2xl border-2 px-3 py-3 text-left font-semibold ${
                  show && isCorrect
                    ? "border-leaf bg-mint/40"
                    : show && selected
                      ? "border-coral bg-coral/15"
                      : selected
                        ? "border-sky bg-sky/15"
                        : "border-ink/10 bg-white shadow-soft"
                }`}
              >
                <span className="mb-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink/8 text-xs font-bold">
                  {letter}
                </span>
                {o.figure && (
                  <div className="my-2">
                    <FigureRenderer spec={o.figure} compact />
                  </div>
                )}
                {o.text ? <span className="block text-sm leading-snug">{o.text}</span> : null}
              </button>
            );
          })}
        </div>

        {revealed && picked && q.explanation && (
          <p className="rounded-2xl bg-sky/15 p-3 text-sm font-semibold">{q.explanation}</p>
        )}

        {q.hints && q.hints.length > 0 && (
          <HintPanel
            hints={q.hints}
            unlocked={!hintLocked}
            level={hintCount}
            requireExplicitTry={tryBeforeHint && !picked}
            onUnlockTry={() => setTried((t) => ({ ...t, [q.id]: true }))}
            onShowNext={() =>
              setHints((h) => ({
                ...h,
                [q.id]: Math.min(q.hints!.length, (h[q.id] ?? 0) + 1),
              }))
            }
          />
        )}
      </div>

      <Button
        disabled={!picked}
        onClick={() => {
          if (i + 1 >= total) setDone(true);
          else {
            setI(i + 1);
            setRevealed(false);
          }
        }}
      >
        {i + 1 >= total ? "See score" : "Next question"}
      </Button>
    </div>
  );
}
