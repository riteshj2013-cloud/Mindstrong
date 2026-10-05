"use client";

/**
 * Payment abstraction — Razorpay-ready interface; demo implementation only.
 *
 * IMPORTANT (go-live):
 *   - createOrder + payment signature verification MUST run on a serverless
 *     function (Cloudflare Workers / Vercel / Firebase Functions). Never put
 *     Razorpay key_secret (or order creation) in client code shipped to GitHub Pages.
 *   - Client may only hold Razorpay key_id (publishable) to open Checkout.js
 *     after the server returns an order_id.
 *   - GST invoicing, refunds, and webhooks also need server endpoints.
 *
 * Env (future, never commit secrets):
 *   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_…   // publishable only
 *   Server: RAZORPAY_KEY_ID + RAZORPAY_KEY_SECRET
 *
 * Storage: mindstrong.v1.subscription — demoActive plan for UI badges.
 */

import { useSyncExternalStore } from "react";
import {
  amountToPaise,
  getPlan,
  type Plan,
  type PlanId,
} from "./plans";

export const SUBSCRIPTION_KEY = "mindstrong.v1.subscription";
const CHANGE = "mindstrong:subscription";

export type PaymentMethodHint = "upi" | "card" | "netbanking";

export interface CreateOrderInput {
  planId: PlanId;
  /** Parent email for receipt (demo only). */
  email?: string;
  parentName?: string;
}

export interface OrderResult {
  ok: boolean;
  /** Demo preview — no real charge. */
  demo: boolean;
  orderId?: string;
  amountPaise?: number;
  currency?: "INR";
  plan?: Plan;
  message?: string;
  error?: string;
}

export interface CheckoutSession {
  planId: PlanId;
  startedAt: string;
  /** Set when user taps Pay in demo mode. */
  demoActive: boolean;
  demoActivatedAt?: string;
}

export interface PaymentProvider {
  readonly id: "demo" | "razorpay";
  /** Server-side in production — see file header. */
  createOrder(input: CreateOrderInput): Promise<OrderResult>;
  /** Open Razorpay Checkout (or demo preview). */
  openCheckout(order: OrderResult, methods?: PaymentMethodHint[]): Promise<CheckoutOutcome>;
  getSubscription(): CheckoutSession | null;
  clearDemoSubscription(): void;
}

export interface CheckoutOutcome {
  ok: boolean;
  demo: boolean;
  status: "preview" | "paid" | "cancelled" | "failed";
  message: string;
  planId?: PlanId;
}

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(SUBSCRIPTION_KEY);
  } catch {
    return null;
  }
}

function parseSub(raw: string | null): CheckoutSession | null {
  if (!raw) return null;
  try {
    const p = JSON.parse(raw) as CheckoutSession;
    if (!p?.planId) return null;
    return p;
  } catch {
    return null;
  }
}

const cache: { raw: string | null; value: CheckoutSession | null } = {
  raw: null,
  value: null,
};
let cacheReady = false;

function readSub(): CheckoutSession | null {
  if (typeof window === "undefined") return null;
  const raw = readRaw();
  if (cacheReady && cache.raw === raw) return cache.value;
  const value = parseSub(raw);
  cache.raw = raw;
  cache.value = value;
  cacheReady = true;
  return value;
}

function writeSub(value: CheckoutSession | null) {
  try {
    if (value === null) window.localStorage.removeItem(SUBSCRIPTION_KEY);
    else window.localStorage.setItem(SUBSCRIPTION_KEY, JSON.stringify(value));
  } catch {
    /* ignore */
  }
  cache.raw = value === null ? null : JSON.stringify(value);
  cache.value = value;
  cacheReady = true;
  window.dispatchEvent(new Event(CHANGE));
}

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", cb);
  window.addEventListener(CHANGE, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CHANGE, cb);
  };
}

export function useSubscription(): CheckoutSession | null | undefined {
  return useSyncExternalStore(subscribe, readSub, () => undefined);
}

export function demoPlanLabel(planId: PlanId | undefined): string | null {
  if (!planId || planId === "free") return null;
  const plan = getPlan(planId);
  if (!plan) return null;
  if (planId.startsWith("plus")) return "Plus (demo)";
  if (planId === "exam-pass") return "Exam Pass (demo)";
  if (planId === "founding-family") return "Founding Family (demo)";
  return `${plan.name} (demo)`;
}

class DemoPaymentProvider implements PaymentProvider {
  readonly id = "demo" as const;

  getSubscription(): CheckoutSession | null {
    return readSub();
  }

  clearDemoSubscription(): void {
    writeSub(null);
  }

  async createOrder(input: CreateOrderInput): Promise<OrderResult> {
    const plan = getPlan(input.planId);
    if (!plan) {
      return { ok: false, demo: true, error: "unknown_plan", message: "Unknown plan." };
    }
    if (plan.isFree) {
      return {
        ok: true,
        demo: true,
        plan,
        orderId: "demo_free",
        amountPaise: 0,
        currency: "INR",
        message: "Free plan — no payment needed.",
      };
    }
    // NOTE: Real createOrder must call your serverless function, which calls
    // Razorpay Orders API with key_secret. Never create orders in the browser.
    return {
      ok: true,
      demo: true,
      plan,
      orderId: `demo_order_${plan.id}_${Date.now().toString(36)}`,
      amountPaise: amountToPaise(plan.amountInr),
      currency: "INR",
      message: "Demo order — payments aren't live yet.",
    };
  }

  async openCheckout(
    order: OrderResult,
    _methods: PaymentMethodHint[] = ["upi", "card", "netbanking"],
  ): Promise<CheckoutOutcome> {
    void _methods;
    if (!order.ok || !order.plan) {
      return {
        ok: false,
        demo: true,
        status: "failed",
        message: order.message ?? "Could not start checkout.",
      };
    }
    if (order.plan.isFree) {
      return {
        ok: true,
        demo: true,
        status: "paid",
        message: "You're on Free — no charge.",
        planId: order.plan.id,
      };
    }

    // Demo: do NOT charge. Mark plan demoActive locally for UI.
    const session: CheckoutSession = {
      planId: order.plan.id,
      startedAt: new Date().toISOString(),
      demoActive: true,
      demoActivatedAt: new Date().toISOString(),
    };
    writeSub(session);

    return {
      ok: true,
      demo: true,
      status: "preview",
      planId: order.plan.id,
      message:
        "Payments aren't live yet — this is a preview. No money was charged. Your plan shows as demo-active on this device only.",
    };
  }
}

/**
 * Future Razorpay provider skeleton — not instantiated until key_id + serverless
 * order endpoint exist. Kept here so the interface is ready.
 */
export class RazorpayPaymentProvider implements PaymentProvider {
  readonly id = "razorpay" as const;

  getSubscription(): CheckoutSession | null {
    return readSub();
  }

  clearDemoSubscription(): void {
    writeSub(null);
  }

  async createOrder(_input: CreateOrderInput): Promise<OrderResult> {
    void _input;
    // POST /api/razorpay/create-order  → { orderId, amount, currency, keyId }
    return {
      ok: false,
      demo: false,
      error: "not_wired",
      message:
        "Razorpay createOrder must run on a serverless function. Wire RAZORPAY_KEY_SECRET server-side first.",
    };
  }

  async openCheckout(order: OrderResult): Promise<CheckoutOutcome> {
    void order;
    return {
      ok: false,
      demo: false,
      status: "failed",
      message: "Razorpay Checkout.js not wired yet.",
    };
  }
}

export const payments: PaymentProvider = new DemoPaymentProvider();

export const RAZORPAY_METHODS: { id: PaymentMethodHint; label: string; emoji: string }[] = [
  { id: "upi", label: "UPI", emoji: "📱" },
  { id: "card", label: "Card", emoji: "💳" },
  { id: "netbanking", label: "Netbanking", emoji: "🏦" },
];
