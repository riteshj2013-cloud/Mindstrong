"use client";

import { usePathname } from "next/navigation";
import { GateGuard } from "@/components/parent/GateGuard";
import { Brand } from "@/components/ui/Brand";
import { NavChip } from "@/components/ui/NavChip";

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const isGate = pathname.includes("/parent/gate");

  const shell = (
    <div className="flex flex-1 flex-col gap-4">
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-3">
        <Brand small />
        <nav className="flex flex-wrap gap-2">
          <NavChip href="/parent/progress" tone="soft">
            Progress
          </NavChip>
          <NavChip href="/parent/settings" tone="soft">
            Settings
          </NavChip>
          <NavChip href="/plans" tone="soft">
            Plans
          </NavChip>
          <NavChip href="/" tone="solid">
            Kid view
          </NavChip>
        </nav>
      </header>
      {children}
    </div>
  );

  if (isGate) return shell;
  return <GateGuard>{shell}</GateGuard>;
}
