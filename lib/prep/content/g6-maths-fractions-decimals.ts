import type { ChapterDef, PrepQuestion } from "../types";

/** Fractions & Decimals - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-maths-frac-a-q01",
    prompt: "What is 3/4 + 1/4?",
    options: [
      { id: "a", text: "4/8" },
      { id: "b", text: "1" },
      { id: "c", text: "3/8" },
      { id: "d", text: "2/4" }
    ],
    answerId: "b",
    explanation: "Like denominators: 3/4 + 1/4 = 4/4 = 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q02",
    prompt: "What is 5/6 − 1/6?",
    options: [
      { id: "a", text: "4/6" },
      { id: "b", text: "2/3" },
      { id: "c", text: "6/6" },
      { id: "d", text: "4/12" }
    ],
    answerId: "b",
    explanation: "5/6 − 1/6 = 4/6 = 2/3 in simplest form.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q03",
    prompt: "Which fraction is equivalent to 2/3?",
    options: [
      { id: "a", text: "3/2" },
      { id: "b", text: "4/6" },
      { id: "c", text: "2/6" },
      { id: "d", text: "6/3" }
    ],
    answerId: "b",
    explanation: "Multiply top and bottom by 2: 2/3 = 4/6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q04",
    prompt: "What is 2/5 of 40?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "16" },
      { id: "c", text: "20" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "2/5 × 40 = 16.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q05",
    prompt: "Convert 0.7 to a fraction in simplest form.",
    options: [
      { id: "a", text: "7/10" },
      { id: "b", text: "7/100" },
      { id: "c", text: "70/10" },
      { id: "d", text: "7/1" }
    ],
    answerId: "a",
    explanation: "0.7 = 7/10, already simplest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q06",
    prompt: "Convert 3/5 to a decimal.",
    options: [
      { id: "a", text: "0.35" },
      { id: "b", text: "0.6" },
      { id: "c", text: "1.5" },
      { id: "d", text: "0.06" }
    ],
    answerId: "b",
    explanation: "3 ÷ 5 = 0.6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q07",
    prompt: "Which is greater: 0.45 or 0.5?",
    options: [
      { id: "a", text: "0.45" },
      { id: "b", text: "0.5" },
      { id: "c", text: "Equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "b",
    explanation: "0.50 > 0.45, so 0.5 is greater.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q08",
    prompt: "What is 1.2 + 0.35?",
    options: [
      { id: "a", text: "1.55" },
      { id: "b", text: "1.45" },
      { id: "c", text: "4.7" },
      { id: "d", text: "0.155" }
    ],
    answerId: "a",
    explanation: "1.20 + 0.35 = 1.55.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q09",
    prompt: "What is 4.5 − 1.75?",
    options: [
      { id: "a", text: "2.75" },
      { id: "b", text: "3.25" },
      { id: "c", text: "2.25" },
      { id: "d", text: "6.25" }
    ],
    answerId: "a",
    explanation: "4.50 − 1.75 = 2.75.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q10",
    prompt: "What is 0.6 × 0.2?",
    options: [
      { id: "a", text: "1.2" },
      { id: "b", text: "0.12" },
      { id: "c", text: "0.012" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "6 × 2 = 12 with two decimal places total → 0.12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q11",
    prompt: "Express 125/100 as a decimal.",
    options: [
      { id: "a", text: "1.25" },
      { id: "b", text: "12.5" },
      { id: "c", text: "0.125" },
      { id: "d", text: "125" }
    ],
    answerId: "a",
    explanation: "125/100 = 1.25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q12",
    prompt: "A ribbon is 3/4 m long. Another is 5/8 m. Total length?",
    options: [
      { id: "a", text: "8/12 m" },
      { id: "b", text: "11/8 m" },
      { id: "c", text: "1 3/8 m" },
      { id: "d", text: "1 1/8 m" }
    ],
    answerId: "c",
    explanation: "3/4 = 6/8; 6/8 + 5/8 = 11/8 = 1 3/8 m.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q13",
    prompt: "Which decimal equals 7/20?",
    options: [
      { id: "a", text: "0.35" },
      { id: "b", text: "0.72" },
      { id: "c", text: "0.07" },
      { id: "d", text: "3.5" }
    ],
    answerId: "a",
    explanation: "7 ÷ 20 = 0.35.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q14",
    prompt: "Simplify 18/24.",
    options: [
      { id: "a", text: "3/4" },
      { id: "b", text: "9/12" },
      { id: "c", text: "2/3" },
      { id: "d", text: "6/8" }
    ],
    answerId: "a",
    explanation: "Divide top and bottom by 6: 3/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q15",
    prompt: "What is 2.5 × 4?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "1.0" },
      { id: "c", text: "6.5" },
      { id: "d", text: "8.5" }
    ],
    answerId: "a",
    explanation: "2.5 × 4 = 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q16",
    prompt: "Ravi walks 2.4 km in the morning and 1.85 km in the evening. Total?",
    options: [
      { id: "a", text: "3.25 km" },
      { id: "b", text: "4.25 km" },
      { id: "c", text: "4.125 km" },
      { id: "d", text: "3.125 km" }
    ],
    answerId: "b",
    explanation: "2.40 + 1.85 = 4.25 km.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q17",
    prompt: "Which is a proper fraction?",
    options: [
      { id: "a", text: "5/4" },
      { id: "b", text: "4/4" },
      { id: "c", text: "3/7" },
      { id: "d", text: "9/5" }
    ],
    answerId: "c",
    explanation: "A proper fraction has numerator smaller than denominator: 3/7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q18",
    prompt: "Convert 2 1/4 to an improper fraction.",
    options: [
      { id: "a", text: "9/4" },
      { id: "b", text: "5/4" },
      { id: "c", text: "8/4" },
      { id: "d", text: "6/4" }
    ],
    answerId: "a",
    explanation: "2 × 4 + 1 = 9, so 9/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q19",
    prompt: "What is 3/8 of ₹240?",
    options: [
      { id: "a", text: "₹30" },
      { id: "b", text: "₹60" },
      { id: "c", text: "₹90" },
      { id: "d", text: "₹80" }
    ],
    answerId: "c",
    explanation: "240 ÷ 8 = 30; 30 × 3 = ₹90.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q20",
    prompt: "Arrange ascending: 0.09, 0.9, 0.19.",
    options: [
      { id: "a", text: "0.09, 0.19, 0.9" },
      { id: "b", text: "0.9, 0.19, 0.09" },
      { id: "c", text: "0.09, 0.9, 0.19" },
      { id: "d", text: "0.19, 0.09, 0.9" }
    ],
    answerId: "a",
    explanation: "0.09 < 0.19 < 0.90.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q21",
    prompt: "What is 1 − 0.37?",
    options: [
      { id: "a", text: "0.63" },
      { id: "b", text: "0.73" },
      { id: "c", text: "1.37" },
      { id: "d", text: "0.67" }
    ],
    answerId: "a",
    explanation: "1.00 − 0.37 = 0.63.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q22",
    prompt: "Which is equal to 0.25?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "1/4" },
      { id: "c", text: "1/5" },
      { id: "d", text: "2/5" }
    ],
    answerId: "b",
    explanation: "0.25 = 25/100 = 1/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q23",
    prompt: "Compute 7/10 + 0.2.",
    options: [
      { id: "a", text: "0.9" },
      { id: "b", text: "0.72" },
      { id: "c", text: "1.0" },
      { id: "d", text: "0.5" }
    ],
    answerId: "a",
    explanation: "7/10 = 0.7; 0.7 + 0.2 = 0.9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-a-q24",
    prompt: "A bottle holds 1.5 L. Meera pours out 3/5 L. How much is left?",
    options: [
      { id: "a", text: "0.9 L" },
      { id: "b", text: "1.1 L" },
      { id: "c", text: "0.8 L" },
      { id: "d", text: "1.2 L" }
    ],
    answerId: "a",
    explanation: "3/5 = 0.6; 1.5 − 0.6 = 0.9 L.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-maths-frac-b-q01",
    prompt: "What is 1/3 + 1/6?",
    options: [
      { id: "a", text: "2/9" },
      { id: "b", text: "1/2" },
      { id: "c", text: "1/9" },
      { id: "d", text: "2/6" }
    ],
    answerId: "b",
    explanation: "1/3 = 2/6; 2/6 + 1/6 = 3/6 = 1/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q02",
    prompt: "What is 5/8 − 1/4?",
    options: [
      { id: "a", text: "4/8" },
      { id: "b", text: "3/8" },
      { id: "c", text: "1/2" },
      { id: "d", text: "4/4" }
    ],
    answerId: "b",
    explanation: "1/4 = 2/8; 5/8 − 2/8 = 3/8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q03",
    prompt: "Which pair are equivalent?",
    options: [
      { id: "a", text: "1/2 and 2/3" },
      { id: "b", text: "3/5 and 6/10" },
      { id: "c", text: "2/4 and 3/9" },
      { id: "d", text: "4/6 and 2/2" }
    ],
    answerId: "b",
    explanation: "3/5 × 2/2 = 6/10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q04",
    prompt: "What is 3/4 of 2.4?",
    options: [
      { id: "a", text: "1.8" },
      { id: "b", text: "0.8" },
      { id: "c", text: "3.2" },
      { id: "d", text: "1.2" }
    ],
    answerId: "a",
    explanation: "2.4 ÷ 4 = 0.6; 0.6 × 3 = 1.8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q05",
    prompt: "Convert 0.08 to a fraction in simplest form.",
    options: [
      { id: "a", text: "8/10" },
      { id: "b", text: "2/25" },
      { id: "c", text: "8/100" },
      { id: "d", text: "4/50" }
    ],
    answerId: "b",
    explanation: "0.08 = 8/100 = 2/25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q06",
    prompt: "Convert 9/4 to a mixed number.",
    options: [
      { id: "a", text: "2 1/4" },
      { id: "b", text: "1 1/4" },
      { id: "c", text: "2 1/9" },
      { id: "d", text: "4/9" }
    ],
    answerId: "a",
    explanation: "9 ÷ 4 = 2 remainder 1 → 2 1/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q07",
    prompt: "What is 2.05 + 3.7?",
    options: [
      { id: "a", text: "5.75" },
      { id: "b", text: "5.12" },
      { id: "c", text: "5.775" },
      { id: "d", text: "23.75" }
    ],
    answerId: "a",
    explanation: "2.05 + 3.70 = 5.75.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q08",
    prompt: "What is 6 − 2.48?",
    options: [
      { id: "a", text: "3.52" },
      { id: "b", text: "4.52" },
      { id: "c", text: "3.62" },
      { id: "d", text: "4.62" }
    ],
    answerId: "a",
    explanation: "6.00 − 2.48 = 3.52.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q09",
    prompt: "What is 1.5 ÷ 0.3?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "0.5" },
      { id: "c", text: "4.5" },
      { id: "d", text: "0.45" }
    ],
    answerId: "a",
    explanation: "1.5 ÷ 0.3 = 15 ÷ 3 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q10",
    prompt: "A book costs ₹85.50. A notebook costs ₹24.75. Total?",
    options: [
      { id: "a", text: "₹100.25" },
      { id: "b", text: "₹110.25" },
      { id: "c", text: "₹109.25" },
      { id: "d", text: "₹111.25" }
    ],
    answerId: "b",
    explanation: "85.50 + 24.75 = ₹110.25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q11",
    prompt: "Which is least?",
    options: [
      { id: "a", text: "0.101" },
      { id: "b", text: "0.11" },
      { id: "c", text: "0.1" },
      { id: "d", text: "0.1001" }
    ],
    answerId: "c",
    explanation: "0.1000 is smaller than 0.1001, 0.1010 and 0.1100.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q12",
    prompt: "Express 4.2 as a fraction in simplest form.",
    options: [
      { id: "a", text: "42/10" },
      { id: "b", text: "21/5" },
      { id: "c", text: "4/2" },
      { id: "d", text: "42/100" }
    ],
    answerId: "b",
    explanation: "4.2 = 42/10 = 21/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q13",
    prompt: "What is 2/3 × 9/10?",
    options: [
      { id: "a", text: "18/30" },
      { id: "b", text: "3/5" },
      { id: "c", text: "11/13" },
      { id: "d", text: "2/10" }
    ],
    answerId: "b",
    explanation: "2/3 × 9/10 = 18/30 = 3/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q14",
    prompt: "A tank is 5/8 full. If capacity is 40 L, how many litres are in it?",
    options: [
      { id: "a", text: "25 L" },
      { id: "b", text: "20 L" },
      { id: "c", text: "32 L" },
      { id: "d", text: "15 L" }
    ],
    answerId: "a",
    explanation: "5/8 × 40 = 25 L.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q15",
    prompt: "Round 3.678 to 2 decimal places.",
    options: [
      { id: "a", text: "3.67" },
      { id: "b", text: "3.68" },
      { id: "c", text: "3.70" },
      { id: "d", text: "3.60" }
    ],
    answerId: "b",
    explanation: "The third decimal is 8 ≥ 5, so 3.68.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q16",
    prompt: "What is 0.4 + 2/5?",
    options: [
      { id: "a", text: "0.8" },
      { id: "b", text: "1.0" },
      { id: "c", text: "0.6" },
      { id: "d", text: "0.9" }
    ],
    answerId: "a",
    explanation: "2/5 = 0.4; 0.4 + 0.4 = 0.8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q17",
    prompt: "Which decimal is equal to 3/8?",
    options: [
      { id: "a", text: "0.375" },
      { id: "b", text: "0.35" },
      { id: "c", text: "0.38" },
      { id: "d", text: "0.125" }
    ],
    answerId: "a",
    explanation: "3 ÷ 8 = 0.375.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q18",
    prompt: "Compute 12.6 ÷ 3.",
    options: [
      { id: "a", text: "4.2" },
      { id: "b", text: "3.2" },
      { id: "c", text: "42" },
      { id: "d", text: "0.42" }
    ],
    answerId: "a",
    explanation: "12.6 ÷ 3 = 4.2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q19",
    prompt: "A pizza is cut into 8 equal slices. Mira eats 3. What fraction remains?",
    options: [
      { id: "a", text: "3/8" },
      { id: "b", text: "5/8" },
      { id: "c", text: "3/5" },
      { id: "d", text: "8/5" }
    ],
    answerId: "b",
    explanation: "8 − 3 = 5 slices left → 5/8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q20",
    prompt: "What is 7/2 − 1.5?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3.5" },
      { id: "c", text: "5.5" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "7/2 = 3.5; 3.5 − 1.5 = 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q21",
    prompt: "Convert 0.125 to a fraction in simplest form.",
    options: [
      { id: "a", text: "125/1000" },
      { id: "b", text: "1/8" },
      { id: "c", text: "1/4" },
      { id: "d", text: "5/40" }
    ],
    answerId: "b",
    explanation: "0.125 = 125/1000 = 1/8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q22",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "0.7 > 7/10" },
      { id: "b", text: "0.7 = 7/10" },
      { id: "c", text: "0.7 < 7/10" },
      { id: "d", text: "0.07 = 7/10" }
    ],
    answerId: "b",
    explanation: "7/10 = 0.7 exactly.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q23",
    prompt: "A rope is 6.4 m. Cut into pieces of 0.8 m each. How many pieces?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "7" },
      { id: "c", text: "9" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "6.4 ÷ 0.8 = 64 ÷ 8 = 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-frac-b-q24",
    prompt: "What is 5/6 of 18?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "15" },
      { id: "c", text: "9" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "18 ÷ 6 = 3; 3 × 5 = 15.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🍕",
    title: "Fractions & Decimals",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "fraction-bar",
    speak: "Fractions and decimals both name parts of a whole.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "fraction-bar",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Like fractions", reveal: "Same denominator — add or subtract tops", emoji: "➗" },
      { label: "Equivalent", reveal: "Multiply top and bottom by the same number", emoji: "✨" },
      { label: "Decimals", reveal: "Tenths, hundredths after the point", emoji: "🔢" },
      { label: "Of means ×", reveal: "Fraction of a number is multiply", emoji: "✖️" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "What is 1/4 of 20?",
    options: [
        { id: "a", text: "4" },
        { id: "b", text: "5" },
        { id: "c", text: "8" },
        { id: "d", text: "16" }
    ],
    answerId: "b",
    why: "20 ÷ 4 = 5.",
    visual: "fraction-bar",
    speak: "What is 1/4 of 20?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Review the key ideas", "Watch tricky options", "Sets ready whenever you are"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g6MathsFractionsDecimals: ChapterDef = {
  id: "fractions-decimals",
  title: "Fractions & Decimals",
  emoji: "🍕",
  blurb: "Parts, decimals and money maths",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "fractions",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "fractions",
      questions: SET_B,
    },
  ],
  paperTopics: ["fractions", "decimals"],
};

export const g6MathsFractionsDecimalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
