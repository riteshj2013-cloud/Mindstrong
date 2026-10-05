import Link from "next/link";
import { SiteFooter } from "@/components/auth/SiteFooter";
import { Brand } from "@/components/ui/Brand";

export default function TermsPage() {
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
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
      </div>
      <article className="space-y-3 rounded-[1.75rem] bg-white p-5 text-sm font-semibold leading-relaxed text-ink/75 shadow-soft">
        <p>
          This is a draft placeholder for Mindstrong’s Terms of Service. It is not legal advice
          and is not final. Razorpay and app stores will require complete terms before payments
          go live.
        </p>
        <p>
          Mindstrong provides olympiad-style practice for ages 6–15. We are not affiliated with
          SOF or any exam board. Content and proposed pricing may change.
        </p>
        <p>
          Until a real account provider and payments are enabled, demo accounts and plan
          previews are stored only on your device.
        </p>
        <p>Replace this page with counsel-reviewed terms before accepting paid subscriptions.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
