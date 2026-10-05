import Link from "next/link";
import { Brand } from "@/components/ui/Brand";

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <header className="flex items-center justify-between border-b border-ink/10 pb-3">
        <Brand small />
        <nav className="flex gap-1 text-sm font-bold">
          <Link
            href="/parent/progress"
            className="rounded-full px-3 py-2 text-ink/60 hover:bg-white hover:text-ink"
          >
            Progress
          </Link>
          <Link
            href="/parent/settings"
            className="rounded-full px-3 py-2 text-ink/60 hover:bg-white hover:text-ink"
          >
            Settings
          </Link>
          <Link
            href="/"
            className="rounded-full bg-white px-3 py-2 text-ink shadow-soft"
          >
            Kid view
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
