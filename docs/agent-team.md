# Mindstrong agent team

Grok Bot–style specialist roster for Mindstrong, run as **Cursor Cloud Agents**.
Cloud Agents cannot DM each other the way Grok Bots do; **Chief of Staff** routes
handoffs (resume / reassign / merge PRs).

Repo: https://github.com/riteshj2013-cloud/Mindstrong  
Base branch for new work: `main`  
Branch template: `cursor/<descriptive-name>-9d2a`

## Roster (mirrors Grok Bots)

| Role | Owns | Stays out of |
| --- | --- | --- |
| **Chief of Staff** | Priorities, PR open/merge, conflict resolution, kickoffs | Authoring content in specialist lanes |
| **Business Lead** | Plans, checkout, legal placeholders, INR/pricing copy | Prep chapters, daily packs |
| **Science Writer** | `docs/sof-source/**/science*`, `lib/prep/content/g*-science-*`, science ingest | Daily packs, English/Maths chapters |
| **Maths Writer** | Maths SOF sources, `lib/prep/content/g*-maths-*`, maths pictorial/ingest | Daily packs, English/Science |
| **English Writer** | English SOF sources, `lib/prep/content/g*-english-*`, English hints | Daily packs, Maths/Science |
| **Reasoning Coach** | Daily pack **reasoning** phases (`focus_a` / patterns) across age bands | Prep olympiad packs |
| **Maths Coach** | Daily pack **maths** phases (`focus_b`, hard_try maths) across age bands | Prep olympiad packs |
| **Spelling Coach** | `lib/content/spelling.ts` + spelling phases in daily packs | Prep olympiad packs |
| **UI Tester** | Manual/browser QA, PASS/FAIL lists, repro notes | Content authorship |
| **Frontend Architect** | App Router UI, session player, prep chrome, design tokens | Long-form content files |

Daily coaches may share a single “Daily Coach” Cloud Agent run when shipping one weekday
end-to-end (warm_up → reflect), as long as file ownership stays under `lib/content/`.

## Coordination protocol

1. **One owner per stage.** Chief of Staff assigns the next deliverable; specialists do not
   start overlapping lanes without a handoff.
2. **Self-contained kickoffs.** Every specialist run gets: goal, file allowlist, done criteria,
   branch suffix `-9d2a`, base `main`.
3. **Handoff = PR + report.** Specialist pushes a branch, reports PR URL (or “open PR” if
   tools missing), item counts, and blockers. Chief of Staff opens/merges PRs.
4. **No reinventing bot drafts.** If a Grok Bot already produced artefacts, import those
   before authoring duplicates.
5. **Checks before done.** Prefer `audit-content.mjs`, `check-boilerplate-hints.mjs`, and
   `npm run build` when the lane touches those surfaces.
6. **Billing note.** Cloud Agents use **Cursor** usage (not Grok Bot weekly). Prefer fewer
   parallel runs when spend is tight.

## First-wave backlog (after Tue packs + G5 pictorial landed)

1. English Writer — G3 **Antonyms** authored pack (Synonyms already on `main`)
2. Maths Writer — G3 **Add & Subtract** authored pack
3. Daily Coach — **Wednesday** packs for all five age bands
4. UI Tester — smoke home / prep / Tuesday session on deployed or local build
5. English Writer (next) — G3 Grammar; Maths Writer (next) — G3 Multiply

## Kickoff template (Chief of Staff → specialist)

```text
You are <Role> on Mindstrong.
Goal: <one sentence>
Own only: <paths>
Do not touch: <paths>
Base: main · branch: cursor/<name>-9d2a
Done when: <checks + draft PR>
Report back: PR URL, files, follow-ups for Chief of Staff.
```
