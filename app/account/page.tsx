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
  type KidProfile,
  useCurrentUser,
} from "@/lib/auth";
import { demoPlanLabel, payments, useSubscription } from "@/lib/payments";
import { getPlan } from "@/lib/plans";
import type { ChildAge } from "@/lib/types";

export default function AccountPage() {
  const router = useRouter();
  const user = useCurrentUser();
  const sub = useSubscription();
  const [kidName, setKidName] = useState("");
  const [kidAge, setKidAge] = useState<ChildAge>(8);
  const [saved, setSaved] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (user === null) router.replace("/login");
  }, [user, router]);

  if (user === undefined || sub === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={96} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={72} float={false} />
      </div>
    );
  }

  const plan = sub?.demoActive ? getPlan(sub.planId) : null;
  const planChip = sub?.demoActive ? demoPlanLabel(sub.planId) : null;

  async function addKid() {
    if (!kidName.trim()) return;
    setBusy(true);
    const next: KidProfile[] = [
      ...user!.kids,
      {
        id: `kid_${Date.now().toString(36)}`,
        name: kidName.trim().slice(0, 24),
        age: kidAge,
      },
    ];
    await auth.updateKids(next);
    setKidName("");
    setSaved(true);
    setBusy(false);
  }

  async function removeKid(id: string) {
    setBusy(true);
    await auth.updateKids(user!.kids.filter((k) => k.id !== id));
    setBusy(false);
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

      <div>
        <h1 className="text-3xl font-semibold">Account</h1>
        <p className="text-sm font-semibold text-ink/55">{authModeLabel()}</p>
      </div>

      <section className="flex items-center gap-4 rounded-[1.75rem] bg-white p-5 shadow-soft">
        {user.photoURL ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.photoURL}
            alt=""
            className="h-16 w-16 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-plum/30 font-display text-2xl font-semibold">
            {(user.parentName[0] ?? user.email[0] ?? "?").toUpperCase()}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-xl font-semibold">
            {user.parentName || "Parent"}
          </p>
          <p className="truncate text-sm font-semibold text-ink/55">{user.email}</p>
          {planChip && (
            <p className="mt-1 inline-block rounded-full bg-mint/30 px-2.5 py-0.5 text-xs font-bold">
              {planChip}
            </p>
          )}
        </div>
      </section>

      {authIsDemo() && (
        <p className="rounded-2xl bg-sun/35 px-4 py-3 text-sm font-semibold">
          Demo account on this device only. Password (if set) is hashed with
          SHA-256 + salt — never stored as plaintext.
        </p>
      )}

      <section className="space-y-3 rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Kid profiles</h2>
        <p className="text-sm font-semibold text-ink/55">
          Kids stay under the parent account. Age 6–15 matches daily & prep content.
        </p>
        {user.kids.length === 0 ? (
          <p className="text-sm font-semibold text-ink/45">No kids added yet.</p>
        ) : (
          <ul className="space-y-2">
            {user.kids.map((k) => (
              <li
                key={k.id}
                className="flex items-center justify-between gap-2 rounded-2xl bg-cream px-4 py-3"
              >
                <span className="font-semibold">
                  {k.name} · age {k.age}
                </span>
                <button
                  type="button"
                  className="text-sm font-bold text-coral"
                  disabled={busy}
                  onClick={() => removeKid(k.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="space-y-2 border-t border-ink/10 pt-3">
          <label className="block text-sm font-bold text-ink/55" htmlFor="new-kid">
            Add a child
          </label>
          <input
            id="new-kid"
            value={kidName}
            onChange={(e) => {
              setKidName(e.target.value);
              setSaved(false);
            }}
            placeholder="Child’s name"
            className="min-h-12 w-full rounded-2xl border-2 border-ink/10 bg-cream px-4 text-lg font-semibold outline-none focus:border-sky"
          />
          <AgePicker
            value={kidAge}
            onChange={setKidAge}
            size="compact"
            label="Age (6–15)"
          />
          <Button disabled={busy || !kidName.trim()} onClick={addKid}>
            {saved ? "Added ✓" : "Add kid"}
          </Button>
        </div>
      </section>

      <section className="space-y-3 rounded-[1.75rem] bg-gradient-to-br from-plum/20 to-sky/25 p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Plan</h2>
        {plan ? (
          <p className="text-sm font-semibold text-ink/70">
            {plan.name} ({plan.priceLabel}
            {plan.cadenceLabel}) — demo preview on this device.
          </p>
        ) : (
          <p className="text-sm font-semibold text-ink/70">
            You’re on Free (or no demo plan selected).
          </p>
        )}
        <Link href="/plans">
          <Button variant="secondary">View plans</Button>
        </Link>
        {sub?.demoActive && (
          <Button
            variant="ghost"
            onClick={() => {
              payments.clearDemoSubscription();
            }}
          >
            Clear demo plan
          </Button>
        )}
      </section>

      <div className="flex flex-col gap-2">
        <Link
          href="/parent/settings"
          className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-bold shadow-soft"
        >
          Parent settings
        </Link>
        <Button
          variant="warn"
          onClick={async () => {
            await auth.signOut();
            router.push("/");
          }}
        >
          Log out
        </Button>
      </div>

      <SiteFooter />
    </main>
  );
}
