"use client";

import Link from "next/link";

export function ReadingHeader({
  title = "Reading Champ",
  backHref = "/reading",
  backLabel = "Back",
}: {
  title?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="flex items-center justify-between gap-2">
      <Link
        href={backHref}
        className="inline-flex min-h-12 items-center rounded-full bg-white px-4 text-sm font-bold shadow-soft"
      >
        {backLabel}
      </Link>
      <p className="truncate font-display text-lg font-semibold">{title}</p>
      <Link
        href="/"
        className="inline-flex min-h-12 items-center rounded-full bg-white px-4 text-sm font-bold shadow-soft"
      >
        Home
      </Link>
    </header>
  );
}
