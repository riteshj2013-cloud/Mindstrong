"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-bold shadow-soft transition active:scale-[0.98]";

const tones = {
  solid: "bg-white text-ink border border-ink/10 hover:border-sky",
  soft: "bg-cream text-ink border border-ink/10 hover:bg-white",
  accent: "bg-sky/25 text-ink border border-sky/40 hover:bg-sky/40",
  warn: "bg-sun/80 text-ink border border-sun hover:bg-sun",
} as const;

type Tone = keyof typeof tones;

export function NavChip({
  href,
  children,
  tone = "solid",
  className = "",
  ...rest
}: {
  href?: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `${base} ${tones[tone]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
