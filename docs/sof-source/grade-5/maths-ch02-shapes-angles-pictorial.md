# Grade 5 Maths — Chapter 2: Shapes and Angles — Pictorial Addendum

## Meta
- grade: 5
- subject: Maths
- chapter_id: g5-maths-ch02-shapes-and-angles
- chapter_title: Shapes and Angles
- parent_file: chapter-02-shapes-and-angles.md
- content_type: original_sof_style_pictorial
- render: svg_css_in_app
- visual_target: 30-40% of practice items
- item_counts: Set A = 9 pictorial MCQs, Set B = 9 pictorial MCQs, figures = 18
- diagram_format: every MCQ embeds its own `**Diagram (SVG):**` block (inline, self-contained); the Figure Library holds the identical SVG for reuse
- quality_bar: about 40% easy, 40% medium, 20% hard; mixed question types; no near-duplicates between Set A and Set B; even answer-letter spread
- difficulty_mix: Set A 4 easy, 3 medium, 2 hard; Set B 3 easy, 4 medium, 2 hard; combined 7 / 7 / 4 = 39% / 39% / 22%
- qtype_field: each MCQ has a `qtype` (recall, application, multi_step, logical_reasoning, pattern, odd_one_out); all items are pictorial
- svg_class_names: `bg`, `title`, `label`, `label small`, `value`, `option-label`, `part`, `arm`, `vertex`, `arc`, `right-mark`, `clock`, `hour-hand`, `minute-hand`, `compass`, `arrow`, `poly`, `panel`, `tick`, `hub`, `jump`, `missing`
- skill_tags: angle_type, measure, arms_vertex, polygon, open_closed, clock_angle, turns, combine_angles, naming


## Figure Library

Each figure is original, built only from SVG shapes and text. Every pictorial MCQ below embeds the same SVG inline.

### fig_001
- **title**: Angle AVB with vertex V
- **type**: arms_vertex
- **svg**:

```svg
<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Angle with vertex V and arms VA and VB">
  <rect class="bg" x="0" y="0" width="440" height="160" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Name the parts</text>
  <line class="part arm" x1="220" y1="110" x2="304.6" y2="79.2" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="220" y1="110" x2="250.8" y2="25.4" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="220" cy="110" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 249.6 99.2 A 31.5 31.5 0 0 0 230.8 80.4" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="220" y="128" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">V</text>
  <text class="label" x="318.7" y="74.1" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">A</text>
  <text class="label" x="255.9" y="11.3" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">B</text>
  <text class="label small" x="220" y="148" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The orange dot is where the arms meet.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Two rays meet at an orange point labelled V. One arm ends at A and the other at B. A blue arc sits between the arms.

### fig_002
- **title**: Four angle type cards
- **type**: angle_type
- **svg**:

```svg
<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four angles labelled A to D">
  <rect class="bg" x="0" y="0" width="480" height="220" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which angle is a right angle?</text>
  <rect class="part panel" x="10" y="34" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="54" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <line class="part arm" x1="122" y1="89" x2="167.0" y2="89.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="122" y1="89" x2="153.8" y2="57.2" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="122" cy="89" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 137.8 89.0 A 15.7 15.7 0 0 0 133.1 77.9" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <rect class="part panel" x="245" y="34" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="54" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <line class="part arm" x1="357" y1="89" x2="402.0" y2="89.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="357" y1="89" x2="357.0" y2="44.0" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="357" cy="89" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <polyline class="part right-mark" points="369.0,89.0 369.0,77.0 357.0,77.0" fill="none" stroke="#e65100" stroke-width="2"/>
  <rect class="part panel" x="10" y="120" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="140" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <line class="part arm" x1="122" y1="175" x2="167.0" y2="175.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="122" y1="175" x2="90.2" y2="143.2" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="122" cy="175" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 137.8 175.0 A 15.7 15.7 0 0 0 110.9 163.9" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <rect class="part panel" x="245" y="120" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="140" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <line class="part arm" x1="357" y1="175" x2="402.0" y2="175.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="357" y1="175" x2="312.0" y2="175.0" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="357" cy="175" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Four panels. A shows a sharp acute angle. B shows a square corner with an orange right-angle mark. C shows a wide obtuse angle. D shows a straight angle.

### fig_003
- **title**: Angle marked 55°
- **type**: angle_type
- **svg**:

```svg
<svg viewBox="0 0 440 165" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Angle measuring 55 degrees">
  <rect class="bg" x="0" y="0" width="440" height="165" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Read the angle</text>
  <line class="part arm" x1="40" y1="130" x2="400" y2="130" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="80" y1="130" x2="160.3" y2="15.3" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="80" cy="130" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 140 130 A 60 60 0 0 0 114.4 80.9" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="145" y="110" font-size="18" text-anchor="middle" font-weight="bold" fill="#1565c0">55°</text>
  <text class="label small" x="220" y="152" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The blue arc shows the opening of the angle.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A baseline with a second arm opening upward. A blue arc between them is labelled 55°.

### fig_004
- **title**: Four polygons A–D
- **type**: polygon
- **svg**:

```svg
<svg viewBox="0 0 470 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four polygons labelled A to D">
  <rect class="bg" x="0" y="0" width="470" height="190" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Count the sides</text>
  <polygon class="part poly" points="70.0,58.0 106.4,121.0 33.6,121.0" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="70" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">A</text>
  <polygon class="part poly" points="180.0,58.0 222.0,100.0 180.0,142.0 138.0,100.0" fill="#e8f5e9" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="180" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">B</text>
  <polygon class="part poly" points="290.0,58.0 329.9,87.0 314.7,134.0 265.3,134.0 250.1,87.0" fill="#fff8e1" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="290" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">C</text>
  <polygon class="part poly" points="400.0,58.0 436.4,79.0 436.4,121.0 400.0,142.0 363.6,121.0 363.6,79.0" fill="#fce4ec" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="400" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">D</text>
  <text class="label small" x="240" y="178" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All shapes are closed with straight sides.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Four shapes in a row. A is a triangle, B a square, C a pentagon and D a hexagon.

### fig_005
- **title**: Clock showing 3:00
- **type**: clock_angle
- **svg**:

```svg
<svg viewBox="0 0 400 245" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Clock with hands at 3 o clock">
  <rect class="bg" x="0" y="0" width="400" height="245" fill="#fff"/>
  <text class="title" x="200" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Clock hands at 3:00</text>
  <circle class="part clock" cx="200" cy="130" r="85" fill="#fffde7" stroke="#333" stroke-width="2"/>
  <circle class="part hub" cx="200" cy="130" r="4" fill="#333"/>
  <line class="tick" x1="200.0" y1="49.0" x2="200.0" y2="57.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="67.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">12</text>
  <line class="tick" x1="240.5" y1="59.9" x2="236.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <line class="tick" x1="270.1" y1="89.5" x2="263.2" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <line class="tick" x1="281.0" y1="130.0" x2="273.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="263.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <line class="tick" x1="270.1" y1="170.5" x2="263.2" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <line class="tick" x1="240.5" y1="200.1" x2="236.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <line class="tick" x1="200.0" y1="211.0" x2="200.0" y2="203.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="193.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <line class="tick" x1="159.5" y1="200.1" x2="163.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <line class="tick" x1="129.9" y1="170.5" x2="136.8" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <line class="tick" x1="119.0" y1="130.0" x2="127.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="137.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <line class="tick" x1="129.9" y1="89.5" x2="136.8" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">10</text>
  <line class="tick" x1="159.5" y1="59.9" x2="163.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">11</text>
  <line class="part hour-hand" x1="200" y1="130" x2="242.5" y2="130.0" stroke="#1565c0" stroke-width="4" stroke-linecap="round"/>
  <line class="part minute-hand" x1="200" y1="130" x2="200.0" y2="68.8" stroke="#e65100" stroke-width="3" stroke-linecap="round"/>
  <text class="label small" x="200" y="230" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Blue = hour hand · Orange = minute hand</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A clock face. The minute hand points to 12 and the hour hand points to 3.

### fig_006
- **title**: Open and closed shapes
- **type**: open_closed
- **svg**:

```svg
<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four shapes A to D open or closed">
  <rect class="bg" x="0" y="0" width="480" height="240" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Open or closed?</text>
  <rect class="part panel" x="10" y="34" width="225" height="90" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <polygon class="part" points="122,50 162,110 82,110" fill="#c8e6c9" stroke="#333" stroke-width="2"/>
  <rect class="part panel" x="245" y="34" width="225" height="90" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <path class="part" d="M 410 70 A 35 35 0 1 0 410 108" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"/>
  <rect class="part panel" x="10" y="134" width="225" height="90" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="156" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <circle class="part" cx="122" cy="180" r="32" fill="#bbdefb" stroke="#333" stroke-width="2"/>
  <rect class="part panel" x="245" y="134" width="225" height="90" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="156" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <path class="part" d="M 280 180 Q 310 150 340 180 T 400 180" fill="none" stroke="#333" stroke-width="3"/>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Four panels. A is a closed triangle. B is an open C-shaped curve. C is a closed circle. D is an open wavy line.

### fig_007
- **title**: Compass quarter turn clockwise
- **type**: turns
- **svg**:

```svg
<svg viewBox="0 0 440 235" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Compass facing North with quarter turn clockwise">
  <rect class="bg" x="0" y="0" width="440" height="235" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Quarter turn clockwise</text>
  <circle class="part compass" cx="140" cy="120" r="55" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label" x="140.0" y="49.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">N</text>
  <text class="label" x="211.0" y="120.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">E</text>
  <text class="label" x="140.0" y="191.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">S</text>
  <text class="label" x="69.0" y="120.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">W</text>
  <polygon class="part arrow" points="140.0,75.0 130.4,136.7 149.6,136.7" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <circle class="part hub" cx="140" cy="120" r="5" fill="#333"/>
  <text class="label" x="140" y="200" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Start: facing North</text>
  <path class="arrow jump" d="M 220 90 A 40 40 0 0 1 260 130" fill="none" stroke="#e65100" stroke-width="2.5"/>
  <polygon class="arrow" points="262,132 252,128 258,120" fill="#e65100"/>
  <text class="label" x="300" y="100" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">¼ turn</text>
  <text class="label" x="300" y="120" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">clockwise</text>
  <text class="label small" x="220" y="220" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Clockwise means the same way clock hands turn.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A compass rose with an orange arrow pointing North. A curved orange arrow shows a quarter turn clockwise.

### fig_008
- **title**: Straight line split 70° and ?
- **type**: combine_angles
- **svg**:

```svg
<svg viewBox="0 0 480 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Straight line with 70 degree angle and missing angle">
  <rect class="bg" x="0" y="0" width="480" height="190" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Angles on a straight line</text>
  <line class="part arm" x1="30" y1="140" x2="450" y2="140" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="240" y1="140" x2="240" y2="40" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="240" y1="140" x2="281.0" y2="27.2" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="240" cy="140" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 180 140 A 60 60 0 0 0 260.5 83.6" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="175" y="115" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">70°</text>
  <path class="part arc" d="M 258.8 88.3 A 55 55 0 0 0 300 140" fill="none" stroke="#e65100" stroke-width="2" stroke-dasharray="4 3"/>
  <text class="label" x="290" y="105" font-size="20" text-anchor="middle" font-weight="bold" fill="#e65100">?</text>
  <text class="label small" x="240" y="175" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">A straight line measures 180°.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A straight line with a ray from the middle. The left opening is labelled 70°. The right opening is labelled with a question mark.

### fig_009
- **title**: Clock showing 2:00
- **type**: clock_angle
- **svg**:

```svg
<svg viewBox="0 0 400 245" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Clock with hands at 2 o clock">
  <rect class="bg" x="0" y="0" width="400" height="245" fill="#fff"/>
  <text class="title" x="200" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Clock hands at 2:00</text>
  <circle class="part clock" cx="200" cy="130" r="85" fill="#fffde7" stroke="#333" stroke-width="2"/>
  <circle class="part hub" cx="200" cy="130" r="4" fill="#333"/>
  <line class="tick" x1="200.0" y1="49.0" x2="200.0" y2="57.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="67.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">12</text>
  <line class="tick" x1="240.5" y1="59.9" x2="236.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <line class="tick" x1="270.1" y1="89.5" x2="263.2" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <line class="tick" x1="281.0" y1="130.0" x2="273.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="263.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <line class="tick" x1="270.1" y1="170.5" x2="263.2" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <line class="tick" x1="240.5" y1="200.1" x2="236.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <line class="tick" x1="200.0" y1="211.0" x2="200.0" y2="203.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="193.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <line class="tick" x1="159.5" y1="200.1" x2="163.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <line class="tick" x1="129.9" y1="170.5" x2="136.8" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <line class="tick" x1="119.0" y1="130.0" x2="127.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="137.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <line class="tick" x1="129.9" y1="89.5" x2="136.8" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">10</text>
  <line class="tick" x1="159.5" y1="59.9" x2="163.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">11</text>
  <line class="part hour-hand" x1="200" y1="130" x2="236.8" y2="108.8" stroke="#1565c0" stroke-width="4" stroke-linecap="round"/>
  <line class="part minute-hand" x1="200" y1="130" x2="200.0" y2="68.8" stroke="#e65100" stroke-width="3" stroke-linecap="round"/>
  <text class="label small" x="200" y="230" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Each hour mark is 30° around the clock.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A clock face. The minute hand points to 12 and the hour hand points to 2.

### fig_010
- **title**: Angle marked 140°
- **type**: angle_type
- **svg**:

```svg
<svg viewBox="0 0 440 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Angle measuring 140 degrees">
  <rect class="bg" x="0" y="0" width="440" height="170" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Read the angle</text>
  <line class="part arm" x1="40" y1="130" x2="400" y2="130" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="80" y1="130" x2="-19.6" y2="46.4" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="80" cy="130" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 150 130 A 70 70 0 0 0 26.4 85.0" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="160" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#1565c0">140°</text>
  <text class="label small" x="220" y="155" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Compare the opening with a square corner.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A baseline with a second arm opening wide. A blue arc between them is labelled 140°.

### fig_011
- **title**: Angle ABC labelled
- **type**: naming
- **svg**:

```svg
<svg viewBox="0 0 440 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Angle ABC with points A B and C">
  <rect class="bg" x="0" y="0" width="440" height="180" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Name this angle</text>
  <line class="part arm" x1="126.0" y1="85.8" x2="220" y2="120" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="220" y1="120" x2="314.0" y2="85.8" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="220" cy="120" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <circle class="part point" cx="126.0" cy="85.8" r="4" fill="#42a5f5" stroke="#333" stroke-width="1"/>
  <circle class="part point" cx="314.0" cy="85.8" r="4" fill="#42a5f5" stroke="#333" stroke-width="1"/>
  <text class="label" x="126.0" y="71.8" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">A</text>
  <text class="label" x="220" y="142" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">B</text>
  <text class="label" x="314.0" y="71.8" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">C</text>
  <text class="label small" x="220" y="165" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The middle letter names the vertex.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Two arms meet at orange point B. Point A is on one arm and point C is on the other.

### fig_012
- **title**: Find the pentagon
- **type**: polygon
- **svg**:

```svg
<svg viewBox="0 0 470 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four polygons find the pentagon">
  <rect class="bg" x="0" y="0" width="470" height="190" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which shape is a pentagon?</text>
  <polygon class="part poly" points="70.0,60.0 110.0,100.0 70.0,140.0 30.0,100.0" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="70" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">A</text>
  <polygon class="part poly" points="180.0,60.0 214.6,80.0 214.6,120.0 180.0,140.0 145.4,120.0 145.4,80.0" fill="#e8f5e9" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="180" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">B</text>
  <polygon class="part poly" points="290.0,60.0 328.0,87.6 313.5,132.4 266.5,132.4 252.0,87.6" fill="#fff8e1" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="290" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">C</text>
  <polygon class="part poly" points="400.0,60.0 428.3,71.7 440.0,100.0 428.3,128.3 400.0,140.0 371.7,128.3 360.0,100.0 371.7,71.7" fill="#fce4ec" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="400" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">D</text>
  <text class="label small" x="240" y="178" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Count the straight sides of each shape.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Four shapes. A has 4 sides, B has 6, C has 5 and D has 8.

### fig_013
- **title**: Compass half turn from East
- **type**: turns
- **svg**:

```svg
<svg viewBox="0 0 440 235" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Compass facing East with half turn">
  <rect class="bg" x="0" y="0" width="440" height="235" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Half turn</text>
  <circle class="part compass" cx="140" cy="120" r="55" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label" x="140.0" y="49.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">N</text>
  <text class="label" x="211.0" y="120.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">E</text>
  <text class="label" x="140.0" y="191.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">S</text>
  <text class="label" x="69.0" y="120.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">W</text>
  <polygon class="part arrow" points="185.0,120.0 123.3,110.4 123.3,129.6" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <circle class="part hub" cx="140" cy="120" r="5" fill="#333"/>
  <text class="label" x="140" y="200" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Start: facing East</text>
  <path class="arrow jump" d="M 220 80 A 50 50 0 0 1 220 160" fill="none" stroke="#e65100" stroke-width="2.5"/>
  <polygon class="arrow" points="220,162 214,152 226,152" fill="#e65100"/>
  <text class="label" x="300" y="110" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">½ turn</text>
  <text class="label" x="300" y="130" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">(180°)</text>
  <text class="label small" x="220" y="220" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">A half turn faces you the opposite way.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A compass with an orange arrow pointing East. A curved arrow shows a half turn of 180°.

### fig_014
- **title**: Clock showing 4:00
- **type**: clock_angle
- **svg**:

```svg
<svg viewBox="0 0 400 245" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Clock with hands at 4 o clock">
  <rect class="bg" x="0" y="0" width="400" height="245" fill="#fff"/>
  <text class="title" x="200" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Clock hands at 4:00</text>
  <circle class="part clock" cx="200" cy="130" r="85" fill="#fffde7" stroke="#333" stroke-width="2"/>
  <circle class="part hub" cx="200" cy="130" r="4" fill="#333"/>
  <line class="tick" x1="200.0" y1="49.0" x2="200.0" y2="57.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="67.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">12</text>
  <line class="tick" x1="240.5" y1="59.9" x2="236.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <line class="tick" x1="270.1" y1="89.5" x2="263.2" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <line class="tick" x1="281.0" y1="130.0" x2="273.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="263.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <line class="tick" x1="270.1" y1="170.5" x2="263.2" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <line class="tick" x1="240.5" y1="200.1" x2="236.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <line class="tick" x1="200.0" y1="211.0" x2="200.0" y2="203.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="193.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <line class="tick" x1="159.5" y1="200.1" x2="163.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <line class="tick" x1="129.9" y1="170.5" x2="136.8" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <line class="tick" x1="119.0" y1="130.0" x2="127.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="137.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <line class="tick" x1="129.9" y1="89.5" x2="136.8" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">10</text>
  <line class="tick" x1="159.5" y1="59.9" x2="163.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">11</text>
  <line class="part hour-hand" x1="200" y1="130" x2="236.8" y2="151.2" stroke="#1565c0" stroke-width="4" stroke-linecap="round"/>
  <line class="part minute-hand" x1="200" y1="130" x2="200.0" y2="68.8" stroke="#e65100" stroke-width="3" stroke-linecap="round"/>
  <text class="label small" x="200" y="230" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Minute hand at 12 · Hour hand at 4</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A clock face. The minute hand points to 12 and the hour hand points to 4.

### fig_015
- **title**: Four right angles around point one missing
- **type**: combine_angles
- **svg**:

```svg
<svg viewBox="0 0 480 265" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Cross with three 90 degree labels and one question mark">
  <rect class="bg" x="0" y="0" width="480" height="265" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Angles around a point</text>
  <line class="part arm" x1="80" y1="130" x2="400" y2="130" stroke="#333" stroke-width="2"/>
  <line class="part arm" x1="240" y1="30" x2="240" y2="230" stroke="#333" stroke-width="2"/>
  <circle class="part vertex" cx="240" cy="130" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280" y="100" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">90°</text>
  <text class="label" x="280" y="170" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">90°</text>
  <text class="label" x="185" y="100" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">90°</text>
  <text class="label" x="185" y="170" font-size="18" text-anchor="middle" font-weight="bold" fill="#e65100">?</text>
  <text class="label small" x="240" y="250" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">A full turn around a point is 360°.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Two crossing lines make four right angles at the centre. Three sectors are labelled 90° and one is labelled with a question mark.

### fig_016
- **title**: Odd angle out
- **type**: angle_type
- **svg**:

```svg
<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four angles find the odd one out">
  <rect class="bg" x="0" y="0" width="480" height="230" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Odd one out</text>
  <rect class="part panel" x="10" y="40" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="60" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <line class="part arm" x1="130" y1="95" x2="170.0" y2="95.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="130" y1="95" x2="164.6" y2="75.0" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="130" cy="95" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 144.0 95.0 A 14.0 14.0 0 0 0 142.1 88.0" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="151.3" y="89.3" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">30°</text>
  <rect class="part panel" x="245" y="40" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="60" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <line class="part arm" x1="365" y1="95" x2="405.0" y2="95.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="365" y1="95" x2="393.3" y2="66.7" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="365" cy="95" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 379.0 95.0 A 14.0 14.0 0 0 0 374.9 85.1" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="385.3" y="86.6" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">45°</text>
  <rect class="part panel" x="10" y="130" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="150" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <line class="part arm" x1="130" y1="185" x2="170.0" y2="185.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="130" y1="185" x2="126.5" y2="145.2" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="130" cy="185" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 144.0 185.0 A 14.0 14.0 0 0 0 128.8 171.1" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="144.9" y="168.8" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">95°</text>
  <rect class="part panel" x="245" y="130" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="150" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <line class="part arm" x1="365" y1="185" x2="405.0" y2="185.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="365" y1="185" x2="385.0" y2="150.4" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="365" cy="185" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 379.0 185.0 A 14.0 14.0 0 0 0 372.0 172.9" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="384.1" y="174.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">60°</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: Four angle cards labelled with their measures: A 30°, B 45°, C 95° and D 60°.

### fig_017
- **title**: Three-quarter turn anticlockwise
- **type**: turns
- **svg**:

```svg
<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Compass with three quarter turn anticlockwise">
  <rect class="bg" x="0" y="0" width="460" height="240" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Three-quarter turn anticlockwise</text>
  <circle class="part compass" cx="140" cy="125" r="55" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label" x="140.0" y="54.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">N</text>
  <text class="label" x="211.0" y="125.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">E</text>
  <text class="label" x="140.0" y="196.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">S</text>
  <text class="label" x="69.0" y="125.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">W</text>
  <polygon class="part arrow" points="140.0,80.0 130.4,141.7 149.6,141.7" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <circle class="part hub" cx="140" cy="125" r="5" fill="#333"/>
  <text class="label" x="140" y="205" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Start: facing North</text>
  <path class="arrow jump" d="M 210 70 A 55 55 0 1 0 210 180" fill="none" stroke="#e65100" stroke-width="2.5"/>
  <polygon class="arrow" points="208,182 214,172 202,174" fill="#e65100"/>
  <text class="label" x="310" y="110" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">¾ turn</text>
  <text class="label" x="310" y="130" font-size="13" text-anchor="middle" font-weight="bold" fill="#e65100">anticlockwise</text>
  <text class="label" x="310" y="150" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">(270°)</text>
  <text class="label small" x="240" y="225" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Anticlockwise is opposite to clock hands.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A compass facing North with a curved arrow showing a three-quarter turn anticlockwise.

### fig_018
- **title**: Right angle split by 45° ray
- **type**: combine_angles
- **svg**:

```svg
<svg viewBox="0 0 440 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Right angle with 45 degree ray and missing angle">
  <rect class="bg" x="0" y="0" width="440" height="190" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Two equal angles</text>
  <line class="part arm" x1="60" y1="150" x2="380" y2="150" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="220" y1="150" x2="220" y2="40" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="220" y1="150" x2="283.6" y2="86.4" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="220" cy="150" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="250" y="125" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">45°</text>
  <text class="label" x="185" y="100" font-size="18" text-anchor="middle" font-weight="bold" fill="#e65100">?</text>
  <text class="label small" x="220" y="175" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The upright arm makes a right angle with the baseline.</text>
</svg>
```

- **css_notes**: max-width: 480px; width: 100%; height: auto; Keep `font-size` as set; do not scale below about 320px wide.
- **alt**: A baseline and an upright arm form a right angle. A ray at 45° sits between them. One small angle is labelled 45° and the other is labelled with a question mark.

## Pictorial Set A

### PQA01
- **figure**: fig_001
- **stem**: Look at Name the parts. What is the **orange point V** called?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Angle with vertex V and arms VA and VB">
  <rect class="bg" x="0" y="0" width="440" height="160" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Name the parts</text>
  <line class="part arm" x1="220" y1="110" x2="304.6" y2="79.2" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="220" y1="110" x2="250.8" y2="25.4" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="220" cy="110" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 249.6 99.2 A 31.5 31.5 0 0 0 230.8 80.4" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="220" y="128" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">V</text>
  <text class="label" x="318.7" y="74.1" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">A</text>
  <text class="label" x="255.9" y="11.3" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">B</text>
  <text class="label small" x="220" y="148" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The orange dot is where the arms meet.</text>
</svg>
```

- **alt**: Two rays meet at an orange point labelled V. One arm ends at A and the other at B. A blue arc sits between the arms.
- **options**:
  - A) An arm
  - B) A side
  - C) The vertex
  - D) A base
- **answer**: C
- **explanation**: The common meeting point of the two arms is the vertex, shown here as the orange point V.
- **skill**: arms_vertex
- **qtype**: recall
- **difficulty**: easy
- **replaces_hint**: arms_vertex (e.g. text Set A Q04)

### PQA02
- **figure**: fig_002
- **stem**: Look at the four angles. Which panel shows a **right angle**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four angles labelled A to D">
  <rect class="bg" x="0" y="0" width="480" height="220" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which angle is a right angle?</text>
  <rect class="part panel" x="10" y="34" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="54" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <line class="part arm" x1="122" y1="89" x2="167.0" y2="89.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="122" y1="89" x2="153.8" y2="57.2" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="122" cy="89" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 137.8 89.0 A 15.7 15.7 0 0 0 133.1 77.9" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <rect class="part panel" x="245" y="34" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="54" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <line class="part arm" x1="357" y1="89" x2="402.0" y2="89.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="357" y1="89" x2="357.0" y2="44.0" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="357" cy="89" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <polyline class="part right-mark" points="369.0,89.0 369.0,77.0 357.0,77.0" fill="none" stroke="#e65100" stroke-width="2"/>
  <rect class="part panel" x="10" y="120" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="140" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <line class="part arm" x1="122" y1="175" x2="167.0" y2="175.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="122" y1="175" x2="90.2" y2="143.2" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="122" cy="175" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 137.8 175.0 A 15.7 15.7 0 0 0 110.9 163.9" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <rect class="part panel" x="245" y="120" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="140" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <line class="part arm" x1="357" y1="175" x2="402.0" y2="175.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="357" y1="175" x2="312.0" y2="175.0" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="357" cy="175" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
</svg>
```

- **alt**: Four panels. A shows a sharp acute angle. B shows a square corner with an orange right-angle mark. C shows a wide obtuse angle. D shows a straight angle.
- **options**:
  - A) Panel A
  - B) Panel B
  - C) Panel C
  - D) Panel D
- **answer**: B
- **explanation**: Panel B has a square corner with a right-angle mark, so it is 90°. A is acute, C is obtuse and D is straight.
- **skill**: angle_type
- **qtype**: recall
- **difficulty**: easy
- **replaces_hint**: angle_type (e.g. text Set A Q01)

### PQA03
- **figure**: fig_003
- **stem**: Look at Read the angle. What **type** of angle is shown?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 165" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Angle measuring 55 degrees">
  <rect class="bg" x="0" y="0" width="440" height="165" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Read the angle</text>
  <line class="part arm" x1="40" y1="130" x2="400" y2="130" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="80" y1="130" x2="160.3" y2="15.3" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="80" cy="130" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 140 130 A 60 60 0 0 0 114.4 80.9" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="145" y="110" font-size="18" text-anchor="middle" font-weight="bold" fill="#1565c0">55°</text>
  <text class="label small" x="220" y="152" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The blue arc shows the opening of the angle.</text>
</svg>
```

- **alt**: A baseline with a second arm opening upward. A blue arc between them is labelled 55°.
- **options**:
  - A) Obtuse
  - B) Straight
  - C) Right
  - D) Acute
- **answer**: D
- **explanation**: 55° is greater than 0° and less than 90°, so the angle is acute.
- **skill**: angle_type
- **qtype**: application
- **difficulty**: easy
- **replaces_hint**: angle_type (e.g. text Set A Q07)

### PQA04
- **figure**: fig_004
- **stem**: Look at Count the sides. Which shape is a **triangle**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 470 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four polygons labelled A to D">
  <rect class="bg" x="0" y="0" width="470" height="190" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Count the sides</text>
  <polygon class="part poly" points="70.0,58.0 106.4,121.0 33.6,121.0" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="70" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">A</text>
  <polygon class="part poly" points="180.0,58.0 222.0,100.0 180.0,142.0 138.0,100.0" fill="#e8f5e9" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="180" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">B</text>
  <polygon class="part poly" points="290.0,58.0 329.9,87.0 314.7,134.0 265.3,134.0 250.1,87.0" fill="#fff8e1" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="290" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">C</text>
  <polygon class="part poly" points="400.0,58.0 436.4,79.0 436.4,121.0 400.0,142.0 363.6,121.0 363.6,79.0" fill="#fce4ec" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="400" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">D</text>
  <text class="label small" x="240" y="178" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">All shapes are closed with straight sides.</text>
</svg>
```

- **alt**: Four shapes in a row. A is a triangle, B a square, C a pentagon and D a hexagon.
- **options**:
  - A) Shape A
  - B) Shape B
  - C) Shape C
  - D) Shape D
- **answer**: A
- **explanation**: A triangle has 3 straight sides. Shape A is the only triangle.
- **skill**: polygon
- **qtype**: recall
- **difficulty**: easy
- **replaces_hint**: polygon (e.g. text Set A Q05)

### PQA05
- **figure**: fig_005
- **stem**: Look at the clock at 3:00. What angle do the hands make?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 400 245" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Clock with hands at 3 o clock">
  <rect class="bg" x="0" y="0" width="400" height="245" fill="#fff"/>
  <text class="title" x="200" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Clock hands at 3:00</text>
  <circle class="part clock" cx="200" cy="130" r="85" fill="#fffde7" stroke="#333" stroke-width="2"/>
  <circle class="part hub" cx="200" cy="130" r="4" fill="#333"/>
  <line class="tick" x1="200.0" y1="49.0" x2="200.0" y2="57.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="67.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">12</text>
  <line class="tick" x1="240.5" y1="59.9" x2="236.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <line class="tick" x1="270.1" y1="89.5" x2="263.2" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <line class="tick" x1="281.0" y1="130.0" x2="273.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="263.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <line class="tick" x1="270.1" y1="170.5" x2="263.2" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <line class="tick" x1="240.5" y1="200.1" x2="236.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <line class="tick" x1="200.0" y1="211.0" x2="200.0" y2="203.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="193.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <line class="tick" x1="159.5" y1="200.1" x2="163.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <line class="tick" x1="129.9" y1="170.5" x2="136.8" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <line class="tick" x1="119.0" y1="130.0" x2="127.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="137.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <line class="tick" x1="129.9" y1="89.5" x2="136.8" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">10</text>
  <line class="tick" x1="159.5" y1="59.9" x2="163.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">11</text>
  <line class="part hour-hand" x1="200" y1="130" x2="242.5" y2="130.0" stroke="#1565c0" stroke-width="4" stroke-linecap="round"/>
  <line class="part minute-hand" x1="200" y1="130" x2="200.0" y2="68.8" stroke="#e65100" stroke-width="3" stroke-linecap="round"/>
  <text class="label small" x="200" y="230" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Blue = hour hand · Orange = minute hand</text>
</svg>
```

- **alt**: A clock face. The minute hand points to 12 and the hour hand points to 3.
- **options**:
  - A) 45°
  - B) 60°
  - C) 90°
  - D) 180°
- **answer**: C
- **explanation**: From 12 to 3 is a quarter of the clock face, and a quarter of 360° is 90°.
- **skill**: clock_angle
- **qtype**: application
- **difficulty**: medium
- **replaces_hint**: clock_angle (e.g. text Set A Q08)

### PQA06
- **figure**: fig_006
- **stem**: Look at Open or closed? Which shape is a **closed triangle**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four shapes A to D open or closed">
  <rect class="bg" x="0" y="0" width="480" height="240" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Open or closed?</text>
  <rect class="part panel" x="10" y="34" width="225" height="90" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <polygon class="part" points="122,50 162,110 82,110" fill="#c8e6c9" stroke="#333" stroke-width="2"/>
  <rect class="part panel" x="245" y="34" width="225" height="90" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="56" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <path class="part" d="M 410 70 A 35 35 0 1 0 410 108" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"/>
  <rect class="part panel" x="10" y="134" width="225" height="90" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="156" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <circle class="part" cx="122" cy="180" r="32" fill="#bbdefb" stroke="#333" stroke-width="2"/>
  <rect class="part panel" x="245" y="134" width="225" height="90" rx="8" fill="#fff" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="156" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <path class="part" d="M 280 180 Q 310 150 340 180 T 400 180" fill="none" stroke="#333" stroke-width="3"/>
</svg>
```

- **alt**: Four panels. A is a closed triangle. B is an open C-shaped curve. C is a closed circle. D is an open wavy line.
- **options**:
  - A) Shape A
  - B) Shape B
  - C) Shape C
  - D) Shape D
- **answer**: A
- **explanation**: Shape A is a triangle with no gaps. B and D are open, and C is a closed circle, not a triangle.
- **skill**: open_closed
- **qtype**: logical_reasoning
- **difficulty**: medium
- **replaces_hint**: open_closed (e.g. text Set A Q06)

### PQA07
- **figure**: fig_007
- **stem**: Look at Quarter turn clockwise. The child starts facing North. After the turn, where does the child face?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 235" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Compass facing North with quarter turn clockwise">
  <rect class="bg" x="0" y="0" width="440" height="235" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Quarter turn clockwise</text>
  <circle class="part compass" cx="140" cy="120" r="55" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label" x="140.0" y="49.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">N</text>
  <text class="label" x="211.0" y="120.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">E</text>
  <text class="label" x="140.0" y="191.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">S</text>
  <text class="label" x="69.0" y="120.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">W</text>
  <polygon class="part arrow" points="140.0,75.0 130.4,136.7 149.6,136.7" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <circle class="part hub" cx="140" cy="120" r="5" fill="#333"/>
  <text class="label" x="140" y="200" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Start: facing North</text>
  <path class="arrow jump" d="M 220 90 A 40 40 0 0 1 260 130" fill="none" stroke="#e65100" stroke-width="2.5"/>
  <polygon class="arrow" points="262,132 252,128 258,120" fill="#e65100"/>
  <text class="label" x="300" y="100" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">¼ turn</text>
  <text class="label" x="300" y="120" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">clockwise</text>
  <text class="label small" x="220" y="220" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Clockwise means the same way clock hands turn.</text>
</svg>
```

- **alt**: A compass rose with an orange arrow pointing North. A curved orange arrow shows a quarter turn clockwise.
- **options**:
  - A) West
  - B) East
  - C) South
  - D) North
- **answer**: B
- **explanation**: A quarter turn clockwise from North lands on East (N → E → S → W).
- **skill**: turns
- **qtype**: application
- **difficulty**: medium
- **replaces_hint**: turns (e.g. text Set A Q12)

### PQA08
- **figure**: fig_008
- **stem**: Look at Angles on a straight line. One angle is 70°. What is the **missing** angle?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Straight line with 70 degree angle and missing angle">
  <rect class="bg" x="0" y="0" width="480" height="190" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Angles on a straight line</text>
  <line class="part arm" x1="30" y1="140" x2="450" y2="140" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="240" y1="140" x2="240" y2="40" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="240" y1="140" x2="281.0" y2="27.2" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="240" cy="140" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 180 140 A 60 60 0 0 0 260.5 83.6" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="175" y="115" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">70°</text>
  <path class="part arc" d="M 258.8 88.3 A 55 55 0 0 0 300 140" fill="none" stroke="#e65100" stroke-width="2" stroke-dasharray="4 3"/>
  <text class="label" x="290" y="105" font-size="20" text-anchor="middle" font-weight="bold" fill="#e65100">?</text>
  <text class="label small" x="240" y="175" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">A straight line measures 180°.</text>
</svg>
```

- **alt**: A straight line with a ray from the middle. The left opening is labelled 70°. The right opening is labelled with a question mark.
- **options**:
  - A) 70°
  - B) 90°
  - C) 20°
  - D) 110°
- **answer**: D
- **explanation**: Angles on a straight line add to 180°, so the missing angle is 180° − 70° = 110°.
- **skill**: combine_angles
- **qtype**: multi_step
- **difficulty**: hard
- **replaces_hint**: combine_angles (e.g. text Set A Q14)

### PQA09
- **figure**: fig_009
- **stem**: Look at the clock at 2:00. What angle do the hands make?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 400 245" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Clock with hands at 2 o clock">
  <rect class="bg" x="0" y="0" width="400" height="245" fill="#fff"/>
  <text class="title" x="200" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Clock hands at 2:00</text>
  <circle class="part clock" cx="200" cy="130" r="85" fill="#fffde7" stroke="#333" stroke-width="2"/>
  <circle class="part hub" cx="200" cy="130" r="4" fill="#333"/>
  <line class="tick" x1="200.0" y1="49.0" x2="200.0" y2="57.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="67.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">12</text>
  <line class="tick" x1="240.5" y1="59.9" x2="236.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <line class="tick" x1="270.1" y1="89.5" x2="263.2" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <line class="tick" x1="281.0" y1="130.0" x2="273.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="263.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <line class="tick" x1="270.1" y1="170.5" x2="263.2" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <line class="tick" x1="240.5" y1="200.1" x2="236.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <line class="tick" x1="200.0" y1="211.0" x2="200.0" y2="203.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="193.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <line class="tick" x1="159.5" y1="200.1" x2="163.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <line class="tick" x1="129.9" y1="170.5" x2="136.8" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <line class="tick" x1="119.0" y1="130.0" x2="127.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="137.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <line class="tick" x1="129.9" y1="89.5" x2="136.8" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">10</text>
  <line class="tick" x1="159.5" y1="59.9" x2="163.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">11</text>
  <line class="part hour-hand" x1="200" y1="130" x2="236.8" y2="108.8" stroke="#1565c0" stroke-width="4" stroke-linecap="round"/>
  <line class="part minute-hand" x1="200" y1="130" x2="200.0" y2="68.8" stroke="#e65100" stroke-width="3" stroke-linecap="round"/>
  <text class="label small" x="200" y="230" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Each hour mark is 30° around the clock.</text>
</svg>
```

- **alt**: A clock face. The minute hand points to 12 and the hour hand points to 2.
- **options**:
  - A) 30°
  - B) 60°
  - C) 90°
  - D) 120°
- **answer**: B
- **explanation**: Each hour mark is 30°. From 12 to 2 is 2 × 30° = 60°.
- **skill**: clock_angle
- **qtype**: logical_reasoning
- **difficulty**: hard
- **replaces_hint**: clock_angle (e.g. text Set A Q20)

## Pictorial Set B

### PQB01
- **figure**: fig_010
- **stem**: Look at Read the angle. What **type** of angle is shown?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Angle measuring 140 degrees">
  <rect class="bg" x="0" y="0" width="440" height="170" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Read the angle</text>
  <line class="part arm" x1="40" y1="130" x2="400" y2="130" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="80" y1="130" x2="-19.6" y2="46.4" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="80" cy="130" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 150 130 A 70 70 0 0 0 26.4 85.0" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="160" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#1565c0">140°</text>
  <text class="label small" x="220" y="155" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Compare the opening with a square corner.</text>
</svg>
```

- **alt**: A baseline with a second arm opening wide. A blue arc between them is labelled 140°.
- **options**:
  - A) Acute
  - B) Right
  - C) Straight
  - D) Obtuse
- **answer**: D
- **explanation**: 140° is greater than 90° and less than 180°, so the angle is obtuse.
- **skill**: angle_type
- **qtype**: recall
- **difficulty**: easy
- **replaces_hint**: angle_type (e.g. text Set B Q01)

### PQB02
- **figure**: fig_011
- **stem**: Look at Name this angle. Using the three points, what is the correct name?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Angle ABC with points A B and C">
  <rect class="bg" x="0" y="0" width="440" height="180" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Name this angle</text>
  <line class="part arm" x1="126.0" y1="85.8" x2="220" y2="120" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="220" y1="120" x2="314.0" y2="85.8" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="220" cy="120" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <circle class="part point" cx="126.0" cy="85.8" r="4" fill="#42a5f5" stroke="#333" stroke-width="1"/>
  <circle class="part point" cx="314.0" cy="85.8" r="4" fill="#42a5f5" stroke="#333" stroke-width="1"/>
  <text class="label" x="126.0" y="71.8" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">A</text>
  <text class="label" x="220" y="142" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">B</text>
  <text class="label" x="314.0" y="71.8" font-size="14" text-anchor="middle" font-weight="bold" fill="#333">C</text>
  <text class="label small" x="220" y="165" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The middle letter names the vertex.</text>
</svg>
```

- **alt**: Two arms meet at orange point B. Point A is on one arm and point C is on the other.
- **options**:
  - A) Angle BAC
  - B) Angle ABC
  - C) Angle ACB
  - D) Angle CAB
- **answer**: B
- **explanation**: The vertex letter goes in the middle, so the angle is named angle ABC (or CBA).
- **skill**: naming
- **qtype**: application
- **difficulty**: easy
- **replaces_hint**: naming (e.g. text Set B Q17)

### PQB03
- **figure**: fig_012
- **stem**: Look at the four shapes. Which one is a **pentagon**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 470 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four polygons find the pentagon">
  <rect class="bg" x="0" y="0" width="470" height="190" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Which shape is a pentagon?</text>
  <polygon class="part poly" points="70.0,60.0 110.0,100.0 70.0,140.0 30.0,100.0" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="70" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">A</text>
  <polygon class="part poly" points="180.0,60.0 214.6,80.0 214.6,120.0 180.0,140.0 145.4,120.0 145.4,80.0" fill="#e8f5e9" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="180" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">B</text>
  <polygon class="part poly" points="290.0,60.0 328.0,87.6 313.5,132.4 266.5,132.4 252.0,87.6" fill="#fff8e1" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="290" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">C</text>
  <polygon class="part poly" points="400.0,60.0 428.3,71.7 440.0,100.0 428.3,128.3 400.0,140.0 371.7,128.3 360.0,100.0 371.7,71.7" fill="#fce4ec" stroke="#333" stroke-width="2"/>
  <text class="label option-label" x="400" y="158" font-size="16" text-anchor="middle" font-weight="bold" fill="#1565c0">D</text>
  <text class="label small" x="240" y="178" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Count the straight sides of each shape.</text>
</svg>
```

- **alt**: Four shapes. A has 4 sides, B has 6, C has 5 and D has 8.
- **options**:
  - A) Shape A
  - B) Shape B
  - C) Shape C
  - D) Shape D
- **answer**: C
- **explanation**: A pentagon has 5 sides. Shape C is the only one with 5 sides.
- **skill**: polygon
- **qtype**: recall
- **difficulty**: easy
- **replaces_hint**: polygon (e.g. text Set B Q04)

### PQB04
- **figure**: fig_013
- **stem**: Look at Half turn. The child starts facing East. After a half turn, where does the child face?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 235" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Compass facing East with half turn">
  <rect class="bg" x="0" y="0" width="440" height="235" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Half turn</text>
  <circle class="part compass" cx="140" cy="120" r="55" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label" x="140.0" y="49.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">N</text>
  <text class="label" x="211.0" y="120.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">E</text>
  <text class="label" x="140.0" y="191.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">S</text>
  <text class="label" x="69.0" y="120.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">W</text>
  <polygon class="part arrow" points="185.0,120.0 123.3,110.4 123.3,129.6" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <circle class="part hub" cx="140" cy="120" r="5" fill="#333"/>
  <text class="label" x="140" y="200" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Start: facing East</text>
  <path class="arrow jump" d="M 220 80 A 50 50 0 0 1 220 160" fill="none" stroke="#e65100" stroke-width="2.5"/>
  <polygon class="arrow" points="220,162 214,152 226,152" fill="#e65100"/>
  <text class="label" x="300" y="110" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">½ turn</text>
  <text class="label" x="300" y="130" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">(180°)</text>
  <text class="label small" x="220" y="220" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">A half turn faces you the opposite way.</text>
</svg>
```

- **alt**: A compass with an orange arrow pointing East. A curved arrow shows a half turn of 180°.
- **options**:
  - A) West
  - B) South
  - C) East
  - D) North
- **answer**: A
- **explanation**: A half turn is 180°. From East, the opposite direction is West.
- **skill**: turns
- **qtype**: application
- **difficulty**: medium
- **replaces_hint**: turns (e.g. text Set B Q05)

### PQB05
- **figure**: fig_014
- **stem**: Look at the clock at 4:00. What angle do the hands make?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 400 245" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Clock with hands at 4 o clock">
  <rect class="bg" x="0" y="0" width="400" height="245" fill="#fff"/>
  <text class="title" x="200" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Clock hands at 4:00</text>
  <circle class="part clock" cx="200" cy="130" r="85" fill="#fffde7" stroke="#333" stroke-width="2"/>
  <circle class="part hub" cx="200" cy="130" r="4" fill="#333"/>
  <line class="tick" x1="200.0" y1="49.0" x2="200.0" y2="57.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="67.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">12</text>
  <line class="tick" x1="240.5" y1="59.9" x2="236.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <line class="tick" x1="270.1" y1="89.5" x2="263.2" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <line class="tick" x1="281.0" y1="130.0" x2="273.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="263.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <line class="tick" x1="270.1" y1="170.5" x2="263.2" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="254.6" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <line class="tick" x1="240.5" y1="200.1" x2="236.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="231.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <line class="tick" x1="200.0" y1="211.0" x2="200.0" y2="203.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="200.0" y="193.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <line class="tick" x1="159.5" y1="200.1" x2="163.5" y2="193.2" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="184.6" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <line class="tick" x1="129.9" y1="170.5" x2="136.8" y2="166.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="161.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <line class="tick" x1="119.0" y1="130.0" x2="127.0" y2="130.0" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="137.0" y="130.0" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <line class="tick" x1="129.9" y1="89.5" x2="136.8" y2="93.5" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="145.4" y="98.5" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">10</text>
  <line class="tick" x1="159.5" y1="59.9" x2="163.5" y2="66.8" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="168.5" y="75.4" font-size="11" text-anchor="middle" font-weight="bold" fill="#333">11</text>
  <line class="part hour-hand" x1="200" y1="130" x2="236.8" y2="151.2" stroke="#1565c0" stroke-width="4" stroke-linecap="round"/>
  <line class="part minute-hand" x1="200" y1="130" x2="200.0" y2="68.8" stroke="#e65100" stroke-width="3" stroke-linecap="round"/>
  <text class="label small" x="200" y="230" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Minute hand at 12 · Hour hand at 4</text>
</svg>
```

- **alt**: A clock face. The minute hand points to 12 and the hour hand points to 4.
- **options**:
  - A) 90°
  - B) 150°
  - C) 60°
  - D) 120°
- **answer**: D
- **explanation**: From 12 to 4 is 4 hour marks. Each mark is 30°, so 4 × 30° = 120°.
- **skill**: clock_angle
- **qtype**: application
- **difficulty**: medium
- **replaces_hint**: clock_angle (e.g. text Set B Q13)

### PQB06
- **figure**: fig_015
- **stem**: Look at Angles around a point. Three angles are 90° each. What is the **missing** angle?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 265" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Cross with three 90 degree labels and one question mark">
  <rect class="bg" x="0" y="0" width="480" height="265" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Angles around a point</text>
  <line class="part arm" x1="80" y1="130" x2="400" y2="130" stroke="#333" stroke-width="2"/>
  <line class="part arm" x1="240" y1="30" x2="240" y2="230" stroke="#333" stroke-width="2"/>
  <circle class="part vertex" cx="240" cy="130" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="280" y="100" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">90°</text>
  <text class="label" x="280" y="170" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">90°</text>
  <text class="label" x="185" y="100" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">90°</text>
  <text class="label" x="185" y="170" font-size="18" text-anchor="middle" font-weight="bold" fill="#e65100">?</text>
  <text class="label small" x="240" y="250" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">A full turn around a point is 360°.</text>
</svg>
```

- **alt**: Two crossing lines make four right angles at the centre. Three sectors are labelled 90° and one is labelled with a question mark.
- **options**:
  - A) 45°
  - B) 90°
  - C) 180°
  - D) 270°
- **answer**: B
- **explanation**: Angles around a point add to 360°. 360° − 90° − 90° − 90° = 90°.
- **skill**: combine_angles
- **qtype**: multi_step
- **difficulty**: medium
- **replaces_hint**: combine_angles (e.g. text Set B Q14)

### PQB07
- **figure**: fig_016
- **stem**: Look at Odd one out. Three angles are acute. Which panel is the **odd one out**?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Four angles find the odd one out">
  <rect class="bg" x="0" y="0" width="480" height="230" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Odd one out</text>
  <rect class="part panel" x="10" y="40" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="60" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">A</text>
  <line class="part arm" x1="130" y1="95" x2="170.0" y2="95.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="130" y1="95" x2="164.6" y2="75.0" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="130" cy="95" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 144.0 95.0 A 14.0 14.0 0 0 0 142.1 88.0" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="151.3" y="89.3" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">30°</text>
  <rect class="part panel" x="245" y="40" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="60" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">B</text>
  <line class="part arm" x1="365" y1="95" x2="405.0" y2="95.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="365" y1="95" x2="393.3" y2="66.7" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="365" cy="95" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 379.0 95.0 A 14.0 14.0 0 0 0 374.9 85.1" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="385.3" y="86.6" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">45°</text>
  <rect class="part panel" x="10" y="130" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="24" y="150" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">C</text>
  <line class="part arm" x1="130" y1="185" x2="170.0" y2="185.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="130" y1="185" x2="126.5" y2="145.2" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="130" cy="185" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 144.0 185.0 A 14.0 14.0 0 0 0 128.8 171.1" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="144.9" y="168.8" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">95°</text>
  <rect class="part panel" x="245" y="130" width="225" height="80" rx="8" fill="#fafafa" stroke="#666" stroke-width="1"/>
  <text class="label option-label" x="259" y="150" font-size="16" text-anchor="start" font-weight="bold" fill="#1565c0">D</text>
  <line class="part arm" x1="365" y1="185" x2="405.0" y2="185.0" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="365" y1="185" x2="385.0" y2="150.4" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="365" cy="185" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <path class="part arc" d="M 379.0 185.0 A 14.0 14.0 0 0 0 372.0 172.9" fill="none" stroke="#42a5f5" stroke-width="2"/>
  <text class="label" x="384.1" y="174.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">60°</text>
</svg>
```

- **alt**: Four angle cards labelled with their measures: A 30°, B 45°, C 95° and D 60°.
- **options**:
  - A) Panel A
  - B) Panel B
  - C) Panel C
  - D) Panel D
- **answer**: C
- **explanation**: 30°, 45° and 60° are all acute (less than 90°). Panel C shows 95°, which is obtuse.
- **skill**: angle_type
- **qtype**: odd_one_out
- **difficulty**: medium
- **replaces_hint**: angle_type (e.g. text Set B Q11)

### PQB08
- **figure**: fig_017
- **stem**: Look at Three-quarter turn anticlockwise. Starting facing North, where does the child face after the turn?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Compass with three quarter turn anticlockwise">
  <rect class="bg" x="0" y="0" width="460" height="240" fill="#fff"/>
  <text class="title" x="240" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Three-quarter turn anticlockwise</text>
  <circle class="part compass" cx="140" cy="125" r="55" fill="#e3f2fd" stroke="#333" stroke-width="2"/>
  <text class="label" x="140.0" y="54.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">N</text>
  <text class="label" x="211.0" y="125.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">E</text>
  <text class="label" x="140.0" y="196.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">S</text>
  <text class="label" x="69.0" y="125.0" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">W</text>
  <polygon class="part arrow" points="140.0,80.0 130.4,141.7 149.6,141.7" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <circle class="part hub" cx="140" cy="125" r="5" fill="#333"/>
  <text class="label" x="140" y="205" font-size="12" text-anchor="middle" font-weight="bold" fill="#333">Start: facing North</text>
  <path class="arrow jump" d="M 210 70 A 55 55 0 1 0 210 180" fill="none" stroke="#e65100" stroke-width="2.5"/>
  <polygon class="arrow" points="208,182 214,172 202,174" fill="#e65100"/>
  <text class="label" x="310" y="110" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">¾ turn</text>
  <text class="label" x="310" y="130" font-size="13" text-anchor="middle" font-weight="bold" fill="#e65100">anticlockwise</text>
  <text class="label" x="310" y="150" font-size="14" text-anchor="middle" font-weight="bold" fill="#e65100">(270°)</text>
  <text class="label small" x="240" y="225" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">Anticlockwise is opposite to clock hands.</text>
</svg>
```

- **alt**: A compass facing North with a curved arrow showing a three-quarter turn anticlockwise.
- **options**:
  - A) East
  - B) South
  - C) West
  - D) North
- **answer**: A
- **explanation**: Anticlockwise from North: N → W → S → E. Three quarter-turns land on East.
- **skill**: turns
- **qtype**: logical_reasoning
- **difficulty**: hard
- **replaces_hint**: turns (e.g. text Set B Q21)

### PQB09
- **figure**: fig_018
- **stem**: Look at Two equal angles. The upright arm makes a right angle with the baseline. One part is 45°. What is the **missing** part?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 440 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="Right angle with 45 degree ray and missing angle">
  <rect class="bg" x="0" y="0" width="440" height="190" fill="#fff"/>
  <text class="title" x="220" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Two equal angles</text>
  <line class="part arm" x1="60" y1="150" x2="380" y2="150" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="220" y1="150" x2="220" y2="40" stroke="#333" stroke-width="2.5"/>
  <line class="part arm" x1="220" y1="150" x2="283.6" y2="86.4" stroke="#333" stroke-width="2.5"/>
  <circle class="part vertex" cx="220" cy="150" r="5" fill="#e65100" stroke="#333" stroke-width="1.5"/>
  <text class="label" x="250" y="125" font-size="14" text-anchor="middle" font-weight="bold" fill="#1565c0">45°</text>
  <text class="label" x="185" y="100" font-size="18" text-anchor="middle" font-weight="bold" fill="#e65100">?</text>
  <text class="label small" x="220" y="175" font-size="11" text-anchor="middle" font-weight="normal" fill="#666">The upright arm makes a right angle with the baseline.</text>
</svg>
```

- **alt**: A baseline and an upright arm form a right angle. A ray at 45° sits between them. One small angle is labelled 45° and the other is labelled with a question mark.
- **options**:
  - A) 30°
  - B) 45°
  - C) 90°
  - D) 135°
- **answer**: B
- **explanation**: A right angle is 90°. If one part is 45°, the other part is 90° − 45° = 45°.
- **skill**: combine_angles
- **qtype**: logical_reasoning
- **difficulty**: hard
- **replaces_hint**: combine_angles (e.g. text Set B Q22)

## Answer Key

### Pictorial Set A
| Q# | Answer | Correct value | figure | skill | qtype | difficulty |
|----|--------|---------------|--------|-------|-------|------------|
| PQA01 | C | vertex | fig_001 | arms_vertex | recall | easy |
| PQA02 | B | Panel B | fig_002 | angle_type | recall | easy |
| PQA03 | D | Acute | fig_003 | angle_type | application | easy |
| PQA04 | A | Shape A | fig_004 | polygon | recall | easy |
| PQA05 | C | 90° | fig_005 | clock_angle | application | medium |
| PQA06 | A | Shape A | fig_006 | open_closed | logical_reasoning | medium |
| PQA07 | B | East | fig_007 | turns | application | medium |
| PQA08 | D | 110° | fig_008 | combine_angles | multi_step | hard |
| PQA09 | B | 60° | fig_009 | clock_angle | logical_reasoning | hard |

Letter spread: A=2, B=3, C=2, D=2 · Difficulty: easy=4, medium=3, hard=2

### Pictorial Set B
| Q# | Answer | Correct value | figure | skill | qtype | difficulty |
|----|--------|---------------|--------|-------|-------|------------|
| PQB01 | D | Obtuse | fig_010 | angle_type | recall | easy |
| PQB02 | B | Angle ABC | fig_011 | naming | application | easy |
| PQB03 | C | Shape C | fig_012 | polygon | recall | easy |
| PQB04 | A | West | fig_013 | turns | application | medium |
| PQB05 | D | 120° | fig_014 | clock_angle | application | medium |
| PQB06 | B | 90° | fig_015 | combine_angles | multi_step | medium |
| PQB07 | C | Panel C | fig_016 | angle_type | odd_one_out | medium |
| PQB08 | A | East | fig_017 | turns | logical_reasoning | hard |
| PQB09 | B | 45° | fig_018 | combine_angles | logical_reasoning | hard |

Letter spread: A=2, B=3, C=2, D=2 · Difficulty: easy=3, medium=4, hard=2

**Combined (18):** A=4, B=6, C=4, D=4


### A/B variety check
| Skill | Set A item | Set B item |
|-------|------------|------------|
| angle_type | PQA02 pick right angle · PQA03 type from 55° | PQB01 type from 140° · PQB07 odd-one-out |
| arms_vertex / naming | PQA01 name the vertex | PQB02 name angle ABC |
| polygon | PQA04 identify triangle | PQB03 identify pentagon |
| clock_angle | PQA05 3:00 → 90° · PQA09 2:00 → 60° | PQB05 4:00 → 120° |
| turns | PQA07 quarter clockwise from N | PQB04 half from E · PQB08 ¾ anticlockwise from N |
| combine_angles | PQA08 straight line 70°+? | PQB06 around point · PQB09 split right angle |
| open_closed | PQA06 closed triangle | — |

## Engineering notes
- **Embedding**: Each MCQ has a fenced ```svg``` block under `**Diagram (SVG):**`. Use inline SVG markup; do not load as `<img src>`.
- **Self-contained**: Every SVG has a `viewBox` and `xmlns`, no external assets or `<script>`.
- **Originality**: All figures and stems are original for Mindstrong. No past-paper scans or traced layouts.
