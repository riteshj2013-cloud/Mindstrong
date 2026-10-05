# Grade 4 Maths — Chapter 3: Fractions — Pictorial Addendum

## Meta
- grade: 4
- subject: Maths
- chapter_id: g4-maths-ch03-fractions
- chapter_title: Fractions
- parent_file: chapter-03-fractions.md
- content_type: original_sof_style_pictorial
- render: svg_css_in_app
- visual_target: 30-40% of practice items
- item_counts: Set A = 9 pictorial MCQs, Set B = 9 pictorial MCQs, figures = 18
- diagram_format: every MCQ embeds its own `**Diagram (SVG):**` block (inline, self-contained); the Figure Library holds the identical SVG for reuse
- svg_class_names: `bg`, `title`, `label`, `label small`, `value`, `option-label`, `fraction`, `numerator`, `denominator`, `fraction-bar`, `part`, `piece`, `slice`, `shaded`, `panel`, `kite`, `group`, `pencil`, `marble`, `roti`, `peel`, `crust`, `legend-swatch`, `axis`, `tick`, `point`, `point-label`, `arrow`, `bracket`
- skill_tags: same as the text chapter (fraction_basics, identify_diagram, equal_parts, fraction_of_collection, compare, equivalent, like_fractions, word_problem, multi_step), plus `number_line` (same tag as the Chapter 1 pictorial)
- fraction_notation: options and stems use the slash form (3/8), as the text chapter does; figures with fraction labels draw stacked fractions (`.fraction` group)
- level: Grade 4 only. Denominators are at most 12, and there are no improper or mixed fractions and no unlike-denominator addition.

## Figure Library

Each figure is original, built only from SVG shapes and text. Every pictorial MCQ below embeds the same SVG inline.

### fig_001
- **title**: Chocolate bar 3/8 shaded
- **type**: bar_model
- **svg**:

```svg
<svg viewBox="0 0 440 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Chocolate Bar">
  <rect class="bg" x="0" y="0" width="440" height="130" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Chocolate Bar</text>
  <rect class="part piece shaded" x="50" y="50" width="42.5" height="60" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="92.5" y="50" width="42.5" height="60" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="135.0" y="50" width="42.5" height="60" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="177.5" y="50" width="42.5" height="60" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="220.0" y="50" width="42.5" height="60" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="262.5" y="50" width="42.5" height="60" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="305.0" y="50" width="42.5" height="60" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="347.5" y="50" width="42.5" height="60" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="220.0" y="122" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All pieces are the same size.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: A chocolate bar divided into 8 equal pieces. The first 3 pieces are shaded brown.

### fig_002
- **title**: Four rotis/shapes: which is 1/4?
- **type**: identify_diagram
- **svg**:

```svg
<svg viewBox="0 0 480 296" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Which shows 1/4 shaded?">
  <rect class="bg" x="0" y="0" width="480" height="296" fill="#fff"/>
  <text class="title" x="240.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which shows 1/4 shaded?</text>
  <rect class="part panel" x="10" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <path class="part slice shaded" d="M 122.5 100.0 L 122.5 58.0 A 42 42 0 0 1 164.5 100.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 122.5 100.0 L 164.5 100.0 A 42 42 0 0 1 122.5 142.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122.5 100.0 L 122.5 142.0 A 42 42 0 0 1 80.5 100.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122.5 100.0 L 80.5 100.0 A 42 42 0 0 1 122.5 58.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <path class="part slice shaded" d="M 357.5 100.0 L 357.5 58.0 A 42 42 0 0 1 393.87 121.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 357.5 100.0 L 393.87 121.0 A 42 42 0 0 1 321.13 121.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 357.5 100.0 L 321.13 121.0 A 42 42 0 0 1 357.5 58.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="10" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <path class="part slice" d="M 122.5 230.0 L 122.5 188.0 A 42 42 0 0 1 164.5 230.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122.5 230.0 L 164.5 230.0 A 42 42 0 0 1 122.5 272.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 122.5 230.0 L 122.5 272.0 A 42 42 0 0 1 80.5 230.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122.5 230.0 L 80.5 230.0 A 42 42 0 0 1 122.5 188.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <rect class="part piece shaded" x="297.5" y="194" width="16" height="80" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="313.5" y="194" width="24" height="80" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="337.5" y="194" width="32" height="80" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="369.5" y="194" width="48" height="80" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Four boxes labelled A to D. A: a circle in 4 equal parts with 2 shaded. B: a circle in 3 equal parts with 1 shaded. C: a circle in 4 equal parts with 1 shaded. D: a rectangle cut into 4 strips of different widths with the narrowest strip shaded.

### fig_003
- **title**: Four shapes: which is NOT equal parts?
- **type**: equal_parts
- **svg**:

```svg
<svg viewBox="0 0 480 296" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Equal parts or not?">
  <rect class="bg" x="0" y="0" width="480" height="296" fill="#fff"/>
  <text class="title" x="240.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Equal parts or not?</text>
  <rect class="part panel" x="10" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <rect class="part piece" x="47.5" y="74" width="30" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="77.5" y="74" width="50" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="127.5" y="74" width="70" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <rect class="part piece" x="319.5" y="64" width="38.0" height="38.0" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="357.5" y="64" width="38.0" height="38.0" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="319.5" y="102.0" width="38.0" height="38.0" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="357.5" y="102.0" width="38.0" height="38.0" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="10" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <path class="part slice" d="M 122.5 230.0 L 122.5 188.0 A 42 42 0 0 1 122.5 272.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122.5 230.0 L 122.5 272.0 A 42 42 0 0 1 122.5 188.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <rect class="part piece" x="282.5" y="204" width="50" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="332.5" y="204" width="50" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="382.5" y="204" width="50" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Four boxes labelled A to D. A: a rectangle cut into 3 strips of different widths. B: a square cut into 4 equal smaller squares. C: a circle cut into 2 equal halves. D: a rectangle cut into 3 equal strips.

### fig_004
- **title**: 10 kites, 4 coloured
- **type**: fraction_of_set
- **svg**:

```svg
<svg viewBox="0 0 440 188" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Kites for Makar Sankranti">
  <rect class="bg" x="0" y="0" width="440" height="188" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Kites for Makar Sankranti</text>
  <polygon class="part kite shaded" points="80,42 94.0,62 80,86.0 66.0,62" fill="#f48fb1" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="80" y1="86.0" x2="84" y2="96.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite shaded" points="150,42 164.0,62 150,86.0 136.0,62" fill="#f48fb1" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="150" y1="86.0" x2="154" y2="96.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite shaded" points="220,42 234.0,62 220,86.0 206.0,62" fill="#f48fb1" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="220" y1="86.0" x2="224" y2="96.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite shaded" points="290,42 304.0,62 290,86.0 276.0,62" fill="#f48fb1" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="290" y1="86.0" x2="294" y2="96.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="360,42 374.0,62 360,86.0 346.0,62" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="360" y1="86.0" x2="364" y2="96.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="80,106 94.0,126 80,150.0 66.0,126" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="80" y1="150.0" x2="84" y2="160.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="150,106 164.0,126 150,150.0 136.0,126" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="150" y1="150.0" x2="154" y2="160.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="220,106 234.0,126 220,150.0 206.0,126" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="220" y1="150.0" x2="224" y2="160.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="290,106 304.0,126 290,150.0 276.0,126" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="290" y1="150.0" x2="294" y2="160.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="360,106 374.0,126 360,150.0 346.0,126" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="360" y1="150.0" x2="364" y2="160.0" stroke="#666" stroke-width="1"/>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Ten kites in two rows of five. The first 4 kites are coloured pink and the other 6 are white.

### fig_005
- **title**: Bars 1–3 with unit fractions
- **type**: compare
- **svg**:

```svg
<svg viewBox="0 0 460 238" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Same-size bars">
  <rect class="bg" x="0" y="0" width="460" height="238" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Same-size bars</text>
  <text class="label option-label" x="14" y="66" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 1</text>
  <rect class="part piece shaded" x="80" y="40" width="85.0" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="165.0" y="40" width="85.0" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="40" width="85.0" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="335.0" y="40" width="85.0" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="122" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 2</text>
  <rect class="part piece shaded" x="80" y="96" width="170.0" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="96" width="170.0" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="178" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 3</text>
  <rect class="part piece shaded" x="80" y="152" width="113.33" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="193.33" y="152" width="113.33" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="306.67" y="152" width="113.33" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="230.0" y="228" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All three bars are the same size.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Three bars of the same length, one above another. Bar 1 is cut into 4 equal parts, Bar 2 into 2 equal parts and Bar 3 into 3 equal parts. Each bar has one part shaded.

### fig_006
- **title**: Bar 1 halves vs Bar 2 eighths
- **type**: equivalent
- **svg**:

```svg
<svg viewBox="0 0 460 182" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Make them match">
  <rect class="bg" x="0" y="0" width="460" height="182" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Make them match</text>
  <text class="label option-label" x="14" y="66" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 1</text>
  <rect class="part piece shaded" x="80" y="40" width="170.0" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="40" width="170.0" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="122" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 2</text>
  <rect class="part piece" x="80" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="122.5" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="165.0" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="207.5" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="292.5" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="335.0" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="377.5" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="230.0" y="172" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are the same size.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Two bars of the same length. Bar 1 is cut into 2 equal parts with 1 shaded. Bar 2 is cut into 8 equal parts with none shaded.

### fig_007
- **title**: Number line 0–1 in fifths, point P
- **type**: number_line
- **svg**:

```svg
<svg viewBox="0 0 440 140" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Where is P?">
  <rect class="bg" x="0" y="0" width="440" height="140" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Where is P?</text>
  <line class="axis" x1="40" y1="82" x2="400" y2="82" stroke="#333" stroke-width="2.5"/>
  <line class="tick" x1="40.0" y1="70" x2="40.0" y2="94" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="114" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <line class="tick" x1="112.0" y1="74" x2="112.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="184.0" y1="74" x2="184.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="256.0" y1="74" x2="256.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="328.0" y1="74" x2="328.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="400.0" y1="70" x2="400.0" y2="94" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="400.0" y="114" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <circle class="part point" cx="256.0" cy="82" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="256.0" y1="42" x2="256.0" y2="70" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="256.0,73 251.0,65 261.0,65" fill="#333"/>
  <text class="label point-label" x="256.0" y="38" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">P</text>
  <text class="label small" x="220.0" y="134" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The line from 0 to 1 is cut into equal parts.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: A number line from 0 to 1 cut into 5 equal parts. Only 0 and 1 are labelled. Point P is on the third mark after 0.

### fig_008
- **title**: 16 pencils in 4 equal groups
- **type**: fraction_of_set
- **svg**:

```svg
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Tanvi's Pencils">
  <rect class="bg" x="0" y="0" width="460" height="170" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Tanvi's Pencils</text>
  <circle class="part group" cx="65.6" cy="86" r="44" fill="#e3f2fd" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <rect class="part pencil" x="44.6" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="44.6,102 50.6,102 47.6,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="56.6" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="56.6,102 62.6,102 59.6,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="68.6" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="68.6,102 74.6,102 71.6,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="80.6" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="80.6,102 86.6,102 83.6,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <text class="label" x="65.6" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Group 1</text>
  <circle class="part group" cx="175.2" cy="86" r="44" fill="#e8f5e9" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <rect class="part pencil" x="154.2" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="154.2,102 160.2,102 157.2,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="166.2" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="166.2,102 172.2,102 169.2,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="178.2" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="178.2,102 184.2,102 181.2,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="190.2" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="190.2,102 196.2,102 193.2,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <text class="label" x="175.2" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Group 2</text>
  <circle class="part group" cx="284.8" cy="86" r="44" fill="#fff8e1" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <rect class="part pencil" x="263.8" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="263.8,102 269.8,102 266.8,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="275.8" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="275.8,102 281.8,102 278.8,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="287.8" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="287.8,102 293.8,102 290.8,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="299.8" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="299.8,102 305.8,102 302.8,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <text class="label" x="284.8" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Group 3</text>
  <circle class="part group" cx="394.4" cy="86" r="44" fill="#fce4ec" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <rect class="part pencil" x="373.4" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="373.4,102 379.4,102 376.4,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="385.4" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="385.4,102 391.4,102 388.4,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="397.4" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="397.4,102 403.4,102 400.4,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="409.4" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="409.4,102 415.4,102 412.4,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <text class="label" x="394.4" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Group 4</text>
  <text class="label small" x="230.0" y="166" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">16 pencils in 4 equal groups</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Sixteen pencils arranged in 4 dashed rings labelled Group 1 to Group 4, with 4 pencils in each ring.

### fig_009
- **title**: Pizza in 12 slices with legend
- **type**: like_fractions
- **svg**:

```svg
<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Pizza Party">
  <rect class="bg" x="0" y="0" width="440" height="230" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Pizza Party</text>
  <circle class="part crust" cx="120" cy="125" r="92" fill="#ffe0b2" stroke="#333" stroke-width="2"/>
  <path class="part slice shaded" d="M 120 125 L 120.0 41.0 A 84 84 0 0 1 162.0 52.25 Z" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 162.0 52.25 A 84 84 0 0 1 192.75 83.0 Z" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 192.75 83.0 A 84 84 0 0 1 204.0 125.0 Z" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 204.0 125.0 A 84 84 0 0 1 192.75 167.0 Z" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 192.75 167.0 A 84 84 0 0 1 162.0 197.75 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 162.0 197.75 A 84 84 0 0 1 120.0 209.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 120.0 209.0 A 84 84 0 0 1 78.0 197.75 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 78.0 197.75 A 84 84 0 0 1 47.25 167.0 Z" fill="#ffe082" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 47.25 167.0 A 84 84 0 0 1 36.0 125.0 Z" fill="#ffe082" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 120 125 L 36.0 125.0 A 84 84 0 0 1 47.25 83.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 120 125 L 47.25 83.0 A 84 84 0 0 1 78.0 52.25 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 120 125 L 78.0 52.25 A 84 84 0 0 1 120.0 41.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part legend-swatch" x="250" y="70" width="24" height="24" rx="3" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="284" y="87" font-size="14" text-anchor="start" font-weight="bold" fill="#333">Ravi ate</text>
  <rect class="part legend-swatch" x="250" y="106" width="24" height="24" rx="3" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="284" y="123" font-size="14" text-anchor="start" font-weight="bold" fill="#333">Meena ate</text>
  <rect class="part legend-swatch" x="250" y="142" width="24" height="24" rx="3" fill="#ffe082" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="284" y="159" font-size="14" text-anchor="start" font-weight="bold" fill="#333">Papa ate</text>
  <rect class="part legend-swatch" x="250" y="178" width="24" height="24" rx="3" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="284" y="195" font-size="14" text-anchor="start" font-weight="bold" fill="#333">Not eaten</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: A pizza cut into 12 equal slices. 4 slices are blue (Ravi ate), 3 are green (Meena ate), 2 are yellow (Papa ate) and 3 are white (not eaten). A colour key is on the right.

### fig_010
- **title**: Orange with 6 segments, 5 shaded
- **type**: fraction_basics
- **svg**:

```svg
<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Orange Segments">
  <rect class="bg" x="0" y="0" width="440" height="200" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Orange Segments</text>
  <circle class="part peel" cx="220" cy="110" r="74" fill="#ffcc80" stroke="#333" stroke-width="2"/>
  <path class="part slice shaded" d="M 220 110 L 220.0 44.0 A 66 66 0 0 1 277.16 77.0 Z" fill="#ffa726" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 110 L 277.16 77.0 A 66 66 0 0 1 277.16 143.0 Z" fill="#ffa726" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 110 L 277.16 143.0 A 66 66 0 0 1 220.0 176.0 Z" fill="#ffa726" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 110 L 220.0 176.0 A 66 66 0 0 1 162.84 143.0 Z" fill="#ffa726" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 110 L 162.84 143.0 A 66 66 0 0 1 162.84 77.0 Z" fill="#ffa726" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 220 110 L 162.84 77.0 A 66 66 0 0 1 220.0 44.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="220.0" y="192" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All segments are the same size.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: An orange cut into 6 equal segments. 5 segments are shaded orange and 1 is white.

### fig_011
- **title**: Four bars: which shows 2/3?
- **type**: identify_diagram
- **svg**:

```svg
<svg viewBox="0 0 480 296" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Which shows 2/3 shaded?">
  <rect class="bg" x="0" y="0" width="480" height="296" fill="#fff"/>
  <text class="title" x="240.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which shows 2/3 shaded?</text>
  <rect class="part panel" x="10" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <rect class="part piece shaded" x="47.5" y="74" width="50.0" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="97.5" y="74" width="50.0" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="147.5" y="74" width="50.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <rect class="part piece shaded" x="282.5" y="74" width="50.0" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="332.5" y="74" width="50.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="382.5" y="74" width="50.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="10" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <rect class="part piece shaded" x="47.5" y="204" width="30.0" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="77.5" y="204" width="30.0" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="107.5" y="204" width="30.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="137.5" y="204" width="30.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="167.5" y="204" width="30.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <rect class="part piece shaded" x="282.5" y="204" width="30" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="312.5" y="204" width="40" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="352.5" y="204" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Four boxes labelled A to D. A: a bar in 3 equal parts with 2 shaded. B: a bar in 3 equal parts with 1 shaded. C: a bar in 5 equal parts with 2 shaded. D: a bar in 3 parts of different sizes with the two smaller parts shaded.

### fig_012
- **title**: 15 marbles in 3 cups
- **type**: fraction_of_set
- **svg**:

```svg
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Marble Cups">
  <rect class="bg" x="0" y="0" width="460" height="170" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Marble Cups</text>
  <circle class="part group" cx="93.0" cy="86" r="44" fill="#e3f2fd" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <circle class="part marble" cx="93.0" cy="62.0" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="115.83" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="107.11" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="78.89" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="70.17" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <text class="label" x="93.0" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Cup 1</text>
  <circle class="part group" cx="230.0" cy="86" r="44" fill="#e8f5e9" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <circle class="part marble" cx="230.0" cy="62.0" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="252.83" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="244.11" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="215.89" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="207.17" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <text class="label" x="230.0" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Cup 2</text>
  <circle class="part group" cx="367.0" cy="86" r="44" fill="#fff8e1" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <circle class="part marble" cx="367.0" cy="62.0" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="389.83" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="381.11" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="352.89" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="344.17" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <text class="label" x="367.0" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Cup 3</text>
  <text class="label small" x="230.0" y="166" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">15 marbles shared equally into 3 cups</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Three dashed rings labelled Cup 1, Cup 2 and Cup 3, each holding 5 blue marbles.

### fig_013
- **title**: Roti A halves vs Roti B sixths
- **type**: compare
- **svg**:

```svg
<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Two Same-Size Rotis">
  <rect class="bg" x="0" y="0" width="440" height="230" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Two Same-Size Rotis</text>
  <circle class="part roti" cx="120" cy="110" r="70" fill="#ffe0b2" stroke="#333" stroke-width="1"/>
  <path class="part slice shaded" d="M 120 110 L 120.0 46.0 A 64 64 0 0 1 120.0 174.0 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 120 110 L 120.0 174.0 A 64 64 0 0 1 120.0 46.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part roti" cx="320" cy="110" r="70" fill="#ffe0b2" stroke="#333" stroke-width="1"/>
  <path class="part slice shaded" d="M 320 110 L 320.0 46.0 A 64 64 0 0 1 375.43 78.0 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 320 110 L 375.43 78.0 A 64 64 0 0 1 375.43 142.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 320 110 L 375.43 142.0 A 64 64 0 0 1 320.0 174.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 320 110 L 320.0 174.0 A 64 64 0 0 1 264.57 142.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 320 110 L 264.57 142.0 A 64 64 0 0 1 264.57 78.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 320 110 L 264.57 78.0 A 64 64 0 0 1 320.0 46.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="120" y="200" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">Roti A</text>
  <text class="label option-label" x="320" y="200" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">Roti B</text>
  <text class="label small" x="220.0" y="222" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Each roti has 1 piece shaded.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Two rotis of the same size. Roti A is cut into 2 equal pieces with 1 shaded. Roti B is cut into 6 equal pieces with 1 shaded.

### fig_014
- **title**: Bar 1 thirds vs Bar 2 sixths
- **type**: equivalent
- **svg**:

```svg
<svg viewBox="0 0 460 182" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Compare the shaded parts">
  <rect class="bg" x="0" y="0" width="460" height="182" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Compare the shaded parts</text>
  <text class="label option-label" x="14" y="66" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 1</text>
  <rect class="part piece shaded" x="80" y="40" width="113.33" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="193.33" y="40" width="113.33" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="306.67" y="40" width="113.33" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="122" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 2</text>
  <rect class="part piece shaded" x="80" y="96" width="56.67" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="136.67" y="96" width="56.67" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="193.33" y="96" width="56.67" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="96" width="56.67" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="306.67" y="96" width="56.67" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="363.33" y="96" width="56.67" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="230.0" y="172" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are the same size.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Two bars of the same length. Bar 1 is cut into 3 equal parts with 1 shaded. Bar 2 is cut into 6 equal parts with 2 shaded, and the shaded parts line up exactly.

### fig_015
- **title**: Number line 0–1 in eighths, point Q
- **type**: number_line
- **svg**:

```svg
<svg viewBox="0 0 440 140" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Where is Q?">
  <rect class="bg" x="0" y="0" width="440" height="140" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Where is Q?</text>
  <line class="axis" x1="40" y1="82" x2="400" y2="82" stroke="#333" stroke-width="2.5"/>
  <line class="tick" x1="40.0" y1="70" x2="40.0" y2="94" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="114" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <line class="tick" x1="85.0" y1="74" x2="85.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="130.0" y1="74" x2="130.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="175.0" y1="74" x2="175.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="220.0" y1="74" x2="220.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <g class="label fraction"><text class="label numerator" x="220.0" y="104" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">1</text><line class="fraction-bar" x1="213.125" y1="109" x2="226.875" y2="109" stroke="#333" stroke-width="1.5"/><text class="label denominator" x="220.0" y="123" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">2</text></g>
  <line class="tick" x1="265.0" y1="74" x2="265.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="310.0" y1="74" x2="310.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="355.0" y1="74" x2="355.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="400.0" y1="70" x2="400.0" y2="94" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="400.0" y="114" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <circle class="part point" cx="310.0" cy="82" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="310.0" y1="42" x2="310.0" y2="70" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="310.0,73 305.0,65 315.0,65" fill="#333"/>
  <text class="label point-label" x="310.0" y="38" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Q</text>
  <text class="label small" x="220.0" y="134" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The line from 0 to 1 is cut into equal parts.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: A number line from 0 to 1 cut into 8 equal parts, with 0, one half and 1 labelled. Point Q is on the sixth mark after 0.

### fig_016
- **title**: Chocolate bars P and Q in sevenths
- **type**: like_fractions
- **svg**:

```svg
<svg viewBox="0 0 460 182" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Two Chocolate Bars">
  <rect class="bg" x="0" y="0" width="460" height="182" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Two Chocolate Bars</text>
  <text class="label option-label" x="14" y="66" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar P</text>
  <rect class="part piece shaded" x="80" y="40" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="128.57" y="40" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="177.14" y="40" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="225.71" y="40" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="274.29" y="40" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="322.86" y="40" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="371.43" y="40" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="122" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar Q</text>
  <rect class="part piece shaded" x="80" y="96" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="128.57" y="96" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="177.14" y="96" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="225.71" y="96" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="274.29" y="96" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="322.86" y="96" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="371.43" y="96" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="230.0" y="172" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are the same size. Shaded = eaten.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: Two same-size chocolate bars, each in 7 equal pieces. Bar P has 2 pieces shaded and Bar Q has 5 pieces shaded.

### fig_017
- **title**: Tape: ₹48 split into quarters
- **type**: bar_model
- **svg**:

```svg
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Simran's Pocket Money">
  <rect class="bg" x="0" y="0" width="460" height="170" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Simran's Pocket Money</text>
  <rect class="part piece shaded" x="40.0" y="70" width="95.0" height="44" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="87.5" y="98" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">Kite</text>
  <rect class="part piece shaded" x="135.0" y="70" width="95.0" height="44" rx="0" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="182.5" y="98" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">Book</text>
  <rect class="part piece shaded" x="230.0" y="70" width="95.0" height="44" rx="0" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="277.5" y="98" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">Book</text>
  <rect class="part piece" x="325.0" y="70" width="95.0" height="44" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="372.5" y="98" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">?</text>
  <path class="arrow bracket" d="M 40 62 L 40 52 L 420 52 L 420 62" fill="none" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="230.0" y="46" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">₹48 pocket money</text>
  <text class="label small" x="230.0" y="164" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The tape is cut into 4 equal parts.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: A tape labelled ₹48 pocket money, cut into 4 equal parts. Part 1 is labelled Kite, parts 2 and 3 are labelled Book, and part 4 shows a question mark.

### fig_018
- **title**: Tape: 1/3 of stickers is 6
- **type**: bar_model
- **svg**:

```svg
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Kabir's Sticker Album">
  <rect class="bg" x="0" y="0" width="460" height="170" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Kabir's Sticker Album</text>
  <rect class="part piece shaded" x="40.0" y="70" width="126.67" height="44" rx="0" fill="#ffe082" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="103.33" y="98" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <rect class="part piece" x="166.67" y="70" width="126.67" height="44" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="293.33" y="70" width="126.67" height="44" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="arrow bracket" d="M 40 62 L 40 52 L 420 52 L 420 62" fill="none" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="230.0" y="46" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">? stickers in all</text>
  <path class="arrow bracket" d="M 40.0 122 L 40.0 132 L 166.67 132 L 166.67 122" fill="none" stroke="#e65100" stroke-width="1.5"/>
  <text class="label" x="103.33" y="150" font-size="13" text-anchor="middle" font-weight="bold" fill="#e65100">1/3 of the stickers</text>
  <text class="label small" x="230.0" y="164" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The tape is cut into 3 equal parts.</text>
</svg>
```

- **css_notes**: max-width: 440px; width: 100%; height: auto; Keep `font-size` as set. Shaded parts carry `.shaded`, so they can be re-coloured for themes or colour-blind mode.
- **alt**: A tape cut into 3 equal parts under a bracket labelled '? stickers in all'. The first part is shaded and shows 6, with a bracket underneath labelled '1/3 of the stickers'.

## Pictorial Set A

### PQA01
- **figure**: fig_001
- **stem**: Look at the Chocolate Bar. What fraction of the bar is shaded?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Chocolate Bar">
  <rect class="bg" x="0" y="0" width="440" height="130" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Chocolate Bar</text>
  <rect class="part piece shaded" x="50" y="50" width="42.5" height="60" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="92.5" y="50" width="42.5" height="60" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="135.0" y="50" width="42.5" height="60" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="177.5" y="50" width="42.5" height="60" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="220.0" y="50" width="42.5" height="60" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="262.5" y="50" width="42.5" height="60" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="305.0" y="50" width="42.5" height="60" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="347.5" y="50" width="42.5" height="60" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="220.0" y="122" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All pieces are the same size.</text>
</svg>
```

- **alt**: A chocolate bar divided into 8 equal pieces. The first 3 pieces are shaded brown.
- **options**:
  - A) 3/5
  - B) 3/8
  - C) 5/8
  - D) 8/3
- **answer**: B
- **explanation**: There are 8 equal pieces and 3 are shaded, so 3/8 is shaded.
- **skill**: fraction_basics
- **difficulty**: easy
- **replaces_hint**: fraction_basics (e.g. text Set A Q08)

### PQA02
- **figure**: fig_002
- **stem**: Look at shapes A, B, C and D. Which shape shows **1/4** shaded?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 296" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Which shows 1/4 shaded?">
  <rect class="bg" x="0" y="0" width="480" height="296" fill="#fff"/>
  <text class="title" x="240.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which shows 1/4 shaded?</text>
  <rect class="part panel" x="10" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <path class="part slice shaded" d="M 122.5 100.0 L 122.5 58.0 A 42 42 0 0 1 164.5 100.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 122.5 100.0 L 164.5 100.0 A 42 42 0 0 1 122.5 142.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122.5 100.0 L 122.5 142.0 A 42 42 0 0 1 80.5 100.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122.5 100.0 L 80.5 100.0 A 42 42 0 0 1 122.5 58.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <path class="part slice shaded" d="M 357.5 100.0 L 357.5 58.0 A 42 42 0 0 1 393.87 121.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 357.5 100.0 L 393.87 121.0 A 42 42 0 0 1 321.13 121.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 357.5 100.0 L 321.13 121.0 A 42 42 0 0 1 357.5 58.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="10" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <path class="part slice" d="M 122.5 230.0 L 122.5 188.0 A 42 42 0 0 1 164.5 230.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122.5 230.0 L 164.5 230.0 A 42 42 0 0 1 122.5 272.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 122.5 230.0 L 122.5 272.0 A 42 42 0 0 1 80.5 230.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122.5 230.0 L 80.5 230.0 A 42 42 0 0 1 122.5 188.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <rect class="part piece shaded" x="297.5" y="194" width="16" height="80" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="313.5" y="194" width="24" height="80" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="337.5" y="194" width="32" height="80" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="369.5" y="194" width="48" height="80" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
</svg>
```

- **alt**: Four boxes labelled A to D. A: a circle in 4 equal parts with 2 shaded. B: a circle in 3 equal parts with 1 shaded. C: a circle in 4 equal parts with 1 shaded. D: a rectangle cut into 4 strips of different widths with the narrowest strip shaded.
- **options**:
  - A) Shape A
  - B) Shape B
  - C) Shape C
  - D) Shape D
- **answer**: C
- **explanation**: C has 4 equal parts with 1 shaded. A shows 2/4, B shows 1/3, and D's parts are not equal.
- **skill**: identify_diagram
- **difficulty**: easy
- **replaces_hint**: identify_diagram (e.g. text Set A Q03)

### PQA03
- **figure**: fig_003
- **stem**: Look at shapes A, B, C and D. Which shape is **NOT** cut into equal parts?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 296" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Equal parts or not?">
  <rect class="bg" x="0" y="0" width="480" height="296" fill="#fff"/>
  <text class="title" x="240.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Equal parts or not?</text>
  <rect class="part panel" x="10" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <rect class="part piece" x="47.5" y="74" width="30" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="77.5" y="74" width="50" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="127.5" y="74" width="70" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <rect class="part piece" x="319.5" y="64" width="38.0" height="38.0" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="357.5" y="64" width="38.0" height="38.0" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="319.5" y="102.0" width="38.0" height="38.0" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="357.5" y="102.0" width="38.0" height="38.0" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="10" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <path class="part slice" d="M 122.5 230.0 L 122.5 188.0 A 42 42 0 0 1 122.5 272.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122.5 230.0 L 122.5 272.0 A 42 42 0 0 1 122.5 188.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <rect class="part piece" x="282.5" y="204" width="50" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="332.5" y="204" width="50" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="382.5" y="204" width="50" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
</svg>
```

- **alt**: Four boxes labelled A to D. A: a rectangle cut into 3 strips of different widths. B: a square cut into 4 equal smaller squares. C: a circle cut into 2 equal halves. D: a rectangle cut into 3 equal strips.
- **options**:
  - A) Shape A
  - B) Shape B
  - C) Shape C
  - D) Shape D
- **answer**: A
- **explanation**: The three strips in A are different widths, so they are not equal parts.
- **skill**: equal_parts
- **difficulty**: easy
- **replaces_hint**: equal_parts (e.g. text Set A Q01)

### PQA04
- **figure**: fig_004
- **stem**: Look at the Kites for Makar Sankranti. What fraction of the kites are coloured pink?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 188" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Kites for Makar Sankranti">
  <rect class="bg" x="0" y="0" width="440" height="188" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Kites for Makar Sankranti</text>
  <polygon class="part kite shaded" points="80,42 94.0,62 80,86.0 66.0,62" fill="#f48fb1" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="80" y1="86.0" x2="84" y2="96.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite shaded" points="150,42 164.0,62 150,86.0 136.0,62" fill="#f48fb1" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="150" y1="86.0" x2="154" y2="96.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite shaded" points="220,42 234.0,62 220,86.0 206.0,62" fill="#f48fb1" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="220" y1="86.0" x2="224" y2="96.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite shaded" points="290,42 304.0,62 290,86.0 276.0,62" fill="#f48fb1" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="290" y1="86.0" x2="294" y2="96.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="360,42 374.0,62 360,86.0 346.0,62" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="360" y1="86.0" x2="364" y2="96.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="80,106 94.0,126 80,150.0 66.0,126" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="80" y1="150.0" x2="84" y2="160.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="150,106 164.0,126 150,150.0 136.0,126" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="150" y1="150.0" x2="154" y2="160.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="220,106 234.0,126 220,150.0 206.0,126" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="220" y1="150.0" x2="224" y2="160.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="290,106 304.0,126 290,150.0 276.0,126" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="290" y1="150.0" x2="294" y2="160.0" stroke="#666" stroke-width="1"/>
  <polygon class="part kite" points="360,106 374.0,126 360,150.0 346.0,126" fill="#fff" stroke="#333" stroke-width="1.5"/><line class="part tail" x1="360" y1="150.0" x2="364" y2="160.0" stroke="#666" stroke-width="1"/>
</svg>
```

- **alt**: Ten kites in two rows of five. The first 4 kites are coloured pink and the other 6 are white.
- **options**:
  - A) 4/6
  - B) 6/10
  - C) 10/4
  - D) 4/10
- **answer**: D
- **explanation**: 4 of the 10 kites are pink, so the fraction is 4/10.
- **skill**: fraction_of_collection
- **difficulty**: easy
- **replaces_hint**: fraction_of_collection / fraction_basics

### PQA05
- **figure**: fig_005
- **stem**: Look at Bars 1, 2 and 3. Each bar has one part shaded. Which list puts the shaded fractions in order from **greatest to smallest**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 238" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Same-size bars">
  <rect class="bg" x="0" y="0" width="460" height="238" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Same-size bars</text>
  <text class="label option-label" x="14" y="66" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 1</text>
  <rect class="part piece shaded" x="80" y="40" width="85.0" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="165.0" y="40" width="85.0" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="40" width="85.0" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="335.0" y="40" width="85.0" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="122" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 2</text>
  <rect class="part piece shaded" x="80" y="96" width="170.0" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="96" width="170.0" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="178" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 3</text>
  <rect class="part piece shaded" x="80" y="152" width="113.33" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="193.33" y="152" width="113.33" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="306.67" y="152" width="113.33" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="230.0" y="228" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All three bars are the same size.</text>
</svg>
```

- **alt**: Three bars of the same length, one above another. Bar 1 is cut into 4 equal parts, Bar 2 into 2 equal parts and Bar 3 into 3 equal parts. Each bar has one part shaded.
- **options**:
  - A) 1/2, 1/3, 1/4
  - B) 1/4, 1/3, 1/2
  - C) 1/3, 1/2, 1/4
  - D) 1/2, 1/4, 1/3
- **answer**: A
- **explanation**: Bar 2 is 1/2, Bar 3 is 1/3 and Bar 1 is 1/4. More parts means smaller pieces, so 1/2 > 1/3 > 1/4.
- **skill**: compare
- **difficulty**: medium
- **replaces_hint**: compare (e.g. text Set A Q11)

### PQA06
- **figure**: fig_006
- **stem**: Look at Bar 1 and Bar 2. How many parts of **Bar 2** must be shaded so that it shows the same amount as Bar 1?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 182" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Make them match">
  <rect class="bg" x="0" y="0" width="460" height="182" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Make them match</text>
  <text class="label option-label" x="14" y="66" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 1</text>
  <rect class="part piece shaded" x="80" y="40" width="170.0" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="40" width="170.0" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="122" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 2</text>
  <rect class="part piece" x="80" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="122.5" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="165.0" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="207.5" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="292.5" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="335.0" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="377.5" y="96" width="42.5" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="230.0" y="172" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are the same size.</text>
</svg>
```

- **alt**: Two bars of the same length. Bar 1 is cut into 2 equal parts with 1 shaded. Bar 2 is cut into 8 equal parts with none shaded.
- **options**:
  - A) 2
  - B) 4
  - C) 6
  - D) 1
- **answer**: B
- **explanation**: Bar 1 shows 1/2. Half of 8 equal parts is 4 parts, so 4/8 = 1/2.
- **skill**: equivalent
- **difficulty**: medium
- **replaces_hint**: equivalent (e.g. text Set A Q12)

### PQA07
- **figure**: fig_007
- **stem**: Look at the number line. Which fraction does point **P** show?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 140" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Where is P?">
  <rect class="bg" x="0" y="0" width="440" height="140" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Where is P?</text>
  <line class="axis" x1="40" y1="82" x2="400" y2="82" stroke="#333" stroke-width="2.5"/>
  <line class="tick" x1="40.0" y1="70" x2="40.0" y2="94" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="114" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <line class="tick" x1="112.0" y1="74" x2="112.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="184.0" y1="74" x2="184.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="256.0" y1="74" x2="256.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="328.0" y1="74" x2="328.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="400.0" y1="70" x2="400.0" y2="94" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="400.0" y="114" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <circle class="part point" cx="256.0" cy="82" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="256.0" y1="42" x2="256.0" y2="70" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="256.0,73 251.0,65 261.0,65" fill="#333"/>
  <text class="label point-label" x="256.0" y="38" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">P</text>
  <text class="label small" x="220.0" y="134" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The line from 0 to 1 is cut into equal parts.</text>
</svg>
```

- **alt**: A number line from 0 to 1 cut into 5 equal parts. Only 0 and 1 are labelled. Point P is on the third mark after 0.
- **options**:
  - A) 3/4
  - B) 1/3
  - C) 3/5
  - D) 2/5
- **answer**: C
- **explanation**: 0 to 1 is cut into 5 equal parts, and P is 3 parts from 0, so P = 3/5.
- **skill**: number_line
- **difficulty**: medium
- **replaces_hint**: fraction_basics / identify_diagram

### PQA08
- **figure**: fig_008
- **stem**: Look at Tanvi's Pencils. Tanvi gives **3/4** of her pencils to her friends and keeps the rest. How many pencils does she keep?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Tanvi's Pencils">
  <rect class="bg" x="0" y="0" width="460" height="170" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Tanvi's Pencils</text>
  <circle class="part group" cx="65.6" cy="86" r="44" fill="#e3f2fd" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <rect class="part pencil" x="44.6" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="44.6,102 50.6,102 47.6,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="56.6" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="56.6,102 62.6,102 59.6,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="68.6" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="68.6,102 74.6,102 71.6,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="80.6" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="80.6,102 86.6,102 83.6,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <text class="label" x="65.6" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Group 1</text>
  <circle class="part group" cx="175.2" cy="86" r="44" fill="#e8f5e9" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <rect class="part pencil" x="154.2" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="154.2,102 160.2,102 157.2,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="166.2" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="166.2,102 172.2,102 169.2,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="178.2" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="178.2,102 184.2,102 181.2,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="190.2" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="190.2,102 196.2,102 193.2,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <text class="label" x="175.2" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Group 2</text>
  <circle class="part group" cx="284.8" cy="86" r="44" fill="#fff8e1" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <rect class="part pencil" x="263.8" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="263.8,102 269.8,102 266.8,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="275.8" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="275.8,102 281.8,102 278.8,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="287.8" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="287.8,102 293.8,102 290.8,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="299.8" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="299.8,102 305.8,102 302.8,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <text class="label" x="284.8" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Group 3</text>
  <circle class="part group" cx="394.4" cy="86" r="44" fill="#fce4ec" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <rect class="part pencil" x="373.4" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="373.4,102 379.4,102 376.4,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="385.4" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="385.4,102 391.4,102 388.4,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="397.4" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="397.4,102 403.4,102 400.4,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <rect class="part pencil" x="409.4" y="64" width="6" height="38" rx="1" fill="#ffd54f" stroke="#333" stroke-width="1"/>
  <polygon class="part pencil-tip" points="409.4,102 415.4,102 412.4,110" fill="#8d6e63" stroke="#333" stroke-width="1"/>
  <text class="label" x="394.4" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Group 4</text>
  <text class="label small" x="230.0" y="166" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">16 pencils in 4 equal groups</text>
</svg>
```

- **alt**: Sixteen pencils arranged in 4 dashed rings labelled Group 1 to Group 4, with 4 pencils in each ring.
- **options**:
  - A) 12
  - B) 8
  - C) 3
  - D) 4
- **answer**: D
- **explanation**: Each group is 1/4 of the 16 pencils, which is 4 pencils. She gives away 3 groups (12) and keeps 1 group, so 4 pencils.
- **skill**: word_problem
- **difficulty**: hard
- **replaces_hint**: word_problem / multi_step (e.g. text Set A Q22)

### PQA09
- **figure**: fig_009
- **stem**: Look at the Pizza Party and its colour key. What fraction of the pizza is **not eaten**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Pizza Party">
  <rect class="bg" x="0" y="0" width="440" height="230" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Pizza Party</text>
  <circle class="part crust" cx="120" cy="125" r="92" fill="#ffe0b2" stroke="#333" stroke-width="2"/>
  <path class="part slice shaded" d="M 120 125 L 120.0 41.0 A 84 84 0 0 1 162.0 52.25 Z" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 162.0 52.25 A 84 84 0 0 1 192.75 83.0 Z" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 192.75 83.0 A 84 84 0 0 1 204.0 125.0 Z" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 204.0 125.0 A 84 84 0 0 1 192.75 167.0 Z" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 192.75 167.0 A 84 84 0 0 1 162.0 197.75 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 162.0 197.75 A 84 84 0 0 1 120.0 209.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 120.0 209.0 A 84 84 0 0 1 78.0 197.75 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 78.0 197.75 A 84 84 0 0 1 47.25 167.0 Z" fill="#ffe082" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 125 L 47.25 167.0 A 84 84 0 0 1 36.0 125.0 Z" fill="#ffe082" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 120 125 L 36.0 125.0 A 84 84 0 0 1 47.25 83.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 120 125 L 47.25 83.0 A 84 84 0 0 1 78.0 52.25 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 120 125 L 78.0 52.25 A 84 84 0 0 1 120.0 41.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part legend-swatch" x="250" y="70" width="24" height="24" rx="3" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="284" y="87" font-size="14" text-anchor="start" font-weight="bold" fill="#333">Ravi ate</text>
  <rect class="part legend-swatch" x="250" y="106" width="24" height="24" rx="3" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="284" y="123" font-size="14" text-anchor="start" font-weight="bold" fill="#333">Meena ate</text>
  <rect class="part legend-swatch" x="250" y="142" width="24" height="24" rx="3" fill="#ffe082" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="284" y="159" font-size="14" text-anchor="start" font-weight="bold" fill="#333">Papa ate</text>
  <rect class="part legend-swatch" x="250" y="178" width="24" height="24" rx="3" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="284" y="195" font-size="14" text-anchor="start" font-weight="bold" fill="#333">Not eaten</text>
</svg>
```

- **alt**: A pizza cut into 12 equal slices. 4 slices are blue (Ravi ate), 3 are green (Meena ate), 2 are yellow (Papa ate) and 3 are white (not eaten). A colour key is on the right.
- **options**:
  - A) 3/12
  - B) 9/12
  - C) 4/12
  - D) 5/12
- **answer**: A
- **explanation**: 4 + 3 + 2 = 9 of the 12 slices were eaten, so 12 − 9 = 3 slices are left, which is 3/12.
- **skill**: like_fractions
- **difficulty**: hard
- **replaces_hint**: like_fractions / multi_step (e.g. text Set A Q18)

## Pictorial Set B

### PQB01
- **figure**: fig_010
- **stem**: Look at the Orange Segments. What fraction of the orange is **NOT** shaded?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Orange Segments">
  <rect class="bg" x="0" y="0" width="440" height="200" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Orange Segments</text>
  <circle class="part peel" cx="220" cy="110" r="74" fill="#ffcc80" stroke="#333" stroke-width="2"/>
  <path class="part slice shaded" d="M 220 110 L 220.0 44.0 A 66 66 0 0 1 277.16 77.0 Z" fill="#ffa726" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 110 L 277.16 77.0 A 66 66 0 0 1 277.16 143.0 Z" fill="#ffa726" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 110 L 277.16 143.0 A 66 66 0 0 1 220.0 176.0 Z" fill="#ffa726" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 110 L 220.0 176.0 A 66 66 0 0 1 162.84 143.0 Z" fill="#ffa726" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 110 L 162.84 143.0 A 66 66 0 0 1 162.84 77.0 Z" fill="#ffa726" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 220 110 L 162.84 77.0 A 66 66 0 0 1 220.0 44.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="220.0" y="192" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All segments are the same size.</text>
</svg>
```

- **alt**: An orange cut into 6 equal segments. 5 segments are shaded orange and 1 is white.
- **options**:
  - A) 5/6
  - B) 6/1
  - C) 1/5
  - D) 1/6
- **answer**: D
- **explanation**: 1 of the 6 equal segments is white, so 1/6 is not shaded.
- **skill**: fraction_basics
- **difficulty**: easy
- **replaces_hint**: fraction_basics (e.g. text Set B Q04)

### PQB02
- **figure**: fig_011
- **stem**: Look at bars A, B, C and D. Which bar shows **2/3** shaded?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 296" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Which shows 2/3 shaded?">
  <rect class="bg" x="0" y="0" width="480" height="296" fill="#fff"/>
  <text class="title" x="240.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which shows 2/3 shaded?</text>
  <rect class="part panel" x="10" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <rect class="part piece shaded" x="47.5" y="74" width="50.0" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="97.5" y="74" width="50.0" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="147.5" y="74" width="50.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="34" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <rect class="part piece shaded" x="282.5" y="74" width="50.0" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="332.5" y="74" width="50.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="382.5" y="74" width="50.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="10" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <rect class="part piece shaded" x="47.5" y="204" width="30.0" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="77.5" y="204" width="30.0" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="107.5" y="204" width="30.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="137.5" y="204" width="30.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="167.5" y="204" width="30.0" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="164" width="225" height="120" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="186" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <rect class="part piece shaded" x="282.5" y="204" width="30" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="312.5" y="204" width="40" height="56" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="352.5" y="204" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
</svg>
```

- **alt**: Four boxes labelled A to D. A: a bar in 3 equal parts with 2 shaded. B: a bar in 3 equal parts with 1 shaded. C: a bar in 5 equal parts with 2 shaded. D: a bar in 3 parts of different sizes with the two smaller parts shaded.
- **options**:
  - A) Bar A
  - B) Bar B
  - C) Bar C
  - D) Bar D
- **answer**: A
- **explanation**: Bar A has 3 equal parts with 2 shaded. B shows 1/3, C shows 2/5, and D's parts are not equal.
- **skill**: identify_diagram
- **difficulty**: easy
- **replaces_hint**: identify_diagram (e.g. text Set B Q03)

### PQB03
- **figure**: fig_012
- **stem**: Look at the Marble Cups. 15 marbles are shared equally into Cup 1, Cup 2 and Cup 3. What is **1/3 of 15**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Marble Cups">
  <rect class="bg" x="0" y="0" width="460" height="170" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Marble Cups</text>
  <circle class="part group" cx="93.0" cy="86" r="44" fill="#e3f2fd" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <circle class="part marble" cx="93.0" cy="62.0" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="115.83" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="107.11" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="78.89" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="70.17" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <text class="label" x="93.0" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Cup 1</text>
  <circle class="part group" cx="230.0" cy="86" r="44" fill="#e8f5e9" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <circle class="part marble" cx="230.0" cy="62.0" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="252.83" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="244.11" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="215.89" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="207.17" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <text class="label" x="230.0" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Cup 2</text>
  <circle class="part group" cx="367.0" cy="86" r="44" fill="#fff8e1" stroke="#666" stroke-width="1.5" stroke-dasharray="5 3"/>
  <circle class="part marble" cx="367.0" cy="62.0" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="389.83" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="381.11" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="352.89" cy="105.42" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <circle class="part marble" cx="344.17" cy="78.58" r="8" fill="#4fc3f7" stroke="#333" stroke-width="1"/>
  <text class="label" x="367.0" y="148" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Cup 3</text>
  <text class="label small" x="230.0" y="166" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">15 marbles shared equally into 3 cups</text>
</svg>
```

- **alt**: Three dashed rings labelled Cup 1, Cup 2 and Cup 3, each holding 5 blue marbles.
- **options**:
  - A) 3
  - B) 5
  - C) 10
  - D) 12
- **answer**: B
- **explanation**: One cup is 1/3 of the marbles, and each cup holds 5, so 1/3 of 15 = 5.
- **skill**: fraction_of_collection
- **difficulty**: easy
- **replaces_hint**: fraction_of_collection (e.g. text Set B Q05)

### PQB04
- **figure**: fig_013
- **stem**: Look at Roti A and Roti B. They are the same size. Which sentence is true about the shaded pieces?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Two Same-Size Rotis">
  <rect class="bg" x="0" y="0" width="440" height="230" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Two Same-Size Rotis</text>
  <circle class="part roti" cx="120" cy="110" r="70" fill="#ffe0b2" stroke="#333" stroke-width="1"/>
  <path class="part slice shaded" d="M 120 110 L 120.0 46.0 A 64 64 0 0 1 120.0 174.0 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 120 110 L 120.0 174.0 A 64 64 0 0 1 120.0 46.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part roti" cx="320" cy="110" r="70" fill="#ffe0b2" stroke="#333" stroke-width="1"/>
  <path class="part slice shaded" d="M 320 110 L 320.0 46.0 A 64 64 0 0 1 375.43 78.0 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 320 110 L 375.43 78.0 A 64 64 0 0 1 375.43 142.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 320 110 L 375.43 142.0 A 64 64 0 0 1 320.0 174.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 320 110 L 320.0 174.0 A 64 64 0 0 1 264.57 142.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 320 110 L 264.57 142.0 A 64 64 0 0 1 264.57 78.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 320 110 L 264.57 78.0 A 64 64 0 0 1 320.0 46.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="120" y="200" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">Roti A</text>
  <text class="label option-label" x="320" y="200" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">Roti B</text>
  <text class="label small" x="220.0" y="222" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Each roti has 1 piece shaded.</text>
</svg>
```

- **alt**: Two rotis of the same size. Roti A is cut into 2 equal pieces with 1 shaded. Roti B is cut into 6 equal pieces with 1 shaded.
- **options**:
  - A) 1/6 is bigger than 1/2.
  - B) 1/2 and 1/6 are the same size.
  - C) 1/2 is bigger than 1/6.
  - D) 1/6 is exactly half of 1/2.
- **answer**: C
- **explanation**: Roti B is cut into more pieces, so each piece is smaller: 1/2 > 1/6. (1/6 is one-third of 1/2, not half.)
- **skill**: compare
- **difficulty**: easy
- **replaces_hint**: compare (e.g. text Set B Q07)

### PQB05
- **figure**: fig_014
- **stem**: Look at Bar 1 and Bar 2. The shaded parts line up exactly. Which fraction is **equal to 1/3**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 182" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Compare the shaded parts">
  <rect class="bg" x="0" y="0" width="460" height="182" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Compare the shaded parts</text>
  <text class="label option-label" x="14" y="66" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 1</text>
  <rect class="part piece shaded" x="80" y="40" width="113.33" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="193.33" y="40" width="113.33" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="306.67" y="40" width="113.33" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="122" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 2</text>
  <rect class="part piece shaded" x="80" y="96" width="56.67" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="136.67" y="96" width="56.67" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="193.33" y="96" width="56.67" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="96" width="56.67" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="306.67" y="96" width="56.67" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="363.33" y="96" width="56.67" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="230.0" y="172" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are the same size.</text>
</svg>
```

- **alt**: Two bars of the same length. Bar 1 is cut into 3 equal parts with 1 shaded. Bar 2 is cut into 6 equal parts with 2 shaded, and the shaded parts line up exactly.
- **options**:
  - A) 2/6
  - B) 1/6
  - C) 2/3
  - D) 3/6
- **answer**: A
- **explanation**: The 2 shaded sixths in Bar 2 cover the same length as 1 shaded third in Bar 1, so 2/6 = 1/3.
- **skill**: equivalent
- **difficulty**: medium
- **replaces_hint**: equivalent (e.g. text Set B Q12)

### PQB06
- **figure**: fig_015
- **stem**: Look at the number line. Which fraction does point **Q** show?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 140" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Where is Q?">
  <rect class="bg" x="0" y="0" width="440" height="140" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Where is Q?</text>
  <line class="axis" x1="40" y1="82" x2="400" y2="82" stroke="#333" stroke-width="2.5"/>
  <line class="tick" x1="40.0" y1="70" x2="40.0" y2="94" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="114" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <line class="tick" x1="85.0" y1="74" x2="85.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="130.0" y1="74" x2="130.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="175.0" y1="74" x2="175.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="220.0" y1="74" x2="220.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <g class="label fraction"><text class="label numerator" x="220.0" y="104" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">1</text><line class="fraction-bar" x1="213.125" y1="109" x2="226.875" y2="109" stroke="#333" stroke-width="1.5"/><text class="label denominator" x="220.0" y="123" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">2</text></g>
  <line class="tick" x1="265.0" y1="74" x2="265.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="310.0" y1="74" x2="310.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="355.0" y1="74" x2="355.0" y2="90" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="400.0" y1="70" x2="400.0" y2="94" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="400.0" y="114" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <circle class="part point" cx="310.0" cy="82" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="310.0" y1="42" x2="310.0" y2="70" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="310.0,73 305.0,65 315.0,65" fill="#333"/>
  <text class="label point-label" x="310.0" y="38" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Q</text>
  <text class="label small" x="220.0" y="134" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The line from 0 to 1 is cut into equal parts.</text>
</svg>
```

- **alt**: A number line from 0 to 1 cut into 8 equal parts, with 0, one half and 1 labelled. Point Q is on the sixth mark after 0.
- **options**:
  - A) 6/10
  - B) 1/6
  - C) 2/8
  - D) 6/8
- **answer**: D
- **explanation**: 0 to 1 is cut into 8 equal parts, and Q is 6 parts from 0, so Q = 6/8 (it is 2 marks after 1/2 = 4/8).
- **skill**: number_line
- **difficulty**: medium
- **replaces_hint**: fraction_basics / identify_diagram

### PQB07
- **figure**: fig_016
- **stem**: Look at the Two Chocolate Bars. The shaded parts were eaten. How much **more** of Bar Q was eaten than Bar P?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 182" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Two Chocolate Bars">
  <rect class="bg" x="0" y="0" width="460" height="182" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Two Chocolate Bars</text>
  <text class="label option-label" x="14" y="66" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar P</text>
  <rect class="part piece shaded" x="80" y="40" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="128.57" y="40" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="177.14" y="40" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="225.71" y="40" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="274.29" y="40" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="322.86" y="40" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="371.43" y="40" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="122" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">Bar Q</text>
  <rect class="part piece shaded" x="80" y="96" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="128.57" y="96" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="177.14" y="96" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="225.71" y="96" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="274.29" y="96" width="48.57" height="36" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="322.86" y="96" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="371.43" y="96" width="48.57" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="230.0" y="172" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are the same size. Shaded = eaten.</text>
</svg>
```

- **alt**: Two same-size chocolate bars, each in 7 equal pieces. Bar P has 2 pieces shaded and Bar Q has 5 pieces shaded.
- **options**:
  - A) 7/7
  - B) 3/14
  - C) 3/7
  - D) 2/7
- **answer**: C
- **explanation**: Bar Q: 5/7 eaten. Bar P: 2/7 eaten. 5/7 − 2/7 = 3/7.
- **skill**: like_fractions
- **difficulty**: medium
- **replaces_hint**: like_fractions (e.g. text Set B Q15)

### PQB08
- **figure**: fig_017
- **stem**: Look at Simran's Pocket Money. She spends 1/4 on a kite and 2/4 on a book. How much money is in the part with the **?**

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Simran's Pocket Money">
  <rect class="bg" x="0" y="0" width="460" height="170" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Simran's Pocket Money</text>
  <rect class="part piece shaded" x="40.0" y="70" width="95.0" height="44" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="87.5" y="98" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">Kite</text>
  <rect class="part piece shaded" x="135.0" y="70" width="95.0" height="44" rx="0" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="182.5" y="98" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">Book</text>
  <rect class="part piece shaded" x="230.0" y="70" width="95.0" height="44" rx="0" fill="#90caf9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="277.5" y="98" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">Book</text>
  <rect class="part piece" x="325.0" y="70" width="95.0" height="44" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="372.5" y="98" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">?</text>
  <path class="arrow bracket" d="M 40 62 L 40 52 L 420 52 L 420 62" fill="none" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="230.0" y="46" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">₹48 pocket money</text>
  <text class="label small" x="230.0" y="164" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The tape is cut into 4 equal parts.</text>
</svg>
```

- **alt**: A tape labelled ₹48 pocket money, cut into 4 equal parts. Part 1 is labelled Kite, parts 2 and 3 are labelled Book, and part 4 shows a question mark.
- **options**:
  - A) ₹12
  - B) ₹24
  - C) ₹36
  - D) ₹16
- **answer**: A
- **explanation**: Each quarter of ₹48 is ₹48 ÷ 4 = ₹12. The ? is 1 part, so ₹12 is left.
- **skill**: multi_step
- **difficulty**: hard
- **replaces_hint**: multi_step / word_problem (e.g. text Set B Q23)

### PQB09
- **figure**: fig_018
- **stem**: Look at Kabir's Sticker Album. 1/3 of his stickers is 6. How many stickers does he have **in all**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Kabir's Sticker Album">
  <rect class="bg" x="0" y="0" width="460" height="170" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Kabir's Sticker Album</text>
  <rect class="part piece shaded" x="40.0" y="70" width="126.67" height="44" rx="0" fill="#ffe082" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="103.33" y="98" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <rect class="part piece" x="166.67" y="70" width="126.67" height="44" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="293.33" y="70" width="126.67" height="44" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="arrow bracket" d="M 40 62 L 40 52 L 420 52 L 420 62" fill="none" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="230.0" y="46" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">? stickers in all</text>
  <path class="arrow bracket" d="M 40.0 122 L 40.0 132 L 166.67 132 L 166.67 122" fill="none" stroke="#e65100" stroke-width="1.5"/>
  <text class="label" x="103.33" y="150" font-size="13" text-anchor="middle" font-weight="bold" fill="#e65100">1/3 of the stickers</text>
  <text class="label small" x="230.0" y="164" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The tape is cut into 3 equal parts.</text>
</svg>
```

- **alt**: A tape cut into 3 equal parts under a bracket labelled '? stickers in all'. The first part is shaded and shows 6, with a bracket underneath labelled '1/3 of the stickers'.
- **options**:
  - A) 9
  - B) 18
  - C) 2
  - D) 12
- **answer**: B
- **explanation**: There are 3 equal parts and each part is 6, so 3 × 6 = 18 stickers.
- **skill**: fraction_of_collection
- **difficulty**: hard
- **replaces_hint**: fraction_of_collection (e.g. text Set B Q21)

## Answer Key

### Pictorial Set A
| Q# | Answer | Correct value | figure | skill | difficulty |
|----|--------|---------------|--------|-------|------------|
| PQA01 | B | 3/8 | fig_001 | fraction_basics | easy |
| PQA02 | C | Shape C | fig_002 | identify_diagram | easy |
| PQA03 | A | Shape A | fig_003 | equal_parts | easy |
| PQA04 | D | 4/10 | fig_004 | fraction_of_collection | easy |
| PQA05 | A | 1/2, 1/3, 1/4 | fig_005 | compare | medium |
| PQA06 | B | 4 | fig_006 | equivalent | medium |
| PQA07 | C | 3/5 | fig_007 | number_line | medium |
| PQA08 | D | 4 | fig_008 | word_problem | hard |
| PQA09 | A | 3/12 | fig_009 | like_fractions | hard |

Letter spread: A=3, B=2, C=2, D=2 · Difficulty: easy=4, medium=3, hard=2

### Pictorial Set B
| Q# | Answer | Correct value | figure | skill | difficulty |
|----|--------|---------------|--------|-------|------------|
| PQB01 | D | 1/6 | fig_010 | fraction_basics | easy |
| PQB02 | A | Bar A | fig_011 | identify_diagram | easy |
| PQB03 | B | 5 | fig_012 | fraction_of_collection | easy |
| PQB04 | C | 1/2 is bigger than 1/6. | fig_013 | compare | easy |
| PQB05 | A | 2/6 | fig_014 | equivalent | medium |
| PQB06 | D | 6/8 | fig_015 | number_line | medium |
| PQB07 | C | 3/7 | fig_016 | like_fractions | medium |
| PQB08 | A | ₹12 | fig_017 | multi_step | hard |
| PQB09 | B | 18 | fig_018 | fraction_of_collection | hard |

Letter spread: A=3, B=2, C=2, D=2 · Difficulty: easy=4, medium=3, hard=2

## Engineering notes
- **Embedding**: Each MCQ has a fenced ```` ```svg ```` block right after the stem under `**Diagram (SVG):**`. Take the block contents as-is and insert them as inline SVG markup in the question card, between the stem and the options. Do not load them as `<img src>`, or the CSS classes stop working. Use the `**alt**` line as the accessible name; the root `<svg>` also has `role="img"` and an `aria-label`.
- **Self-contained**: Every SVG has a `viewBox` and `xmlns`, uses no external fonts, images, links or `<style>`, and sets fills and strokes as attributes, so it renders the same with no CSS at all. All 18 SVGs pass an XML parser check. The `₹` sign is plain UTF-8 text.
- **Equal parts are exact**: Pie slices are SVG arc paths with equal angles, and bars are split into equal widths in the markup. Do not stretch figures unevenly (keep the aspect ratio with `height: auto`), or the equal and unequal comparisons stop being fair.
- **Sizing**: Set `width: 100%; height: auto;` with the `max-width` from `css_notes` (440–480px). Do not scale below about 300px wide on phones.
- **Theming and animation hooks**: There are class names on the elements: `.part` / `.piece` / `.slice` (fraction parts), `.shaded` (coloured parts, for theme or colour-blind re-colouring and tap-to-shade answer reveals), `.fraction` (stacked fraction labels), `.arrow` / `.bracket`, `.point`, `.option-label` (A–D, Bar 1/2, Roti A/B, Bar P/Q inside figures).
- **Colour-blind safety**: Every item can be answered by counting parts. Colour only marks shaded or unshaded, and the PQA09 key uses names as well as colours. If a theme recolours `.shaded`, keep it clearly different from white.
- **Labels in stems**: Stems name figure labels (Shape/Bar A–D, Bar 1/2/3, Bar P/Q, Roti A/B, Cup/Group numbers, point P/Q, the ? part), and options use the same names.
- **Mixing**: Swap or add items using `replaces_hint`. 9 pictorial items in a 24-item set is about 37.5% visual.
- **Originality**: All figures, numbers, names and stems are new and were made for Mindstrong. No SOF or past-paper images, scans or traced layouts are used, only the general style (shaded shapes, bar models, number lines, sets, tape diagrams).
- **Pack status**: With this file, the Grade 4 pictorial pack (Chapters 1–3) is complete: 54 pictorial MCQs and 54 figures.
