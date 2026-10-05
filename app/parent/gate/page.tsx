"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { NavChip } from "@/components/ui/NavChip";
import { Mascot } from "@/components/ui/Mascot";
import { gateIsOpen, passGate } from "@/lib/storage";

/**
 * Soft adult gate — not real auth. Keeps curious kids out of denser UI.
 * Gate token lives in sessionStorage for ~30 minutes.
 */
export default function ParentGatePage() {
  return (
    <Suspense fallback={<div className="flex flex-1 items-center justify-center"><Mascot size={72} float={false} /></div>}>
      <ParentGateInner />
    </Suspense>
  );
}

function ParentGateInner() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/parent/progress";
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (gateIsOpen()) {
      router.replace(next);
      return;
    }
    setReady(true);
  }, [router, next]);

  if (!ready) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={72} float={false} />
      </div>
    );
  }

  return (
    <main className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-6 text-center">
      <Mascot mood="think" size={110} float={false} />
      <div>
        <h1 className="text-3xl font-semibold">Grown-ups only</h1>
        <p className="mt-2 text-base text-ink/65">
          Soft gate — nothing secret, just denser numbers. Tap if you’re the adult.
        </p>
      </div>
      <div className="w-full space-y-3">
        <Button
          onClick={() => {
            passGate();
            router.push(next);
          }}
        >
          I’m the grown-up
        </Button>
        <NavChip tone="soft" className="w-full !min-h-14 text-base" onClick={() => router.push("/")}>
          Oops, back to kid view
        </NavChip>
      </div>
    </main>
  );
}
