"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import { gateIsOpen, passGate } from "@/lib/storage";

/**
 * Soft adult gate — not real auth. Keeps curious kids out of denser UI.
 * Gate token lives in sessionStorage for ~30 minutes.
 */
export default function ParentGatePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (gateIsOpen()) {
      router.replace("/parent/progress");
      return;
    }
    setReady(true);
  }, [router]);

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
            router.push("/parent/progress");
          }}
        >
          I’m the grown-up
        </Button>
        <Button variant="ghost" onClick={() => router.push("/")}>
          Oops, back to kid view
        </Button>
      </div>
    </main>
  );
}
