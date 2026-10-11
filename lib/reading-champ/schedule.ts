/** Parent reminder window. Calm, at most one a day, silent during quiet hours. */

export function parseMinutes(hhmm: string): number | null {
  const match = /^(\d{2}):(\d{2})$/.exec(hhmm);
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) return null;
  return hours * 60 + minutes;
}

/** Quiet ranges may wrap past midnight (20:00–07:00). */
export function inQuietHours(nowMinutes: number, quietStart: string, quietEnd: string): boolean {
  const start = parseMinutes(quietStart);
  const end = parseMinutes(quietEnd);
  if (start == null || end == null) return false;
  if (start === end) return false;
  if (start < end) return nowMinutes >= start && nowMinutes < end;
  return nowMinutes >= start || nowMinutes < end;
}

export function reminderDue(input: {
  enabled: boolean;
  time: string;
  quietStart: string;
  quietEnd: string;
  lastSentDay: string | null;
  nowMinutes: number;
  today: string;
}): boolean {
  if (!input.enabled) return false;
  if (input.lastSentDay === input.today) return false;
  const at = parseMinutes(input.time);
  if (at == null) return false;
  if (input.nowMinutes < at) return false;
  if (inQuietHours(input.nowMinutes, input.quietStart, input.quietEnd)) return false;
  return true;
}

export const REMINDER_COPY = "A story is ready when you have a quiet moment together.";
