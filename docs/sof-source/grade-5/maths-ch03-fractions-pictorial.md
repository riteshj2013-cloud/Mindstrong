# Grade 5 Maths — Chapter 3: Fractions — Pictorial Addendum

## Meta
- grade: 5
- subject: Maths
- chapter_id: g5-maths-ch03-fractions
- chapter_title: Fractions (Parts and Wholes)
- parent_file: chapter-03-fractions.md
- content_type: original_sof_style_pictorial
- render: svg_css_in_app
- visual_target: 30-40% of practice items
- item_counts: Set A = 9 pictorial MCQs, Set B = 9 pictorial MCQs, figures = 18
- diagram_format: every MCQ embeds its own `**Diagram (SVG):**` block (inline, self-contained); the Figure Library holds the identical SVG for reuse
- quality_bar: about 40% easy, 40% medium, 20% hard; mixed question types; no near-duplicates between Set A and Set B; even answer-letter spread
- difficulty_mix: Set A 4 easy, 3 medium, 2 hard; Set B 3 easy, 4 medium, 2 hard; combined 7 / 7 / 4 = 39% / 39% / 22%
- qtype_field: each MCQ has a `qtype` (recall, application, multi_step, logical_reasoning, pattern, odd_one_out); all items are pictorial
- svg_class_names: `bg`, `title`, `label`, `label small`, `value`, `option-label`, `part`, `piece`, `shaded`, `slice`, `card`, `panel`, `marble`, `axis`, `tick`, `point`, `arrow`, `fraction-bar`, `missing`
- skill_tags: fraction_basics, numerator_denominator, fraction_types, add_subtract, compare, equivalent, fraction_of_collection, simplest_form, number_line, word_problem
- fraction_notation: options and stems use the slash form (3/8); Grade 5 may include improper/mixed and simplest form


## Figure Library

Each figure is original, built only from SVG shapes and text. Every pictorial MCQ below embeds the same SVG inline.

### fig_001
- **title**: Chocolate bar 3/8 shaded
- **type**: bar_model
- **svg**:

```svg
<svg viewBox="0 0 440 145" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Chocolate bar with 3 of 8 pieces shaded">
  <rect class="bg" x="0" y="0" width="440" height="145" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Chocolate Bar</text>
  <rect class="part piece shaded" x="40.0" y="50" width="45.0" height="55" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="85.0" y="50" width="45.0" height="55" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="130.0" y="50" width="45.0" height="55" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="175.0" y="50" width="45.0" height="55" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="220.0" y="50" width="45.0" height="55" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="265.0" y="50" width="45.0" height="55" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="310.0" y="50" width="45.0" height="55" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="355.0" y="50" width="45.0" height="55" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="220" y="130" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All pieces are the same size.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A bar divided into 8 equal pieces. The first 3 pieces are shaded brown.

### fig_002
- **title**: Which shows 1/2
- **type**: identify_diagram
- **svg**:

```svg
<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four diagrams which shows one half">
  <rect class="bg" x="0" y="0" width="480" height="260" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which shows 1/2 shaded?</text>
  <rect class="part panel" x="10" y="34" width="225" height="100" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <rect class="part piece shaded" x="50" y="60" width="50" height="55" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="100" y="60" width="100" height="55" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="34" width="225" height="100" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <path class="part slice shaded" d="M 357 90 L 357.0 58.0 A 32 32 0 0 1 384.7 106.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 357 90 L 384.7 106.0 A 32 32 0 0 1 329.3 106.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 357 90 L 329.3 106.0 A 32 32 0 0 1 357.0 58.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="10" y="144" width="225" height="100" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="166" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <path class="part slice shaded" d="M 122 200 L 122.0 168.0 A 32 32 0 0 1 122.0 232.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122 200 L 122.0 232.0 A 32 32 0 0 1 122.0 168.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="144" width="225" height="100" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="166" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <rect class="part piece shaded" x="280.0" y="175" width="40.0" height="40" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="320.0" y="175" width="40.0" height="40" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="360.0" y="175" width="40.0" height="40" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="400.0" y="175" width="40.0" height="40" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Four panels. A has unequal parts with the small part shaded. B is a circle in 3 equal parts with 1 shaded. C is a circle in 2 equal parts with 1 shaded. D is a bar in 4 equal parts with 1 shaded.

### fig_003
- **title**: Fraction 5/8 labelled
- **type**: numerator_denominator
- **svg**:

```svg
<svg viewBox="0 0 440 185" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Fraction five eighths with numerator and denominator labels">
  <rect class="bg" x="0" y="0" width="440" height="185" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Parts of a fraction</text>
  <rect class="part card" x="150" y="40" width="140" height="110" rx="10" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label" x="220" y="78" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <line class="part fraction-bar" x1="175" y1="90" x2="265" y2="90" stroke="#333" stroke-width="3"/>
  <text class="label" x="220" y="125" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <line class="arrow" x1="300" y1="70" x2="310" y2="70" stroke="#e65100" stroke-width="2"/>
  <text class="label" x="360" y="74" font-size="13" text-anchor="middle" font-weight="bold" fill="#e65100">numerator</text>
  <line class="arrow" x1="300" y1="118" x2="310" y2="118" stroke="#1565c0" stroke-width="2"/>
  <text class="label" x="365" y="122" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">denominator</text>
  <text class="label small" x="220" y="170" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Top = how many · Bottom = equal parts in the whole</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A large fraction card shows 5 over 8. An orange arrow labels the 5 as numerator. A blue arrow labels the 8 as denominator.

### fig_004
- **title**: Unit fraction cards
- **type**: fraction_types
- **svg**:

```svg
<svg viewBox="0 0 480 165" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four fraction cards find the unit fraction">
  <rect class="bg" x="0" y="0" width="480" height="165" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which is a unit fraction?</text>
  <rect class="part card" x="40" y="50" width="90" height="70" rx="8" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="52" y="72" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <text class="label" x="85" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">9/1</text>
  <rect class="part card" x="150" y="50" width="90" height="70" rx="8" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="162" y="72" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <text class="label" x="195" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">2/9</text>
  <rect class="part card" x="260" y="50" width="90" height="70" rx="8" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="272" y="72" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <text class="label" x="305" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">1/9</text>
  <rect class="part card" x="370" y="50" width="90" height="70" rx="8" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="382" y="72" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <text class="label" x="415" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">9/9</text>
  <text class="label small" x="240" y="150" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">A unit fraction has 1 as its numerator.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Four cards show 9/1, 2/9, 1/9 and 9/9.

### fig_005
- **title**: Add 2/7 and 3/7 bars
- **type**: add_subtract
- **svg**:

```svg
<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Two bars showing 2 of 7 and 3 of 7 to add">
  <rect class="bg" x="0" y="0" width="460" height="190" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Add the shaded parts</text>
  <text class="label" x="30" y="58" font-size="14" text-anchor="start" font-weight="bold" fill="#333">2/7</text>
  <rect class="part piece shaded" x="70.0" y="40" width="50.0" height="28" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="120.0" y="40" width="50.0" height="28" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="170.0" y="40" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="220.0" y="40" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="270.0" y="40" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="320.0" y="40" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="370.0" y="40" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="98" font-size="14" text-anchor="start" font-weight="bold" fill="#333">3/7</text>
  <rect class="part piece shaded" x="70.0" y="80" width="50.0" height="28" rx="0" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="120.0" y="80" width="50.0" height="28" rx="0" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="170.0" y="80" width="50.0" height="28" rx="0" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="220.0" y="80" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="270.0" y="80" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="320.0" y="80" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="370.0" y="80" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="138" font-size="16" text-anchor="start" font-weight="bold" fill="#e65100">?</text>
  <rect class="part piece" x="70.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="120.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="170.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="220.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="270.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="320.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="370.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part missing" x="70" y="120" width="350" height="28" rx="0" fill="none" stroke="#e65100" stroke-width="2" stroke-dasharray="5 3"/>
  <text class="label small" x="240" y="175" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are cut into 7 equal parts.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A bar with 2 of 7 parts shaded green, a bar with 3 of 7 parts shaded blue, and an empty 7-part bar with a dashed outline for the sum.

### fig_006
- **title**: Compare 5/9 and 4/9
- **type**: compare
- **svg**:

```svg
<svg viewBox="0 0 460 165" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Bars comparing five ninths and four ninths">
  <rect class="bg" x="0" y="0" width="460" height="165" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Same-size bars</text>
  <text class="label" x="30" y="58" font-size="14" text-anchor="start" font-weight="bold" fill="#333">5/9</text>
  <rect class="part piece shaded" x="70.0" y="40" width="40.0" height="30" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="110.0" y="40" width="40.0" height="30" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="150.0" y="40" width="40.0" height="30" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="190.0" y="40" width="40.0" height="30" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="230.0" y="40" width="40.0" height="30" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="270.0" y="40" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="310.0" y="40" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="350.0" y="40" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="390.0" y="40" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="108" font-size="14" text-anchor="start" font-weight="bold" fill="#333">4/9</text>
  <rect class="part piece shaded" x="70.0" y="90" width="40.0" height="30" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="110.0" y="90" width="40.0" height="30" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="150.0" y="90" width="40.0" height="30" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="190.0" y="90" width="40.0" height="30" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="230.0" y="90" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="270.0" y="90" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="310.0" y="90" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="350.0" y="90" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="390.0" y="90" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="150" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are the same length with equal parts.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Two equal-length bars. The top has 5 of 9 parts shaded. The bottom has 4 of 9 parts shaded.

### fig_007
- **title**: Equivalent halves
- **type**: equivalent
- **svg**:

```svg
<svg viewBox="0 0 460 185" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Three bars showing equivalent halves">
  <rect class="bg" x="0" y="0" width="460" height="185" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Same amount shaded?</text>
  <text class="label" x="40" y="55" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 1</text>
  <rect class="part piece shaded" x="100.0" y="38" width="160.0" height="28" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="260.0" y="38" width="160.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="95" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 2</text>
  <rect class="part piece shaded" x="100.0" y="78" width="80.0" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="180.0" y="78" width="80.0" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="260.0" y="78" width="80.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="340.0" y="78" width="80.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="135" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 3</text>
  <rect class="part piece shaded" x="100.0" y="118" width="40.0" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="140.0" y="118" width="40.0" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="180.0" y="118" width="40.0" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="220.0" y="118" width="40.0" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="260.0" y="118" width="40.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="300.0" y="118" width="40.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="340.0" y="118" width="40.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="380.0" y="118" width="40.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="170" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All three bars are the same length.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Three equal-length bars. Bar 1 shows 1 of 2 shaded. Bar 2 shows 2 of 4 shaded. Bar 3 shows 4 of 8 shaded.

### fig_008
- **title**: 4 of 10 laddoos
- **type**: fraction_of_collection
- **svg**:

```svg
<svg viewBox="0 0 400 195" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Ten laddoos with four marked">
  <rect class="bg" x="0" y="0" width="400" height="195" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Laddoos on a plate</text>
  <circle class="part marble" cx="50" cy="50" r="22" fill="#ffcc80" stroke="#e65100" stroke-width="2.5"/>
  <circle class="part marble" cx="120" cy="50" r="22" fill="#ffcc80" stroke="#e65100" stroke-width="2.5"/>
  <circle class="part marble" cx="190" cy="50" r="22" fill="#ffcc80" stroke="#e65100" stroke-width="2.5"/>
  <circle class="part marble" cx="260" cy="50" r="22" fill="#ffcc80" stroke="#e65100" stroke-width="2.5"/>
  <circle class="part marble" cx="330" cy="50" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="50" cy="110" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="120" cy="110" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="190" cy="110" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="260" cy="110" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="330" cy="110" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="180" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Orange rings mark the chosen laddoos.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Ten round laddoos in two rows. The first four have orange rings and a warmer fill.

### fig_009
- **title**: Number line sixths point P at 4/6
- **type**: number_line
- **svg**:

```svg
<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Number line from 0 to 1 in sixths with point P">
  <rect class="bg" x="0" y="0" width="480" height="160" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Fractions on a number line</text>
  <line class="axis" x1="40" y1="90" x2="440" y2="90" stroke="#333" stroke-width="2"/>
  <polygon class="arrow" points="446,90 438,85 438,95" fill="#333"/>
  <line class="tick" x1="40.0" y1="80" x2="40.0" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <line class="tick" x1="106.7" y1="80" x2="106.7" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="106.7" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">1/6</text>
  <line class="tick" x1="173.3" y1="80" x2="173.3" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="173.3" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">2/6</text>
  <line class="tick" x1="240.0" y1="80" x2="240.0" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="240.0" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3/6</text>
  <line class="tick" x1="306.7" y1="80" x2="306.7" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="306.7" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">4/6</text>
  <line class="tick" x1="373.3" y1="80" x2="373.3" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="373.3" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">5/6</text>
  <line class="tick" x1="440.0" y1="80" x2="440.0" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="440.0" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <circle class="part point" cx="306.7" cy="90" r="8" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="306.7" y="60" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">P</text>
  <text class="label small" x="240" y="145" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The line from 0 to 1 is split into 6 equal parts.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A number line from 0 to 1 with marks at each sixth. A blue point P sits at the 4/6 mark.

### fig_010
- **title**: Pizza 5/8 remaining
- **type**: fraction_basics
- **svg**:

```svg
<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Pizza with 5 of 8 slices shaded">
  <rect class="bg" x="0" y="0" width="440" height="220" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Pizza slices left</text>
  <path class="part slice shaded" d="M 220 115 L 220.0 45.0 A 70 70 0 0 1 269.5 65.5 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 115 L 269.5 65.5 A 70 70 0 0 1 290.0 115.0 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 115 L 290.0 115.0 A 70 70 0 0 1 269.5 164.5 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 115 L 269.5 164.5 A 70 70 0 0 1 220.0 185.0 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 115 L 220.0 185.0 A 70 70 0 0 1 170.5 164.5 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 220 115 L 170.5 164.5 A 70 70 0 0 1 150.0 115.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 220 115 L 150.0 115.0 A 70 70 0 0 1 170.5 65.5 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 220 115 L 170.5 65.5 A 70 70 0 0 1 220.0 45.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="220" y="205" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Shaded slices are still on the plate.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A circle divided into 8 equal slices. Five slices are shaded.

### fig_011
- **title**: Seven quarters as mixed
- **type**: fraction_types
- **svg**:

```svg
<svg viewBox="0 0 420 225" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Seven quarter pieces filling one whole and three quarters">
  <rect class="bg" x="0" y="0" width="420" height="225" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">More than one whole</text>
  <path class="part slice shaded" d="M 120 110 L 120.0 55.0 A 55 55 0 0 1 175.0 110.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 110 L 175.0 110.0 A 55 55 0 0 1 120.0 165.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 110 L 120.0 165.0 A 55 55 0 0 1 65.0 110.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 110 L 65.0 110.0 A 55 55 0 0 1 120.0 55.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 300 110 L 300.0 55.0 A 55 55 0 0 1 355.0 110.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 300 110 L 355.0 110.0 A 55 55 0 0 1 300.0 165.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 300 110 L 300.0 165.0 A 55 55 0 0 1 245.0 110.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 300 110 L 245.0 110.0 A 55 55 0 0 1 300.0 55.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="120" y="185" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">4 quarters</text>
  <text class="label" x="300" y="185" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3 quarters</text>
  <text class="label small" x="240" y="210" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Each circle is one whole cut into 4 equal parts.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Two circles each cut into 4 equal parts. The first circle is fully shaded. The second has 3 parts shaded.

### fig_012
- **title**: Bar 6/8 to simplify
- **type**: simplest_form
- **svg**:

```svg
<svg viewBox="0 0 480 155" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Bar with 6 of 8 shaded to simplify">
  <rect class="bg" x="0" y="0" width="480" height="155" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Simplify the shaded fraction</text>
  <rect class="part piece shaded" x="40.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="90.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="140.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="190.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="240.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="290.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="340.0" y="50" width="50.0" height="45" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="390.0" y="50" width="50.0" height="45" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="220" y="125" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">6 pieces are shaded out of 8 equal pieces.</text>
  <text class="label small" x="220" y="142" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Divide top and bottom by the same number.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A bar divided into 8 equal pieces with the first 6 shaded.

### fig_013
- **title**: Compare 1/5 and 1/8
- **type**: compare
- **svg**:

```svg
<svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Bars comparing one fifth and one eighth">
  <rect class="bg" x="0" y="0" width="460" height="160" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Same numerator, different pieces</text>
  <text class="label" x="30" y="58" font-size="14" text-anchor="start" font-weight="bold" fill="#333">1/5</text>
  <rect class="part piece shaded" x="70.0" y="40" width="72.0" height="28" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="142.0" y="40" width="72.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="214.0" y="40" width="72.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="286.0" y="40" width="72.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="358.0" y="40" width="72.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="108" font-size="14" text-anchor="start" font-weight="bold" fill="#333">1/8</text>
  <rect class="part piece shaded" x="70.0" y="90" width="45.0" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="115.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="160.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="205.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="295.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="340.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="385.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="145" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are the same length.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Two equal-length bars. The top is cut into 5 with 1 shaded. The bottom is cut into 8 with 1 shaded.

### fig_014
- **title**: 3/5 of 20 dots
- **type**: fraction_of_collection
- **svg**:

```svg
<svg viewBox="0 0 440 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Twenty dots with twelve shaded">
  <rect class="bg" x="0" y="0" width="440" height="170" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Take 3/5 of the dots</text>
  <circle class="part marble" cx="40" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="80" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="120" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="160" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="200" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="240" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="280" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="320" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="360" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="400" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="40" cy="95" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="80" cy="95" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="120" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="160" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="200" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="240" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="280" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="320" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="360" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="400" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="155" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">20 dots in all. Blue dots show 3 out of 5 equal groups.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Twenty dots in two rows. The first twelve are shaded blue.

### fig_015
- **title**: Number line quarters missing flag
- **type**: number_line
- **svg**:

```svg
<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Number line in quarters with flag at three quarters">
  <rect class="bg" x="0" y="0" width="480" height="170" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Place the flag</text>
  <line class="axis" x1="40" y1="100" x2="440" y2="100" stroke="#333" stroke-width="2"/>
  <line class="tick" x1="40" y1="90" x2="40" y2="110" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="128" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <line class="tick" x1="140" y1="90" x2="140" y2="110" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140" y="128" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">1/4</text>
  <line class="tick" x1="240" y1="90" x2="240" y2="110" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="240" y="128" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">2/4</text>
  <line class="tick" x1="340" y1="90" x2="340" y2="110" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="340" y="128" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3/4</text>
  <line class="tick" x1="440" y1="90" x2="440" y2="110" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="440" y="128" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <rect class="part missing" x="320" y="55" width="40" height="28" rx="4" fill="#fff3e0" stroke="#e65100" stroke-width="2" stroke-dasharray="4 3"/>
  <text class="label" x="340" y="75" font-size="16" text-anchor="middle" font-weight="bold" fill="#e65100">?</text>
  <line class="arrow" x1="340" y1="85" x2="340" y2="95" stroke="#e65100" stroke-width="1.5"/>
  <text class="label small" x="240" y="155" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The dashed flag marks one of the quarter points.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A number line from 0 to 1 marked in quarters. A dashed orange flag sits above the 3/4 mark.

### fig_016
- **title**: Subtract 7/10 minus 2/10
- **type**: add_subtract
- **svg**:

```svg
<svg viewBox="0 0 460 185" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Bars for subtracting two tenths from seven tenths">
  <rect class="bg" x="0" y="0" width="460" height="185" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Take away the shaded strip</text>
  <text class="label" x="30" y="55" font-size="13" text-anchor="start" font-weight="bold" fill="#333">7/10</text>
  <rect class="part piece shaded" x="70.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="106.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="142.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="178.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="214.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="250.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="286.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="322.0" y="38" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="358.0" y="38" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="394.0" y="38" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="95" font-size="13" text-anchor="start" font-weight="bold" fill="#333">−2/10</text>
  <rect class="part piece shaded" x="70.0" y="78" width="36.0" height="26" rx="0" fill="#ef9a9a" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="106.0" y="78" width="36.0" height="26" rx="0" fill="#ef9a9a" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="142.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="178.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="214.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="286.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="322.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="358.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="394.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="135" font-size="16" text-anchor="start" font-weight="bold" fill="#e65100">?</text>
  <rect class="part piece" x="70.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="106.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="142.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="178.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="214.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="286.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="322.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="358.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="394.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part missing" x="70" y="118" width="360" height="26" fill="none" stroke="#e65100" stroke-width="2" stroke-dasharray="5 3"/>
  <text class="label small" x="240" y="170" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Keep the denominator. Subtract only the tops.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A bar with 7 of 10 shaded green, a bar with 2 of 10 shaded red, and an empty dashed bar for the difference.

### fig_017
- **title**: Match equivalent to 2/3
- **type**: equivalent
- **svg**:

```svg
<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four bars find which matches two thirds">
  <rect class="bg" x="0" y="0" width="460" height="225" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which bar matches Bar 1?</text>
  <text class="label" x="40" y="55" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 1</text>
  <rect class="part piece shaded" x="100.0" y="38" width="106.7" height="28" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="206.7" y="38" width="106.7" height="28" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="313.3" y="38" width="106.7" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="95" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 2</text>
  <rect class="part piece shaded" x="100.0" y="78" width="53.3" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="153.3" y="78" width="53.3" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="206.7" y="78" width="53.3" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="260.0" y="78" width="53.3" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="313.3" y="78" width="53.3" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="366.7" y="78" width="53.3" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="135" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 3</text>
  <rect class="part piece shaded" x="100.0" y="118" width="53.3" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="153.3" y="118" width="53.3" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="206.7" y="118" width="53.3" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="260.0" y="118" width="53.3" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="313.3" y="118" width="53.3" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="366.7" y="118" width="53.3" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="175" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 4</text>
  <rect class="part piece shaded" x="100.0" y="158" width="80.0" height="28" rx="0" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="180.0" y="158" width="80.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="260.0" y="158" width="80.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="340.0" y="158" width="80.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="210" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All bars are the same length.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Four equal-length bars. Bar 1 shows 2 of 3 shaded. Bar 2 shows 4 of 6. Bar 3 shows 3 of 6. Bar 4 shows 1 of 4.

### fig_018
- **title**: 3 of 6 balls bowled
- **type**: word_problem
- **svg**:

```svg
<svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Six balls with first three shaded">
  <rect class="bg" x="0" y="0" width="420" height="170" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Balls in an over</text>
  <circle class="part marble" cx="60" cy="90" r="24" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="60" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <circle class="part marble" cx="120" cy="90" r="24" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="120" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <circle class="part marble" cx="180" cy="90" r="24" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="180" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <circle class="part marble" cx="240" cy="90" r="24" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="240" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <circle class="part marble" cx="300" cy="90" r="24" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="300" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <circle class="part marble" cx="360" cy="90" r="24" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="360" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <text class="label small" x="240" y="140" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Blue balls have already been bowled.</text>
  <text class="label small" x="240" y="156" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">An over has 6 balls in all.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Six cricket balls in a row numbered 1 to 6. The first three are shaded blue.

## Pictorial Set A

### PQA01
- **figure**: fig_001
- **stem**: Look at the Chocolate Bar. What fraction is **shaded**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 145" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Chocolate bar with 3 of 8 pieces shaded">
  <rect class="bg" x="0" y="0" width="440" height="145" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Chocolate Bar</text>
  <rect class="part piece shaded" x="40.0" y="50" width="45.0" height="55" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="85.0" y="50" width="45.0" height="55" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="130.0" y="50" width="45.0" height="55" rx="0" fill="#a1887f" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="175.0" y="50" width="45.0" height="55" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="220.0" y="50" width="45.0" height="55" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="265.0" y="50" width="45.0" height="55" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="310.0" y="50" width="45.0" height="55" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="355.0" y="50" width="45.0" height="55" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="220" y="130" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All pieces are the same size.</text>
</svg>
```

- **alt**: A bar divided into 8 equal pieces. The first 3 pieces are shaded brown.
- **options**:
  - A) 3/5
  - B) 5/8
  - C) 3/8
  - D) 8/3
- **answer**: C
- **explanation**: 3 pieces out of 8 equal pieces are shaded, so the fraction is 3/8.
- **skill**: fraction_basics
- **qtype**: recall
- **difficulty**: easy
- **replaces_hint**: fraction_basics (e.g. text Set A Q01)

### PQA02
- **figure**: fig_002
- **stem**: Look at the four panels. Which one shows exactly **1/2** shaded?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four diagrams which shows one half">
  <rect class="bg" x="0" y="0" width="480" height="260" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which shows 1/2 shaded?</text>
  <rect class="part panel" x="10" y="34" width="225" height="100" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <rect class="part piece shaded" x="50" y="60" width="50" height="55" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="100" y="60" width="100" height="55" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="34" width="225" height="100" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <path class="part slice shaded" d="M 357 90 L 357.0 58.0 A 32 32 0 0 1 384.7 106.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 357 90 L 384.7 106.0 A 32 32 0 0 1 329.3 106.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 357 90 L 329.3 106.0 A 32 32 0 0 1 357.0 58.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="10" y="144" width="225" height="100" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="166" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <path class="part slice shaded" d="M 122 200 L 122.0 168.0 A 32 32 0 0 1 122.0 232.0 Z" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 122 200 L 122.0 232.0 A 32 32 0 0 1 122.0 168.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part panel" x="245" y="144" width="225" height="100" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="166" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <rect class="part piece shaded" x="280.0" y="175" width="40.0" height="40" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="320.0" y="175" width="40.0" height="40" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="360.0" y="175" width="40.0" height="40" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="400.0" y="175" width="40.0" height="40" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
</svg>
```

- **alt**: Four panels. A has unequal parts with the small part shaded. B is a circle in 3 equal parts with 1 shaded. C is a circle in 2 equal parts with 1 shaded. D is a bar in 4 equal parts with 1 shaded.
- **options**:
  - A) Panel A
  - B) Panel B
  - C) Panel D
  - D) Panel C
- **answer**: D
- **explanation**: A half means 1 of 2 equal parts. Only Panel C shows that. A has unequal parts, B is 1/3 and D is 1/4.
- **skill**: fraction_basics
- **qtype**: application
- **difficulty**: easy
- **replaces_hint**: fraction_basics (e.g. text Set A Q05)

### PQA03
- **figure**: fig_003
- **stem**: Look at Parts of a fraction. What is the **denominator** of the fraction shown?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 185" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Fraction five eighths with numerator and denominator labels">
  <rect class="bg" x="0" y="0" width="440" height="185" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Parts of a fraction</text>
  <rect class="part card" x="150" y="40" width="140" height="110" rx="10" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label" x="220" y="78" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <line class="part fraction-bar" x1="175" y1="90" x2="265" y2="90" stroke="#333" stroke-width="3"/>
  <text class="label" x="220" y="125" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <line class="arrow" x1="300" y1="70" x2="310" y2="70" stroke="#e65100" stroke-width="2"/>
  <text class="label" x="360" y="74" font-size="13" text-anchor="middle" font-weight="bold" fill="#e65100">numerator</text>
  <line class="arrow" x1="300" y1="118" x2="310" y2="118" stroke="#1565c0" stroke-width="2"/>
  <text class="label" x="365" y="122" font-size="13" text-anchor="middle" font-weight="bold" fill="#1565c0">denominator</text>
  <text class="label small" x="220" y="170" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Top = how many · Bottom = equal parts in the whole</text>
</svg>
```

- **alt**: A large fraction card shows 5 over 8. An orange arrow labels the 5 as numerator. A blue arrow labels the 8 as denominator.
- **options**:
  - A) 8
  - B) 5
  - C) 13
  - D) 40
- **answer**: A
- **explanation**: The denominator is the bottom number. Here it is 8, the number of equal parts in the whole.
- **skill**: numerator_denominator
- **qtype**: recall
- **difficulty**: easy
- **replaces_hint**: numerator_denominator (e.g. text Set A Q02)

### PQA04
- **figure**: fig_004
- **stem**: Look at the four cards. Which one shows a **unit fraction**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 165" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four fraction cards find the unit fraction">
  <rect class="bg" x="0" y="0" width="480" height="165" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which is a unit fraction?</text>
  <rect class="part card" x="40" y="50" width="90" height="70" rx="8" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="52" y="72" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <text class="label" x="85" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">9/1</text>
  <rect class="part card" x="150" y="50" width="90" height="70" rx="8" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="162" y="72" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <text class="label" x="195" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">2/9</text>
  <rect class="part card" x="260" y="50" width="90" height="70" rx="8" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="272" y="72" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <text class="label" x="305" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">1/9</text>
  <rect class="part card" x="370" y="50" width="90" height="70" rx="8" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="382" y="72" font-size="14" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <text class="label" x="415" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#333">9/9</text>
  <text class="label small" x="240" y="150" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">A unit fraction has 1 as its numerator.</text>
</svg>
```

- **alt**: Four cards show 9/1, 2/9, 1/9 and 9/9.
- **options**:
  - A) Card A
  - B) Card B
  - C) Card C
  - D) Card D
- **answer**: C
- **explanation**: A unit fraction has 1 as its numerator. Only Card C shows 1/9.
- **skill**: fraction_types
- **qtype**: recall
- **difficulty**: easy
- **replaces_hint**: fraction_types (e.g. text Set A Q04)

### PQA05
- **figure**: fig_005
- **stem**: Look at Add the shaded parts. What is **2/7 + 3/7**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Two bars showing 2 of 7 and 3 of 7 to add">
  <rect class="bg" x="0" y="0" width="460" height="190" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Add the shaded parts</text>
  <text class="label" x="30" y="58" font-size="14" text-anchor="start" font-weight="bold" fill="#333">2/7</text>
  <rect class="part piece shaded" x="70.0" y="40" width="50.0" height="28" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="120.0" y="40" width="50.0" height="28" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="170.0" y="40" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="220.0" y="40" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="270.0" y="40" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="320.0" y="40" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="370.0" y="40" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="98" font-size="14" text-anchor="start" font-weight="bold" fill="#333">3/7</text>
  <rect class="part piece shaded" x="70.0" y="80" width="50.0" height="28" rx="0" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="120.0" y="80" width="50.0" height="28" rx="0" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="170.0" y="80" width="50.0" height="28" rx="0" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="220.0" y="80" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="270.0" y="80" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="320.0" y="80" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="370.0" y="80" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="138" font-size="16" text-anchor="start" font-weight="bold" fill="#e65100">?</text>
  <rect class="part piece" x="70.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="120.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="170.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="220.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="270.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="320.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="370.0" y="120" width="50.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part missing" x="70" y="120" width="350" height="28" rx="0" fill="none" stroke="#e65100" stroke-width="2" stroke-dasharray="5 3"/>
  <text class="label small" x="240" y="175" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are cut into 7 equal parts.</text>
</svg>
```

- **alt**: A bar with 2 of 7 parts shaded green, a bar with 3 of 7 parts shaded blue, and an empty 7-part bar with a dashed outline for the sum.
- **options**:
  - A) 5/14
  - B) 5/7
  - C) 6/7
  - D) 1/7
- **answer**: B
- **explanation**: For like fractions, add the numerators and keep the denominator: 2 + 3 = 5, so 5/7.
- **skill**: add_subtract
- **qtype**: application
- **difficulty**: medium
- **replaces_hint**: add_subtract (e.g. text Set A Q06)

### PQA06
- **figure**: fig_006
- **stem**: Look at the same-size bars. Which shaded fraction is **greater**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 165" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Bars comparing five ninths and four ninths">
  <rect class="bg" x="0" y="0" width="460" height="165" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Same-size bars</text>
  <text class="label" x="30" y="58" font-size="14" text-anchor="start" font-weight="bold" fill="#333">5/9</text>
  <rect class="part piece shaded" x="70.0" y="40" width="40.0" height="30" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="110.0" y="40" width="40.0" height="30" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="150.0" y="40" width="40.0" height="30" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="190.0" y="40" width="40.0" height="30" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="230.0" y="40" width="40.0" height="30" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="270.0" y="40" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="310.0" y="40" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="350.0" y="40" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="390.0" y="40" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="108" font-size="14" text-anchor="start" font-weight="bold" fill="#333">4/9</text>
  <rect class="part piece shaded" x="70.0" y="90" width="40.0" height="30" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="110.0" y="90" width="40.0" height="30" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="150.0" y="90" width="40.0" height="30" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="190.0" y="90" width="40.0" height="30" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="230.0" y="90" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="270.0" y="90" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="310.0" y="90" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="350.0" y="90" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="390.0" y="90" width="40.0" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="150" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are the same length with equal parts.</text>
</svg>
```

- **alt**: Two equal-length bars. The top has 5 of 9 parts shaded. The bottom has 4 of 9 parts shaded.
- **options**:
  - A) 4/9
  - B) 5/9
  - C) They are equal
  - D) Cannot tell
- **answer**: B
- **explanation**: When denominators match, the larger numerator wins. 5/9 > 4/9.
- **skill**: compare
- **qtype**: application
- **difficulty**: medium
- **replaces_hint**: compare (e.g. text Set A Q07)

### PQA07
- **figure**: fig_007
- **stem**: Look at Same amount shaded? Bars 1, 2 and 3 all show the same amount. Which list names those equivalent fractions?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 185" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Three bars showing equivalent halves">
  <rect class="bg" x="0" y="0" width="460" height="185" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Same amount shaded?</text>
  <text class="label" x="40" y="55" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 1</text>
  <rect class="part piece shaded" x="100.0" y="38" width="160.0" height="28" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="260.0" y="38" width="160.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="95" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 2</text>
  <rect class="part piece shaded" x="100.0" y="78" width="80.0" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="180.0" y="78" width="80.0" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="260.0" y="78" width="80.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="340.0" y="78" width="80.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="135" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 3</text>
  <rect class="part piece shaded" x="100.0" y="118" width="40.0" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="140.0" y="118" width="40.0" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="180.0" y="118" width="40.0" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="220.0" y="118" width="40.0" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="260.0" y="118" width="40.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="300.0" y="118" width="40.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="340.0" y="118" width="40.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="380.0" y="118" width="40.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="170" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All three bars are the same length.</text>
</svg>
```

- **alt**: Three equal-length bars. Bar 1 shows 1 of 2 shaded. Bar 2 shows 2 of 4 shaded. Bar 3 shows 4 of 8 shaded.
- **options**:
  - A) 1/2, 2/4, 4/8
  - B) 1/2, 1/4, 1/8
  - C) 2/2, 4/4, 8/8
  - D) 1/2, 3/4, 5/8
- **answer**: A
- **explanation**: Bar 1 is 1/2, Bar 2 is 2/4 and Bar 3 is 4/8. Multiplying top and bottom by the same number keeps the value equal.
- **skill**: equivalent
- **qtype**: pattern
- **difficulty**: medium
- **replaces_hint**: equivalent (e.g. text Set A Q08)

### PQA08
- **figure**: fig_008
- **stem**: Look at Laddoos on a plate. What fraction of the laddoos are marked?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 400 195" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Ten laddoos with four marked">
  <rect class="bg" x="0" y="0" width="400" height="195" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Laddoos on a plate</text>
  <circle class="part marble" cx="50" cy="50" r="22" fill="#ffcc80" stroke="#e65100" stroke-width="2.5"/>
  <circle class="part marble" cx="120" cy="50" r="22" fill="#ffcc80" stroke="#e65100" stroke-width="2.5"/>
  <circle class="part marble" cx="190" cy="50" r="22" fill="#ffcc80" stroke="#e65100" stroke-width="2.5"/>
  <circle class="part marble" cx="260" cy="50" r="22" fill="#ffcc80" stroke="#e65100" stroke-width="2.5"/>
  <circle class="part marble" cx="330" cy="50" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="50" cy="110" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="120" cy="110" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="190" cy="110" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="260" cy="110" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="330" cy="110" r="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="180" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Orange rings mark the chosen laddoos.</text>
</svg>
```

- **alt**: Ten round laddoos in two rows. The first four have orange rings and a warmer fill.
- **options**:
  - A) 4/6
  - B) 6/10
  - C) 10/4
  - D) 4/10
- **answer**: D
- **explanation**: 4 of the 10 laddoos are marked, so the fraction is 4/10.
- **skill**: fraction_of_collection
- **qtype**: application
- **difficulty**: hard
- **replaces_hint**: fraction_of_collection (e.g. text Set A Q09)

### PQA09
- **figure**: fig_009
- **stem**: Look at the number line. Point P is at which fraction?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Number line from 0 to 1 in sixths with point P">
  <rect class="bg" x="0" y="0" width="480" height="160" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Fractions on a number line</text>
  <line class="axis" x1="40" y1="90" x2="440" y2="90" stroke="#333" stroke-width="2"/>
  <polygon class="arrow" points="446,90 438,85 438,95" fill="#333"/>
  <line class="tick" x1="40.0" y1="80" x2="40.0" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <line class="tick" x1="106.7" y1="80" x2="106.7" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="106.7" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">1/6</text>
  <line class="tick" x1="173.3" y1="80" x2="173.3" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="173.3" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">2/6</text>
  <line class="tick" x1="240.0" y1="80" x2="240.0" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="240.0" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3/6</text>
  <line class="tick" x1="306.7" y1="80" x2="306.7" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="306.7" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">4/6</text>
  <line class="tick" x1="373.3" y1="80" x2="373.3" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="373.3" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">5/6</text>
  <line class="tick" x1="440.0" y1="80" x2="440.0" y2="100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="440.0" y="118" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <circle class="part point" cx="306.7" cy="90" r="8" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="306.7" y="60" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">P</text>
  <text class="label small" x="240" y="145" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The line from 0 to 1 is split into 6 equal parts.</text>
</svg>
```

- **alt**: A number line from 0 to 1 with marks at each sixth. A blue point P sits at the 4/6 mark.
- **options**:
  - A) 2/6
  - B) 4/6
  - C) 5/6
  - D) 3/6
- **answer**: B
- **explanation**: The line is split into 6 equal parts. P sits on the fourth mark after 0, so P is at 4/6.
- **skill**: number_line
- **qtype**: logical_reasoning
- **difficulty**: hard
- **replaces_hint**: number_line (e.g. text Set A Q16)

## Pictorial Set B

### PQB01
- **figure**: fig_010
- **stem**: Look at Pizza slices left. What fraction of the pizza is still on the plate?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Pizza with 5 of 8 slices shaded">
  <rect class="bg" x="0" y="0" width="440" height="220" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Pizza slices left</text>
  <path class="part slice shaded" d="M 220 115 L 220.0 45.0 A 70 70 0 0 1 269.5 65.5 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 115 L 269.5 65.5 A 70 70 0 0 1 290.0 115.0 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 115 L 290.0 115.0 A 70 70 0 0 1 269.5 164.5 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 115 L 269.5 164.5 A 70 70 0 0 1 220.0 185.0 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 220 115 L 220.0 185.0 A 70 70 0 0 1 170.5 164.5 Z" fill="#ffcc80" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 220 115 L 170.5 164.5 A 70 70 0 0 1 150.0 115.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 220 115 L 150.0 115.0 A 70 70 0 0 1 170.5 65.5 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 220 115 L 170.5 65.5 A 70 70 0 0 1 220.0 45.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="220" y="205" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Shaded slices are still on the plate.</text>
</svg>
```

- **alt**: A circle divided into 8 equal slices. Five slices are shaded.
- **options**:
  - A) 3/8
  - B) 5/8
  - C) 5/3
  - D) 8/5
- **answer**: B
- **explanation**: 5 of the 8 equal slices are shaded as left on the plate, so 5/8 remains.
- **skill**: fraction_basics
- **qtype**: recall
- **difficulty**: easy
- **replaces_hint**: fraction_basics (e.g. text Set B Q01)

### PQB02
- **figure**: fig_011
- **stem**: Look at More than one whole. How many quarters are shaded in all, and what mixed number is that?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 420 225" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Seven quarter pieces filling one whole and three quarters">
  <rect class="bg" x="0" y="0" width="420" height="225" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">More than one whole</text>
  <path class="part slice shaded" d="M 120 110 L 120.0 55.0 A 55 55 0 0 1 175.0 110.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 110 L 175.0 110.0 A 55 55 0 0 1 120.0 165.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 110 L 120.0 165.0 A 55 55 0 0 1 65.0 110.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 120 110 L 65.0 110.0 A 55 55 0 0 1 120.0 55.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 300 110 L 300.0 55.0 A 55 55 0 0 1 355.0 110.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 300 110 L 355.0 110.0 A 55 55 0 0 1 300.0 165.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice shaded" d="M 300 110 L 300.0 165.0 A 55 55 0 0 1 245.0 110.0 Z" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <path class="part slice" d="M 300 110 L 245.0 110.0 A 55 55 0 0 1 300.0 55.0 Z" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="120" y="185" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">4 quarters</text>
  <text class="label" x="300" y="185" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3 quarters</text>
  <text class="label small" x="240" y="210" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Each circle is one whole cut into 4 equal parts.</text>
</svg>
```

- **alt**: Two circles each cut into 4 equal parts. The first circle is fully shaded. The second has 3 parts shaded.
- **options**:
  - A) 7/4 = 1 3/4
  - B) 7/4 = 1 1/4
  - C) 3/4 = 3/4
  - D) 4/4 = 1
- **answer**: A
- **explanation**: 4 quarters + 3 quarters = 7/4. That is 1 whole and 3/4 left over, written 1 3/4.
- **skill**: fraction_types
- **qtype**: application
- **difficulty**: easy
- **replaces_hint**: fraction_types (e.g. text Set B Q10)

### PQB03
- **figure**: fig_012
- **stem**: Look at Simplify the shaded fraction. What is **6/8** in simplest form?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 155" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Bar with 6 of 8 shaded to simplify">
  <rect class="bg" x="0" y="0" width="480" height="155" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Simplify the shaded fraction</text>
  <rect class="part piece shaded" x="40.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="90.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="140.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="190.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="240.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="290.0" y="50" width="50.0" height="45" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="340.0" y="50" width="50.0" height="45" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="390.0" y="50" width="50.0" height="45" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="220" y="125" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">6 pieces are shaded out of 8 equal pieces.</text>
  <text class="label small" x="220" y="142" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Divide top and bottom by the same number.</text>
</svg>
```

- **alt**: A bar divided into 8 equal pieces with the first 6 shaded.
- **options**:
  - A) 6/4
  - B) 3/8
  - C) 3/4
  - D) 2/8
- **answer**: C
- **explanation**: Divide top and bottom by 2: 6 ÷ 2 = 3 and 8 ÷ 2 = 4, so 3/4.
- **skill**: simplest_form
- **qtype**: application
- **difficulty**: easy
- **replaces_hint**: simplest_form (e.g. text Set B Q11)

### PQB04
- **figure**: fig_013
- **stem**: Look at the two bars. Which shaded fraction is **greater**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Bars comparing one fifth and one eighth">
  <rect class="bg" x="0" y="0" width="460" height="160" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Same numerator, different pieces</text>
  <text class="label" x="30" y="58" font-size="14" text-anchor="start" font-weight="bold" fill="#333">1/5</text>
  <rect class="part piece shaded" x="70.0" y="40" width="72.0" height="28" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="142.0" y="40" width="72.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="214.0" y="40" width="72.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="286.0" y="40" width="72.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="358.0" y="40" width="72.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="108" font-size="14" text-anchor="start" font-weight="bold" fill="#333">1/8</text>
  <rect class="part piece shaded" x="70.0" y="90" width="45.0" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="115.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="160.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="205.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="295.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="340.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="385.0" y="90" width="45.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="145" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Both bars are the same length.</text>
</svg>
```

- **alt**: Two equal-length bars. The top is cut into 5 with 1 shaded. The bottom is cut into 8 with 1 shaded.
- **options**:
  - A) 1/8
  - B) 1/5
  - C) They are equal
  - D) Cannot tell
- **answer**: B
- **explanation**: With the same numerator, the smaller denominator means larger pieces. 1/5 > 1/8.
- **skill**: compare
- **qtype**: logical_reasoning
- **difficulty**: medium
- **replaces_hint**: compare (e.g. text Set B Q07)

### PQB05
- **figure**: fig_014
- **stem**: Look at Take 3/5 of the dots. How many dots are shaded, and what is 3/5 of 20?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Twenty dots with twelve shaded">
  <rect class="bg" x="0" y="0" width="440" height="170" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Take 3/5 of the dots</text>
  <circle class="part marble" cx="40" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="80" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="120" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="160" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="200" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="240" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="280" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="320" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="360" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="400" cy="50" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="40" cy="95" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="80" cy="95" r="14" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="120" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="160" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="200" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="240" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="280" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="320" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="360" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part marble" cx="400" cy="95" r="14" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="155" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">20 dots in all. Blue dots show 3 out of 5 equal groups.</text>
</svg>
```

- **alt**: Twenty dots in two rows. The first twelve are shaded blue.
- **options**:
  - A) 10
  - B) 15
  - C) 4
  - D) 12
- **answer**: D
- **explanation**: 20 ÷ 5 = 4 dots in each group. Three groups make 3 × 4 = 12.
- **skill**: fraction_of_collection
- **qtype**: multi_step
- **difficulty**: medium
- **replaces_hint**: fraction_of_collection (e.g. text Set B Q09)

### PQB06
- **figure**: fig_015
- **stem**: Look at Place the flag. The dashed flag sits at which mark?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Number line in quarters with flag at three quarters">
  <rect class="bg" x="0" y="0" width="480" height="170" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Place the flag</text>
  <line class="axis" x1="40" y1="100" x2="440" y2="100" stroke="#333" stroke-width="2"/>
  <line class="tick" x1="40" y1="90" x2="40" y2="110" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="128" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <line class="tick" x1="140" y1="90" x2="140" y2="110" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140" y="128" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">1/4</text>
  <line class="tick" x1="240" y1="90" x2="240" y2="110" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="240" y="128" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">2/4</text>
  <line class="tick" x1="340" y1="90" x2="340" y2="110" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="340" y="128" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3/4</text>
  <line class="tick" x1="440" y1="90" x2="440" y2="110" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="440" y="128" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <rect class="part missing" x="320" y="55" width="40" height="28" rx="4" fill="#fff3e0" stroke="#e65100" stroke-width="2" stroke-dasharray="4 3"/>
  <text class="label" x="340" y="75" font-size="16" text-anchor="middle" font-weight="bold" fill="#e65100">?</text>
  <line class="arrow" x1="340" y1="85" x2="340" y2="95" stroke="#e65100" stroke-width="1.5"/>
  <text class="label small" x="240" y="155" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The dashed flag marks one of the quarter points.</text>
</svg>
```

- **alt**: A number line from 0 to 1 marked in quarters. A dashed orange flag sits above the 3/4 mark.
- **options**:
  - A) 1/4
  - B) 2/4
  - C) 3/4
  - D) 1
- **answer**: C
- **explanation**: The flag is above the third quarter mark after 0, which is 3/4.
- **skill**: number_line
- **qtype**: application
- **difficulty**: medium
- **replaces_hint**: number_line (e.g. text Set B Q15)

### PQB07
- **figure**: fig_016
- **stem**: Look at Take away the shaded strip. What is **7/10 − 2/10**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 185" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Bars for subtracting two tenths from seven tenths">
  <rect class="bg" x="0" y="0" width="460" height="185" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Take away the shaded strip</text>
  <text class="label" x="30" y="55" font-size="13" text-anchor="start" font-weight="bold" fill="#333">7/10</text>
  <rect class="part piece shaded" x="70.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="106.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="142.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="178.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="214.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="250.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="286.0" y="38" width="36.0" height="26" rx="0" fill="#81c784" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="322.0" y="38" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="358.0" y="38" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="394.0" y="38" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="95" font-size="13" text-anchor="start" font-weight="bold" fill="#333">−2/10</text>
  <rect class="part piece shaded" x="70.0" y="78" width="36.0" height="26" rx="0" fill="#ef9a9a" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="106.0" y="78" width="36.0" height="26" rx="0" fill="#ef9a9a" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="142.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="178.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="214.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="286.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="322.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="358.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="394.0" y="78" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30" y="135" font-size="16" text-anchor="start" font-weight="bold" fill="#e65100">?</text>
  <rect class="part piece" x="70.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="106.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="142.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="178.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="214.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="250.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="286.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="322.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="358.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="394.0" y="118" width="36.0" height="26" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part missing" x="70" y="118" width="360" height="26" fill="none" stroke="#e65100" stroke-width="2" stroke-dasharray="5 3"/>
  <text class="label small" x="240" y="170" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Keep the denominator. Subtract only the tops.</text>
</svg>
```

- **alt**: A bar with 7 of 10 shaded green, a bar with 2 of 10 shaded red, and an empty dashed bar for the difference.
- **options**:
  - A) 5/0
  - B) 5/20
  - C) 9/10
  - D) 5/10
- **answer**: D
- **explanation**: Subtract the numerators and keep the denominator: 7 − 2 = 5, so 5/10.
- **skill**: add_subtract
- **qtype**: application
- **difficulty**: medium
- **replaces_hint**: add_subtract (e.g. text Set B Q06)

### PQB08
- **figure**: fig_017
- **stem**: Look at Which bar matches Bar 1? Bar 1 shows 2/3. Which other bar shows the **same amount**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four bars find which matches two thirds">
  <rect class="bg" x="0" y="0" width="460" height="225" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which bar matches Bar 1?</text>
  <text class="label" x="40" y="55" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 1</text>
  <rect class="part piece shaded" x="100.0" y="38" width="106.7" height="28" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="206.7" y="38" width="106.7" height="28" rx="0" fill="#ffab91" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="313.3" y="38" width="106.7" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="95" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 2</text>
  <rect class="part piece shaded" x="100.0" y="78" width="53.3" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="153.3" y="78" width="53.3" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="206.7" y="78" width="53.3" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="260.0" y="78" width="53.3" height="28" rx="0" fill="#80cbc4" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="313.3" y="78" width="53.3" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="366.7" y="78" width="53.3" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="135" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 3</text>
  <rect class="part piece shaded" x="100.0" y="118" width="53.3" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="153.3" y="118" width="53.3" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece shaded" x="206.7" y="118" width="53.3" height="28" rx="0" fill="#ce93d8" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="260.0" y="118" width="53.3" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="313.3" y="118" width="53.3" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="366.7" y="118" width="53.3" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40" y="175" font-size="13" text-anchor="start" font-weight="bold" fill="#1565c0">Bar 4</text>
  <rect class="part piece shaded" x="100.0" y="158" width="80.0" height="28" rx="0" fill="#a5d6a7" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="180.0" y="158" width="80.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="260.0" y="158" width="80.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part piece" x="340.0" y="158" width="80.0" height="28" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label small" x="240" y="210" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All bars are the same length.</text>
</svg>
```

- **alt**: Four equal-length bars. Bar 1 shows 2 of 3 shaded. Bar 2 shows 4 of 6. Bar 3 shows 3 of 6. Bar 4 shows 1 of 4.
- **options**:
  - A) Bar 2
  - B) Bar 3
  - C) Bar 4
  - D) None of them
- **answer**: A
- **explanation**: 2/3 = 4/6, so Bar 2 matches. Bar 3 is 3/6 = 1/2 and Bar 4 is 1/4.
- **skill**: equivalent
- **qtype**: logical_reasoning
- **difficulty**: hard
- **replaces_hint**: equivalent (e.g. text Set B Q08)

### PQB09
- **figure**: fig_018
- **stem**: Look at Balls in an over. What fraction of the over is done, in **simplest form**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Six balls with first three shaded">
  <rect class="bg" x="0" y="0" width="420" height="170" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Balls in an over</text>
  <circle class="part marble" cx="60" cy="90" r="24" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="60" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <circle class="part marble" cx="120" cy="90" r="24" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="120" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <circle class="part marble" cx="180" cy="90" r="24" fill="#64b5f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="180" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <circle class="part marble" cx="240" cy="90" r="24" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="240" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <circle class="part marble" cx="300" cy="90" r="24" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="300" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <circle class="part marble" cx="360" cy="90" r="24" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="360" y="96" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <text class="label small" x="240" y="140" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Blue balls have already been bowled.</text>
  <text class="label small" x="240" y="156" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">An over has 6 balls in all.</text>
</svg>
```

- **alt**: Six cricket balls in a row numbered 1 to 6. The first three are shaded blue.
- **options**:
  - A) 3/6
  - B) 1/2
  - C) 2/3
  - D) 6/3
- **answer**: B
- **explanation**: 3 out of 6 balls are done, so 3/6. Dividing top and bottom by 3 gives 1/2.
- **skill**: word_problem
- **qtype**: multi_step
- **difficulty**: hard
- **replaces_hint**: word_problem (e.g. text Set B Q20)

## Answer Key

### Pictorial Set A
| Q# | Answer | Correct value | figure | skill | qtype | difficulty |
|----|--------|---------------|--------|-------|-------|------------|
| PQA01 | C | 3/8 | fig_001 | fraction_basics | recall | easy |
| PQA02 | D | Panel C | fig_002 | fraction_basics | application | easy |
| PQA03 | A | 8 | fig_003 | numerator_denominator | recall | easy |
| PQA04 | C | Card C | fig_004 | fraction_types | recall | easy |
| PQA05 | B | 5/7 | fig_005 | add_subtract | application | medium |
| PQA06 | B | 5/9 | fig_006 | compare | application | medium |
| PQA07 | A | 1/2, 2/4, 4/8 | fig_007 | equivalent | pattern | medium |
| PQA08 | D | 4/10 | fig_008 | fraction_of_collection | application | hard |
| PQA09 | B | 4/6 | fig_009 | number_line | logical_reasoning | hard |

Letter spread: A=2, B=3, C=2, D=2 · Difficulty: easy=4, medium=3, hard=2

### Pictorial Set B
| Q# | Answer | Correct value | figure | skill | qtype | difficulty |
|----|--------|---------------|--------|-------|-------|------------|
| PQB01 | B | 5/8 | fig_010 | fraction_basics | recall | easy |
| PQB02 | A | 7/4 = 1 3/4 | fig_011 | fraction_types | application | easy |
| PQB03 | C | 3/4 | fig_012 | simplest_form | application | easy |
| PQB04 | B | 1/5 | fig_013 | compare | logical_reasoning | medium |
| PQB05 | D | 12 | fig_014 | fraction_of_collection | multi_step | medium |
| PQB06 | C | 3/4 | fig_015 | number_line | application | medium |
| PQB07 | D | 5/10 | fig_016 | add_subtract | application | medium |
| PQB08 | A | Bar 2 | fig_017 | equivalent | logical_reasoning | hard |
| PQB09 | B | 1/2 | fig_018 | word_problem | multi_step | hard |

Letter spread: A=2, B=3, C=2, D=2 · Difficulty: easy=3, medium=4, hard=2

**Combined (18):** A=4, B=6, C=4, D=4


### A/B variety check
| Skill | Set A item | Set B item |
|-------|------------|------------|
| fraction_basics | PQA01 shade count · PQA02 identify 1/2 | PQB01 pizza remaining |
| numerator_denominator | PQA03 read denominator | — |
| fraction_types | PQA04 unit fraction | PQB02 improper → mixed |
| add_subtract | PQA05 add like fractions | PQB07 subtract like fractions |
| compare | PQA06 same denominator | PQB04 same numerator |
| equivalent | PQA07 name three equivalents | PQB08 match bar to 2/3 |
| fraction_of_collection | PQA08 4 of 10 | PQB05 3/5 of 20 |
| number_line | PQA09 read point on sixths | PQB06 place flag on quarters |
| simplest_form / word | — | PQB03 simplify 6/8 · PQB09 over in simplest form |

## Engineering notes
- **Embedding**: Each MCQ has a fenced ```svg``` block under `**Diagram (SVG):**`. Use inline SVG markup; do not load as `<img src>`.
- **Self-contained**: Every SVG has a `viewBox` and `xmlns`, no external assets or `<script>`.
- **Originality**: All figures and stems are original for Mindstrong. No past-paper scans or traced layouts.
