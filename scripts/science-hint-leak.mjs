/**
 * science-hint-leak.mjs — answer-leak matching shared by scripts/check-science-hints.mjs and its tests.
 *
 * A hint "leaks" when it contains the correct answer, or one of its alternatives, after both sides are
 * normalised:
 *   - NFKC (so CO₂ → co2, H₂O → h2o), lower case, dashes/arrows/punctuation → spaces;
 *   - picture-label prefixes stripped ("A — ", "B - ", "A)", "(A)", "Row C — ", "Card B: ", "Panel 2 — ");
 *   - leading articles and small function words (a, an, the, and, of, on, in, …) dropped;
 *   - simple plural/singular folding (seeds → seed, leaves → leaf, berries → berry, boxes → box);
 *   - bracketed or parenthetical parts removed from the main answer, and checked on their own;
 *   - the answer split on "/" and " or " so that each alternative is checked.
 * Matching is on whole normalised tokens, as a contiguous run, so "root" does not match "rooted"... but
 * "roots" does (plural folding).
 *
 * leakFindings(hint, answer) returns a list of { level: "error" | "warn", rule, part }:
 *   error  answer-alternative   the hint contains the whole answer or one "/" / "or" alternative;
 *   error  paren-part           the hint contains a parenthetical part with 2+ content words
 *                               (3+ letters, not numbers);
 *   warn   paren-word           the hint contains a shorter parenthetical part (often a figure label);
 * "/" and " or " alternatives are split only when every piece has at most 3 content words.
 *   warn   head-term            multi-word answer: the hint contains its distinctive head term
 *                               (longest content word of 5+ letters).
 */

const STOP = new Set(("a an the and of on in at to with by for from is are its it as into onto " +
  "be very only always mainly mostly usually just").split(" "));
const LABEL_PREFIX = /^\s*(?:(?:row|card|column|plate|panel|picture|group|option|box|jar|label|katori|tile|step|bowl|cup)\s+)?(?:\(\s*[A-Da-d0-9]{1,2}\s*\)|[A-Da-d0-9]{1,2}\s*(?:[—–:.)]|-(?=\s)))\s*/i;

// Figure-label nouns and family words are not distinctive: "Picture Q", "Label B", "Vitamin D".
const HEAD_SKIP = new Set("picture label panel column plate group option vitamin".split(" "));

/** Fold a token to a simple singular form. */
export function fold(t) {
  if (t.length <= 3 || /\d/.test(t)) return t;
  if (/ies$/.test(t)) return t.slice(0, -3) + "y";
  if (/ves$/.test(t) && t.length > 4) return t.slice(0, -3) + "f";
  if (/(?:ches|shes|sses|xes|zes)$/.test(t)) return t.slice(0, -2);
  if (/oes$/.test(t)) return t.slice(0, -2);
  if (/[^su]s$/.test(t)) return t.slice(0, -1);
  return t;
}

/** Lower-case, NFKC, punctuation → space; returns raw word tokens (no stop-word removal). */
export function words(s) {
  return String(s ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[^\p{L}\p{N}']+/gu, " ")
    .replace(/(^|\s)'+|'+(\s|$)/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}
/** Content tokens: words minus stop words, folded to singular. */
export function tokens(s) {
  const w = words(s);
  // A final one-letter word is a name, not an article: "Vitamin A", "Card B", "1 K".
  return w.filter((x, i) => !STOP.has(x) || (x.length === 1 && i === w.length - 1 && i > 0)).map(fold);
}

export function stripLabel(answer) {
  let a = String(answer ?? "").trim();
  for (let i = 0; i < 2; i++) a = a.replace(LABEL_PREFIX, "");
  return a.trim();
}

/** Split an answer into { main: [alternatives as token lists], paren: [token lists] }. */
export function answerParts(answer) {
  const a = stripLabel(answer);
  const paren = [...a.matchAll(/[([{]([^)\]}]*)[)\]}]/g)].map((m) => m[1]);
  const main = a.replace(/[([{][^)\]}]*[)\]}]/g, " ").trim();
  const splitAlt = (s) =>
    s
      .split(/\s+or\s+|\s+\/\s+|(?<=\p{L}{2})\/(?=\p{L}{2})/u)
      .map((x) => x.trim())
      .filter(Boolean);
  // Split into alternatives only when every piece is short (<= 3 content words), so that
  // "nose / mouth" and "Filtration/straining" split but "... compared with petrol or diesel" does not.
  const alts = (s) => {
    const pieces = splitAlt(s);
    return pieces.length > 1 && pieces.every((x) => tokens(x).length <= 3) ? pieces : [];
  };
  const mainAlts = [main, ...alts(main)].map(tokens).filter((t) => t.length);
  const parenAlts = paren.flatMap((p) => [p, ...alts(p)]).map(tokens).filter((t) => t.length);
  return { main: mainAlts, paren: parenAlts };
}

function containsRun(hay, needle) {
  if (!needle.length || needle.length > hay.length) return false;
  outer: for (let i = 0; i + needle.length <= hay.length; i++) {
    for (let j = 0; j < needle.length; j++) if (hay[i + j] !== needle[j]) continue outer;
    return true;
  }
  return false;
}
const meaningful = (toks) => toks.length > 1 || (toks[0] ?? "").length >= 2 || /^\d$/.test(toks[0] ?? "");

export function headTerm(answer) {
  const { main } = answerParts(answer);
  const full = main[0] ?? [];
  if (full.length < 2) return null;
  const cands = full.filter((t) => t.length >= 5 && !/\d/.test(t) && !HEAD_SKIP.has(t));
  if (!cands.length) return null;
  return cands.reduce((a, b) => (b.length > a.length ? b : a));
}

export function leakFindings(hint, answer) {
  const h = tokens(hint);
  const out = [];
  const { main, paren } = answerParts(answer);
  for (const alt of main) {
    if (meaningful(alt) && containsRun(h, alt)) { out.push({ level: "error", rule: "answer-alternative", part: alt.join(" ") }); break; }
  }
  for (const p of paren) {
    if (!meaningful(p) || !containsRun(h, p)) continue;
    // "(mango, guava, papaya)" is answer content; "(part 1)" or "(D)" is a figure label.
    const strong = p.filter((t) => t.length >= 3 && !/\d/.test(t)).length >= 2;
    out.push({ level: strong ? "error" : "warn", rule: strong ? "paren-part" : "paren-word", part: p.join(" ") });
  }
  if (!out.some((f) => f.level === "error")) {
    const head = headTerm(answer);
    if (head && h.includes(head)) out.push({ level: "warn", rule: "head-term", part: head });
  }
  return out;
}
