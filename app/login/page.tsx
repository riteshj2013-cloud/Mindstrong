"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/auth/SiteFooter";
import { AgePicker } from "@/components/ui/AgePicker";
import { Brand } from "@/components/ui/Brand";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import {
  auth,
  authIsDemo,
  authModeLabel,
  useCurrentUser,
} from "@/lib/auth";
import type { ChildAge } from "@/lib/types";

type Mode = "signin" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const user = useCurrentUser();
  const [mode, setMode] = useState<Mode>("signin");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usePassword, setUsePassword] = useState(false);
  const [kidName, setKidName] = useState("");
  const [kidAge, setKidAge] = useState<ChildAge>(8);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const demo = authIsDemo();
  const googleOn = auth.googleAvailable();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const result = await auth.completeEmailLinkIfPresent();
      if (cancelled || !result) return;
      if (result.ok) {
        router.replace("/account");
      } else if (result.message) {
        setMessage(result.message);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  useEffect(() => {
    if (user) router.replace("/account");
  }, [user, router]);

  if (user === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={96} />
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setMessage(null);
    try {
      if (mode === "signup") {
        const result = await auth.signUp({
          parentName,
          email,
          password: usePassword ? password : undefined,
          preferEmailLink: !usePassword && !demo,
          kid: kidName.trim()
            ? { name: kidName.trim(), age: kidAge }
            : undefined,
        });
        if (result.ok) {
          router.push("/account");
          return;
        }
        if (result.error === "link_sent") {
          setMessage(result.message ?? "Check your email for a magic link.");
          return;
        }
        setError(result.message ?? "Could not create account.");
      } else {
        const result = await auth.signIn({
          email,
          password: usePassword ? password : undefined,
          preferEmailLink: !usePassword && !demo,
        });
        if (result.ok) {
          router.push("/account");
          return;
        }
        if (result.error === "link_sent") {
          setMessage(result.message ?? "Check your email for a magic link.");
          return;
        }
        setError(result.message ?? "Could not sign in.");
      }
    } finally {
      setBusy(false);
    }
  }

  async function onGoogle() {
    setBusy(true);
    setError(null);
    setMessage(null);
    try {
      const result = await auth.signInWithGoogle();
      if (result.ok) {
        router.push("/account");
        return;
      }
      setError(result.message ?? "Google sign-in failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex flex-1 flex-col gap-5">
      <header className="flex items-center justify-between">
        <Link href="/">
          <Brand small />
        </Link>
        <Link
          href="/"
          className="rounded-full bg-white px-3 py-2 text-sm font-bold text-ink/60 shadow-soft"
        >
          Kid view
        </Link>
      </header>

      <div className="text-center">
        <Mascot mood="cheer" size={88} float={false} />
        <h1 className="mt-2 text-3xl font-semibold">
          {mode === "signin" ? "Parent sign in" : "Create parent account"}
        </h1>
        <p className="mt-1 text-sm font-bold text-ink/55">{authModeLabel()}</p>
      </div>

      {demo && (
        <p className="rounded-2xl bg-sun/40 px-4 py-3 text-sm font-semibold text-ink/80">
          Demo login — saved on this device only. No server yet. Firebase turns
          on when <code className="text-xs">NEXT_PUBLIC_FIREBASE_*</code> is set
          at build time.
        </p>
      )}

      {googleOn && (
        <Button
          type="button"
          variant="secondary"
          disabled={busy}
          onClick={onGoogle}
          className="gap-3"
        >
          <GoogleIcon />
          Continue with Google
        </Button>
      )}

      {googleOn && (
        <p className="text-center text-xs font-bold uppercase tracking-wide text-ink/40">
          or email
        </p>
      )}

      <form className="space-y-3" onSubmit={onSubmit}>
        {mode === "signup" && (
          <Field
            id="parent-name"
            label="Your name"
            value={parentName}
            onChange={setParentName}
            autoComplete="name"
            required
          />
        )}
        <Field
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          required
        />

        <label className="flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft">
          <span className="text-sm font-semibold">
            {demo
              ? "Use a password (optional, hashed on device)"
              : "Use password instead of magic link"}
          </span>
          <input
            type="checkbox"
            className="h-5 w-5 accent-coral"
            checked={usePassword}
            onChange={(e) => setUsePassword(e.target.checked)}
          />
        </label>

        {usePassword && (
          <Field
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            required={usePassword}
            minLength={6}
          />
        )}

        {mode === "signup" && (
          <section className="space-y-3 rounded-[1.75rem] border border-ink/10 bg-white p-4 shadow-soft">
            <p className="text-sm font-bold text-ink/55">Kid profile (optional)</p>
            <Field
              id="kid-name"
              label="Child’s name"
              value={kidName}
              onChange={setKidName}
              autoComplete="off"
            />
            <AgePicker
              value={kidAge}
              onChange={setKidAge}
              size="compact"
              label="Child’s age (6–15)"
            />
          </section>
        )}

        {!demo && !usePassword && (
          <p className="text-xs font-semibold text-ink/50">
            We’ll email a magic link — no password needed. Open it on this device.
          </p>
        )}
        {demo && !usePassword && (
          <p className="text-xs font-semibold text-ink/50">
            Demo: tap continue with just your email (and name on sign-up). Password
            optional.
          </p>
        )}

        {error && (
          <p className="rounded-2xl bg-coral/15 px-4 py-3 text-sm font-bold text-coral">
            {error}
          </p>
        )}
        {message && (
          <p className="rounded-2xl bg-mint/25 px-4 py-3 text-sm font-bold text-ink/80">
            {message}
          </p>
        )}

        <Button type="submit" disabled={busy}>
          {busy
            ? "Working…"
            : mode === "signup"
              ? demo
                ? "Continue as parent"
                : usePassword
                  ? "Create account"
                  : "Email me a magic link"
              : demo
                ? "Continue as parent"
                : usePassword
                  ? "Sign in"
                  : "Email me a magic link"}
        </Button>
      </form>

      <button
        type="button"
        className="text-sm font-bold text-ink/55 underline-offset-4 hover:underline"
        onClick={() => {
          setMode(mode === "signin" ? "signup" : "signin");
          setError(null);
          setMessage(null);
        }}
      >
        {mode === "signin"
          ? "New here? Create a parent account"
          : "Already have an account? Sign in"}
      </button>

      <Link
        href="/plans"
        className="block rounded-[1.5rem] bg-gradient-to-br from-plum/25 to-sky/30 px-4 py-4 text-center font-display text-lg font-semibold shadow-soft"
      >
        See plans →
      </Link>

      <SiteFooter />
    </main>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
  minLength,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-bold text-ink/55">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        className="min-h-14 w-full rounded-3xl border-2 border-ink/10 bg-white px-4 text-lg font-semibold outline-none focus:border-sky"
      />
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.5-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l.1.1 6.3 5.3C39.2 37.1 44 32 44 24c0-1.3-.1-2.5-.4-3.5z"
      />
    </svg>
  );
}
