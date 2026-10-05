"use client";

import { useEffect } from "react";
import { useSettings } from "@/lib/storage";

/** Applies the in-app “reduce motion” setting to <html>. */
export function MotionPref() {
  const settings = useSettings();
  const reduce = !!settings?.reduceMotion;
  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduce);
  }, [reduce]);
  return null;
}
