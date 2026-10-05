# Grade 4 Maths — Chapter 1: Large Numbers — Pictorial Addendum

## Meta
- grade: 4
- subject: Maths
- chapter_id: g4-maths-ch01-large-numbers
- chapter_title: Large Numbers
- parent_file: chapter-01-large-numbers.md
- content_type: original_sof_style_pictorial
- render: svg_css_in_app
- visual_target: 30-40% of practice items
- item_counts: Set A = 9 pictorial MCQs, Set B = 9 pictorial MCQs, figures = 18
- diagram_format: every MCQ embeds its own `**Diagram (SVG):**` block (inline, self-contained); the Figure Library holds the identical SVG for reuse
- svg_class_names: `bg`, `title`, `label`, `label small`, `value`, `digit`, `option-label`, `part`, `header`, `cell`, `block`, `tile`, `bar`, `card`, `missing`, `axis`, `tick`, `minor`, `midpoint`, `point`, `point-label`, `arrow`, `highlight`, `op`
- new_skill_tag: `number_line` (reading a point on a number line); all other skill tags match the text chapter
- number_format: Indian grouping (all values are below 1,00,000, so they look the same as international grouping, e.g. 46,820)

## Figure Library

Each figure is original, built only from SVG shapes and text. Every pictorial MCQ below embeds the same SVG inline.

### fig_001
- **title**: Place-value chart 73,058
- **type**: place_value_chart
- **svg**:

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Place Value Chart">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Place Value Chart</text>
  <rect class="part header" x="20" y="36" width="80" height="40" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="60.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Ten Thousands</text>
  <text class="label small" x="60.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(TTh)</text>
  <rect class="part cell" x="20" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="42.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="60.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <rect class="part header" x="100" y="36" width="80" height="40" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Thousands</text>
  <text class="label small" x="140.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(Th)</text>
  <rect class="part cell" x="100" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="122.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="140.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <rect class="part header" x="180" y="36" width="80" height="40" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="220.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Hundreds</text>
  <text class="label small" x="220.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(H)</text>
  <rect class="part cell" x="180" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="202.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="220.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="260" y="36" width="80" height="40" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="300.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Tens</text>
  <text class="label small" x="300.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(T)</text>
  <rect class="part cell" x="260" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="282.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="300.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <rect class="part header" x="340" y="36" width="80" height="40" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="380.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Ones</text>
  <text class="label small" x="380.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(O)</text>
  <rect class="part cell" x="340" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="362.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="380.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">8</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: A place value chart with five columns: Ten Thousands 7, Thousands 3, Hundreds 0, Tens 5, Ones 8.

### fig_002
- **title**: Expanded-form blocks 50,000+3,000+20+4
- **type**: block_expanded
- **svg**:

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Join the blocks">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Join the blocks</text>
  <rect class="part block" x="21.0" y="38.0" width="120" height="82.0" rx="4" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="81.0" y="84.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">50,000</text>
  <text class="label small" x="81.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Ten Thousands</text>
  <text class="label op" x="154.0" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="167.0" y="48.5" width="90" height="71.5" rx="4" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="212.0" y="89.25" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">3,000</text>
  <text class="label small" x="212.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Thousands</text>
  <text class="label op" x="270.0" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="283.0" y="59.0" width="60" height="61.0" rx="4" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="313.0" y="94.5" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">20</text>
  <text class="label small" x="313.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Tens</text>
  <text class="label op" x="356.0" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="369.0" y="62.5" width="50" height="57.5" rx="4" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="394.0" y="96.25" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <text class="label small" x="394.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Ones</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: Four blocks joined with plus signs: 50,000 plus 3,000 plus 20 plus 4, getting smaller from left to right.

### fig_003
- **title**: Digit tiles 4, 9, 2, 7
- **type**: digit_tiles
- **svg**:

```svg
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Digit Tiles">
  <rect class="bg" x="0" y="0" width="320" height="130" fill="#fff"/>
  <text class="title" x="160.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Digit Tiles</text>
  <rect class="part tile" x="45.0" y="38" width="50" height="56" rx="8" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="digit" x="70.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part tile" x="105.0" y="38" width="50" height="56" rx="8" fill="#e8f5e9" stroke="#333" stroke-width="2"/>
  <text class="digit" x="130.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <rect class="part tile" x="165.0" y="38" width="50" height="56" rx="8" fill="#fff8e1" stroke="#333" stroke-width="2"/>
  <text class="digit" x="190.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <rect class="part tile" x="225.0" y="38" width="50" height="56" rx="8" fill="#fce4ec" stroke="#333" stroke-width="2"/>
  <text class="digit" x="250.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <text class="label small" x="160.0" y="120" font-size="12" text-anchor="middle" font-weight="normal" fill="#666">Use each tile once.</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: Four digit tiles showing 4, 9, 2 and 7.

### fig_004
- **title**: Bar chart: visitors at four fairs
- **type**: bar_compare
- **svg**:

```svg
<svg viewBox="0 0 440 236" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Visitors on Day 1">
  <rect class="bg" x="0" y="0" width="440" height="236" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Visitors on Day 1</text>
  <line class="axis" x1="130" y1="36" x2="130" y2="222" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="61" font-size="15" text-anchor="start" font-weight="bold" fill="#333">A</text>
  <text class="label" x="124" y="61" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Pushkar Mela</text>
  <rect class="part bar" x="130" y="44" width="197.7" height="26" rx="2" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="333.7" y="62" font-size="13" text-anchor="start" font-weight="bold" fill="#333">46,280</text>
  <text class="label option-label" x="14" y="105" font-size="15" text-anchor="start" font-weight="bold" fill="#333">B</text>
  <text class="label" x="124" y="105" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Hornbill Fest</text>
  <rect class="part bar" x="130" y="88" width="196.5" height="26" rx="2" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="332.5" y="106" font-size="13" text-anchor="start" font-weight="bold" fill="#333">45,990</text>
  <text class="label option-label" x="14" y="149" font-size="15" text-anchor="start" font-weight="bold" fill="#333">C</text>
  <text class="label" x="124" y="149" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Surajkund Mela</text>
  <rect class="part bar" x="130" y="132" width="196.8" height="26" rx="2" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="332.8" y="150" font-size="13" text-anchor="start" font-weight="bold" fill="#333">46,082</text>
  <text class="label option-label" x="14" y="193" font-size="15" text-anchor="start" font-weight="bold" fill="#333">D</text>
  <text class="label" x="124" y="193" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Dasara Fair</text>
  <rect class="part bar" x="130" y="176" width="200.0" height="26" rx="2" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="336.0" y="194" font-size="13" text-anchor="start" font-weight="bold" fill="#333">46,820</text>
  <text class="label small" x="220.0" y="234" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Number of visitors</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: Horizontal bar chart of Day 1 visitors. A Pushkar Mela 46,280; B Hornbill Fest 45,990; C Surajkund Mela 46,082; D Dasara Fair 46,820. Bars look almost equal in length.

### fig_005
- **title**: Number line 20,000 to 30,000 with point P
- **type**: number_line
- **svg**:

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Where is P?">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Where is P?</text>
  <line class="axis" x1="18" y1="92" x2="422" y2="92" stroke="#333" stroke-width="2"/>
  <polygon class="arrow" points="428,92 420,87 420,97" fill="#333"/>
  <polygon class="arrow" points="12,92 20,87 20,97" fill="#333"/>
  <line class="tick" x1="30.0" y1="82" x2="30.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">20,000</text>
  <line class="tick" x1="106.0" y1="82" x2="106.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="182.0" y1="82" x2="182.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="258.0" y1="82" x2="258.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="334.0" y1="82" x2="334.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="410.0" y1="82" x2="410.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="410.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">30,000</text>
  <circle class="part point" cx="334.0" cy="92" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="334.0" y1="52" x2="334.0" y2="80" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="334.0,83 329.0,75 339.0,75" fill="#333"/>
  <text class="label point-label" x="334.0" y="48" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">P</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: A number line from 20,000 to 30,000 split into 5 equal jumps; only the ends are labelled. Point P is on the fourth tick from the left.

### fig_006
- **title**: Rounding line 3,800 to 3,900
- **type**: number_line
- **svg**:

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Round to the nearest hundred">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Round to the nearest hundred</text>
  <line class="axis" x1="18" y1="92" x2="422" y2="92" stroke="#333" stroke-width="2"/>
  <polygon class="arrow" points="428,92 420,87 420,97" fill="#333"/>
  <polygon class="arrow" points="12,92 20,87 20,97" fill="#333"/>
  <line class="tick" x1="30.0" y1="82" x2="30.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3,800</text>
  <line class="tick" x1="68.0" y1="82" x2="68.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="106.0" y1="82" x2="106.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="144.0" y1="82" x2="144.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="182.0" y1="82" x2="182.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="220.0" y1="82" x2="220.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="258.0" y1="82" x2="258.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="296.0" y1="82" x2="296.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="334.0" y1="82" x2="334.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="372.0" y1="82" x2="372.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="410.0" y1="82" x2="410.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="410.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3,900</text>
  <line class="part midpoint" x1="220.0" y1="70" x2="220.0" y2="106" stroke="#e65100" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text class="label midpoint-label" x="220.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#e65100">3,850</text>
  <text class="label small" x="220.0" y="134" font-size="10" text-anchor="middle" font-weight="normal" fill="#e65100">(halfway)</text>
  <circle class="part point" cx="265.6" cy="92" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="265.6" y1="52" x2="265.6" y2="80" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="265.6,83 260.6,75 270.6,75" fill="#333"/>
  <text class="label point-label" x="265.6" y="48" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">3,862</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: A number line from 3,800 to 3,900 with ticks every 10. The halfway mark 3,850 is dashed in orange. A ball marked 3,862 sits just past the halfway mark.

### fig_007
- **title**: Pattern strip 24,600 … 26,600
- **type**: other
- **svg**:

```svg
<svg viewBox="0 0 508 100" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Find the missing card">
  <rect class="bg" x="0" y="0" width="508" height="100" fill="#fff"/>
  <text class="title" x="254.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Find the missing card</text>
  <rect class="part card" x="15" y="40" width="78" height="40" rx="6" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="54.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">24,600</text>
  <line class="arrow" x1="96" y1="60" x2="110" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="114,60 108,56 108,64" fill="#333"/>
  <rect class="part card" x="115" y="40" width="78" height="40" rx="6" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="154.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">25,100</text>
  <line class="arrow" x1="196" y1="60" x2="210" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="214,60 208,56 208,64" fill="#333"/>
  <rect class="part card" x="215" y="40" width="78" height="40" rx="6" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="254.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">25,600</text>
  <line class="arrow" x1="296" y1="60" x2="310" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="314,60 308,56 308,64" fill="#333"/>
  <rect class="part card missing" x="315" y="40" width="78" height="40" rx="6" fill="#fff3e0" stroke="#333" stroke-width="2" stroke-dasharray="5 3"/>
  <text class="label value" x="354.0" y="66" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">?</text>
  <line class="arrow" x1="396" y1="60" x2="410" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="414,60 408,56 408,64" fill="#333"/>
  <rect class="part card" x="415" y="40" width="78" height="40" rx="6" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="454.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">26,600</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: Five cards joined by arrows: 24,600, 25,100, 25,600, a question mark card, 26,600.

### fig_008
- **title**: Four mini place-value charts A–D
- **type**: place_value_chart
- **svg**:

```svg
<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Which chart is correct?">
  <rect class="bg" x="0" y="0" width="460" height="250" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which chart is correct?</text>
  <text class="label option-label" x="28" y="88" font-size="16" text-anchor="start" font-weight="bold" fill="#333">A</text>
  <rect class="part header" x="50" y="48" width="36" height="22" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="68.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">TTh</text>
  <rect class="part cell" x="50" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="68.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part header" x="86" y="48" width="36" height="22" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="104.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">Th</text>
  <rect class="part cell" x="86" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="104.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="122" y="48" width="36" height="22" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">H</text>
  <rect class="part cell" x="122" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="140.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <rect class="part header" x="158" y="48" width="36" height="22" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="176.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">T</text>
  <rect class="part cell" x="158" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="176.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <rect class="part header" x="194" y="48" width="36" height="22" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="212.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">O</text>
  <rect class="part cell" x="194" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="212.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <text class="label option-label" x="253" y="88" font-size="16" text-anchor="start" font-weight="bold" fill="#333">B</text>
  <rect class="part header" x="275" y="48" width="36" height="22" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="293.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">TTh</text>
  <rect class="part cell" x="275" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="293.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part header" x="311" y="48" width="36" height="22" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="329.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">Th</text>
  <rect class="part cell" x="311" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="329.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="347" y="48" width="36" height="22" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="365.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">H</text>
  <rect class="part cell" x="347" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="365.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <rect class="part header" x="383" y="48" width="36" height="22" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="401.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">T</text>
  <rect class="part cell" x="383" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="401.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="419" y="48" width="36" height="22" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="437.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">O</text>
  <rect class="part cell" x="419" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="437.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <text class="label option-label" x="28" y="193" font-size="16" text-anchor="start" font-weight="bold" fill="#333">C</text>
  <rect class="part header" x="50" y="153" width="36" height="22" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="68.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">TTh</text>
  <rect class="part cell" x="50" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="68.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part header" x="86" y="153" width="36" height="22" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="104.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">Th</text>
  <rect class="part cell" x="86" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="104.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <rect class="part header" x="122" y="153" width="36" height="22" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">H</text>
  <rect class="part cell" x="122" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="140.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="158" y="153" width="36" height="22" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="176.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">T</text>
  <rect class="part cell" x="158" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="176.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <rect class="part header" x="194" y="153" width="36" height="22" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="212.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">O</text>
  <rect class="part cell" x="194" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="212.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <text class="label option-label" x="253" y="193" font-size="16" text-anchor="start" font-weight="bold" fill="#333">D</text>
  <rect class="part header" x="275" y="153" width="36" height="22" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="293.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">TTh</text>
  <rect class="part cell" x="275" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="293.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="311" y="153" width="36" height="22" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="329.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">Th</text>
  <rect class="part cell" x="311" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="329.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part header" x="347" y="153" width="36" height="22" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="365.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">H</text>
  <rect class="part cell" x="347" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="365.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <rect class="part header" x="383" y="153" width="36" height="22" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="401.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">T</text>
  <rect class="part cell" x="383" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="401.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="419" y="153" width="36" height="22" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="437.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">O</text>
  <rect class="part cell" x="419" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="437.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">6</text>
</svg>
```

- **css_notes**: max-width: 460px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: Four small place value charts labelled A to D. A: 4,0,5,6,0. B: 4,0,5,0,6. C: 4,5,0,6,0. D: 0,4,5,0,6.

### fig_009
- **title**: Digit tiles 4, 0, 7, 3, 8
- **type**: digit_tiles
- **svg**:

```svg
<svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Digit Tiles">
  <rect class="bg" x="0" y="0" width="380" height="130" fill="#fff"/>
  <text class="title" x="190.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Digit Tiles</text>
  <rect class="part tile" x="45.0" y="38" width="50" height="56" rx="8" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="digit" x="70.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part tile" x="105.0" y="38" width="50" height="56" rx="8" fill="#e8f5e9" stroke="#333" stroke-width="2"/>
  <text class="digit" x="130.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part tile" x="165.0" y="38" width="50" height="56" rx="8" fill="#fff8e1" stroke="#333" stroke-width="2"/>
  <text class="digit" x="190.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <rect class="part tile" x="225.0" y="38" width="50" height="56" rx="8" fill="#fce4ec" stroke="#333" stroke-width="2"/>
  <text class="digit" x="250.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <rect class="part tile" x="285.0" y="38" width="50" height="56" rx="8" fill="#ede7f6" stroke="#333" stroke-width="2"/>
  <text class="digit" x="310.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <text class="label small" x="190.0" y="120" font-size="12" text-anchor="middle" font-weight="normal" fill="#666">Use each tile once.</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: Five digit tiles showing 4, 0, 7, 3 and 8.

### fig_010
- **title**: Place-value chart 64,915 with star
- **type**: place_value_chart
- **svg**:

```svg
<svg viewBox="0 0 440 152" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Place Value Chart">
  <rect class="bg" x="0" y="0" width="440" height="152" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Place Value Chart</text>
  <rect class="part header" x="20" y="36" width="80" height="40" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="60.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Ten Thousands</text>
  <text class="label small" x="60.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(TTh)</text>
  <rect class="part cell" x="20" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="42.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="60.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <rect class="part header" x="100" y="36" width="80" height="40" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Thousands</text>
  <text class="label small" x="140.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(Th)</text>
  <rect class="part cell" x="100" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="122.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="140.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <polygon class="highlight star" points="140.0,135.0 142.0,140.25 147.61,140.53 143.23,144.05 144.7,149.47 140.0,146.4 135.3,149.47 136.77,144.05 132.39,140.53 138.0,140.25" fill="#ffb300" stroke="#e65100" stroke-width="1"/>
  <rect class="part header" x="180" y="36" width="80" height="40" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="220.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Hundreds</text>
  <text class="label small" x="220.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(H)</text>
  <rect class="part cell" x="180" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="202.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="220.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <rect class="part header" x="260" y="36" width="80" height="40" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="300.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Tens</text>
  <text class="label small" x="300.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(T)</text>
  <rect class="part cell" x="260" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="282.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="300.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <rect class="part header" x="340" y="36" width="80" height="40" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="380.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Ones</text>
  <text class="label small" x="380.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(O)</text>
  <rect class="part cell" x="340" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="362.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="380.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">5</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: A place value chart: Ten Thousands 6, Thousands 4, Hundreds 9, Tens 1, Ones 5. A star is under the Thousands column.

### fig_011
- **title**: Number train 59,998 … 60,001
- **type**: other
- **svg**:

```svg
<svg viewBox="0 0 454 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Number Train">
  <rect class="bg" x="0" y="0" width="454" height="130" fill="#fff"/>
  <text class="title" x="227.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Number Train</text>
  <rect class="part engine" x="15" y="48" width="50" height="46" rx="6" fill="#ffccbc" stroke="#333" stroke-width="1.5"/>
  <rect class="part chimney" x="43" y="34" width="16" height="16" rx="2" fill="#ffccbc" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="27" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="53" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <line class="part coupler" x1="65" y1="80" x2="75" y2="80" stroke="#333" stroke-width="1.5"/>
  <rect class="part carriage" x="75" y="48" width="86" height="46" rx="6" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="118.0" y="77" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">59,998</text>
  <circle class="part wheel" cx="93" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="143" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <line class="part coupler" x1="161" y1="80" x2="171" y2="80" stroke="#333" stroke-width="1.5"/>
  <rect class="part carriage" x="171" y="48" width="86" height="46" rx="6" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="214.0" y="77" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">59,999</text>
  <circle class="part wheel" cx="189" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="239" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <line class="part coupler" x1="257" y1="80" x2="267" y2="80" stroke="#333" stroke-width="1.5"/>
  <rect class="part carriage missing" x="267" y="48" width="86" height="46" rx="6" fill="#fff3e0" stroke="#333" stroke-width="1.5" stroke-dasharray="5 3"/>
  <text class="label value" x="310.0" y="77" font-size="22" text-anchor="middle" font-weight="bold" fill="#333">?</text>
  <circle class="part wheel" cx="285" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="335" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <line class="part coupler" x1="353" y1="80" x2="363" y2="80" stroke="#333" stroke-width="1.5"/>
  <rect class="part carriage" x="363" y="48" width="86" height="46" rx="6" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="406.0" y="77" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">60,001</text>
  <circle class="part wheel" cx="381" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="431" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <line class="part track" x1="10" y1="110" x2="444" y2="110" stroke="#666" stroke-width="2"/>
</svg>
```

- **css_notes**: max-width: 460px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: An engine pulling four carriages numbered 59,998, 59,999, a question mark, and 60,001.

### fig_012
- **title**: Expanded-form blocks 80,000+600+9
- **type**: block_expanded
- **svg**:

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Join the blocks">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Join the blocks</text>
  <rect class="part block" x="64.0" y="34.5" width="130" height="85.5" rx="4" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="129.0" y="82.25" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">80,000</text>
  <text class="label small" x="129.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Ten Thousands</text>
  <text class="label op" x="207.0" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="220.0" y="52.0" width="80" height="68.0" rx="4" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="260.0" y="91.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">600</text>
  <text class="label small" x="260.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Hundreds</text>
  <text class="label op" x="313.0" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="326.0" y="62.5" width="50" height="57.5" rx="4" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="351.0" y="96.25" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <text class="label small" x="351.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Ones</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: Three blocks joined with plus signs: 80,000 plus 600 plus 9. There is no thousands block and no tens block.

### fig_013
- **title**: Table: village populations
- **type**: table
- **svg**:

```svg
<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Village Census">
  <rect class="bg" x="0" y="0" width="360" height="200" fill="#fff"/>
  <text class="title" x="180.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Village Census</text>
  <rect class="part header" x="20" y="34" width="40" height="30" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="54" font-size="13" text-anchor="middle" font-weight="bold" fill="#333"></text>
  <rect class="part header" x="60" y="34" width="160" height="30" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="54" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">Village</text>
  <rect class="part header" x="220" y="34" width="120" height="30" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280.0" y="54" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">Population</text>
  <rect class="part cell" x="20" y="64" width="40" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="84" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">A</text>
  <rect class="part cell" x="60" y="64" width="160" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="84" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">Rampur</text>
  <rect class="part cell" x="220" y="64" width="120" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280.0" y="84" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">38,416</text>
  <rect class="part cell" x="20" y="94" width="40" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="114" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">B</text>
  <rect class="part cell" x="60" y="94" width="160" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="114" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">Sonpur</text>
  <rect class="part cell" x="220" y="94" width="120" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280.0" y="114" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">38,461</text>
  <rect class="part cell" x="20" y="124" width="40" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="144" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">C</text>
  <rect class="part cell" x="60" y="124" width="160" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="144" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">Devgarh</text>
  <rect class="part cell" x="220" y="124" width="120" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280.0" y="144" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">38,146</text>
  <rect class="part cell" x="20" y="154" width="40" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="174" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">D</text>
  <rect class="part cell" x="60" y="154" width="160" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="174" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">Kalyani</text>
  <rect class="part cell" x="220" y="154" width="120" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280.0" y="174" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">38,614</text>
</svg>
```

- **css_notes**: max-width: 360px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: A table of four villages. A Rampur 38,416; B Sonpur 38,461; C Devgarh 38,146; D Kalyani 38,614.

### fig_014
- **title**: Number line 50,000 to 60,000 with point Q
- **type**: number_line
- **svg**:

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Where is Q?">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Where is Q?</text>
  <line class="axis" x1="18" y1="92" x2="422" y2="92" stroke="#333" stroke-width="2"/>
  <polygon class="arrow" points="428,92 420,87 420,97" fill="#333"/>
  <polygon class="arrow" points="12,92 20,87 20,97" fill="#333"/>
  <line class="tick" x1="30.0" y1="82" x2="30.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">50,000</text>
  <line class="tick" x1="68.0" y1="82" x2="68.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="106.0" y1="82" x2="106.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="144.0" y1="82" x2="144.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="182.0" y1="82" x2="182.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="220.0" y1="82" x2="220.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="220.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">55,000</text>
  <line class="tick" x1="258.0" y1="82" x2="258.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="296.0" y1="82" x2="296.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="334.0" y1="82" x2="334.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="372.0" y1="82" x2="372.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="410.0" y1="82" x2="410.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="410.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">60,000</text>
  <circle class="part point" cx="201.0" cy="92" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="201.0" y1="52" x2="201.0" y2="80" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="201.0,83 196.0,75 206.0,75" fill="#333"/>
  <text class="label point-label" x="201.0" y="48" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">Q</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: A number line from 50,000 to 60,000 with ticks every 1,000; 50,000, 55,000 and 60,000 are labelled. Point Q is exactly halfway between the 4th and 5th ticks after 50,000.

### fig_015
- **title**: Rounding line 17,000 to 18,000
- **type**: number_line
- **svg**:

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Round to the nearest thousand">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Round to the nearest thousand</text>
  <line class="axis" x1="18" y1="92" x2="422" y2="92" stroke="#333" stroke-width="2"/>
  <polygon class="arrow" points="428,92 420,87 420,97" fill="#333"/>
  <polygon class="arrow" points="12,92 20,87 20,97" fill="#333"/>
  <line class="tick" x1="30.0" y1="82" x2="30.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">17,000</text>
  <line class="tick" x1="68.0" y1="82" x2="68.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="106.0" y1="82" x2="106.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="144.0" y1="82" x2="144.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="182.0" y1="82" x2="182.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="220.0" y1="82" x2="220.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="258.0" y1="82" x2="258.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="296.0" y1="82" x2="296.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="334.0" y1="82" x2="334.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="372.0" y1="82" x2="372.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="410.0" y1="82" x2="410.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="410.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">18,000</text>
  <line class="part midpoint" x1="220.0" y1="70" x2="220.0" y2="106" stroke="#e65100" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text class="label midpoint-label" x="220.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#e65100">17,500</text>
  <text class="label small" x="220.0" y="134" font-size="10" text-anchor="middle" font-weight="normal" fill="#e65100">(halfway)</text>
  <circle class="part point" cx="212.4" cy="92" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="212.4" y1="52" x2="212.4" y2="80" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="212.4,83 207.4,75 217.4,75" fill="#333"/>
  <text class="label point-label" x="212.4" y="48" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">17,480</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: A number line from 17,000 to 18,000 with ticks every 100. The halfway mark 17,500 is dashed in orange. A ball marked 17,480 sits just before the halfway mark.

### fig_016
- **title**: Pattern strip 72,500 … ?
- **type**: other
- **svg**:

```svg
<svg viewBox="0 0 508 100" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Find the missing card">
  <rect class="bg" x="0" y="0" width="508" height="100" fill="#fff"/>
  <text class="title" x="254.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Find the missing card</text>
  <rect class="part card" x="15" y="40" width="78" height="40" rx="6" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="54.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">72,500</text>
  <line class="arrow" x1="96" y1="60" x2="110" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="114,60 108,56 108,64" fill="#333"/>
  <rect class="part card" x="115" y="40" width="78" height="40" rx="6" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="154.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">70,000</text>
  <line class="arrow" x1="196" y1="60" x2="210" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="214,60 208,56 208,64" fill="#333"/>
  <rect class="part card" x="215" y="40" width="78" height="40" rx="6" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="254.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">67,500</text>
  <line class="arrow" x1="296" y1="60" x2="310" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="314,60 308,56 308,64" fill="#333"/>
  <rect class="part card missing" x="315" y="40" width="78" height="40" rx="6" fill="#fff3e0" stroke="#333" stroke-width="2" stroke-dasharray="5 3"/>
  <text class="label value" x="354.0" y="66" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">?</text>
  <line class="arrow" x1="396" y1="60" x2="410" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="414,60 408,56 408,64" fill="#333"/>
  <rect class="part card" x="415" y="40" width="78" height="40" rx="6" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="454.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">62,500</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: Five cards joined by arrows: 72,500, 70,000, 67,500, a question mark card, 62,500.

### fig_017
- **title**: Bar chart: metro passengers
- **type**: bar_compare
- **svg**:

```svg
<svg viewBox="0 0 440 236" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Metro Passengers at Rajiv Chowk">
  <rect class="bg" x="0" y="0" width="440" height="236" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Metro Passengers at Rajiv Chowk</text>
  <line class="axis" x1="130" y1="36" x2="130" y2="222" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="61" font-size="15" text-anchor="start" font-weight="bold" fill="#333">A</text>
  <text class="label" x="124" y="61" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Monday</text>
  <rect class="part bar" x="130" y="44" width="179.6" height="26" rx="2" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="315.6" y="62" font-size="13" text-anchor="start" font-weight="bold" fill="#333">23,480</text>
  <text class="label option-label" x="14" y="105" font-size="15" text-anchor="start" font-weight="bold" fill="#333">B</text>
  <text class="label" x="124" y="105" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Tuesday</text>
  <rect class="part bar" x="130" y="88" width="200.0" height="26" rx="2" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="336.0" y="106" font-size="13" text-anchor="start" font-weight="bold" fill="#333">26,150</text>
  <text class="label option-label" x="14" y="149" font-size="15" text-anchor="start" font-weight="bold" fill="#333">C</text>
  <text class="label" x="124" y="149" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Wednesday</text>
  <rect class="part bar" x="130" y="132" width="167.5" height="26" rx="2" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="303.5" y="150" font-size="13" text-anchor="start" font-weight="bold" fill="#333">21,905</text>
  <text class="label option-label" x="14" y="193" font-size="15" text-anchor="start" font-weight="bold" fill="#333">D</text>
  <text class="label" x="124" y="193" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Thursday</text>
  <rect class="part bar" x="130" y="176" width="189.4" height="26" rx="2" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="325.4" y="194" font-size="13" text-anchor="start" font-weight="bold" fill="#333">24,760</text>
  <text class="label small" x="220.0" y="234" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Number of passengers each day</text>
</svg>
```

- **css_notes**: max-width: 420px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: Horizontal bar chart of metro passengers. A Monday 23,480; B Tuesday 26,150; C Wednesday 21,905; D Thursday 24,760.

### fig_018
- **title**: Place cards 3 TTh, 14 Th, 5 H, 12 O
- **type**: block_expanded
- **svg**:

```svg
<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Mystery Number Cards">
  <rect class="bg" x="0" y="0" width="460" height="150" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Mystery Number Cards</text>
  <rect class="part block" x="18" y="40" width="92" height="80" rx="4" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="64.0" y="78" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <text class="label" x="64.0" y="104" font-size="11.5" text-anchor="middle" font-weight="bold" fill="#333">Ten Thousands</text>
  <text class="label op" x="122" y="86" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="134" y="40" width="92" height="80" rx="4" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="180.0" y="78" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">14</text>
  <text class="label" x="180.0" y="104" font-size="11.5" text-anchor="middle" font-weight="bold" fill="#333">Thousands</text>
  <text class="label op" x="238" y="86" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="250" y="40" width="92" height="80" rx="4" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="296.0" y="78" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <text class="label" x="296.0" y="104" font-size="11.5" text-anchor="middle" font-weight="bold" fill="#333">Hundreds</text>
  <text class="label op" x="354" y="86" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="366" y="40" width="92" height="80" rx="4" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="412.0" y="78" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">12</text>
  <text class="label" x="412.0" y="104" font-size="11.5" text-anchor="middle" font-weight="bold" fill="#333">Ones</text>
  <text class="label small" x="230.0" y="140" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Each card tells how many of that place.</text>
</svg>
```

- **css_notes**: max-width: 460px; width: 100%; height: auto; Keep `font-size` as set. Pastel fills can be themed through the `.part` classes.
- **alt**: Four cards joined with plus signs: 3 Ten Thousands, 14 Thousands, 5 Hundreds, 12 Ones.

## Pictorial Set A

### PQA01
- **figure**: fig_001
- **stem**: Look at the Place Value Chart. Which digit is in the **Ten Thousands** column?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Place Value Chart">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Place Value Chart</text>
  <rect class="part header" x="20" y="36" width="80" height="40" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="60.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Ten Thousands</text>
  <text class="label small" x="60.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(TTh)</text>
  <rect class="part cell" x="20" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="42.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="60.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <rect class="part header" x="100" y="36" width="80" height="40" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Thousands</text>
  <text class="label small" x="140.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(Th)</text>
  <rect class="part cell" x="100" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="122.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="140.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <rect class="part header" x="180" y="36" width="80" height="40" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="220.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Hundreds</text>
  <text class="label small" x="220.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(H)</text>
  <rect class="part cell" x="180" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="202.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="220.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="260" y="36" width="80" height="40" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="300.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Tens</text>
  <text class="label small" x="300.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(T)</text>
  <rect class="part cell" x="260" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="282.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="300.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <rect class="part header" x="340" y="36" width="80" height="40" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="380.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Ones</text>
  <text class="label small" x="380.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(O)</text>
  <rect class="part cell" x="340" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="362.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="380.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">8</text>
</svg>
```

- **alt**: A place value chart with five columns: Ten Thousands 7, Thousands 3, Hundreds 0, Tens 5, Ones 8.
- **options**:
  - A) 3
  - B) 7
  - C) 0
  - D) 8
- **answer**: B
- **explanation**: The first column, Ten Thousands, holds the digit 7 (the number is 73,058).
- **skill**: place_value
- **difficulty**: easy
- **replaces_hint**: place_value (e.g. text Q01)

### PQA02
- **figure**: fig_002
- **stem**: Look at the blocks. Which number do the four blocks make together?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Join the blocks">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Join the blocks</text>
  <rect class="part block" x="21.0" y="38.0" width="120" height="82.0" rx="4" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="81.0" y="84.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">50,000</text>
  <text class="label small" x="81.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Ten Thousands</text>
  <text class="label op" x="154.0" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="167.0" y="48.5" width="90" height="71.5" rx="4" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="212.0" y="89.25" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">3,000</text>
  <text class="label small" x="212.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Thousands</text>
  <text class="label op" x="270.0" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="283.0" y="59.0" width="60" height="61.0" rx="4" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="313.0" y="94.5" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">20</text>
  <text class="label small" x="313.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Tens</text>
  <text class="label op" x="356.0" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="369.0" y="62.5" width="50" height="57.5" rx="4" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="394.0" y="96.25" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <text class="label small" x="394.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Ones</text>
</svg>
```

- **alt**: Four blocks joined with plus signs: 50,000 plus 3,000 plus 20 plus 4, getting smaller from left to right.
- **options**:
  - A) 53,240
  - B) 5,324
  - C) 53,024
  - D) 50,324
- **answer**: C
- **explanation**: 50,000 + 3,000 + 20 + 4 = 53,024; there are no hundreds, so 0 goes in the hundreds place.
- **skill**: expanded_form
- **difficulty**: easy
- **replaces_hint**: expanded_form (e.g. text Q04)

### PQA03
- **figure**: fig_003
- **stem**: Look at the four digit tiles. What is the **greatest** 4-digit number you can make using each tile once?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Digit Tiles">
  <rect class="bg" x="0" y="0" width="320" height="130" fill="#fff"/>
  <text class="title" x="160.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Digit Tiles</text>
  <rect class="part tile" x="45.0" y="38" width="50" height="56" rx="8" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="digit" x="70.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part tile" x="105.0" y="38" width="50" height="56" rx="8" fill="#e8f5e9" stroke="#333" stroke-width="2"/>
  <text class="digit" x="130.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <rect class="part tile" x="165.0" y="38" width="50" height="56" rx="8" fill="#fff8e1" stroke="#333" stroke-width="2"/>
  <text class="digit" x="190.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <rect class="part tile" x="225.0" y="38" width="50" height="56" rx="8" fill="#fce4ec" stroke="#333" stroke-width="2"/>
  <text class="digit" x="250.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <text class="label small" x="160.0" y="120" font-size="12" text-anchor="middle" font-weight="normal" fill="#666">Use each tile once.</text>
</svg>
```

- **alt**: Four digit tiles showing 4, 9, 2 and 7.
- **options**:
  - A) 9,742
  - B) 9,724
  - C) 7,942
  - D) 2,479
- **answer**: A
- **explanation**: Put the tiles from biggest to smallest: 9, 7, 4, 2 → 9,742.
- **skill**: form_number
- **difficulty**: easy
- **replaces_hint**: form_number (e.g. text Q11)

### PQA04
- **figure**: fig_004
- **stem**: Look at the bar chart. The bars look almost the same! Which fair, A, B, C or D, had the **most** visitors on Day 1?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 236" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Visitors on Day 1">
  <rect class="bg" x="0" y="0" width="440" height="236" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Visitors on Day 1</text>
  <line class="axis" x1="130" y1="36" x2="130" y2="222" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="61" font-size="15" text-anchor="start" font-weight="bold" fill="#333">A</text>
  <text class="label" x="124" y="61" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Pushkar Mela</text>
  <rect class="part bar" x="130" y="44" width="197.7" height="26" rx="2" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="333.7" y="62" font-size="13" text-anchor="start" font-weight="bold" fill="#333">46,280</text>
  <text class="label option-label" x="14" y="105" font-size="15" text-anchor="start" font-weight="bold" fill="#333">B</text>
  <text class="label" x="124" y="105" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Hornbill Fest</text>
  <rect class="part bar" x="130" y="88" width="196.5" height="26" rx="2" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="332.5" y="106" font-size="13" text-anchor="start" font-weight="bold" fill="#333">45,990</text>
  <text class="label option-label" x="14" y="149" font-size="15" text-anchor="start" font-weight="bold" fill="#333">C</text>
  <text class="label" x="124" y="149" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Surajkund Mela</text>
  <rect class="part bar" x="130" y="132" width="196.8" height="26" rx="2" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="332.8" y="150" font-size="13" text-anchor="start" font-weight="bold" fill="#333">46,082</text>
  <text class="label option-label" x="14" y="193" font-size="15" text-anchor="start" font-weight="bold" fill="#333">D</text>
  <text class="label" x="124" y="193" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Dasara Fair</text>
  <rect class="part bar" x="130" y="176" width="200.0" height="26" rx="2" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="336.0" y="194" font-size="13" text-anchor="start" font-weight="bold" fill="#333">46,820</text>
  <text class="label small" x="220.0" y="234" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Number of visitors</text>
</svg>
```

- **alt**: Horizontal bar chart of Day 1 visitors. A Pushkar Mela 46,280; B Hornbill Fest 45,990; C Surajkund Mela 46,082; D Dasara Fair 46,820. Bars look almost equal in length.
- **options**:
  - A) Fair A
  - B) Fair B
  - C) Fair C
  - D) Fair D
- **answer**: D
- **explanation**: All have 4 ten thousands; at thousands, 6 beats 5, and at hundreds, D's 8 beats A's 2 and C's 0, so 46,820 is the greatest.
- **skill**: compare
- **difficulty**: easy
- **replaces_hint**: compare (e.g. text Q05)

### PQA05
- **figure**: fig_005
- **stem**: Look at the number line. It is split into equal jumps. What number does point **P** show?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Where is P?">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Where is P?</text>
  <line class="axis" x1="18" y1="92" x2="422" y2="92" stroke="#333" stroke-width="2"/>
  <polygon class="arrow" points="428,92 420,87 420,97" fill="#333"/>
  <polygon class="arrow" points="12,92 20,87 20,97" fill="#333"/>
  <line class="tick" x1="30.0" y1="82" x2="30.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">20,000</text>
  <line class="tick" x1="106.0" y1="82" x2="106.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="182.0" y1="82" x2="182.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="258.0" y1="82" x2="258.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="334.0" y1="82" x2="334.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="410.0" y1="82" x2="410.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="410.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">30,000</text>
  <circle class="part point" cx="334.0" cy="92" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="334.0" y1="52" x2="334.0" y2="80" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="334.0,83 329.0,75 339.0,75" fill="#333"/>
  <text class="label point-label" x="334.0" y="48" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">P</text>
</svg>
```

- **alt**: A number line from 20,000 to 30,000 split into 5 equal jumps; only the ends are labelled. Point P is on the fourth tick from the left.
- **options**:
  - A) 28,000
  - B) 24,000
  - C) 26,000
  - D) 29,000
- **answer**: A
- **explanation**: 10,000 split into 5 equal jumps means each jump is 2,000; P is 4 jumps after 20,000, so 20,000 + 8,000 = 28,000.
- **skill**: number_line
- **difficulty**: medium
- **replaces_hint**: place_value / compare

### PQA06
- **figure**: fig_006
- **stem**: Look at the number line. The ball is at 3,862. Round 3,862 to the **nearest hundred**.

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Round to the nearest hundred">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Round to the nearest hundred</text>
  <line class="axis" x1="18" y1="92" x2="422" y2="92" stroke="#333" stroke-width="2"/>
  <polygon class="arrow" points="428,92 420,87 420,97" fill="#333"/>
  <polygon class="arrow" points="12,92 20,87 20,97" fill="#333"/>
  <line class="tick" x1="30.0" y1="82" x2="30.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3,800</text>
  <line class="tick" x1="68.0" y1="82" x2="68.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="106.0" y1="82" x2="106.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="144.0" y1="82" x2="144.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="182.0" y1="82" x2="182.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="220.0" y1="82" x2="220.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="258.0" y1="82" x2="258.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="296.0" y1="82" x2="296.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="334.0" y1="82" x2="334.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="372.0" y1="82" x2="372.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="410.0" y1="82" x2="410.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="410.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">3,900</text>
  <line class="part midpoint" x1="220.0" y1="70" x2="220.0" y2="106" stroke="#e65100" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text class="label midpoint-label" x="220.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#e65100">3,850</text>
  <text class="label small" x="220.0" y="134" font-size="10" text-anchor="middle" font-weight="normal" fill="#e65100">(halfway)</text>
  <circle class="part point" cx="265.6" cy="92" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="265.6" y1="52" x2="265.6" y2="80" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="265.6,83 260.6,75 270.6,75" fill="#333"/>
  <text class="label point-label" x="265.6" y="48" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">3,862</text>
</svg>
```

- **alt**: A number line from 3,800 to 3,900 with ticks every 10. The halfway mark 3,850 is dashed in orange. A ball marked 3,862 sits just past the halfway mark.
- **options**:
  - A) 3,800
  - B) 3,860
  - C) 3,900
  - D) 3,850
- **answer**: C
- **explanation**: 3,862 is past the halfway mark 3,850, so it is closer to 3,900.
- **skill**: round
- **difficulty**: medium
- **replaces_hint**: round (e.g. text Q14)

### PQA07
- **figure**: fig_007
- **stem**: Look at the cards. The same rule takes you from one card to the next. Which number goes on the **?** card?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 508 100" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Find the missing card">
  <rect class="bg" x="0" y="0" width="508" height="100" fill="#fff"/>
  <text class="title" x="254.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Find the missing card</text>
  <rect class="part card" x="15" y="40" width="78" height="40" rx="6" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="54.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">24,600</text>
  <line class="arrow" x1="96" y1="60" x2="110" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="114,60 108,56 108,64" fill="#333"/>
  <rect class="part card" x="115" y="40" width="78" height="40" rx="6" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="154.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">25,100</text>
  <line class="arrow" x1="196" y1="60" x2="210" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="214,60 208,56 208,64" fill="#333"/>
  <rect class="part card" x="215" y="40" width="78" height="40" rx="6" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="254.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">25,600</text>
  <line class="arrow" x1="296" y1="60" x2="310" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="314,60 308,56 308,64" fill="#333"/>
  <rect class="part card missing" x="315" y="40" width="78" height="40" rx="6" fill="#fff3e0" stroke="#333" stroke-width="2" stroke-dasharray="5 3"/>
  <text class="label value" x="354.0" y="66" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">?</text>
  <line class="arrow" x1="396" y1="60" x2="410" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="414,60 408,56 408,64" fill="#333"/>
  <rect class="part card" x="415" y="40" width="78" height="40" rx="6" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="454.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">26,600</text>
</svg>
```

- **alt**: Five cards joined by arrows: 24,600, 25,100, 25,600, a question mark card, 26,600.
- **options**:
  - A) 26,000
  - B) 25,900
  - C) 26,600
  - D) 26,100
- **answer**: D
- **explanation**: Each card is 500 more than the one before: 25,600 + 500 = 26,100 (and 26,100 + 500 = 26,600).
- **skill**: pattern
- **difficulty**: medium
- **replaces_hint**: pattern (e.g. text Q16)

### PQA08
- **figure**: fig_008
- **stem**: Look at charts A, B, C and D. Which chart correctly shows **forty thousand five hundred six**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Which chart is correct?">
  <rect class="bg" x="0" y="0" width="460" height="250" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which chart is correct?</text>
  <text class="label option-label" x="28" y="88" font-size="16" text-anchor="start" font-weight="bold" fill="#333">A</text>
  <rect class="part header" x="50" y="48" width="36" height="22" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="68.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">TTh</text>
  <rect class="part cell" x="50" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="68.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part header" x="86" y="48" width="36" height="22" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="104.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">Th</text>
  <rect class="part cell" x="86" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="104.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="122" y="48" width="36" height="22" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">H</text>
  <rect class="part cell" x="122" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="140.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <rect class="part header" x="158" y="48" width="36" height="22" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="176.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">T</text>
  <rect class="part cell" x="158" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="176.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <rect class="part header" x="194" y="48" width="36" height="22" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="212.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">O</text>
  <rect class="part cell" x="194" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="212.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <text class="label option-label" x="253" y="88" font-size="16" text-anchor="start" font-weight="bold" fill="#333">B</text>
  <rect class="part header" x="275" y="48" width="36" height="22" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="293.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">TTh</text>
  <rect class="part cell" x="275" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="293.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part header" x="311" y="48" width="36" height="22" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="329.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">Th</text>
  <rect class="part cell" x="311" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="329.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="347" y="48" width="36" height="22" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="365.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">H</text>
  <rect class="part cell" x="347" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="365.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <rect class="part header" x="383" y="48" width="36" height="22" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="401.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">T</text>
  <rect class="part cell" x="383" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="401.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="419" y="48" width="36" height="22" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="437.0" y="64" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">O</text>
  <rect class="part cell" x="419" y="70" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="437.0" y="96" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <text class="label option-label" x="28" y="193" font-size="16" text-anchor="start" font-weight="bold" fill="#333">C</text>
  <rect class="part header" x="50" y="153" width="36" height="22" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="68.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">TTh</text>
  <rect class="part cell" x="50" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="68.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part header" x="86" y="153" width="36" height="22" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="104.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">Th</text>
  <rect class="part cell" x="86" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="104.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <rect class="part header" x="122" y="153" width="36" height="22" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">H</text>
  <rect class="part cell" x="122" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="140.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="158" y="153" width="36" height="22" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="176.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">T</text>
  <rect class="part cell" x="158" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="176.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <rect class="part header" x="194" y="153" width="36" height="22" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="212.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">O</text>
  <rect class="part cell" x="194" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="212.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <text class="label option-label" x="253" y="193" font-size="16" text-anchor="start" font-weight="bold" fill="#333">D</text>
  <rect class="part header" x="275" y="153" width="36" height="22" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="293.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">TTh</text>
  <rect class="part cell" x="275" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="293.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="311" y="153" width="36" height="22" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="329.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">Th</text>
  <rect class="part cell" x="311" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="329.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part header" x="347" y="153" width="36" height="22" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="365.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">H</text>
  <rect class="part cell" x="347" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="365.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <rect class="part header" x="383" y="153" width="36" height="22" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="401.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">T</text>
  <rect class="part cell" x="383" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="401.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part header" x="419" y="153" width="36" height="22" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="437.0" y="169" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">O</text>
  <rect class="part cell" x="419" y="175" width="36" height="36" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="437.0" y="201" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">6</text>
</svg>
```

- **alt**: Four small place value charts labelled A to D. A: 4,0,5,6,0. B: 4,0,5,0,6. C: 4,5,0,6,0. D: 0,4,5,0,6.
- **options**:
  - A) Chart A
  - B) Chart B
  - C) Chart C
  - D) Chart D
- **answer**: B
- **explanation**: Forty thousand five hundred six = 40,506: 4 ten thousands, 0 thousands, 5 hundreds, 0 tens, 6 ones, which is Chart B.
- **skill**: number_name
- **difficulty**: hard
- **replaces_hint**: number_name (e.g. text Q09)

### PQA09
- **figure**: fig_009
- **stem**: Look at the five digit tiles. Using each tile once, what is the **smallest 5-digit ODD number** you can make?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Digit Tiles">
  <rect class="bg" x="0" y="0" width="380" height="130" fill="#fff"/>
  <text class="title" x="190.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Digit Tiles</text>
  <rect class="part tile" x="45.0" y="38" width="50" height="56" rx="8" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="digit" x="70.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <rect class="part tile" x="105.0" y="38" width="50" height="56" rx="8" fill="#e8f5e9" stroke="#333" stroke-width="2"/>
  <text class="digit" x="130.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">0</text>
  <rect class="part tile" x="165.0" y="38" width="50" height="56" rx="8" fill="#fff8e1" stroke="#333" stroke-width="2"/>
  <text class="digit" x="190.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <rect class="part tile" x="225.0" y="38" width="50" height="56" rx="8" fill="#fce4ec" stroke="#333" stroke-width="2"/>
  <text class="digit" x="250.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <rect class="part tile" x="285.0" y="38" width="50" height="56" rx="8" fill="#ede7f6" stroke="#333" stroke-width="2"/>
  <text class="digit" x="310.0" y="76" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <text class="label small" x="190.0" y="120" font-size="12" text-anchor="middle" font-weight="normal" fill="#666">Use each tile once.</text>
</svg>
```

- **alt**: Five digit tiles showing 4, 0, 7, 3 and 8.
- **options**:
  - A) 30,487
  - B) 30,478
  - C) 30,847
  - D) 40,378
- **answer**: A
- **explanation**: It must end in 3 or 7; ending in 7 lets 3 lead: 3, then 0, 4, 8, then 7 → 30,487. (30,478 is even.)
- **skill**: form_number
- **difficulty**: hard
- **replaces_hint**: form_number (e.g. text Q21)

## Pictorial Set B

### PQB01
- **figure**: fig_010
- **stem**: Look at the Place Value Chart. What is the **place value** of the digit in the column marked with the star (orange star ★)?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 152" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Place Value Chart">
  <rect class="bg" x="0" y="0" width="440" height="152" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Place Value Chart</text>
  <rect class="part header" x="20" y="36" width="80" height="40" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="60.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Ten Thousands</text>
  <text class="label small" x="60.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(TTh)</text>
  <rect class="part cell" x="20" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="42.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="60.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <rect class="part header" x="100" y="36" width="80" height="40" rx="0" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Thousands</text>
  <text class="label small" x="140.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(Th)</text>
  <rect class="part cell" x="100" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="122.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="140.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <polygon class="highlight star" points="140.0,135.0 142.0,140.25 147.61,140.53 143.23,144.05 144.7,149.47 140.0,146.4 135.3,149.47 136.77,144.05 132.39,140.53 138.0,140.25" fill="#ffb300" stroke="#e65100" stroke-width="1"/>
  <rect class="part header" x="180" y="36" width="80" height="40" rx="0" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="220.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Hundreds</text>
  <text class="label small" x="220.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(H)</text>
  <rect class="part cell" x="180" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="202.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="220.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <rect class="part header" x="260" y="36" width="80" height="40" rx="0" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="300.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Tens</text>
  <text class="label small" x="300.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(T)</text>
  <rect class="part cell" x="260" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="282.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="300.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <rect class="part header" x="340" y="36" width="80" height="40" rx="0" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="380.0" y="54" font-size="10" text-anchor="middle" font-weight="bold" fill="#333">Ones</text>
  <text class="label small" x="380.0" y="69" font-size="10" text-anchor="middle" font-weight="normal" fill="#666">(O)</text>
  <rect class="part cell" x="340" y="76" width="80" height="56" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <rect class="part digit-tile" x="362.0" y="84" width="36" height="40" rx="6" fill="#fffde7" stroke="#333" stroke-width="1.5"/>
  <text class="digit" x="380.0" y="112" font-size="24" text-anchor="middle" font-weight="bold" fill="#333">5</text>
</svg>
```

- **alt**: A place value chart: Ten Thousands 6, Thousands 4, Hundreds 9, Tens 1, Ones 5. A star is under the Thousands column.
- **options**:
  - A) 4
  - B) 400
  - C) 40,000
  - D) 4,000
- **answer**: D
- **explanation**: The star is under Thousands, which holds 4, so its place value is 4 thousands = 4,000.
- **skill**: place_value
- **difficulty**: easy
- **replaces_hint**: place_value (e.g. text Set B Q03)

### PQB02
- **figure**: fig_011
- **stem**: Look at the Number Train. Each carriage is 1 more than the one before it. Which number goes on the **?** carriage?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 454 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Number Train">
  <rect class="bg" x="0" y="0" width="454" height="130" fill="#fff"/>
  <text class="title" x="227.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Number Train</text>
  <rect class="part engine" x="15" y="48" width="50" height="46" rx="6" fill="#ffccbc" stroke="#333" stroke-width="1.5"/>
  <rect class="part chimney" x="43" y="34" width="16" height="16" rx="2" fill="#ffccbc" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="27" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="53" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <line class="part coupler" x1="65" y1="80" x2="75" y2="80" stroke="#333" stroke-width="1.5"/>
  <rect class="part carriage" x="75" y="48" width="86" height="46" rx="6" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="118.0" y="77" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">59,998</text>
  <circle class="part wheel" cx="93" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="143" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <line class="part coupler" x1="161" y1="80" x2="171" y2="80" stroke="#333" stroke-width="1.5"/>
  <rect class="part carriage" x="171" y="48" width="86" height="46" rx="6" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="214.0" y="77" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">59,999</text>
  <circle class="part wheel" cx="189" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="239" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <line class="part coupler" x1="257" y1="80" x2="267" y2="80" stroke="#333" stroke-width="1.5"/>
  <rect class="part carriage missing" x="267" y="48" width="86" height="46" rx="6" fill="#fff3e0" stroke="#333" stroke-width="1.5" stroke-dasharray="5 3"/>
  <text class="label value" x="310.0" y="77" font-size="22" text-anchor="middle" font-weight="bold" fill="#333">?</text>
  <circle class="part wheel" cx="285" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="335" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <line class="part coupler" x1="353" y1="80" x2="363" y2="80" stroke="#333" stroke-width="1.5"/>
  <rect class="part carriage" x="363" y="48" width="86" height="46" rx="6" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="406.0" y="77" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">60,001</text>
  <circle class="part wheel" cx="381" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <circle class="part wheel" cx="431" cy="100" r="8" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <line class="part track" x1="10" y1="110" x2="444" y2="110" stroke="#666" stroke-width="2"/>
</svg>
```

- **alt**: An engine pulling four carriages numbered 59,998, 59,999, a question mark, and 60,001.
- **options**:
  - A) 60,000
  - B) 59,990
  - C) 50,000
  - D) 60,010
- **answer**: A
- **explanation**: The successor of 59,999 is 59,999 + 1 = 60,000, and 60,000 + 1 = 60,001.
- **skill**: successor_predecessor
- **difficulty**: easy
- **replaces_hint**: successor_predecessor (e.g. text Set B Q06)

### PQB03
- **figure**: fig_012
- **stem**: Look at the blocks. Which number do the three blocks make together?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Join the blocks">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Join the blocks</text>
  <rect class="part block" x="64.0" y="34.5" width="130" height="85.5" rx="4" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="129.0" y="82.25" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">80,000</text>
  <text class="label small" x="129.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Ten Thousands</text>
  <text class="label op" x="207.0" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="220.0" y="52.0" width="80" height="68.0" rx="4" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="260.0" y="91.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">600</text>
  <text class="label small" x="260.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Hundreds</text>
  <text class="label op" x="313.0" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="326.0" y="62.5" width="50" height="57.5" rx="4" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="351.0" y="96.25" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <text class="label small" x="351.0" y="138" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Ones</text>
</svg>
```

- **alt**: Three blocks joined with plus signs: 80,000 plus 600 plus 9. There is no thousands block and no tens block.
- **options**:
  - A) 86,009
  - B) 80,609
  - C) 80,690
  - D) 8,069
- **answer**: B
- **explanation**: 80,000 + 600 + 9 = 80,609; there are no thousands and no tens, so both get a 0.
- **skill**: expanded_form
- **difficulty**: easy
- **replaces_hint**: expanded_form (e.g. text Set B Q04)

### PQB04
- **figure**: fig_013
- **stem**: Look at the Village Census table. Which village has the **smallest** population?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Village Census">
  <rect class="bg" x="0" y="0" width="360" height="200" fill="#fff"/>
  <text class="title" x="180.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Village Census</text>
  <rect class="part header" x="20" y="34" width="40" height="30" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="54" font-size="13" text-anchor="middle" font-weight="bold" fill="#333"></text>
  <rect class="part header" x="60" y="34" width="160" height="30" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="54" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">Village</text>
  <rect class="part header" x="220" y="34" width="120" height="30" rx="0" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280.0" y="54" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">Population</text>
  <rect class="part cell" x="20" y="64" width="40" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="84" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">A</text>
  <rect class="part cell" x="60" y="64" width="160" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="84" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">Rampur</text>
  <rect class="part cell" x="220" y="64" width="120" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280.0" y="84" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">38,416</text>
  <rect class="part cell" x="20" y="94" width="40" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="114" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">B</text>
  <rect class="part cell" x="60" y="94" width="160" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="114" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">Sonpur</text>
  <rect class="part cell" x="220" y="94" width="120" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280.0" y="114" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">38,461</text>
  <rect class="part cell" x="20" y="124" width="40" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="144" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">C</text>
  <rect class="part cell" x="60" y="124" width="160" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="144" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">Devgarh</text>
  <rect class="part cell" x="220" y="124" width="120" height="30" rx="0" fill="#fff" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280.0" y="144" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">38,146</text>
  <rect class="part cell" x="20" y="154" width="40" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="40.0" y="174" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">D</text>
  <rect class="part cell" x="60" y="154" width="160" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="140.0" y="174" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">Kalyani</text>
  <rect class="part cell" x="220" y="154" width="120" height="30" rx="0" fill="#fafafa" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280.0" y="174" font-size="13" text-anchor="middle" font-weight="normal" fill="#333">38,614</text>
</svg>
```

- **alt**: A table of four villages. A Rampur 38,416; B Sonpur 38,461; C Devgarh 38,146; D Kalyani 38,614.
- **options**:
  - A) Rampur
  - B) Sonpur
  - C) Devgarh
  - D) Kalyani
- **answer**: C
- **explanation**: All begin 38 thousand; at the hundreds place Devgarh has 1, the smallest, so 38,146 is the least.
- **skill**: compare
- **difficulty**: easy
- **replaces_hint**: compare (e.g. text Set B Q05)

### PQB05
- **figure**: fig_014
- **stem**: Look at the number line. Each small jump is 1,000. Which number is point **Q** showing?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Where is Q?">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Where is Q?</text>
  <line class="axis" x1="18" y1="92" x2="422" y2="92" stroke="#333" stroke-width="2"/>
  <polygon class="arrow" points="428,92 420,87 420,97" fill="#333"/>
  <polygon class="arrow" points="12,92 20,87 20,97" fill="#333"/>
  <line class="tick" x1="30.0" y1="82" x2="30.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">50,000</text>
  <line class="tick" x1="68.0" y1="82" x2="68.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="106.0" y1="82" x2="106.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="144.0" y1="82" x2="144.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="182.0" y1="82" x2="182.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="220.0" y1="82" x2="220.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="220.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">55,000</text>
  <line class="tick" x1="258.0" y1="82" x2="258.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="296.0" y1="82" x2="296.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="334.0" y1="82" x2="334.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="372.0" y1="82" x2="372.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="410.0" y1="82" x2="410.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="410.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">60,000</text>
  <circle class="part point" cx="201.0" cy="92" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="201.0" y1="52" x2="201.0" y2="80" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="201.0,83 196.0,75 206.0,75" fill="#333"/>
  <text class="label point-label" x="201.0" y="48" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">Q</text>
</svg>
```

- **alt**: A number line from 50,000 to 60,000 with ticks every 1,000; 50,000, 55,000 and 60,000 are labelled. Point Q is exactly halfway between the 4th and 5th ticks after 50,000.
- **options**:
  - A) 54,500
  - B) 55,400
  - C) 45,500
  - D) 54,050
- **answer**: A
- **explanation**: Q is halfway between 54,000 and 55,000, and halfway is 500 more, so Q = 54,500.
- **skill**: number_line
- **difficulty**: medium
- **replaces_hint**: place_value / round

### PQB06
- **figure**: fig_015
- **stem**: Look at the number line. The ball is at 17,480. Round 17,480 to the **nearest thousand**.

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Round to the nearest thousand">
  <rect class="bg" x="0" y="0" width="440" height="150" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Round to the nearest thousand</text>
  <line class="axis" x1="18" y1="92" x2="422" y2="92" stroke="#333" stroke-width="2"/>
  <polygon class="arrow" points="428,92 420,87 420,97" fill="#333"/>
  <polygon class="arrow" points="12,92 20,87 20,97" fill="#333"/>
  <line class="tick" x1="30.0" y1="82" x2="30.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="30.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">17,000</text>
  <line class="tick" x1="68.0" y1="82" x2="68.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="106.0" y1="82" x2="106.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="144.0" y1="82" x2="144.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="182.0" y1="82" x2="182.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="220.0" y1="82" x2="220.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="258.0" y1="82" x2="258.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="296.0" y1="82" x2="296.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="334.0" y1="82" x2="334.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="372.0" y1="82" x2="372.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <line class="tick" x1="410.0" y1="82" x2="410.0" y2="102" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="410.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">18,000</text>
  <line class="part midpoint" x1="220.0" y1="70" x2="220.0" y2="106" stroke="#e65100" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text class="label midpoint-label" x="220.0" y="120" font-size="12" text-anchor="middle" font-weight="bold" fill="#e65100">17,500</text>
  <text class="label small" x="220.0" y="134" font-size="10" text-anchor="middle" font-weight="normal" fill="#e65100">(halfway)</text>
  <circle class="part point" cx="212.4" cy="92" r="7" fill="#42a5f5" stroke="#333" stroke-width="1.5"/>
  <line class="arrow" x1="212.4" y1="52" x2="212.4" y2="80" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="212.4,83 207.4,75 217.4,75" fill="#333"/>
  <text class="label point-label" x="212.4" y="48" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">17,480</text>
</svg>
```

- **alt**: A number line from 17,000 to 18,000 with ticks every 100. The halfway mark 17,500 is dashed in orange. A ball marked 17,480 sits just before the halfway mark.
- **options**:
  - A) 18,000
  - B) 17,500
  - C) 17,400
  - D) 17,000
- **answer**: D
- **explanation**: 17,480 has not reached the halfway mark 17,500, so it rounds down to 17,000.
- **skill**: round
- **difficulty**: medium
- **replaces_hint**: round (e.g. text Set B Q14)

### PQB07
- **figure**: fig_016
- **stem**: Look at the cards. The numbers go down by the same amount each time. Which number goes on the **?** card?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 508 100" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Find the missing card">
  <rect class="bg" x="0" y="0" width="508" height="100" fill="#fff"/>
  <text class="title" x="254.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Find the missing card</text>
  <rect class="part card" x="15" y="40" width="78" height="40" rx="6" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="54.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">72,500</text>
  <line class="arrow" x1="96" y1="60" x2="110" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="114,60 108,56 108,64" fill="#333"/>
  <rect class="part card" x="115" y="40" width="78" height="40" rx="6" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="154.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">70,000</text>
  <line class="arrow" x1="196" y1="60" x2="210" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="214,60 208,56 208,64" fill="#333"/>
  <rect class="part card" x="215" y="40" width="78" height="40" rx="6" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="254.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">67,500</text>
  <line class="arrow" x1="296" y1="60" x2="310" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="314,60 308,56 308,64" fill="#333"/>
  <rect class="part card missing" x="315" y="40" width="78" height="40" rx="6" fill="#fff3e0" stroke="#333" stroke-width="2" stroke-dasharray="5 3"/>
  <text class="label value" x="354.0" y="66" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">?</text>
  <line class="arrow" x1="396" y1="60" x2="410" y2="60" stroke="#333" stroke-width="1.5"/>
  <polygon class="arrow" points="414,60 408,56 408,64" fill="#333"/>
  <rect class="part card" x="415" y="40" width="78" height="40" rx="6" fill="#ede7f6" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="454.0" y="66" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">62,500</text>
</svg>
```

- **alt**: Five cards joined by arrows: 72,500, 70,000, 67,500, a question mark card, 62,500.
- **options**:
  - A) 65,500
  - B) 66,000
  - C) 65,000
  - D) 62,500
- **answer**: C
- **explanation**: Each card is 2,500 less: 67,500 − 2,500 = 65,000 (and 65,000 − 2,500 = 62,500).
- **skill**: pattern
- **difficulty**: medium
- **replaces_hint**: pattern (e.g. text Set B Q24)

### PQB08
- **figure**: fig_017
- **stem**: Look at the bar chart of metro passengers. How many **more** passengers travelled on the busiest day than on the quietest day?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 236" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Metro Passengers at Rajiv Chowk">
  <rect class="bg" x="0" y="0" width="440" height="236" fill="#fff"/>
  <text class="title" x="220.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Metro Passengers at Rajiv Chowk</text>
  <line class="axis" x1="130" y1="36" x2="130" y2="222" stroke="#333" stroke-width="1.5"/>
  <text class="label option-label" x="14" y="61" font-size="15" text-anchor="start" font-weight="bold" fill="#333">A</text>
  <text class="label" x="124" y="61" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Monday</text>
  <rect class="part bar" x="130" y="44" width="179.6" height="26" rx="2" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="315.6" y="62" font-size="13" text-anchor="start" font-weight="bold" fill="#333">23,480</text>
  <text class="label option-label" x="14" y="105" font-size="15" text-anchor="start" font-weight="bold" fill="#333">B</text>
  <text class="label" x="124" y="105" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Tuesday</text>
  <rect class="part bar" x="130" y="88" width="200.0" height="26" rx="2" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="336.0" y="106" font-size="13" text-anchor="start" font-weight="bold" fill="#333">26,150</text>
  <text class="label option-label" x="14" y="149" font-size="15" text-anchor="start" font-weight="bold" fill="#333">C</text>
  <text class="label" x="124" y="149" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Wednesday</text>
  <rect class="part bar" x="130" y="132" width="167.5" height="26" rx="2" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="303.5" y="150" font-size="13" text-anchor="start" font-weight="bold" fill="#333">21,905</text>
  <text class="label option-label" x="14" y="193" font-size="15" text-anchor="start" font-weight="bold" fill="#333">D</text>
  <text class="label" x="124" y="193" font-size="12" text-anchor="end" font-weight="normal" fill="#333">Thursday</text>
  <rect class="part bar" x="130" y="176" width="189.4" height="26" rx="2" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="325.4" y="194" font-size="13" text-anchor="start" font-weight="bold" fill="#333">24,760</text>
  <text class="label small" x="220.0" y="234" font-size="10.5" text-anchor="middle" font-weight="normal" fill="#666">Number of passengers each day</text>
</svg>
```

- **alt**: Horizontal bar chart of metro passengers. A Monday 23,480; B Tuesday 26,150; C Wednesday 21,905; D Thursday 24,760.
- **options**:
  - A) 4,245
  - B) 4,355
  - C) 2,670
  - D) 1,280
- **answer**: A
- **explanation**: Busiest is B, Tuesday (26,150); quietest is C, Wednesday (21,905); 26,150 − 21,905 = 4,245.
- **skill**: word_problem
- **difficulty**: hard
- **replaces_hint**: word_problem (e.g. text Set B Q23)

### PQB09
- **figure**: fig_018
- **stem**: Look at the Mystery Number Cards. What number do the four cards make together?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Mystery Number Cards">
  <rect class="bg" x="0" y="0" width="460" height="150" fill="#fff"/>
  <text class="title" x="230.0" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Mystery Number Cards</text>
  <rect class="part block" x="18" y="40" width="92" height="80" rx="4" fill="#e3f2fd" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="64.0" y="78" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <text class="label" x="64.0" y="104" font-size="11.5" text-anchor="middle" font-weight="bold" fill="#333">Ten Thousands</text>
  <text class="label op" x="122" y="86" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="134" y="40" width="92" height="80" rx="4" fill="#e8f5e9" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="180.0" y="78" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">14</text>
  <text class="label" x="180.0" y="104" font-size="11.5" text-anchor="middle" font-weight="bold" fill="#333">Thousands</text>
  <text class="label op" x="238" y="86" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="250" y="40" width="92" height="80" rx="4" fill="#fff8e1" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="296.0" y="78" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <text class="label" x="296.0" y="104" font-size="11.5" text-anchor="middle" font-weight="bold" fill="#333">Hundreds</text>
  <text class="label op" x="354" y="86" font-size="20" text-anchor="middle" font-weight="bold" fill="#333">+</text>
  <rect class="part block" x="366" y="40" width="92" height="80" rx="4" fill="#fce4ec" stroke="#333" stroke-width="1.5"/>
  <text class="label value" x="412.0" y="78" font-size="28" text-anchor="middle" font-weight="bold" fill="#333">12</text>
  <text class="label" x="412.0" y="104" font-size="11.5" text-anchor="middle" font-weight="bold" fill="#333">Ones</text>
  <text class="label small" x="230.0" y="140" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Each card tells how many of that place.</text>
</svg>
```

- **alt**: Four cards joined with plus signs: 3 Ten Thousands, 14 Thousands, 5 Hundreds, 12 Ones.
- **options**:
  - A) 3,14,512
  - B) 44,512
  - C) 34,512
  - D) 45,412
- **answer**: B
- **explanation**: 30,000 + 14,000 + 500 + 12 = 44,512 (14 thousands = 1 ten thousand + 4 thousands; 12 ones = 1 ten + 2 ones).
- **skill**: expanded_form
- **difficulty**: hard
- **replaces_hint**: expanded_form / place_value (e.g. text Set B Q18)

## Answer Key

### Pictorial Set A
| Q# | Answer | Correct value | figure | skill | difficulty |
|----|--------|---------------|--------|-------|------------|
| PQA01 | B | 7 | fig_001 | place_value | easy |
| PQA02 | C | 53,024 | fig_002 | expanded_form | easy |
| PQA03 | A | 9,742 | fig_003 | form_number | easy |
| PQA04 | D | Fair D | fig_004 | compare | easy |
| PQA05 | A | 28,000 | fig_005 | number_line | medium |
| PQA06 | C | 3,900 | fig_006 | round | medium |
| PQA07 | D | 26,100 | fig_007 | pattern | medium |
| PQA08 | B | Chart B | fig_008 | number_name | hard |
| PQA09 | A | 30,487 | fig_009 | form_number | hard |

Letter spread: A=3, B=2, C=2, D=2 · Difficulty: easy=4, medium=3, hard=2

### Pictorial Set B
| Q# | Answer | Correct value | figure | skill | difficulty |
|----|--------|---------------|--------|-------|------------|
| PQB01 | D | 4,000 | fig_010 | place_value | easy |
| PQB02 | A | 60,000 | fig_011 | successor_predecessor | easy |
| PQB03 | B | 80,609 | fig_012 | expanded_form | easy |
| PQB04 | C | Devgarh | fig_013 | compare | easy |
| PQB05 | A | 54,500 | fig_014 | number_line | medium |
| PQB06 | D | 17,000 | fig_015 | round | medium |
| PQB07 | C | 65,000 | fig_016 | pattern | medium |
| PQB08 | A | 4,245 | fig_017 | word_problem | hard |
| PQB09 | B | 44,512 | fig_018 | expanded_form | hard |

Letter spread: A=3, B=2, C=2, D=2 · Difficulty: easy=4, medium=3, hard=2

## Engineering notes
- **Embedding**: Each MCQ has a fenced ```` ```svg ```` block right after the stem under `**Diagram (SVG):**`. Take the block contents as-is and insert them as inline SVG markup in the question card, between the stem and the options. Do not load them as `<img src>`, or the CSS classes stop working. Use the `**alt**` line as the accessible name; the root `<svg>` also has `role="img"` and an `aria-label`.
- **Self-contained**: Every SVG has a `viewBox` and `xmlns`, uses no external fonts, images, links or `<style>`, and sets fills and strokes as attributes, so it renders the same with no CSS at all. All 18 SVGs pass an XML parser check.
- **Sizing**: Set `width: 100%; height: auto;` with the `max-width` from `css_notes` (320–460px). Text is 10–28px at the native viewBox size. Do not scale below about 300px wide on phones, or the small labels get hard to read.
- **Theming hooks**: There are class names on the elements: `.part` (shapes), `.label` / `.value` / `.digit` (text), `.arrow`, `.tick`, `.axis`, `.midpoint`, `.point`, `.missing`, `.option-label` (the A–D letters inside figures), `.highlight`. They are there for dark mode and for answer-reveal animations, for example making `.point` pulse or filling `.missing` cards after the child submits.
- **Labels in stems**: Stems name figure labels (Chart A–D, Fair A–D, the star column, point P/Q, the **?** card), and options use the same names.
- **Mixing**: Swap or add items using `replaces_hint`. For example, 9 pictorial items in a 24-item set is about 37.5% visual; 8 is about 33%.
- **Originality**: All figures, numbers, names and stems are new and were made for Mindstrong. No SOF or past-paper images, scans or traced layouts are used, only the general style (charts, tiles, number lines, bars, tables). Fair, village and metro data are made up for practice.
