# Pictorial figure specs (writer guide)

Olympiad-style pictorial MCQs use **original SVG** rendered in the app.
Do **not** paste or link copyrighted SOF paper scans.

## Preferred: `**Diagram (SVG):**`

### Maths addenda (fenced)

```markdown
**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 150" … role="img" aria-label="…">…</svg>
```
```

### Science chapters (raw inline SVG, often with `<style>`)

```markdown
**Diagram (SVG):**
<svg xmlns="…" viewBox="0 0 320 220" role="img" aria-label="…">
  <style><![CDATA[ .part { … } .label { … } ]]></style>
  …
</svg>
```

Ingest sanitizes SVG (strips `script`, event handlers `on*`, external `href`/`src`; keeps scrubbed `<style>`).
Stored as `figure: { type: "svg", markup, alt }` and rendered via `FigureRenderer` (inline markup, not `<img src>`).

Ignore writer `## Pictorial notes` sections — parsers only read Quiz / Practice / Pictorial Set blocks.

## Ingest commands

```bash
python3 scripts/ingest_g4_maths_pictorial.py   # Ch1 Large Numbers + Ch2 Mul/Div addenda
python3 scripts/ingest_g4_science.py           # Food, Matter, Water (Diagram SVG when present)
```

## Alternate structured JSON

`- **figure**: {"type":"fraction-bar",…}` and option `[[fig:{…}]]` — see structured types in `lib/prep/types.ts` (`FigureSpec`).

## Grade 3 Science (inline SVG in Quiz Sets)

Writer files embed `**Diagram (SVG):**` + raw `<svg>…</svg>` on pictorial items
(≈9 of 24 per Set A/B). `## Pictorial notes` is ignored by the parser.

```bash
python3 scripts/ingest_g3_science_pictorial.py
```

## Grade 3 / 4 Maths pictorial addenda

Separate `*-pictorial.md` files with `## Pictorial Set A/B` and `### PQA01` items.
Each embeds `**Diagram (SVG):**` (fenced ```svg```). Merged into practice sets via `replaces_hint`.

```bash
python3 scripts/ingest_g3_maths_pictorial.py   # Ch1 Numbers
python3 scripts/ingest_g4_maths_pictorial.py   # Ch1–3 (Large / MulDiv / Fractions)
```

## Grade 4 English external visuals

Chapter files under `grade-4-english/` use:

- `- visual: visuals/<item-id>.svg` (path relative to the chapter)
- `- visual_alt: |` one-sentence alt text
- `- visual_longdesc: |` (PD1 only) full text equivalent for screen readers
- Passage-level visuals under Passage bank headings (N1, PD1, P1, …); items that
  reference those passages inherit the figure.

Ingest inlines sanitized SVG as `figure.type=svg` (with `alt` / `longdesc`).
Ignore `_preview-*.png`. Visual counts out of 48: Ch1 18, Ch2 16, Ch3 18.

```bash
python3 scripts/ingest_g4_english.py
```


## Grade 5 pictorial

```bash
python3 scripts/ingest_g5_pictorial.py
# Maths Ch1 Large Numbers pictorial addendum (when present)
# Science Ch1–3 inline Diagram (SVG) in Quiz Sets
# Skips English until grade-5-english/ / grade-8-english/ ship visual: + visuals/
```
