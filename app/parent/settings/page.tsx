"use client";

import { useState } from "react";
import { GateGuard } from "@/components/parent/GateGuard";
import { Button } from "@/components/ui/Button";
import { Mascot } from "@/components/ui/Mascot";
import {
  DEFAULT_SETTINGS,
  resetProgress,
  saveProfile,
  saveSettings,
  useProfile,
  useSettings,
} from "@/lib/storage";

export default function SettingsPage() {
  return (
    <GateGuard>
      <SettingsInner />
    </GateGuard>
  );
}

function SettingsInner() {
  const profile = useProfile();
  const settings = useSettings();
  const [name, setName] = useState("");
  const [confirmReset, setConfirmReset] = useState(false);
  const [saved, setSaved] = useState(false);

  if (profile === undefined || settings === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Mascot size={72} float={false} />
      </div>
    );
  }

  const s = settings ?? DEFAULT_SETTINGS;
  const currentName = name || profile?.childName || "";

  return (
    <main className="flex flex-1 flex-col gap-5">
      <div>
        <h1 className="text-3xl font-semibold">Settings</h1>
        <p className="text-sm font-semibold text-ink/55">
          Local-only · data stays on this device.
        </p>
      </div>

      <section className="space-y-3 rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
        <label className="block text-sm font-bold text-ink/55" htmlFor="child-name">
          Child’s name
        </label>
        <input
          id="child-name"
          value={currentName}
          onChange={(e) => {
            setName(e.target.value);
            setSaved(false);
          }}
          className="min-h-12 w-full rounded-2xl border-2 border-ink/10 bg-cream px-4 text-lg font-semibold outline-none focus:border-sky"
          placeholder="Name"
        />
        <Button
          onClick={() => {
            saveProfile({
              childName: currentName.trim().slice(0, 24),
              ageBand: "6-8",
              createdAt: profile?.createdAt ?? new Date().toISOString(),
            });
            setSaved(true);
          }}
        >
          {saved ? "Saved ✓" : "Save name"}
        </Button>
      </section>

      <section className="space-y-3 rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold">Comfort</h2>
        <Toggle
          label="Read aloud button"
          checked={s.readAloud}
          onChange={(v) => saveSettings({ ...s, readAloud: v })}
        />
        <Toggle
          label="Reduce motion"
          checked={s.reduceMotion}
          onChange={(v) => saveSettings({ ...s, reduceMotion: v })}
        />
      </section>

      <section className="space-y-3 rounded-[1.75rem] border border-coral/30 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold text-coral">Reset progress</h2>
        <p className="text-sm font-semibold text-ink/60">
          Clears streak, history, and any in-progress session. Profile name stays.
        </p>
        {!confirmReset ? (
          <Button variant="secondary" onClick={() => setConfirmReset(true)}>
            Reset progress…
          </Button>
        ) : (
          <div className="space-y-2">
            <p className="text-sm font-bold">Really clear all progress on this device?</p>
            <Button
              variant="warn"
              onClick={() => {
                resetProgress();
                setConfirmReset(false);
              }}
            >
              Yes, reset
            </Button>
            <Button variant="ghost" onClick={() => setConfirmReset(false)}>
              Cancel
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3">
      <span className="font-semibold">{label}</span>
      <input
        type="checkbox"
        className="h-6 w-6 accent-coral"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
}
