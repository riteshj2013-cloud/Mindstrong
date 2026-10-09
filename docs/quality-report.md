# Mindstrong quality report

**Date:** 2026-10-09  
**Branch:** `cursor/quality-full-audit-9d2a` (base `main`)  
**Reviewer:** Quality Reviewer  
**Verdict:** **PASS WITH NOTES** (historical audit; blockers below were fixed in follow-up PRs #33–#35)

Infrastructure, unlocks, daily packs, audits, typecheck, and build are green. Content volume matches the G1–10 unlock brief.

**Post-audit fixes landed on `main`:** G7/G10 answer keys rebalanced to 6A/6B/6C/6D; G4 `story-spotters` stem leaks cleaned; G6 + extreme G1/G2 skew rebalanced. Re-run Quality Reviewer to republish a clean PASS. Full store/content gate: [`docs/qualification.md`](qualification.md).

---

## Summary

| Check | Result |
| --- | --- |
| `node scripts/audit-content.mjs` | PASS (0 findings) |
| `node scripts/check-boilerplate-hints.mjs` | PASS (0 remaining boilerplate after overlays) |
| `npx tsc --noEmit` | PASS |
| `npm run build` | PASS |
| `gradesWithContent()` | `[1,2,3,4,5,6,7,8,9,10]` |
| Daily packs Mon–Sun × 5 bands | 35/35 `ready:true`, no Monday fallback |
| Empty sets / duplicate question ids | 0 / 0 |
| Lesson hook→wrap (all authored chapters) | PASS |

---

## Metrics

| Metric | Value |
| --- | --- |
| Ready grades | 10 (`1`–`10`) |
| Total authored chapters | 114 |
| Total MCQs (unique ids) | 5184 |
| Chapters per subject (G1–10) | Maths 39 · English 36 · Science 39 |
| Set sizes | G1/G2: 16+16 · G3–10: 24+24 (all match) |
| Daily ready packs | 35 (7 days × 5 age bands) |
| Audit findings | 0 |
| Boilerplate hints remaining | 0 (5184 overlays cover 5184 items) |
| Answer-skew sets (>50% one letter) | 113 sets |
| Extreme skew sets (≥75% one letter) | 77 sets |
| Exact duplicate prompts (cross-set/grade, same subject) | 63 pairs (mostly generic stems) |
| Within-set exact duplicate prompts | 1 (`g4-maths-fractions` set-b q11/q17 — different options) |

### Chapter / MCQ inventory

| Grade | Maths ch / MCQ | English ch / MCQ | Science ch / MCQ |
| --- | ---: | ---: | ---: |
| 1 | 3 / 96 | 3 / 96 | 3 / 96 |
| 2 | 3 / 96 | 3 / 96 | 3 / 96 |
| 3 | 3 / 144 | 3 / 144 | 3 / 144 |
| 4 | 6 / 288 | 5 / 240 | 6 / 288 |
| 5 | 6 / 288 | 5 / 240 | 6 / 288 |
| 6 | 3 / 144 | 3 / 144 | 3 / 144 |
| 7 | 3 / 144 | 3 / 144 | 3 / 144 |
| 8 | 6 / 288 | 5 / 240 | 6 / 288 |
| 9 | 3 / 144 | 3 / 144 | 3 / 144 |
| 10 | 3 / 144 | 3 / 144 | 3 / 144 |

### Answer key % choosing **A** by grade (all subjects)

| Grade | % A | Notes |
| --- | ---: | --- |
| 1 | 35% | OK overall; several sets heavily B-skewed |
| 2 | 59% | Elevated; science sets often 80–100% A |
| 3 | 26% | OK |
| 4 | 23% | OK |
| 5 | 25% | OK |
| 6 | 39% | English vocab/comprehension heavily B |
| 7 | 25% | **Rebalanced** on `cursor/g7-answer-key-rebalance-9d2a` — each set 6A/6B/6C/6D (was 100% A) |
| 8 | 29% | OK grade-level; some science sets ≥79% B |
| 9 | 26% | OK grade-level; some English sets ≥75% B |
| **10** | **~100%** | **430/432 answers are A** |

---

## Spot-check (≥12 chapters)

Checked served questions (prompt, options, hints, ₹/$, branding, lesson types):

| Chapter | Grade | Age language | ₹/$ | Branding | Hints | Lesson |
| --- | --- | --- | --- | --- | --- | --- |
| maths `numbers` | 1 | Age-ok short stems | n/a | none | item-specific | hook→…→wrap |
| english `letters-words` | 1 | Age-ok | n/a | none | item-specific | hook→…→wrap |
| science `plants` | 1 | Age-ok | n/a | none | item-specific | hook→…→wrap |
| maths `time-money` | 2 | Age-ok | ₹ used | none | item-specific | hook→…→wrap |
| science `plants-parts` | 3 | Age-ok | n/a | none | item-specific | hook→…→wrap |
| english `detective-eyes` | 5 | Passage-appropriate | n/a | none | item-specific | hook→…→wrap |
| maths `decimals-percentages` | 5 | OK | ₹ in pack | none | item-specific | hook→…→wrap |
| science `force-machines` | 5 | OK | n/a | none | item-specific | hook→…→wrap |
| maths `integers` | 6 | OK | ₹ in pack | none | item-specific | hook→…→wrap |
| english `between-the-lines` | 8 | OK | n/a | none | item-specific | hook→…→wrap |
| maths `algebraic-expressions` | 8 | OK | n/a | none | item-specific | hook→…→wrap |
| science `combustion-flame` | 8 | OK | n/a | none | item-specific | hook→…→wrap |
| maths `real-numbers` | 10 | OK | n/a | none | item-specific | hook→…→wrap |
| english `literature` | 10 | OK | n/a | none | item-specific | hook→…→wrap |
| science `light` | 10 | OK | n/a | none | item-specific | hook→…→wrap |

Notes from spot-check:

- Kid-facing copy uses ₹ where money appears; no `$` / USD amounts in served packs (audit clean).
- No SOF/IMO/IEO/NSO in kid-facing strings (file header comments still say “authored SOF content” — not user-visible).
- `**bold**` in prompts is intentional (`RichText` renders inline markdown).

---

## Findings

### Blocker

1. **Grade 7 answer key is 100% A** — **FIXED** (`cursor/g7-answer-key-rebalance-9d2a`)  
   - **Was:** maths/english/science each `A=144 B=0 C=0 D=0` (432/432).  
   - **Now:** every set exactly `6A/6B/6C/6D`; correct option *text* preserved; `scripts/seed_g7_full.py` applies `balance_set()` so future regen stays balanced.  
   - Verify: `node scripts/count-g7-answer-keys.mjs`

2. **Grade 10 answer key is ~100% A**  
   - **Area:** Prep MCQs · all subjects  
   - **Evidence:** maths `A=142/144`; english & science `A=144/144`.  
   - **Owner:** Maths / English / Science Writer (same as above; likely generator always put correct option first)

### Major

3. **Severe answer skew in G1/G2 science and arithmetic sets**  
   - **Evidence:** e.g. `maths-g1.add.set-b` 100% B; `science-g2.air-water` sets 100% A; `science-g2.plants.set-b` 100% A; many ≥75% sets (77 total).  
   - **Owner:** Maths Writer, Science Writer

4. **G6 English answer skew**  
   - **Evidence:** comprehension set-a 88% B; vocabulary set-b 92% B.  
   - **Owner:** English Writer

5. **G6 science `sorting-materials` 100% A (both sets)**  
   - **Evidence:** 24/24 A on set-a and set-b.  
   - **Owner:** Science Writer

6. **Screen-reader / pictorial scaffolding leaked into G4 English prompts**  
   - **Area:** `lib/prep/content/g4-english-reading.ts` (`story-spotters`)  
   - **Evidence:** 8 items (e.g. `g4-eng-ch01-a-q20`…`q23`, set-b q18–q21) use prompts that are scene + `Text-only version for screen readers: …` with **no actual question stem**.  
   - **Owner:** English Writer (move longdesc to `figure`; write real prompts)

7. **Generic / repeated stems across grades**  
   - **Evidence:** 63 cross-set duplicate prompts (e.g. “Pick the correct sentence.”, “Which statement is true?”) — weak item quality even when options differ.  
   - **Owner:** English / Maths / Science Writers (prefer distinctive stems)

### Minor

8. **Mangled pictorial prompt prefix (fixed in this PR)**  
   - **Was:** `Look at Read the angle` / `Look at Read the Scale` (figure title concatenated after “Look at ”).  
   - **Files:** `g5-maths-angles.ts`, `g5-maths-large-numbers.ts`  
   - **Owner:** Maths Writer for any future ingest; Quality added audit rule

9. **G4 fractions set-b shares identical stem for q11 and q17**  
   - **Evidence:** same prompt, different option lists/answers — acceptable but noisy for dup detection.  
   - **Owner:** Maths Writer (optional distinctive wording)

10. **Source file comments still say “authored SOF content”**  
    - Not kid-facing; low risk. Optional cleanup.  
    - **Owner:** Catalog / writers (cosmetic)

---

## Fixes shipped in this PR

1. Corrected three mangled G5 maths prompts (`Look at Read …` → `Look at the angle/scale`).
2. Added non-breaking audit rule `look-at-read` in `scripts/audit-content.mjs` to catch that ingest glitch class.
3. Created this report at `docs/quality-report.md`.

---

## Follow-ups for Chief of Staff

1. **Priority 1 — rebalance G10 answer keys** (G7 fixed on `cursor/g7-answer-key-rebalance-9d2a`). G10 seed likely still always places the correct option in slot `a`.
2. **Priority 2 — rebalance G1/G2 science + G6 sorting-materials / G6 English** extreme skew.
3. **Priority 3 — English Writer:** repair G4 `story-spotters` pictorial items with real question stems (SR text out of `prompt`).
4. Keep running `audit-content` + `check-boilerplate-hints` on every content PR; new `look-at-read` rule will catch the pictorial-title concat bug.
5. Optional: add an inventory script (answer-skew + dup-stem) to CI as warn-only; not added here to avoid noisy fails until writers rebalance.
6. Daily Coach lane is complete for Mon–Sun × 5 bands — no scaffold leftovers found.

---

## Method

- Programmatic walk via `gradesWithContent()` + `getPrepPack(subject, grade)` for all grades × subjects.
- Set counts, id uniqueness, stem hashing, answer-letter histograms.
- Daily: `todayPackInfo` for Mon–Sun dates × ages 6/8/10/12/14 → 35/35 native ready.
- Spot-check served questions through `getChapterSetQuestions` (pictorial + hint overlays).
