"use client";

import type { LessonVisual as VisualKind } from "@/lib/prep/types";

/** In-app SVG/CSS visuals — no external media. */
export function LessonVisual({ kind, pulse }: { kind?: VisualKind; pulse?: number }) {
  if (!kind || kind === "none") return null;
  const p = pulse ?? 0;
  switch (kind) {
    case "place-value":
      return (
        <svg viewBox="0 0 280 120" className="mx-auto h-28 w-full max-w-sm" aria-hidden>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${20 + i * 90},20)`}>
              <rect
                width="70"
                height="80"
                rx="14"
                className={`fill-white stroke-ink/20 stroke-2 ${p % 3 === i ? "animate-pulse" : ""}`}
              />
              <text x="35" y="36" textAnchor="middle" className="fill-ink text-[11px] font-bold">
                {["Hundreds", "Tens", "Ones"][i]}
              </text>
              <text x="35" y="68" textAnchor="middle" className="fill-coral text-2xl font-bold">
                {["2", "4", "7"][i]}
              </text>
            </g>
          ))}
        </svg>
      );
    case "number-line":
      return (
        <svg viewBox="0 0 280 70" className="mx-auto h-16 w-full max-w-sm" aria-hidden>
          <line x1="20" y1="35" x2="260" y2="35" className="stroke-ink/40" strokeWidth="3" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <circle cx={40 + i * 50} cy="35" r={p === i ? 10 : 6} className="fill-coral" />
              <text x={40 + i * 50} y="58" textAnchor="middle" className="fill-ink/70 text-[10px]">
                {i * 10}
              </text>
            </g>
          ))}
        </svg>
      );
    case "fraction-bar":
      return (
        <svg viewBox="0 0 280 80" className="mx-auto h-20 w-full max-w-sm" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={20 + i * 60}
              y="20"
              width="55"
              height="40"
              rx="8"
              className={i < 3 ? "fill-coral" : "fill-white stroke-ink/25 stroke-2"}
            />
          ))}
          <text x="140" y="75" textAnchor="middle" className="fill-ink/60 text-[11px] font-bold">
            3 shaded out of 4 = ¾
          </text>
        </svg>
      );
    case "balance":
      return (
        <svg viewBox="0 0 280 110" className="mx-auto h-28 w-full max-w-sm" aria-hidden>
          <line x1="140" y1="20" x2="140" y2="55" className="stroke-ink/50" strokeWidth="4" />
          <line
            x1="50"
            y1="55"
            x2="230"
            y2="55"
            className="stroke-coral"
            strokeWidth="5"
            style={{ transformOrigin: "140px 55px", transform: `rotate(${p % 2 === 0 ? -3 : 3}deg)` }}
          />
          <rect x="40" y="60" width="50" height="30" rx="8" className="fill-sky/50" />
          <rect x="190" y="60" width="50" height="30" rx="8" className="fill-mint/60" />
          <text x="65" y="80" textAnchor="middle" className="fill-ink text-[11px] font-bold">
            x+3
          </text>
          <text x="215" y="80" textAnchor="middle" className="fill-ink text-[11px] font-bold">
            10
          </text>
        </svg>
      );
    case "word-cards":
      return (
        <div className="mx-auto flex max-w-sm justify-center gap-2" aria-hidden>
          {["happy", "≈", "joyful"].map((w, i) => (
            <span
              key={w}
              className={`rounded-2xl px-3 py-2 font-display text-lg font-semibold shadow-soft ${
                i === 1 ? "bg-transparent text-coral" : "bg-white"
              } ${p === i ? "ring-4 ring-coral/30" : ""}`}
            >
              {w}
            </span>
          ))}
        </div>
      );
    case "sentence":
      return (
        <div className="mx-auto max-w-sm rounded-2xl bg-white p-3 text-center shadow-soft" aria-hidden>
          <p className="font-display text-lg font-semibold">
            She <span className="rounded-lg bg-coral/20 px-1 text-coral">goes</span> to school.
          </p>
        </div>
      );
    case "plant":
      return (
        <svg viewBox="0 0 200 140" className="mx-auto h-32 w-40" aria-hidden>
          <ellipse cx="100" cy="120" rx="50" ry="12" className="fill-leaf/30" />
          <rect x="95" y="60" width="10" height="55" rx="4" className="fill-leaf" />
          <ellipse cx="80" cy="55" rx="22" ry="14" className={`fill-mint ${p % 2 ? "opacity-100" : "opacity-80"}`} />
          <ellipse cx="120" cy="50" rx="24" ry="15" className="fill-mint" />
          <circle cx="100" cy="40" r="10" className="fill-sun" />
        </svg>
      );
    case "water-cycle":
      return (
        <svg viewBox="0 0 280 120" className="mx-auto h-28 w-full max-w-sm" aria-hidden>
          <ellipse cx="70" cy="95" rx="45" ry="12" className="fill-sky/40" />
          <path d="M60 95 Q70 40 90 30" className="fill-none stroke-sky stroke-2" strokeDasharray="4 3" />
          <ellipse cx="160" cy="35" rx="35" ry="16" className="fill-white stroke-ink/15 stroke-2" />
          <path d="M175 50 L185 85" className="stroke-sky stroke-2" />
          <path d="M155 55 L160 90" className="stroke-sky stroke-2" />
          <text x="70" y="114" textAnchor="middle" className="fill-ink/50 text-[9px]">
            evaporate
          </text>
          <text x="200" y="100" textAnchor="middle" className="fill-ink/50 text-[9px]">
            rain
          </text>
        </svg>
      );
    case "atom-lite":
      return (
        <svg viewBox="0 0 120 120" className="mx-auto h-28 w-28" aria-hidden>
          <circle cx="60" cy="60" r="10" className="fill-coral" />
          <ellipse cx="60" cy="60" rx="45" ry="18" className="fill-none stroke-sky stroke-2" />
          <ellipse
            cx="60"
            cy="60"
            rx="45"
            ry="18"
            className="fill-none stroke-plum stroke-2"
            transform="rotate(60 60 60)"
          />
        </svg>
      );
    case "magnet":
      return (
        <svg viewBox="0 0 200 100" className="mx-auto h-24 w-48" aria-hidden>
          <path
            d="M40 70 V35 Q40 15 60 15 H80 V40 H60 V70 Z"
            className="fill-coral"
          />
          <path
            d="M120 15 H140 Q160 15 160 35 V70 H140 V40 H120 Z"
            className="fill-sky"
          />
          <text x="60" y="55" textAnchor="middle" className="fill-white text-sm font-bold">
            N
          </text>
          <text x="150" y="55" textAnchor="middle" className="fill-white text-sm font-bold">
            S
          </text>
          <circle cx="100" cy="75" r="8" className={`fill-ink/70 ${p % 2 ? "translate-x-1" : ""}`} />
        </svg>
      );
    default:
      return null;
  }
}
