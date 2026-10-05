"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { AccountButton } from "@/components/auth/AccountButton";
import { SiteFooter } from "@/components/auth/SiteFooter";
import { AdultMathGate } from "@/components/billing/AdultMathGate";
import { Brand } from "@/components/ui/Brand";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import { useCurrentUser } from "@/lib/auth";
import {
  RAZORPAY_METHODS,
  payments,
  type CheckoutOutcome,
} from "@/lib/payments";
import {
  PRICING_DISCLAIMER,
  SOF_DISCLAIMER,
  getPlan,
  type PlanId,
} from "@/lib/plans";

export default function CheckoutPage() {
  return (
    <AdultMathGate>
      <Suspense
        fallback={
          <div className="flex flex-1 items-center justify-center">
            <Mascot size={72} float={false} />
          </div>
        }
      >
        <CheckoutInner />
      </Suspense>
    </AdultMathGate>
  );
}

function CheckoutInner() {
  const router = useRouter();
  const params = useSearchParams();
  const user = useCurrentUser();
  const planId = (params.get("plan") ?? "") as PlanId;
  const plan = useMemo(() => getPlan(planId), [planId]);
  const [busy, setBusy] = useState(false);
  const [outcome, setOutcome] = useState<CheckoutOutcome | null>(null);

  if (!plan || plan.isFree) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Mascot mood="think" size={96} float={false} />
        <h1 className="text-2xl font-semibold">Pick a paid plan</h1>
        <p className="text-sm font-semibold text-ink/55">
          Free doesn’t need checkout. Choose Plus, Exam Pass, or Founding Family.
        </p>
        <Link href="/plans">
          <Button>Back to plans</Button>
        </Link>
      </main>
    );
  }

  async function pay() {
    setBusy(true);
    setOutcome(null);
    try {
      const order = await payments.createOrder({
        planId: plan!.id,
        email: user?.email,
        parentName: user?.parentName,
      });
      const result = await payments.openCheckout(order);
      setOutcome(result);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex flex-1 flex-col gap-5">
      <header className="flex items-center justify-between gap-2">
        <Link href="/plans">
          <Brand small />
        </Link>
        <AccountButton />
      </header>

      <div>
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <p className="mt-1 text-sm font-semibold text-ink/55">{PRICING_DISCLAIMER}</p>
      </div>

      <section className="space-y-2 rounded-[1.75rem] bg-white p-5 shadow-soft">
        <p className="text-sm font-bold text-ink/45">Plan summary</p>
        <h2 className="font-display text-2xl font-semibold">{plan.name}</h2>
        <p className="text-sm font-semibold text-ink/60">{plan.tagline}</p>
        <p className="font-display text-3xl font-semibold">
          {plan.priceLabel}
          <span className="text-base font-bold text-ink/45"> {plan.cadenceLabel}</span>
        </p>
        <p className="text-xs font-semibold text-ink/45">
          GST note (placeholder): Taxes as applicable under Indian GST will appear
          on the invoice when payments go live. Draft — not advice.
        </p>
      </section>

      <section className="space-y-3 rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Pay with Razorpay</h2>
        <p className="text-sm font-semibold text-ink/55">
          Methods shown for preview — UPI, card, netbanking (Razorpay).
        </p>
        <div className="grid grid-cols-3 gap-2">
          {RAZORPAY_METHODS.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl bg-cream px-2 py-3 text-center text-sm font-bold"
            >
              <span className="block text-2xl" aria-hidden>
                {m.emoji}
              </span>
              {m.label}
            </div>
          ))}
        </div>
      </section>

      {!user && (
        <p className="rounded-2xl bg-sky/15 px-4 py-3 text-sm font-semibold">
          Tip:{" "}
          <Link href="/login" className="font-bold underline underline-offset-2">
            Log in
          </Link>{" "}
          so we can attach the plan to your parent account (optional for this demo).
        </p>
      )}

      {outcome && (
        <div
          className={`space-y-2 rounded-[1.75rem] px-4 py-4 ${
            outcome.status === "preview" || outcome.status === "paid"
              ? "bg-mint/25"
              : "bg-coral/15"
          }`}
        >
          <p className="font-display text-xl font-semibold">
            {outcome.status === "preview"
              ? "Payments aren't live yet — this is a preview"
              : outcome.status === "paid"
                ? "Done"
                : "Couldn’t finish"}
          </p>
          <p className="text-sm font-semibold text-ink/75">{outcome.message}</p>
          {outcome.status === "preview" && (
            <Button variant="secondary" onClick={() => router.push("/account")}>
              See account (demo plan)
            </Button>
          )}
        </div>
      )}

      {!outcome && (
        <Button disabled={busy} onClick={pay}>
          {busy ? "Opening…" : `Pay ${plan.priceLabel} (demo)`}
        </Button>
      )}

      <Button variant="ghost" onClick={() => router.push("/plans")}>
        Back to plans
      </Button>

      <p className="text-center text-[11px] font-semibold text-ink/45">{SOF_DISCLAIMER}</p>
      <SiteFooter />
    </main>
  );
}
