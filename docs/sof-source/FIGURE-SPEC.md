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
