"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import type { LessonStep } from "@/lib/prep/types";
import { LessonVisual } from "./LessonVisual";
import { SpeakButton } from "./SpeakButton";

function speakText(step: LessonStep): string {
  if (step.speak) return step.speak;
  switch (step.type) {
    case "hook":
    case "wrap":
      return [step.title, ...(step.type === "hook" ? step.body : step.bullets)].join(". ");
    case "reveal":
      return [step.title, step.lead].join(". ");
    case "demo":
      return [step.title, ...step.steps, step.punchline].join(". ");
    case "try":
      return [step.title, step.prompt].join(". ");
    case "check":
      return [step.title, step.question.prompt].join(". ");
  }
}

export function LessonPlayer({
  steps,
  onDone,
  onSkip,
}: {
  steps: LessonStep[];
  onDone: () => void;
  onSkip: () => void;
}) {
  const [i, setI] = useState(0);
  const [opened, setOpened] = useState<number[]>([]);
  const [demo, setDemo] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [showWhy, setShowWhy] = useState(false);

  const step = steps[i];
  const progress = ((i + 1) / steps.length) * 100;

  const visualPulse = useMemo(() => {
    if (!step) return 0;
    if (step.type === "demo") return demo;
    if (step.type === "reveal") return opened.length;
    return i;
  }, [step, demo, opened, i]);

  if (!step) return null;

  function next() {
    setOpened([]);
    setDemo(0);
    setPicked(null);
    setShowWhy(false);
    if (i + 1 >= steps.length) onDone();
    else setI(i + 1);
  }

  const canAdvance =
    step.type === "hook" ||
    step.type === "wrap" ||
    (step.type === "reveal" && opened.length >= step.cards.length) ||
    (step.type === "demo" && demo >= step.steps.length) ||
    (step.type === "try" && showWhy) ||
    (step.type === "check" && showWhy);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full bg-coral transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-bold text-ink/45">
          {i + 1}/{steps.length}
        </span>
        <SpeakButton text={speakText(step)} />
      </div>

      <div className="flex flex-1 flex-col gap-4 rounded-[2rem] bg-white/70 p-4 shadow-soft">
        <LessonVisual kind={step.visual} pulse={visualPulse} />

        {step.type === "hook" && (
          <div className="space-y-3 text-center">
            <Mascot mood="happy" size={88} />
            <p className="text-4xl" aria-hidden>
              {step.emoji}
            </p>
            <h2 className="text-3xl font-semibold">{step.title}</h2>
            {step.body.map((b) => (
              <p key={b} className="text-lg text-ink/75">
                {b}
              </p>
            ))}
          </div>
        )}

        {step.type === "reveal" && (
          <div className="space-y-3">
            <h2 className="text-center text-2xl font-semibold">{step.title}</h2>
            <p className="text-center text-sm font-bold text-ink/55">{step.lead}</p>
            <div className="grid gap-2">
              {step.cards.map((c, idx) => {
                const open = opened.includes(idx);
                return (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() =>
                      setOpened((prev) => (prev.includes(idx) ? prev : [...prev, idx]))
                    }
                    className={`rounded-2xl border-2 px-4 py-3 text-left transition ${
                      open
                        ? "border-leaf bg-mint/30"
                        : "border-ink/10 bg-white shadow-soft active:scale-[0.99]"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-display text-xl font-semibold">
                      <span>{c.emoji ?? "👆"}</span>
                      {c.label}
                    </div>
                    {open ? (
                      <p className="mt-1 text-base font-semibold text-ink/70">{c.reveal}</p>
                    ) : (
                      <p className="mt-1 text-sm font-bold text-coral">Tap to reveal</p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step.type === "demo" && (
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-semibold">{step.title}</h2>
            <ol className="space-y-2 text-left">
              {step.steps.map((s, idx) => (
                <li
                  key={s}
                  className={`rounded-2xl px-4 py-3 font-semibold ${
                    idx < demo
                      ? "bg-mint/30"
                      : idx === demo
                        ? "bg-sun/40 ring-2 ring-coral/40"
                        : "bg-ink/5 text-ink/40"
                  }`}
                >
                  {idx < demo || idx === demo ? s : "•••"}
                </li>
              ))}
            </ol>
            {demo >= step.steps.length ? (
              <p className="rounded-2xl bg-coral/10 p-3 font-display text-lg font-semibold text-coral">
                {step.punchline}
              </p>
            ) : (
              <Button
                onClick={() => setDemo((d) => d + 1)}
                variant="secondary"
              >
                {demo === 0 ? "Start demo ▶" : "Next step ▶"}
              </Button>
            )}
          </div>
        )}

        {(step.type === "try" || step.type === "check") && (
          <div className="space-y-3">
            <h2 className="text-center text-2xl font-semibold">{step.title}</h2>
            <p className="text-center text-lg font-bold">
              {step.type === "try" ? step.prompt : step.question.prompt}
            </p>
            <div className="grid gap-2">
              {(step.type === "try" ? step.options : step.question.options).map((o) => {
                const correctId = step.type === "try" ? step.answerId : step.question.answerId;
                const selected = picked === o.id;
                const show = showWhy;
                const isCorrect = o.id === correctId;
                return (
                  <button
                    key={o.id}
                    type="button"
                    disabled={show}
                    onClick={() => {
                      setPicked(o.id);
                      setShowWhy(true);
                    }}
                    className={`rounded-2xl border-2 px-4 py-3 text-left font-semibold transition ${
                      show && isCorrect
                        ? "border-leaf bg-mint/40"
                        : show && selected
                          ? "border-coral bg-coral/15"
                          : "border-ink/10 bg-white shadow-soft"
                    }`}
                  >
                    {o.text}
                  </button>
                );
              })}
            </div>
            {showWhy && (
              <p className="rounded-2xl bg-sky/15 p-3 text-sm font-semibold text-ink/80">
                {step.type === "try"
                  ? step.why
                  : step.question.explanation ?? "Nice try — check the highlighted answer."}
              </p>
            )}
          </div>
        )}

        {step.type === "wrap" && (
          <div className="space-y-3 text-center">
            <Mascot mood="cheer" size={88} />
            <p className="text-4xl">{step.emoji}</p>
            <h2 className="text-3xl font-semibold">{step.title}</h2>
            <ul className="space-y-2 text-left">
              {step.bullets.map((b) => (
                <li key={b} className="rounded-2xl bg-mint/25 px-4 py-2 font-semibold">
                  ✅ {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Button onClick={next} disabled={!canAdvance}>
          {i + 1 >= steps.length ? "Finish lesson ⭐" : step.type === "hook" ? step.cta ?? "Next" : "Next"}
        </Button>
        <Button variant="ghost" onClick={onSkip}>
          Skip lesson → go to sets
        </Button>
      </div>
    </div>
  );
}
