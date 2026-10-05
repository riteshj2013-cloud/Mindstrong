"use client";

import { ALL_AGES } from "@/lib/content/age";
import type { ChildAge } from "@/lib/types";

type Props = {
  value: ChildAge;
  onChange: (age: ChildAge) => void;
  /** Compact for settings; chunky default for kids. */
  size?: "chunky" | "compact";
  label?: string;
};

export function AgePicker({
  value,
  onChange,
  size = "chunky",
  label = "How old are you?",
}: Props) {
  const chunky = size === "chunky";
  return (
    <fieldset className="w-full">
      <legend
        className={`mb-3 w-full text-center font-semibold ${
          chunky ? "text-lg text-ink/70" : "text-left text-sm font-bold text-ink/55"
        }`}
      >
        {label}
      </legend>
      <div
        className={`grid ${chunky ? "grid-cols-5 gap-2" : "grid-cols-5 gap-1.5"}`}
        role="radiogroup"
        aria-label={label}
      >
        {ALL_AGES.map((age) => {
          const selected = age === value;
          return (
            <button
              key={age}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(age)}
              className={`font-display font-semibold transition ${
                chunky
                  ? "min-h-14 rounded-2xl text-xl shadow-soft"
                  : "min-h-11 rounded-xl text-base"
              } ${
                selected
                  ? "bg-coral text-white shadow-chunky ring-4 ring-coral/30"
                  : "border-2 border-ink/10 bg-white text-ink hover:border-sky"
              }`}
            >
              {age}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
