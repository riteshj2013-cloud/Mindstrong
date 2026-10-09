#!/usr/bin/env python3
"""Author Grade 8 Maths Ch4–6 (Algebra / Mensuration / Exponents).

Writes docs/sof-source markdown, emits lib/prep/content modules via ingest_lib,
appends item-specific hints to lib/prep/hints/g8-maths.ts, and updates
catalog + content index + ingest_manifest.

Usage: python3 scripts/author_g8_maths_ch04_06.py
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import DOCS, OUT, REPO, emit_module, lesson_ts, maths_sets

# ---------------------------------------------------------------------------
# Question banks: (stem, options[A-D], answer, explanation, skill, difficulty)
# ---------------------------------------------------------------------------

ALGEBRA_A = [
    ("Which of these is a monomial?", ["2x + 3", "5xy", "x + y + z", "a² − b²"], "B", "A monomial is a single term; 5xy has one term, while the others have two or more.", "terms", "easy"),
    ("How many terms are in 3x² − 5xy + 7?", ["2", "3", "4", "1"], "B", "The terms are 3x², −5xy and 7, so there are three terms.", "terms", "easy"),
    ("What is the coefficient of x² in 4x² − 3x + 1?", ["−3", "1", "4", "x²"], "C", "The coefficient is the numerical factor multiplying x², which is 4.", "terms", "easy"),
    ("Add: (2x + 3) + (5x − 1)", ["7x + 2", "7x + 4", "3x + 2", "7x − 2"], "A", "Like terms: 2x + 5x = 7x and 3 + (−1) = 2, so the sum is 7x + 2.", "add_subtract", "easy"),
    ("Subtract: (5x − 2) − (3x + 4)", ["2x − 6", "2x + 2", "8x − 6", "2x − 2"], "A", "Distribute the minus: 5x − 2 − 3x − 4 = 2x − 6.", "add_subtract", "easy"),
    ("Multiply: 3x × 4y", ["7xy", "12xy", "12x + y", "12x²y"], "B", "Multiply coefficients and variables: 3 × 4 = 12 and x × y = xy.", "multiply", "easy"),
    ("What is (x + 2)(x + 3)?", ["x² + 5x + 6", "x² + 6", "x² + 5", "2x + 5"], "A", "FOIL: x² + 3x + 2x + 6 = x² + 5x + 6.", "multiply", "easy"),
    ("Expand: 2(x − 4)", ["2x − 4", "2x − 8", "x − 8", "2x + 8"], "B", "Distribute: 2 × x − 2 × 4 = 2x − 8.", "multiply", "easy"),
    ("Which identity is (a + b)²?", ["a² + b²", "a² + 2ab + b²", "a² − 2ab + b²", "a² − b²"], "B", "The square of a sum is a² + 2ab + b².", "identity", "easy"),
    ("(a − b)² equals…", ["a² − b²", "a² + 2ab + b²", "a² − 2ab + b²", "a² + b²"], "C", "The square of a difference is a² − 2ab + b².", "identity", "easy"),
    ("a² − b² factors as…", ["(a − b)²", "(a + b)²", "(a + b)(a − b)", "a(a − b)"], "C", "Difference of squares: a² − b² = (a + b)(a − b).", "identity", "easy"),
    ("Evaluate (x + 3)² when x = 2.", ["25", "13", "10", "7"], "A", "(2 + 3)² = 5² = 25.", "evaluate", "easy"),
    ("Simplify: 4x²y ÷ 2xy", ["2x", "2xy", "2x²", "8x³y²"], "A", "4/2 = 2, x²/x = x, y/y = 1, so the quotient is 2x.", "divide", "medium"),
    ("Expand: (2x + 1)(x − 3)", ["2x² − 5x − 3", "2x² − 6x − 3", "2x² − 5x + 3", "2x² + 5x − 3"], "A", "2x·x + 2x·(−3) + 1·x + 1·(−3) = 2x² − 6x + x − 3 = 2x² − 5x − 3.", "multiply", "medium"),
    ("What is the constant term in 5x³ − 2x² + 7x − 9?", ["5", "−2", "7", "−9"], "D", "The constant term has no variable factor; here it is −9.", "terms", "medium"),
    ("Expand using identity: (3x + 2)²", ["9x² + 4", "9x² + 12x + 4", "9x² + 6x + 4", "6x² + 12x + 4"], "B", "(3x)² + 2·3x·2 + 2² = 9x² + 12x + 4.", "identity", "medium"),
    ("Expand: (5y − 3)²", ["25y² − 9", "25y² − 30y + 9", "25y² − 15y + 9", "25y² + 30y + 9"], "B", "(5y)² − 2·5y·3 + 3² = 25y² − 30y + 9.", "identity", "medium"),
    ("Factor: x² − 16", ["(x − 4)²", "(x + 4)²", "(x + 4)(x − 4)", "x(x − 16)"], "C", "x² − 16 = x² − 4² = (x + 4)(x − 4).", "identity", "medium"),
    ("If (a + b)² = 49 and ab = 10, find a² + b².", ["29", "39", "59", "9"], "A", "(a + b)² = a² + 2ab + b² = 49, so a² + b² = 49 − 2·10 = 29.", "identity", "medium"),
    ("Simplify: (x + y)² − (x − y)²", ["4xy", "2x² + 2y²", "0", "2xy"], "A", "Expand: (x² + 2xy + y²) − (x² − 2xy + y²) = 4xy.", "identity", "hard"),
    ("Expand: (x + 2)(x − 2)(x² + 4)", ["x⁴ − 16", "x⁴ + 16", "x⁴ − 8", "x⁴ − 4"], "A", "(x + 2)(x − 2) = x² − 4, then (x² − 4)(x² + 4) = x⁴ − 16.", "identity", "hard"),
    ("The product (2a − 3b)(2a + 3b) equals…", ["4a² − 9b²", "4a² + 9b²", "4a² − 6ab − 9b²", "4a² − 12ab + 9b²"], "A", "Difference of squares: (2a)² − (3b)² = 4a² − 9b².", "identity", "hard"),
    ("Find the value of 102² using an identity.", ["10404", "10000", "10400", "10204"], "A", "102² = (100 + 2)² = 10000 + 400 + 4 = 10404.", "identity", "hard"),
    ("Simplify: 3(x − 2) − 2(x + 5) + 4", ["x − 12", "x + 2", "5x − 12", "x − 2"], "A", "3x − 6 − 2x − 10 + 4 = x − 12.", "add_subtract", "hard"),
]

ALGEBRA_B = [
    ("Which expression is a binomial?", ["7", "3x", "x + 5", "x² + 2x + 1"], "C", "A binomial has exactly two terms; x + 5 has two.", "terms", "easy"),
    ("Degree of the polynomial 4x³ − x + 2 is…", ["1", "2", "3", "4"], "C", "The highest power of x is 3, so the degree is 3.", "terms", "easy"),
    ("What is the coefficient of y in 2x − 5y + 8?", ["2", "−5", "8", "5"], "B", "The term −5y has coefficient −5.", "terms", "easy"),
    ("Add: (x² + 3x) + (2x² − 5x + 1)", ["3x² − 2x + 1", "3x² + 8x + 1", "x² − 2x + 1", "3x² − 2x"], "A", "x² + 2x² = 3x², 3x − 5x = −2x, and +1 remains.", "add_subtract", "easy"),
    ("Subtract: (7a − 3) − (2a − 5)", ["5a − 8", "5a + 2", "9a − 8", "5a − 2"], "B", "7a − 3 − 2a + 5 = 5a + 2.", "add_subtract", "easy"),
    ("Multiply: (−3x)(−2x)", ["6x", "−6x²", "6x²", "5x²"], "C", "Negative times negative is positive; 3 × 2 = 6 and x × x = x².", "multiply", "easy"),
    ("Expand: (y − 1)(y + 4)", ["y² + 3y − 4", "y² + 5y − 4", "y² − 3y − 4", "y² + 3y + 4"], "A", "y² + 4y − y − 4 = y² + 3y − 4.", "multiply", "easy"),
    ("Expand: −(2x − 5)", ["−2x − 5", "−2x + 5", "2x − 5", "2x + 5"], "B", "The minus flips both signs: −2x + 5.", "multiply", "easy"),
    ("(a + b)(a − b) equals…", ["a² + b²", "a² − b²", "(a − b)²", "2ab"], "B", "This is the difference-of-squares identity.", "identity", "easy"),
    ("Which is equal to (x + 5)²?", ["x² + 25", "x² + 10x + 25", "x² + 5x + 25", "x² − 10x + 25"], "B", "(x + 5)² = x² + 2·x·5 + 25 = x² + 10x + 25.", "identity", "easy"),
    ("(x − 7)² equals…", ["x² − 49", "x² − 14x + 49", "x² + 14x + 49", "x² − 7x + 49"], "B", "(x − 7)² = x² − 14x + 49.", "identity", "easy"),
    ("Evaluate 9² − 4² using a² − b².", ["65", "13", "5", "45"], "A", "9² − 4² = (9 + 4)(9 − 4) = 13 × 5 = 65.", "identity", "easy"),
    ("Divide: 12a³b² ÷ 3ab", ["4a²b", "4a³b", "9a²b", "4ab"], "A", "12/3 = 4, a³/a = a², b²/b = b.", "divide", "medium"),
    ("Expand: (3x − 2)(2x + 5)", ["6x² + 11x − 10", "6x² + 19x − 10", "6x² − 11x − 10", "5x² + 11x − 10"], "A", "6x² + 15x − 4x − 10 = 6x² + 11x − 10.", "multiply", "medium"),
    ("Like terms among 3x², 5x, −2x², 7 are…", ["3x² and −2x²", "3x² and 5x", "5x and 7", "All of them"], "A", "Like terms have the same variables with the same powers; only the x² terms match.", "terms", "medium"),
    ("Expand: (4m − 1)²", ["16m² − 1", "16m² − 8m + 1", "16m² − 4m + 1", "8m² − 8m + 1"], "B", "(4m)² − 2·4m·1 + 1 = 16m² − 8m + 1.", "identity", "medium"),
    ("Factor: 49 − p²", ["(7 − p)²", "(7 + p)(7 − p)", "(49 − p)(49 + p)", "7(7 − p)"], "B", "49 − p² = 7² − p² = (7 + p)(7 − p).", "identity", "medium"),
    ("If (a − b)² = 25 and ab = 6, find a² + b².", ["37", "13", "31", "19"], "A", "(a − b)² = a² − 2ab + b² = 25, so a² + b² = 25 + 12 = 37.", "identity", "medium"),
    ("Expand: (x + y + 1)(x + y − 1)", ["(x + y)² − 1", "(x + y)² + 1", "x² + y² − 1", "x² + y² + 1"], "A", "Let z = x + y; then (z + 1)(z − 1) = z² − 1 = (x + y)² − 1.", "identity", "medium"),
    ("Find 98² using (100 − 2)².", ["9604", "9804", "9404", "10004"], "A", "(100 − 2)² = 10000 − 400 + 4 = 9604.", "identity", "hard"),
    ("Simplify: (2x + 3y)² − (2x − 3y)²", ["24xy", "12xy", "8x² + 18y²", "0"], "A", "Difference of squares of those expressions: 2·(2x)·(3y)·2 = 24xy.", "identity", "hard"),
    ("The expression (x + 1/x)² − 2 equals…", ["x² + 1/x²", "x² − 1/x²", "2", "x + 1/x"], "A", "(x + 1/x)² = x² + 2 + 1/x², so subtract 2 to get x² + 1/x².", "identity", "hard"),
    ("Expand and simplify: (x − 3)(x + 3) − (x − 1)²", ["8 − 2x", "10 − 2x", "x² − 10", "−2x − 8"], "A", "(x² − 9) − (x² − 2x + 1) = x² − 9 − x² + 2x − 1 = 2x − 10… wait: −9 − 1 = −10, +2x → 2x − 10. Recheck options.", "identity", "hard"),
    ("What must be added to x² + 6x to make a perfect square?", ["9", "6", "36", "3"], "A", "x² + 6x + 9 = (x + 3)², so add 9.", "identity", "hard"),
]

# Fix ALGEBRA_B Q23 — recalculate carefully
# (x−3)(x+3) − (x−1)² = (x²−9) − (x²−2x+1) = x²−9−x²+2x−1 = 2x−10
ALGEBRA_B[22] = (
    "Expand and simplify: (x − 3)(x + 3) − (x − 1)²",
    ["2x − 10", "−2x − 10", "2x + 10", "x² − 10"],
    "A",
    "(x² − 9) − (x² − 2x + 1) = −9 + 2x − 1 = 2x − 10.",
    "identity",
    "hard",
)

MENSURATION_A = [
    ("Area of a rectangle with length 12 cm and breadth 5 cm is…", ["17 cm²", "60 cm²", "34 cm²", "120 cm²"], "B", "Area = length × breadth = 12 × 5 = 60 cm².", "area_2d", "easy"),
    ("Perimeter of a square of side 9 cm is…", ["36 cm", "81 cm", "18 cm", "27 cm"], "A", "Perimeter = 4 × side = 4 × 9 = 36 cm.", "area_2d", "easy"),
    ("Area of a triangle with base 10 cm and height 6 cm is…", ["60 cm²", "30 cm²", "16 cm²", "32 cm²"], "B", "Area = (1/2) × base × height = (1/2) × 10 × 6 = 30 cm².", "area_2d", "easy"),
    ("Circumference of a circle of radius 7 cm (take π = 22/7) is…", ["44 cm", "154 cm", "22 cm", "88 cm"], "A", "C = 2πr = 2 × (22/7) × 7 = 44 cm.", "circle", "easy"),
    ("Area of a circle of radius 7 cm (π = 22/7) is…", ["44 cm²", "154 cm²", "49 cm²", "22 cm²"], "B", "A = πr² = (22/7) × 49 = 154 cm².", "circle", "easy"),
    ("Volume of a cube of edge 4 cm is…", ["16 cm³", "64 cm³", "48 cm³", "12 cm³"], "B", "Volume = a³ = 4³ = 64 cm³.", "volume", "easy"),
    ("Volume of a cuboid 5 cm × 3 cm × 2 cm is…", ["30 cm³", "10 cm³", "15 cm³", "60 cm³"], "A", "V = l × b × h = 5 × 3 × 2 = 30 cm³.", "volume", "easy"),
    ("Lateral surface area of a cube of edge 5 cm is…", ["100 cm²", "125 cm²", "150 cm²", "25 cm²"], "A", "LSA = 4a² = 4 × 25 = 100 cm².", "surface", "easy"),
    ("Total surface area of a cube of edge 3 cm is…", ["27 cm²", "54 cm²", "36 cm²", "18 cm²"], "B", "TSA = 6a² = 6 × 9 = 54 cm².", "surface", "easy"),
    ("Area of a parallelogram with base 8 cm and height 5 cm is…", ["40 cm²", "13 cm²", "20 cm²", "80 cm²"], "A", "Area = base × height = 8 × 5 = 40 cm².", "area_2d", "easy"),
    ("A circle has diameter 14 cm. Its radius is…", ["28 cm", "7 cm", "14 cm", "44 cm"], "B", "Radius is half the diameter: 14/2 = 7 cm.", "circle", "medium"),
    ("Find the area of a trapezium with parallel sides 10 cm and 6 cm, height 4 cm.", ["32 cm²", "64 cm²", "40 cm²", "24 cm²"], "A", "Area = (1/2)(a + b)h = (1/2)(10 + 6)×4 = 32 cm².", "area_2d", "medium"),
    ("Volume of a cylinder: r = 7 cm, h = 10 cm (π = 22/7).", ["1540 cm³", "440 cm³", "220 cm³", "770 cm³"], "A", "V = πr²h = (22/7)×49×10 = 1540 cm³.", "volume", "medium"),
    ("Curved surface area of a cylinder: r = 7 cm, h = 10 cm (π = 22/7).", ["440 cm²", "1540 cm²", "220 cm²", "140 cm²"], "A", "CSA = 2πrh = 2×(22/7)×7×10 = 440 cm².", "surface", "medium"),
    ("A cuboid is 8 cm × 6 cm × 5 cm. Its total surface area is…", ["236 cm²", "240 cm²", "118 cm²", "480 cm²"], "A", "TSA = 2(lb + bh + hl) = 2(48 + 30 + 40) = 2×118 = 236 cm².", "surface", "medium"),
    ("Area of four walls of a room 5 m × 4 m × 3 m high is…", ["54 m²", "60 m²", "27 m²", "120 m²"], "A", "Lateral area = 2(l + b)h = 2(5 + 4)×3 = 54 m².", "surface", "medium"),
    ("A square park has perimeter 80 m. Its area is…", ["400 m²", "1600 m²", "200 m²", "6400 m²"], "A", "Side = 80/4 = 20 m; area = 20² = 400 m².", "area_2d", "medium"),
    ("How many 2 cm cubes fit in a 6 cm cube?", ["8", "27", "9", "36"], "B", "Along each edge 6/2 = 3 cubes; 3³ = 27.", "volume", "medium"),
    ("Diagonal of a rectangle 6 cm by 8 cm is…", ["10 cm", "14 cm", "48 cm", "7 cm"], "A", "By Pythagoras: √(36 + 64) = √100 = 10 cm.", "area_2d", "medium"),
    ("A cylindrical tank has r = 3.5 m and h = 7 m. Volume (π = 22/7) is…", ["269.5 m³", "154 m³", "77 m³", "539 m³"], "A", "V = (22/7)×(3.5)²×7 = (22/7)×12.25×7 = 22×12.25 = 269.5 m³.", "volume", "hard"),
    ("TSA of a cylinder: r = 7 cm, h = 5 cm (π = 22/7).", ["528 cm²", "220 cm²", "308 cm²", "440 cm²"], "A", "TSA = 2πr(h + r) = 2×(22/7)×7×(5 + 7) = 44×12 = 528 cm².", "surface", "hard"),
    ("A path 1 m wide runs inside a square park of side 20 m. Area of the path is…", ["76 m²", "400 m²", "361 m²", "39 m²"], "A", "Inner square side 18 m; path area = 400 − 324 = 76 m².", "area_2d", "hard"),
    ("Volume of water in a tank 2 m × 1.5 m filled to 80 cm depth is…", ["2.4 m³", "2.4 cm³", "3 m³", "1.2 m³"], "A", "Depth = 0.8 m; V = 2 × 1.5 × 0.8 = 2.4 m³.", "volume", "hard"),
    ("A cone has r = 7 cm and slant height 25 cm. CSA (π = 22/7) is…", ["550 cm²", "154 cm²", "175 cm²", "1100 cm²"], "A", "CSA = πrl = (22/7)×7×25 = 550 cm².", "surface", "hard"),
]

MENSURATION_B = [
    ("Area of a square of side 11 cm is…", ["44 cm²", "121 cm²", "22 cm²", "110 cm²"], "B", "Area = side² = 11² = 121 cm².", "area_2d", "easy"),
    ("Perimeter of a rectangle 15 cm by 8 cm is…", ["46 cm", "120 cm", "23 cm", "38 cm"], "A", "P = 2(l + b) = 2(15 + 8) = 46 cm.", "area_2d", "easy"),
    ("Area of a right triangle with legs 6 cm and 8 cm is…", ["48 cm²", "24 cm²", "14 cm²", "28 cm²"], "B", "Area = (1/2)×6×8 = 24 cm².", "area_2d", "easy"),
    ("Diameter of a circle with circumference 44 cm (π = 22/7) is…", ["7 cm", "14 cm", "22 cm", "28 cm"], "B", "C = πd ⇒ d = 44 × 7/22 = 14 cm.", "circle", "easy"),
    ("Area of a circle with diameter 14 cm (π = 22/7) is…", ["154 cm²", "44 cm²", "616 cm²", "308 cm²"], "A", "r = 7; A = (22/7)×49 = 154 cm².", "circle", "easy"),
    ("Edge of a cube whose volume is 125 cm³ is…", ["5 cm", "25 cm", "15 cm", "10 cm"], "A", "a³ = 125 ⇒ a = 5 cm.", "volume", "easy"),
    ("Volume of a cuboid 10 cm × 4 cm × 3 cm is…", ["120 cm³", "17 cm³", "40 cm³", "240 cm³"], "A", "V = 10 × 4 × 3 = 120 cm³.", "volume", "easy"),
    ("TSA of a cuboid 4 cm × 3 cm × 2 cm is…", ["52 cm²", "24 cm²", "26 cm²", "48 cm²"], "A", "2(12 + 6 + 8) = 2×26 = 52 cm².", "surface", "easy"),
    ("LSA of a cuboid 6 cm × 4 cm × 5 cm is…", ["100 cm²", "148 cm²", "120 cm²", "50 cm²"], "A", "LSA = 2(l + b)h = 2(6 + 4)×5 = 100 cm².", "surface", "easy"),
    ("Area of a rhombus with diagonals 10 cm and 8 cm is…", ["40 cm²", "80 cm²", "18 cm²", "36 cm²"], "A", "Area = (1/2)×d₁×d₂ = (1/2)×10×8 = 40 cm².", "area_2d", "easy"),
    ("A circular pond has radius 21 m. Area (π = 22/7) is…", ["1386 m²", "132 m²", "462 m²", "2772 m²"], "A", "A = (22/7)×441 = 1386 m².", "circle", "medium"),
    ("Trapezium: parallel sides 12 cm, 8 cm; height 5 cm. Area is…", ["50 cm²", "100 cm²", "60 cm²", "40 cm²"], "A", "(1/2)(12 + 8)×5 = 50 cm².", "area_2d", "medium"),
    ("Cylinder volume: r = 3.5 cm, h = 8 cm (π = 22/7).", ["308 cm³", "154 cm³", "88 cm³", "616 cm³"], "A", "V = (22/7)×(3.5)²×8 = 22×12.25×8/7… (22/7)×12.25×8 = 22×1.75×8 = 308 cm³.", "volume", "medium"),
    ("CSA of a cylinder: r = 5 cm, h = 14 cm (π = 22/7).", ["440 cm²", "220 cm²", "350 cm²", "700 cm²"], "A", "2πrh = 2×(22/7)×5×14 = 440 cm².", "surface", "medium"),
    ("How many litres does a cuboid tank 2 m × 1 m × 0.5 m hold?", ["1000 L", "100 L", "10 L", "2000 L"], "A", "V = 1 m³ = 1000 litres.", "volume", "medium"),
    ("A room is 6 m × 5 m × 4 m. Cost of painting four walls at ₹20/m² is…", ["₹1760", "₹2400", "₹880", "₹1200"], "A", "Area = 2(6+5)×4 = 88 m²; cost = 88 × 20 = ₹1760.", "surface", "medium"),
    ("Side of a square whose area equals a rectangle 16 cm by 9 cm is…", ["12 cm", "25 cm", "13 cm", "18 cm"], "A", "Rectangle area 144; side = √144 = 12 cm.", "area_2d", "medium"),
    ("Number of 1 cm cubes in a 5 cm × 4 cm × 3 cm cuboid is…", ["60", "12", "20", "120"], "A", "Volume in cm³ equals the count of 1 cm cubes: 5×4×3 = 60.", "volume", "medium"),
    ("A wire of length 88 cm is bent into a circle. Radius (π = 22/7) is…", ["14 cm", "7 cm", "28 cm", "11 cm"], "A", "2πr = 88 ⇒ r = 88 × 7/(2×22) = 14 cm.", "circle", "medium"),
    ("A cone has r = 3 cm and height 4 cm. Volume (π = 3.14) is about…", ["37.68 cm³", "113 cm³", "12 cm³", "75.36 cm³"], "A", "V = (1/3)πr²h = (1/3)×3.14×9×4 = 37.68 cm³.", "volume", "hard"),
    ("TSA of a hemisphere of radius 7 cm (π = 22/7) is…", ["462 cm²", "308 cm²", "154 cm²", "616 cm²"], "A", "TSA = 3πr² = 3×(22/7)×49 = 462 cm².", "surface", "hard"),
    ("Outer side of a square frame is 12 cm; inner side 10 cm. Area of the frame is…", ["44 cm²", "24 cm²", "120 cm²", "100 cm²"], "A", "Outer area 144 − inner 100 = 44 cm².", "area_2d", "hard"),
    ("A cylindrical pipe has inner r = 3.5 cm and length 20 m. Volume of water it can hold (π = 22/7) is…", ["77000 cm³", "7700 cm³", "1540 cm³", "440 cm³"], "A", "Length = 2000 cm; V = (22/7)×12.25×2000 = 77000 cm³.", "volume", "hard"),
    ("Slant height of a cone with r = 5 cm and h = 12 cm is…", ["13 cm", "17 cm", "7 cm", "60 cm"], "A", "l = √(r² + h²) = √(25 + 144) = √169 = 13 cm.", "surface", "hard"),
]

EXPONENTS_A = [
    ("What is 2³?", ["6", "8", "9", "5"], "B", "2³ = 2 × 2 × 2 = 8.", "basics", "easy"),
    ("5² × 5³ = ?", ["5⁵", "5⁶", "25⁵", "5"], "A", "Same base: add exponents, 2 + 3 = 5.", "laws", "easy"),
    ("a⁶ ÷ a² = ?", ["a³", "a⁴", "a⁸", "a¹²"], "B", "Same base: subtract exponents, 6 − 2 = 4.", "laws", "easy"),
    ("(3²)³ = ?", ["3⁵", "3⁶", "9³", "3⁹"], "B", "Power of a power: multiply exponents, 2 × 3 = 6.", "laws", "easy"),
    ("What is a⁰ for a ≠ 0?", ["0", "1", "a", "Undefined"], "B", "Any non-zero number to the power 0 equals 1.", "basics", "easy"),
    ("2⁻³ equals…", ["−8", "−6", "1/8", "8"], "C", "2⁻³ = 1/2³ = 1/8.", "negative", "easy"),
    ("Which is equal to 10⁻²?", ["0.01", "0.1", "100", "−100"], "A", "10⁻² = 1/100 = 0.01.", "negative", "easy"),
    ("(−2)⁴ = ?", ["−16", "16", "−8", "8"], "B", "Even power of a negative is positive: 16.", "basics", "easy"),
    ("Simplify: 3⁴ × 3⁻²", ["3²", "3⁶", "3⁻⁸", "1"], "A", "Add exponents: 4 + (−2) = 2, so 3².", "laws", "easy"),
    ("Express 1/81 as a power of 3.", ["3⁴", "3⁻⁴", "9⁻²", "Both B and C"], "D", "81 = 3⁴ = 9², so 1/81 = 3⁻⁴ = 9⁻².", "negative", "easy"),
    ("Simplify: (2³ × 2⁵) ÷ 2⁴", ["2⁴", "2¹²", "2²", "2⁸"], "A", "2⁸ ÷ 2⁴ = 2⁴.", "laws", "medium"),
    ("(5²)³ × 5⁻⁴ = ?", ["5²", "5⁵", "5⁶", "5⁻²"], "A", "5⁶ × 5⁻⁴ = 5².", "laws", "medium"),
    ("Which is larger: 2⁵ or 5²?", ["2⁵", "5²", "They are equal", "Cannot tell"], "A", "2⁵ = 32 and 5² = 25, so 2⁵ is larger.", "compare", "medium"),
    ("Simplify: (x²)³ ÷ x⁴", ["x²", "x⁵", "x⁶", "x"], "A", "x⁶ ÷ x⁴ = x².", "laws", "medium"),
    ("Write 0.00056 in standard form.", ["5.6 × 10⁻⁴", "5.6 × 10⁻³", "56 × 10⁻⁵", "5.6 × 10⁴"], "A", "Move the point 4 places: 5.6 × 10⁻⁴.", "standard", "medium"),
    ("Write 3.2 × 10⁵ as an ordinary number.", ["320000", "32000", "3200", "0.000032"], "A", "Move the point 5 places right: 320000.", "standard", "medium"),
    ("(−3)⁻² equals…", ["−9", "1/9", "−1/9", "9"], "B", "(−3)⁻² = 1/(−3)² = 1/9.", "negative", "medium"),
    ("Simplify: (2/3)⁻²", ["4/9", "9/4", "−4/9", "2/3"], "B", "(2/3)⁻² = (3/2)² = 9/4.", "negative", "medium"),
    ("If 2ˣ = 32, then x = ?", ["4", "5", "6", "16"], "B", "32 = 2⁵, so x = 5.", "solve", "medium"),
    ("Simplify: (3⁵ × 3⁻²) ÷ 3³", ["1", "3", "3²", "3⁻¹"], "A", "3³ ÷ 3³ = 3⁰ = 1.", "laws", "hard"),
    ("(√16)³ = ?", ["64", "8", "12", "48"], "A", "√16 = 4; 4³ = 64.", "basics", "hard"),
    ("Express (5³ ÷ 5⁵) × 5² as a single power of 5.", ["5⁰", "5²", "5⁻²", "5⁴"], "A", "5⁻² × 5² = 5⁰ = 1, which is also 5⁰.", "laws", "hard"),
    ("Which equals 8⁻²/³?", ["1/4", "4", "−4", "1/64"], "A", "8¹/³ = 2, so 8²/³ = 4 and 8⁻²/³ = 1/4.", "fractional", "hard"),
    ("Simplify: (10³ × 10⁻⁵) ÷ 10⁻⁴", ["10²", "10⁰", "10⁻⁶", "10⁴"], "A", "10⁻² ÷ 10⁻⁴ = 10⁻²−(−⁴) = 10².", "laws", "hard"),
]

EXPONENTS_B = [
    ("What is 3⁴?", ["12", "81", "64", "27"], "B", "3⁴ = 3 × 3 × 3 × 3 = 81.", "basics", "easy"),
    ("7¹ × 7⁴ = ?", ["7⁵", "7⁴", "49⁵", "7"], "A", "Add exponents: 1 + 4 = 5.", "laws", "easy"),
    ("b⁹ ÷ b³ = ?", ["b³", "b⁶", "b¹²", "b²⁷"], "B", "Subtract exponents: 9 − 3 = 6.", "laws", "easy"),
    ("(4²)² = ?", ["4⁴", "4²", "8²", "16²"], "A", "Multiply exponents: 2 × 2 = 4.", "laws", "easy"),
    ("(−5)⁰ = ?", ["−5", "0", "1", "−1"], "C", "Any non-zero number to the power 0 is 1.", "basics", "easy"),
    ("4⁻² equals…", ["−16", "1/16", "−1/16", "16"], "B", "4⁻² = 1/4² = 1/16.", "negative", "easy"),
    ("10³ equals…", ["30", "100", "1000", "10000"], "C", "10³ = 10 × 10 × 10 = 1000.", "basics", "easy"),
    ("(−1)⁹⁷ = ?", ["1", "−1", "0", "97"], "B", "Odd power of −1 is −1.", "basics", "easy"),
    ("Simplify: 2⁵ × 2⁻⁵", ["2¹⁰", "1", "2", "0"], "B", "2⁰ = 1.", "laws", "easy"),
    ("1/25 as a power of 5 is…", ["5²", "5⁻²", "25⁻¹", "Both B and C"], "D", "25 = 5², so 1/25 = 5⁻² = 25⁻¹.", "negative", "easy"),
    ("Simplify: (3⁴ × 3²) ÷ 3³", ["3³", "3⁵", "3⁸", "3"], "A", "3⁶ ÷ 3³ = 3³.", "laws", "medium"),
    ("(2³)⁴ × 2⁻⁶ = ?", ["2⁶", "2¹²", "2⁻⁶", "2¹⁸"], "A", "2¹² × 2⁻⁶ = 2⁶.", "laws", "medium"),
    ("Which is smaller: 3⁴ or 4³?", ["3⁴", "4³", "They are equal", "Cannot tell"], "B", "3⁴ = 81 and 4³ = 64, so 4³ is smaller.", "compare", "medium"),
    ("Simplify: (y³)⁴ ÷ y⁸", ["y⁴", "y¹²", "y⁵", "y"], "A", "y¹² ÷ y⁸ = y⁴.", "laws", "medium"),
    ("Standard form of 720000 is…", ["7.2 × 10⁵", "72 × 10⁴", "7.2 × 10⁶", "7.2 × 10⁴"], "A", "7.2 × 10⁵ is standard form.", "standard", "medium"),
    ("Ordinary number for 4.5 × 10⁻³ is…", ["0.0045", "0.045", "4500", "0.00045"], "A", "Move the point 3 places left: 0.0045.", "standard", "medium"),
    ("(−2)⁻³ equals…", ["−1/8", "1/8", "−8", "8"], "A", "1/(−2)³ = 1/(−8) = −1/8.", "negative", "medium"),
    ("Simplify: (3/5)⁻¹", ["3/5", "5/3", "−3/5", "9/25"], "B", "Reciprocal: (3/5)⁻¹ = 5/3.", "negative", "medium"),
    ("If 5ˣ = 1/125, then x = ?", ["3", "−3", "5", "−5"], "B", "1/125 = 5⁻³, so x = −3.", "solve", "medium"),
    ("Simplify: (2⁴ ÷ 2⁷) × 2³", ["1", "2", "2⁻¹", "2⁶"], "A", "2⁻³ × 2³ = 2⁰ = 1.", "laws", "hard"),
    ("(∛27)² = ?", ["9", "18", "3", "6"], "A", "∛27 = 3; 3² = 9.", "basics", "hard"),
    ("Express (7⁻³ × 7⁵) ÷ 7² as a power of 7.", ["7⁰", "7⁴", "7⁻⁴", "7²"], "A", "7² ÷ 7² = 7⁰.", "laws", "hard"),
    ("Which equals 27²/³?", ["9", "18", "3", "81"], "A", "27¹/³ = 3; 27²/³ = 3² = 9.", "fractional", "hard"),
    ("Simplify: (10⁻² × 10⁴) ÷ 10⁻¹", ["10³", "10¹", "10⁻³", "10⁵"], "A", "10² ÷ 10⁻¹ = 10³.", "laws", "hard"),
]


def q_block(num: int, item: tuple) -> str:
    stem, opts, ans, expl, skill, diff = item
    letters = "ABCD"
    opt_lines = "\n".join(f"  - {letters[i]}) {opts[i]}" for i in range(4))
    return f"""### Q{num:02d}
- **stem**: {stem}
- **options**:
{opt_lines}
- **answer**: {ans}
- **explanation**: {expl}
- **skill**: {skill}
- **difficulty**: {diff}
"""


def answer_key(set_label: str, items: list) -> str:
    rows = ["| Q# | Answer | skill | difficulty |", "|----|--------|-------|------------|"]
    for i, it in enumerate(items, 1):
        rows.append(f"| Q{i:02d} | {it[2]} | {it[4]} | {it[5]} |")
    return f"### Set {set_label}\n" + "\n".join(rows) + "\n"


def write_md(path: Path, title: str, chapter_id: str, chapter_title: str, steps: str, set_a: list, set_b: list) -> None:
    body = f"""# Grade 8 Maths — {title}

## Meta
- grade: 8
- subject: Maths
- chapter_id: {chapter_id}
- chapter_title: {chapter_title}
- curriculum_source: NCERT Class 8 themes (public topic list only)
- content_type: original_sof_style

## Interactive Lesson Outline

{steps}

## Practice Set A

{chr(10).join(q_block(i, q) for i, q in enumerate(set_a, 1))}
## Practice Set B

{chr(10).join(q_block(i, q) for i, q in enumerate(set_b, 1))}
## Answer Key

{answer_key("A", set_a)}
{answer_key("B", set_b)}"""
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(body)
    print(f"Wrote {path} ({len(set_a)}+{len(set_b)} MCQs)")


ALGEBRA_STEPS = """### step_1: Terms, Factors and Coefficients
- **tts**:
  - An algebraic expression is built from numbers and letters joined by plus and minus.
  - Each chunk separated by plus or minus is a term, and the number in front of a variable is its coefficient.
- **on_screen**: Expression 3x² − 5xy + 7 splits into three term cards; child taps each to reveal coefficient and factors.
- **check**: How many terms are in 3x² − 5xy + 7? — Answer: 3

### step_2: Like and Unlike Terms
- **tts**:
  - Like terms have the same variables with the same powers, so you can add or subtract them.
  - Unlike terms stay separate; you cannot combine 3x² with 5x.
- **on_screen**: Sorting game: cards such as 4a²b, −a²b, 2ab² and 7 go into Like / Unlike bins relative to a²b.
- **check**: Are 4a²b and −a²b like terms? — Answer: Yes

### step_3: Adding and Subtracting Expressions
- **tts**:
  - Line up like terms, then add or subtract their coefficients.
  - When you subtract an expression, change every sign inside the brackets first.
- **on_screen**: Vertical workspace for (5x − 2) − (3x + 4); the minus flips +4 into −4 before combining.
- **check**: What is (5x − 2) − (3x + 4)? — Answer: 2x − 6

### step_4: Multiplying a Monomial by a Polynomial
- **tts**:
  - Multiply the coefficient numbers, then multiply the variable parts using laws of exponents.
  - Distribute: every term inside the brackets gets multiplied.
- **on_screen**: Animation spreads 2x across (x + 3) to make 2x² + 6x.
- **check**: Expand 2x(x + 3). — Answer: 2x² + 6x

### step_5: Multiplying Two Binomials
- **tts**:
  - Use FOIL or an area model: first, outer, inner, last.
  - Then combine any like terms that appear.
- **on_screen**: Area rectangle for (x + 2)(x + 3) fills four tiles labelled x², 3x, 2x and 6.
- **check**: What is (x + 2)(x + 3)? — Answer: x² + 5x + 6

### step_6: Standard Identities
- **tts**:
  - Remember three workhorses: (a + b)², (a − b)² and a² − b².
  - They save time and reduce careless expansion errors.
- **on_screen**: Identity flashcards flip to show a² + 2ab + b², a² − 2ab + b² and (a + b)(a − b).
- **check**: Expand (a + b)². — Answer: a² + 2ab + b²

### step_7: Using Identities to Compute
- **tts**:
  - Rewrite numbers near a round base, then apply an identity.
  - For example, 102² becomes (100 + 2)².
- **on_screen**: Number pad: child enters 102, the app rewrites it as (100 + 2)² and expands step by step to 10404.
- **check**: Find 102² using an identity. — Answer: 10404

### step_8: Factorising with Identities
- **tts**:
  - Spot a² − b² patterns and rewrite them as a product of two brackets.
  - Perfect-square trinomials reverse the (a ± b)² identities.
- **on_screen**: Factor machine takes x² − 16 and outputs (x + 4)(x − 4); child checks by expanding back.
- **check**: Factor x² − 16. — Answer: (x + 4)(x − 4)
"""

MENSURATION_STEPS = """### step_1: Area Review — Rectangles and Triangles
- **tts**:
  - Rectangle area is length times breadth, and triangle area is half base times height.
  - Always keep units consistent before you multiply.
- **on_screen**: Shape lab: child sets base and height sliders; live area updates for a rectangle and a triangle side by side.
- **check**: Area of a triangle with base 10 cm and height 6 cm? — Answer: 30 cm²

### step_2: Circles — Circumference and Area
- **tts**:
  - Circumference is two pi r, and area is pi r squared.
  - Diameter is twice the radius — do not mix them up in the formula.
- **on_screen**: Circle with radius 7; child chooses π = 22/7 and computes C = 44 and A = 154.
- **check**: Circumference of a circle of radius 7 cm (π = 22/7)? — Answer: 44 cm

### step_3: Trapezium and Parallelogram
- **tts**:
  - Parallelogram area is base times height.
  - Trapezium area is half the sum of the parallel sides, times the height.
- **on_screen**: Drag parallel sides of a trapezium; formula (1/2)(a + b)h updates live.
- **check**: Trapezium with sides 10 and 6, height 4. Area? — Answer: 32 cm²

### step_4: Cubes and Cuboids — Volume
- **tts**:
  - Cube volume is edge cubed; cuboid volume is length times breadth times height.
  - Volume is measured in cubic units, such as cubic centimetres.
- **on_screen**: Build a 4 cm cube from unit cubes; counter reaches 64. Then stretch it into a cuboid.
- **check**: Volume of a cube of edge 4 cm? — Answer: 64 cm³

### step_5: Surface Area of Cubes and Cuboids
- **tts**:
  - Lateral surface area covers the four walls; total surface area includes the top and bottom too.
  - For a cube, LSA is four a squared and TSA is six a squared.
- **on_screen**: Unfold a cuboid net; faces highlight as LSA or TSA formulas appear.
- **check**: TSA of a cube of edge 3 cm? — Answer: 54 cm²

### step_6: Cylinders — Volume and Curved Surface
- **tts**:
  - Cylinder volume is pi r squared h.
  - Curved surface area is two pi r h — think of unrolling the side into a rectangle.
- **on_screen**: Cylinder unrolls into a rectangle of width 2πr and height h; volume liquid fills to height h.
- **check**: CSA of cylinder r = 7 cm, h = 10 cm (π = 22/7)? — Answer: 440 cm²

### step_7: Total Surface Area of a Cylinder
- **tts**:
  - Total surface area adds the two circular ends: two pi r times (h plus r).
  - Closed cans need TSA; open pipes often need only the curved surface.
- **on_screen**: Toggle open or closed cylinder; formula switches between 2πrh and 2πr(h + r).
- **check**: TSA of cylinder r = 7 cm, h = 5 cm (π = 22/7)? — Answer: 528 cm²

### step_8: Cones and Real-World Paths
- **tts**:
  - Cone volume is one-third pi r squared h, and curved surface uses slant height.
  - Path and frame problems subtract an inner area from an outer area.
- **on_screen**: Park map with a 1 m path inside a 20 m square; child computes 400 − 324 = 76.
- **check**: Area of a 1 m path inside a 20 m square park? — Answer: 76 m²
"""

EXPONENTS_STEPS = """### step_1: Powers as Repeated Multiplication
- **tts**:
  - An exponent tells how many times the base multiplies by itself.
  - So two to the power three means two times two times two, which is eight.
- **on_screen**: Tower of 2-blocks grows as the exponent slider moves from 1 to 5; product updates live.
- **check**: What is 2³? — Answer: 8

### step_2: Multiplying Powers with the Same Base
- **tts**:
  - When bases match, add the exponents to multiply the powers.
  - Five squared times five cubed is five to the five.
- **on_screen**: Cards 5² and 5³ merge; exponents 2 and 3 slide into a plus tray.
- **check**: Simplify 5² × 5³. — Answer: 5⁵

### step_3: Dividing Powers and Power of a Power
- **tts**:
  - Divide same bases by subtracting exponents.
  - A power of a power multiplies the exponents: (aᵐ)ⁿ becomes a to the m n.
- **on_screen**: Two machines: ÷ subtracts exponents, and a nested power multiplies them.
- **check**: What is (3²)³? — Answer: 3⁶

### step_4: Zero and Negative Exponents
- **tts**:
  - Any non-zero number to the power zero is one.
  - A negative exponent means take the reciprocal: a to the minus n is one over a to the n.
- **on_screen**: Flip-card shows 2⁻³ becoming 1/8; a⁰ lights up as 1 for several non-zero bases.
- **check**: What is 2⁻³? — Answer: 1/8

### step_5: Laws Mixed Together
- **tts**:
  - Combine the laws carefully, one step at a time.
  - Keep the base clear and only change the exponents.
- **on_screen**: Step workspace for (2³ × 2⁵) ÷ 2⁴ collapses to 2⁴ with each law highlighted.
- **check**: Simplify (2³ × 2⁵) ÷ 2⁴. — Answer: 2⁴

### step_6: Standard Form (Scientific Notation)
- **tts**:
  - Standard form writes a number as a times ten to the n, with a between one and ten.
  - Large numbers get positive powers of ten; tiny decimals get negative powers.
- **on_screen**: Digit shifter moves the decimal point; the counter shows the matching power of ten.
- **check**: Write 0.00056 in standard form. — Answer: 5.6 × 10⁻⁴

### step_7: Comparing Powers
- **tts**:
  - When bases or exponents differ, evaluate or rewrite before comparing.
  - Two to the five is thirty-two, which beats five squared, twenty-five.
- **on_screen**: Race track: 2⁵ and 5² convert to ordinary numbers and finish at 32 and 25.
- **check**: Which is larger, 2⁵ or 5²? — Answer: 2⁵

### step_8: Solving Simple Exponential Equations
- **tts**:
  - Rewrite both sides with the same base, then equate the exponents.
  - If two to the x equals thirty-two, write thirty-two as two to the five.
- **on_screen**: Balance with 2ˣ on the left and 32 on the right; 32 morphs into 2⁵ and x snaps to 5.
- **check**: If 2ˣ = 32, what is x? — Answer: 5
"""

HINT_POOLS = {
    "algebra": {
        "terms": "Count terms separated by + or −; coefficients sit in front of variables.",
        "add_subtract": "Combine like terms only; flip all signs when subtracting a bracket.",
        "multiply": "Distribute to every term, then combine like terms.",
        "divide": "Divide coefficients, then subtract exponents of matching variables.",
        "identity": "Use (a±b)² or a²−b²; expand or factor with the matching pattern.",
        "evaluate": "Substitute the value, then simplify carefully.",
    },
    "mensuration": {
        "area_2d": "Pick the right area formula; keep length units the same.",
        "circle": "Use C = 2πr and A = πr²; diameter is twice the radius.",
        "volume": "Cube a³, cuboid lbh, cylinder πr²h — answer in cubic units.",
        "surface": "LSA covers sides; TSA adds the bases. List faces before multiplying.",
    },
    "exponents": {
        "basics": "Exponent means repeated multiplication of the base.",
        "laws": "Same base: add for ×, subtract for ÷, multiply for a power of a power.",
        "negative": "a⁻ⁿ = 1/aⁿ; flip the fraction and make the exponent positive.",
        "standard": "One digit before the decimal, times a power of 10.",
        "compare": "Evaluate or rewrite with the same base before comparing.",
        "solve": "Rewrite both sides with the same base, then equate exponents.",
        "fractional": "a^(m/n) means the n-th root first, then raise to m.",
    },
}


def hints_for(prefix: str, pool_key: str, set_a: list, set_b: list) -> dict[str, list[str]]:
    pool = HINT_POOLS[pool_key]
    out = {}
    for set_id, items in (("a", set_a), ("b", set_b)):
        for i, it in enumerate(items, 1):
            skill = it[4]
            text = pool.get(skill, "Use the lesson key idea for this skill.")
            qid = f"{prefix}-{set_id}-q{i:02d}"
            out[qid] = [text]
    return out


def append_hints(new_hints: dict[str, list[str]]) -> None:
    path = REPO / "lib/prep/hints/g8-maths.ts"
    text = path.read_text()
    # Insert before the closing `};`
    lines = []
    for qid, hints in new_hints.items():
        lines.append(f'  "{qid}": {json.dumps(hints)},')
    block = "\n".join(lines) + "\n"
    if not text.rstrip().endswith("};"):
        raise SystemExit("Unexpected g8-maths.ts ending")
    # Avoid duplicating if re-run
    for qid in new_hints:
        if f'"{qid}"' in text:
            print(f"Hint already present for {qid}, skipping append of entire block")
            return
    # Avoid re.sub replacement escapes (hints may contain \u / backslashes).
    trimmed = text.rstrip()
    if not trimmed.endswith("};"):
        raise SystemExit("Unexpected g8-maths.ts ending after strip")
    path.write_text(trimmed[:-2] + block + "};\n")
    print(f"Appended {len(new_hints)} hints to {path.name}")


def patch_catalog() -> None:
    path = REPO / "lib/prep/catalog.ts"
    text = path.read_text()
    if "g8MathsAlgebra" not in text:
        text = text.replace(
            'import { g8MathsComparing } from "./content/g8-maths-comparing";',
            'import { g8MathsComparing } from "./content/g8-maths-comparing";\n'
            'import { g8MathsAlgebra } from "./content/g8-maths-algebra";\n'
            'import { g8MathsMensuration } from "./content/g8-maths-mensuration";\n'
            'import { g8MathsExponents } from "./content/g8-maths-exponents";',
        )
        text = text.replace(
            """  8: [
    g8MathsRationals,
    g8MathsLinear,
    g8MathsComparing,
  ],""",
            """  8: [
    g8MathsRationals,
    g8MathsLinear,
    g8MathsComparing,
    g8MathsAlgebra,
    g8MathsMensuration,
    g8MathsExponents,
  ],""",
        )
        path.write_text(text)
        print("Patched catalog.ts MATHS[8]")
    else:
        print("catalog.ts already has new chapters")


def patch_index() -> None:
    path = REPO / "lib/prep/content/index.ts"
    text = path.read_text()
    additions = [
        'export { g8MathsAlgebra } from "./g8-maths-algebra";',
        'export { g8MathsMensuration } from "./g8-maths-mensuration";',
        'export { g8MathsExponents } from "./g8-maths-exponents";',
    ]
    changed = False
    for line in additions:
        if line not in text:
            text = text.rstrip() + "\n" + line + "\n"
            changed = True
    if changed:
        path.write_text(text)
        print("Patched content/index.ts")
    else:
        print("content/index.ts already exports new chapters")


def patch_manifest() -> None:
    path = REPO / "scripts/ingest_manifest.json"
    data = json.loads(path.read_text())
    extras = [
        ["maths", 8, "g8MathsAlgebra", "g8-maths-algebra"],
        ["maths", 8, "g8MathsMensuration", "g8-maths-mensuration"],
        ["maths", 8, "g8MathsExponents", "g8-maths-exponents"],
        # comparing may already be missing from older manifest — leave as-is
    ]
    keys = {(t[2] if isinstance(t, list) else t) for t in data}
    # normalize
    existing = set()
    for row in data:
        existing.add(row[2] if isinstance(row, list) else row)
    for row in extras:
        if row[2] not in existing:
            data.append(row)
    # also ensure comparing is listed
    if "g8MathsComparing" not in existing:
        data.append(["maths", 8, "g8MathsComparing", "g8-maths-comparing"])
    path.write_text(json.dumps(data, indent=2) + "\n")
    print("Updated ingest_manifest.json")


def main() -> None:
    assert len(ALGEBRA_A) == 24 and len(ALGEBRA_B) == 24
    assert len(MENSURATION_A) == 24 and len(MENSURATION_B) == 24
    assert len(EXPONENTS_A) == 24 and len(EXPONENTS_B) == 24

    docs = DOCS / "grade-8"
    ch4 = docs / "maths-ch04-algebra.md"
    ch5 = docs / "maths-ch05-mensuration.md"
    ch6 = docs / "maths-ch06-exponents.md"

    write_md(
        ch4,
        "Chapter 4: Algebraic Expressions and Identities",
        "g8-maths-ch04-algebraic-expressions",
        "Algebraic Expressions and Identities",
        ALGEBRA_STEPS,
        ALGEBRA_A,
        ALGEBRA_B,
    )
    write_md(
        ch5,
        "Chapter 5: Mensuration",
        "g8-maths-ch05-mensuration",
        "Mensuration",
        MENSURATION_STEPS,
        MENSURATION_A,
        MENSURATION_B,
    )
    write_md(
        ch6,
        "Chapter 6: Exponents and Powers",
        "g8-maths-ch06-exponents-powers",
        "Exponents and Powers",
        EXPONENTS_STEPS,
        EXPONENTS_A,
        EXPONENTS_B,
    )

    chapters = [
        (
            ch4,
            "g8-maths-algebra",
            "g8MathsAlgebra",
            {
                "id": "algebraic-expressions",
                "title": "Algebraic Expressions & Identities",
                "emoji": "𝑎²",
                "blurb": "Terms, products and identities",
                "topic": "linear-lite",
                "paperTopics": ["linear-lite", "fractions"],
            },
            lesson_ts(
                "Algebraic expressions",
                "𝑎²",
                "balance",
                "Expressions are built from terms. Identities give fast expansions and factors.",
                [
                    ("Terms", "Chunks joined by + or −", "🔢"),
                    ("Like terms", "Same variables and powers", "🔗"),
                    ("Products", "Distribute, then combine", "✖️"),
                    ("Identities", "(a±b)² and a²−b²", "✨"),
                ],
                {
                    "prompt": "(x + 2)(x + 3) = ?",
                    "options": [
                        ("a", "x² + 5x + 6"),
                        ("b", "x² + 6"),
                        ("c", "x² + 5"),
                        ("d", "2x + 5"),
                    ],
                    "answerId": "a",
                    "why": "FOIL gives x² + 3x + 2x + 6 = x² + 5x + 6.",
                },
                ["Count terms", "Combine like terms", "Use identities", "Sets ready"],
            ),
        ),
        (
            ch5,
            "g8-maths-mensuration",
            "g8MathsMensuration",
            {
                "id": "mensuration",
                "title": "Mensuration",
                "emoji": "📐",
                "blurb": "Area, surface area and volume",
                "topic": "multiply-basics",
                "paperTopics": ["multiply-basics", "fractions"],
            },
            lesson_ts(
                "Mensuration",
                "📐",
                "fraction-bar",
                "Area covers a surface. Volume fills a solid. Match the shape to its formula.",
                [
                    ("2D area", "Rectangles, triangles, circles", "⬛"),
                    ("Surface area", "Faces of cubes and cylinders", "📦"),
                    ("Volume", "Space inside a solid", "🧪"),
                    ("π recipes", "C = 2πr, A = πr²", "⭕"),
                ],
                {
                    "prompt": "Volume of a cube of edge 4 cm?",
                    "options": [
                        ("a", "16 cm³"),
                        ("b", "64 cm³"),
                        ("c", "48 cm³"),
                        ("d", "12 cm³"),
                    ],
                    "answerId": "b",
                    "why": "Volume = a³ = 4³ = 64 cm³.",
                },
                ["Pick the formula", "Watch units", "π with care", "Sets ready"],
            ),
        ),
        (
            ch6,
            "g8-maths-exponents",
            "g8MathsExponents",
            {
                "id": "exponents-powers",
                "title": "Exponents and Powers",
                "emoji": "10⁶",
                "blurb": "Laws of exponents and standard form",
                "topic": "multiply-basics",
                "paperTopics": ["multiply-basics", "fractions"],
            },
            lesson_ts(
                "Exponents and powers",
                "10⁶",
                "number-line",
                "Exponents shorten repeated multiplication. Laws let you simplify without expanding.",
                [
                    ("Same base ×", "Add the exponents", "➕"),
                    ("Same base ÷", "Subtract the exponents", "➖"),
                    ("Negative powers", "Mean reciprocals", "🔄"),
                    ("Standard form", "a × 10ⁿ", "🔭"),
                ],
                {
                    "prompt": "Simplify 5² × 5³",
                    "options": [
                        ("a", "5⁵"),
                        ("b", "5⁶"),
                        ("c", "25⁵"),
                        ("d", "5"),
                    ],
                    "answerId": "a",
                    "why": "Same base: add exponents, 2 + 3 = 5.",
                },
                ["Add / subtract exponents", "a⁰ = 1", "Standard form", "Sets ready"],
            ),
        ),
    ]

    all_hints: dict[str, list[str]] = {}
    total_q = 0
    for md_path, prefix, export, meta, lesson in chapters:
        md = md_path.read_text()
        a, b = maths_sets(md, prefix)
        if len(a) != 24 or len(b) != 24:
            raise SystemExit(f"{md_path.name}: expected 24+24, got {len(a)}+{len(b)}")
        emit_module(OUT / f"{prefix}.ts", export, meta, lesson, a, b)
        pool = {
            "g8-maths-algebra": "algebra",
            "g8-maths-mensuration": "mensuration",
            "g8-maths-exponents": "exponents",
        }[prefix]
        # Rebuild hint map from question banks for skill routing
        bank_a = {"g8-maths-algebra": ALGEBRA_A, "g8-maths-mensuration": MENSURATION_A, "g8-maths-exponents": EXPONENTS_A}[prefix]
        bank_b = {"g8-maths-algebra": ALGEBRA_B, "g8-maths-mensuration": MENSURATION_B, "g8-maths-exponents": EXPONENTS_B}[prefix]
        all_hints.update(hints_for(prefix, pool, bank_a, bank_b))
        total_q += len(a) + len(b)

    append_hints(all_hints)
    patch_catalog()
    patch_index()
    patch_manifest()
    print(f"DONE: {total_q} MCQs across 3 chapters")


if __name__ == "__main__":
    main()
