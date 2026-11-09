# Grade 9 Maths — Chapter 2: Polynomials (Achievers extras)

## Meta
- note: Writer/editor source only. Meta and notes are stripped before anything ships to kids.
- grade: 9
- subject: Maths
- chapter_id: polynomials-achievers-extras
- parent_chapter_id: polynomials
- chapter_title: Polynomials (Achievers extras)
- curriculum_source: NCERT Class 9 themes (public topic list only)
- content_type: original_olympiad_style
- addition: extra_set — does not replace existing items
- item_counts: Extra Set = 5 MCQs, all hard / achievers
- pictorial_items: Extra Set = 2 (inline `**Diagram (SVG):**` blocks)
- render: svg_css_in_app
- answer_balance: 1 A / 1 B / 1 C / 2 D

## Extra Set

### Q01
- **id**: g9-maths-ch02-ach-x-01
- **stem**: Hiranya cuts a square of side x cm from each corner of the square card shown and folds up the sides to make an open box. She writes the volume of the box as a polynomial in x. What is the volume when x = 3?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 400 390" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A square card 20 centimetres along each side with a small square of side x cut from each corner and dashed fold lines">
  <rect class="bg" x="0" y="0" width="400" height="390" fill="#fff"/>
  <text class="title" x="200.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Hiranya's card</text>
  <rect class="part sheet" x="60" y="70" width="280" height="280" rx="0" fill="#f1f8e9" stroke="#33691e" stroke-width="2.5"/>
  <line class="part dim-line" x1="60" y1="52" x2="340" y2="52" stroke="#263238" stroke-width="1.5"/>
  <polyline class="part arrow-head" points="333,47.1 340,52 333,56.9" fill="none" stroke="#263238" stroke-width="2"/>
  <polyline class="part arrow-head" points="67,47.1 60,52 67,56.9" fill="none" stroke="#263238" stroke-width="2"/>
  <text class="label side" x="200" y="44" font-size="15" text-anchor="middle" font-weight="bold" fill="#263238">20 cm</text>
  <rect class="part corner" x="60" y="70" width="42" height="42" rx="0" fill="#ffcdd2" stroke="#c62828" stroke-width="2"/>
  <text class="label cut-label" x="81" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#b71c1c">x</text>
  <rect class="part corner" x="298" y="70" width="42" height="42" rx="0" fill="#ffcdd2" stroke="#c62828" stroke-width="2"/>
  <text class="label cut-label" x="319" y="96" font-size="14" text-anchor="middle" font-weight="bold" fill="#b71c1c">x</text>
  <rect class="part corner" x="60" y="308" width="42" height="42" rx="0" fill="#ffcdd2" stroke="#c62828" stroke-width="2"/>
  <text class="label cut-label" x="81" y="334" font-size="14" text-anchor="middle" font-weight="bold" fill="#b71c1c">x</text>
  <rect class="part corner" x="298" y="308" width="42" height="42" rx="0" fill="#ffcdd2" stroke="#c62828" stroke-width="2"/>
  <text class="label cut-label" x="319" y="334" font-size="14" text-anchor="middle" font-weight="bold" fill="#b71c1c">x</text>
  <line class="part fold" x1="102" y1="112" x2="102" y2="308" stroke="#558b2f" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line class="part fold" x1="102" y1="112" x2="298" y2="112" stroke="#558b2f" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line class="part fold" x1="298" y1="112" x2="298" y2="308" stroke="#558b2f" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line class="part fold" x1="102" y1="308" x2="298" y2="308" stroke="#558b2f" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text class="label caption" x="200" y="215" font-size="13" text-anchor="middle" font-weight="normal" fill="#33691e">fold up along the dashed lines</text>
</svg>
```

- **alt**: A square card with its top side marked 20 cm. A small red square marked x sits in each of the four corners, and dashed lines join the corner squares to show where the sides fold up.
- **options**:
  - A) 867 cm³
  - B) 588 cm³
  - C) 1,200 cm³
  - D) 432 cm³
- **answer**: B
- **explanation**: Each side of the base loses x at both ends, so the base is (20 − 2x) cm square and the box is x cm tall: V(x) = x(20 − 2x)². At x = 3, V = 3 × 14 × 14 = 588 cm³. 867 cm³ is tempting because it takes the base as (20 − x), cutting only one corner square from each side, but every side loses a corner square at both of its ends.
- **hint**: On each side of Hiranya's card, count how many corner squares are cut away before you write the base length in x.
- **skill**: box_volume_polynomial_from_a_net
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q02
- **id**: g9-maths-ch02-ach-x-02
- **stem**: Umang's graph shows y = p(x), where p(x) is a cubic polynomial. Its three zeros are where the graph cuts the x-axis, and it meets the y-axis at the point marked. What is p(2)?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 532 390" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="The graph of a cubic polynomial cutting the x-axis at minus 2, 1 and 3 and meeting the y-axis at 0, 12">
  <rect class="bg" x="0" y="0" width="532" height="390" fill="#fff"/>
  <text class="title" x="266.0" y="24" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Umang's graph of y = p(x)</text>
  <line class="part x-axis" x1="58" y1="196" x2="474" y2="196" stroke="#263238" stroke-width="2"/>
  <polyline class="part arrow-head" points="468,190.4 476,196 468,201.6" fill="none" stroke="#263238" stroke-width="2"/>
  <line class="part y-axis" x1="238" y1="348" x2="238" y2="44" stroke="#263238" stroke-width="2"/>
  <polyline class="part arrow-head" points="232.4,34 238,42 243.6,34" fill="none" stroke="#263238" stroke-width="2"/>
  <text class="label axis-name" x="476" y="218" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">x</text>
  <text class="label axis-name" x="254" y="50" font-size="14" text-anchor="middle" font-weight="bold" fill="#263238">y</text>
  <line class="part x-tick" x1="70" y1="192" x2="70" y2="200" stroke="#263238" stroke-width="1.5"/>
  <text class="label x-label" x="70" y="214" font-size="12" text-anchor="middle" font-weight="normal" fill="#263238">−3</text>
  <line class="part x-tick" x1="126" y1="192" x2="126" y2="200" stroke="#263238" stroke-width="1.5"/>
  <text class="label x-label" x="126" y="214" font-size="12" text-anchor="middle" font-weight="normal" fill="#263238">−2</text>
  <line class="part x-tick" x1="182" y1="192" x2="182" y2="200" stroke="#263238" stroke-width="1.5"/>
  <text class="label x-label" x="182" y="214" font-size="12" text-anchor="middle" font-weight="normal" fill="#263238">−1</text>
  <line class="part x-tick" x1="294" y1="192" x2="294" y2="200" stroke="#263238" stroke-width="1.5"/>
  <text class="label x-label" x="294" y="214" font-size="12" text-anchor="middle" font-weight="normal" fill="#263238">1</text>
  <line class="part x-tick" x1="350" y1="192" x2="350" y2="200" stroke="#263238" stroke-width="1.5"/>
  <text class="label x-label" x="350" y="214" font-size="12" text-anchor="middle" font-weight="normal" fill="#263238">2</text>
  <line class="part x-tick" x1="406" y1="192" x2="406" y2="200" stroke="#263238" stroke-width="1.5"/>
  <text class="label x-label" x="406" y="214" font-size="12" text-anchor="middle" font-weight="normal" fill="#263238">3</text>
  <line class="part x-tick" x1="462" y1="192" x2="462" y2="200" stroke="#263238" stroke-width="1.5"/>
  <text class="label x-label" x="462" y="214" font-size="12" text-anchor="middle" font-weight="normal" fill="#263238">4</text>
  <line class="part y-tick" x1="234" y1="336" x2="242" y2="336" stroke="#263238" stroke-width="1.5"/>
  <text class="label y-label" x="230" y="340" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">−20</text>
  <line class="part y-tick" x1="234" y1="308" x2="242" y2="308" stroke="#263238" stroke-width="1.5"/>
  <text class="label y-label" x="230" y="312" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">−16</text>
  <line class="part y-tick" x1="234" y1="280" x2="242" y2="280" stroke="#263238" stroke-width="1.5"/>
  <text class="label y-label" x="230" y="284" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">−12</text>
  <line class="part y-tick" x1="234" y1="252" x2="242" y2="252" stroke="#263238" stroke-width="1.5"/>
  <text class="label y-label" x="230" y="256" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">−8</text>
  <line class="part y-tick" x1="234" y1="224" x2="242" y2="224" stroke="#263238" stroke-width="1.5"/>
  <text class="label y-label" x="230" y="228" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">−4</text>
  <line class="part y-tick" x1="234" y1="168" x2="242" y2="168" stroke="#263238" stroke-width="1.5"/>
  <text class="label y-label" x="230" y="172" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">4</text>
  <line class="part y-tick" x1="234" y1="140" x2="242" y2="140" stroke="#263238" stroke-width="1.5"/>
  <text class="label y-label" x="230" y="144" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">8</text>
  <line class="part y-tick" x1="234" y1="112" x2="242" y2="112" stroke="#263238" stroke-width="1.5"/>
  <text class="label y-label" x="230" y="116" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">12</text>
  <line class="part y-tick" x1="234" y1="84" x2="242" y2="84" stroke="#263238" stroke-width="1.5"/>
  <text class="label y-label" x="230" y="88" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">16</text>
  <line class="part y-tick" x1="234" y1="56" x2="242" y2="56" stroke="#263238" stroke-width="1.5"/>
  <text class="label y-label" x="230" y="60" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">20</text>
  <text class="label origin-name" x="230" y="212" font-size="12" text-anchor="end" font-weight="normal" fill="#263238">O</text>
  <polyline class="part curve" points="98,330.75 100.8,314.46 103.6,298.82 106.4,283.82 109.2,269.46 112,255.72 114.8,242.59 117.6,230.07 120.4,218.13 123.2,206.78 126,196 128.8,185.78 131.6,176.11 134.4,166.97 137.2,158.37 140,150.28 142.8,142.7 145.6,135.62 148.4,129.02 151.2,122.9 154,117.25 156.8,112.05 159.6,107.3 162.4,102.98 165.2,99.08 168,95.59 170.8,92.51 173.6,89.82 176.4,87.51 179.2,85.58 182,84 184.8,82.77 187.6,81.89 190.4,81.33 193.2,81.09 196,81.16 198.8,81.52 201.6,82.17 204.4,83.1 207.2,84.3 210,85.75 212.8,87.45 215.6,89.38 218.4,91.53 221.2,93.9 224,96.47 226.8,99.23 229.6,102.18 232.4,105.29 235.2,108.57 238,112 240.8,115.57 243.6,119.27 246.4,123.08 249.2,127.01 252,131.03 254.8,135.14 257.6,139.33 260.4,143.58 263.2,147.89 266,152.25 268.8,156.64 271.6,161.06 274.4,165.49 277.2,169.92 280,174.34 282.8,178.75 285.6,183.13 288.4,187.47 291.2,191.77 294,196 296.8,200.16 299.6,204.25 302.4,208.24 305.2,212.13 308,215.91 310.8,219.56 313.6,223.08 316.4,226.46 319.2,229.69 322,232.75 324.8,235.64 327.6,238.34 330.4,240.84 333.2,243.14 336,245.22 338.8,247.07 341.6,248.69 344.4,250.05 347.2,251.16 350,252 352.8,252.56 355.6,252.83 358.4,252.79 361.2,252.45 364,251.78 366.8,250.78 369.6,249.44 372.4,247.74 375.2,245.68 378,243.25 380.8,240.43 383.6,237.22 386.4,233.6 389.2,229.56 392,225.09 394.8,220.19 397.6,214.84 400.4,209.03 403.2,202.76 406,196 408.8,188.75 411.6,181.01 414.4,172.75 417.2,163.97 420,154.66 422.8,144.8 425.6,134.39 428.4,123.42 431.2,111.88 434,99.75 436.8,87.03 439.6,73.7 442.4,59.75" fill="none" stroke="#1565c0" stroke-width="2.5"/>
  <circle class="part zero-dot" cx="126" cy="196" r="5" fill="#c62828" stroke="#fff" stroke-width="1.5"/>
  <circle class="part zero-dot" cx="294" cy="196" r="5" fill="#c62828" stroke="#fff" stroke-width="1.5"/>
  <circle class="part zero-dot" cx="406" cy="196" r="5" fill="#c62828" stroke="#fff" stroke-width="1.5"/>
  <circle class="part yint-dot" cx="238" cy="112" r="5" fill="#2e7d32" stroke="#fff" stroke-width="1.5"/>
  <text class="label point-label" x="248" y="104" font-size="14" text-anchor="start" font-weight="bold" fill="#2e7d32">(0, 12)</text>
  <text class="label curve-name" x="452" y="294" font-size="14" text-anchor="end" font-weight="bold" fill="#1565c0">y = p(x)</text>
</svg>
```

- **alt**: Axes with x from −3 to 4 and y from −20 to 20. A smooth curve rises from the bottom left, cuts the x-axis at −2, passes through (0, 12), comes down to cut the x-axis at 1, dips below it and rises again to cut it at 3.
- **options**:
  - A) −4
  - B) 8
  - C) −12
  - D) −8
- **answer**: D
- **explanation**: With zeros −2, 1 and 3, p(x) = a(x + 2)(x − 1)(x − 3) for some number a. The point (0, 12) gives a × 2 × (−1) × (−3) = 6a = 12, so a = 2. Then p(2) = 2 × 4 × 1 × (−1) = −8. −4 is tempting because it takes a = 1, but the zeros fix p(x) only up to a number in front, which the y-axis point decides.
- **hint**: Write Umang's p(x) as a number times three brackets built from the zeros, then use the point on the y-axis to find that number.
- **skill**: cubic_from_its_zeros_and_y_intercept
- **difficulty**: hard
- **type**: pictorial
- **pictorial**: yes
- **olympiad_section**: achievers

### Q03
- **id**: g9-maths-ch02-ach-x-03
- **stem**: Ruchika's teacher writes a puzzle on the board: p(x) = x³ + ax² − x + b. She tells the class that (x − 1) is a factor of p(x), and that dividing p(x) by (x − 2) leaves 12 as the remainder. What is the product a × b?
- **options**:
  - A) −4
  - B) −36
  - C) 4
  - D) −12
- **answer**: A
- **explanation**: By the factor theorem, p(1) = 0: 1 + a − 1 + b = 0, so a + b = 0. By the remainder theorem, p(2) = 12: 8 + 4a − 2 + b = 12, so 4a + b = 6. Subtracting, 3a = 6, so a = 2 and b = −2, giving a × b = −4. −36 is tempting because it uses p(−2) = 12 for the division by (x − 2), which gives a = 6 and b = −6, but dividing by (x − 2) leaves remainder p(2).
- **hint**: Turn each fact about Ruchika's p(x) into an equation in a and b using the factor and remainder theorems, then solve both together.
- **skill**: two_unknown_coefficients_from_factor_and_remainder
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

### Q04
- **id**: g9-maths-ch02-ach-x-04
- **stem**: Without working out any of the cubes, Hiten finds the value of (−12)³ + 7³ + 5³. What value does he get?
- **options**:
  - A) 0
  - B) 1,260
  - C) −1,260
  - D) 2,196
- **answer**: C
- **explanation**: The bases add up to −12 + 7 + 5 = 0. The identity a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca) then gives a³ + b³ + c³ = 3abc = 3 × (−12) × 7 × 5 = −1260 (check: −1728 + 343 + 125 = −1260). 0 is tempting because the bases add up to 0, but that makes a³ + b³ + c³ − 3abc zero, not the sum of the cubes itself.
- **hint**: Add Hiten's three bases first; when that sum is special, an identity links the sum of the cubes to the product of the bases.
- **skill**: sum_of_cubes_when_the_bases_add_to_zero
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

### Q05
- **id**: g9-maths-ch02-ach-x-05
- **stem**: Manasi's rectangular plot near Nashik has an area of (6x² + 7x − 3) m², and its length is (3x − 1) m. When x = 10, how much does it cost to fence all round the plot at ₹150 per metre?
- **options**:
  - A) ₹13,800
  - B) ₹7,800
  - C) ₹17,400
  - D) ₹15,600
- **answer**: D
- **explanation**: Factorising, 6x² + 7x − 3 = (3x − 1)(2x + 3), so the breadth is (2x + 3) m. At x = 10 the plot is 29 m by 23 m, its perimeter is 2 × (29 + 23) = 104 m, and the fence costs 104 × 150 = ₹15,600. ₹13,800 is tempting because it takes the breadth as (2x − 3), getting the sign of the constant wrong, but (3x − 1)(2x − 3) would end in +3, not −3.
- **hint**: Divide Manasi's area polynomial by the length to find the breadth in x, check the constant term, then find the perimeter.
- **skill**: dividing_an_area_polynomial_by_a_side
- **difficulty**: hard
- **type**: mcq
- **pictorial**: no
- **olympiad_section**: achievers

## Answer Key

| Q# | id | Answer | skill | difficulty | olympiad_section | pictorial |
|----|----|--------|-------|------------|------------------|-----------|
| Q01 | g9-maths-ch02-ach-x-01 | B | box_volume_polynomial_from_a_net | hard | achievers | yes |
| Q02 | g9-maths-ch02-ach-x-02 | D | cubic_from_its_zeros_and_y_intercept | hard | achievers | yes |
| Q03 | g9-maths-ch02-ach-x-03 | A | two_unknown_coefficients_from_factor_and_remainder | hard | achievers | no |
| Q04 | g9-maths-ch02-ach-x-04 | C | sum_of_cubes_when_the_bases_add_to_zero | hard | achievers | no |
| Q05 | g9-maths-ch02-ach-x-05 | D | dividing_an_area_polynomial_by_a_side | hard | achievers | no |

## Pictorial notes
- Extra set added to `polynomials`: five hard multi-step Achievers items; pictorial items Q01, Q02. The parent chapter and its items are unchanged.
- Figures are drawn from the generator's data and read back by verify from geometry and printed text only; no figure carries data-* attributes or class names containing 'data-' (audit rule svg-data-attr). Every key and each tempting option is recomputed by `/workspace/scratch/verify_g9_achievers_extras.py`.
