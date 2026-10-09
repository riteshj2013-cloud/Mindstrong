#!/usr/bin/env python3
"""Generate Grade 6 full pack: source md, content ts, and hint overlays."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BP_HINTS = ['Read carefully.', 'Eliminate impossible options first.']
BP_HINTS_DIAG = ['Look carefully at the diagram.', 'Match what you see to the question asked.']
BP_HINTS_TXT = ['Look for clues in the text.', 'Eliminate unsupported answers.']
BP_HINTS_SCI = ['Think about the lesson key ideas.', 'Eliminate options that do not fit.']


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def q(
    prompt: str,
    options: list[str],
    answer: str,
    explanation: str,
    hint: str,
    *,
    bp: list[str] | None = None,
) -> dict:
    assert answer in "abcd" and len(options) == 4
    return {
        "prompt": prompt,
        "options": options,
        "answer": answer,
        "explanation": explanation,
        "hint": hint,
        "bp": bp or BP_HINTS,
    }


# ─────────────────────────────────────────────────────────────────────────────
# MATHS Ch1: Integers
# ─────────────────────────────────────────────────────────────────────────────
MATHS_INT_A = [
    q("Which of these is an integer?", ["3.5", "-7", "2/3", "√2"], "b",
      "Integers are whole numbers and their negatives. −7 is an integer; 3.5, 2/3 and √2 are not.",
      "Integers are …, −2, −1, 0, 1, 2, … — no fractions or decimals."),
    q("On a number line, which number lies to the left of −3?", ["−2", "0", "−5", "3"], "c",
      "Numbers decrease as you move left. −5 is left of −3.",
      "On a number line, left means smaller."),
    q("What is the additive inverse of 9?", ["9", "−9", "1/9", "0"], "b",
      "The additive inverse of a is −a, because a + (−a) = 0. So the inverse of 9 is −9.",
      "Additive inverse of a is the number that sums with a to 0."),
    q("What is |−12|?", ["−12", "12", "0", "1/12"], "b",
      "Absolute value is the distance from 0, so |−12| = 12.",
      "Absolute value drops the sign — distance from zero."),
    q("Compute (−8) + (−5).", ["−13", "13", "−3", "3"], "a",
      "Adding two negatives: add the magnitudes and keep the negative sign → −13.",
      "Same signs: add the sizes and keep that sign."),
    q("Compute 15 + (−9).", ["24", "−24", "6", "−6"], "c",
      "15 + (−9) = 15 − 9 = 6.",
      "Adding a negative is the same as subtracting."),
    q("Compute (−20) − (−7).", ["−27", "−13", "27", "13"], "b",
      "Subtracting a negative is adding: (−20) − (−7) = (−20) + 7 = −13.",
      "Minus a negative becomes plus."),
    q("Compute (−6) × 4.", ["24", "−24", "10", "−2"], "b",
      "A negative times a positive is negative: −24.",
      "Different signs when multiplying → negative product."),
    q("Compute (−3) × (−5).", ["−15", "15", "−8", "8"], "b",
      "A negative times a negative is positive: 15.",
      "Same signs when multiplying → positive product."),
    q("Compute (−36) ÷ 9.", ["4", "−4", "45", "−45"], "b",
      "Negative divided by positive is negative: −4.",
      "Different signs when dividing → negative quotient."),
    q("Which statement is true?",
      ["Every natural number is an integer", "Every integer is a natural number",
       "−1 is a natural number", "0 is not an integer"], "a",
      "Natural numbers 1, 2, 3, … are integers. Negatives and 0 are integers but not natural (in the usual school meaning).",
      "Natural ⊂ whole ⊂ integers — which way do the sets nest?"),
    q("The temperature was −2°C in the morning and rose by 7°C. What is the new temperature?",
      ["9°C", "5°C", "−9°C", "−5°C"], "b",
      "−2 + 7 = 5, so the new temperature is 5°C.",
      "Start at −2, then add the rise."),
    q("A lift is on floor −3 (basement). It goes up 8 floors. Which floor does it reach?",
      ["5", "11", "−11", "−5"], "a",
      "−3 + 8 = 5.",
      "Negative floor plus upward moves."),
    q("Arrange in ascending order: −1, 4, −6, 0.",
      ["−1, −6, 0, 4", "−6, −1, 0, 4", "4, 0, −1, −6", "0, −1, −6, 4"], "b",
      "Ascending means smallest first: −6, −1, 0, 4.",
      "Smallest (most left on the number line) comes first."),
    q("What is (−1) + (−1) + (−1)?", ["−3", "3", "−1", "1"], "a",
      "Three groups of −1 sum to −3.",
      "Add the three negatives."),
    q("Which number is greater: −8 or −3?", ["−8", "−3", "They are equal", "Cannot tell"], "b",
      "−3 is to the right of −8 on the number line, so −3 > −8.",
      "For negatives, the one closer to zero is greater."),
    q("Compute 0 − (−15).", ["−15", "15", "0", "−30"], "b",
      "0 − (−15) = 0 + 15 = 15.",
      "Subtracting a negative is adding."),
    q("A bank account has ₹200. Then ₹350 is withdrawn. Which integer shows the balance?",
      ["550", "−150", "150", "−550"], "b",
      "200 − 350 = −150, so the balance is ₹150 overdrawn, written −150.",
      "Start with 200, subtract 350 — keep the sign for an overdrawn balance."),
    q("What is |5 − 12|?", ["7", "−7", "17", "−17"], "a",
      "5 − 12 = −7, and |−7| = 7.",
      "Compute inside first, then take absolute value."),
    q("Compute (−2)³.", ["−8", "8", "−6", "6"], "a",
      "(−2)³ = (−2)×(−2)×(−2) = 4 × (−2) = −8.",
      "Odd power of a negative stays negative."),
    q("The successor of −11 is —", ["−12", "−10", "11", "10"], "b",
      "Successor means +1: −11 + 1 = −10.",
      "Successor = add 1."),
    q("The predecessor of −4 is —", ["−3", "−5", "4", "5"], "b",
      "Predecessor means −1: −4 − 1 = −5.",
      "Predecessor = subtract 1."),
    q("Compute (−18) ÷ (−6).", ["3", "−3", "12", "−12"], "a",
      "Negative ÷ negative = positive: 3.",
      "Same signs when dividing → positive."),
    q("Which expression equals −10?",
      ["(−4) + (−6)", "(−4) − (−6)", "4 + 6", "(−4) × (−6)"], "a",
      "(−4) + (−6) = −10. The others give 2, 10 and 24.",
      "Which option really lands on −10?"),
]

MATHS_INT_B = [
    q("Which set contains only integers?",
      ["{−2, 0, 5}", "{1/2, 3, −1}", "{0.5, 2, −3}", "{√4, 1.5, 0}"], "a",
      "−2, 0 and 5 are all integers. The other sets include fractions or decimals.",
      "Scan for any non-whole number."),
    q("On a number line, the distance between −4 and 3 is —", ["1", "7", "−7", "12"], "b",
      "Distance = |3 − (−4)| = |7| = 7.",
      "Distance is the absolute difference."),
    q("What is −(−18)?", ["−18", "18", "0", "1/18"], "b",
      "The negative of −18 is 18.",
      "Two minuses cancel."),
    q("Compute (−25) + 40.", ["65", "−65", "15", "−15"], "c",
      "−25 + 40 = 15.",
      "Different signs: subtract sizes, keep the sign of the larger."),
    q("Compute 9 − 20.", ["−11", "11", "29", "−29"], "a",
      "9 − 20 = −11.",
      "Subtracting a larger number from a smaller gives a negative."),
    q("Compute (−7) − 5.", ["−12", "−2", "12", "2"], "a",
      "(−7) − 5 = (−7) + (−5) = −12.",
      "Subtracting a positive is adding a negative."),
    q("Compute 6 × (−3) × (−2).", ["−36", "36", "−12", "12"], "b",
      "6 × (−3) = −18; (−18) × (−2) = 36.",
      "Count negatives: two negatives → overall positive."),
    q("Compute (−48) ÷ 8.", ["6", "−6", "40", "−40"], "b",
      "−48 ÷ 8 = −6.",
      "Different signs → negative quotient."),
    q("If a = −4 and b = 9, what is a + b?", ["13", "−13", "5", "−5"], "c",
      "−4 + 9 = 5.",
      "Substitute, then add."),
    q("If a = −5 and b = −3, what is a − b?", ["−8", "−2", "2", "8"], "b",
      "a − b = (−5) − (−3) = (−5) + 3 = −2.",
      "Minus a negative becomes plus."),
    q("A submarine is at −120 m. It rises 45 m. What is its new depth?",
      ["−75 m", "−165 m", "75 m", "165 m"], "a",
      "−120 + 45 = −75 m.",
      "Rising means add a positive to a negative depth."),
    q("Which is the smallest?", ["−1", "−19", "0", "2"], "b",
      "−19 is farthest left on the number line.",
      "Most negative = smallest."),
    q("Compute (−1) × (−1) × (−1) × (−1).", ["1", "−1", "0", "4"], "a",
      "Four negatives multiply to a positive: 1.",
      "Even count of negatives → positive."),
    q("The product of two integers is −36. One integer is −4. The other is —",
      ["9", "−9", "32", "−32"], "a",
      "(−4) × 9 = −36, so the other integer is 9.",
      "What times −4 gives −36?"),
    q("Compute |−9| − |−4|.", ["−5", "5", "13", "−13"], "b",
      "|−9| = 9 and |−4| = 4, so 9 − 4 = 5.",
      "Take absolute values first, then subtract."),
    q("Which expression is equal to 0?",
      ["5 + (−5)", "5 × (−5)", "5 − (−5)", "(−5) − 5"], "a",
      "5 + (−5) = 0. The others are −25, 10 and −10.",
      "Look for a number plus its additive inverse."),
    q("Riya scores −8, then +12, then −3 on three quiz rounds. What is her total?",
      ["1", "−1", "23", "−23"], "a",
      "−8 + 12 − 3 = 1.",
      "Add step by step left to right."),
    q("A shop’s profit of ₹80 is written +80 and a loss of ₹50 as −50. Net result?",
      ["₹130", "₹30", "−₹30", "−₹130"], "b",
      "+80 + (−50) = 30, so a net profit of ₹30.",
      "Combine the signed amounts with ₹."),
    q("What is (−15) + (−15) + 30?", ["0", "30", "−30", "60"], "a",
      "−15 − 15 + 30 = 0.",
      "Two −15s cancel the +30."),
    q("Which property is shown by (−3) + 5 = 5 + (−3)?",
      ["Commutative of addition", "Associative of multiplication",
       "Distributive", "Closure of subtraction"], "a",
      "Order of addends can swap — commutative property of addition.",
      "Same sum after swapping order."),
    q("Compute  (−2) × 0 × 17.", ["0", "−34", "34", "−17"], "a",
      "Anything times 0 is 0.",
      "A zero factor forces the product to zero."),
    q("The integer between −2 and 0 is —", ["−3", "−1", "1", "2"], "b",
      "The only integer strictly between −2 and 0 is −1.",
      "What sits between −2 and 0 on the number line?"),
    q("Compute (−72) ÷ (−8).", ["9", "−9", "64", "−64"], "a",
      "Negative ÷ negative = 9.",
      "Same signs → positive quotient."),
    q("Which is true for every integer n?",
      ["n + 0 = n", "n × 0 = n", "n − n = n", "n ÷ n = 0"], "a",
      "0 is the additive identity: n + 0 = n.",
      "Which identity always holds?"),
]

# ─────────────────────────────────────────────────────────────────────────────
# MATHS Ch2: Fractions & Decimals
# ─────────────────────────────────────────────────────────────────────────────
MATHS_FRAC_A = [
    q("What is 3/4 + 1/4?", ["4/8", "1", "3/8", "2/4"], "b",
      "Like denominators: 3/4 + 1/4 = 4/4 = 1.",
      "Same bottoms — add the tops."),
    q("What is 5/6 − 1/6?", ["4/6", "2/3", "6/6", "4/12"], "b",
      "5/6 − 1/6 = 4/6 = 2/3 in simplest form.",
      "Subtract tops, then simplify."),
    q("Which fraction is equivalent to 2/3?", ["3/2", "4/6", "2/6", "6/3"], "b",
      "Multiply top and bottom by 2: 2/3 = 4/6.",
      "Multiply or divide top and bottom by the same number."),
    q("What is 2/5 of 40?", ["8", "16", "20", "10"], "b",
      "2/5 × 40 = 16.",
      "Divide by 5, then multiply by 2."),
    q("Convert 0.7 to a fraction in simplest form.", ["7/10", "7/100", "70/10", "7/1"], "a",
      "0.7 = 7/10, already simplest.",
      "One digit after the decimal → denominator 10."),
    q("Convert 3/5 to a decimal.", ["0.35", "0.6", "1.5", "0.06"], "b",
      "3 ÷ 5 = 0.6.",
      "Divide numerator by denominator."),
    q("Which is greater: 0.45 or 0.5?", ["0.45", "0.5", "Equal", "Cannot tell"], "b",
      "0.50 > 0.45, so 0.5 is greater.",
      "Line up decimal places and compare digit by digit."),
    q("What is 1.2 + 0.35?", ["1.55", "1.45", "4.7", "0.155"], "a",
      "1.20 + 0.35 = 1.55.",
      "Align the decimal points, then add."),
    q("What is 4.5 − 1.75?", ["2.75", "3.25", "2.25", "6.25"], "a",
      "4.50 − 1.75 = 2.75.",
      "Align decimals and subtract."),
    q("What is 0.6 × 0.2?", ["1.2", "0.12", "0.012", "12"], "b",
      "6 × 2 = 12 with two decimal places total → 0.12.",
      "Multiply as wholes, then count decimal places."),
    q("Express 125/100 as a decimal.", ["1.25", "12.5", "0.125", "125"], "a",
      "125/100 = 1.25.",
      "Denominator 100 → two digits after the decimal."),
    q("A ribbon is 3/4 m long. Another is 5/8 m. Total length?",
      ["8/12 m", "11/8 m", "1 3/8 m", "1 1/8 m"], "c",
      "3/4 = 6/8; 6/8 + 5/8 = 11/8 = 1 3/8 m.",
      "Common denominator, then add."),
    q("Which decimal equals 7/20?", ["0.35", "0.72", "0.07", "3.5"], "a",
      "7 ÷ 20 = 0.35.",
      "Divide 7 by 20."),
    q("Simplify 18/24.", ["3/4", "9/12", "2/3", "6/8"], "a",
      "Divide top and bottom by 6: 3/4.",
      "Divide by the greatest common factor."),
    q("What is 2.5 × 4?", ["10", "1.0", "6.5", "8.5"], "a",
      "2.5 × 4 = 10.",
      "2 × 4 = 8 and 0.5 × 4 = 2 → 10."),
    q("Ravi walks 2.4 km in the morning and 1.85 km in the evening. Total?",
      ["3.25 km", "4.25 km", "4.125 km", "3.125 km"], "b",
      "2.40 + 1.85 = 4.25 km.",
      "Add the kilometres carefully."),
    q("Which is a proper fraction?", ["5/4", "4/4", "3/7", "9/5"], "c",
      "A proper fraction has numerator smaller than denominator: 3/7.",
      "Proper means top < bottom."),
    q("Convert 2 1/4 to an improper fraction.", ["9/4", "5/4", "8/4", "6/4"], "a",
      "2 × 4 + 1 = 9, so 9/4.",
      "Whole × bottom + top, over the same bottom."),
    q("What is 3/8 of ₹240?", ["₹30", "₹60", "₹90", "₹80"], "c",
      "240 ÷ 8 = 30; 30 × 3 = ₹90.",
      "Find one-eighth, then take three."),
    q("Arrange ascending: 0.09, 0.9, 0.19.",
      ["0.09, 0.19, 0.9", "0.9, 0.19, 0.09", "0.09, 0.9, 0.19", "0.19, 0.09, 0.9"], "a",
      "0.09 < 0.19 < 0.90.",
      "Compare tenths, then hundredths."),
    q("What is 1 − 0.37?", ["0.63", "0.73", "1.37", "0.67"], "a",
      "1.00 − 0.37 = 0.63.",
      "Subtract from 1.00."),
    q("Which is equal to 0.25?", ["1/2", "1/4", "1/5", "2/5"], "b",
      "0.25 = 25/100 = 1/4.",
      "Convert the decimal to a fraction and simplify."),
    q("Compute 7/10 + 0.2.", ["0.9", "0.72", "1.0", "0.5"], "a",
      "7/10 = 0.7; 0.7 + 0.2 = 0.9.",
      "Match forms, then add."),
    q("A bottle holds 1.5 L. Meera pours out 3/5 L. How much is left?",
      ["0.9 L", "1.1 L", "0.8 L", "1.2 L"], "a",
      "3/5 = 0.6; 1.5 − 0.6 = 0.9 L.",
      "Convert, then subtract."),
]

MATHS_FRAC_B = [
    q("What is 1/3 + 1/6?", ["2/9", "1/2", "1/9", "2/6"], "b",
      "1/3 = 2/6; 2/6 + 1/6 = 3/6 = 1/2.",
      "Common denominator of 3 and 6."),
    q("What is 5/8 − 1/4?", ["4/8", "3/8", "1/2", "4/4"], "b",
      "1/4 = 2/8; 5/8 − 2/8 = 3/8.",
      "Match denominators, then subtract."),
    q("Which pair are equivalent?",
      ["1/2 and 2/3", "3/5 and 6/10", "2/4 and 3/9", "4/6 and 2/2"], "b",
      "3/5 × 2/2 = 6/10.",
      "Cross-multiply or simplify both."),
    q("What is 3/4 of 2.4?", ["1.8", "0.8", "3.2", "1.2"], "a",
      "2.4 ÷ 4 = 0.6; 0.6 × 3 = 1.8.",
      "Quarter of 2.4, then triple it."),
    q("Convert 0.08 to a fraction in simplest form.", ["8/10", "2/25", "8/100", "4/50"], "b",
      "0.08 = 8/100 = 2/25.",
      "Two decimal places → /100, then simplify."),
    q("Convert 9/4 to a mixed number.", ["2 1/4", "1 1/4", "2 1/9", "4/9"], "a",
      "9 ÷ 4 = 2 remainder 1 → 2 1/4.",
      "Divide; remainder over the denominator."),
    q("What is 2.05 + 3.7?", ["5.75", "5.12", "5.775", "23.75"], "a",
      "2.05 + 3.70 = 5.75.",
      "Align decimal points."),
    q("What is 6 − 2.48?", ["3.52", "4.52", "3.62", "4.62"], "a",
      "6.00 − 2.48 = 3.52.",
      "Write 6 as 6.00, then subtract."),
    q("What is 1.5 ÷ 0.3?", ["5", "0.5", "4.5", "0.45"], "a",
      "1.5 ÷ 0.3 = 15 ÷ 3 = 5.",
      "Multiply both by 10 to clear the decimal, then divide."),
    q("A book costs ₹85.50. A notebook costs ₹24.75. Total?",
      ["₹100.25", "₹110.25", "₹109.25", "₹111.25"], "b",
      "85.50 + 24.75 = ₹110.25.",
      "Add rupees and paise carefully."),
    q("Which is least?", ["0.101", "0.11", "0.1", "0.1001"], "c",
      "0.1000 is smaller than 0.1001, 0.1010 and 0.1100.",
      "Compare place by place after the decimal."),
    q("Express 4.2 as a fraction in simplest form.", ["42/10", "21/5", "4/2", "42/100"], "b",
      "4.2 = 42/10 = 21/5.",
      "One decimal place → /10, then simplify."),
    q("What is 2/3 × 9/10?", ["18/30", "3/5", "11/13", "2/10"], "b",
      "2/3 × 9/10 = 18/30 = 3/5.",
      "Multiply tops, multiply bottoms, simplify."),
    q("A tank is 5/8 full. If capacity is 40 L, how many litres are in it?",
      ["25 L", "20 L", "32 L", "15 L"], "a",
      "5/8 × 40 = 25 L.",
      "Fraction of the whole capacity."),
    q("Round 3.678 to 2 decimal places.", ["3.67", "3.68", "3.70", "3.60"], "b",
      "The third decimal is 8 ≥ 5, so 3.68.",
      "Look at the next digit to decide rounding."),
    q("What is 0.4 + 2/5?", ["0.8", "1.0", "0.6", "0.9"], "a",
      "2/5 = 0.4; 0.4 + 0.4 = 0.8.",
      "Convert 2/5 to a decimal first."),
    q("Which decimal is equal to 3/8?", ["0.375", "0.35", "0.38", "0.125"], "a",
      "3 ÷ 8 = 0.375.",
      "Divide 3 by 8."),
    q("Compute 12.6 ÷ 3.", ["4.2", "3.2", "42", "0.42"], "a",
      "12.6 ÷ 3 = 4.2.",
      "Divide as usual; keep the decimal place."),
    q("A pizza is cut into 8 equal slices. Mira eats 3. What fraction remains?",
      ["3/8", "5/8", "3/5", "8/5"], "b",
      "8 − 3 = 5 slices left → 5/8.",
      "Remaining parts over total parts."),
    q("What is 7/2 − 1.5?", ["2", "3.5", "5.5", "1"], "a",
      "7/2 = 3.5; 3.5 − 1.5 = 2.",
      "Match forms, then subtract."),
    q("Convert 0.125 to a fraction in simplest form.", ["125/1000", "1/8", "1/4", "5/40"], "b",
      "0.125 = 125/1000 = 1/8.",
      "Three decimal places → /1000, then simplify."),
    q("Which statement is true?",
      ["0.7 > 7/10", "0.7 = 7/10", "0.7 < 7/10", "0.07 = 7/10"], "b",
      "7/10 = 0.7 exactly.",
      "Convert and compare."),
    q("A rope is 6.4 m. Cut into pieces of 0.8 m each. How many pieces?",
      ["8", "7", "9", "6"], "a",
      "6.4 ÷ 0.8 = 64 ÷ 8 = 8.",
      "Divide total length by piece length."),
    q("What is 5/6 of 18?", ["12", "15", "9", "10"], "b",
      "18 ÷ 6 = 3; 3 × 5 = 15.",
      "One-sixth of 18, then five of those."),
]

# ─────────────────────────────────────────────────────────────────────────────
# MATHS Ch3: Basic Geometry
# ─────────────────────────────────────────────────────────────────────────────
MATHS_GEO_A = [
    q("A ray has —", ["two endpoints", "one endpoint", "no endpoints", "three endpoints"], "b",
      "A ray starts at one endpoint and goes on forever in one direction.",
      "Ray = start point + endless direction."),
    q("A line segment has —", ["one endpoint", "two endpoints", "no endpoints", "infinite endpoints"], "b",
      "A segment is the part of a line between two endpoints.",
      "Segment = finite piece with two ends."),
    q("An angle measuring 90° is called —", ["acute", "obtuse", "right", "reflex"], "c",
      "A right angle measures exactly 90°.",
      "Square corner = right angle = 90°."),
    q("An angle of 45° is —", ["acute", "right", "obtuse", "straight"], "a",
      "Acute angles are less than 90°. 45° is acute.",
      "Compare with 90°."),
    q("An angle of 120° is —", ["acute", "right", "obtuse", "straight"], "c",
      "Obtuse angles are between 90° and 180°. 120° is obtuse.",
      "Bigger than right, smaller than straight."),
    q("A straight angle measures —", ["0°", "90°", "180°", "360°"], "c",
      "A straight angle is a half-turn: 180°.",
      "Flat line angle = 180°."),
    q("How many sides does a triangle have?", ["2", "3", "4", "5"], "b",
      "A triangle is a closed shape with 3 sides.",
      "Tri- means three."),
    q("The sum of angles in any triangle is —", ["90°", "180°", "270°", "360°"], "b",
      "Interior angles of a triangle always sum to 180°.",
      "Triangle angle sum is a half-turn."),
    q("A quadrilateral has how many sides?", ["3", "4", "5", "6"], "b",
      "Quad means four — four sides.",
      "Count the sides of a four-sided polygon."),
    q("Which shape has all sides equal and all angles 90°?",
      ["Rectangle that is not a square", "Rhombus that is not a square", "Square", "Trapezium"], "c",
      "A square has equal sides and four right angles.",
      "Equal sides + right angles → square."),
    q("Parallel lines —",
      ["meet at one point", "never meet", "meet at two points", "are always curved"], "b",
      "Parallel lines stay the same distance apart and never meet.",
      "Like railway tracks."),
    q("Perpendicular lines meet at —", ["45°", "60°", "90°", "180°"], "c",
      "Perpendicular means they form a right angle (90°).",
      "⊥ means 90°."),
    q("A circle’s distance from centre to any point on it is the —",
      ["diameter", "radius", "chord", "arc"], "b",
      "Radius is centre-to-rim distance.",
      "Half a diameter is a radius."),
    q("If the radius of a circle is 7 cm, the diameter is —",
      ["3.5 cm", "7 cm", "14 cm", "21 cm"], "c",
      "Diameter = 2 × radius = 14 cm.",
      "Diameter is twice the radius."),
    q("Which instrument measures angles?", ["Ruler", "Compass", "Protractor", "Divider"], "c",
      "A protractor measures angles in degrees.",
      "Which tool has a degree scale?"),
    q("A closed figure made of straight line segments is a —",
      ["ray", "polygon", "curve", "line"], "b",
      "Polygons are closed shapes with straight sides.",
      "Straight sides + closed = polygon."),
    q("In △ABC, if ∠A = 50° and ∠B = 60°, then ∠C = —",
      ["70°", "80°", "90°", "110°"], "a",
      "180 − 50 − 60 = 70°.",
      "Use triangle sum 180°."),
    q("Which is an acute-angled triangle?",
      ["Angles 90°, 45°, 45°", "Angles 100°, 40°, 40°", "Angles 60°, 60°, 60°", "Angles 120°, 30°, 30°"], "c",
      "All three angles of an equilateral triangle are 60° — all acute.",
      "Every angle must be less than 90°."),
    q("A rectangle has length 8 cm and breadth 5 cm. Perimeter is —",
      ["13 cm", "26 cm", "40 cm", "20 cm"], "b",
      "Perimeter = 2(l + b) = 2(13) = 26 cm.",
      "Add length and breadth, then double."),
    q("Area of a square of side 6 cm is —", ["12 cm²", "24 cm²", "36 cm²", "18 cm²"], "c",
      "Area = side × side = 36 cm².",
      "Square area = side squared."),
    q("Which point lies inside a circle of centre O and radius 5 cm?",
      ["A point 5 cm from O", "A point 6 cm from O", "A point 3 cm from O", "A point 5.5 cm from O"], "c",
      "Points at distance less than the radius lie inside. 3 < 5.",
      "Inside means distance from centre < radius."),
    q("Two angles that add to 90° are called —",
      ["supplementary", "complementary", "vertically opposite", "reflex"], "b",
      "Complementary angles sum to 90°.",
      "Complement → 90°; supplement → 180°."),
    q("Two angles that add to 180° are called —",
      ["complementary", "supplementary", "acute", "right"], "b",
      "Supplementary angles sum to 180°.",
      "Supplement → straight angle."),
    q("A chord of a circle that passes through the centre is the —",
      ["radius", "tangent", "diameter", "arc"], "c",
      "The longest chord through the centre is the diameter.",
      "Centre-cutting chord = diameter."),
]

MATHS_GEO_B = [
    q("Which figure has no endpoints?", ["Ray", "Line segment", "Line", "Angle"], "c",
      "A line extends endlessly in both directions — no endpoints.",
      "Line vs ray vs segment."),
    q("An angle of 180° is —", ["acute", "obtuse", "right", "straight"], "d",
      "180° is a straight angle.",
      "Flat half-turn."),
    q("An angle greater than 180° but less than 360° is —",
      ["acute", "obtuse", "reflex", "right"], "c",
      "Reflex angles lie between 180° and 360°.",
      "Bigger than a straight angle."),
    q("How many diagonals does a quadrilateral have?", ["1", "2", "3", "4"], "b",
      "A quadrilateral has 2 diagonals.",
      "Join opposite corners — how many ways?"),
    q("A triangle with all sides equal is —",
      ["scalene", "isosceles but not equilateral", "equilateral", "right-angled only"], "c",
      "All three sides equal → equilateral.",
      "Equal sides name."),
    q("A triangle with one angle 90° is —",
      ["acute-angled", "obtuse-angled", "right-angled", "equilateral"], "c",
      "One right angle → right-angled triangle.",
      "Look for the 90° corner."),
    q("Perimeter of a regular hexagon of side 4 cm is —",
      ["20 cm", "24 cm", "16 cm", "28 cm"], "b",
      "6 × 4 = 24 cm.",
      "Regular hexagon: six equal sides."),
    q("Area of a rectangle 9 cm by 4 cm is —",
      ["13 cm²", "26 cm²", "36 cm²", "18 cm²"], "c",
      "Area = l × b = 36 cm².",
      "Length times breadth."),
    q("If diameter is 20 cm, radius is —", ["40 cm", "10 cm", "20 cm", "5 cm"], "b",
      "Radius = diameter ÷ 2 = 10 cm.",
      "Half the diameter."),
    q("Which pair of lines can be both parallel and perpendicular?",
      ["Any two lines", "No pair of lines", "Only vertical lines", "Only circle chords"], "b",
      "Parallel lines never meet; perpendicular lines meet at 90° — impossible together.",
      "Can never-meeting lines also meet at 90°?"),
    q("In a triangle, two angles are 40° and 65°. The third is —",
      ["75°", "85°", "105°", "95°"], "a",
      "180 − 40 − 65 = 75°.",
      "Subtract the two known angles from 180°."),
    q("A square of perimeter 32 cm has side —", ["8 cm", "16 cm", "4 cm", "12 cm"], "a",
      "Side = perimeter ÷ 4 = 8 cm.",
      "Four equal sides share the perimeter."),
    q("Which tool draws a circle?", ["Protractor", "Ruler", "Compass", "Set square only"], "c",
      "A compass draws circles of a chosen radius.",
      "Point + pencil arm."),
    q("Number of vertices in a cube is —", ["6", "8", "12", "4"], "b",
      "A cube has 8 corners (vertices).",
      "Count the corners of a die."),
    q("Number of edges in a cube is —", ["6", "8", "12", "4"], "c",
      "A cube has 12 edges.",
      "12 edges, 8 vertices, 6 faces."),
    q("An isosceles triangle has —",
      ["all sides different", "at least two sides equal", "all angles 90°", "no equal sides"], "b",
      "Isosceles means at least two sides equal.",
      "Iso- = equal (sides)."),
    q("Vertically opposite angles are —",
      ["always equal", "always complementary", "always 90°", "never equal"], "a",
      "When two lines cross, vertically opposite angles are equal.",
      "Opposite angles at an X."),
    q("A polygon with 5 sides is a —", ["hexagon", "pentagon", "octagon", "heptagon"], "b",
      "Penta- means five → pentagon.",
      "Greek number prefixes."),
    q("The region enclosed by a circle is its —",
      ["circumference", "interior (disk)", "chord", "secant"], "b",
      "The interior region is the disk; circumference is the boundary length.",
      "Inside vs boundary."),
    q("If ∠P and ∠Q are complementary and ∠P = 35°, then ∠Q = —",
      ["55°", "145°", "65°", "45°"], "a",
      "90 − 35 = 55°.",
      "Complementary sum to 90°."),
    q("If ∠X and ∠Y are supplementary and ∠X = 110°, then ∠Y = —",
      ["70°", "80°", "20°", "90°"], "a",
      "180 − 110 = 70°.",
      "Supplementary sum to 180°."),
    q("A scalene triangle has —",
      ["all sides equal", "two sides equal", "all sides different", "two right angles"], "c",
      "Scalene means all three sides different lengths.",
      "No equal sides."),
    q("The longest chord of a circle is always the —",
      ["radius", "diameter", "tangent", "minor arc"], "b",
      "The diameter is the longest chord.",
      "Through the centre = longest."),
    q("A closed shape with curved boundary that is not a polygon is —",
      ["triangle", "square", "circle", "rectangle"], "c",
      "A circle’s boundary is curved, so it is not a polygon.",
      "Polygons need straight sides only."),
]

# English + Science banks live alongside; continue in generate_g6_pack_rest.py data.
from generate_g6_data_eng_sci import (  # type: ignore  # noqa: E402
    ENG_COMP_A, ENG_COMP_B, ENG_GRAM_A, ENG_GRAM_B, ENG_VOCAB_A, ENG_VOCAB_B,
    SCI_FOOD_A, SCI_FOOD_B, SCI_FIBRE_A, SCI_FIBRE_B, SCI_SEP_A, SCI_SEP_B,
)

CHAPTERS = [
    {
        "slug": "maths-ch01-integers",
        "content": "g6-maths-integers",
        "export": "g6MathsIntegers",
        "qid": "g6-maths-int",
        "subject": "Maths",
        "title": "Integers",
        "emoji": "➖",
        "blurb": "Signed numbers on the number line",
        "topic": "add-sub",
        "paperTopics": ["add-sub", "place-value"],
        "visual": "number-line",
        "bp": BP_HINTS,
        "set_a": MATHS_INT_A,
        "set_b": MATHS_INT_B,
        "lesson_cards": [
            ("Number line", "Left is smaller; right is larger", "📍"),
            ("Absolute value", "Distance from zero", "📏"),
            ("Same signs", "Add sizes; keep the sign", "➕"),
            ("Different signs", "Subtract sizes; keep the larger’s sign", "⚖️"),
        ],
        "try": ("(−5) + 8 = ?", ["3", "−3", "13", "−13"], "a", "−5 + 8 = 3."),
        "speak": "Integers include negatives, zero and positives on the number line.",
        "hint_file": "maths",
    },
    {
        "slug": "maths-ch02-fractions-decimals",
        "content": "g6-maths-fractions-decimals",
        "export": "g6MathsFractionsDecimals",
        "qid": "g6-maths-frac",
        "subject": "Maths",
        "title": "Fractions & Decimals",
        "emoji": "🍕",
        "blurb": "Parts, decimals and money maths",
        "topic": "fractions",
        "paperTopics": ["fractions", "decimals"],
        "visual": "fraction-bar",
        "bp": BP_HINTS,
        "set_a": MATHS_FRAC_A,
        "set_b": MATHS_FRAC_B,
        "lesson_cards": [
            ("Like fractions", "Same denominator — add or subtract tops", "➗"),
            ("Equivalent", "Multiply top and bottom by the same number", "✨"),
            ("Decimals", "Tenths, hundredths after the point", "🔢"),
            ("Of means ×", "Fraction of a number is multiply", "✖️"),
        ],
        "try": ("What is 1/4 of 20?", ["4", "5", "8", "16"], "b", "20 ÷ 4 = 5."),
        "speak": "Fractions and decimals both name parts of a whole.",
        "hint_file": "maths",
    },
    {
        "slug": "maths-ch03-basic-geometry",
        "content": "g6-maths-geometry",
        "export": "g6MathsGeometry",
        "qid": "g6-maths-geo",
        "subject": "Maths",
        "title": "Basic Geometry",
        "emoji": "📐",
        "blurb": "Lines, angles and simple shapes",
        "topic": "add-sub",
        "paperTopics": ["add-sub", "place-value"],
        "visual": "none",
        "bp": BP_HINTS,
        "set_a": MATHS_GEO_A,
        "set_b": MATHS_GEO_B,
        "lesson_cards": [
            ("Ray / line / segment", "One end, no ends, or two ends", "📏"),
            ("Angle types", "Acute, right, obtuse, straight", "📐"),
            ("Triangle sum", "Angles add to 180°", "🔺"),
            ("Circle", "Radius half of diameter", "⭕"),
        ],
        "try": ("A right angle measures?", ["45°", "90°", "180°", "360°"], "b", "A right angle is 90°."),
        "speak": "Geometry studies lines, angles and shapes.",
        "hint_file": "maths",
    },
    {
        "slug": "english-ch01-comprehension",
        "content": "g6-english-comprehension",
        "export": "g6EnglishComprehension",
        "qid": "g6-eng-comp",
        "subject": "English",
        "title": "Reading Comprehension",
        "emoji": "🔎",
        "blurb": "Find evidence in the passage",
        "topic": "comprehension",
        "paperTopics": ["comprehension", "vocabulary"],
        "visual": "sentence",
        "bp": BP_HINTS_TXT,
        "set_a": ENG_COMP_A,
        "set_b": ENG_COMP_B,
        "lesson_cards": [
            ("Question first", "Know what you are hunting", "❓"),
            ("Scan for clues", "Match key words in the text", "🔍"),
            ("Evidence only", "Do not invent extras", "📜"),
            ("Infer carefully", "Read between the lines when asked", "💡"),
        ],
        "try": (
            "“Asha watered the tulsi because the soil was dry.” Why did she water it?",
            ["The soil was dry", "It was raining", "She was bored", "The plant was fake"],
            "a",
            "The passage says because the soil was dry.",
        ),
        "speak": "Answers hide in the passage — hunt the evidence.",
        "hint_file": "english",
    },
    {
        "slug": "english-ch02-grammar",
        "content": "g6-english-grammar",
        "export": "g6EnglishGrammar",
        "qid": "g6-eng-gram",
        "subject": "English",
        "title": "Grammar",
        "emoji": "✏️",
        "blurb": "Tenses, agreement and sentence sense",
        "topic": "grammar",
        "paperTopics": ["grammar", "vocabulary"],
        "visual": "sentence",
        "bp": BP_HINTS,
        "set_a": ENG_GRAM_A,
        "set_b": ENG_GRAM_B,
        "lesson_cards": [
            ("Subject–verb", "Singular and plural must match", "🔗"),
            ("Tense", "Past, present, future time clues", "⏱️"),
            ("Pronouns", "Stand in for nouns clearly", "👤"),
            ("Articles", "a, an, the — choose with care", "🅰️"),
        ],
        "try": ("They ____ to school every day.", ["goes", "go", "going", "gone"], "b", "They is plural → go."),
        "speak": "Grammar helps sentences stick together clearly.",
        "hint_file": "english",
    },
    {
        "slug": "english-ch03-vocabulary",
        "content": "g6-english-vocabulary",
        "export": "g6EnglishVocabulary",
        "qid": "g6-eng-vocab",
        "subject": "English",
        "title": "Vocabulary",
        "emoji": "📚",
        "blurb": "Word meanings, opposites and context",
        "topic": "vocabulary",
        "paperTopics": ["vocabulary", "synonyms", "antonyms"],
        "visual": "word-cards",
        "bp": BP_HINTS,
        "set_a": ENG_VOCAB_A,
        "set_b": ENG_VOCAB_B,
        "lesson_cards": [
            ("Synonym", "Nearly the same meaning", "🗣️"),
            ("Antonym", "Opposite meaning", "↔️"),
            ("Context", "Nearby words reveal meaning", "🧩"),
            ("Word parts", "Prefixes and roots help", "🧱"),
        ],
        "try": ("Synonym of “brave”?", ["timid", "courageous", "silent", "narrow"], "b", "Courageous ≈ brave."),
        "speak": "Word power grows with synonyms, antonyms and context clues.",
        "hint_file": "english",
    },
    {
        "slug": "science-ch01-food-nutrition",
        "content": "g6-science-food",
        "export": "g6ScienceFood",
        "qid": "g6-sci-food",
        "subject": "Science",
        "title": "Food & Nutrition",
        "emoji": "🥗",
        "blurb": "Nutrients, balanced diet and deficiency",
        "topic": "human-body",
        "paperTopics": ["human-body", "living-things"],
        "visual": "plant",
        "bp": BP_HINTS_SCI,
        "set_a": SCI_FOOD_A,
        "set_b": SCI_FOOD_B,
        "lesson_cards": [
            ("Carbohydrates", "Main energy from rice, roti, potato", "🍞"),
            ("Proteins", "Body-building — dal, milk, eggs", "💪"),
            ("Vitamins & minerals", "Protective nutrients in fruits and greens", "🍊"),
            ("Balanced diet", "Right mix of all nutrient groups", "⚖️"),
        ],
        "try": ("Which nutrient mainly gives energy?", ["Protein", "Carbohydrate", "Vitamin C", "Water"], "b", "Carbohydrates are the body’s main fuel."),
        "speak": "Food gives energy, builds the body and protects health.",
        "hint_file": "science",
    },
    {
        "slug": "science-ch02-fibre-fabric",
        "content": "g6-science-fibre",
        "export": "g6ScienceFibre",
        "qid": "g6-sci-fibre",
        "subject": "Science",
        "title": "Fibre to Fabric",
        "emoji": "🧵",
        "blurb": "Natural fibres, yarn and cloth",
        "topic": "materials",
        "paperTopics": ["materials", "living-things"],
        "visual": "none",
        "bp": BP_HINTS_SCI,
        "set_a": SCI_FIBRE_A,
        "set_b": SCI_FIBRE_B,
        "lesson_cards": [
            ("Fibre", "Thin strands that make yarn", "🧵"),
            ("Natural fibres", "Cotton, jute, silk, wool", "🌱"),
            ("Spinning", "Fibres twisted into yarn", "🌀"),
            ("Weaving / knitting", "Yarn becomes fabric", "🧶"),
        ],
        "try": ("Cotton fibre comes from —", ["sheep", "silkworm", "cotton plant", "jute stem only"], "c", "Cotton is from the cotton boll of the plant."),
        "speak": "Fibres are spun into yarn and woven or knitted into fabric.",
        "hint_file": "science",
    },
    {
        "slug": "science-ch03-separation",
        "content": "g6-science-separation",
        "export": "g6ScienceSeparation",
        "qid": "g6-sci-sep",
        "subject": "Science",
        "title": "Sorting Materials",
        "emoji": "⚗️",
        "blurb": "Properties and separation methods",
        "topic": "materials",
        "paperTopics": ["materials", "forces-energy"],
        "visual": "atom-lite",
        "bp": BP_HINTS_SCI,
        "set_a": SCI_SEP_A,
        "set_b": SCI_SEP_B,
        "lesson_cards": [
            ("Handpicking", "Large unwanted pieces removed by hand", "✋"),
            ("Sieving", "Different sizes through a mesh", "🪟"),
            ("Filtration", "Solid trapped; liquid passes", "🧪"),
            ("Evaporation", "Liquid turns to vapour; solid left", "☀️"),
        ],
        "try": ("Salt from salt water is obtained by —", ["sieving", "evaporation", "handpicking", "winnowing"], "b", "Water evaporates; salt remains."),
        "speak": "We separate mixtures using properties like size, solubility and magnetism.",
        "hint_file": "science",
    },
]


def emit_questions_ts(questions: list[dict], prefix: str, set_letter: str, bp: list[str]) -> str:
    lines = []
    for i, item in enumerate(questions, 1):
        qid = f"{prefix}-{set_letter}-q{i:02d}"
        opts = ",\n".join(
            f'      {{ id: "{chr(97+j)}", text: {esc(t)} }}' for j, t in enumerate(item["options"])
        )
        hints = item.get("bp") or bp
        hint_js = ", ".join(esc(h) for h in hints)
        lines.append(
            f"""  {{
    id: {esc(qid)},
    prompt: {esc(item["prompt"])},
    options: [
{opts}
    ],
    answerId: {esc(item["answer"])},
    explanation: {esc(item["explanation"])},
    hints: [{hint_js}]
  }}"""
        )
    return ",\n".join(lines)


def emit_content_ts(ch: dict) -> str:
    set_a = emit_questions_ts(ch["set_a"], ch["qid"], "a", ch["bp"])
    set_b = emit_questions_ts(ch["set_b"], ch["qid"], "b", ch["bp"])
    cards = ",\n".join(
        f'      {{ label: {esc(l)}, reveal: {esc(r)}, emoji: {esc(e)} }}'
        for l, r, e in ch["lesson_cards"]
    )
    try_p, try_opts, try_ans, try_why = ch["try"]
    try_opts_js = ",\n".join(
        f'        {{ id: "{chr(97+j)}", text: {esc(t)} }}' for j, t in enumerate(try_opts)
    )
    paper = ", ".join(esc(t) for t in ch["paperTopics"])
    return f'''import type {{ ChapterDef, PrepQuestion }} from "../types";

/** {ch["title"]} - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
{set_a}
];

const SET_B: PrepQuestion[] = [
{set_b}
];

const lesson: ChapterDef["lesson"] = [
  {{
    id: "h",
    type: "hook",
    emoji: {esc(ch["emoji"])},
    title: {esc(ch["title"])},
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: {esc(ch["visual"])},
    speak: {esc(ch["speak"])},
  }},
  {{
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: {esc(ch["visual"])},
    speak: "Tap each card to reveal a key idea.",
    cards: [
{cards}
    ],
  }},
  {{
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: {esc(try_p)},
    options: [
{try_opts_js}
    ],
    answerId: {esc(try_ans)},
    why: {esc(try_why)},
    visual: {esc(ch["visual"])},
    speak: {esc(try_p)},
  }},
  {{
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Review the key ideas", "Watch tricky options", "Sets ready whenever you are"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  }},
];

export const {ch["export"]}: ChapterDef = {{
  id: {esc(CHAPTER_IDS[ch["qid"]])},
  title: {esc(ch["title"])},
  emoji: {esc(ch["emoji"])},
  blurb: {esc(ch["blurb"])},
  lesson,
  sets: [
    {{
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: {esc(ch["topic"])},
      questions: SET_A,
    }},
    {{
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: {esc(ch["topic"])},
      questions: SET_B,
    }},
  ],
  paperTopics: [{paper}],
}};

export const {ch["export"]}Questions: PrepQuestion[] = [...SET_A, ...SET_B];
'''


CHAPTER_IDS = {
    "g6-maths-int": "integers",
    "g6-maths-frac": "fractions-decimals",
    "g6-maths-geo": "basic-geometry",
    "g6-eng-comp": "comprehension",
    "g6-eng-gram": "grammar",
    "g6-eng-vocab": "vocabulary",
    "g6-sci-food": "food-nutrition",
    "g6-sci-fibre": "fibre-fabric",
    "g6-sci-sep": "sorting-materials",
}


def emit_source_md(ch: dict) -> str:
    lines = [
        f"# Grade 6 {ch['subject']} — {ch['title']}",
        "",
        "## Meta",
        f"- grade: 6",
        f"- subject: {ch['subject']}",
        f"- chapter_id: g6-{ch['slug']}",
        f"- chapter_title: {ch['title']}",
        "- curriculum_source: NCERT Class 6 themes (public topic list only)",
        "- content_type: original_sof_style",
        "",
        "## Interactive Lesson Outline",
        "",
        f"### step_1: {ch['title']}",
        f"- **tts**: {ch['speak']}",
        "- **on_screen**: Tap-to-reveal key idea cards, then a quick try.",
        "",
    ]
    for label, reveal, _ in ch["lesson_cards"]:
        lines.append(f"- **card**: {label} — {reveal}")
    lines += ["", "## Practice Set A", ""]
    for i, item in enumerate(ch["set_a"], 1):
        lines += [
            f"### Q{i:02d}",
            f"- **stem**: {item['prompt']}",
            "- **options**:",
        ]
        for j, opt in enumerate(item["options"]):
            lines.append(f"  - {chr(65+j)}) {opt}")
        lines += [
            f"- **answer**: {item['answer'].upper()}",
            f"- **explanation**: {item['explanation']}",
            f"- **hint**: {item['hint']}",
            "",
        ]
    lines += ["## Practice Set B", ""]
    for i, item in enumerate(ch["set_b"], 1):
        lines += [
            f"### Q{i:02d}",
            f"- **stem**: {item['prompt']}",
            "- **options**:",
        ]
        for j, opt in enumerate(item["options"]):
            lines.append(f"  - {chr(65+j)}) {opt}")
        lines += [
            f"- **answer**: {item['answer'].upper()}",
            f"- **explanation**: {item['explanation']}",
            f"- **hint**: {item['hint']}",
            "",
        ]
    return "\n".join(lines) + "\n"


def emit_hints(chapters: list[dict], subject: str) -> str:
    lines = [
        'import type { HintOverlay } from "./types";',
        "",
        f"/** Grade 6 {subject.title()} item-specific hints (overlay) */",
        f"export const G6_{subject.upper()}_HINTS: Record<string, HintOverlay> = {{",
    ]
    for ch in chapters:
        if ch["hint_file"] != subject:
            continue
        lines.append(f'  // {ch["title"]}')
        for letter, bank in (("a", ch["set_a"]), ("b", ch["set_b"])):
            for i, item in enumerate(bank, 1):
                qid = f"{ch['qid']}-{letter}-q{i:02d}"
                lines.append(f'  {esc(qid)}: [{esc(item["hint"])}],')
    lines.append("};")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    for ch in CHAPTERS:
        assert len(ch["set_a"]) == 24 and len(ch["set_b"]) == 24, (
            ch["title"], len(ch["set_a"]), len(ch["set_b"])
        )

    src_dir = ROOT / "docs/sof-source/grade-6"
    src_dir.mkdir(parents=True, exist_ok=True)
    content_dir = ROOT / "lib/prep/content"
    hints_dir = ROOT / "lib/prep/hints"

    for ch in CHAPTERS:
        (src_dir / f"{ch['slug']}.md").write_text(emit_source_md(ch), encoding="utf-8")
        (content_dir / f"{ch['content']}.ts").write_text(emit_content_ts(ch), encoding="utf-8")

    for subject in ("maths", "english", "science"):
        (hints_dir / f"g6-{subject}.ts").write_text(emit_hints(CHAPTERS, subject), encoding="utf-8")

    total = sum(len(c["set_a"]) + len(c["set_b"]) for c in CHAPTERS)
    print(f"Wrote {len(CHAPTERS)} chapters, {total} MCQs")


if __name__ == "__main__":
    import sys
    sys.path.insert(0, str(Path(__file__).resolve().parent))
    main()
