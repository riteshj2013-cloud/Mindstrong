import type { PrepQuestion } from "./types";

/**
 * Runtime safety net for authored items: kid-facing text never contains markdown
 * headings, so anything from the first heading on (e.g. a writer's "## Pictorial notes"
 * or "## Visual spec" block that slipped through ingest) is dropped.
 * The ingest scripts strip these too (scripts/ingest_lib.py) and
 * `node scripts/audit-content.mjs` fails on any leak — this is belt and braces.
 */
export function cleanItemText(s: string | undefined): string {
  if (!s) return s ?? "";
  const cut = ("\n" + s).split(/\n[ \t]*#{1,6}[ \t]/)[0].slice(1);
  return cut.replace(/\s*(-{3,}\s*)+$/, "").trim();
}

export function cleanQuestion(q: PrepQuestion): PrepQuestion {
  return {
    ...q,
    prompt: cleanItemText(q.prompt),
    explanation: q.explanation === undefined ? q.explanation : cleanItemText(q.explanation),
    hints: q.hints?.map(cleanItemText),
    options: q.options.map((o) => ({ ...o, text: cleanItemText(o.text) })),
  };
}
