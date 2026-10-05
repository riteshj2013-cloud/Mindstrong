"use client";

import { canSpeak, speak, stopSpeaking } from "@/lib/speech";
import { useSettings } from "@/lib/storage";
import { useState } from "react";

export function SpeakButton({ text, className = "" }: { text: string; className?: string }) {
  const settings = useSettings();
  const [on, setOn] = useState(false);
  if (settings === undefined) return null;
  if (settings && settings.readAloud === false) return null;
  if (!canSpeak()) return null;

  return (
    <button
      type="button"
      aria-label={on ? "Stop reading" : "Read aloud"}
      title={on ? "Stop" : "Read aloud"}
      className={`flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-soft ${className}`}
      onClick={() => {
        if (on) {
          stopSpeaking();
          setOn(false);
        } else {
          speak(text);
          setOn(true);
          window.setTimeout(() => setOn(false), Math.min(12000, text.length * 80));
        }
      }}
    >
      {on ? "⏹️" : "🔊"}
    </button>
  );
}
