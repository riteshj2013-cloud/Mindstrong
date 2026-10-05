import Link from "next/link";
import { SOF_DISCLAIMER } from "@/lib/plans";

export function SiteFooter() {
  return (
    <footer className="mt-auto space-y-2 border-t border-ink/10 pt-4 text-center">
      <p className="text-[11px] font-semibold leading-snug text-ink/45">{SOF_DISCLAIMER}</p>
      <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-bold text-ink/50">
        <Link href="/plans" className="underline-offset-2 hover:underline">
          Plans
        </Link>
        <Link href="/legal/terms" className="underline-offset-2 hover:underline">
          Terms
        </Link>
        <Link href="/legal/privacy" className="underline-offset-2 hover:underline">
          Privacy
        </Link>
        <Link href="/legal/refund" className="underline-offset-2 hover:underline">
          Refund
        </Link>
      </nav>
    </footer>
  );
}
