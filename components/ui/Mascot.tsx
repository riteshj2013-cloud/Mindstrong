"use client";

export type Mood = "happy" | "think" | "cheer" | "brave";

/**
 * “Bo” — the brave little brain buddy.
 * Pure SVG, scales cleanly, no assets to load.
 */
export function Mascot({
  mood = "happy",
  size = 96,
  float = true,
  className = "",
}: {
  mood?: Mood;
  size?: number;
  float?: boolean;
  className?: string;
}) {
  const armsUp = mood === "cheer";
  return (
    <div
      className={`inline-block ${float ? "animate-float" : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 120 120" width={size} height={size}>
        {/* cape */}
        {mood === "brave" && (
          <path d="M30 70 Q60 60 90 70 L100 112 Q60 100 20 112 Z" fill="#FF7A66" />
        )}
        {/* arms */}
        {armsUp ? (
          <>
            <path d="M24 66 Q10 46 14 32" stroke="#E5739A" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M96 66 Q110 46 106 32" stroke="#E5739A" strokeWidth="8" strokeLinecap="round" fill="none" />
          </>
        ) : mood === "brave" ? (
          <>
            <path d="M24 72 Q12 78 18 90" stroke="#E5739A" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M96 70 Q112 60 108 46" stroke="#E5739A" strokeWidth="8" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            <path d="M24 72 Q12 80 18 92" stroke="#E5739A" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M96 72 Q108 80 102 92" stroke="#E5739A" strokeWidth="8" strokeLinecap="round" fill="none" />
          </>
        )}
        {/* feet */}
        <ellipse cx="46" cy="104" rx="10" ry="6" fill="#E5739A" />
        <ellipse cx="74" cy="104" rx="10" ry="6" fill="#E5739A" />
        {/* brain body */}
        <path
          d="M60 14c10 0 16 5 19 10 8-2 18 4 18 14 8 4 10 14 6 21 4 8 0 20-10 23-2 10-12 16-22 14-4 4-16 4-22 0-10 2-20-4-22-14-10-3-14-15-10-23-4-7-2-17 6-21 0-10 10-16 18-14 3-5 9-10 19-10z"
          fill="#FF9EBB"
          stroke="#E5739A"
          strokeWidth="3"
        />
        {/* brain folds */}
        <path d="M60 18 V40 M42 30 q6 6 0 12 M78 30 q-6 6 0 12 M30 52 q8 2 10 8 M90 52 q-8 2-10 8" stroke="#E5739A" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* eyes */}
        {mood === "think" ? (
          <>
            <circle cx="48" cy="62" r="7" fill="#2B2A4C" />
            <circle cx="74" cy="62" r="7" fill="#2B2A4C" />
            <circle cx="50" cy="59" r="2.5" fill="#fff" />
            <circle cx="76" cy="59" r="2.5" fill="#fff" />
          </>
        ) : mood === "cheer" ? (
          <>
            <path d="M40 62 q7 -8 14 0" stroke="#2B2A4C" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M66 62 q7 -8 14 0" stroke="#2B2A4C" strokeWidth="4" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            <circle cx="47" cy="62" r="7" fill="#2B2A4C" />
            <circle cx="73" cy="62" r="7" fill="#2B2A4C" />
            <circle cx="49" cy="59" r="2.5" fill="#fff" />
            <circle cx="75" cy="59" r="2.5" fill="#fff" />
          </>
        )}
        {mood === "brave" && (
          <path d="M38 50 L54 54 M82 50 L66 54" stroke="#2B2A4C" strokeWidth="3.5" strokeLinecap="round" />
        )}
        {/* cheeks */}
        <circle cx="36" cy="74" r="5" fill="#FF7A66" opacity="0.45" />
        <circle cx="84" cy="74" r="5" fill="#FF7A66" opacity="0.45" />
        {/* mouth */}
        {mood === "think" ? (
          <path d="M54 80 q6 -3 12 0" stroke="#2B2A4C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        ) : mood === "cheer" ? (
          <path d="M48 76 q12 16 24 0 z" fill="#2B2A4C" />
        ) : (
          <path d="M50 78 q10 10 20 0" stroke="#2B2A4C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        )}
        {mood === "think" && (
          <g fill="#FFD54A">
            <circle cx="104" cy="22" r="5" />
            <circle cx="112" cy="10" r="3" />
          </g>
        )}
      </svg>
    </div>
  );
}

/** Mascot with a speech bubble. */
export function MascotSays({
  mood = "happy",
  children,
  size = 72,
}: {
  mood?: Mood;
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <div className="flex items-end gap-2">
      <Mascot mood={mood} size={size} />
      <div className="relative mb-3 flex-1 rounded-3xl rounded-bl-md bg-white px-4 py-3 text-base font-semibold leading-snug text-ink shadow-soft">
        {children}
      </div>
    </div>
  );
}
