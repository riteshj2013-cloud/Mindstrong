import type { ItemSpec } from "./types";

export function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.92;
  u.pitch = 1.1;
  window.speechSynthesis.speak(u);
}

export function canSpeak() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function itemSpeech(item: ItemSpec): string {
  switch (item.type) {
    case "intro":
    case "model":
      return [item.title, ...item.body].join(". ");
    case "ritual":
      return [item.title, ...item.body, item.chant].join(". ");
    case "choice": {
      const seq = item.sequence
        ?.map((t) =>
          t.kind === "blank"
            ? "what?"
            : t.kind === "number"
              ? String(t.value)
              : t.kind === "letter"
                ? t.char
                : t.kind === "stars"
                  ? `${t.count} stars`
                  : t.kind === "dot"
                    ? `${t.size === "lg" ? "big " : t.size === "sm" ? "small " : ""}${t.color}`
                    : t.kind === "shape"
                      ? t.shape
                      : "",
        )
        .join(", ");
      return [item.prompt, seq].filter(Boolean).join(". ");
    }
    case "build":
      return item.prompt;
    case "hard_try":
      return [...item.frame, `${item.sequence.join(", ")}, what comes next?`].join(" ");
    case "reflect":
      return item.questions.map((q) => q.prompt).join(" ");
  }
}
