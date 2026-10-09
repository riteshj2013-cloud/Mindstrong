# Mindstrong agent team

Grok Bot–style specialist roster for Mindstrong, run as **Cursor Cloud Agents**.
Cloud Agents cannot DM each other; **Chief of Staff** routes handoffs.

Repo: https://github.com/riteshj2013-cloud/Mindstrong  
Base: `main` · Branch: `cursor/<descriptive-name>-9d2a`

## Roster

| Role | Owns | Stays out of |
| --- | --- | --- |
| **Chief of Staff** | Priorities, PR open/merge, conflicts | Authoring specialist lanes |
| **Catalog Architect** | `lib/prep/catalog.ts`, `grades.ts`, `types.ts` unlocks | Long-form MCQ authoring |
| **Science Writer** | Science SOF + `g*-science-*` + science hints | Daily packs, Eng/Maths |
| **Maths Writer** | Maths SOF + `g*-maths-*` + maths hints/pictorial | Daily packs, Eng/Science |
| **English Writer** | English SOF + `g*-english-*` + english hints | Daily packs, Maths/Science |
| **Daily Coach** | `lib/content/packs/*` weekdays | Prep olympiad packs |
| **Quality Reviewer** | `docs/quality-report.md`, audits, smoke QA, small defect fixes | Mass content rewrites |
| **UI Tester** | Browser QA | Content authorship |
| **Frontend Architect** | App UI / session / prep chrome | Long-form content |

## Curriculum target (all grades 1–10)

Each ready grade aims for **≥3 chapters per subject** (Maths / English / Science), olympiad-style lesson + Set A/B (G1/G2: 16+16; others 24+24). Expand to Ch4–6 where Ch1–3 already exist.

| Grade | Status (prep) | Notes |
| --- | --- | --- |
| 1–2 | Unlocked | Olympiad-lite 16+16 packs |
| 3–5, 8 | Unlocked | Core + many Ch4–6 expansions |
| 6–7, 9–10 | Unlocked | Full 3×3 first packs |
| Daily | Mon–Sun | All five age bands |

Unlock rule: `gradesWithContent()` — each of maths / english / science has ≥1 authored chapter.

## Coordination

1. One owner per file lane; no overlapping chapter ids.
2. Content agents: writer MD + `lib/prep/content/*.ts` + hints; patch only **your** grade’s array in `catalog.ts`.
3. Rebase on `main` before push; Chief of Staff merges PRs.
4. Checks: `audit-content.mjs`, `check-boilerplate-hints.mjs`.
5. ₹ not `$`; no SOF/IMO/IEO/NSO branding in kid-facing copy.
6. Quality Reviewer runs after big content waves; files `docs/quality-report.md`.
7. Cloud Agents use **Cursor** usage (not Grok Bot weekly).

## Kickoff template

```text
You are <Role> on Mindstrong.
Goal: <one sentence>
Own only: <paths>
Do not touch: <paths>
Base: main · branch: cursor/<name>-9d2a
Done when: <checks + PR>
Report: PR URL, counts, follow-ups.
```
