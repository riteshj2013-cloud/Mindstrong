/**
 * Proposed pricing — edit amounts/copy here only.
 * Marked “Proposed pricing” in the UI until Ritesh approves.
 * Amounts are INR paise for Razorpay (₹199 → 19900).
 */

export type PlanId =
  | "free"
  | "plus-monthly"
  | "plus-yearly"
  | "exam-pass"
  | "founding-family";

export type PlanCadence = "forever" | "month" | "year" | "season";

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  /** Display price, e.g. "₹199". */
  priceLabel: string;
  /** Integer INR (rupees), not paise. */
  amountInr: number;
  cadence: PlanCadence;
  cadenceLabel: string;
  features: string[];
  /** Highlight card on /plans. */
  featured?: boolean;
  /** Soft badge, e.g. "Early bird". */
  badge?: string;
  /** Free tier — no checkout. */
  isFree?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Daily practice + sample SOF sets",
    priceLabel: "₹0",
    amountInr: 0,
    cadence: "forever",
    cadenceLabel: "forever",
    isFree: true,
    features: [
      "Daily reasoning · maths · spelling",
      "Sample SOF prep sets",
      "Streaks & brave-try stars",
      "Works offline on this device",
    ],
  },
  {
    id: "plus-monthly",
    name: "Mindstrong Plus",
    tagline: "All SOF prep grades & chapters",
    priceLabel: "₹199",
    amountInr: 199,
    cadence: "month",
    cadenceLabel: "/ month",
    featured: true,
    badge: "Most flexible",
    features: [
      "All SOF prep grades & chapters",
      "Lessons + quizzes",
      "Progress reports for parents",
      "Daily practice unlocked",
    ],
  },
  {
    id: "plus-yearly",
    name: "Mindstrong Plus",
    tagline: "Full year — best value",
    priceLabel: "₹1,499",
    amountInr: 1499,
    cadence: "year",
    cadenceLabel: "/ year",
    badge: "Save vs monthly",
    features: [
      "Everything in Plus monthly",
      "All SOF prep grades & chapters",
      "Lessons + progress reports",
      "One payment for the school year",
    ],
  },
  {
    id: "exam-pass",
    name: "Exam Pass",
    tagline: "One olympiad season, one subject",
    priceLabel: "₹499",
    amountInr: 499,
    cadence: "season",
    cadenceLabel: "per season",
    features: [
      "One olympiad season window",
      "One subject (Maths / English / Science)",
      "Full chapter sets for that subject",
      "No monthly commitment",
    ],
  },
  {
    id: "founding-family",
    name: "Founding Family",
    tagline: "Limited early-bird — shape the product",
    priceLabel: "₹999",
    amountInr: 999,
    cadence: "year",
    cadenceLabel: "/ year",
    badge: "Early bird",
    features: [
      "Everything in Plus yearly",
      "Founding-family badge in app",
      "Priority feedback channel",
      "Locked price for year one",
    ],
  },
];

export const PRICING_DISCLAIMER =
  "Proposed pricing — not final. Amounts may change before payments go live.";

export const SOF_DISCLAIMER =
  "Olympiad-style practice — not affiliated with SOF or any exam board.";

export function getPlan(id: string | null | undefined): Plan | undefined {
  if (!id) return undefined;
  return PLANS.find((p) => p.id === id);
}

/** Razorpay expects amount in the smallest currency unit (paise for INR). */
export function amountToPaise(amountInr: number): number {
  return Math.round(amountInr * 100);
}
