"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "success" | "warn";

const styles: Record<Variant, string> = {
  primary:
    "bg-coral text-white shadow-chunky hover:brightness-105 active:translate-y-0.5 active:shadow-none",
  secondary:
    "bg-white text-ink border-2 border-ink/10 shadow-soft hover:border-sky active:translate-y-0.5",
  ghost: "bg-transparent text-ink/70 hover:bg-ink/5 active:scale-[0.98]",
  success:
    "bg-leaf text-white shadow-chunky hover:brightness-105 active:translate-y-0.5 active:shadow-none",
  warn: "bg-sun text-ink shadow-chunky hover:brightness-105 active:translate-y-0.5 active:shadow-none",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <button
      type="button"
      className={`inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-3xl px-5 py-3 font-display text-xl font-semibold tracking-tight transition disabled:cursor-not-allowed disabled:opacity-40 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
