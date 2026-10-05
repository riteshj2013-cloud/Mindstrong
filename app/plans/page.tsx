"use client";

import Link from "next/link";
import { AccountButton } from "@/components/auth/AccountButton";
import { SiteFooter } from "@/components/auth/SiteFooter";
import { AdultMathGate } from "@/components/billing/AdultMathGate";
import { Brand } from "@/components/ui/Brand";
import { Button } from "@/components/ui/Button";
import {
  PLANS,
  PRICING_DISCLAIMER,
  SOF_DISCLAIMER,
  type Plan,
} from "@/lib/plans";
import { demoPlanLabel, useSubscription } from "@/lib/payments";

export default function PlansPage() {
  return (
    <AdultMathGate>
      <PlansInner />
    </AdultMathGate>
  );
}

function PlansInner() {
  const sub = useSubscription();
  const activeId = sub?.demoActive ? sub.planId : null;

  return (
    <main className="flex flex-1 flex-col gap-5">
      <header className="flex items-center justify-between gap-2">
        <Link href="/">
          <Brand small />
        </Link>
        <div className="flex items-center gap-2">
          <AccountButton />
          <Link
            href="/"
            className="rounded-full bg-white px-3 py-2 text-sm font-bold text-ink/60 shadow-soft"
          >
            Kid view
          </Link>
        </div>
      </header>

      <div>
        <h1 className="text-3xl font-semibold">Plans</h1>
        <p className="mt-1 text-sm font-semibold text-ink/55">{PRICING_DISCLAIMER}</p>
        <p className="mt-1 text-xs font-semibold text-ink/45">{SOF_DISCLAIMER}</p>
      </div>

      {activeId && (
        <p className="rounded-2xl bg-mint/30 px-4 py-3 text-sm font-bold">
          Active on this device: {demoPlanLabel(activeId)}
        </p>
      )}

      <div className="grid gap-4">
        {PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} active={activeId === plan.id} />
        ))}
      </div>

      <p className="text-center text-xs font-semibold text-ink/45">
        Payments preview only — Razorpay not live. No charges.
      </p>

      <SiteFooter />
    </main>
  );
}

function PlanCard({ plan, active }: { plan: Plan; active: boolean }) {
  return (
    <article
      className={`relative space-y-3 rounded-[1.75rem] border-2 bg-white p-5 shadow-soft ${
        plan.featured ? "border-coral/50 shadow-chunky" : "border-ink/10"
      } ${active ? "ring-4 ring-mint/40" : ""}`}
    >
      {plan.badge && (
        <span className="absolute -top-2.5 right-4 rounded-full bg-sun px-3 py-0.5 text-xs font-bold shadow-soft">
          {plan.badge}
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl font-semibold">{plan.name}</h2>
          <p className="text-sm font-semibold text-ink/55">{plan.tagline}</p>
        </div>
        <div className="text-right">
          <p className="font-display text-2xl font-semibold">{plan.priceLabel}</p>
          <p className="text-xs font-bold text-ink/45">{plan.cadenceLabel}</p>
        </div>
      </div>
      <ul className="space-y-1.5">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2 text-sm font-semibold text-ink/75">
            <span aria-hidden>✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {plan.isFree ? (
        <Link href="/">
          <Button variant="secondary">Continue free</Button>
        </Link>
      ) : (
        <Link href={`/checkout?plan=${plan.id}`}>
          <Button variant={plan.featured ? "primary" : "secondary"}>
            {active ? "View checkout" : "Choose plan"}
          </Button>
        </Link>
      )}
    </article>
  );
}
