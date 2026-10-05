import Link from "next/link";
import { SiteFooter } from "@/components/auth/SiteFooter";
import { Brand } from "@/components/ui/Brand";

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      </div>
      <article className="space-y-3 rounded-[1.75rem] bg-white p-5 text-sm font-semibold leading-relaxed text-ink/75 shadow-soft">
        <p>
          Draft privacy placeholder for Mindstrong. Not final. Not legal advice. Update before
          collecting personal data through Firebase Auth or Razorpay.
        </p>
        <p>
          <strong>Today (demo / local):</strong> profile, progress, and demo account data stay in
          your browser’s localStorage on this device. We do not operate a Mindstrong server for
          this GitHub Pages build.
        </p>
        <p>
          <strong>When Firebase is enabled:</strong> Google / email authentication is processed by
          Google Firebase under their terms. Kid profiles may still be stored locally until a
          cloud profile store is added.
        </p>
        <p>
          <strong>When Razorpay is enabled:</strong> payment details are handled by Razorpay; we
          should only receive order metadata needed for entitlements — never full card numbers in
          our client code.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
