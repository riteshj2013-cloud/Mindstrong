"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Mascot } from "@/components/ui/Mascot";
import { gateIsOpen } from "@/lib/storage";

export function GateGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (!gateIsOpen()) {
      const next =
        pathname && pathname.startsWith("/parent") && !pathname.includes("/parent/gate")
          ? pathname
          : "/parent/progress";
      router.replace(`/parent/gate?next=${encodeURIComponent(next)}`);
      return;
    }
    setOk(true);
  }, [router, pathname]);

  if (!ok) {
    return (
      <div className="flex flex-1 items-center justify-center py-20">
        <Mascot size={72} float={false} />
      </div>
    );
  }
  return <>{children}</>;
}
