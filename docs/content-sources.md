# Content sources

**`lib/prep/content/` is the source of truth.** Edit the served files directly: content in `lib/prep/content/*.ts`, hints in the fix layer `lib/prep/hints/fixes/*.ts`, pictures in `lib/prep/pictorial/*`. Don't regenerate them from the writer markdown or the old pack scripts.

Checked on 2026-10-19 by running every generator on a clean copy of main (c1b078a) and diffing the result against the served files. A generator is **live** if its output matches byte for byte, or it changes nothing. Otherwise it is **retired**: it would overwrite later fixes such as hint fix-layer edits, near-duplicate rewrites, stem fixes and redrawn pictures.

Each retired script starts with a guard that exits with `DEPRECATED: …` unless `--force` is passed, or `MINDSTRONG_FORCE_RETIRED=1` is set (a forced entry point sets this for the data modules it imports). `scripts/audit-content.mjs` fails if any script that writes content is missing from `scripts/content-generators.json`, if a retired script's guard is not the first code it runs, or if running a retired script without `--force` doesn't refuse. The audit runs each retired script once to check this.

## Live (safe to run)

| Script | What it does |
|---|---|
| `ingest_g4_maths_time_money.py` | G4 Maths M5 Time & Money (#61) |
| `author_g5_maths_ch04_06.py` | G5 Maths ch04-06 |
| `author_g8_science_ch04_06.py` | G8 Science ch04-06 |
| `fix_quality_major_skew.py` | answer-letter skew fixer (no-op on current files) |
| `rebalance_g8_g9_answer_skew.py` | G8/G9 answer-letter rebalancer (no-op on current files) |
| `rebalance_ts_sets.py` | answer-letter rebalancer for .ts sets (no-op on current files) |
| `patch-english-passages.mjs` | G5 English passage patcher (no-op on current files; hard-codes /workspace/Mindstrong paths) |

## Retired (exit unless `--force`)

| Script | Why it is retired |
|---|---|
| `seed_g7_full.py` | G7 pack: rewrites G7 English and Maths content and hints (undoes the #58 integer stems and the #62 near-duplicate rewrites) |
| `generate_g10_pack.py` | G10 pack: rewrites G10 English, Maths and Science content and hints |
| `g10/english.py` | G10 English data for generate_g10_pack.py (old near-duplicate stems) |
| `g10/maths.py` | G10 Maths data for generate_g10_pack.py |
| `g10/science.py` | G10 Science data for generate_g10_pack.py |
| `g9_pack/generate.py` | G9 pack: rewrites G9 English, Maths and Science content and hints |
| `g9_pack/english_data.py` | G9 English data for g9_pack/generate.py (old near-duplicate stems) |
| `g9_pack/maths_data.py` | G9 Maths data for g9_pack/generate.py |
| `g9_pack/science_data.py` | G9 Science data for g9_pack/generate.py |
| `generate_g6_pack.py` | G6 pack: rewrites G6 English and Maths content and hints |
| `generate_g6_data_eng_sci.py` | G6 English/Science data for generate_g6_pack.py |
| `gen_g1_g2_packs.py` | G1/G2 packs: rewrites G2 English content and G2 hints |
| `author_g5_english_ch04_ch05.py` | G5 English ch04-05: rewrites spoken/writing chapters |
| `author_g5_science_ch04_06.py` | G5 Science ch04-06: reverts a later stem fix in g5-science-force |
| `author_g8_maths_ch04_06.py` | G8 Maths ch04-06: rewrites g8-maths-exponents |
| `ingest-sof-md.mjs` | Early G5 ingest: rewrites g5 English detective, Maths large numbers, Science plants |
| `ingest_run.py` | Early G3/G5 ingest: rewrites 19 files; also writes /workspace/Mindstrong/scripts/ingest_manifest.json (hard-coded path) |
| `ingest_g3_maths.py` | G3 Maths: no longer runs (answer-key assertion against changed writer files); would overwrite if it did |
| `ingest_g3_maths_pictorial.py` | G3 Maths pictorial: rewrites g3-maths-numbers |
| `ingest_g3_science_pictorial.py` | G3 Science pictorial: rewrites G3 Science content |
| `ingest_g4_english.py` | G4 English: no longer runs (writer-file assertion); would overwrite if it did |
| `ingest_g4_maths.py` | G4 Maths: no longer runs (answer-key assertion); would overwrite if it did |
| `ingest_g4_maths_pictorial.py` | G4 Maths pictorial: rewrites G4 Maths large numbers, multiply-divide and fractions (undoes the G4 hint and stem fixes) |
| `ingest_g4_science.py` | G4 Science: rewrites G4 Science food, matter and water |
| `ingest_g5_pictorial.py` | G5 Maths/Science pictorial: rewrites 6 G5 content files |
| `ingest_g8_english.py` | G8 English: no longer runs (writer pack missing chapter files); would overwrite if it did |
| `seed_g4_pictorial.mjs` | G4 pictorial overlays: rewrites lib/prep/pictorial/g4-overlays.ts (undoes the #62 redrawn pictures) |

## Shared libraries (not run directly)

- `ingest_lib.py`: shared ingest helpers (used by live and retired generators)
- `answer_balance.py`: shared answer-letter balancing helpers
- `g10/emit.py`: G10 emit helpers (used by retired generate_g10_pack.py)
- `g10/__init__.py`: package marker
- `g9_pack/emit.py`: G9 emit helpers (used by retired g9_pack/generate.py)

## Adding or reviving a generator

- New generator: register it in `scripts/content-generators.json`. It must reproduce the served files byte for byte before it can be listed as live.
- To bring a retired generator back, first make it reproduce the current files exactly, i.e. port every later fix into its data. Then remove the guard and move it to `live` here and in the registry.
- `--force` is for one-off investigation in a scratch worktree only. Review any diff it produces before committing anything.
- `patch-english-passages.mjs` (live, no-op) and `ingest_run.py` (retired) hard-code `/workspace/Mindstrong/...` paths and write into that shared checkout, whichever worktree you run them from.
