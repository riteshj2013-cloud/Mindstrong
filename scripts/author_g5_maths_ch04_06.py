#!/usr/bin/env python3
"""Author G5 Maths Ch4–6: markdown sources + TS modules + hint stubs."""
from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import DOCS, OUT, emit_module, lesson_ts, maths_sets

DOCS_G5 = DOCS / "grade-5"
DOCS_G5.mkdir(parents=True, exist_ok=True)


def q(stem, options, answer, explanation, skill, difficulty):
    """options: list of 4 strings in A–D order; answer: 'A'|'B'|'C'|'D'."""
    assert len(options) == 4 and answer in "ABCD"
    return {
        "stem": stem,
        "options": options,
        "answer": answer,
        "explanation": explanation,
        "skill": skill,
        "difficulty": difficulty,
    }


def render_set(qs):
    lines = []
    for i, item in enumerate(qs, 1):
        lines.append(f"### Q{i:02d}")
        lines.append(f"- **stem**: {item['stem']}")
        lines.append("- **options**:")
        for letter, text in zip("ABCD", item["options"]):
            lines.append(f"  - {letter}) {text}")
        lines.append(f"- **answer**: {item['answer']}")
        lines.append(f"- **explanation**: {item['explanation']}")
        lines.append(f"- **skill**: {item['skill']}")
        lines.append(f"- **difficulty**: {item['difficulty']}")
        lines.append("")
    return "\n".join(lines)


def render_answer_key(label, qs):
    rows = [
        f"## Answer Key — {label}",
        "",
        "| Q# | Answer | skill | difficulty |",
        "|----|--------|-------|------------|",
    ]
    for i, item in enumerate(qs, 1):
        rows.append(
            f"| Q{i:02d} | {item['answer']} | {item['skill']} | {item['difficulty']} |"
        )
    return "\n".join(rows)


def write_chapter(doc_name, title, meta_id, chapter_title, lesson_steps, set_a, set_b):
    assert len(set_a) == 24 and len(set_b) == 24, (doc_name, len(set_a), len(set_b))
    body = [
        f"# Grade 5 Maths — {title}",
        "",
        "## Meta",
        "- grade: 5",
        "- subject: Maths",
        f"- chapter_id: {meta_id}",
        f"- chapter_title: {chapter_title}",
        "- curriculum_source: NCERT Class 5 themes (public topic list only)",
        "- content_type: original_sof_style",
        "",
        "## Interactive Lesson Outline",
        "",
        lesson_steps.strip(),
        "",
        "## Practice Set A",
        "",
        render_set(set_a),
        "## Practice Set B",
        "",
        render_set(set_b),
        render_answer_key("Set A", set_a),
        "",
        render_answer_key("Set B", set_b),
        "",
    ]
    path = DOCS_G5 / doc_name
    path.write_text("\n".join(body))
    print("Wrote", path.relative_to(path.parents[2]), "A=24 B=24")
    return path


# ---------------------------------------------------------------------------
# Chapter 4 — Decimals & Percentages
# ---------------------------------------------------------------------------
CH4_LESSON = """
### step_1: Tenths and Hundredths
- **tts**:
  - When we split one whole into ten equal parts, each part is one tenth, written as 0.1.
  - Split into a hundred equal parts and each is one hundredth, written as 0.01.
- **on_screen**: A metre strip splits into 10 decimetres, then into 100 centimetres; child taps 0.3 and 0.07 on a place-value chart.
- **check**: What decimal shows 7 hundredths? — Answer: 0.07

### step_2: Place Value of Decimals
- **tts**:
  - To the left of the point we have ones, tens, hundreds. To the right we have tenths, hundredths, thousandths.
  - The digit's place tells its value: the 4 in 3.45 is 4 tenths.
- **on_screen**: Place-value house for 48.305; child lights up each digit's place and value.
- **check**: What is the place value of 5 in 2. sn 2. sn wait 2. sn — Answer: 5 thousandths in 2.015 → fix: What is the place value of 5 in 2.015? — Answer: 5 thousandths

### step_3: Comparing and Ordering Decimals
- **tts**:
  - Line up the decimal points and compare digit by digit from the left.
  - You can add zeros at the end without changing the value: 0.5 equals 0.50.
- **on_screen**: Cards 0.8, 0.75, 0.805 are compared on a number line from 0 to 1.
- **check**: Which is greater, 0.6 or 0.58? — Answer: 0.6

### step_4: Fractions and Decimals
- **tts**:
  - Tenths and hundredths convert easily: 3/10 is 0.3 and 17/100 is 0.17.
  - To write a fraction as a decimal, divide the top by the bottom.
- **on_screen**: Fraction-decimal flip cards for 1/2, 1/4, 3/4, 1/5 and 1/10.
- **check**: Write 3/4 as a decimal. — Answer: 0.75

### step_5: Adding and Subtracting Decimals
- **tts**:
  - Always line up the decimal points before you add or subtract.
  - Fill empty places with zeros so every column has a digit.
- **on_screen**: Vertical addition of 3.6 + 1.25 with guide lines; child places the point in the sum.
- **check**: What is 2.5 + 1.75? — Answer: 4.25

### step_6: Multiplying and Dividing by 10 and 100
- **tts**:
  - Multiply by 10 and the point jumps one place to the right; by 100, two places.
  - Divide by 10 and the point jumps one place to the left.
- **on_screen**: A "decimal point hopper" moves across 0.45 × 10, × 100, ÷ 10.
- **check**: What is 0.7 × 100? — Answer: 70

### step_7: Percent Means Per Hundred
- **tts**:
  - Percent means out of one hundred. The symbol is %.
  - 25% is 25 out of 100, which is also 1/4 or 0.25.
- **on_screen**: A 10-by-10 grid shades 25 squares; labels show 25%, 1/4 and 0.25 together.
- **check**: Write 1/2 as a percent. — Answer: 50%

### step_8: Percent of a Number and Money
- **tts**:
  - To find 10% of a number, divide by 10. To find 50%, take half.
  - Shop offers and marks out of 100 use percent every day.
- **on_screen**: A ₹200 shirt with 25% off; child finds the discount and the sale price.
- **check**: What is 20% of 150? — Answer: 30
""".replace(
    "What is the place value of 5 in 2. sn 2. sn wait 2. sn — Answer: 5 thousandths in 2.015 → fix: What is the place value of 5 in 2.015? — Answer: 5 thousandths",
    "What is the place value of 5 in 2.015? — Answer: 5 thousandths",
)

CH4_A = [
    q("What decimal represents 3 tenths?", ["0.3", "3.0", "0.03", "30"], "A",
      "3 tenths means 3/10, which is written as 0.3.", "place_value", "easy"),
    q("What decimal represents 7 hundredths?", ["0.7", "7.0", "0.07", "0.007"], "C",
      "7 hundredths is 7/100, written as 0.07 with the 7 in the hundredths place.", "place_value", "easy"),
    q("In 4.86, which digit is in the tenths place?",
      ["4", "8", "6", "0"], "B",
      "Just after the decimal point is the tenths place, so the digit is 8.", "place_value", "easy"),
    q("Which number is equal to 0.5?", ["1/5", "1/2", "5", "1/50"], "B",
      "0.5 means 5/10, which simplifies to 1/2.", "fraction_decimal", "easy"),
    q("Which is greater: 0.8 or 0.75?", ["0.75", "0.8", "They are equal", "Cannot tell"], "B",
      "0.80 is greater than 0.75 when both have hundredths, so 0.8 is greater.", "compare", "easy"),
    q("What is 1.2 + 0.5?", ["1.7", "1.25", "0.7", "6.2"], "A",
      "Line up the points: 1.2 + 0.5 = 1.7.", "add_subtract", "easy"),
    q("What is 3.6 − 1.4?", ["2.2", "2.0", "5.0", "1.2"], "A",
      "Subtract tenths then ones: 3.6 − 1.4 = 2.2.", "add_subtract", "easy"),
    q("What is 0.4 × 10?", ["0.04", "4", "40", "0.4"], "B",
      "Multiplying by 10 moves the decimal point one place right: 0.4 becomes 4.", "times_tens", "easy"),
    q("What is 25% as a fraction in simplest form?", ["25/100", "1/4", "1/25", "4/1"], "B",
      "25% = 25/100 = 1/4 after dividing top and bottom by 25.", "percent", "easy"),
    q("What is 50% of 80?", ["40", "30", "50", "16"], "A",
      "50% means half, and half of 80 is 40.", "percent_of", "easy"),
    q("Write 3/10 as a decimal.", ["0.3", "3.0", "0.03", "0.003"], "A",
      "3/10 is three tenths, written as 0.3.", "fraction_decimal", "easy"),
    q("Which shows one and twenty-five hundredths?", ["1.025", "1.25", "12.5", "0.125"], "B",
      "1 whole and 25 hundredths is 1.25.", "place_value", "easy"),
    q("Arrange in ascending order: 0.4, 0.35, 0.405",
      ["0.4, 0.35, 0.405", "0.35, 0.4, 0.405", "0.35, 0.405, 0.4", "0.405, 0.4, 0.35"], "B",
      "As hundredths: 0.35, 0.40, 0.405 → ascending is 0.35, 0.4, 0.405.", "compare", "medium"),
    q("What is the place value of 9 in 5.391?",
      ["9 ones", "9 tenths", "9 hundredths", "9 thousandths"], "C",
      "Places after the point are tenths, hundredths, thousandths — so 9 is hundredths.", "place_value", "medium"),
    q("What is 2.05 + 1.3?", ["3.35", "3.08", "2.18", "4.35"], "A",
      "Write 1.3 as 1.30; 2.05 + 1.30 = 3.35.", "add_subtract", "medium"),
    q("What is 4.2 − 0.85?", ["3.35", "3.45", "4.65", "3.15"], "A",
      "4.20 − 0.85 = 3.35.", "add_subtract", "medium"),
    q("What is 0.56 × 100?", ["5.6", "56", "560", "0.0056"], "B",
      "×100 moves the point two places right: 0.56 → 56.", "times_tens", "medium"),
    q("Write 0.75 as a percent.", ["7.5%", "75%", "750%", "0.75%"], "B",
      "0.75 = 75/100 = 75%.", "percent", "medium"),
    q("What is 10% of 250?", ["25", "2.5", "250", "10"], "A",
      "10% means divide by 10, so 250 ÷ 10 = 25.", "percent_of", "medium"),
    q("A bottle holds 0.75 L. How many millilitres is that?",
      ["75 ml", "750 ml", "7.5 ml", "7500 ml"], "B",
      "1 L = 1000 ml, so 0.75 × 1000 = 750 ml.", "word_problem", "medium"),
    q("Which fraction equals 0.2?", ["1/2", "1/5", "2/5", "1/20"], "B",
      "0.2 = 2/10 = 1/5.", "fraction_decimal", "hard"),
    q("Riya scored 18 marks out of 20. What percent did she score?",
      ["18%", "80%", "90%", "95%"], "C",
      "18/20 = 90/100 = 90%.", "percent", "hard"),
    q("A shirt costs ₹400. A shop offers 25% off. What is the sale price?",
      ["₹100", "₹300", "₹325", "₹375"], "B",
      "25% of 400 is 100, so the sale price is 400 − 100 = ₹300.", "percent_of", "hard"),
    q("What is 6.04 ÷ 10?", ["60.4", "0.604", "0.064", "6.4"], "B",
      "÷10 moves the point one place left: 6.04 → 0.604.", "times_tens", "hard"),
]

CH4_B = [
    q("What decimal represents 9 tenths?", ["0.09", "0.9", "9.0", "0.009"], "B",
      "9 tenths is 9/10 = 0.9.", "place_value", "easy"),
    q("What decimal represents 4 hundredths?", ["0.4", "0.04", "4.0", "0.004"], "B",
      "4 hundredths is 4/100 = 0.04.", "place_value", "easy"),
    q("In 7.253, which digit is in the hundredths place?", ["2", "5", "3", "7"], "B",
      "Tenths is 2, hundredths is 5, thousandths is 3.", "place_value", "easy"),
    q("Which number is equal to 0.25?", ["1/2", "1/4", "1/25", "2/5"], "B",
      "0.25 = 25/100 = 1/4.", "fraction_decimal", "easy"),
    q("Which is smaller: 0.09 or 0.1?", ["0.09", "0.1", "They are equal", "Cannot tell"], "A",
      "0.10 is greater than 0.09, so 0.09 is smaller.", "compare", "easy"),
    q("What is 0.8 + 0.15?", ["0.95", "0.23", "0.815", "1.95"], "A",
      "0.80 + 0.15 = 0.95.", "add_subtract", "easy"),
    q("What is 5.0 − 2.3?", ["2.7", "3.7", "7.3", "2.3"], "A",
      "5.0 − 2.3 = 2.7.", "add_subtract", "easy"),
    q("What is 1.5 × 10?", ["0.15", "15", "150", "1.05"], "B",
      "×10 moves the point one place right: 1.5 → 15.", "times_tens", "easy"),
    q("What is 10% as a decimal?", ["10", "1.0", "0.1", "0.01"], "C",
      "10% = 10/100 = 0.1.", "percent", "easy"),
    q("What is 25% of 40?", ["10", "15", "8", "20"], "A",
      "25% is one quarter; 40 ÷ 4 = 10.", "percent_of", "easy"),
    q("Write 7/100 as a decimal.", ["0.7", "0.07", "7.0", "0.007"], "B",
      "7/100 is seven hundredths = 0.07.", "fraction_decimal", "easy"),
    q("Which shows three and six hundredths?", ["3.6", "3.06", "3.006", "0.36"], "B",
      "3 wholes and 6 hundredths is 3.06.", "place_value", "easy"),
    q("Arrange in descending order: 1.05, 1.5, 1.005",
      ["1.5, 1.05, 1.005", "1.05, 1.5, 1.005", "1.005, 1.05, 1.5", "1.5, 1.005, 1.05"], "A",
      "1.500 > 1.050 > 1.005.", "compare", "medium"),
    q("What is the face value of 6 in 8.46?", ["6", "0.6", "0.06", "60"], "A",
      "Face value is the digit itself, which is 6.", "place_value", "medium"),
    q("What is 0.9 + 2.45?", ["3.35", "2.54", "3.25", "12.45"], "A",
      "0.90 + 2.45 = 3.35.", "add_subtract", "medium"),
    q("What is 6.5 − 2.75?", ["3.75", "4.25", "3.25", "4.75"], "A",
      "6.50 − 2.75 = 3.75.", "add_subtract", "medium"),
    q("What is 3.2 ÷ 100?", ["0.032", "0.32", "32", "320"], "A",
      "÷100 moves the point two places left: 3.2 → 0.032.", "times_tens", "medium"),
    q("Write 2/5 as a percent.", ["20%", "25%", "40%", "50%"], "C",
      "2/5 = 0.4 = 40%.", "percent", "medium"),
    q("What is 5% of 200?", ["5", "10", "20", "50"], "B",
      "5% of 200 = (5/100)×200 = 10.", "percent_of", "medium"),
    q("A ribbon is 1.25 m long. How many centimetres is that?",
      ["12.5 cm", "125 cm", "1.25 cm", "1250 cm"], "B",
      "1 m = 100 cm, so 1.25 × 100 = 125 cm.", "word_problem", "medium"),
    q("Which decimal equals 3/8?", ["0.375", "0.38", "0.3", "0.125"], "A",
      "3 ÷ 8 = 0.375.", "fraction_decimal", "hard"),
    q("Out of 50 children, 35 like cricket. What percent like cricket?",
      ["35%", "70%", "65%", "50%"], "B",
      "35/50 = 70/100 = 70%.", "percent", "hard"),
    q("A bag costs ₹250. After a 20% discount, what does it cost?",
      ["₹50", "₹200", "₹230", "₹180"], "B",
      "20% of 250 is 50; sale price is 250 − 50 = ₹200.", "percent_of", "hard"),
    q("What is (0.6 + 0.15) × 10?", ["7.5", "6.15", "0.75", "75"], "A",
      "0.6 + 0.15 = 0.75; 0.75 × 10 = 7.5.", "mixed", "hard"),
]

# ---------------------------------------------------------------------------
# Chapter 5 — Measurement & Area
# ---------------------------------------------------------------------------
CH5_LESSON = """
### step_1: Length Units
- **tts**:
  - We measure length in millimetres, centimetres, metres and kilometres.
  - Remember: 10 mm = 1 cm, 100 cm = 1 m, and 1000 m = 1 km.
- **on_screen**: A ruler zooms from mm to cm to m; child converts 3 m into centimetres.
- **check**: How many centimetres are in 2 metres? — Answer: 200 cm

### step_2: Mass and Capacity
- **tts**:
  - Mass uses grams and kilograms. Capacity uses millilitres and litres.
  - 1000 g = 1 kg and 1000 ml = 1 L.
- **on_screen**: Kitchen balance and juice jug; child matches 1.5 kg to 1500 g and 2 L to 2000 ml.
- **check**: How many grams are in 3 kg? — Answer: 3000 g

### step_3: Perimeter of Rectangles and Squares
- **tts**:
  - Perimeter is the distance around a shape.
  - For a rectangle, add all four sides, or use 2 × (length + breadth). For a square, use 4 × side.
- **on_screen**: A rectangular park path lights up; child computes perimeter from labelled sides.
- **check**: Perimeter of a 5 cm by 3 cm rectangle? — Answer: 16 cm

### step_4: Area of Rectangles and Squares
- **tts**:
  - Area is the space inside a shape, measured in square units.
  - Rectangle area is length × breadth. Square area is side × side.
- **on_screen**: A grid fills a 4-by-3 rectangle showing 12 square units.
- **check**: Area of a square of side 6 cm? — Answer: 36 cm²

### step_5: Choosing the Right Unit
- **tts**:
  - Use km for long roads, cm for a pencil, kg for a bag of rice, and ml for medicine.
  - Matching the unit to the object keeps answers sensible.
- **on_screen**: Drag-and-drop: pencil → cm, classroom → m, city distance → km.
- **check**: Best unit for the length of a pencil? — Answer: centimetre

### step_6: Converting Between Units
- **tts**:
  - To go to a smaller unit, multiply. To go to a larger unit, divide.
  - From metres to centimetres multiply by 100; from grams to kilograms divide by 1000.
- **on_screen**: Conversion machine with × and ÷ buttons for length, mass and capacity.
- **check**: 4500 ml = ? L — Answer: 4.5 L

### step_7: Area Word Problems
- **tts**:
  - Floor tiles, fields and book covers are area stories.
  - Keep units the same before you multiply.
- **on_screen**: A room 8 m by 5 m needs flooring; child finds the area in square metres.
- **check**: Area of an 8 m by 5 m room? — Answer: 40 m²

### step_8: Perimeter vs Area
- **tts**:
  - Perimeter is a length around; area is space inside.
  - Two shapes can share a perimeter but have different areas.
- **on_screen**: Two rectangles with the same perimeter light up different areas on a grid.
- **check**: Does perimeter use square units? — Answer: No
"""

CH5_A = [
    q("How many centimetres are there in 1 metre?", ["10 cm", "100 cm", "1000 cm", "50 cm"], "B",
      "1 m = 100 cm.", "length", "easy"),
    q("How many metres are there in 1 kilometre?", ["10 m", "100 m", "1000 m", "10000 m"], "C",
      "1 km = 1000 m.", "length", "easy"),
    q("How many grams are there in 1 kilogram?", ["100 g", "10 g", "1000 g", "500 g"], "C",
      "1 kg = 1000 g.", "mass", "easy"),
    q("How many millilitres are there in 1 litre?", ["10 ml", "100 ml", "1000 ml", "500 ml"], "C",
      "1 L = 1000 ml.", "capacity", "easy"),
    q("What is the perimeter of a square with side 4 cm?", ["8 cm", "12 cm", "16 cm", "20 cm"], "C",
      "Perimeter of a square is 4 × side = 4 × 4 = 16 cm.", "perimeter", "easy"),
    q("What is the area of a square with side 5 cm?", ["20 cm²", "25 cm²", "10 cm²", "15 cm²"], "B",
      "Area of a square is side × side = 5 × 5 = 25 cm².", "area", "easy"),
    q("What is the perimeter of a rectangle 6 cm long and 2 cm broad?",
      ["8 cm", "12 cm", "16 cm", "14 cm"], "C",
      "Perimeter = 2 × (6 + 2) = 2 × 8 = 16 cm.", "perimeter", "easy"),
    q("What is the area of a rectangle 7 cm by 3 cm?", ["21 cm²", "20 cm²", "10 cm²", "24 cm²"], "A",
      "Area = length × breadth = 7 × 3 = 21 cm².", "area", "easy"),
    q("Which unit is best for the length of a classroom?",
      ["millimetre", "centimetre", "metre", "kilometre"], "C",
      "A classroom is a few metres long, so metre is the sensible unit.", "units", "easy"),
    q("Which unit is best for the mass of a packet of sugar?",
      ["millilitre", "kilogram", "kilometre", "litre"], "B",
      "Sugar is sold by mass, usually in kilograms (or grams).", "units", "easy"),
    q("Convert 3 m to centimetres.", ["30 cm", "300 cm", "3000 cm", "3 cm"], "B",
      "3 × 100 = 300 cm.", "conversion", "easy"),
    q("Convert 2 kg to grams.", ["200 g", "20 g", "2000 g", "2500 g"], "C",
      "2 × 1000 = 2000 g.", "conversion", "easy"),
    q("A rectangular park is 40 m long and 25 m broad. What is its perimeter?",
      ["65 m", "130 m", "1000 m", "90 m"], "B",
      "Perimeter = 2 × (40 + 25) = 2 × 65 = 130 m.", "perimeter", "medium"),
    q("A square field has side 12 m. What is its area?",
      ["48 m²", "144 m²", "24 m²", "120 m²"], "B",
      "Area = 12 × 12 = 144 m².", "area", "medium"),
    q("Convert 450 cm to metres.", ["4.5 m", "45 m", "0.45 m", "4500 m"], "A",
      "450 ÷ 100 = 4.5 m.", "conversion", "medium"),
    q("Convert 3500 ml to litres.", ["3.5 L", "35 L", "0.35 L", "350 L"], "A",
      "3500 ÷ 1000 = 3.5 L.", "conversion", "medium"),
    q("A rectangular stamp is 3 cm by 2 cm. What is its area?",
      ["5 cm²", "6 cm²", "10 cm²", "12 cm²"], "B",
      "Area = 3 × 2 = 6 cm².", "area", "medium"),
    q("How many millimetres are in 5 cm?", ["5 mm", "50 mm", "500 mm", "0.5 mm"], "B",
      "1 cm = 10 mm, so 5 cm = 50 mm.", "length", "medium"),
    q("A square has perimeter 36 cm. What is the length of one side?",
      ["6 cm", "9 cm", "12 cm", "18 cm"], "B",
      "Side = perimeter ÷ 4 = 36 ÷ 4 = 9 cm.", "perimeter", "medium"),
    q("A rectangular floor is 8 m by 5 m. How many square metres of carpet are needed?",
      ["13 m²", "26 m²", "40 m²", "45 m²"], "C",
      "Area = 8 × 5 = 40 m².", "area", "medium"),
    q("Which is longer: 1.2 km or 1200 m?",
      ["1.2 km", "1200 m", "They are equal", "Cannot tell"], "C",
      "1.2 km = 1200 m, so they are equal.", "conversion", "hard"),
    q("A rectangular garden is 15 m long and 10 m broad. A fence goes around it. How long is the fence?",
      ["25 m", "50 m", "150 m", "30 m"], "B",
      "Fence length = perimeter = 2 × (15 + 10) = 50 m.", "perimeter", "hard"),
    q("Tiles of area 1 m² each cover a room of 6 m by 4 m. How many tiles are needed?",
      ["10", "20", "24", "48"], "C",
      "Room area = 24 m², so 24 tiles of 1 m² are needed.", "area", "hard"),
    q("A juice can holds 250 ml. How many such cans make 2 L?",
      ["4", "6", "8", "10"], "C",
      "2 L = 2000 ml; 2000 ÷ 250 = 8 cans.", "capacity", "hard"),
]

CH5_B = [
    q("How many millimetres are in 1 centimetre?", ["1 mm", "10 mm", "100 mm", "1000 mm"], "B",
      "1 cm = 10 mm.", "length", "easy"),
    q("How many centimetres are in 1 kilometre?",
      ["100 cm", "1000 cm", "10,000 cm", "100,000 cm"], "D",
      "1 km = 1000 m = 1000 × 100 cm = 100,000 cm.", "length", "easy"),
    q("How many kilograms equal 5000 g?", ["5 kg", "50 kg", "0.5 kg", "500 kg"], "A",
      "5000 ÷ 1000 = 5 kg.", "mass", "easy"),
    q("How many litres equal 2000 ml?", ["2 L", "20 L", "0.2 L", "200 L"], "A",
      "2000 ÷ 1000 = 2 L.", "capacity", "easy"),
    q("What is the perimeter of a square with side 7 cm?", ["14 cm", "21 cm", "28 cm", "49 cm"], "C",
      "4 × 7 = 28 cm.", "perimeter", "easy"),
    q("What is the area of a square with side 8 cm?", ["32 cm²", "64 cm²", "16 cm²", "48 cm²"], "B",
      "8 × 8 = 64 cm².", "area", "easy"),
    q("What is the perimeter of a rectangle 9 cm by 4 cm?",
      ["13 cm", "26 cm", "36 cm", "22 cm"], "B",
      "2 × (9 + 4) = 26 cm.", "perimeter", "easy"),
    q("What is the area of a rectangle 10 cm by 6 cm?",
      ["16 cm²", "32 cm²", "60 cm²", "100 cm²"], "C",
      "10 × 6 = 60 cm².", "area", "easy"),
    q("Which unit is best for the distance between two cities?",
      ["cm", "mm", "km", "ml"], "C",
      "City distances are measured in kilometres.", "units", "easy"),
    q("Which unit is best for a spoon of cough syrup?",
      ["kilometre", "kilogram", "millilitre", "metre"], "C",
      "Small liquid amounts use millilitres.", "units", "easy"),
    q("Convert 4 km to metres.", ["40 m", "400 m", "4000 m", "40,000 m"], "C",
      "4 × 1000 = 4000 m.", "conversion", "easy"),
    q("Convert 3 L to millilitres.", ["30 ml", "300 ml", "3000 ml", "3 ml"], "C",
      "3 × 1000 = 3000 ml.", "conversion", "easy"),
    q("A rectangular photo is 18 cm by 12 cm. What is its perimeter?",
      ["30 cm", "60 cm", "216 cm", "48 cm"], "B",
      "2 × (18 + 12) = 60 cm.", "perimeter", "medium"),
    q("A square courtyard has side 20 m. What is its area?",
      ["80 m²", "400 m²", "40 m²", "200 m²"], "B",
      "20 × 20 = 400 m².", "area", "medium"),
    q("Convert 2.5 m to centimetres.", ["25 cm", "250 cm", "2500 cm", "2.5 cm"], "B",
      "2.5 × 100 = 250 cm.", "conversion", "medium"),
    q("Convert 1.25 kg to grams.", ["125 g", "1250 g", "12.5 g", "12500 g"], "B",
      "1.25 × 1000 = 1250 g.", "conversion", "medium"),
    q("A notebook page is 20 cm by 15 cm. What is its area?",
      ["35 cm²", "70 cm²", "300 cm²", "200 cm²"], "C",
      "20 × 15 = 300 cm².", "area", "medium"),
    q("How many centimetres are in 80 mm?", ["0.8 cm", "8 cm", "80 cm", "800 cm"], "B",
      "80 ÷ 10 = 8 cm.", "length", "medium"),
    q("A square has area 81 cm². What is the length of one side?",
      ["8 cm", "9 cm", "18 cm", "40.5 cm"], "B",
      "Side × side = 81, so side = 9 cm.", "area", "medium"),
    q("A rectangular playground is 50 m by 30 m. What is its area?",
      ["80 m²", "160 m²", "1500 m²", "800 m²"], "C",
      "50 × 30 = 1500 m².", "area", "medium"),
    q("Which is heavier: 2.5 kg or 2400 g?",
      ["2.5 kg", "2400 g", "They are equal", "Cannot tell"], "A",
      "2.5 kg = 2500 g, which is more than 2400 g.", "conversion", "hard"),
    q("A rectangular field is 60 m long and 40 m broad. Find the cost of fencing at ₹15 per metre.",
      ["₹1500", "₹3000", "₹2400", "₹3600"], "B",
      "Perimeter = 2 × (60 + 40) = 200 m; cost = 200 × 15 = ₹3000.", "perimeter", "hard"),
    q("A room is 9 m long and 6 m broad. Square tiles of side 1 m cover the floor. How many tiles are needed?",
      ["15", "30", "54", "108"], "C",
      "Area = 9 × 6 = 54 m²; each tile is 1 m², so 54 tiles.", "area", "hard"),
    q("A tank holds 12 L of water. How many 500 ml bottles can be filled from it?",
      ["12", "20", "24", "6"], "C",
      "12 L = 12,000 ml; 12,000 ÷ 500 = 24 bottles.", "capacity", "hard"),
]

# ---------------------------------------------------------------------------
# Chapter 6 — Data Handling
# ---------------------------------------------------------------------------
CH6_LESSON = """
### step_1: Collecting and Organising Data
- **tts**:
  - Data are facts and numbers we collect, like favourite fruits or marks in a test.
  - We organise raw data into a neat table before we draw graphs.
- **on_screen**: Sticky notes of fruit choices sort into a tally table.
- **check**: What do we call facts and numbers we collect? — Answer: Data

### step_2: Tally Marks
- **tts**:
  - Tally marks help us count quickly. Four vertical strokes and a fifth across make a bundle of five.
  - The number of tallies equals the frequency.
- **on_screen**: Child adds tally marks for each new vote; a bundle of five locks in.
- **check**: How many does one tally bundle of five stand for? — Answer: 5

### step_3: Pictographs
- **tts**:
  - In a pictograph, a picture stands for a fixed number of items.
  - Always read the key: one 🍎 might mean 2 children or 10 books.
- **on_screen**: A pictograph of library books with key "1 book icon = 5 books"; child finds the total for Monday.
- **check**: If 1 icon = 10 books and there are 3 icons, how many books? — Answer: 30

### step_4: Bar Graphs
- **tts**:
  - A bar graph uses bars of equal width; the height (or length) shows the number.
  - Read the scale on the axis carefully before you answer.
- **on_screen**: Vertical bars for modes of travel to school; child reads the tallest bar.
- **check**: What does the height of a bar show? — Answer: The frequency or number

### step_5: Reading Tables
- **tts**:
  - Tables arrange data in rows and columns.
  - Look at the headings first, then find the cell you need.
- **on_screen**: A marks table for five subjects; child finds the highest score.
- **check**: Where do you look first in a table? — Answer: The headings

### step_6: Comparing Data
- **tts**:
  - We compare bars or pictograph icons to find most, least, more than, or less than.
  - Differences come from subtracting the two amounts.
- **on_screen**: Two bars light up; child finds how many more chose bus than walk.
- **check**: If bus = 12 and walk = 7, how many more chose bus? — Answer: 5

### step_7: Average (Arithmetic Mean)
- **tts**:
  - The average, or mean, is the total of the numbers divided by how many numbers there are.
  - Averages help us talk about a typical value.
- **on_screen**: Five daily temperatures add up; child divides by 5 to find the mean.
- **check**: Average of 4, 6 and 8? — Answer: 6

### step_8: Mode and Sensible Choices
- **tts**:
  - The mode is the value that appears most often.
  - Graphs should have a title, labels and a clear scale so others can understand them.
- **on_screen**: A list of shoe sizes highlights the mode; a checklist ticks title, labels and scale.
- **check**: In 2, 3, 3, 5, what is the mode? — Answer: 3
"""

CH6_A = [
    q("What are data?",
      ["Only drawings", "Facts and numbers we collect", "Only graphs", "Only tallies"], "B",
      "Data are facts and numbers collected for a purpose.", "basics", "easy"),
    q("In tally marks, a bundle with a diagonal stroke across four lines stands for how many?",
      ["4", "5", "10", "1"], "B",
      "Four upright strokes plus one across make a bundle of 5.", "tally", "easy"),
    q("A pictograph key says 1 ⭐ = 2 children. How many children do 4 stars show?",
      ["4", "6", "8", "2"], "C",
      "4 × 2 = 8 children.", "pictograph", "easy"),
    q("In a bar graph, bars should have…",
      ["Different widths", "Equal widths", "No scale", "No title"], "B",
      "Bars are drawn with equal width so heights can be compared fairly.", "bar_graph", "easy"),
    q("Which graph uses pictures to show data?",
      ["Bar graph", "Pictograph", "Number line only", "Place-value chart"], "B",
      "A pictograph uses pictures (icons) for quantities.", "pictograph", "easy"),
    q("The number of times a value appears is called its…",
      ["Average", "Mode only", "Frequency", "Perimeter"], "C",
      "Frequency is how often a value appears.", "basics", "easy"),
    q("Tally marks for 7 are best written as…",
      ["Seven single strokes only with no bundles", "One bundle of 5 and two more", "Two bundles of 5", "One stroke"], "B",
      "7 = 5 + 2, so one bundle and two strokes.", "tally", "easy"),
    q("A bar graph shows favourite colours. The tallest bar means…",
      ["The least popular colour", "The most popular colour", "An error", "Equal votes"], "B",
      "The tallest bar has the greatest frequency.", "bar_graph", "easy"),
    q("What is the average of 2, 4 and 6?", ["3", "4", "5", "12"], "B",
      "Total 12 divided by 3 numbers gives 4.", "average", "easy"),
    q("In the list 3, 5, 5, 7, the mode is…", ["3", "5", "7", "4"], "B",
      "5 appears most often, so the mode is 5.", "mode", "easy"),
    q("A table has columns for Name and Marks. To find Meera's marks you…",
      ["Ignore headings", "Find Meera's row and read the Marks cell", "Add all marks", "Draw a pictograph first"], "B",
      "Use the row for Meera and the Marks column.", "table", "easy"),
    q("If 1 icon = 5 books and Monday shows 3 icons, Monday has how many books?",
      ["3", "8", "15", "5"], "C",
      "3 × 5 = 15 books.", "pictograph", "easy"),
    q("A class survey: Bus 12, Walk 8, Cycle 5. How many children were surveyed?",
      ["12", "20", "25", "15"], "C",
      "12 + 8 + 5 = 25 children.", "table", "medium"),
    q("Using the same survey (Bus 12, Walk 8, Cycle 5), how many more chose bus than cycle?",
      ["5", "7", "8", "12"], "B",
      "12 − 5 = 7.", "compare", "medium"),
    q("A pictograph key is 1 🚗 = 10 cars. There are 2½ car icons. How many cars?",
      ["12", "20", "25", "30"], "C",
      "2 × 10 = 20 and half an icon = 5, total 25.", "pictograph", "medium"),
    q("Bars on a graph show scores 20, 35, 15, 30. What is the highest score shown?",
      ["20", "35", "15", "30"], "B",
      "35 is the greatest value.", "bar_graph", "medium"),
    q("What is the average of 10, 20, 30 and 40?", ["20", "25", "30", "100"], "B",
      "Sum 100 ÷ 4 = 25.", "average", "medium"),
    q("In 2, 2, 3, 4, 4, 4, 5, the mode is…", ["2", "3", "4", "5"], "C",
      "4 appears three times, more than any other value.", "mode", "medium"),
    q("A tally shows |||| |||| || for red votes. How many votes for red?",
      ["10", "12", "8", "2"], "B",
      "Two bundles of 5 and two more make 12.", "tally", "medium"),
    q("Which is needed on a clear bar graph?",
      ["A title and labelled axes", "Only colours", "No scale", "Random bar widths"], "A",
      "Title, labels and scale make the graph readable.", "bar_graph", "medium"),
    q("Rainfall (mm) Mon–Fri: 2, 0, 5, 3, 5. What is the average rainfall?",
      ["3 mm", "5 mm", "2 mm", "15 mm"], "A",
      "Sum 15 ÷ 5 = 3 mm.", "average", "hard"),
    q("In a pictograph, 1 🍎 = 4 children. Friday shows 1¾ icons. How many children?",
      ["5", "6", "7", "8"], "C",
      "1 icon = 4 and ¾ icon = 3, total 7.", "pictograph", "hard"),
    q("Marks: 12, 15, 18, 15, 20. What is the mode?",
      ["12", "15", "18", "20"], "B",
      "15 appears twice; every other mark appears once.", "mode", "hard"),
    q("A bar graph scale is 1 unit = 5 students. A bar reaches 6 units. How many students?",
      ["6", "11", "30", "5"], "C",
      "6 × 5 = 30 students.", "bar_graph", "hard"),
]

CH6_B = [
    q("Why do we organise data in tables?",
      ["To hide numbers", "To make data neat and easy to read", "To avoid totals", "To erase tallies"], "B",
      "Tables organise data so patterns are easier to see.", "basics", "easy"),
    q("Four tally bundles of five each show how many?",
      ["4", "5", "20", "9"], "C",
      "4 × 5 = 20.", "tally", "easy"),
    q("A pictograph key says 1 📘 = 10 books. How many books do 2 icons show?",
      ["2", "10", "20", "12"], "C",
      "2 × 10 = 20 books.", "pictograph", "easy"),
    q("The horizontal line at the bottom of a bar graph is called the…",
      ["Title", "Scale only", "Horizontal axis (or x-axis)", "Mode"], "C",
      "The bottom axis is the horizontal axis.", "bar_graph", "easy"),
    q("Which display uses bars of equal width?",
      ["Pictograph", "Bar graph", "Tally only", "Place-value chart"], "B",
      "Bar graphs use equal-width bars.", "bar_graph", "easy"),
    q("Raw scores written as they are collected are called…",
      ["Raw data", "Mode", "Perimeter", "Percent"], "A",
      "Unsorted collected facts are raw data.", "basics", "easy"),
    q("Tally marks for 3 look like…", ["One bundle of 5", "Three single strokes", "Two bundles", "Ten strokes"], "B",
      "Three is fewer than five, so three single strokes.", "tally", "easy"),
    q("The shortest bar on a bar graph shows…",
      ["The greatest frequency", "The least frequency", "The average", "The mode always"], "B",
      "Shortest bar means the smallest count.", "bar_graph", "easy"),
    q("What is the average of 5, 5 and 8?", ["5", "6", "8", "18"], "B",
      "Sum 18 ÷ 3 = 6.", "average", "easy"),
    q("In the list 9, 1, 9, 2, the mode is…", ["1", "2", "9", "There is no mode"], "C",
      "9 appears twice; others appear once.", "mode", "easy"),
    q("A table shows Day and Temperature. Tuesday's temperature is found by…",
      ["Reading Tuesday's row", "Ignoring the table", "Only using a pictograph", "Guessing"], "A",
      "Find the Tuesday row and read the temperature.", "table", "easy"),
    q("If 1 icon = 3 balls and there are 5 icons, how many balls?",
      ["3", "5", "8", "15"], "D",
      "5 × 3 = 15 balls.", "pictograph", "easy"),
    q("Ice-cream flavours: Vanilla 9, Chocolate 14, Strawberry 7. How many children chose chocolate or vanilla?",
      ["14", "23", "16", "30"], "B",
      "14 + 9 = 23.", "table", "medium"),
    q("Using Vanilla 9, Chocolate 14, Strawberry 7, how many fewer chose strawberry than chocolate?",
      ["5", "7", "9", "14"], "B",
      "14 − 7 = 7.", "compare", "medium"),
    q("A pictograph key is 1 🌳 = 4 trees. There are 3¼ icons. How many trees?",
      ["12", "13", "14", "16"], "B",
      "3 × 4 = 12 and ¼ icon = 1, total 13.", "pictograph", "medium"),
    q("Bars show library visitors: 40, 55, 35, 60. What is the least number of visitors?",
      ["40", "55", "35", "60"], "C",
      "35 is the smallest value.", "bar_graph", "medium"),
    q("What is the average of 8, 12 and 16?", ["12", "11", "14", "36"], "A",
      "Sum 36 ÷ 3 = 12.", "average", "medium"),
    q("In 6, 7, 7, 8, 9, 7, the mode is…", ["6", "7", "8", "9"], "B",
      "7 appears three times.", "mode", "medium"),
    q("A tally shows |||| |||| |||| | for blue cars. How many blue cars?",
      ["14", "15", "16", "20"], "C",
      "Three bundles of 5 and one more = 16.", "tally", "medium"),
    q("Scale on a bar graph is 1 unit = 2 goals. A bar is 9 units tall. Goals scored?",
      ["9", "11", "18", "2"], "C",
      "9 × 2 = 18 goals.", "bar_graph", "medium"),
    q("Weekly steps (thousands): 4, 6, 5, 7, 3. What is the average?",
      ["5", "6", "4", "25"], "A",
      "Sum 25 ÷ 5 = 5.", "average", "hard"),
    q("In a pictograph, 1 🐟 = 8 fish. A day shows 2¾ icons. How many fish?",
      ["16", "20", "22", "24"], "C",
      "2 × 8 = 16 and ¾ × 8 = 6, total 22.", "pictograph", "hard"),
    q("Scores: 11, 14, 11, 17, 14, 14. What is the mode?",
      ["11", "14", "17", "13"], "B",
      "14 appears three times; 11 appears twice.", "mode", "hard"),
    q("A class has this bar scale: 1 unit = 4 pupils. Reading bar height 7.5 units means how many pupils?",
      ["7.5", "11.5", "30", "32"], "C",
      "7.5 × 4 = 30 pupils.", "bar_graph", "hard"),
]


def hints_for_skill(skill: str) -> str:
    mapping = {
        "place_value": "Read the place just after the point: tenths, then hundredths, then thousandths.",
        "fraction_decimal": "Tenths and hundredths match /10 and /100; simplify if needed.",
        "compare": "Line up decimal points (or add trailing zeros) and compare digit by digit.",
        "add_subtract": "Line up the decimal points, then add or subtract column by column.",
        "times_tens": "×10 / ÷10 moves the point one place; ×100 / ÷100 moves it two places.",
        "percent": "Percent means per 100 — write as /100, a decimal, or a simplified fraction.",
        "percent_of": "Find the percent as a fraction of 100, then multiply by the number.",
        "word_problem": "Match units first, then compute carefully.",
        "mixed": "Do the operation in brackets (or the sum) first, then scale by 10 or 100.",
        "length": "Remember 10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km.",
        "mass": "1000 g = 1 kg — multiply or divide by 1000 to convert.",
        "capacity": "1000 ml = 1 L — multiply or divide by 1000 to convert.",
        "perimeter": "Perimeter is the distance around: 2(l+b) for a rectangle, 4×side for a square.",
        "area": "Area fills the shape: length × breadth, or side × side for a square.",
        "units": "Pick a unit that fits the object's size — not tiny, not huge.",
        "conversion": "To a smaller unit multiply; to a larger unit divide.",
        "basics": "Data are organised facts; frequency counts how often a value appears.",
        "tally": "Four strokes plus a fifth across make a bundle of 5.",
        "pictograph": "Read the key: each icon stands for a fixed number of items.",
        "bar_graph": "Equal-width bars; read the scale, then multiply height by the scale unit.",
        "table": "Use row and column headings to find the cell you need.",
        "compare": "Subtract the smaller amount from the larger to find how many more or fewer.",
        "average": "Add the numbers, then divide by how many numbers there are.",
        "mode": "The mode is the value that appears most often.",
    }
    # last write wins for duplicate keys in dict — fix compare collision
    mapping["compare"] = "Compare amounts carefully — line up places or subtract to find the difference."
    return mapping.get(skill, "Read carefully and eliminate impossible options.")


def build_hints(prefix: str, set_a, set_b) -> dict:
    out = {}
    for letter, qs in (("a", set_a), ("b", set_b)):
        for i, item in enumerate(qs, 1):
            qid = f"{prefix}-{letter}-q{i:02d}"
            out[qid] = [hints_for_skill(item["skill"])]
    return out


def main():
    chapters = [
        dict(
            doc="maths-ch04-decimals-percentages.md",
            title="Chapter 4: Decimals and Percentages",
            meta_id="g5-maths-ch04-decimals-percentages",
            chapter_title="Decimals and Percentages",
            lesson=CH4_LESSON,
            set_a=CH4_A,
            set_b=CH4_B,
            prefix="g5-maths-dec",
            out="g5-maths-decimals.ts",
            export="g5MathsDecimals",
            meta={
                "id": "decimals-percentages",
                "title": "Decimals & Percentages",
                "emoji": "💯",
                "blurb": "Tenths, hundredths and percent",
                "topic": "decimals",
                "paperTopics": ["decimals", "percent", "fractions"],
            },
            lesson_args=dict(
                title="Decimals and percentages",
                emoji="💯",
                visual="number-line",
                speak="Decimals name tenths and hundredths. Percent means per hundred.",
                cards=[
                    ("Tenths", "One of ten equal parts → 0.1", "1️⃣"),
                    ("Hundredths", "One of a hundred equal parts → 0.01", "🔢"),
                    ("Percent", "Out of 100; 25% = 1/4 = 0.25", "💯"),
                    ("Point hop", "×10 moves the point one place right", "➡️"),
                ],
                try_q={
                    "prompt": "What is 25% of 40?",
                    "options": [("a", "5"), ("b", "10"), ("c", "15"), ("d", "20")],
                    "answerId": "b",
                    "why": "25% is one quarter; 40 ÷ 4 = 10.",
                },
                bullets=["Tenths & hundredths", "Line up decimal points", "Percent = /100", "Sets ready"],
            ),
        ),
        dict(
            doc="maths-ch05-measurement-area.md",
            title="Chapter 5: Measurement and Area",
            meta_id="g5-maths-ch05-measurement-area",
            chapter_title="Measurement and Area",
            lesson=CH5_LESSON,
            set_a=CH5_A,
            set_b=CH5_B,
            prefix="g5-maths-meas",
            out="g5-maths-measurement.ts",
            export="g5MathsMeasurement",
            meta={
                "id": "measurement-area",
                "title": "Measurement & Area",
                "emoji": "📏",
                "blurb": "Length, mass, perimeter and area",
                "topic": "decimals",
                "paperTopics": ["decimals", "add-sub", "percent"],
            },
            lesson_args=dict(
                title="Measurement and area",
                emoji="📏",
                visual="number-line",
                speak="Measure length, mass and capacity. Perimeter goes around; area fills inside.",
                cards=[
                    ("Length", "mm, cm, m, km — convert with 10, 100, 1000", "📐"),
                    ("Mass & capacity", "1000 g = 1 kg; 1000 ml = 1 L", "⚖️"),
                    ("Perimeter", "Distance around a shape", "🔲"),
                    ("Area", "Space inside — square units", "🟦"),
                ],
                try_q={
                    "prompt": "Area of a 6 cm by 4 cm rectangle?",
                    "options": [("a", "10 cm²"), ("b", "20 cm²"), ("c", "24 cm²"), ("d", "48 cm²")],
                    "answerId": "c",
                    "why": "Area = length × breadth = 6 × 4 = 24 cm².",
                },
                bullets=["Choose sensible units", "Convert carefully", "P = around, A = inside", "Sets ready"],
            ),
        ),
        dict(
            doc="maths-ch06-data-handling.md",
            title="Chapter 6: Data Handling",
            meta_id="g5-maths-ch06-data-handling",
            chapter_title="Data Handling",
            lesson=CH6_LESSON,
            set_a=CH6_A,
            set_b=CH6_B,
            prefix="g5-maths-data",
            out="g5-maths-data.ts",
            export="g5MathsData",
            meta={
                "id": "data-handling",
                "title": "Data Handling",
                "emoji": "📊",
                "blurb": "Tallies, graphs, average and mode",
                "topic": "percent",
                "paperTopics": ["percent", "decimals", "add-sub"],
            },
            lesson_args=dict(
                title="Data handling",
                emoji="📊",
                visual="number-line",
                speak="Organise data with tallies, pictographs and bar graphs. Find average and mode.",
                cards=[
                    ("Tally", "Bundles of five make counting fast", "||||"),
                    ("Pictograph", "Read the key — each icon has a value", "🖼️"),
                    ("Bar graph", "Equal bars; height shows the number", "📊"),
                    ("Average & mode", "Mean divides the total; mode appears most", "⭐"),
                ],
                try_q={
                    "prompt": "Average of 4, 6 and 8?",
                    "options": [("a", "4"), ("b", "6"), ("c", "8"), ("d", "18")],
                    "answerId": "b",
                    "why": "Sum 18 ÷ 3 = 6.",
                },
                bullets=["Read keys and scales", "Compare carefully", "Mean and mode", "Sets ready"],
            ),
        ),
    ]

    all_hints = {}
    for ch in chapters:
        write_chapter(
            ch["doc"],
            ch["title"],
            ch["meta_id"],
            ch["chapter_title"],
            ch["lesson"],
            ch["set_a"],
            ch["set_b"],
        )
        md = (DOCS_G5 / ch["doc"]).read_text()
        a, b = maths_sets(md, ch["prefix"])
        assert len(a) == 24 and len(b) == 24, (ch["prefix"], len(a), len(b))
        la = ch["lesson_args"]
        lesson = lesson_ts(
            la["title"],
            la["emoji"],
            la["visual"],
            la["speak"],
            la["cards"],
            la["try_q"],
            la["bullets"],
        )
        emit_module(OUT / ch["out"], ch["export"], ch["meta"], lesson, a, b)
        all_hints.update(build_hints(ch["prefix"], ch["set_a"], ch["set_b"]))

    hints_path = Path("/tmp/g5-maths-ch04-06-hints.json")
    hints_path.write_text(json.dumps(all_hints, indent=2, ensure_ascii=False))
    print("Hints stub:", hints_path, "count=", len(all_hints))
    print("DONE")


if __name__ == "__main__":
    main()
