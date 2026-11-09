# Duplicate-prompt replacements — 2026-11-09

## Meta
- source: origin/main 73d7ad4e (read with git show; nothing in the repo was edited)
- scope: nine duplicate-prompt groups from the Chief of Staff list; exactly ONE item replaced per group; every other item and key unchanged
- content_type: original_olympiad_style
- letters: each new item keeps the replaced item's correct-answer letter, in the TS file (answerId a–d) and in the source markdown (A–D), which order options differently
- how to apply: in the TS file replace the object with the same id by the TS block shown; in the source markdown replace the same Set/Q block by the house-format item (options in the markdown order shown)

## Summary

| # | Group ids | Replaced id | Old key (TS / md) | New key (TS / md) |
|---|---|---|---|---|
| 1 | g8-maths-exponents-a-q20, g8-maths-exponents-b-q11, g8-maths-exponents-a-q11, g8-maths-exponents-a-q24, g8-maths-exponents-b-q24 | g8-maths-exponents-b-q11 | c) 3³ / A) 3³ | c) 2³ / A) 2³ |
| 2 | g9-maths-numbers-b-q10, g8-maths-exponents-a-q06 | g9-maths-numbers-b-q10 | d) 8 / D) 8 | d) 6 / D) 6 |
| 3 | g5-maths-angles-a-q08, g5-maths-angles-a-q20, g5-maths-angles-b-q13 | g5-maths-angles-b-q13 | d) 120° / C) 60° | d) 120° / C) 120° |
| 4 | g5-maths-meas-a-q05, g5-maths-meas-b-q05 | g5-maths-meas-b-q05 | a) 28 cm / C) 28 cm | a) 9 m / C) 9 m |
| 5 | g5-maths-meas-a-q06, g5-maths-meas-b-q06 | g5-maths-meas-b-q06 | b) 64 cm² / B) 64 cm² | b) 36 / B) 36 |
| 6 | g6-maths-frac-a-q05, g6-maths-frac-b-q05, g6-maths-frac-b-q21 | g6-maths-frac-b-q21 | a) 1/8 / A) 1/8 | a) 0.375 kg / A) 0.375 kg |
| 7 | g8-maths-compare-a-q19, g8-maths-compare-b-q19 | g8-maths-compare-b-q19 | a) ₹832 / A) ₹832 | a) ₹64,800 / A) ₹64,800 |
| 8 | g7-maths-integers-a-q01, g7-maths-integers-b-q22 | g7-maths-integers-b-q22 | b) 6 / B) 6 | b) 7 / B) 7 |
| 9 | g5-maths-frac-a-q12, g5-maths-frac-b-q12 | g5-maths-frac-b-q12 | c) 3/5 / C) 3/5 | c) Sukanya / C) Sukanya |

## Group 1: Exponent laws: 'Simplify: (aˣ × aʸ) ÷ aᶻ'

- **group_ids**: g8-maths-exponents-a-q20, g8-maths-exponents-b-q11, g8-maths-exponents-a-q11, g8-maths-exponents-a-q24, g8-maths-exponents-b-q24
- **replaced_id**: g8-maths-exponents-b-q11
- **old_stem_ts**: Simplify: (3⁴ × 3²) ÷ 3³   (lib/prep/content/g8-maths-exponents.ts)
- **old_key_ts**: c) 3³
- **old_stem_md**: Simplify: (3⁴ × 3²) ÷ 3³   (docs/sof-source/grade-8/maths-ch06-exponents.md, Set B Q11)
- **old_key_md**: A) 3³
- **kept**: g8-maths-exponents-a-q20 — Simplify: (3⁵ × 3⁻²) ÷ 3³ (key d) 1)
- **kept**: g8-maths-exponents-a-q11 — Simplify: (2³ × 2⁵) ÷ 2⁴ (key c) 2⁴)
- **kept**: g8-maths-exponents-a-q24 — Simplify: (10³ × 10⁻⁵) ÷ 10⁻⁴ (key d) 10²)
- **kept**: g8-maths-exponents-b-q24 — Simplify: (10⁻² × 10⁴) ÷ 10⁻¹ (key d) 10³)
- **why_this_item**: b-q11 is the later duplicate of the named pair (a-q20 ~ b-q11): it sits in Set B and repeats the a-q11 pattern almost exactly (base 3 instead of 2, same + then ÷ order, positive exponents only). Replacing it keeps both hard negative-exponent versions (a-q20, a-q24) and the Set B hard item b-q24, so the skill spread is unchanged; the new item keeps the TS letter c and the markdown letter A.
- **flag_for_cos**: Five items share the exact 'Simplify: (aˣ × aʸ) ÷ aᶻ' shell (a-q11, a-q20, a-q24, b-q11, b-q24), and b-q20 'Simplify: (2⁴ ÷ 2⁷) × 2³' is a sixth variant. None is an exact duplicate (bases and exponents all differ), so only b-q11 is replaced here; a-q11, a-q20, a-q24, b-q24 (and b-q20) are flagged for CoS.
- **flag_for_cos**: a-q11 also repeats the lesson step_5 check 'Simplify (2³ × 2⁵) ÷ 2⁴' word for word.
- **flag_for_cos**: Unrelated finding while reading the set: a-q04 '(3²)³ = ?' lists both 3⁶ (key) and 9³, which are equal, so it has two correct options; a-q20's explanation names 3 as tempting with a reason ('multiply the exponents') that gives 3⁷, not 3. Flagged for CoS; not changed.
- **new_key**: TS c) 2³ · markdown A) 2³

### Q01
- **id**: g8-maths-exponents-b-q11
- **stem**: For a Diwali mela in Pune, Bhavik fills 2⁵ gift boxes, putting 2⁴ diyas into every box. All these diyas are then given out equally to 2⁶ families. Written as a power of 2, how many diyas does each family receive?
- **options**:
  - A) 2³
  - B) 2¹⁴
  - C) 2¹⁵
  - D) 2⁹
- **answer**: A
- **explanation**: The stall has 2⁵ × 2⁴ = 2⁵⁺⁴ = 2⁹ diyas. Sharing them equally among 2⁶ families divides: 2⁹ ÷ 2⁶ = 2⁹⁻⁶ = 2³, so each family gets 2³ = 8 diyas. 2¹⁴ is tempting if you multiply the exponents 5 and 4 to get 2²⁰ before dividing, but multiplying powers of the same base adds their exponents.
- **hint**: Bhavik's total is a product of powers with the same base; add those exponents, then subtract the exponent for the families.
- **skill**: laws
- **difficulty**: medium
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g8-maths-exponents-b-q11",
    prompt: "For a Diwali mela in Pune, Bhavik fills 2⁵ gift boxes, putting 2⁴ diyas into every box. All these diyas are then given out equally to 2⁶ families. Written as a power of 2, how many diyas does each family receive?",
    options: [
      { id: "a", text: "2¹⁴" },
      { id: "b", text: "2¹⁵" },
      { id: "c", text: "2³" },
      { id: "d", text: "2⁹" }
    ],
    answerId: "c",
    explanation: "The stall has 2⁵ × 2⁴ = 2⁵⁺⁴ = 2⁹ diyas. Sharing them equally among 2⁶ families divides: 2⁹ ÷ 2⁶ = 2⁹⁻⁶ = 2³, so each family gets 2³ = 8 diyas. 2¹⁴ is tempting if you multiply the exponents 5 and 4 to get 2²⁰ before dividing, but multiplying powers of the same base adds their exponents.",
    hints: ["Bhavik's total is a product of powers with the same base; add those exponents, then subtract the exponent for the families."]
  }
```

## Group 2: '(√2)⁶ equals…' ~ '2⁻³ equals…' (bare 'N^k equals…' shell)

- **group_ids**: g9-maths-numbers-b-q10, g8-maths-exponents-a-q06
- **replaced_id**: g9-maths-numbers-b-q10
- **old_stem_ts**: (√2)⁶ equals…   (lib/prep/content/g9-maths-number-systems.ts)
- **old_key_ts**: d) 8
- **old_stem_md**: (√2)⁶ equals…   (docs/sof-source/grade-9/maths-ch01-number-systems.md, Set B Q10)
- **old_key_md**: D) 8
- **kept**: g8-maths-exponents-a-q06 — 2⁻³ equals… (key c) 1/8)
- **why_this_item**: b-q10 is the later duplicate: it is the Set B item and the higher-grade copy of the bare 'N^k equals…' shell, while g8 a-q06 is the G8 chapter's only easy negative-exponent definition item. Replacing b-q10 keeps the G8 skill spread intact; the new item tests the same G9 skill (laws of exponents with a surd/rational-exponent base) at medium, keeping TS letter d and markdown letter D.
- **new_key**: TS d) 6 · markdown D) 6

### Q02
- **id**: g9-maths-numbers-b-q10
- **stem**: In a number puzzle at her school in Bhopal, Devyani looks for the whole number k for which (∛5)ᵏ = 25. What is k?
- **options**:
  - A) 2
  - B) 5
  - C) 9
  - D) 6
- **answer**: D
- **explanation**: ∛5 = 5^(1/3), so (∛5)ᵏ = 5^(k/3). Since 25 = 5², k/3 = 2 and k = 6. Check: (∛5)⁶ = ((∛5)³)² = 5² = 25. 2 is tempting because 5² = 25, but the base here is ∛5, not 5, so it takes three times as many factors to reach 25.
- **hint**: Write Devyani's ∛5 as a power of 5 with a fraction exponent, and write 25 as a power of 5 as well.
- **skill**: exponents
- **difficulty**: medium
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g9-maths-numbers-b-q10",
    prompt: "In a number puzzle at her school in Bhopal, Devyani looks for the whole number k for which (∛5)ᵏ = 25. What is k?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "5" },
      { id: "c", text: "9" },
      { id: "d", text: "6" }
    ],
    answerId: "d",
    explanation: "∛5 = 5^(1/3), so (∛5)ᵏ = 5^(k/3). Since 25 = 5², k/3 = 2 and k = 6. Check: (∛5)⁶ = ((∛5)³)² = 5² = 25. 2 is tempting because 5² = 25, but the base here is ∛5, not 5, so it takes three times as many factors to reach 25.",
    hints: ["Write Devyani's ∛5 as a power of 5 with a fraction exponent, and write 25 as a power of 5 as well."]
  }
```

## Group 3: Clock-hand angle at N:00

- **group_ids**: g5-maths-angles-a-q08, g5-maths-angles-a-q20, g5-maths-angles-b-q13
- **replaced_id**: g5-maths-angles-b-q13
- **old_stem_ts**: Look at the clock at 4:00. What angle do the hands make?   (lib/prep/content/g5-maths-angles.ts)
- **old_key_ts**: d) 120°
- **old_stem_md**: What is the smaller angle between the hands of a clock at exactly 2 o'clock?   (docs/sof-source/grade-5/maths-ch02-shapes-angles.md, Set B Q13)
- **old_key_md**: C) 60°
- **kept**: g5-maths-angles-a-q08 — Look at the clock at 3:00. What angle do the hands make? (key c) 90°)
- **kept**: g5-maths-angles-a-q20 — Look at the clock at 2:00. What angle do the hands make? (key b) 60°)
- **why_this_item**: b-q13 is the Set B (later) copy of the 'Look at the clock at N:00' shell. Replacing it keeps Set A's two clock items and Set B's letter balance; the new item still tests clock angles (30° per hour mark) at medium with a clock figure, as the TS item had, keeping TS letter d and markdown letter C.
- **flag_for_cos**: The TS file and the source markdown disagree for this group: TS a-q20 is 'Look at the clock at 2:00…' (key b 60°) but markdown Set A Q20 is the 8 o'clock REFLEX-angle item (key D 240°); TS b-q13 is 4:00 (key d 120°) but markdown Set B Q13 is 2 o'clock (key C 60°). After this replacement TS a-q08 (3:00) and a-q20 (2:00) still share the N:00 shell; flagged for CoS, not changed.
- **new_key**: TS d) 120° · markdown C) 120°

### Q03
- **id**: g5-maths-angles-b-q13
- **stem**: Indrajit's art class in Mysuru starts at 1 o'clock and ends at 5 o'clock the same afternoon. The clock shows the hour hand at the start (dashed) and at the end (solid). Through what angle does the hour hand turn during the class?

**Diagram (SVG):**

```svg
<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif" role="img" aria-label="A clock face; a dashed hour hand points to 1, a solid hour hand points to 5, the minute hand points to 12, and a dashed arc runs from 1 round to 5">
  <rect class="bg" x="0" y="0" width="400" height="260" fill="#fff"/>
  <text class="title" x="200" y="22" font-size="15" text-anchor="middle" font-weight="bold" fill="#333">Indrajit's classroom clock</text>
  <circle class="part clock" cx="200" cy="135" r="85" fill="#fffde7" stroke="#333" stroke-width="2"/>
  <line class="part tick" x1="240.5" y1="64.9" x2="236.5" y2="71.8" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="230.5" y="86.2" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">1</text>
  <line class="part tick" x1="270.1" y1="94.5" x2="263.2" y2="98.5" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="252.8" y="108.5" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">2</text>
  <line class="part tick" x1="281.0" y1="135.0" x2="273.0" y2="135.0" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="261.0" y="139.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">3</text>
  <line class="part tick" x1="270.1" y1="175.5" x2="263.2" y2="171.5" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="252.8" y="169.5" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">4</text>
  <line class="part tick" x1="240.5" y1="205.1" x2="236.5" y2="198.2" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="230.5" y="191.8" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">5</text>
  <line class="part tick" x1="200.0" y1="216.0" x2="200.0" y2="208.0" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="200.0" y="200.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">6</text>
  <line class="part tick" x1="159.5" y1="205.1" x2="163.5" y2="198.2" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="169.5" y="191.8" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">7</text>
  <line class="part tick" x1="129.9" y1="175.5" x2="136.8" y2="171.5" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="147.2" y="169.5" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">8</text>
  <line class="part tick" x1="119.0" y1="135.0" x2="127.0" y2="135.0" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="139.0" y="139.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">9</text>
  <line class="part tick" x1="129.9" y1="94.5" x2="136.8" y2="98.5" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="147.2" y="108.5" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">10</text>
  <line class="part tick" x1="159.5" y1="64.9" x2="163.5" y2="71.8" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="169.5" y="86.2" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">11</text>
  <line class="part tick" x1="200.0" y1="54.0" x2="200.0" y2="62.0" stroke="#333" stroke-width="1.5"/>
  <text class="label hour-num" x="200.0" y="78.0" font-size="13" text-anchor="middle" font-weight="bold" fill="#333">12</text>
  <path class="part turn-arc" d="M 214.0 110.8 A 28 28 0 0 1 214.0 159.2" fill="none" stroke="#2e7d32" stroke-width="2" stroke-dasharray="5 3"/>
  <line class="part hour-hand-start" x1="200" y1="135" x2="220.0" y2="100.4" stroke="#90a4ae" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 4"/>
  <line class="part hour-hand-end" x1="200" y1="135" x2="220.0" y2="169.6" stroke="#1565c0" stroke-width="4" stroke-linecap="round"/>
  <line class="part minute-hand" x1="200" y1="135" x2="200.0" y2="83.0" stroke="#e65100" stroke-width="3" stroke-linecap="round"/>
  <circle class="part hub" cx="200" cy="135" r="4" fill="#333"/>
  <text class="label caption" x="200" y="246" font-size="12" text-anchor="middle" font-weight="normal" fill="#555">Dashed: 1 o'clock (start) · Solid: 5 o'clock (end)</text>
</svg>
```

- **alt**: A clock face numbered 1 to 12. The minute hand points to 12. A dashed grey hour hand points to 1 and a solid blue hour hand points to 5, with a dashed green arc running clockwise from 1 to 5.
- **options**:
  - A) 90°
  - B) 150°
  - C) 120°
  - D) 60°
- **answer**: C
- **explanation**: In one hour the hour hand moves from one number to the next, which is 360° ÷ 12 = 30°. From 1 o'clock to 5 o'clock is 4 hours (1 → 2 → 3 → 4 → 5), so it turns 4 × 30° = 120°. 150° is tempting if you count the five numbers 1, 2, 3, 4 and 5 instead of the gaps between them.
- **hint**: In Indrajit's class, count the hours the hour hand travels; each hour moves it one twelfth of a full turn.
- **skill**: clock_angle
- **difficulty**: medium
- **type**: pictorial
- **pictorial**: yes

TS replacement object:

```ts
  {
    id: "g5-maths-angles-b-q13",
    prompt: "Indrajit's art class in Mysuru starts at 1 o'clock and ends at 5 o'clock the same afternoon. The clock shows the hour hand at the start (dashed) and at the end (solid). Through what angle does the hour hand turn during the class?",
    options: [
      { id: "a", text: "90°" },
      { id: "b", text: "150°" },
      { id: "c", text: "60°" },
      { id: "d", text: "120°" }
    ],
    answerId: "d",
    explanation: "In one hour the hour hand moves from one number to the next, which is 360° ÷ 12 = 30°. From 1 o'clock to 5 o'clock is 4 hours (1 → 2 → 3 → 4 → 5), so it turns 4 × 30° = 120°. 150° is tempting if you count the five numbers 1, 2, 3, 4 and 5 instead of the gaps between them.",
    hints: ["In Indrajit's class, count the hours the hour hand travels; each hour moves it one twelfth of a full turn."],
    figure: {"type": "svg", "markup": "<svg viewBox=\"0 0 400 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial, Helvetica, sans-serif\" role=\"img\" aria-label=\"A clock face; a dashed hour hand points to 1, a solid hour hand points to 5, the minute hand points to 12, and a dashed arc runs from 1 round to 5\">\n  <rect class=\"bg\" x=\"0\" y=\"0\" width=\"400\" height=\"260\" fill=\"#fff\"/>\n  <text class=\"title\" x=\"200\" y=\"22\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">Indrajit's classroom clock</text>\n  <circle class=\"part clock\" cx=\"200\" cy=\"135\" r=\"85\" fill=\"#fffde7\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line class=\"part tick\" x1=\"240.5\" y1=\"64.9\" x2=\"236.5\" y2=\"71.8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"230.5\" y=\"86.2\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">1</text>\n  <line class=\"part tick\" x1=\"270.1\" y1=\"94.5\" x2=\"263.2\" y2=\"98.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"252.8\" y=\"108.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">2</text>\n  <line class=\"part tick\" x1=\"281.0\" y1=\"135.0\" x2=\"273.0\" y2=\"135.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"261.0\" y=\"139.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3</text>\n  <line class=\"part tick\" x1=\"270.1\" y1=\"175.5\" x2=\"263.2\" y2=\"171.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"252.8\" y=\"169.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">4</text>\n  <line class=\"part tick\" x1=\"240.5\" y1=\"205.1\" x2=\"236.5\" y2=\"198.2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"230.5\" y=\"191.8\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">5</text>\n  <line class=\"part tick\" x1=\"200.0\" y1=\"216.0\" x2=\"200.0\" y2=\"208.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"200.0\" y=\"200.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">6</text>\n  <line class=\"part tick\" x1=\"159.5\" y1=\"205.1\" x2=\"163.5\" y2=\"198.2\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"169.5\" y=\"191.8\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">7</text>\n  <line class=\"part tick\" x1=\"129.9\" y1=\"175.5\" x2=\"136.8\" y2=\"171.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"147.2\" y=\"169.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">8</text>\n  <line class=\"part tick\" x1=\"119.0\" y1=\"135.0\" x2=\"127.0\" y2=\"135.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"139.0\" y=\"139.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">9</text>\n  <line class=\"part tick\" x1=\"129.9\" y1=\"94.5\" x2=\"136.8\" y2=\"98.5\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"147.2\" y=\"108.5\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">10</text>\n  <line class=\"part tick\" x1=\"159.5\" y1=\"64.9\" x2=\"163.5\" y2=\"71.8\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"169.5\" y=\"86.2\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">11</text>\n  <line class=\"part tick\" x1=\"200.0\" y1=\"54.0\" x2=\"200.0\" y2=\"62.0\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text class=\"label hour-num\" x=\"200.0\" y=\"78.0\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">12</text>\n  <path class=\"part turn-arc\" d=\"M 214.0 110.8 A 28 28 0 0 1 214.0 159.2\" fill=\"none\" stroke=\"#2e7d32\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n  <line class=\"part hour-hand-start\" x1=\"200\" y1=\"135\" x2=\"220.0\" y2=\"100.4\" stroke=\"#90a4ae\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-dasharray=\"6 4\"/>\n  <line class=\"part hour-hand-end\" x1=\"200\" y1=\"135\" x2=\"220.0\" y2=\"169.6\" stroke=\"#1565c0\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <line class=\"part minute-hand\" x1=\"200\" y1=\"135\" x2=\"200.0\" y2=\"83.0\" stroke=\"#e65100\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <circle class=\"part hub\" cx=\"200\" cy=\"135\" r=\"4\" fill=\"#333\"/>\n  <text class=\"label caption\" x=\"200\" y=\"246\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"normal\" fill=\"#555\">Dashed: 1 o'clock (start) · Solid: 5 o'clock (end)</text>\n</svg>", "alt": "A clock face numbered 1 to 12. The minute hand points to 12. A dashed grey hour hand points to 1 and a solid blue hour hand points to 5, with a dashed green arc running clockwise from 1 to 5."}
  }
```

## Group 4: Perimeter of a square with side N

- **group_ids**: g5-maths-meas-a-q05, g5-maths-meas-b-q05
- **replaced_id**: g5-maths-meas-b-q05
- **old_stem_ts**: What is the perimeter of a square with side 7 cm?   (lib/prep/content/g5-maths-measurement.ts)
- **old_key_ts**: a) 28 cm
- **old_stem_md**: What is the perimeter of a square with side 7 cm?   (docs/sof-source/grade-5/maths-ch05-measurement-area.md, Set B Q05)
- **old_key_md**: C) 28 cm
- **kept**: g5-maths-meas-a-q05 — What is the perimeter of a square with side 4 cm? (key a) 16 cm)
- **why_this_item**: b-q05 is the Set B (later) copy of 'perimeter of a square with side N cm'. The new item tests the same perimeter-of-a-square skill at easy, worked backwards from the length round the square, keeping TS letter a and markdown letter C.
- **new_key**: TS a) 9 m · markdown C) 9 m

### Q04
- **id**: g5-maths-meas-b-q05
- **stem**: Baldev, a farmer near Nagpur, puts exactly one round of wire 36 m long around his square vegetable patch. How long is each side of the patch?
- **options**:
  - A) 6 m
  - B) 12 m
  - C) 9 m
  - D) 18 m
- **answer**: C
- **explanation**: A square has 4 equal sides, and one round of wire is its perimeter. So each side is 36 ÷ 4 = 9 m (check: 4 × 9 = 36 m). 6 m is tempting because 6 × 6 = 36, but that would make 36 the area of the patch, not the length of wire round it.
- **hint**: The wire goes once round all the equal sides of Baldev's square patch, so share its length equally among those sides.
- **skill**: perimeter
- **difficulty**: easy
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g5-maths-meas-b-q05",
    prompt: "Baldev, a farmer near Nagpur, puts exactly one round of wire 36 m long around his square vegetable patch. How long is each side of the patch?",
    options: [
      { id: "a", text: "9 m" },
      { id: "b", text: "6 m" },
      { id: "c", text: "12 m" },
      { id: "d", text: "18 m" }
    ],
    answerId: "a",
    explanation: "A square has 4 equal sides, and one round of wire is its perimeter. So each side is 36 ÷ 4 = 9 m (check: 4 × 9 = 36 m). 6 m is tempting because 6 × 6 = 36, but that would make 36 the area of the patch, not the length of wire round it.",
    hints: ["The wire goes once round all the equal sides of Baldev's square patch, so share its length equally among those sides."]
  }
```

## Group 5: Area of a square with side N

- **group_ids**: g5-maths-meas-a-q06, g5-maths-meas-b-q06
- **replaced_id**: g5-maths-meas-b-q06
- **old_stem_ts**: What is the area of a square with side 8 cm?   (lib/prep/content/g5-maths-measurement.ts)
- **old_key_ts**: b) 64 cm²
- **old_stem_md**: What is the area of a square with side 8 cm?   (docs/sof-source/grade-5/maths-ch05-measurement-area.md, Set B Q06)
- **old_key_md**: B) 64 cm²
- **kept**: g5-maths-meas-a-q06 — What is the area of a square with side 5 cm? (key b) 25 cm²)
- **why_this_item**: b-q06 is the Set B (later) copy of 'area of a square with side N cm'. The new item tests the same area-of-a-square skill at easy through unit-square tiles, keeping TS letter b and markdown letter B.
- **new_key**: TS b) 36 · markdown B) 36

### Q05
- **id**: g5-maths-meas-b-q06
- **stem**: Hemlata's square verandah in Kochi measures 6 m along each edge. She covers the floor completely with square tiles that are 1 m along each edge, with no gaps or overlaps. How many tiles does she use?
- **options**:
  - A) 24
  - B) 36
  - C) 12
  - D) 18
- **answer**: B
- **explanation**: Each tile covers 1 square metre, so the number of tiles equals the area of the floor: 6 m × 6 m = 36 m², which needs 36 tiles. 24 is tempting because 4 × 6 = 24 is the distance round the edge (the perimeter), not the space covered.
- **hint**: Each tile covers exactly one square metre of Hemlata's verandah, so find how many square metres the floor covers.
- **skill**: area
- **difficulty**: easy
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g5-maths-meas-b-q06",
    prompt: "Hemlata's square verandah in Kochi measures 6 m along each edge. She covers the floor completely with square tiles that are 1 m along each edge, with no gaps or overlaps. How many tiles does she use?",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "36" },
      { id: "c", text: "12" },
      { id: "d", text: "18" }
    ],
    answerId: "b",
    explanation: "Each tile covers 1 square metre, so the number of tiles equals the area of the floor: 6 m × 6 m = 36 m², which needs 36 tiles. 24 is tempting because 4 × 6 = 24 is the distance round the edge (the perimeter), not the space covered.",
    hints: ["Each tile covers exactly one square metre of Hemlata's verandah, so find how many square metres the floor covers."]
  }
```

## Group 6: Convert 0.N to its simplest fraction

- **group_ids**: g6-maths-frac-a-q05, g6-maths-frac-b-q05, g6-maths-frac-b-q21
- **replaced_id**: g6-maths-frac-b-q21
- **old_stem_ts**: Convert 0.125 to a fraction in simplest form.   (lib/prep/content/g6-maths-fractions-decimals.ts)
- **old_key_ts**: a) 1/8
- **old_stem_md**: Convert 0.125 to a fraction in simplest form.   (docs/sof-source/grade-6/maths-ch02-fractions-decimals.md, Set B Q21)
- **old_key_md**: A) 1/8
- **kept**: g6-maths-frac-a-q05 — Convert 0.7 to a fraction in simplest form. (key a) 7/10)
- **kept**: g6-maths-frac-b-q05 — Convert 0.08 to a fraction in simplest form. (key a) 2/25)
- **why_this_item**: b-q21 is the highest-numbered (latest) of the three 'Convert 0.N to a fraction in simplest form' items. The new item tests the same fraction–decimal conversion skill with eighths/thousandths (the same three-decimal-place step as 0.125), keeping TS letter a and markdown letter A.
- **flag_for_cos**: After this replacement a-q05 (0.7) and b-q05 (0.08) still share the 'Convert 0.N to a fraction in simplest form' shell; flagged for CoS, not changed.
- **flag_for_cos**: The source markdown for this chapter records no skill or difficulty for any item; the skill and difficulty below are my labels (see judgment calls).
- **new_key**: TS a) 0.375 kg · markdown A) 0.375 kg

### Q06
- **id**: g6-maths-frac-b-q21
- **stem**: Mrinalini's grandmother in Rajkot uses 3/8 kg of peanuts from a 1 kg packet to make chikki. Which decimal shows the amount of peanuts she uses?
- **options**:
  - A) 0.375 kg
  - B) 0.38 kg
  - C) 3.8 kg
  - D) 0.83 kg
- **answer**: A
- **explanation**: 3/8 means 3 ÷ 8. Since 1/8 = 0.125, 3/8 = 3 × 0.125 = 0.375, so she uses 0.375 kg of peanuts. 0.38 kg is tempting if you just write the digits 3 and 8 after the decimal point, but 0.38 is 38/100, not 3/8.
- **hint**: Mrinalini's grandmother's fraction is a division; divide the numerator by the denominator, adding zeros after the decimal point.
- **skill**: fraction_decimal_conversion
- **difficulty**: medium
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g6-maths-frac-b-q21",
    prompt: "Mrinalini's grandmother in Rajkot uses 3/8 kg of peanuts from a 1 kg packet to make chikki. Which decimal shows the amount of peanuts she uses?",
    options: [
      { id: "a", text: "0.375 kg" },
      { id: "b", text: "0.38 kg" },
      { id: "c", text: "3.8 kg" },
      { id: "d", text: "0.83 kg" }
    ],
    answerId: "a",
    explanation: "3/8 means 3 ÷ 8. Since 1/8 = 0.125, 3/8 = 3 × 0.125 = 0.375, so she uses 0.375 kg of peanuts. 0.38 kg is tempting if you just write the digits 3 and 8 after the decimal point, but 0.38 is 38/100, not 3/8.",
    hints: ["Mrinalini's grandmother's fraction is a division; divide the numerator by the denominator, adding zeros after the decimal point."]
  }
```

## Group 7: Compound-interest template

- **group_ids**: g8-maths-compare-a-q19, g8-maths-compare-b-q19
- **replaced_id**: g8-maths-compare-b-q19
- **old_stem_ts**: What is the compound interest on ₹5,000 at 8% per year for 2 years, compounded annually?   (lib/prep/content/g8-maths-comparing.ts)
- **old_key_ts**: a) ₹832
- **old_stem_md**: What is the compound interest on ₹5,000 at 8% per year for 2 years, compounded annually?   (docs/sof-source/grade-8/maths-ch03-comparing.md, Set B Q19)
- **old_key_md**: A) ₹832
- **kept**: g8-maths-compare-a-q19 — What is the compound interest on ₹10,000 at 10% per year for 2 years, compounded annually? (key c) ₹2,100)
- **why_this_item**: b-q19 is the Set B (later) copy of 'compound interest on ₹P at R% for 2 years, compounded annually'. The new item tests the same compound-growth skill (successive percentage change on the new value) at medium through yearly depreciation, keeping TS letter a and markdown letter A.
- **new_key**: TS a) ₹64,800 · markdown A) ₹64,800

### Q07
- **id**: g8-maths-compare-b-q19
- **stem**: Yashwant buys a scooter in Ludhiana for ₹80,000. Its value falls by 10% every year, each time on its value at the start of that year. What is the scooter worth after 2 years?
- **options**:
  - A) ₹64,800
  - B) ₹64,000
  - C) ₹72,000
  - D) ₹15,200
- **answer**: A
- **explanation**: After 1 year the value is 90% of ₹80,000 = ₹72,000. After 2 years it is 90% of ₹72,000 = ₹64,800 (that is, 80,000 × 0.9 × 0.9). ₹64,000 is tempting if you take 10% of ₹80,000 off twice, but the second year's 10% is taken from the lower value of ₹72,000.
- **hint**: Find the value of Yashwant's scooter after the first year, then take the percentage fall from that new value for the next year.
- **skill**: compound_interest
- **difficulty**: medium
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g8-maths-compare-b-q19",
    prompt: "Yashwant buys a scooter in Ludhiana for ₹80,000. Its value falls by 10% every year, each time on its value at the start of that year. What is the scooter worth after 2 years?",
    options: [
      { id: "a", text: "₹64,800" },
      { id: "b", text: "₹64,000" },
      { id: "c", text: "₹72,000" },
      { id: "d", text: "₹15,200" }
    ],
    answerId: "a",
    explanation: "After 1 year the value is 90% of ₹80,000 = ₹72,000. After 2 years it is 90% of ₹72,000 = ₹64,800 (that is, 80,000 × 0.9 × 0.9). ₹64,000 is tempting if you take 10% of ₹80,000 off twice, but the second year's 10% is taken from the lower value of ₹72,000.",
    hints: ["Find the value of Yashwant's scooter after the first year, then take the percentage fall from that new value for the next year."]
  }
```

## Group 8: Integers strictly between −3 and N

- **group_ids**: g7-maths-integers-a-q01, g7-maths-integers-b-q22
- **replaced_id**: g7-maths-integers-b-q22
- **old_stem_ts**: How many integers lie strictly between −3 and 4?   (lib/prep/content/g7-maths-integers.ts)
- **old_key_ts**: b) 6
- **old_stem_md**: How many integers lie strictly between −3 and 4?   (docs/sof-source/grade-7/maths-ch01-integers.md, Set B Q22)
- **old_key_md**: B) 6
- **kept**: g7-maths-integers-a-q01 — How many integers lie strictly between −3 and 2? (key a) 4)
- **why_this_item**: b-q22 is the Set B (later, higher-numbered) copy of 'How many integers lie strictly between −3 and N?'. The new item tests the same counting-integers-in-an-open-range skill (difficulty 'mixed' as in the source) on a number track, keeping TS letter b and markdown letter B.
- **flag_for_cos**: The source markdown records no skill for this chapter's items (difficulty is 'mixed' throughout); the skill below is my label.
- **new_key**: TS b) 7 · markdown B) 7

### Q08
- **id**: g7-maths-integers-b-q22
- **stem**: In a board game, Pratyush's token may stop only on the whole-number squares of a number track that lie to the right of −5 and to the left of 3. How many squares can the token stop on?
- **options**:
  - A) 8
  - B) 7
  - C) 9
  - D) 6
- **answer**: B
- **explanation**: The squares to the right of −5 and to the left of 3 are −4, −3, −2, −1, 0, 1 and 2, which is 7 squares. 9 is tempting if you also count −5 and 3, but the token must stop strictly to the right of −5 and to the left of 3.
- **hint**: List the squares on Pratyush's track from just after −5 up to just before 3, and do not forget the square for zero.
- **skill**: counting_integers_in_a_range
- **difficulty**: mixed
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g7-maths-integers-b-q22",
    prompt: "In a board game, Pratyush's token may stop only on the whole-number squares of a number track that lie to the right of −5 and to the left of 3. How many squares can the token stop on?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "7" },
      { id: "c", text: "9" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "The squares to the right of −5 and to the left of 3 are −4, −3, −2, −1, 0, 1 and 2, which is 7 squares. 9 is tempting if you also count −5 and 3, but the token must stop strictly to the right of −5 and to the left of 3.",
    hints: ["List the squares on Pratyush's track from just after −5 up to just before 3, and do not forget the square for zero."]
  }
```

## Group 9: Which is greater, a/b or a/c

- **group_ids**: g5-maths-frac-a-q12, g5-maths-frac-b-q12
- **replaced_id**: g5-maths-frac-b-q12
- **old_stem_ts**: Which is greater: 3/5 or 3/8?   (lib/prep/content/g5-maths-fractions.ts)
- **old_key_ts**: c) 3/5
- **old_stem_md**: Which is greater: 3/5 or 3/8?   (docs/sof-source/grade-5/maths-ch03-fractions.md, Set B Q12)
- **old_key_md**: C) 3/5
- **kept**: g5-maths-frac-a-q12 — Which is greater: 1/5 or 1/8? (key b) 1/5)
- **why_this_item**: b-q12 is the Set B (later) copy of 'Which is greater: a/5 or a/8?'. The new item tests the same comparing-fractions skill at medium with unlike numerators and denominators, keeping TS letter c and markdown letter C.
- **new_key**: TS c) Sukanya · markdown C) Sukanya

### Q09
- **id**: g5-maths-frac-b-q12
- **stem**: On a train to Shimla, Harshita and her cousin Sukanya each open an identical chikki bar. By the time the train arrives, Harshita has eaten 2/3 of her bar and Sukanya has eaten 3/4 of hers. Which cousin has eaten more chikki?
- **options**:
  - A) Harshita
  - B) Both have eaten the same amount
  - C) Sukanya
  - D) It cannot be told
- **answer**: C
- **explanation**: Compare 2/3 and 3/4 using twelfths: 2/3 = 8/12 and 3/4 = 9/12, so Sukanya has eaten more. Both have eaten the same amount is tempting because each girl has one piece of her bar left, but a quarter of a bar is a smaller piece than a third, so Sukanya has less left and has eaten more.
- **hint**: Write Harshita's fraction and her cousin's fraction as twelfths, or compare the size of the piece each girl still has left.
- **skill**: compare
- **difficulty**: medium
- **type**: mcq
- **pictorial**: no

TS replacement object:

```ts
  {
    id: "g5-maths-frac-b-q12",
    prompt: "On a train to Shimla, Harshita and her cousin Sukanya each open an identical chikki bar. By the time the train arrives, Harshita has eaten 2/3 of her bar and Sukanya has eaten 3/4 of hers. Which cousin has eaten more chikki?",
    options: [
      { id: "a", text: "Harshita" },
      { id: "b", text: "Both have eaten the same amount" },
      { id: "c", text: "Sukanya" },
      { id: "d", text: "It cannot be told" }
    ],
    answerId: "c",
    explanation: "Compare 2/3 and 3/4 using twelfths: 2/3 = 8/12 and 3/4 = 9/12, so Sukanya has eaten more. Both have eaten the same amount is tempting because each girl has one piece of her bar left, but a quarter of a bar is a smaller piece than a third, so Sukanya has less left and has eaten more.",
    hints: ["Write Harshita's fraction and her cousin's fraction as twelfths, or compare the size of the piece each girl still has left."]
  }
```

## Judgment calls

- Old items were read from origin/main in both places they live (the TS file and the source markdown). Where the two order the options differently, the new item keeps the replaced item's letter in each: the TS object uses the TS answerId and the markdown block uses the markdown letter.
- Skill and difficulty come from the replaced item's source-markdown fields; where the source records none (G6 fractions-decimals has neither; G7 integers has only 'mixed'), the labels are mine and are marked in that group's flags.
- Group 3 keeps a clock figure because every TS clock item in the group carries one.
- Groups with more than two items sharing a shell (1, 3, 6) have exactly one item replaced; the remaining shared-shell items are flagged for CoS rather than changed.
