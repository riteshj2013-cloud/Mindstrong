# Mindstrong quality report

**Date:** 2026-10-09  
**Branch:** `cursor/quality-reaudit-pass-9d2a` (base `main`)  
**Reviewer:** Quality Reviewer  
**Verdict:** **PASS WITH NOTES**

All prior **blockers are cleared** on `main` (G7/G10 answer rebalance, G4 story-spotter stems, G6 sorting-materials + extreme G1/G2/G6 skew fixes). **G8/G9 answer-letter skew** (≥60% one letter) cleared on `cursor/g8-g9-answer-skew-rebalance-9d2a`. Infrastructure, unlocks, daily packs, audits, typecheck, and build are green. Remaining notes are residual non-G8/G9 skew and generic cross-grade stems — not ship-blockers. Full store/content gate: [`docs/qualification.md`](qualification.md).

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
| Lesson hook→wrap (all authored chapters) | PASS (114/114) |
| G7 answer keys | **PASS** — every set exactly `6A/6B/6C/6D` (25% each) |
| G10 answer keys | **PASS** — every set exactly `6A/6B/6C/6D` (25% each) |

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
| Answer-skew sets (>50% one letter) | 57 at re-audit; **G8/G9 ≥60% cleared** (19 sets rebalanced) |
| Extreme skew sets (≥75% one letter) | 23 at re-audit (mostly G8/G9); **G8/G9 now 0 ≥75%** |
| Exact duplicate prompts (cross-set/grade, same subject) | 96 pairs (mostly generic stems) |
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
| 1 | 25.7% | OK grade-level; a few sets still ≥75% B/A |
| 2 | 38.9% | Elevated vs ideal ~25%; improved from prior ~59% |
| 3 | 25.7% | OK |
| 4 | 23.3% | OK |
| 5 | 24.6% | OK |
| 6 | 33.8% | OK grade-level; `sorting-materials` now 6/6/6/6; grammar still B-leaning |
| **7** | **25.0%** | **Balanced** — 108/108/108/108 across 432 items; every set 6A/6B/6C/6D |
| 8 | ~28.6% | **Rebalanced** skewed sets → 0 ≥60%; grade ~29/28/23/21 A/B/C/D |
| 9 | ~29.4% | **Rebalanced** (was ~60% B) → 0 ≥60%; grade ~29/35/21/15 A/B/C/D |
| **10** | **25.0%** | **Balanced** — 108/108/108/108 across 432 items; every set 6A/6B/6C/6D (was ~100% A) |

### Extreme skew sets (≥75% one letter)

**G8/G9 rows from the re-audit table below are cleared** (option-shuffle → `6A/6B/6C/6D`). Residual ≥75% (non-G8/G9) still open for other writers:

| Set | Dominant | Share | Status |
| --- | --- | ---: | --- |
| `english-g2.reading.set-b` | A | 14/16 (88%) | open |
| `science-g6.fibre-fabric.set-b` | A | 20/24 (83%) | open |
| `maths-g2.place-value.set-b` | A | 13/16 (81%) | open |
| `science-g1.plants.set-b` | A | 13/16 (81%) | open |
| `maths-g1.numbers.set-b` | B | 12/16 (75%) | open |
| `maths-g2.time-money.set-a` | B | 12/16 (75%) | open |
| `english-g1.letters-words.set-b` | B | 12/16 (75%) | open |
| `english-g1.reading-pics.set-a` | B | 12/16 (75%) | open |
| `science-g6.food-nutrition.set-b` | A | 18/24 (75%) | open |
| *(14 G8/G9 sets that were ≥75%)* | — | — | **fixed** |

---

## Spot-check (≥8 chapters)

Checked served questions (prompt, options, hints, ₹/$, branding, lesson types):

| Chapter | Grade | Age language | ₹/$ | Branding | Hints | Lesson | Answer hist |
| --- | --- | --- | --- | --- | --- | --- | --- |
| english `story-spotters` | 4 | Real stems (no SR leak) | n/a | none | item-specific | hook→…→wrap | 12/12/12/12 |
| science `sorting-materials` | 6 | OK | n/a | none | item-specific | hook→…→wrap | **12/12/12/12** (was 100% A) |
| maths `integers` | 7 | OK | ₹ in pack | none | item-specific | hook→…→wrap | 12/12/12/12 |
| science `chem-reactions` | 10 | OK | n/a | none | item-specific | hook→…→wrap | 12/12/12/12 |
| maths `numbers` | 1 | Age-ok short stems | n/a | none | item-specific | hook→…→wrap | B-heavy set-b |
| maths `integers` | 6 | OK | ₹ in pack | none | item-specific | hook→…→wrap | A/B heavy |
| english `comprehension` | 6 | Passage-appropriate | ₹ in pack | none | item-specific | hook→…→wrap | 12/12/12/12 |
| science `combustion-flame` | 8 | OK | n/a | none | item-specific | hook→…→wrap | set-b now 6/6/6/6 |
| maths `real-numbers` | 10 | OK | n/a | none | item-specific | hook→…→wrap | 12/12/12/12 |
| english `literature` | 10 | OK | n/a | none | item-specific | hook→…→wrap | 12/12/12/12 |

Notes from spot-check:

- Kid-facing copy uses ₹ where money appears; no `$` / USD amounts in served packs (audit clean).
- No SOF/IMO/IEO/NSO in kid-facing strings.
- G4 `story-spotters` pictorial items now have real question stems; SR text stays in `figure.longdesc` only (0 served-prompt leaks).
- `**bold**` in prompts is intentional (`RichText` renders inline markdown).

---

## Findings

### Blocker

*None.* Prior blockers verified fixed on this `main`:

1. ~~Grade 7 answer key 100% A~~ → every set `6A/6B/6C/6D`.
2. ~~Grade 10 answer key ~100% A~~ → every set `6A/6B/6C/6D`.
3. ~~G4 `story-spotters` SR text in prompts~~ → real stems; longdesc only on figure.
4. ~~G6 `sorting-materials` 100% A~~ → both sets `6A/6B/6C/6D`.
5. ~~Named extreme G1/G2 / G6 English vocab-comprehension 100% patterns~~ → largely cleared; residual listed under Major.

### Major

1. **Residual extreme answer skew (23 sets ≥75% one letter)** — **G8/G9 portion FIXED** (`cursor/g8-g9-answer-skew-rebalance-9d2a`)  
   - **Was:** G8 science (sound, chemical-effects, combustion) + G9 English/science heavily B-skewed; G9 ~60% B grade-wide.  
   - **Now:** every G8/G9 set that was ≥60% one letter rebalanced to `6A/6B/6C/6D` (19 sets); G8/G9 have **0 sets ≥60%** one letter. Correct option *text* preserved. Generators (`ingest_lib.balance_set`, `g9_pack/emit.balance_set`) keep regen balanced.  
   - Remaining ≥75% sets (if any) are outside G8/G9 (G1/G2/G6 fibre/food etc.) — separate owner.

2. ~~**G9 grade-wide B bias (~60% B)**~~ → **FIXED** with the rebalance above (G9 now ~29/35/21/15 A/B/C/D).

3. **Generic / repeated stems across grades**  
   - **Evidence:** 96 cross-set duplicate prompts (e.g. “Which is correct?”, shared pictorial stems).  
   - **Owner:** Writers (prefer distinctive stems when options alone carry the item).

### Minor

4. **G4 fractions set-b shares identical stem for q11 and q17**  
   - Same prompt, different option lists/answers — noisy for dup detection only.  
   - **Owner:** Maths Writer (optional).

5. **Source file comments still say “authored SOF content”**  
   - Not kid-facing; low risk.  
   - **Owner:** Catalog / writers (cosmetic).

### Follow-ups addressed

- **G8/G9 answer-letter skew (≥60% one letter):** 19 sets option-shuffled to `6A/6B/6C/6D` (±0); G8 grade ~29/28/23/21%, G9 ~29/35/21/15%; **0 sets ≥75%**. Script: `scripts/rebalance_g8_g9_answer_skew.py`. G7/G10 left untouched.

---

## Fixes shipped in this PR

1. Rewrote `docs/quality-report.md` with fresh re-audit metrics and **PASS WITH NOTES** (blockers cleared).
2. Strengthened `scripts/audit-content.mjs`: skip intentional `figure.longdesc`, and add `sr-longdesc-in-prompt` so “Text-only version for screen readers” cannot leak into quiz prompts again.

---

## Follow-ups for Chief of Staff

1. ~~**Priority 1 — rebalance residual ≥75% sets** (G8 science + G9 English/science)~~ → done on `cursor/g8-g9-answer-skew-rebalance-9d2a`.
2. ~~**Priority 2 — G9 letter mix**~~ → done with same rebalance.
3. Optional: rebalance remaining non-G8/G9 ≥75% sets (G1/G2/G6 fibre/food) if still present after merge.
4. Optional: warn-only inventory script (answer-skew + dup-stem) in CI; not failing yet.
5. Daily Coach lane remains complete for Mon–Sun × 5 bands — no scaffold leftovers.
6. Keep running `audit-content` + `check-boilerplate-hints` on every content PR; new `sr-longdesc-in-prompt` rule guards the G4 pictorial leak class.

---

## Method

- Programmatic walk via `gradesWithContent()` + `getPrepPack(subject, grade)` for all grades × subjects.
- Set counts, id uniqueness, stem hashing, answer-letter histograms.
- G7/G10: per-set exact `6/6/6/6` verification (and `scripts/count-g7-answer-keys.mjs`).
- Daily: `todayPackInfo` for Mon–Sun dates × ages 6/8/10/12/14 → 35/35 native ready (`isFallback: false`).
- Spot-check served questions through `getChapterSetQuestions` (pictorial + hint overlays).
- Lessons: every chapter `lesson[0].type === "hook"` and includes a `wrap` step.
