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
    explanation: "2³ = 2 × 2 × 2 = 8. 9 is tempting if you apply the wrong exponent law or drop a negative sign on an exponent; the correct value is 8.",
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
    explanation: "Same base: multiply by adding exponents — 5² × 5³ = 5^(2+3) = 5⁵. 5⁶ is tempting if you multiply the exponents 2 × 3 = 6 instead of adding them.",
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
    explanation: "Same base: subtract exponents, 6 − 2 = 4. a³ is tempting if you subtract the exponents the wrong way round or divide them; same-base division subtracts exponents to give a⁴.",
    hints: ["Same base a: when dividing a⁶ by a², subtract the exponents."]
  },
  {
    id: "g8-maths-exponents-a-q04",
    prompt: "(3²)³ = ?",
    options: [
      { id: "a", text: "3⁶" },
      { id: "b", text: "3⁵" },
      { id: "c", text: "3⁸" },
      { id: "d", text: "3⁹" }
    ],
    answerId: "a",
    explanation: "Power of a power: multiply exponents, 2 × 3 = 6. 3⁵ is tempting if you add the exponents instead of multiplying them for a power of a power; multiplying the exponents gives 3⁶.",
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
    explanation: "2⁻³ = 1/2³ = 1/8. −8 is tempting if you keep the negative in the exponent as a sign on the base, or forget the reciprocal; a⁻ⁿ = 1/aⁿ gives 1/8.",
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
    explanation: "10⁻² = 1/100 = 0.01. 0.1 is tempting if you keep the negative in the exponent as a sign on the base, or forget the reciprocal; a⁻ⁿ = 1/aⁿ gives 0.01.",
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
    explanation: "Even power of a negative is positive: 16. −8 is tempting if you add the exponents instead of multiplying them for a power of a power; multiplying the exponents gives 16.",
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
    explanation: "Add exponents: 4 + (−2) = 2, so 3². 3⁶ is tempting if you multiply the exponents instead of adding them (same-base product rule); adding the exponents gives 3².",
    hints: ["Same base 3: add the exponents 4 and −2."]
  },
  {
    id: "g8-maths-exponents-a-q10",
    prompt: "Which of these equals 1/81?",
    options: [
      { id: "a", text: "3\u2074" },
      { id: "b", text: "3⁻³" },
      { id: "c", text: "9⁻³" },
      { id: "d", text: "Both 3\u207b\u2074 and 9\u207b\u00b2" }
    ],
    answerId: "d",
    explanation: "81 = 3⁴ = 9², so 1/81 = 3⁻⁴ = 9⁻², and option d names both of these. 3⁴ is tempting if you forget the reciprocal and leave a positive exponent; 3⁻³ is tempting if you think 81 = 3³ (but 3³ = 27).",
    hints: ["81 is 3⁴. Can 81 also be written as the square of a whole number? A reciprocal flips the sign of the exponent."]
  },
  {
    id: "g8-maths-exponents-a-q11",
    prompt: "Rasika, who lives in Jaipur, works out 2⁶ × 5⁶ without a calculator. How many zeros are there at the end of her answer?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "36" },
      { id: "c", text: "6" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "When two powers have the same exponent, you can multiply the bases: 2⁶ × 5⁶ = (2 × 5)⁶ = 10⁶ = 1,000,000, which ends in 6 zeros. 12 is tempting if you add the exponents 6 and 6, but adding exponents works only when the bases are the same, and here the bases 2 and 5 are different.",
    hints: ["Pair each 2 in Rasika's product with a 5; think about what every such pair multiplies to."]
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
    explanation: "5⁶ × 5⁻⁴ = 5². 5⁵ is tempting if you multiply the exponents instead of adding them (same-base product rule); adding the exponents gives 5².",
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
    explanation: "2⁵ = 32 and 5² = 25, so 2⁵ is larger. 5² is tempting if you apply the wrong exponent law or drop a negative sign on an exponent; the correct value is 2⁵.",
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
    explanation: "x⁶ ÷ x⁴ = x². x⁵ is tempting if you subtract the exponents the wrong way round or divide them; same-base division subtracts exponents to give x².",
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
    explanation: "Move the point 4 places: 5.6 × 10⁻⁴. 5.6 × 10⁴ is tempting if you use a positive power of 10 instead of the negative power needed for a number less than 1.",
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
    explanation: "Move the point 5 places right: 320000. 32000 is tempting if you multiply the exponents instead of adding them (same-base product rule); adding the exponents gives 320000.",
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
    explanation: "(−3)⁻² = 1/(−3)² = 1/9. −9 is tempting if you add the exponents instead of multiplying them for a power of a power; multiplying the exponents gives 1/9.",
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
    explanation: "(2/3)⁻² = (3/2)² = 9/4. 4/9 is tempting if you add the exponents instead of multiplying them for a power of a power; multiplying the exponents gives 9/4.",
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
    prompt: "In her school laboratory in Guwahati, Tarini looks at a tiny cell that is 10⁻⁵ m long. How many such cells, placed end to end in a straight line, would make a line 10⁻² m long?",
    options: [
      { id: "a", text: "10⁻³" },
      { id: "b", text: "10⁷" },
      { id: "c", text: "10⁻⁷" },
      { id: "d", text: "10³" }
    ],
    answerId: "d",
    explanation: "Number of cells = length of the line ÷ length of one cell = 10⁻² ÷ 10⁻⁵ = 10⁻²⁻⁽⁻⁵⁾ = 10³, that is 1,000 cells. 10⁻³ is tempting if you divide the wrong way round (10⁻⁵ ÷ 10⁻²), but a count of cells must be more than 1, because each cell is much shorter than the line.",
    hints: ["Divide the length of the whole line by the length of one of Tarini's cells; for powers of the same base, subtract the exponents."]
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
    explanation: "√16 = 4; 4³ = 64. 8 is tempting if you add the exponents instead of multiplying them for a power of a power; multiplying the exponents gives 64.",
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
    explanation: "5⁻² × 5² = 5⁰ = 1, which is also 5⁰. 5² is tempting if you multiply the exponents instead of adding them (same-base product rule); adding the exponents gives 5⁰.",
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
    explanation: "8¹/³ = 2, so 8²/³ = 4 and 8⁻²/³ = 1/4. 4 is tempting if you keep the negative in the exponent as a sign on the base, or forget the reciprocal; a⁻ⁿ = 1/aⁿ gives 1/4.",
    hints: ["Find the cube root of 8 first, then square it. The negative sign means take the reciprocal."]
  },
  {
    id: "g8-maths-exponents-a-q24",
    prompt: "In a class quiz in Chennai, Sunanda must write (p³q²)⁴ ÷ (p⁵q³)² in its simplest form, where p and q are not zero. What should she write?",
    options: [
      { id: "a", text: "q" },
      { id: "b", text: "p²q" },
      { id: "c", text: "p⁻²q⁻²" },
      { id: "d", text: "p²q²" }
    ],
    answerId: "d",
    explanation: "Raising a product to a power multiplies each exponent: (p³q²)⁴ = p¹²q⁸ and (p⁵q³)² = p¹⁰q⁶. Dividing subtracts the exponents of matching letters: p¹²⁻¹⁰q⁸⁻⁶ = p²q². The option q is tempting if you add the outside power instead of multiplying (p⁷q⁶ ÷ p⁷q⁵), but a power of a power multiplies the exponents.",
    hints: ["Multiply every exponent inside each of Sunanda's brackets by the power outside, then subtract exponents of matching letters."]
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
    explanation: "Add exponents: 1 + 4 = 5. 7⁴ is tempting if you multiply the exponents instead of adding them (same-base product rule); adding the exponents gives 7⁵.",
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
    explanation: "Subtract exponents: 9 − 3 = 6. b³ is tempting if you subtract the exponents the wrong way round or divide them; same-base division subtracts exponents to give b⁶.",
    hints: ["Same base b: when dividing, subtract the exponents 9 and 3."]
  },
  {
    id: "g8-maths-exponents-b-q04",
    prompt: "(4\u00b2)\u00b2 = ?",
    options: [
      { id: "a", text: "4\u2074" },
      { id: "b", text: "4\u00b2" },
      { id: "c", text: "8\u00b2" },
      { id: "d", text: "4⁸" }
    ],
    answerId: "a",
    explanation: "Multiply exponents: (4²)² = 4^(2 × 2) = 4⁴. 4⁸ is tempting if you multiply the two 2s and then multiply by 2 again (2 × 2 × 2 = 8), as if the outer square were an extra factor on the exponent.",
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
    explanation: "4⁻² = 1/4² = 1/16. −16 is tempting if you keep the negative in the exponent as a sign on the base, or forget the reciprocal; a⁻ⁿ = 1/aⁿ gives 1/16.",
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
    explanation: "10³ = 10 × 10 × 10 = 1000. 100 is tempting if you apply the wrong exponent law or drop a negative sign on an exponent; the correct value is 1000.",
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
    explanation: "Odd power of −1 is −1. 0 is tempting if you apply the wrong exponent law or drop a negative sign on an exponent; the correct value is −1.",
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
    explanation: "The correct answer is 1. 0 is tempting if you multiply the exponents instead of adding them (same-base product rule); adding the exponents gives 1.",
    hints: ["Add the exponents 5 and −5. What is any non-zero number to that power?"]
  },
  {
    id: "g8-maths-exponents-b-q10",
    prompt: "Which of these equals 1/25?",
    options: [
      { id: "a", text: "5\u00b2" },
      { id: "b", text: "5⁻³" },
      { id: "c", text: "25⁻²" },
      { id: "d", text: "Both 5\u207b\u00b2 and 25\u207b\u00b9" }
    ],
    answerId: "d",
    explanation: "25 = 5², so 1/25 = 5⁻² = 25⁻¹, and option d names both of these. 5² is tempting if you forget the reciprocal and leave a positive exponent; 25⁻² is tempting if you copy the 2 from 5² onto the 25 instead of using 25 = 25¹.",
    hints: ["Write the denominator as a power of 5. A reciprocal flips the sign of the exponent, and any number on its own has exponent 1."]
  },
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
    explanation: "2¹² × 2⁻⁶ = 2⁶. 2¹² is tempting if you multiply the exponents instead of adding them (same-base product rule); adding the exponents gives 2⁶.",
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
    explanation: "3⁴ = 81 and 4³ = 64, so 4³ is smaller. 3⁴ is tempting if you apply the wrong exponent law or drop a negative sign on an exponent; the correct value is 4³.",
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
    explanation: "y¹² ÷ y⁸ = y⁴. y¹² is tempting if you subtract the exponents the wrong way round or divide them; same-base division subtracts exponents to give y⁴.",
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
    explanation: "Move the point 3 places left: 0.0045. 0.00045 is tempting if you keep the negative in the exponent as a sign on the base, or forget the reciprocal; a⁻ⁿ = 1/aⁿ gives 0.0045.",
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
    explanation: "1/(−2)³ = 1/(−8) = −1/8. 1/8 is tempting if you add the exponents instead of multiplying them for a power of a power; multiplying the exponents gives −1/8.",
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
    explanation: "Reciprocal: (3/5)⁻¹ = 5/3. 3/5 is tempting if you keep the negative in the exponent as a sign on the base, or forget the reciprocal; a⁻ⁿ = 1/aⁿ gives 5/3.",
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
    prompt: "In an inter-school maths relay in Indore, Aarush's team must find the value of (2/3)³ × (3/2)⁵. What is the value?",
    options: [
      { id: "a", text: "4/9" },
      { id: "b", text: "1" },
      { id: "c", text: "3/2" },
      { id: "d", text: "9/4" }
    ],
    answerId: "d",
    explanation: "3/2 is the reciprocal of 2/3, so (3/2)⁵ = (2/3)⁻⁵. Then (2/3)³ × (2/3)⁻⁵ = (2/3)³⁻⁵ = (2/3)⁻² = (3/2)² = 9/4. 4/9 is tempting if you end with (2/3)² instead of (2/3)⁻², forgetting that the bigger power belongs to 3/2.",
    hints: ["Write the second fraction in Aarush's product as a power of 2/3 with a negative exponent, then add the exponents."]
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
    explanation: "∛27 = 3; 3² = 9. 6 is tempting if you add the exponents instead of multiplying them for a power of a power; multiplying the exponents gives 9.",
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
    explanation: "7² ÷ 7² = 7⁰. 7⁴ is tempting if you multiply the exponents instead of adding them (same-base product rule); adding the exponents gives 7⁰.",
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
    explanation: "27¹/³ = 3; 27²/³ = 3² = 9. 3 is tempting if you apply the wrong exponent law or drop a negative sign on an exponent; the correct value is 9.",
    hints: ["Find the cube root of 27 first, then square it."]
  },
  {
    id: "g8-maths-exponents-b-q24",
    prompt: "For a puzzle in her school magazine in Ahmedabad, Anupama must write 9³ × 27² as a single power of 3. Which power of 3 is correct?",
    options: [
      { id: "a", text: "3⁵" },
      { id: "b", text: "3³⁶" },
      { id: "c", text: "3¹⁰" },
      { id: "d", text: "3¹²" }
    ],
    answerId: "d",
    explanation: "Write each base as a power of 3: 9 = 3² and 27 = 3³. Then 9³ = (3²)³ = 3⁶ and 27² = (3³)² = 3⁶, so 9³ × 27² = 3⁶ × 3⁶ = 3¹². 3⁵ is tempting if you just add the outside exponents 3 and 2, but the bases are 9 and 27, not 3, so they must first be written as powers of 3.",
    hints: ["Rewrite Anupama's two bases as powers of a common smaller base before you use any exponent law."]
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
