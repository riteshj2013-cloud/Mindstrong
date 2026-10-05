import Link from "next/link";
import { SiteFooter } from "@/components/auth/SiteFooter";
import { Brand } from "@/components/ui/Brand";

export default function RefundPage() {
  return (
    <main className="flex flex-1 flex-col gap-5">
      <header className="flex items-center justify-between">
        <Link href="/">
          <Brand small />
        </Link>
        <Link href="/plans" className="text-sm font-bold text-ink/55 underline-offset-2 hover:underline">
          Plans
        </Link>
      </header>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-coral">Draft — placeholder</p>
        <h1 className="text-3xl font-semibold">Refund Policy</h1>
      </div>
      <article className="space-y-3 rounded-[1.75rem] bg-white p-5 text-sm font-semibold leading-relaxed text-ink/75 shadow-soft">
        <p>
          Draft refund policy placeholder. Razorpay requires a clear refund policy URL before
          live payments. Replace with counsel-reviewed text.
        </p>
        <p>
          Proposed direction (not binding): unused Exam Pass windows and unused portions of yearly
          plans may be eligible for partial refunds within a short cooling-off period; monthly
          Plus may cancel at period end. Exact rules TBD.
        </p>
        <p>No payments are collected in the current demo / preview build.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
