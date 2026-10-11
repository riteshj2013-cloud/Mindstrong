"use client";

import { ReadingHeader } from "@/components/reading-champ/ReadingHeader";
import { Mascot } from "@/components/ui/Mascot";
import { useReading } from "@/lib/reading-champ/store";
import { speakWords } from "@/components/reading-champ/speak";
import { useState } from "react";

export default function WordsPage() {
  const reading = useReading();
  const [active, setActive] = useState<string | null>(null);
  if (!reading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={80} />
      </div>
    );
  }
  return (
    <main className="flex flex-1 flex-col gap-4">
      <ReadingHeader title="Word Collection" />
      {reading.words.length === 0 ? (
        <section className="rounded-[2rem] bg-white p-5 text-center shadow-soft">
          <Mascot mood="think" size={88} />
          <p className="mt-2 font-bold text-ink/65">Tap a word in a story and it waits here.</p>
        </section>
      ) : (
        <ul className="space-y-3">
          {reading.words.map((word) => (
            <li key={`${word.word}-${word.at}`} className="rounded-[1.5rem] bg-white p-4 shadow-soft">
              <div className="flex items-center justify-between gap-2">
                <p className={`font-display text-2xl font-semibold ${reading.dyslexiaFont ? "font-dyslexia" : ""}`}>{word.word}</p>
                <button
                  type="button"
                  className="min-h-12 rounded-full bg-sky/20 px-4 text-sm font-bold"
                  onClick={() => {
                    setActive(word.word);
                    speakWords(word.word, reading.voice, () => {}, () => setActive(null));
                  }}
                >
                  {active === word.word ? "…" : "Hear it"}
                </button>
              </div>
              <p className="mt-1 font-bold text-ink/70">{word.definition}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
