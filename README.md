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

Other weekdays resolve to a scaffold and fall back to Monday so the demo always works.

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
