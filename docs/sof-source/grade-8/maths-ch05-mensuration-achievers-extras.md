# Grade 8 Maths — Chapter 5: Mensuration (Achievers extras)

## Meta
- note: Writer/editor source only. Meta and notes are stripped before anything ships to kids.
- grade: 8
- subject: Maths
- chapter_id: g8-maths-ch05-mensuration-achievers-extras
- parent_chapter_id: g8-maths-ch05-mensuration
- chapter_title: Mensuration (Achievers extras)
- curriculum_source: NCERT Class 8 themes (public topic list only)
- content_type: original_olympiad_style
- addition: extra_set — does not replace existing items
- item_counts: Extra Set = 5 MCQs, all hard / achievers
- pictorial_items: Extra Set = 2 (inline `**Diagram (SVG):**` blocks)
- render: svg_css_in_app
- answer_balance: 1 A / 2 B / 1 C / 1 D

## Extra Set

### Q01
- **id**: g8-maths-ch05-ach-x-01
- **stem**: Aakriti's school is laying new grass on the playground shown: a rectangle with a semicircle at each of its two shorter ends. Using π = 22/7, what area of grass is needed?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 540 264" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A playground made of a rectangle 28 metres long and 14 metres wide with a semicircle on each 14 metre end">
  <rect class="bg" x="0" y="0" width="540" height="264" fill="#fff"/>
  <text class="title" x="270.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Aakriti's school playground</text>
  <path class="part ground" d="M 130 86 L 410 86 A 70 70 0 0 1 410 226 L 130 226 A 70 70 0 0 1 130 86 Z" fill="#c5e1a5" stroke="#33691e" stroke-width="3"/>
  <rect class="part inner-rect" x="130" y="86" width="280" height="140" rx="0" fill="none" stroke="#558b2f" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line class="part dim-line" x1="130" y1="64" x2="410" y2="64" stroke="#263238" stroke-width="1.5"/>
  <polyline class="part arrow-head" points="403,59.1 410,64 403,68.9" fill="none" stroke="#263238" stroke-width="2"/>
  <polyline class="part arrow-head" points="137,59.1 130,64 137,68.9" fill="none" stroke="#263238" stroke-width="2"/>
  <text class="label dim" x="270" y="56" font-size="15" text-anchor="middle" font-weight="bold" fill="#263238">28 m</text>
  <line class="part dim-line" x1="148" y1="86" x2="148" y2="226" stroke="#263238" stroke-width="1.5"/>
  <text class="label dim" x="156" y="161" font-size="15" text-anchor="start" font-weight="bold" fill="#263238">14 m</text>
</svg>
```

- **alt**: A green playground shaped like a rectangle with rounded ends. The straight part is marked 28 m long, and a line across the playground at the start of the straight part is marked 14 m.
- **options**:
  - A) 700 m²
  - B) 392 m²
  - C) 546 m²
  - D) 238 m²
- **answer**: C
- **explanation**: The rectangle has area 28 × 14 = 392 m². Each end is a semicircle of radius 14 ÷ 2 = 7 m, and two semicircles make one full circle: 22/7 × 7 × 7 = 154 m². The total is 392 + 154 = 546 m². 700 m² is tempting because it adds a full circle for each end (392 + 2 × 154), but each end is only half a circle.
- **hint**: Split Aakriti's playground into the rectangle and the two curved ends, and decide what the two ends make when put together.
- **skill**: area_of_rectangle_with_semicircular_ends
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q02
- **id**: g8-maths-ch05-ach-x-02
- **stem**: All the water in Keya's full cuboid tank is poured into the empty cylindrical drum shown, and none spills. Using π = 22/7, how deep is the water in the drum?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 538 316" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A full cuboid tank 44 centimetres long, 21 centimetres wide and 20 centimetres high, and an empty cylindrical drum whose top has a diameter of 28 centimetres">
  <rect class="bg" x="0" y="0" width="538" height="316" fill="#fff"/>
  <text class="title" x="269.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Keya's tank and drum</text>
  <polygon class="part box-top" points="60,119.7 89.7,90 265.7,90 236,119.7" fill="#bbdefb" stroke="#263238" stroke-width="2"/>
  <polygon class="part box-side" points="236,119.7 265.7,90 265.7,170 236,199.7" fill="#90caf9" stroke="#263238" stroke-width="2"/>
  <rect class="part box-front" x="60" y="119.7" width="176" height="80" rx="0" fill="#e3f2fd" stroke="#263238" stroke-width="2"/>
  <text class="label edge-length" x="148" y="221.7" font-size="15" text-anchor="middle" font-weight="bold" fill="#263238">44 cm</text>
  <text class="label edge-height" x="52" y="164.7" font-size="15" text-anchor="end" font-weight="bold" fill="#263238">20 cm</text>
  <text class="label edge-breadth" x="260.85" y="198.85" font-size="15" text-anchor="start" font-weight="bold" fill="#263238">21 cm</text>
  <text class="label caption" x="162.85" y="78" font-size="14" text-anchor="middle" font-weight="normal" fill="#263238">tank (full)</text>
  <rect class="part drum-body" x="375.7" y="80" width="112" height="150" rx="0" fill="#eceff1" stroke="none" stroke-width="0"/>
  <line class="part drum-wall" x1="375.7" y1="80" x2="375.7" y2="230" stroke="#263238" stroke-width="2"/>
  <line class="part drum-wall" x1="487.7" y1="80" x2="487.7" y2="230" stroke="#263238" stroke-width="2"/>
  <ellipse class="part drum-base" cx="431.7" cy="230" rx="56" ry="15.68" fill="#eceff1" stroke="#263238" stroke-width="2"/>
  <ellipse class="part drum-top" cx="431.7" cy="80" rx="56" ry="15.68" fill="#ffffff" stroke="#263238" stroke-width="2"/>
  <line class="part diameter" x1="375.7" y1="80" x2="487.7" y2="80" stroke="#c62828" stroke-width="2" stroke-dasharray="5 3"/>
  <text class="label diameter-length" x="431.7" y="56.32" font-size="15" text-anchor="middle" font-weight="bold" fill="#c62828">28 cm</text>
  <text class="label caption" x="431.7" y="267.68" font-size="14" text-anchor="middle" font-weight="normal" fill="#263238">drum (empty)</text>
</svg>
```

- **alt**: On the left, a cuboid tank labelled 44 cm long, 21 cm wide and 20 cm high, marked full. On the right, an empty cylindrical drum with a dashed line across its circular top labelled 28 cm.
- **options**:
  - A) 7.5 cm
  - B) 15 cm
  - C) 60 cm
  - D) 30 cm
- **answer**: D
- **explanation**: The tank holds 44 × 21 × 20 = 18,480 cm³. The dashed line is a diameter, so the drum's radius is 14 cm and its base area is 22/7 × 14 × 14 = 616 cm². The depth is 18,480 ÷ 616 = 30 cm. 7.5 cm is tempting because it uses 28 cm as the radius, but 28 cm is measured right across the top, so it is the diameter.
- **hint**: Find the volume of water in Keya's tank, then the base area of the drum from the line across its top.
- **skill**: pouring_a_cuboid_into_a_cylinder
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q03
- **id**: g8-maths-ch05-ach-x-03
- **stem**: A field near Medha's village is shaped like a trapezium. Its parallel sides are 25 m and 13 m long, and each of its other two sides is 10 m long. What is the area of the field?
- **options**:
  - A) 190 m²
  - B) 152 m²
  - C) 304 m²
  - D) 130 m²
- **answer**: B
- **explanation**: The two slanting sides are equal, so the 25 m side sticks out (25 − 13) ÷ 2 = 6 m beyond the 13 m side at each end. Each slanting side, the 6 m piece and the height make a right triangle, so height² = 10² − 6² = 64 and the height is 8 m. The area is ½ × (25 + 13) × 8 = 152 m². 190 m² is tempting because it uses the 10 m slanting side as the height, but the height must be measured straight across, at right angles to the parallel sides.
- **hint**: The slanting sides of Medha's field are not the height; drop a perpendicular from a corner and use a right triangle.
- **skill**: trapezium_area_needing_its_height
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

### Q04
- **id**: g8-maths-ch05-ach-x-04
- **stem**: Amaya's carpenter makes an open wooden box with no lid, 1.5 m long, 1 m wide and 0.8 m high. He paints it both inside and outside at ₹40 per m². Taking the inside and outside areas as equal, what does the painting cost?
- **options**:
  - A) ₹440
  - B) ₹560
  - C) ₹220
  - D) ₹280
- **answer**: A
- **explanation**: With no lid, one face of the box is the base, 1.5 × 1 = 1.5 m², and the four sides are 2 × 0.8 × (1.5 + 1) = 4 m², so 5.5 m² in all. Painting inside and outside doubles this to 11 m², which costs 11 × 40 = ₹440. ₹220 is tempting because it paints only one side of the wood (5.5 × 40); the box is painted inside as well as outside.
- **hint**: List the faces Amaya's box really has without a lid, find their area, then count both the inside and the outside.
- **skill**: painting_an_open_box_inside_and_outside
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

### Q05
- **id**: g8-maths-ch05-ach-x-05
- **stem**: The garden roller in Nitya's colony park is a cylinder 1.4 m across and 2 m long. Her gardener pushes it through 50 complete turns. Using π = 22/7, what area of lawn does it roll over?
- **options**:
  - A) 594 m²
  - B) 440 m²
  - C) 220 m²
  - D) 880 m²
- **answer**: B
- **explanation**: In one turn the roller presses its curved surface onto the lawn: π × diameter × length = 22/7 × 1.4 × 2 = 8.8 m². In 50 turns that is 8.8 × 50 = 440 m². 594 m² is tempting because it uses the total surface area, adding the two circular ends, but the ends never touch the lawn; only the curved surface rolls over it.
- **hint**: Think about which surface of the roller in Nitya's park touches the lawn in one complete turn.
- **skill**: area_rolled_by_a_cylinder
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

## Answer Key

| Q# | id | Answer | skill | difficulty | olympiad_section | pictorial |
|----|----|--------|-------|------------|------------------|-----------|
| Q01 | g8-maths-ch05-ach-x-01 | C | area_of_rectangle_with_semicircular_ends | hard | achievers | yes |
| Q02 | g8-maths-ch05-ach-x-02 | D | pouring_a_cuboid_into_a_cylinder | hard | achievers | yes |
| Q03 | g8-maths-ch05-ach-x-03 | B | trapezium_area_needing_its_height | hard | achievers | no |
| Q04 | g8-maths-ch05-ach-x-04 | A | painting_an_open_box_inside_and_outside | hard | achievers | no |
| Q05 | g8-maths-ch05-ach-x-05 | B | area_rolled_by_a_cylinder | hard | achievers | no |

## Pictorial notes
- Extra set added to `g8-maths-ch05-mensuration`: five hard multi-step Achievers items; pictorial items Q01, Q02. The parent chapter and its items are unchanged.
- Figures are drawn from the generator's data and read back by verify from geometry and printed text only; no figure carries data-* attributes or class names containing 'data-' (audit rule svg-data-attr). Every key and each tempting option is recomputed by `/workspace/scratch/verify_g8_achievers_extras.py`.
