#!/usr/bin/env python3
"""Grade 10 Maths: Real Numbers, Polynomials, Pair of Linear Equations."""
from __future__ import annotations
import math
from fractions import Fraction
from .emit import q, emit_chapter, lesson_ts

def _gcd(a, b):
    while b:
        a, b = b, a % b
    return abs(a)


def real_numbers():
    A, B = [], []
    # Set A
    A.append(q(
        "Euclid's division lemma says that for positive integers a and b, there exist unique integers q and r such that a = bq + r, where —",
        ["0 ≤ r < b", "0 < r ≤ b", "r ≥ b", "r can be any integer"],
        "a", "The remainder r satisfies 0 ≤ r < b.", "Apply Euclid: remainder is non-negative and strictly less than the divisor."))
    A.append(q(
        "Using Euclid's algorithm, HCF(135, 225) equals —",
        ["15", "45", "9", "25"],
        "b", "225 = 135×1 + 90; 135 = 90×1 + 45; 90 = 45×2 + 0, so HCF = 45.", "Keep dividing the previous divisor by the remainder until remainder 0."))
    A.append(q(
        "If HCF(a, b) = 12 and a × b = 1800, then LCM(a, b) equals —",
        ["150", "120", "180", "240"],
        "a", "HCF × LCM = product of numbers, so LCM = 1800/12 = 150.", "Use HCF × LCM = a × b."))
    A.append(q(
        "The decimal expansion of 7/8 is —",
        ["0.875 (terminating)", "0.875 with bar (non-terminating)", "0.777…", "7.8"],
        "a", "8 = 2³, so the fraction has a terminating decimal 0.875.", "A rational has a terminating decimal iff denominator (in lowest terms) is of form 2ᵐ5ⁿ."))
    A.append(q(
        "Which of these is irrational?",
        ["√9", "√2", "0.25", "22/7"],
        "b", "√2 cannot be written as p/q; √9 = 3 is rational.", "Perfect-square roots are rational; non-perfect-square roots are irrational."))
    A.append(q(
        "√(4 × 9) equals —",
        ["6", "√13", "2√9", "36"],
        "a", "√(4×9) = √4 × √9 = 2 × 3 = 6.", "Use √(ab) = √a × √b for non-negative a, b."))
    A.append(q(
        "2√3 + 3√3 equals —",
        ["5√3", "5√6", "6√3", "√6"],
        "a", "Like surds add: (2+3)√3 = 5√3.", "Add coefficients of like radical terms."))
    A.append(q(
        "Rationalising the denominator of 1/√5 gives —",
        ["√5/5", "5/√5", "√5", "1/5"],
        "a", "Multiply by √5/√5: √5/5.", "Multiply numerator and denominator by the surd in the denominator."))
    A.append(q(
        "Which statement is true?",
        ["Every integer is a rational number", "Every rational is an integer", "√2 is rational", "π is rational"],
        "a", "Any integer n = n/1 is rational.", "Integers ⊂ rationals; irrationals like √2 and π are not rational."))
    A.append(q(
        "The prime factorisation of 140 is —",
        ["2² × 5 × 7", "2 × 5 × 14", "2³ × 5 × 7", "2² × 35"],
        "a", "140 = 2×70 = 2×2×35 = 2²×5×7.", "Factor completely into primes."))
    A.append(q(
        "If two positive integers p and q can be expressed as p = ab² and q = a³b (a, b primes), then LCM(p, q) is —",
        ["a³b²", "ab", "a²b²", "a³b³"],
        "a", "Take highest powers: a³ and b² → a³b².", "LCM uses the highest power of each prime."))
    A.append(q(
        "HCF of 96 and 404 is —",
        ["4", "8", "12", "16"],
        "a", "404 = 96×4 + 20; 96 = 20×4 + 16; 20 = 16×1 + 4; 16 = 4×4 + 0 → HCF = 4.", "Use Euclid's algorithm step by step."))
    A.append(q(
        "√8 / √2 simplifies to —",
        ["2", "4", "√4 / 1", "√6"],
        "a", "√8/√2 = √(8/2) = √4 = 2.", "Combine under one square root, then simplify."))
    A.append(q(
        "An irrational number between 2 and 3 is —",
        ["√5", "√4", "5/2", "2.5"],
        "a", "√5 ≈ 2.236 lies between 2 and 3; √4 = 2 is rational.", "Pick a non-perfect square whose root sits between the bounds."))
    A.append(q(
        "0.123123123… (repeating \"123\") as a fraction is —",
        ["123/999", "123/1000", "123/99", "12/99"],
        "a", "Let x = 0.\\overline{123}; 1000x − x = 123 → x = 123/999.", "For a 3-digit repeat, multiply by 10³ and subtract."))
    A.append(q(
        "The product of a non-zero rational and an irrational number is —",
        ["always irrational", "always rational", "always an integer", "sometimes zero"],
        "a", "e.g. 2×√3 = 2√3 is irrational (non-zero rational × irrational).", "A non-zero rational times an irrational stays irrational."))
    A.append(q(
        "√(50) in simplest form is —",
        ["5√2", "25√2", "2√5", "10√5"],
        "a", "√50 = √(25×2) = 5√2.", "Factor out the largest perfect square."))
    A.append(q(
        "If n is a natural number, then √n is —",
        ["either integer or irrational", "always rational", "always irrational", "always integer"],
        "a", "If n is a perfect square, √n is an integer; otherwise it is irrational.", "Perfect square → integer root; otherwise irrational."))
    A.append(q(
        "LCM of 12, 15 and 21 is —",
        ["420", "210", "180", "60"],
        "a", "12=2²×3, 15=3×5, 21=3×7 → LCM = 2²×3×5×7 = 420.", "Take highest power of each prime across all three."))
    A.append(q(
        "Which of the following has a non-terminating repeating decimal expansion?",
        ["1/6", "1/5", "3/8", "7/25"],
        "a", "6 = 2×3 has a prime factor other than 2 or 5, so 1/6 = 0.1̅6.", "Check the denominator's primes after simplifying."))
    A.append(q(
        "√3 × √12 equals —",
        ["6", "√36 / 2", "3√2", "√15"],
        "a", "√3 × √12 = √36 = 6.", "Multiply under one radical when both are non-negative."))
    A.append(q(
        "The HCF of two co-prime numbers is —",
        ["1", "0", "their product", "their sum"],
        "a", "Co-prime means they share no common prime factor, so HCF = 1.", "Co-prime ⇔ HCF is 1."))
    A.append(q(
        "If √2 = 1.414…, then √8 ≈ —",
        ["2.828", "1.414", "4.242", "3.162"],
        "a", "√8 = 2√2 ≈ 2×1.414 = 2.828.", "√8 = √(4×2) = 2√2."))
    A.append(q(
        "For positive integers a, b: HCF(a, b) × LCM(a, b) equals —",
        ["a × b", "a + b", "a − b", "a / b"],
        "a", "This is the fundamental relation between HCF and LCM of two positives.", "Remember: product of numbers = HCF × LCM."))

    # Set B — more applied / varied
    B.append(q(
        "Find HCF(867, 255) using Euclid's algorithm.",
        ["51", "17", "3", "85"],
        "a", "867 = 255×3 + 102; 255 = 102×2 + 51; 102 = 51×2 + 0 → HCF = 51.", "Remainders: 102, then 51, then 0."))
    B.append(q(
        "The least number divisible by 12, 16 and 20 is —",
        ["240", "120", "180", "60"],
        "a", "LCM(12,16,20) = 2⁴×3×5 = 240.", "Least common multiple of the three."))
    B.append(q(
        "√(18/50) simplifies to —",
        ["3/5", "9/25", "√18 / 50", "3√2 / 5√2"],
        "a", "√(18/50) = √(9/25) = 3/5.", "Simplify the fraction inside before taking the root."))
    B.append(q(
        "Which number is rational?",
        ["0.\\overline{3}", "√7", "π", "√2 + 1"],
        "a", "0.\\overline{3} = 1/3 is rational; the others are irrational.",
        "A repeating decimal can always be written as p/q."))
    B.append(q(
        "Using Euclid's algorithm, HCF(65, 117) = 13. Expressing 13 = 65x + 117y, one possible x is —",
        ["2", "−1", "3", "0"],
        "a", "Back-substitution gives 13 = 2×65 + (−1)×117, so x = 2.",
        "Work backwards from Euclid steps to write HCF as 65x+117y."))
    B.append(q(
        "The decimal 0.6̅ (0.666…) equals —",
        ["2/3", "6/10", "3/5", "1/6"],
        "a", "x=0.666…; 10x−x=6 → x=6/9=2/3.",
        "One repeating digit → multiply by 10 and subtract."))
    B.append(q(
        "√75 − √12 equals —",
        ["3√3", "√63", "√87", "7√3"],
        "a", "√75 = 5√3 and √12 = 2√3, so 5√3 − 2√3 = 3√3.",
        "Simplify each radical before subtracting."))
    B.append(q(
        "A number when divided by 61 gives remainder 37. What remainder does it leave when divided by 61 again after adding 24?",
        ["0", "37", "24", "61"],
        "a", "n = 61q+37; n+24 = 61q+61 = 61(q+1)+0 → remainder 0.", "Adding enough to reach the next multiple of the divisor clears the remainder."))
    B.append(q(
        "Which of the following is true for every prime p?",
        ["√p is irrational", "√p is rational", "p is even", "p divides 1"],
        "a", "For prime p, p is not a perfect square, so √p is irrational.", "Primes greater than 1 aren't perfect squares."))
    B.append(q(
        "The product (√5 − √2)(√5 + √2) equals —",
        ["3", "7", "√10", "√3"],
        "a", "Difference of squares: 5 − 2 = 3.", "Use (a−b)(a+b) = a² − b²."))
    B.append(q(
        "If n = 2³ × 3² × 5, how many trailing zeros does n have in base 10?",
        ["1", "2", "3", "0"],
        "a", "Trailing zeros need pairs of 2×5; only one factor 5 → one trailing zero.", "Count min(powers of 2, powers of 5) in the factorisation."))
    B.append(q(
        "Rationalise: 3/(√7 − √2).",
        ["3(√7+√2)/5", "3(√7−√2)/5", "3(√7+√2)/9", "(√7+√2)/5"],
        "a", "Multiply by √7+√2: numerator 3(√7+√2), denominator 7−2=5.", "Multiply by the conjugate of the denominator."))
    B.append(q(
        "The sum of a rational number and an irrational number is —",
        ["always irrational", "always rational", "always an integer", "sometimes undefined"],
        "a", "e.g. 2 + √3 is irrational.", "Rational + irrational = irrational."))
    B.append(q(
        "HCF(a, b) = 18 and LCM(a, b) = 756. If a = 108, then b = —",
        ["126", "162", "84", "216"],
        "a", "a×b = HCF×LCM → 108b = 18×756 = 13608 → b = 126.", "Use a×b = HCF×LCM and solve for b."))
    B.append(q(
        "√(0.09) equals —",
        ["0.3", "0.03", "0.9", "0.009"],
        "a", "√0.09 = √(9/100) = 3/10 = 0.3.", "Write as a fraction under the root."))
    B.append(q(
        "The smallest number by which 243 should be multiplied to get a perfect cube is —",
        ["3", "9", "27", "1"],
        "a", "243 = 3⁵; need one more 3 to make 3⁶ = (3²)³.", "Make all exponents in prime factors multiples of 3."))
    B.append(q(
        "Which expansion terminates?",
        ["13/3125", "17/6", "19/3", "11/14"],
        "a", "3125 = 5⁵, so 13/3125 terminates; others have 3 or 7 in the denominator.", "Denominator's primes must be only 2 and/or 5."))
    B.append(q(
        "√2 is approximately 1.41. Then 5/√2 ≈ —",
        ["3.55", "2.82", "7.05", "1.41"],
        "a", "5/√2 = (5√2)/2 ≈ 5×1.41/2 = 3.525 ≈ 3.55.", "Rationalise or compute 5×1.41/2."))
    B.append(q(
        "If p is prime, then √(p²) equals —",
        ["p", "p²", "√p", "1/p"],
        "a", "√(p²) = |p| = p for positive prime p.", "Square and square root cancel for non-negative values."))
    B.append(q(
        "Two numbers are in ratio 3:5 and their HCF is 8. Their LCM is —",
        ["120", "40", "24", "200"],
        "a", "Numbers 24 and 40; LCM = 8×3×5 = 120.", "Numbers = HCF × ratio parts; LCM = HCF × product of ratio parts (if co-prime parts)."))
    B.append(q(
        "√(9 + 16) equals —",
        ["5", "7", "√9 + √16", "25"],
        "a", "√25 = 5. Note √(9+16) ≠ √9+√16.", "Add inside first; roots don't distribute over addition."))
    B.append(q(
        "The fundamental theorem of arithmetic says every composite number —",
        ["can be expressed as a product of primes uniquely (up to order)", "has exactly two factors", "is even", "is a perfect square"],
        "a", "Unique prime factorisation (order ignored) is the fundamental theorem.", "Think unique prime factorisation."))
    B.append(q(
        "If √(x/y) = 4/5 and x + y = 82, then x − y equals —",
        ["−18", "18", "0", "32"],
        "a", "√(x/y)=4/5 → x/y=16/25 → x=16k, y=25k; 41k=82 → k=2; x−y=32−50=−18.", "Convert the root ratio to a square ratio, then use sum."))


    B.append(q(
        "If √(2) ≈ 1.414, then 1/(√2 − 1) rationalised and approximated is closest to —",
        ["2.414", "0.414", "1.414", "3.414"],
        "a", "1/(√2−1)·(√2+1)/(√2+1)=√2+1≈2.414.",
        "Multiply by the conjugate of the denominator."))

    lesson = lesson_ts(
        "Real Numbers", "🔢", "number-line",
        "Real numbers include rationals and irrationals. Euclid helps find HCF.",
        [("Euclid", "a = bq + r with 0 ≤ r < b", "➗"),
         ("HCF & LCM", "HCF × LCM = a × b", "🔗"),
         ("Decimals", "Terminate iff denom is 2ᵐ5ⁿ", "🔟"),
         ("Irrationals", "√2, π — not p/q", "∞")],
        {"prompt": "HCF(12, 18) × LCM(12, 18) equals?",
         "options": [("a", "216"), ("b", "30"), ("c", "6"), ("d", "36")],
         "answerId": "a", "why": "HCF=6, LCM=36, product 216 = 12×18."},
        ["Real-number toolkit", "Euclid for HCF", "Watch 2 and 5 for decimals", "Surds simplify by perfect squares"],
    )
    outline = """
### step_1: Euclid's lemma
- **tts**: Every pair of positives has a unique quotient and remainder with 0 ≤ r < b.
- **check**: Remainder when 17 is divided by 5? — Answer: 2

### step_2: HCF via Euclid
- **tts**: Replace the larger by the remainder until you hit zero.
- **check**: HCF(48, 18)? — Answer: 6

### step_3: Fundamental theorem
- **tts**: Composites factor into primes in essentially one way.
- **check**: Prime factors of 60? — Answer: 2²×3×5

### step_4: Terminating decimals
- **tts**: After simplifying, only 2 and 5 in the denominator means terminating.
- **check**: Does 7/8 terminate? — Answer: Yes
"""
    return emit_chapter(
        file="g10-maths-real-numbers.ts",
        export="g10MathsRealNumbers",
        doc="maths-ch01-real-numbers.md",
        meta={"id": "real-numbers", "title": "Real Numbers", "emoji": "🔢",
              "blurb": "Euclid, HCF/LCM & irrationals", "topic": "fractions",
              "paperTopics": ["fractions", "linear-lite"], "subjectLabel": "Maths"},
        lesson=lesson, set_a_raw=A, set_b_raw=B, prefix="g10-maths-real",
        lesson_outline=outline,
    )


def polynomials():
    A, B = [], []
    A.append(q("The degree of the polynomial 5x³ − 2x + 7 is —",
        ["3", "5", "1", "0"], "a", "Highest power of x with non-zero coefficient is 3.", "Degree = highest power with non-zero coefficient."))
    A.append(q("A zero of p(x) = x² − 5x + 6 is —",
        ["2", "5", "6", "−2"], "a", "p(2)=4−10+6=0. Factors (x−2)(x−3).", "Find x that makes p(x)=0; try factor pairs of 6."))
    A.append(q("If (x − 1) is a factor of x² + kx + 1, then k equals —",
        ["−2", "2", "1", "−1"], "a", "p(1)=0 → 1+k+1=0 → k=−2.", "Factor theorem: (x−a) factor ⇒ p(a)=0."))
    A.append(q("The remainder when x³ + 3x + 1 is divided by x − 1 is —",
        ["5", "1", "3", "0"], "a", "By remainder theorem, p(1)=1+3+1=5.", "Remainder on dividing by x−a is p(a)."))
    A.append(q("A quadratic polynomial with zeros 2 and −3 is —",
        ["x² + x − 6", "x² − x − 6", "x² + 5x − 6", "x² − 5x − 6"],
        "a", "Sum −1, product −6 → x² − (sum)x + product = x² + x − 6.", "Use x² − (sum)x + (product)."))
    A.append(q("If α and β are zeros of x² − 5x + 6, then α + β equals —",
        ["5", "6", "−5", "1"], "a", "Sum of zeros = −b/a = 5.", "For ax²+bx+c, sum = −b/a."))
    A.append(q("If α and β are zeros of x² − 5x + 6, then αβ equals —",
        ["6", "5", "−6", "1"], "a", "Product = c/a = 6.", "For ax²+bx+c, product = c/a."))
    A.append(q("The number of zeros of a cubic polynomial is at most —",
        ["3", "2", "1", "4"], "a", "A degree-n polynomial has at most n zeros.", "Degree bounds the number of roots."))
    A.append(q("p(x) = 2 is a polynomial of degree —",
        ["0", "1", "2", "undefined"], "a", "Non-zero constants are degree 0.", "Constant non-zero → degree 0."))
    A.append(q("If p(x) = x² − 2x − 8 and p(a) = 0, a possible value of a is —",
        ["4", "2", "8", "1"], "a", "(x−4)(x+2)=0 so a=4 or a=−2.", "Factor the quadratic to find zeros."))
    A.append(q("The graph of y = ax² + bx + c (a ≠ 0) is —",
        ["a parabola", "a straight line", "a circle", "a hyperbola"],
        "a", "Quadratic graphs are parabolas.", "Degree 2 → parabolic graph."))
    A.append(q("If one zero of x² + kx + 6 is 2, then k equals —",
        ["−5", "5", "−3", "3"], "a", "p(2)=0 → 4+2k+6=0 → 2k=−10 → k=−5. Other zero 3.", "Substitute the known zero into p(x)."))
    A.append(q("Division algorithm for polynomials: p(x) = g(x)·q(x) + r(x), where —",
        ["deg r < deg g (or r=0)", "deg r > deg g", "r = g", "deg r = deg p"],
        "a", "Remainder degree is less than divisor degree.", "Same idea as integer division: remainder smaller than divisor."))
    A.append(q("A linear polynomial has how many zeros?",
        ["exactly one", "two", "none", "infinitely many"],
        "a", "ax+b=0 has unique solution x=−b/a (a≠0).", "Degree 1 → exactly one root."))
    A.append(q("The zero of 3x − 6 is —",
        ["2", "−2", "3", "6"], "a", "3x−6=0 → x=2.", "Solve ax+b=0."))
    A.append(q("If α, β are zeros of 2x² − 3x + 1, then 1/α + 1/β equals —",
        ["3", "1/2", "2", "3/2"],
        "a", "1/α+1/β=(α+β)/αβ = (3/2)/(1/2)=3.", "Rewrite as (sum)/(product)."))
    A.append(q("Which is not a polynomial?",
        ["√x + 1", "x² + 1", "3", "x³ − x"],
        "a", "√x = x^{1/2} has non-integer exponent.", "Polynomials need non-negative integer powers only."))
    A.append(q("If (x+1) is a factor of x³ + 3x² + 3x + k, then k equals —",
        ["1", "−1", "0", "3"], "a", "p(−1)=−1+3−3+k=0 → k=1.", "Use factor theorem with x=−1."))
    A.append(q("Sum of zeros of 3x² − 5x + 2 is —",
        ["5/3", "2/3", "−5/3", "3/5"], "a", "−b/a = 5/3.", "Sum = −b/a."))
    A.append(q("Product of zeros of 3x² − 5x + 2 is —",
        ["2/3", "5/3", "−2/3", "3/2"], "a", "c/a = 2/3.", "Product = c/a."))
    A.append(q("If the zeros of a quadratic are equal, its discriminant is —",
        ["zero", "positive", "negative", "one"],
        "a", "Equal roots ⇔ b²−4ac = 0.", "Discriminant zero means repeated root."))
    A.append(q("p(x) = x³ − 1 factored over reals includes —",
        ["(x−1)(x²+x+1)", "(x+1)(x²−x+1)", "(x−1)³", "(x−1)(x+1)²"],
        "a", "x³−1=(x−1)(x²+x+1).", "Difference of cubes: a³−b³=(a−b)(a²+ab+b²)."))
    A.append(q("The coefficient of x in 4x³ − 3x + 7 is —",
        ["−3", "4", "7", "0"], "a", "The linear term is −3x.", "Read the coefficient of the x¹ term."))
    A.append(q("If α, β are zeros of x² − x − 2, then α² + β² equals —",
        ["5", "1", "4", "3"],
        "a", "α²+β²=(α+β)²−2αβ=1−2(−2)=5.", "Use (sum)² − 2(product)."))

    B.append(q("A cubic polynomial with zeros −1, 1 and 2 can be —",
        ["(x+1)(x−1)(x−2)", "(x−1)³", "x³+1", "x³−2"],
        "a", "Product of (x−zero) factors works (up to a constant).", "Build from (x − each zero)."))
    B.append(q("Remainder when 2x³ − 3x² + x − 1 is divided by x − 2 is —",
        ["5", "3", "1", "0"], "a", "p(2)=16−12+2−1=5.", "Remainder theorem: evaluate at 2."))
    B.append(q("If α + β = 5 and αβ = 6 for a quadratic monic polynomial, it is —",
        ["x² − 5x + 6", "x² + 5x + 6", "x² − 5x − 6", "x² + 5x − 6"],
        "a", "x² − (sum)x + product.", "Monic quadratic from sum and product."))
    B.append(q("The graph of y = (x−2)(x−3) cuts the x-axis at —",
        ["2 and 3", "only 2", "−2 and −3", "0 and 1"],
        "a", "Zeros are x=2 and x=3.", "x-intercepts are the zeros."))
    B.append(q("If p(x) = x² + 1, then p(x) has —",
        ["no real zero", "one real zero", "two real zeros", "infinitely many zeros"],
        "a", "x²+1≥1>0 for all real x.", "x² = −1 has no real solution."))
    B.append(q("On dividing x³ − 3x² + x + 2 by a polynomial g(x), the quotient and remainder were x−2 and −2x+4. Then g(x) is —",
        ["x² − x + 1", "x² + x + 1", "x² − x − 1", "x − 1"],
        "a", "p = gq + r → g = (p − r)/q. Verify: (x²−x+1)(x−2)+(−2x+4)=x³−3x²+x+2.",
        "Rearrange division algorithm: g = (p − r)/q."))
    B.append(q("If one zero of (k²+4)x² + 13x + 4k is reciprocal of the other, then k equals —",
        ["2", "−2", "4", "1"],
        "a", "Product of zeros = 1 ⇒ 4k/(k²+4)=1 ⇒ 4k=k²+4 ⇒ k²−4k+4=0 ⇒ (k−2)²=0.",
        "Reciprocal zeros ⇒ product = 1."))
    B.append(q("The quadratic polynomial whose sum of zeros is −3 and product is 2 is —",
        ["x² + 3x + 2", "x² − 3x + 2", "x² + 3x − 2", "x² − 3x − 2"],
        "a", "x² − (sum)x + product = x² + 3x + 2.", "Sum −3 means the middle sign is plus 3x."))
    B.append(q("For what value of a is (x + 1) a factor of x³ + x² − ax − a?",
        ["any real a", "only a = 0", "only a = 1", "no real a"],
        "a", "p(−1)=−1+1+a−a=0 for every a, so (x+1) is always a factor.",
        "Apply factor theorem: evaluate at x=−1."))
    B.append(q("deg(p·q) when p has degree 3 and q has degree 2 equals —",
        ["5", "6", "3", "2"], "a", "Degrees add under multiplication (leading coeffs non-zero).", "deg(pq)=deg p + deg q."))
    B.append(q("If α, β are zeros of x² − 6x + 8, then (α−β)² equals —",
        ["4", "16", "2", "36"],
        "a", "(α−β)²=(α+β)²−4αβ=36−32=4.", "Use (sum)² − 4(product)."))
    B.append(q("A polynomial of degree 4 can have at most how many zeros?",
        ["4", "5", "3", "1"],
        "a", "At most 4 real zeros for degree 4.", "Degree n ⇒ at most n zeros."))
    B.append(q("The constant term of (x − 2)(x + 3)(x − 1) is —",
        ["6", "−6", "2", "−2"],
        "a", "Product of the constants (−2)(3)(−1) = 6.",
        "Constant term = product of constant parts."))
    B.append(q("If p(x) = x² − 4x + 3, then p(1) equals —",
        ["0", "1", "3", "−1"],
        "a", "1 − 4 + 3 = 0, so x=1 is a zero.", "Substitute x=1 into the polynomial."))
    B.append(q("Which polynomial has (x−1) as a factor?",
        ["x³ − 1", "x² + 1", "x² + x + 1", "x² − x + 1"],
        "a", "1−1=0; others don't vanish at 1.", "Test p(1)=0."))
    B.append(q("Zeros of (x−1)(x−2) + (x−1)(x−3) are found by factoring (x−1). They are —",
        ["1 and 2.5", "1 and 2", "1 and 3", "2 and 3"],
        "a", "(x−1)[(x−2)+(x−3)]=(x−1)(2x−5); zeros 1 and 5/2.", "Factor out the common (x−1)."))
    B.append(q("If α, β are zeros of x² − 3x + 2, then α²β + αβ² equals —",
        ["6", "2", "3", "5"],
        "a", "αβ(α+β)=2×3=6.", "Factor as product × sum."))
    B.append(q("The leading coefficient of −7x⁴ + 3x − 1 is —",
        ["−7", "3", "−1", "4"], "a", "Leading coefficient is that of the highest degree term.", "Look at the highest power's coefficient."))
    B.append(q("If p(x) = 0 has roots 0 and 5, a possible quadratic is —",
        ["x(x−5)", "x² + 5", "x² − 5", "(x+5)²"],
        "a", "x(x−5)=x²−5x has zeros 0 and 5.", "Include factors x and (x−5)."))
    B.append(q("For p(x)=x²+1 and g(x)=x+1, the remainder on dividing p by g is —",
        ["2", "0", "1", "−1"], "a", "p(−1)=1+1=2.", "Remainder theorem with a=−1."))
    B.append(q("A quadratic with zeros reciprocal to those of x² − 3x + 2 is —",
        ["2x² − 3x + 1", "x² − 3x + 2", "x² + 3x + 2", "2x² + 3x + 1"],
        "a", "Original zeros 1,2; reciprocals 1, 1/2 → x²−(3/2)x+1/2 → multiply by 2: 2x²−3x+1.",
        "Swap sum/product roles carefully: new polynomial c x² + b x + a (reversed coeffs)."))
    B.append(q("If deg(p)=4 and deg(q)=2 and q divides p exactly, deg(p/q) equals —",
        ["2", "4", "6", "0"], "a", "Exact division: degrees subtract.", "deg(p/q)=deg p − deg q when q divides p."))
    B.append(q("The value of k for which x² + kx + 9 has equal zeros is —",
        ["±6", "±3", "±9", "±1"],
        "a", "Discriminant k²−36=0 → k=±6.", "Set discriminant to zero."))
    B.append(q("p(x)=x³−6x²+11x−6 has a zero at x=1. The quadratic factor is —",
        ["x² − 5x + 6", "x² − 6x + 11", "x² − x + 6", "x² + 5x + 6"],
        "a", "Synthetic division by (x−1) yields x²−5x+6.", "Divide out (x−1) after confirming p(1)=0."))

    lesson = lesson_ts(
        "Polynomials", "📈", "balance",
        "Polynomials have degrees, zeros, and factor/remainder theorems.",
        [("Degree", "Highest power with non-zero coeff", "📶"),
         ("Zeros", "p(α)=0", "🎯"),
         ("Factor theorem", "(x−a) factor ⇔ p(a)=0", "🧩"),
         ("Sum & product", "−b/a and c/a for quadratics", "➕")],
        {"prompt": "Remainder when x² − 3x + 2 is divided by x − 1?",
         "options": [("a", "0"), ("b", "2"), ("c", "1"), ("d", "−1")],
         "answerId": "a", "why": "p(1)=1−3+2=0, so (x−1) divides exactly."},
        ["Polynomial toolkit", "Degree & zeros", "Remainder = p(a)", "Quadratics: sum & product"],
    )
    outline = """
### step_1: Degree and zeros
- **tts**: Degree is the highest power. Zeros make the polynomial zero.
- **check**: Degree of 4x²+1? — Answer: 2

### step_2: Remainder and factor theorems
- **tts**: Divide by x−a and the remainder is p(a). If that is zero, x−a is a factor.
- **check**: Is x−2 a factor of x²−4? — Answer: Yes

### step_3: Quadratic relations
- **tts**: Sum and product of zeros link to coefficients.
- **check**: Sum of zeros of x²−5x+6? — Answer: 5
"""
    return emit_chapter(
        file="g10-maths-polynomials.ts",
        export="g10MathsPolynomials",
        doc="maths-ch02-polynomials.md",
        meta={"id": "polynomials", "title": "Polynomials", "emoji": "📈",
              "blurb": "Degree, zeros & factor theorem", "topic": "linear-lite",
              "paperTopics": ["linear-lite", "fractions"], "subjectLabel": "Maths"},
        lesson=lesson, set_a_raw=A, set_b_raw=B, prefix="g10-maths-poly",
        lesson_outline=outline,
    )


def linear_pair():
    A, B = [], []
    A.append(q("The graph of a linear equation in two variables is —",
        ["a straight line", "a parabola", "a circle", "a point only"],
        "a", "ax+by+c=0 graphs as a straight line.", "Two-variable linear ⇒ line."))
    A.append(q("The pair x + y = 5 and 2x + 2y = 10 has —",
        ["infinitely many solutions", "no solution", "unique solution", "exactly two solutions"],
        "a", "Second is 2× the first: coincident lines.", "Compare a1/a2, b1/b2, c1/c2."))
    A.append(q("The pair x + y = 5 and x + y = 7 has —",
        ["no solution", "unique solution", "infinitely many", "x=0 only"],
        "a", "Parallel distinct lines (same left side, different constants).", "a1/a2=b1/b2≠c1/c2 ⇒ inconsistent."))
    A.append(q("Solve: x + y = 7 and x − y = 1. Then (x, y) = —",
        ["(4, 3)", "(3, 4)", "(5, 2)", "(2, 5)"],
        "a", "Add: 2x=8 → x=4; y=3.", "Add/subtract to eliminate a variable."))
    A.append(q("For unique solution of a1x+b1y+c1=0 and a2x+b2y+c2=0 —",
        ["a1/a2 ≠ b1/b2", "a1/a2 = b1/b2 = c1/c2", "a1/a2 = b1/b2 ≠ c1/c2", "c1=c2=0"],
        "a", "Lines intersect at one point iff slopes differ: a1/a2 ≠ b1/b2.", "Unique ⇔ ratios of a and b differ."))
    A.append(q("From x = 2y + 1 into x + y = 7, y equals —",
        ["2", "3", "1", "4"],
        "a", "2y+1+y=7 → 3y=6 → y=2.",
        "Replace x, then solve the one-variable equation."))
    A.append(q("Elimination: 2x+3y=5 and 3x+2y=5. Adding after suitable multiply yields —",
        ["x=1, y=1", "x=2, y=−1", "x=0, y=5/3", "x=5, y=−5"],
        "a", "Multiply first×2, second×3: 4x+6y=10, 9x+6y=15; subtract: −5x=−5 → x=1; y=1.",
        "Make one coefficient match, then subtract."))
    A.append(q("The line x = 3 is —",
        ["parallel to the y-axis", "parallel to the x-axis", "the x-axis", "a circle"],
        "a", "x=3 is a vertical line, parallel to y-axis.", "Constant x ⇒ vertical line."))
    A.append(q("The equation y = 0 represents —",
        ["the x-axis", "the y-axis", "x=y", "origin only"],
        "a", "All points with y-coordinate 0 form the x-axis.", "y=0 is the horizontal axis."))
    A.append(q("If 3x + 2y = 12 intersects axes at A and B, OA·OB for origin O equals —",
        ["24", "12", "6", "18"],
        "a", "x-int 4, y-int 6; product 24.", "Intercepts: set other variable to 0."))
    A.append(q("Solve by elimination: 3x − y = 3 and 9x − 3y = 9. The system has —",
        ["infinitely many solutions", "no solution", "unique solution (1,0)", "unique solution (0,3)"],
        "a", "Second = 3× first: dependent equations.",
        "Check if one equation is a scalar multiple of the other."))
    A.append(q("The solution of x − 2y = 0 and 3x + 4y = 20 is —",
        ["(4, 2)", "(2, 4)", "(5, 2.5)", "(0, 0)"],
        "a", "x=2y; 6y+4y=20 → 10y=20 → y=2, x=4.", "Substitute x=2y into the second equation."))
    A.append(q("Graphically, inconsistent linear equations appear as —",
        ["parallel lines", "intersecting lines", "coincident lines", "perpendicular lines only"],
        "a", "No common point ⇒ parallel distinct lines.", "Inconsistent ⇔ parallel and distinct."))
    A.append(q("If am − bl ≠ 0 for equations ax+by=c, lx+my=n, the system has —",
        ["unique solution", "no solution", "infinitely many", "only x=0"],
        "a", "am−bl is the determinant a1b2−a2b1 (up to naming); non-zero ⇒ unique.",
        "Non-zero coefficient determinant ⇒ unique intersection."))
    A.append(q("The cost of 2 pens and 3 pencils is ₹40; 3 pens and 2 pencils is ₹45. Cost of one pen is —",
        ["₹11", "₹10", "₹9", "₹12"],
        "a", "2p+3c=40, 3p+2c=45. ×2 and ×3: 4p+6c=80, 9p+6c=135 → 5p=55 → p=11.",
        "Eliminate pencils, then solve for the pen cost."))
    A.append(q("y = 2x + 1 and y = 2x − 4 are —",
        ["parallel", "perpendicular", "coincident", "intersecting at one point"],
        "a", "Same slope 2, different intercepts ⇒ parallel.", "Compare slopes from slope-intercept form."))
    A.append(q("A pair of linear equations can represent —",
        ["all of: unique, none, or infinitely many solutions", "only unique solutions", "only integers", "only positive x"],
        "a", "Depending on ratios of coefficients.", "Three geometric cases: intersect, parallel, coincide."))
    A.append(q("If x = 1, y = 2 satisfies both equations of a pair, then that pair —",
        ["has at least the solution (1, 2)", "has no solution", "must have infinitely many", "cannot be linear"],
        "a", "A common point means at least one solution (could be unique or infinite).",
        "A verified common point is a solution of the system."))
    A.append(q("Reduce 2x + 3y − 9 = 0 and 4x + 6y − 18 = 0. Consistency?",
        ["dependent (infinite solutions)", "inconsistent", "unique (1,1)", "unique (0,3)"],
        "a", "Second = 2× first exactly.", "All three ratios equal ⇒ infinite solutions."))
    A.append(q("The point (0, 0) lies on ax + by + c = 0 if and only if —",
        ["c = 0", "a = 0", "b = 0", "a = b"],
        "a", "Plug (0,0): c=0.", "Origin on the line ⇔ constant term vanishes."))
    A.append(q("For equations x/2 + y/3 = 1 and x/3 + y/2 = 1, multiply by 6 to clear denominators. System becomes —",
        ["3x + 2y = 6 and 2x + 3y = 6", "x + y = 1 and x + y = 1", "3x+2y=1 and 2x+3y=1", "2x+3y=6 and 3x+2y=6"],
        "a", "×6: 3x+2y=6 and 2x+3y=6.", "Clear denominators with LCM of 2 and 3."))
    A.append(q("Solving 3x+2y=6 and 2x+3y=6 by elimination, x equals —",
        ["6/5", "1", "2", "3/5"],
        "a", "×3 and ×2: 9x+6y=18, 4x+6y=12 → 5x=6 → x=6/5.", "Eliminate y, solve for x."))
    A.append(q("A father's age is 3 times his son's. In 12 years, father will be twice the son. Present ages (father, son) —",
        ["(36, 12)", "(30, 10)", "(45, 15)", "(24, 8)"],
        "a", "f=3s; 3s+12=2(s+12) → 3s+12=2s+24 → s=12, f=36.", "Translate words to two linear equations."))

    B.append(q("The lines 2x − y − 3 = 0 and 4x − 2y − k = 0 are coincident for k = —",
        ["6", "3", "0", "12"],
        "a", "Need a1/a2=b1/b2=c1/c2 → 2/4=1/2=(−3)/(−k) → 1/2=3/k → k=6.",
        "For coincident lines all three coefficient ratios match."))
    B.append(q("For parallel lines 2x − y − 3 = 0 and 4x − 2y − k = 0, k ≠ —",
        ["6", "0", "3", "12"],
        "a", "Parallel when a1/a2=b1/b2≠c1/c2, so k≠6.", "Same slope ratio but different c ratio."))
    B.append(q("Solve: 0.2x + 0.3y = 1.3 and 0.4x + 0.5y = 2.3. Then x = —",
        ["2", "3", "1", "4"],
        "a", "×10: 2x+3y=13, 4x+5y=23. ×2 first: 4x+6y=26; subtract: y=3; 2x+9=13 → x=2.",
        "Clear decimals, then eliminate."))
    B.append(q("The area of the triangle formed by x=0, y=0 and 3x+4y=12 is —",
        ["6", "12", "24", "4"],
        "a", "Intercepts 4 and 3; area = (1/2)×4×3=6.", "Right triangle with legs on the axes."))
    B.append(q("If 2x + 3y = 17 and 3x − 2y = 6, then 2x + 3y + 3x − 2y equals —",
        ["23", "17", "6", "11"],
        "a", "Sum of left sides equals 17+6=23; simplifies to 5x+y.", "Adding equations adds the constants too."))
    B.append(q("A fraction becomes 1/2 if 1 is added to both numerator and denominator. It becomes 1/3 if 1 is subtracted from both. The fraction is —",
        ["3/7", "2/3", "3/5", "4/7"],
        "a", "From the two conditions, n=3 and d=7.",
        "Translate each story into a linear equation in n and d."))
    B.append(q("Taxi charges ₹15 for first km and ₹8 per additional km. For d km (d≥1), fare F satisfies —",
        ["F = 8d + 7", "F = 15d", "F = 8d + 15", "F = 7d + 8"],
        "a", "F=15+8(d−1)=8d+7.", "First kilometre at 15, rest at 8."))
    B.append(q("Two lines a1x+b1y+c1=0 and a2x+b2y+c2=0 are perpendicular if —",
        ["a1a2 + b1b2 = 0", "a1/a2 = b1/b2", "a1a2 = b1b2", "a1b2 − a2b1 = 0"],
        "a", "Slopes m1=−a1/b1, m2=−a2/b2; m1m2=−1 ⇒ a1a2+b1b2=0.", "Product of slopes = −1."))
    B.append(q("The solution set of 3x + 2y − 1 = 0 and 3x + 2y − 1 = 0 (same equation twice) is —",
        ["infinitely many points on the line", "empty", "only (1/3,0)", "only (0,1/2)"],
        "a", "Identical equations ⇒ every point of the line.", "Same line twice ⇒ dependent system."))
    B.append(q("Using matrices idea: for  x + y = 5, 2x − y = 4, adding gives —",
        ["3x = 9 so x=3, then y=2", "x=5", "y=4", "x=y=0"],
        "a", "Add: 3x=9 → x=3; from x+y=5, y=2.", "Elimination by adding."))
    B.append(q("Which ordered pair satisfies both x − y = 2 and 2x + y = 7?",
        ["(3, 1)", "(2, 0)", "(1, −1)", "(4, 2)"],
        "a", "3−1=2 and 6+1=7.", "Test each pair in both equations."))
    B.append(q("If the system kx + 2y = 5 and 3x + y = 1 has no solution, then k equals —",
        ["6", "3", "2", "0"],
        "a", "a1/a2=b1/b2≠c1/c2 → k/3 = 2/1 ⇒ k=6, and 5/1 ≠ that ratio for c.",
        "For no solution: a-ratio = b-ratio ≠ c-ratio."))
    B.append(q("Draw x + y = 4. It passes through —",
        ["(0,4) and (4,0)", "(0,0) only", "(2,3)", "(1,1) only"],
        "a", "Axis intercepts are 4 and 4.", "Find intercepts by zeroing each variable."))
    B.append(q("In the graphical method, the solution of a consistent independent pair is —",
        ["the intersection point of the two lines", "any point on either line", "the midpoint of intercepts", "origin"],
        "a", "Unique solution = unique intersection.", "Read coordinates where the lines cross."))
    B.append(q("Solve: x + 2y = 5 and 3x + 2y = 11. Then x equals —",
        ["3", "2", "1", "5"],
        "a", "Subtract: 2x=6 → x=3; then y=1.", "Subtract to eliminate y."))
    B.append(q("The pair  √2 x + √3 y = 0 and √3 x − √2 y = 0 has —",
        ["unique solution (0,0)", "infinite solutions", "no solution", "solution (1,1)"],
        "a", "Determinant  −2−3=−5≠0, only trivial solution.", "Homogeneous with non-zero determinant ⇒ only (0,0)."))
    B.append(q("Five years ago, a man was seven times as old as his son. After five years he will be three times as old. Present ages (man, son) —",
        ["(40, 10)", "(35, 5)", "(42, 12)", "(30, 10)"],
        "a", "m−5=7(s−5); m+5=3(s+5). From first m=7s−30; plug: 7s−30+5=3s+15 → 4s=40 → s=10, m=40.",
        "Set two equations from the two time frames."))
    B.append(q("For what value of k do the equations 2x − y = 3 and 4x − ky = 6 represent coincident lines?",
        ["2", "4", "1", "0"],
        "a", "Need 2/4 = 1/k = 3/6 → k=2.",
        "Set all three coefficient ratios equal."))
    B.append(q("The distance between parallel lines 3x + 4y − 5 = 0 and 3x + 4y − 15 = 0 is —",
        ["2", "10", "1", "5"],
        "a", "|−5−(−15)|/5 = 10/5=2.", "Distance |c1−c2|/√(a²+b²) for same a,b."))
    B.append(q("A chemist has two solutions: 20% and 50% acid. How much of each to make 10 L of 35%? Let x = litres of 20%. Then —",
        ["x=5, (10−x)=5", "x=3.5", "x=7", "x=2"],
        "a", "0.2x+0.5(10−x)=3.5 → 2−0.3x=3.5? 0.2x+5−0.5x=3.5 → 5−0.3x=3.5 → 0.3x=1.5 → x=5.",
        "Acid balance: percent × volume."))
    B.append(q("Which system is inconsistent?",
        ["x+y=2 and 2x+2y=5", "x+y=2 and 2x+2y=4", "x+y=2 and x−y=0", "x=1 and y=2"],
        "a", "Second would need =4 to match; 5 makes parallel distinct lines.", "Same a,b ratios, different c."))
    B.append(q("The value of k for which the system x + 2y = 3 and 5x + ky = 15 has infinitely many solutions is —",
        ["10", "5", "3", "15"],
        "a", "1/5 = 2/k = 3/15 → k=10.",
        "Infinite solutions when all three ratios are equal."))


    A.append(q(
        "The pair  x = 2 and y = 3 represents —",
        ["two lines parallel to the axes intersecting at (2, 3)", "a single line", "a circle", "no graph"],
        "a", "x=2 is vertical; y=3 is horizontal; they meet at (2,3).",
        "Each equation alone is a line parallel to an axis."))
    B.append(q(
        "If 3x + 4y = 10 and 6x + 8y = 20, the system has —",
        ["infinitely many solutions", "no solution", "unique solution (2,1)", "unique solution (0,0)"],
        "a", "Second equation is exactly twice the first.",
        "Equal coefficient ratios including c ⇒ dependent."))
    B.append(q(
        "Solve: 5x − 2y = 4 and 3x + y = 9. Then y equals —",
        ["3", "1", "2", "0"],
        "a", "From second y=9−3x; 5x−2(9−3x)=4 → 5x−18+6x=4 → 11x=22 → x=2; y=3.",
        "Substitute y from one equation into the other."))

    lesson = lesson_ts(
        "Pair of Linear Equations", "⚖️", "balance",
        "Two lines can meet once, never, or everywhere along a line.",
        [("Unique", "a1/a2 ≠ b1/b2", "✖️"),
         ("None", "a1/a2 = b1/b2 ≠ c1/c2", "🚫"),
         ("Infinite", "a1/a2 = b1/b2 = c1/c2", "♾️"),
         ("Methods", "Graph, substitute, eliminate", "🛠️")],
        {"prompt": "x + y = 6 and x − y = 2. What is x?",
         "options": [("a", "4"), ("b", "2"), ("c", "6"), ("d", "3")],
         "answerId": "a", "why": "Add the equations: 2x = 8, so x = 4."},
        ["Linear pairs unlocked", "Three consistency cases", "Eliminate or substitute", "Check by plugging back"],
    )
    outline = """
### step_1: Graphs of lines
- **tts**: Each linear equation is a straight line. Solutions are common points.
- **check**: How many intersections can two distinct lines have? — Answer: 0 or 1

### step_2: Consistency conditions
- **tts**: Compare ratios of coefficients to classify the system.
- **check**: x+y=1 and 2x+2y=2 — Answer: Infinite solutions

### step_3: Algebraic methods
- **tts**: Substitution and elimination find the intersection without graphing.
- **check**: x+y=5, x−y=1 → x? — Answer: 3
"""
    return emit_chapter(
        file="g10-maths-linear-pair.ts",
        export="g10MathsLinearPair",
        doc="maths-ch03-linear-equations.md",
        meta={"id": "linear-pair", "title": "Pair of Linear Equations", "emoji": "⚖️",
              "blurb": "Two lines, three outcomes", "topic": "linear-lite",
              "paperTopics": ["linear-lite", "fractions"], "subjectLabel": "Maths"},
        lesson=lesson, set_a_raw=A, set_b_raw=B, prefix="g10-maths-linear",
        lesson_outline=outline,
    )


def build_all():
    h = {}
    h.update(real_numbers())
    h.update(polynomials())
    h.update(linear_pair())
    return h
