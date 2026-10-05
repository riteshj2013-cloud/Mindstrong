"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TensOnesVisual, TokenView } from "@/components/ui/TokenView";
import type {
  BuildItem,
  ChoiceItem,
  HardTryItem,
  IntroItem,
  ItemResult,
  ModelItem,
  ReflectItem,
  Reflection,
  RitualItem,
} from "@/lib/types";
import { Feedback } from "./Feedback";
import { Badge } from "@/components/ui/Badge";
import { Confetti } from "@/components/ui/Confetti";
import { Mascot, MascotSays } from "@/components/ui/Mascot";
import { HintPanel } from "./HintPanel";

type Common = {
  result: ItemResult;
  onResult: (patch: Partial<ItemResult>) => void;
  onNext: () => void;
};

export function IntroCard({ item, onNext }: { item: IntroItem; onNext: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
      <div className="relative">
        <Mascot mood="happy" size={120} />
        <span className="absolute -right-4 -top-2 animate-bounce-in text-5xl" aria-hidden>
          {item.emoji}
        </span>
      </div>
      <h2 className="text-4xl font-semibold tracking-tight text-ink">{item.title}</h2>
      <div className="space-y-2 text-lg leading-relaxed text-ink/80">
        {item.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-4 w-full max-w-sm">
        <Button onClick={onNext}>{item.cta ?? "Next"}</Button>
      </div>
    </div>
  );
}

export function RitualCard({ item, onNext }: { item: RitualItem; onNext: () => void }) {
  const [said, setSaid] = useState(false);
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
      <Mascot mood={said ? "cheer" : "brave"} size={120} />
      <h2 className="text-4xl font-semibold tracking-tight">{item.title}</h2>
      <div className="space-y-2 text-lg text-ink/80">
        {item.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setSaid(true)}
        className={`w-full max-w-sm rounded-[2rem] border-4 px-4 py-7 font-display text-3xl font-semibold transition ${
          said
            ? "animate-bounce-in border-leaf bg-mint/30 text-ink"
            : "border-coral bg-white text-coral shadow-chunky hover:bg-coral/5"
        }`}
      >
        {said ? "🔒 " : "👆 "}“{item.chant}”
      </button>
      <p className="text-sm font-semibold text-ink/50">
        {said ? "Locked in. Brave brains ready." : "Tap the rule to lock it in."}
      </p>
      <div className="w-full max-w-sm">
        <Button onClick={onNext} disabled={!said}>
          Locked in!
        </Button>
      </div>
    </div>
  );
}

export function ModelCard({ item, onNext }: { item: ModelItem; onNext: () => void }) {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <h2 className="text-3xl font-semibold tracking-tight">{item.title}</h2>
      {item.variant === "bundle_ten" && (
        <div className="rounded-[2rem] bg-white p-5 shadow-soft">
          <div className="mb-3 flex flex-wrap gap-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="h-5 w-5 rounded-md bg-coral" />
            ))}
          </div>
          <p className="mb-2 text-center text-2xl font-black text-ink/40">↓</p>
          <div className="flex justify-center">
            <span className="flex animate-bounce-in flex-col gap-[2px] rounded-md bg-sky/30 p-[2px]">{Array.from({ length: 10 }).map((_, j) => (<span key={j} className="block h-2.5 w-5 rounded-[3px] bg-sky" />))}</span>
          </div>
          <p className="mt-3 text-center text-lg font-bold">10 ones → 1 ten</p>
        </div>
      )}
      {item.variant === "show_number" && item.number != null && (
        <div className="rounded-[2rem] bg-white p-5 shadow-soft">
          <p className="mb-4 text-center text-5xl font-black text-ink">{item.number}</p>
          <TensOnesVisual
            tens={Math.floor(item.number / 10)}
            ones={item.number % 10}
          />
        </div>
      )}
      <div className="space-y-1 text-lg text-ink/80">
        {item.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-auto">
        <Button onClick={onNext}>Got it</Button>
      </div>
    </div>
  );
}

export function ChoiceCard({ item, result, onResult, onNext }: Common & { item: ChoiceItem }) {
  const [picked, setPicked] = useState<string | null>(null);
  const unlocked = result.attempts > 0;
  const done = result.done;

  function check() {
    if (!picked || done) return;
    const ok = picked === item.answerId;
    const attempts = result.attempts + 1;
    onResult({
      attempts,
      correct: ok,
      done: ok,
      triedBeforeHint: result.triedBeforeHint || result.hintsUsed === 0,
    });
  }

  function revealHint() {
    onResult({ hintsUsed: result.hintsUsed + 1 });
  }

  return (
    <div className="flex flex-1 flex-col gap-4">
      <h2 className="text-3xl font-semibold tracking-tight">{item.prompt}</h2>

      {item.sequence && (
        <div className="flex flex-nowrap items-center justify-center gap-1.5 overflow-x-auto rounded-[2rem] bg-white p-4 shadow-soft sm:gap-2">
          {item.sequence.map((t, i) => (
            <TokenView key={i} token={t} large={item.sequence!.length <= 6} />
          ))}
        </div>
      )}

      {item.display?.kind === "tensOnes" && (
        <div className="rounded-[2rem] bg-white p-5 shadow-soft">
          <TensOnesVisual tens={item.display.tens} ones={item.display.ones} />
        </div>
      )}

      {item.display?.kind === "compare" && (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-4 shadow-soft">
            <p className="mb-2 text-center text-sm font-bold text-ink/50">Left</p>
            <TensOnesVisual tens={item.display.left.tens} ones={item.display.left.ones} />
          </div>
          <div className="rounded-[2rem] bg-white p-4 shadow-soft">
            <p className="mb-2 text-center text-sm font-bold text-ink/50">Right</p>
            <TensOnesVisual tens={item.display.right.tens} ones={item.display.right.ones} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        {item.options.map((opt) => {
          const selected = picked === opt.id;
          const showCorrect = done && opt.id === item.answerId;
          const showWrong = done && selected && opt.id !== item.answerId;
          return (
            <button
              key={opt.id}
              type="button"
              disabled={done}
              onClick={() => setPicked(opt.id)}
              className={`flex min-h-24 flex-col items-center justify-center gap-2 rounded-3xl border-4 px-3 py-3 font-display text-2xl font-semibold transition ${
                showCorrect
                  ? "animate-bounce-in border-leaf bg-mint/30"
                  : showWrong
                    ? "border-sun bg-sun/20"
                    : selected
                      ? "-translate-y-1 border-sky bg-white shadow-chunky"
                      : "border-white bg-white shadow-soft hover:border-sky/40"
              }`}
            >
              {opt.token && <TokenView token={opt.token} />}
              <span>{opt.text ?? opt.label ?? opt.id}</span>
            </button>
          );
        })}
      </div>

      {done && result.correct && (
        <Feedback tone="good">
          {item.correct}
          {item.rule ? ` Rule: ${item.rule}` : ""}
        </Feedback>
      )}
      {!done && result.attempts > 0 && !result.correct && (
        <Feedback tone="try" animKey={result.attempts}>{item.tryAgain}</Feedback>
      )}

      <HintPanel
        hints={item.hints}
        unlocked={unlocked}
        level={result.hintsUsed}
        onShowNext={revealHint}
      />

      <div className="mt-auto space-y-2">
        {!done ? (
          <Button onClick={check} disabled={!picked}>
            Check
          </Button>
        ) : (
          <Button variant="success" onClick={onNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export function BuildCard({ item, result, onResult, onNext }: Common & { item: BuildItem }) {
  const startOnes = item.mode === "bundle" ? item.target : 0;
  const [tens, setTens] = useState(0);
  const [ones, setOnes] = useState(startOnes);
  const unlocked = result.attempts > 0;
  const done = result.done;
  const value = tens * 10 + ones;

  function check() {
    if (done) return;
    const ok = value === item.target;
    onResult({
      attempts: result.attempts + 1,
      correct: ok,
      done: ok,
      triedBeforeHint: result.triedBeforeHint || result.hintsUsed === 0,
    });
  }

  function addTen() {
    if (done) return;
    if (item.mode === "bundle") {
      if (ones >= 10) {
        setOnes((o) => o - 10);
        setTens((t) => t + 1);
      }
    } else if (tens < 9) setTens((t) => t + 1);
  }

  function addOne() {
    if (done || item.mode === "bundle") return;
    if (ones < 20) setOnes((o) => o + 1);
  }

  function reset() {
    if (done) return;
    setTens(0);
    setOnes(item.mode === "bundle" ? item.target : 0);
  }

  return (
    <div className="flex flex-1 flex-col gap-4">
      <h2 className="text-3xl font-semibold tracking-tight">{item.prompt}</h2>

      <div className="rounded-[2rem] bg-white p-5 shadow-soft">
        <p className="mb-3 text-center text-4xl font-black tabular-nums">{value}</p>
        <TensOnesVisual tens={tens} ones={ones} />
        <p className="mt-3 text-center text-sm font-semibold text-ink/50">
          {tens} tens + {ones} ones
        </p>
      </div>

      {!done && (
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={addTen}>
            {item.mode === "bundle" ? "Bundle 10 ones → 1 ten" : "+ 1 ten"}
          </Button>
          {item.mode === "build" ? (
            <Button variant="secondary" onClick={addOne}>
              + 1 one
            </Button>
          ) : (
            <Button variant="ghost" onClick={reset}>
              Reset
            </Button>
          )}
          {item.mode === "build" && (
            <Button variant="ghost" onClick={reset} className="col-span-2">
              Clear
            </Button>
          )}
        </div>
      )}

      {done && result.correct && <Feedback tone="good">{item.correct}</Feedback>}
      {!done && result.attempts > 0 && !result.correct && (
        <Feedback tone="try" animKey={result.attempts}>{item.tryAgain}</Feedback>
      )}

      <HintPanel
        hints={item.hints}
        unlocked={unlocked}
        level={result.hintsUsed}
        onShowNext={() => onResult({ hintsUsed: result.hintsUsed + 1 })}
      />

      <div className="mt-auto">
        {!done ? (
          <Button onClick={check}>Check</Button>
        ) : (
          <Button variant="success" onClick={onNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export function HardTryCard({
  item,
  result,
  onResult,
  onNext,
}: Common & { item: HardTryItem }) {
  // Deterministic distractors: +1 slip, round-number slip, +20 slip.
  const choices = useMemo(() => {
    const last = item.sequence[item.sequence.length - 1];
    const set = new Set([item.answer, last + 1, Math.ceil(last / 10) * 10, item.answer + 10]);
    return Array.from(set).sort((a, b) => a - b);
  }, [item.answer, item.sequence]);

  const [picked, setPicked] = useState<number | null>(null);
  // Hard gate: hints only after the child explicitly taps “I tried”.
  const unlocked = !!result.explicitTry;
  const done = result.done;

  function markTried() {
    onResult({ explicitTry: true, triedBeforeHint: true });
  }

  function check() {
    if (picked == null || done) return;
    const ok = picked === item.answer;
    const attempts = result.attempts + 1;
    onResult({
      attempts,
      triedBeforeHint: result.triedBeforeHint || result.hintsUsed === 0,
      correct: ok,
      done: ok,
    });
  }

  function moveOn() {
    onResult({
      done: true,
      movedOn: true,
    });
  }

  const canMoveOn =
    unlocked && (result.attempts >= 2 || result.hintsUsed >= item.hints.length);

  return (
    <div className="flex flex-1 flex-col gap-4">
      {done && result.correct && <Confetti seed={7} />}
      <MascotSays mood={done && result.correct ? "cheer" : "brave"} size={80}>
        {item.frame.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </MascotSays>

      <div className="flex flex-wrap items-center justify-center gap-2 rounded-[2rem] bg-gradient-to-br from-coral/20 to-sun/30 p-5 shadow-soft">
        {item.sequence.map((n) => (
          <TokenView key={n} token={{ kind: "number", value: n }} large />
        ))}
        <span className="text-3xl font-black text-ink/40">→</span>
        <TokenView token={{ kind: "blank" }} large />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {choices.map((n) => {
          const selected = picked === n;
          const showCorrect = done && result.correct && n === item.answer;
          const showWrong = done && selected && n !== item.answer;
          return (
            <button
              key={n}
              type="button"
              disabled={done}
              onClick={() => setPicked(n)}
              className={`min-h-20 rounded-3xl border-4 font-display text-3xl font-semibold transition ${
                showCorrect
                  ? "animate-bounce-in border-leaf bg-mint/30"
                  : showWrong
                    ? "border-sun bg-sun/20"
                    : selected
                      ? "-translate-y-1 border-coral bg-white shadow-chunky"
                      : "border-white bg-white shadow-soft"
              }`}
            >
              {n}
            </button>
          );
        })}
      </div>

      {done && (
        <div className="flex justify-center">
          <Badge emoji="🦁" label="Brave Try!" tone="coral" />
        </div>
      )}
      {done && result.correct && (
        <Feedback tone="good">
          {result.hintsUsed > 0
            ? item.messages.correctAfterHint
            : item.messages.correctNoHint}
        </Feedback>
      )}
      {done && !result.correct && (
        <Feedback tone="brave">{item.messages.stuck}</Feedback>
      )}
      {!done && result.attempts > 0 && !result.correct && (
        <Feedback tone="try" animKey={result.attempts}>{item.messages.wrong}</Feedback>
      )}

      <HintPanel
        hints={item.hints}
        unlocked={unlocked}
        level={result.hintsUsed}
        requireExplicitTry
        onUnlockTry={markTried}
        onShowNext={() => onResult({ hintsUsed: result.hintsUsed + 1 })}
      />

      <div className="mt-auto space-y-2">
        {!done ? (
          <>
            <Button onClick={check} disabled={picked == null}>
              Check
            </Button>
            {canMoveOn && (
              <Button variant="ghost" onClick={moveOn}>
                I stayed with it — continue
              </Button>
            )}
          </>
        ) : (
          <Button variant="success" onClick={onNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export function ReflectCard({
  item,
  reflection,
  onReflect,
  onFinish,
}: {
  item: ReflectItem;
  reflection: Reflection;
  onReflect: (r: Reflection) => void;
  onFinish: () => void;
}) {
  const q1 = reflection.feltHard;
  const q2 = reflection.whatTried;
  const ready = !!q1 && !!q2;

  return (
    <div className="flex flex-1 flex-col gap-6">
      {item.questions.map((q) => {
        const current = reflection[q.id];
        return (
          <div key={q.id} className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">{q.prompt}</h2>
            <div className="grid gap-2">
              {q.options.map((opt) => {
                const selected = current === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onReflect({ [q.id]: opt.id })}
                    className={`flex min-h-16 items-center gap-3 rounded-3xl border-4 px-4 py-3 text-left text-lg font-bold transition ${
                      selected
                        ? "animate-pop border-plum bg-plum/10 shadow-chunky"
                        : "border-white bg-white shadow-soft hover:border-plum/30"
                    }`}
                  >
                    <span className="text-2xl" aria-hidden>
                      {opt.emoji}
                    </span>
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {ready && (
        <Feedback tone="brave">{item.closing}</Feedback>
      )}

      <div className="mt-auto">
        <Button onClick={onFinish} disabled={!ready} variant="success">
          Finish session
        </Button>
      </div>
    </div>
  );
}
