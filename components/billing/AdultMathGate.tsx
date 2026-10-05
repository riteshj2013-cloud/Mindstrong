"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import { gateIsOpen, passGate } from "@/lib/storage";

const ANSWER = 56; // 7 × 8

/**
 * Stronger adult check before plans/checkout so kids don’t wander into payments.
 * Reuses the soft parent-gate session token after a correct answer.
 */
export function AdultMathGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    if (gateIsOpen()) {
      setUnlocked(true);
    }
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="flex flex-1 items-center justify-center py-16">
        <Mascot size={72} float={false} />
      </div>
    );
  }

  if (unlocked) return <>{children}</>;

  return (
    <main className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-5 text-center">
      <Mascot mood="think" size={100} float={false} />
      <div>
        <h1 className="text-3xl font-semibold">Grown-ups only</h1>
        <p className="mt-2 text-base text-ink/65">
          Plans & payments are for parents. Quick check — what is{" "}
          <span className="font-display font-semibold text-ink">7 × 8</span>?
        </p>
      </div>
      <form
        className="w-full space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          const n = Number(value.trim());
          if (n === ANSWER) {
            passGate();
            setUnlocked(true);
            setWrong(false);
          } else {
            setWrong(true);
          }
        }}
      >
        <input
          inputMode="numeric"
          pattern="[0-9]*"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setWrong(false);
          }}
          aria-label="Answer to 7 times 8"
          className="min-h-14 w-full rounded-3xl border-4 border-white bg-white px-5 text-center font-display text-2xl shadow-soft outline-none focus:border-sky"
          placeholder="?"
          autoComplete="off"
        />
        {wrong && (
          <p className="text-sm font-bold text-coral">Not quite — try again.</p>
        )}
        <Button type="submit">Continue</Button>
      </form>
    </main>
  );
}
