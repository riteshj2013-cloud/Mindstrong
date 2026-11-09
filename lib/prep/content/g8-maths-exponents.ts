import type { ChapterDef, PrepQuestion } from "../types";
import { g8MathsExponentsAchievers } from "./g8-maths-exponents-achievers";

/** Exponents and Powers - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-maths-exponents-a-q01",
    prompt: "What is 2\u00b3?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "6" },
      { id: "c", text: "9" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "2³ = 2 × 2 × 2 = 8. 9 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 9 rather than 8.",
    hints: ["2³ means 2 multiplied by itself three times. Work out 2 × 2 first."]
  },
  {
    id: "g8-maths-exponents-a-q02",
    prompt: "5\u00b2 \u00d7 5\u00b3 = ?",
    options: [
      { id: "a", text: "5\u2076" },
      { id: "b", text: "5\u2075" },
      { id: "c", text: "25\u2075" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "Same base: add exponents, 2 + 3 = 5. 5⁶ is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 5⁶ rather than 5⁵.",
    hints: ["Same base 5: when multiplying, add the exponents 2 and 3."]
  },
  {
    id: "g8-maths-exponents-a-q03",
    prompt: "a\u2076 \u00f7 a\u00b2 = ?",
    options: [
      { id: "a", text: "a\u00b3" },
      { id: "b", text: "a\u2078" },
      { id: "c", text: "a\u2074" },
      { id: "d", text: "a\u00b9\u00b2" }
    ],
    answerId: "c",
    explanation: "Same base: subtract exponents, 6 − 2 = 4. a³ is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing a³ rather than a⁴.",
    hints: ["Same base a: when dividing a⁶ by a², subtract the exponents."]
  },
  {
    id: "g8-maths-exponents-a-q04",
    prompt: "(3\u00b2)\u00b3 = ?",
    options: [
      { id: "a", text: "3\u2076" },
      { id: "b", text: "3\u2075" },
      { id: "c", text: "9\u00b3" },
      { id: "d", text: "3\u2079" }
    ],
    answerId: "a",
    explanation: "Power of a power: multiply exponents, 2 × 3 = 6. 3⁵ is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 3⁵ rather than 3⁶.",
    hints: ["For a power of a power, multiply the exponents 2 and 3. Keep the base 3."]
  },
  {
    id: "g8-maths-exponents-a-q05",
    prompt: "What is a\u2070 for a \u2260 0?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "a" },
      { id: "d", text: "Undefined" }
    ],
    answerId: "b",
    explanation: "Any non-zero number to the power 0 equals 1. 0 is tempting if you think a non-zero number to the power 0 is the number itself or zero; by definition it equals 1.",
    hints: ["Think of a² ÷ a² = a⁰. What is any non-zero number divided by itself?"]
  },
  {
    id: "g8-maths-exponents-a-q06",
    prompt: "2\u207b\u00b3 equals\u2026",
    options: [
      { id: "a", text: "\u22128" },
      { id: "b", text: "\u22126" },
      { id: "c", text: "1/8" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "2⁻³ = 1/2³ = 1/8. −8 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing −8 rather than 1/8.",
    hints: ["A negative exponent means a reciprocal: 2⁻³ = 1 ÷ 2³."]
  },
  {
    id: "g8-maths-exponents-a-q07",
    prompt: "Which is equal to 10\u207b\u00b2?",
    options: [
      { id: "a", text: "0.1" },
      { id: "b", text: "100" },
      { id: "c", text: "\u2212100" },
      { id: "d", text: "0.01" }
    ],
    answerId: "d",
    explanation: "10⁻² = 1/100 = 0.01. 0.1 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 0.1 rather than 0.01.",
    hints: ["10⁻² = 1 ÷ 10². Work out 10², then divide 1 by it."]
  },
  {
    id: "g8-maths-exponents-a-q08",
    prompt: "(\u22122)\u2074 = ?",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "\u221216" },
      { id: "c", text: "\u22128" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "Even power of a negative is positive: 16. −8 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing −8 rather than 16.",
    hints: ["Multiply −2 by itself four times. An even number of negative factors gives a positive."]
  },
  {
    id: "g8-maths-exponents-a-q09",
    prompt: "Simplify: 3\u2074 \u00d7 3\u207b\u00b2",
    options: [
      { id: "a", text: "3\u2076" },
      { id: "b", text: "3\u00b2" },
      { id: "c", text: "3\u207b\u2078" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "Add exponents: 4 + (−2) = 2, so 3². 3⁶ is tempting if you mix up whether to add or multiply exponents on the bases in “Simplify”, producing 3⁶ rather than 3².",
    hints: ["Same base 3: add the exponents 4 and −2."]
  },
  {
    id: "g8-maths-exponents-a-q10",
    prompt: "Express 1/81 as a power of 3.",
    options: [
      { id: "a", text: "3\u2074" },
      { id: "b", text: "3\u207b\u2074" },
      { id: "c", text: "9\u207b\u00b2" },
      { id: "d", text: "Both 3\u207b\u2074 and 9\u207b\u00b2" }
    ],
    answerId: "d",
    explanation: "81 = 3⁴ = 9², so 1/81 = 3⁻⁴ = 9⁻². 3⁴ is tempting if you mix up whether to add or multiply exponents on the bases in “Express / power”, producing 3⁴ rather than Both 3⁻⁴ and 9⁻².",
    hints: ["81 is 3⁴. Can 81 also be written as the square of a whole number? A reciprocal flips the sign of the exponent."]
  },
  {
    id: "g8-maths-exponents-a-q11",
    prompt: "Simplify: (2\u00b3 \u00d7 2\u2075) \u00f7 2\u2074",
    options: [
      { id: "a", text: "2\u00b9\u00b2" },
      { id: "b", text: "2\u00b2" },
      { id: "c", text: "2\u2074" },
      { id: "d", text: "2\u2078" }
    ],
    answerId: "c",
    explanation: "2⁸ ÷ 2⁴ = 2⁴. 2¹² is tempting if you mix up whether to add or multiply exponents on the bases in “Simplify”, producing 2¹² rather than 2⁴.",
    hints: ["Add the exponents 3 and 5 inside the bracket first, then subtract the divisor's exponent."]
  },
  {
    id: "g8-maths-exponents-a-q12",
    prompt: "(5\u00b2)\u00b3 \u00d7 5\u207b\u2074 = ?",
    options: [
      { id: "a", text: "5\u2075" },
      { id: "b", text: "5\u2076" },
      { id: "c", text: "5\u207b\u00b2" },
      { id: "d", text: "5\u00b2" }
    ],
    answerId: "d",
    explanation: "5⁶ × 5⁻⁴ = 5². 5⁵ is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 5⁵ rather than 5².",
    hints: ["Multiply the exponents in the power of a power first, then add −4 for the multiplication by 5⁻⁴."]
  },
  {
    id: "g8-maths-exponents-a-q13",
    prompt: "Which is larger: 2\u2075 or 5\u00b2?",
    options: [
      { id: "a", text: "2\u2075" },
      { id: "b", text: "5\u00b2" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "a",
    explanation: "2⁵ = 32 and 5² = 25, so 2⁵ is larger. 5² is tempting if you mix up whether to add or multiply exponents on the bases in “larger”, producing 5² rather than 2⁵.",
    hints: ["Work out both powers as ordinary numbers: multiply 2 five times, and 5 two times."]
  },
  {
    id: "g8-maths-exponents-a-q14",
    prompt: "Simplify: (x\u00b2)\u00b3 \u00f7 x\u2074",
    options: [
      { id: "a", text: "x\u2075" },
      { id: "b", text: "x\u00b2" },
      { id: "c", text: "x\u2076" },
      { id: "d", text: "x" }
    ],
    answerId: "b",
    explanation: "x⁶ ÷ x⁴ = x². x⁵ is tempting if you mix up whether to add or multiply exponents on the bases in “Simplify”, producing x⁵ rather than x².",
    hints: ["Multiply the exponents for the power of a power first, then subtract the exponent of x⁴."]
  },
  {
    id: "g8-maths-exponents-a-q15",
    prompt: "Write 0.00056 in standard form.",
    options: [
      { id: "a", text: "5.6 \u00d7 10\u207b\u00b3" },
      { id: "b", text: "56 \u00d7 10\u207b\u2075" },
      { id: "c", text: "5.6 \u00d7 10\u207b\u2074" },
      { id: "d", text: "5.6 \u00d7 10\u2074" }
    ],
    answerId: "c",
    explanation: "Move the point 4 places: 5.6 × 10⁻⁴. 5.6 × 10⁴ is tempting if you mix up whether to add or multiply exponents on the bases in “Write / standard / form”, producing 5.6 × 10⁴ rather than 5.6 × 10⁻⁴.",
    hints: ["Move the decimal point of 0.00056 right until one non-zero digit is before it. Count the moves; the power of 10 is negative."]
  },
  {
    id: "g8-maths-exponents-a-q16",
    prompt: "Write 3.2 \u00d7 10\u2075 as an ordinary number.",
    options: [
      { id: "a", text: "32000" },
      { id: "b", text: "3200" },
      { id: "c", text: "0.000032" },
      { id: "d", text: "320000" }
    ],
    answerId: "d",
    explanation: "Move the point 5 places right: 320000. 32000 is tempting if you mix up whether to add or multiply exponents on the bases in “Write / ordinary”, producing 32000 rather than 320000.",
    hints: ["×10⁵ moves the decimal point of 3.2 five places to the right. Fill the gaps with zeros."]
  },
  {
    id: "g8-maths-exponents-a-q17",
    prompt: "(\u22123)\u207b\u00b2 equals\u2026",
    options: [
      { id: "a", text: "1/9" },
      { id: "b", text: "\u22129" },
      { id: "c", text: "\u22121/9" },
      { id: "d", text: "9" }
    ],
    answerId: "a",
    explanation: "(−3)⁻² = 1/(−3)² = 1/9. −9 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing −9 rather than 1/9.",
    hints: ["A negative exponent means a reciprocal: (−3)⁻² = 1 ÷ (−3)². Square −3 first."]
  },
  {
    id: "g8-maths-exponents-a-q18",
    prompt: "Simplify: (2/3)\u207b\u00b2",
    options: [
      { id: "a", text: "4/9" },
      { id: "b", text: "9/4" },
      { id: "c", text: "\u22124/9" },
      { id: "d", text: "2/3" }
    ],
    answerId: "b",
    explanation: "(2/3)⁻² = (3/2)² = 9/4. 4/9 is tempting if you double 2 to reach 4/9 instead of the working that gives 9/4.",
    hints: ["A negative exponent flips the fraction 2/3, then the power 2 squares top and bottom."]
  },
  {
    id: "g8-maths-exponents-a-q19",
    prompt: "If 2\u02e3 = 32, then x = ?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "5" },
      { id: "d", text: "16" }
    ],
    answerId: "c",
    explanation: "32 = 2⁵, so x = 5. 4 is tempting if you multiply the base by the exponent (or square instead of cubing); repeated multiplication of the base gives 5.",
    hints: ["Keep doubling: 2, 4, 8, 16, … Count how many 2s multiply together to make 32."]
  },
  {
    id: "g8-maths-exponents-a-q20",
    prompt: "Simplify: (3\u2075 \u00d7 3\u207b\u00b2) \u00f7 3\u00b3",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "3\u00b2" },
      { id: "c", text: "3\u207b\u00b9" },
      { id: "d", text: "1" }
    ],
    answerId: "d",
    explanation: "3³ ÷ 3³ = 3⁰ = 1. 3 is tempting if you mix up whether to add or multiply exponents on the bases in “Simplify”, producing 3 rather than 1.",
    hints: ["Add the exponents 5 and −2, then subtract 3. What is any non-zero number to the power 0?"]
  },
  {
    id: "g8-maths-exponents-a-q21",
    prompt: "(\u221a16)\u00b3 = ?",
    options: [
      { id: "a", text: "64" },
      { id: "b", text: "8" },
      { id: "c", text: "12" },
      { id: "d", text: "48" }
    ],
    answerId: "a",
    explanation: "√16 = 4; 4³ = 64. 8 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 8 rather than 64.",
    hints: ["First find √16, then cube it by multiplying it by itself three times."]
  },
  {
    id: "g8-maths-exponents-a-q22",
    prompt: "Express (5\u00b3 \u00f7 5\u2075) \u00d7 5\u00b2 as a single power of 5.",
    options: [
      { id: "a", text: "5\u00b2" },
      { id: "b", text: "5\u2070" },
      { id: "c", text: "5\u207b\u00b2" },
      { id: "d", text: "5\u2074" }
    ],
    answerId: "b",
    explanation: "(5³ ÷ 5⁵) × 5² = 5^{3−5+2} = 5⁰. 5² is tempting if you cancel 5⁵ against 5³ and keep only the leftover ×5² factor.",
    hints: ["Subtract exponents for the division, 3 − 5, then add the exponent 2 for the multiplication."]
  },
  {
    id: "g8-maths-exponents-a-q23",
    prompt: "Which equals 8\u207b\u00b2/\u00b3?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "\u22124" },
      { id: "c", text: "1/4" },
      { id: "d", text: "1/64" }
    ],
    answerId: "c",
    explanation: "8¹/³ = 2, so 8²/³ = 4 and 8⁻²/³ = 1/4. 4 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 4 rather than 1/4.",
    hints: ["Find the cube root of 8 first, then square it. The negative sign means take the reciprocal."]
  },
  {
    id: "g8-maths-exponents-a-q24",
    prompt: "Simplify: (10\u00b3 \u00d7 10\u207b\u2075) \u00f7 10\u207b\u2074",
    options: [
      { id: "a", text: "10\u2070" },
      { id: "b", text: "10\u207b\u2076" },
      { id: "c", text: "10\u2074" },
      { id: "d", text: "10\u00b2" }
    ],
    answerId: "d",
    explanation: "First 10³ × 10⁻⁵ = 10^{3+(−5)} = 10⁻². Then 10⁻² ÷ 10⁻⁴ = 10^{(−2)−(−4)} = 10². 10⁻⁶ is tempting if you add the divisor's exponent −4 instead of subtracting it (thinking ÷ means add exponents).",
    hints: ["Add the exponents 3 and −5, then subtract −4. Subtracting a negative exponent adds."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-maths-exponents-b-q01",
    prompt: "What is 3\u2074?",
    options: [
      { id: "a", text: "81" },
      { id: "b", text: "12" },
      { id: "c", text: "64" },
      { id: "d", text: "27" }
    ],
    answerId: "a",
    explanation: "3⁴ = 3 × 3 × 3 × 3 = 81. 64 is tempting if you compute 4³ (or 8²) instead of four factors of 3; repeated multiplication of the base gives 81.",
    hints: ["3⁴ means 3 × 3 × 3 × 3. Work it out in steps: 3 × 3 first."]
  },
  {
    id: "g8-maths-exponents-b-q02",
    prompt: "7\u00b9 \u00d7 7\u2074 = ?",
    options: [
      { id: "a", text: "7\u2074" },
      { id: "b", text: "7\u2075" },
      { id: "c", text: "49\u2075" },
      { id: "d", text: "7" }
    ],
    answerId: "b",
    explanation: "Add exponents: 1 + 4 = 5. 7⁴ is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 7⁴ rather than 7⁵.",
    hints: ["Same base 7: when multiplying, add the exponents 1 and 4."]
  },
  {
    id: "g8-maths-exponents-b-q03",
    prompt: "b\u2079 \u00f7 b\u00b3 = ?",
    options: [
      { id: "a", text: "b\u00b3" },
      { id: "b", text: "b\u00b9\u00b2" },
      { id: "c", text: "b\u2076" },
      { id: "d", text: "b\u00b2\u2077" }
    ],
    answerId: "c",
    explanation: "Subtract exponents: 9 − 3 = 6. b³ is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing b³ rather than b⁶.",
    hints: ["Same base b: when dividing, subtract the exponents 9 and 3."]
  },
  {
    id: "g8-maths-exponents-b-q04",
    prompt: "(4\u00b2)\u00b2 = ?",
    options: [
      { id: "a", text: "4\u2074" },
      { id: "b", text: "4\u00b2" },
      { id: "c", text: "8\u00b2" },
      { id: "d", text: "16\u00b2" }
    ],
    answerId: "a",
    explanation: "Multiply exponents: 2 × 2 = 4. 4² is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 4² rather than 4⁴.",
    hints: ["For a power of a power, multiply the exponents. Keep the base 4."]
  },
  {
    id: "g8-maths-exponents-b-q05",
    prompt: "(\u22125)\u2070 = ?",
    options: [
      { id: "a", text: "\u22125" },
      { id: "b", text: "1" },
      { id: "c", text: "0" },
      { id: "d", text: "\u22121" }
    ],
    answerId: "b",
    explanation: "Any non-zero number to the power 0 is 1. 0 is tempting if you think a non-zero number to the power 0 is the number itself or zero; by definition it equals 1.",
    hints: ["Any non-zero base to the power 0 follows a single rule, even −5. Think of (−5)² ÷ (−5)²."]
  },
  {
    id: "g8-maths-exponents-b-q06",
    prompt: "4\u207b\u00b2 equals\u2026",
    options: [
      { id: "a", text: "\u221216" },
      { id: "b", text: "\u22121/16" },
      { id: "c", text: "1/16" },
      { id: "d", text: "16" }
    ],
    answerId: "c",
    explanation: "4⁻² = 1/4² = 1/16. −16 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing −16 rather than 1/16, noticing equals.",
    hints: ["A negative exponent means a reciprocal: 4⁻² = 1 ÷ 4²."]
  },
  {
    id: "g8-maths-exponents-b-q07",
    prompt: "10\u00b3 equals\u2026",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "100" },
      { id: "c", text: "10000" },
      { id: "d", text: "1000" }
    ],
    answerId: "d",
    explanation: "10³ = 10 × 10 × 10 = 1000. 100 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 100 rather than 1000, noticing equals.",
    hints: ["10³ means 10 × 10 × 10. Each extra 10 adds a zero."]
  },
  {
    id: "g8-maths-exponents-b-q08",
    prompt: "(\u22121)\u2079\u2077 = ?",
    options: [
      { id: "a", text: "\u22121" },
      { id: "b", text: "1" },
      { id: "c", text: "0" },
      { id: "d", text: "97" }
    ],
    answerId: "a",
    explanation: "Odd power of −1 is −1. 0 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 0 rather than −1.",
    hints: ["Is 97 odd or even? An odd number of negative factors gives a negative product."]
  },
  {
    id: "g8-maths-exponents-b-q09",
    prompt: "Simplify: 2\u2075 \u00d7 2\u207b\u2075",
    options: [
      { id: "a", text: "2\u00b9\u2070" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "The correct answer is 1. 0 is tempting if you subtract 2 and 2 in the order that yields 0 instead of the path to 1.",
    hints: ["Add the exponents 5 and −5. What is any non-zero number to that power?"]
  },
  {
    id: "g8-maths-exponents-b-q10",
    prompt: "1/25 as a power of 5 is\u2026",
    options: [
      { id: "a", text: "5\u00b2" },
      { id: "b", text: "5\u207b\u00b2" },
      { id: "c", text: "25\u207b\u00b9" },
      { id: "d", text: "Both 5\u207b\u00b2 and 25\u207b\u00b9" }
    ],
    answerId: "d",
    explanation: "25 = 5², so 1/25 = 5⁻² = 25⁻¹. 5² is tempting if you mix up whether to add or multiply exponents on the bases in “power”, producing 5² rather than Both 5⁻² and 25⁻¹.",
    hints: ["Write the denominator as a power of 5. A reciprocal flips the sign of the exponent, and any number on its own has exponent 1."]
  },
  {
    id: "g8-maths-exponents-b-q11",
    prompt: "Simplify: (3\u2074 \u00d7 3\u00b2) \u00f7 3\u00b3",
    options: [
      { id: "a", text: "3\u2075" },
      { id: "b", text: "3\u2078" },
      { id: "c", text: "3\u00b3" },
      { id: "d", text: "3" }
    ],
    answerId: "c",
    explanation: "3⁶ ÷ 3³ = 3³. 3⁵ is tempting if you mix up whether to add or multiply exponents on the bases in “Simplify”, producing 3⁵ rather than 3³.",
    hints: ["Add the exponents 4 and 2 inside the bracket, then subtract the divisor's exponent."]
  },
  {
    id: "g8-maths-exponents-b-q12",
    prompt: "(2\u00b3)\u2074 \u00d7 2\u207b\u2076 = ?",
    options: [
      { id: "a", text: "2\u00b9\u00b2" },
      { id: "b", text: "2\u207b\u2076" },
      { id: "c", text: "2\u00b9\u2078" },
      { id: "d", text: "2\u2076" }
    ],
    answerId: "d",
    explanation: "2¹² × 2⁻⁶ = 2⁶. 2¹² is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 2¹² rather than 2⁶.",
    hints: ["First (2³)⁴: multiply the exponents. Then add −6 for the multiplication by 2⁻⁶."]
  },
  {
    id: "g8-maths-exponents-b-q13",
    prompt: "Which is smaller: 3\u2074 or 4\u00b3?",
    options: [
      { id: "a", text: "4\u00b3" },
      { id: "b", text: "3\u2074" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "a",
    explanation: "3⁴ = 81 and 4³ = 64, so 4³ is smaller. 3⁴ is tempting if you mix up whether to add or multiply exponents on the bases in “smaller”, producing 3⁴ rather than 4³.",
    hints: ["Work out both powers as ordinary numbers: multiply 3 four times, and 4 three times."]
  },
  {
    id: "g8-maths-exponents-b-q14",
    prompt: "Simplify: (y\u00b3)\u2074 \u00f7 y\u2078",
    options: [
      { id: "a", text: "y\u00b9\u00b2" },
      { id: "b", text: "y\u2074" },
      { id: "c", text: "y\u2075" },
      { id: "d", text: "y" }
    ],
    answerId: "b",
    explanation: "y¹² ÷ y⁸ = y⁴. y¹² is tempting if you mix up whether to add or multiply exponents on the bases in “Simplify”, producing y¹² rather than y⁴.",
    hints: ["Multiply the exponents for the power of a power, then subtract 8 for the division by y⁸."]
  },
  {
    id: "g8-maths-exponents-b-q15",
    prompt: "Standard form of 720000 is\u2026",
    options: [
      { id: "a", text: "72 \u00d7 10\u2074" },
      { id: "b", text: "7.2 \u00d7 10\u2076" },
      { id: "c", text: "7.2 \u00d7 10\u2075" },
      { id: "d", text: "7.2 \u00d7 10\u2074" }
    ],
    answerId: "c",
    explanation: "7.2 × 10⁵ is standard form. 72 × 10⁴ is tempting if you miscount the decimal-place shifts when writing scientific notation; the correct form is 7.2 × 10⁵.",
    hints: ["Put the decimal point of 720000 after the first digit. Count how many places it moved; that is the power of 10."]
  },
  {
    id: "g8-maths-exponents-b-q16",
    prompt: "Ordinary number for 4.5 \u00d7 10\u207b\u00b3 is\u2026",
    options: [
      { id: "a", text: "0.045" },
      { id: "b", text: "4500" },
      { id: "c", text: "0.00045" },
      { id: "d", text: "0.0045" }
    ],
    answerId: "d",
    explanation: "Move the point 3 places left: 0.0045. 0.00045 is tempting if you mix up whether to add or multiply exponents on the bases in “Ordinary”, producing 0.00045 rather than 0.0045.",
    hints: ["×10⁻³ moves the decimal point of 4.5 three places to the left. Fill the gaps with zeros."]
  },
  {
    id: "g8-maths-exponents-b-q17",
    prompt: "(\u22122)\u207b\u00b3 equals\u2026",
    options: [
      { id: "a", text: "\u22121/8" },
      { id: "b", text: "1/8" },
      { id: "c", text: "\u22128" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "1/(−2)³ = 1/(−8) = −1/8. 1/8 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 1/8 rather than −1/8.",
    hints: ["A negative exponent means a reciprocal: 1 ÷ (−2)³. An odd power of −2 stays negative."]
  },
  {
    id: "g8-maths-exponents-b-q18",
    prompt: "Simplify: (3/5)\u207b\u00b9",
    options: [
      { id: "a", text: "3/5" },
      { id: "b", text: "5/3" },
      { id: "c", text: "\u22123/5" },
      { id: "d", text: "9/25" }
    ],
    answerId: "b",
    explanation: "Reciprocal: (3/5)⁻¹ = 5/3. 3/5 is tempting if you mix up whether to add or multiply exponents on the bases in “Simplify”, producing 3/5 rather than 5/3.",
    hints: ["A power of −1 gives the reciprocal: the number you multiply 3/5 by to get 1."]
  },
  {
    id: "g8-maths-exponents-b-q19",
    prompt: "If 5\u02e3 = 1/125, then x = ?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "5" },
      { id: "c", text: "\u22123" },
      { id: "d", text: "\u22125" }
    ],
    answerId: "c",
    explanation: "1/125 = 5⁻³, so x = −3. 5 is tempting if you multiply the base by the exponent (or square instead of cubing); repeated multiplication of the base gives −3.",
    hints: ["Write 125 as a power of 5, then use a negative exponent for the reciprocal 1/125."]
  },
  {
    id: "g8-maths-exponents-b-q20",
    prompt: "Simplify: (2\u2074 \u00f7 2\u2077) \u00d7 2\u00b3",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "2\u207b\u00b9" },
      { id: "c", text: "2\u2076" },
      { id: "d", text: "1" }
    ],
    answerId: "d",
    explanation: "2⁻³ × 2³ = 2⁰ = 1. 2 is tempting if you mix up whether to add or multiply exponents on the bases in “Simplify”, producing 2 rather than 1.",
    hints: ["Subtract the exponents 4 − 7, then add 3. What is any non-zero number to that power?"]
  },
  {
    id: "g8-maths-exponents-b-q21",
    prompt: "(\u221b27)\u00b2 = ?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "18" },
      { id: "c", text: "3" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "∛27 = 3; 3² = 9. 6 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 6 rather than 9, noticing variant.",
    hints: ["First find ∛27, the number multiplied by itself three times to make 27. Then square it."]
  },
  {
    id: "g8-maths-exponents-b-q22",
    prompt: "Express (7\u207b\u00b3 \u00d7 7\u2075) \u00f7 7\u00b2 as a power of 7.",
    options: [
      { id: "a", text: "7\u2074" },
      { id: "b", text: "7\u2070" },
      { id: "c", text: "7\u207b\u2074" },
      { id: "d", text: "7\u00b2" }
    ],
    answerId: "b",
    explanation: "7² ÷ 7² = 7⁰. 7⁴ is tempting if you mix up whether to add or multiply exponents on the bases in “Express / power”, producing 7⁴ rather than 7⁰.",
    hints: ["Add the exponents −3 and 5, then subtract the exponent 2 for the division."]
  },
  {
    id: "g8-maths-exponents-b-q23",
    prompt: "Which equals 27\u00b2/\u00b3?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "3" },
      { id: "c", text: "9" },
      { id: "d", text: "81" }
    ],
    answerId: "c",
    explanation: "27¹/³ = 3; 27²/³ = 3² = 9. 3 is tempting if you mix up whether to add or multiply exponents on the bases in “exponents”, producing 3 rather than 9, noticing Which.",
    hints: ["Find the cube root of 27 first, then square it."]
  },
  {
    id: "g8-maths-exponents-b-q24",
    prompt: "Simplify: (10\u207b\u00b2 \u00d7 10\u2074) \u00f7 10\u207b\u00b9",
    options: [
      { id: "a", text: "10\u00b9" },
      { id: "b", text: "10\u207b\u00b3" },
      { id: "c", text: "10\u2075" },
      { id: "d", text: "10\u00b3" }
    ],
    answerId: "d",
    explanation: "10² ÷ 10⁻¹ = 10³. 10¹ is tempting if you mix up whether to add or multiply exponents on the bases in “Simplify”, producing 10¹ rather than 10³.",
    hints: ["Add the exponents −2 and 4, then subtract −1. Subtracting a negative exponent adds."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "10\u2076",
    title: "Exponents and powers",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Exponents shorten repeated multiplication. Laws let you simplify without expanding.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Same base \u00d7", reveal: "Add the exponents", emoji: "\u2795" },
      { label: "Same base \u00f7", reveal: "Subtract the exponents", emoji: "\u2796" },
      { label: "Negative powers", reveal: "Mean reciprocals", emoji: "\ud83d\udd04" },
      { label: "Standard form", reveal: "a \u00d7 10\u207f", emoji: "\ud83d\udd2d" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Simplify 5\u00b2 \u00d7 5\u00b3",
    options: [
        { id: "a", text: "5\u2075" },
        { id: "b", text: "5\u2076" },
        { id: "c", text: "25\u2075" },
        { id: "d", text: "5" }
    ],
    answerId: "a",
    why: "Same base: add exponents, 2 + 3 = 5.",
    visual: "number-line",
    speak: "Simplify 5\u00b2 \u00d7 5\u00b3",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Add / subtract exponents", "a\u2070 = 1", "Standard form", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8MathsExponents: ChapterDef = {
  id: "exponents-powers",
  title: "Exponents and Powers",
  emoji: "10\u2076",
  blurb: "Laws of exponents and standard form",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "multiply-basics",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "multiply-basics",
      questions: SET_B,
    },
    {
      id: "set-achievers",
      title: "Achievers",
      questionCount: g8MathsExponentsAchievers.length,
      topic: "multiply-basics",
      questions: g8MathsExponentsAchievers,
    },
  ],
  paperTopics: ["multiply-basics", "fractions"],
};

export const g8MathsExponentsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
