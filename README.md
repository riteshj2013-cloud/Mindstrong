# Mindstrong

**Think hard. Stay brave.**

A calm, daily 15–20 minute capability session for ages **6–15**.
Muscles: **Reasoning · Maths · Confidence** (no Spelling in v1).

Local-first MVP — everything lives in the browser (`localStorage`). No backend required.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start   # production
```

## What’s playable

**Age bands** map to Monday packs:

| Ages | Pack id | Focus |
|------|---------|-------|
| 6–7 | `mon-6-7-v1` | Simple patterns, tens/ones intro |
| 8–9 | `mon-8-9-v1` | Baseline patterns & tens |
| 10–11 | `mon-10-11-v1` | Multi-step patterns, multi-digit |
| 12–13 | `mon-12-13-v1` | Strategy, fractions/percents |
| 14–15 | `mon-14-15-v1` | Abstract reasoning, algebra-lite |

**Monday pack (example `mon-8-9-v1`) end-to-end:**

1. **Warm-up** — `2, 4, 6, __, 10` + “Try before hint!” ritual  
2. **Reasoning** — 5 pattern items (colors, shapes, stars, AAB, size+color)  
3. **Maths** — tens & ones (model 23; build 14/30; 2t+7o; bundle 25; compare piles)  
4. **Hard try** — `47 → 57 → 67 → __` (+10). Hints locked until **I tried**  
5. **Reflect** — what felt hard / what you tried  

Only Monday packs are written so far. On Tuesday–Sunday the app serves **fresh, unseen
Monday-pack items** (via the no-repeat history in `lib/completed.ts`) and says so honestly:
“Fresh picks from the Monday pack · More daily packs coming soon” (`todayPackInfo()` in
`lib/content/index.ts`).

## Routes

| Path | Mode | Purpose |
|------|------|---------|
| `/` | Child | Home — greeting, streak, journey map, start/resume |
| `/session` | Child | Session player (state machine) |
| `/done` | Child | Celebration + badges |
| `/parent/gate` | Parent | Soft “I’m the grown-up” gate |
| `/parent/progress` | Parent | Streak · brave tries this week (target 4) · sessions |
| `/parent/settings` | Parent | Child name, age 6–15, read-aloud, reduce motion, reset |

## Session state machine

```
idle → warm_up → focus_a → focus_b → hard_try → reflect → complete
```

Same-calendar-day resume from `mindstrong.v1.session.active`.  
Try-before-hint: hints stay locked until a first attempt; hard try requires an explicit **I tried**.

## Storage keys

- `mindstrong.v1.profile`
- `mindstrong.v1.progress`
- `mindstrong.v1.session.active`
- `mindstrong.v1.settings`
- Soft gate: `sessionStorage` key `mindstrong.v1.parentGate`

Parent metrics lead with **streak**, **hard attempts this week**, and **sessions completed** — not % correct.

## Stack

Next.js App Router · TypeScript · Tailwind CSS v4 · Nunito + Fredoka fonts  
Mascot “Bo” is inline SVG. Confetti / bounce / wiggle respect `prefers-reduced-motion` and an in-app toggle.

## Brand

Mindstrong (was Capable). Tagline: *Think hard. Stay brave.*


## Look

Kid-first UI: sunny cream background, coral CTAs, Fredoka + Nunito, Bo the brave-brain mascot, journey-map progress, bounce/wiggle/confetti (respects reduced motion).

Screenshots (mobile 430×900):

| | |
|---|---|
| Onboarding | `docs/screenshots/home.png` |
| Home | `docs/screenshots/home-ready.png` |
| Session warm-up | `docs/screenshots/tiny-win.png` |

## Olympiad prep grade unlock

A prep grade unlocks when **each** of maths, english, and science has ≥1 **authored**
chapter (sets with real `questions[]`). Scaffold-only `ch()` entries and empty catalog
slots (`[]` for G1/G2/G6/G7/G9/G10 until writers land content) stay “coming soon”.
See `gradesWithContent()` in `lib/prep/grades.ts`.

## Pictorial MCQs (SOF-style figures)

Quiz items support optional stem/option `figure` specs. Writer `**Diagram (SVG):**` blocks are
ingest-sanitized and rendered as **original in-app SVG** (no copyrighted SOF scans).

**Live pictorial (≈9 of 24 MCQs per set = 18 of 48 per chapter, unless noted):**
- **G3 Science** Ch1 Plant Parts · Ch2 Animals Food & Homes · Ch3 Sense Organs (inline SVG)
- **G3 English** Ch1 Synonyms · Ch2 Antonyms · Ch3 Grammar Basics (authored Set A/B)
- **G3 Maths** Ch1 Numbers (pictorial addendum) · Ch2 Add & Subtract (authored; pictorial later) · Ch3 Multiply Basics (authored; pictorial later)
- **G4 Maths** Ch1 Large Numbers · Ch2 Mul/Div · Ch3 Fractions (pictorial addenda) · Ch4 Measurement · Ch5 Geometry · Ch6 Data Handling
- **G4 Science** Ch1 Food · Ch2 Matter · Ch3 Water (inline SVG) · Ch4 Plants · Ch5 Animals · Ch6 Our Body
- **G4 English** Ch1 Reading (18) · Ch2 Grammar (16) · Ch3 Words (18) — external `visual:` SVGs inlined at ingest, with `visual_alt` / `visual_longdesc`
- **G5 Science** Ch1 Plants/Seeds · Ch2 Human Body · Ch3 Sun/Moon/Space (inline SVG)
- **G5 Maths** Ch1 Large Numbers · Ch2 Shapes & Angles · Ch3 Fractions (pictorial addenda)
- **G7 Maths** Ch1 Integers · Ch2 Simple Equations · Ch3 Lines & Angles (lesson + 24+24 each)
- **G7 English** Ch1 Reading · Ch2 Grammar · Ch3 Words/Vocab (lesson + 24+24 each)
- **G7 Science** Ch1 Nutrition in Plants/Animals · Ch2 Heat · Ch3 Acids, Bases & Salts (lesson + 24+24 each)

Writers: `docs/sof-source/FIGURE-SPEC.md`.

**Editorial sections never ship.** Writer/editor-only sections (`## Meta`, `## Pictorial notes`,
`## Visual spec`, `## Figure Library`, `## Engineering notes`, QA/reviewer notes…) are stripped by
`strip_editorial_sections()` in `scripts/ingest_lib.py` before parsing; every emitted item string is
cut at the first markdown heading and `assert_no_leak()` fails the ingest on leaks (SOF/IMO/NSO/IEO
branding, “not copied”, marker ids, TODO). `lib/prep/cleanText.ts` is a runtime safety net.
Run `node scripts/audit-content.mjs` before deploying — it walks every kid-facing string (prep
items, lessons, daily packs, plans) and exits non-zero on editorial leaks, exam branding or `$`
amounts (use ₹).
Ingest: `scripts/ingest_g3_science_pictorial.py`, `scripts/ingest_g3_maths_pictorial.py`,
`scripts/ingest_g4_maths_pictorial.py`, `scripts/ingest_g4_science.py`, `scripts/ingest_g4_english.py`, `scripts/ingest_g5_pictorial.py`.


## Deploying to GitHub Pages

```bash
npm run build                       # static export to ./out (basePath /Mindstrong)
scripts/deploy-gh-pages.sh "message" # fast-forward commit onto gh-pages, no force-push
```

Live: https://riteshj2013-cloud.github.io/Mindstrong/

**Cache note:** GitHub Pages serves HTML with `Cache-Control: max-age=600`, so a browser
can briefly hold an old `index.html` that points at previous `/_next/static/*` chunk
hashes. The deploy script therefore keeps old hashed chunks under `_next/static`
(they are content-hashed and never collide), so stale HTML still loads instead of
blanking. If a page ever looks blank right after a deploy, a hard reload fixes it.
