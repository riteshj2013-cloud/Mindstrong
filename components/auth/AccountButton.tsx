"use client";

import Link from "next/link";
import { authIsDemo, useCurrentUser } from "@/lib/auth";
import { demoPlanLabel, useSubscription } from "@/lib/payments";

function initials(name: string, email: string): string {
  const n = name.trim();
  if (n) {
    const parts = n.split(/\s+/);
    const a = parts[0]?.[0] ?? "";
    const b = parts[1]?.[0] ?? "";
    return (a + b).toUpperCase() || a.toUpperCase() || "?";
  }
  return (email[0] ?? "?").toUpperCase();
}

/** Header chip: Log in, or avatar linking to /account. */
export function AccountButton() {
  const user = useCurrentUser();
  const sub = useSubscription();

  if (user === undefined || sub === undefined) {
    return (
      <span className="inline-block h-10 w-10 animate-pulse rounded-full bg-white/80 shadow-soft" />
    );
  }

  if (!user) {
    return (
      <Link
        href="/login"
        className="rounded-full bg-white px-3 py-2 text-sm font-bold text-ink shadow-soft hover:bg-sky/10"
      >
        Log in
      </Link>
    );
  }

  const planChip =
    sub?.demoActive && sub.planId ? demoPlanLabel(sub.planId) : null;
  const label = initials(user.parentName, user.email);

  return (
    <Link
      href="/account"
      className="flex items-center gap-1.5 rounded-full bg-white py-1 pl-1 pr-2.5 shadow-soft hover:bg-sky/10"
      title={
        authIsDemo()
          ? `${user.parentName || user.email} · demo account`
          : user.parentName || user.email
      }
    >
      {user.photoURL ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={user.photoURL}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-plum/30 font-display text-sm font-semibold text-ink">
          {label}
        </span>
      )}
      <span className="hidden text-xs font-bold text-ink/70 sm:inline">
        {planChip ?? "Account"}
      </span>
    </Link>
  );
}
