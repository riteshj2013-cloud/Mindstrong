"use client";

import type { Token, TokenColor } from "@/lib/types";

const COLOR: Record<TokenColor, string> = {
  red: "bg-coral",
  blue: "bg-sky",
  yellow: "bg-sun",
  green: "bg-leaf",
  purple: "bg-plum",
};

const TEXT: Record<TokenColor, string> = {
  red: "text-coral",
  blue: "text-sky",
  yellow: "text-amber-600",
  green: "text-leaf",
  purple: "text-plum",
};

export function TokenView({
  token,
  large = false,
}: {
  token: Token;
  large?: boolean;
}) {
  switch (token.kind) {
    case "blank":
      return (
        <span
          aria-label="blank"
          className={`inline-flex shrink-0 items-center justify-center rounded-xl border-2 border-dashed border-coral/50 bg-sun/30 font-bold text-coral ${
            large ? "h-14 w-14 text-2xl" : "h-11 w-11 text-xl"
          }`}
        >
          ?
        </span>
      );
    case "dot": {
      const size =
        token.size === "lg"
          ? large
            ? "h-16 w-16"
            : "h-14 w-14"
          : token.size === "sm"
            ? large
              ? "h-10 w-10"
              : "h-8 w-8"
            : large
              ? "h-14 w-14"
              : "h-12 w-12";
      return (
        <span
          aria-label={`${token.size === "lg" ? "big " : token.size === "sm" ? "small " : ""}${token.color} dot`}
          className={`inline-block rounded-full shadow-soft ${COLOR[token.color]} ${size}`}
        />
      );
    }
    case "shape": {
      const c = token.color ?? "purple";
      const box = large ? "h-14 w-14" : "h-12 w-12";
      if (token.shape === "circle") {
        return (
          <span
            aria-label="circle"
            className={`inline-block rounded-full ${COLOR[c]} ${box} shadow-soft`}
          />
        );
      }
      if (token.shape === "square") {
        return (
          <span
            aria-label="square"
            className={`inline-block rounded-xl ${COLOR[c]} ${box} shadow-soft`}
          />
        );
      }
      return <ShapeTriangle color={c} size={large ? 56 : 48} />;
    }
    case "stars":
      return (
        <span
          aria-label={`${token.count} stars`}
          className={`inline-flex flex-wrap items-center justify-center gap-0.5 rounded-2xl bg-white px-2 py-1 shadow-soft ${
            large ? "min-h-14 min-w-14 text-2xl" : "min-h-12 min-w-12 text-xl"
          }`}
        >
          {"⭐".repeat(token.count)}
        </span>
      );
    case "letter":
      return (
        <span
          aria-label={token.char}
          className={`inline-flex items-center justify-center rounded-2xl bg-white font-black text-ink shadow-soft ${
            large ? "h-16 w-16 text-3xl" : "h-12 w-12 text-2xl"
          }`}
        >
          {token.char}
        </span>
      );
    case "number":
      return (
        <span
          aria-label={String(token.value)}
          className={`inline-flex shrink-0 items-center justify-center rounded-2xl border-2 border-ink/5 bg-cream font-black text-ink shadow-soft ${
            large ? "h-14 min-w-14 px-2 text-2xl" : "h-11 min-w-11 px-1.5 text-xl"
          }`}
        >
          {token.value}
        </span>
      );
    case "tensOnes":
      return (
        <div className="flex items-end gap-3">
          <TensOnesVisual tens={token.tens} ones={token.ones} />
        </div>
      );
    default:
      return null;
  }
}

export function TensOnesVisual({
  tens,
  ones,
}: {
  tens: number;
  ones: number;
  compact?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-end justify-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <div className="flex min-h-[7.5rem] items-end gap-1.5">
          {Array.from({ length: tens }).map((_, i) => (
            <span
              key={`t${i}`}
              aria-hidden
              className="flex animate-bounce-in flex-col gap-[2px] rounded-md bg-sky/30 p-[2px]"
            >
              {Array.from({ length: 10 }).map((__, j) => (
                <span key={j} className="block h-2.5 w-4 rounded-[3px] bg-sky" />
              ))}
            </span>
          ))}
          {tens === 0 && <span className="pb-2 text-2xl text-ink/25">0</span>}
        </div>
        <span className="rounded-full bg-sky/15 px-3 py-0.5 text-sm font-extrabold text-sky">
          {tens} ten{tens === 1 ? "" : "s"}
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="grid min-h-[2rem] max-w-[9rem] grid-cols-5 items-end gap-1">
          {Array.from({ length: ones }).map((_, i) => (
            <span
              key={`o${i}`}
              aria-hidden
              className="block h-5 w-5 animate-bounce-in rounded-md bg-coral shadow-[0_2px_0_rgba(0,0,0,0.12)]"
            />
          ))}
          {ones === 0 && <span className="col-span-5 text-2xl text-ink/25">0</span>}
        </div>
        <span className="rounded-full bg-coral/15 px-3 py-0.5 text-sm font-extrabold text-coral">
          {ones} one{ones === 1 ? "" : "s"}
        </span>
      </div>
    </div>
  );
}

/** Triangle needs a cleaner render — replace the nested mess. */
export function ShapeTriangle({ color, size = 48 }: { color: TokenColor; size?: number }) {
  const fill =
    color === "red"
      ? "#FF6B5A"
      : color === "blue"
        ? "#5B8DEF"
        : color === "yellow"
          ? "#F5C542"
          : color === "green"
            ? "#3CB371"
            : "#9B7EDE";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-label="triangle">
      <polygon points="24,6 44,42 4,42" fill={fill} />
    </svg>
  );
}
