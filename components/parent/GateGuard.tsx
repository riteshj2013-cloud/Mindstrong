"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Mascot } from "@/components/ui/Mascot";
import { gateIsOpen } from "@/lib/storage";

export function GateGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (!gateIsOpen()) {
      router.replace("/parent/gate");
      return;
    }
    setOk(true);
  }, [router]);

  if (!ok) {
    return (
      <div className="flex flex-1 items-center justify-center py-20">
        <Mascot size={72} float={false} />
      </div>
    );
  }
  return <>{children}</>;
}
