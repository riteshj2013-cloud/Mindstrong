"use client";

import { normalizeWord } from "@/lib/reading-champ/text";

const SIZE = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
} as const;

export function BubbleText({
  text,
  activeIndex,
  textSize,
  dyslexia,
  onWord,
  inline = false,
}: {
  text: string;
  activeIndex: number | null;
  textSize: "sm" | "md" | "lg";
  dyslexia: boolean;
  onWord: (word: string) => void;
  /** Inside a book paragraph, so the words stay in one block of text. */
  inline?: boolean;
}) {
  const parts = text.split(/(\s+)/).reduce<
    { key: number; kind: "gap" | "plain" | "word"; text: string; wordIndex?: number; word?: string }[]
  >((items, part, index) => {
    if (/^\s+$/.test(part)) return [...items, { key: index, kind: "gap", text: part }];
    const token = part.match(/[A-Za-z][A-Za-z']*/)?.[0];
    if (!token) return [...items, { key: index, kind: "plain", text: part }];
    const wordIndex = items.filter((item) => item.kind === "word").length;
    return [...items, { key: index, kind: "word", text: part, wordIndex, word: normalizeWord(token) }];
  }, []);
  const Tag = inline ? "span" : "p";
  return (
    <Tag className={`leading-relaxed ${SIZE[textSize]} ${dyslexia ? "font-dyslexia" : ""}`}>
      {parts.map((part) => {
        if (part.kind !== "word" || part.wordIndex == null || !part.word) {
          return <span key={part.key}>{part.text}</span>;
        }
        const on = activeIndex === part.wordIndex;
        return (
          <button
            key={part.key}
            type="button"
            className={`mx-0.5 inline-flex min-h-11 items-center rounded-xl px-1.5 py-1 font-bold underline decoration-ink/20 decoration-2 underline-offset-4 ${
              on ? "bg-sun" : "bg-transparent"
            }`}
            onClick={() => onWord(part.word ?? "")}
          >
            {part.text}
          </button>
        );
      })}
    </Tag>
  );
}
