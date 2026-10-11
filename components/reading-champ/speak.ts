"use client";

import { stopSpeaking } from "@/lib/speech";

export function wordStarts(text: string): number[] {
  const starts: number[] = [];
  const re = /[A-Za-z][A-Za-z']*/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) starts.push(match.index);
  return starts;
}

export function pickVoice(prefer: "default" | "en-IN"): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (prefer === "en-IN") {
    return (
      voices.find((voice) => voice.lang.toLowerCase().startsWith("en-in")) ??
      voices.find((voice) => voice.lang.toLowerCase().startsWith("en")) ??
      null
    );
  }
  return voices.find((voice) => voice.lang.toLowerCase().startsWith("en")) ?? null;
}

export function speakWords(
  text: string,
  prefer: "default" | "en-IN",
  onWord: (index: number) => void,
  onEnd: () => void,
) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    onEnd();
    return;
  }
  stopSpeaking();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92;
  const voice = pickVoice(prefer);
  if (voice) utterance.voice = voice;
  if (prefer === "en-IN") utterance.lang = voice?.lang ?? "en-IN";
  const starts = wordStarts(text);
  utterance.onboundary = (event) => {
    if (event.name !== "word") return;
    let index = 0;
    for (let i = 0; i < starts.length; i++) {
      if (starts[i] <= event.charIndex) index = i;
    }
    onWord(index);
  };
  utterance.onend = () => onEnd();
  utterance.onerror = () => onEnd();
  window.speechSynthesis.speak(utterance);
}
