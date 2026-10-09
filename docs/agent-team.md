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
| **UI Tester** | Browser QA | Content authorship |
| **Frontend Architect** | App UI / session / prep chrome | Long-form content |

## Curriculum target (all grades 1–10)

Each ready grade aims for **≥3 chapters per subject** (Maths / English / Science), olympiad-style lesson + Set A/B (24+24). Expand to Ch4–6 where the grade already has Ch1–3.

| Grade | Status (prep) | Next work |
| --- | --- | --- |
| 1–2 | Not unlocked | Author first 3×3 packs; unlock in `READY_GRADES` |
| 3 | Almost ready | Finish **Multiply**, **Grammar**; optional Ch4+ |
| 4 | Ch1–3 done | Ch4–6 per subject (in flight) |
| 5 | Ch1–3 done | Ch4–6 expansion |
| 6–7 | Not unlocked | Author first 3×3 packs; unlock |
| 8 | Ch1–3 done | Ch4–6 expansion |
| 9–10 | Not unlocked | Author first 3×3 packs; unlock |

## Coordination

1. One owner per file lane; no overlapping chapter ids.
2. Content agents: writer MD + `lib/prep/content/*.ts` + hints; patch only **your** grade’s array in `catalog.ts`.
3. Rebase on `main` before push; Chief of Staff merges PRs.
4. Checks: `audit-content.mjs`, `check-boilerplate-hints.mjs`.
5. ₹ not `$`; no SOF/IMO/IEO/NSO branding in kid-facing copy.
6. Cloud Agents use **Cursor** usage (not Grok Bot weekly).
1. English Writer — G3 **Antonyms** authored pack (Synonyms already on `main`)
2. Maths Writer — G3 **Add & Subtract** authored pack
3. Daily Coach — **Wednesday** packs for all five age bands
4. UI Tester — smoke home / prep / Tuesday session on deployed or local build
5. English Writer (next) — G3 Grammar; Maths Writer (next) — G3 Multiply
6. **Done (G10 Author):** Grade 10 full pack — 3 Maths + 3 English + 3 Science (432 MCQs); `READY_GRADES` includes 10

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
