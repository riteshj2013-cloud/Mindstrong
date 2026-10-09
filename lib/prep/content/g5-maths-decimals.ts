import type { ChapterDef, PrepQuestion } from "../types";

/** Decimals & Percentages - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-dec-a-q01",
    prompt: "What decimal represents 3 tenths?",
    options: [
      { id: "a", text: "0.3" },
      { id: "b", text: "3.0" },
      { id: "c", text: "0.03" },
      { id: "d", text: "30" }
    ],
    answerId: "a",
    explanation: "3 tenths means 3/10, which is written as 0.3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q02",
    prompt: "What decimal represents 7 hundredths?",
    options: [
      { id: "a", text: "0.7" },
      { id: "b", text: "7.0" },
      { id: "c", text: "0.07" },
      { id: "d", text: "0.007" }
    ],
    answerId: "c",
    explanation: "7 hundredths is 7/100, written as 0.07 with the 7 in the hundredths place.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q03",
    prompt: "In 4.86, which digit is in the tenths place?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "8" },
      { id: "c", text: "6" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "Just after the decimal point is the tenths place, so the digit is 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q04",
    prompt: "Which number is equal to 0.5?",
    options: [
      { id: "a", text: "1/5" },
      { id: "b", text: "1/2" },
      { id: "c", text: "5" },
      { id: "d", text: "1/50" }
    ],
    answerId: "b",
    explanation: "0.5 means 5/10, which simplifies to 1/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q05",
    prompt: "Which is greater: 0.8 or 0.75?",
    options: [
      { id: "a", text: "0.75" },
      { id: "b", text: "0.8" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "b",
    explanation: "0.80 is greater than 0.75 when both have hundredths, so 0.8 is greater.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q06",
    prompt: "What is 1.2 + 0.5?",
    options: [
      { id: "a", text: "1.7" },
      { id: "b", text: "1.25" },
      { id: "c", text: "0.7" },
      { id: "d", text: "6.2" }
    ],
    answerId: "a",
    explanation: "Line up the points: 1.2 + 0.5 = 1.7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q07",
    prompt: "What is 3.6 \u2212 1.4?",
    options: [
      { id: "a", text: "2.2" },
      { id: "b", text: "2.0" },
      { id: "c", text: "5.0" },
      { id: "d", text: "1.2" }
    ],
    answerId: "a",
    explanation: "Subtract tenths then ones: 3.6 \u2212 1.4 = 2.2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q08",
    prompt: "What is 0.4 \u00d7 10?",
    options: [
      { id: "a", text: "0.04" },
      { id: "b", text: "4" },
      { id: "c", text: "40" },
      { id: "d", text: "0.4" }
    ],
    answerId: "b",
    explanation: "Multiplying by 10 moves the decimal point one place right: 0.4 becomes 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q09",
    prompt: "What is 25% as a fraction in simplest form?",
    options: [
      { id: "a", text: "25/100" },
      { id: "b", text: "1/4" },
      { id: "c", text: "1/25" },
      { id: "d", text: "4/1" }
    ],
    answerId: "b",
    explanation: "25% = 25/100 = 1/4 after dividing top and bottom by 25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q10",
    prompt: "What is 50% of 80?",
    options: [
      { id: "a", text: "40" },
      { id: "b", text: "30" },
      { id: "c", text: "50" },
      { id: "d", text: "16" }
    ],
    answerId: "a",
    explanation: "50% means half, and half of 80 is 40.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q11",
    prompt: "Write 3/10 as a decimal.",
    options: [
      { id: "a", text: "0.3" },
      { id: "b", text: "3.0" },
      { id: "c", text: "0.03" },
      { id: "d", text: "0.003" }
    ],
    answerId: "a",
    explanation: "3/10 is three tenths, written as 0.3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q12",
    prompt: "Which shows one and twenty-five hundredths?",
    options: [
      { id: "a", text: "1.025" },
      { id: "b", text: "1.25" },
      { id: "c", text: "12.5" },
      { id: "d", text: "0.125" }
    ],
    answerId: "b",
    explanation: "1 whole and 25 hundredths is 1.25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q13",
    prompt: "Arrange in ascending order: 0.4, 0.35, 0.405",
    options: [
      { id: "a", text: "0.4, 0.35, 0.405" },
      { id: "b", text: "0.35, 0.4, 0.405" },
      { id: "c", text: "0.35, 0.405, 0.4" },
      { id: "d", text: "0.405, 0.4, 0.35" }
    ],
    answerId: "b",
    explanation: "As hundredths: 0.35, 0.40, 0.405 \u2192 ascending is 0.35, 0.4, 0.405.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q14",
    prompt: "What is the place value of 9 in 5.391?",
    options: [
      { id: "a", text: "9 ones" },
      { id: "b", text: "9 tenths" },
      { id: "c", text: "9 hundredths" },
      { id: "d", text: "9 thousandths" }
    ],
    answerId: "c",
    explanation: "Places after the point are tenths, hundredths, thousandths \u2014 so 9 is hundredths.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q15",
    prompt: "What is 2.05 + 1.3?",
    options: [
      { id: "a", text: "3.35" },
      { id: "b", text: "3.08" },
      { id: "c", text: "2.18" },
      { id: "d", text: "4.35" }
    ],
    answerId: "a",
    explanation: "Write 1.3 as 1.30; 2.05 + 1.30 = 3.35.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q16",
    prompt: "What is 4.2 \u2212 0.85?",
    options: [
      { id: "a", text: "3.35" },
      { id: "b", text: "3.45" },
      { id: "c", text: "4.65" },
      { id: "d", text: "3.15" }
    ],
    answerId: "a",
    explanation: "4.20 \u2212 0.85 = 3.35.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q17",
    prompt: "What is 0.56 \u00d7 100?",
    options: [
      { id: "a", text: "5.6" },
      { id: "b", text: "56" },
      { id: "c", text: "560" },
      { id: "d", text: "0.0056" }
    ],
    answerId: "b",
    explanation: "\u00d7100 moves the point two places right: 0.56 \u2192 56.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q18",
    prompt: "Write 0.75 as a percent.",
    options: [
      { id: "a", text: "7.5%" },
      { id: "b", text: "75%" },
      { id: "c", text: "750%" },
      { id: "d", text: "0.75%" }
    ],
    answerId: "b",
    explanation: "0.75 = 75/100 = 75%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q19",
    prompt: "What is 10% of 250?",
    options: [
      { id: "a", text: "25" },
      { id: "b", text: "2.5" },
      { id: "c", text: "250" },
      { id: "d", text: "10" }
    ],
    answerId: "a",
    explanation: "10% means divide by 10, so 250 \u00f7 10 = 25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q20",
    prompt: "A bottle holds 0.75 L. How many millilitres is that?",
    options: [
      { id: "a", text: "75 ml" },
      { id: "b", text: "750 ml" },
      { id: "c", text: "7.5 ml" },
      { id: "d", text: "7500 ml" }
    ],
    answerId: "b",
    explanation: "1 L = 1000 ml, so 0.75 \u00d7 1000 = 750 ml.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q21",
    prompt: "Which fraction equals 0.2?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "1/5" },
      { id: "c", text: "2/5" },
      { id: "d", text: "1/20" }
    ],
    answerId: "b",
    explanation: "0.2 = 2/10 = 1/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q22",
    prompt: "Riya scored 18 marks out of 20. What percent did she score?",
    options: [
      { id: "a", text: "18%" },
      { id: "b", text: "80%" },
      { id: "c", text: "90%" },
      { id: "d", text: "95%" }
    ],
    answerId: "c",
    explanation: "18/20 = 90/100 = 90%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q23",
    prompt: "A shirt costs \u20b9400. A shop offers 25% off. What is the sale price?",
    options: [
      { id: "a", text: "\u20b9100" },
      { id: "b", text: "\u20b9300" },
      { id: "c", text: "\u20b9325" },
      { id: "d", text: "\u20b9375" }
    ],
    answerId: "b",
    explanation: "25% of 400 is 100, so the sale price is 400 \u2212 100 = \u20b9300.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-a-q24",
    prompt: "What is 6.04 \u00f7 10?",
    options: [
      { id: "a", text: "60.4" },
      { id: "b", text: "0.604" },
      { id: "c", text: "0.064" },
      { id: "d", text: "6.4" }
    ],
    answerId: "b",
    explanation: "\u00f710 moves the point one place left: 6.04 \u2192 0.604.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-dec-b-q01",
    prompt: "What decimal represents 9 tenths?",
    options: [
      { id: "a", text: "0.09" },
      { id: "b", text: "0.9" },
      { id: "c", text: "9.0" },
      { id: "d", text: "0.009" }
    ],
    answerId: "b",
    explanation: "9 tenths is 9/10 = 0.9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q02",
    prompt: "What decimal represents 4 hundredths?",
    options: [
      { id: "a", text: "0.4" },
      { id: "b", text: "0.04" },
      { id: "c", text: "4.0" },
      { id: "d", text: "0.004" }
    ],
    answerId: "b",
    explanation: "4 hundredths is 4/100 = 0.04.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q03",
    prompt: "In 7.253, which digit is in the hundredths place?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "5" },
      { id: "c", text: "3" },
      { id: "d", text: "7" }
    ],
    answerId: "b",
    explanation: "Tenths is 2, hundredths is 5, thousandths is 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q04",
    prompt: "Which number is equal to 0.25?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "1/4" },
      { id: "c", text: "1/25" },
      { id: "d", text: "2/5" }
    ],
    answerId: "b",
    explanation: "0.25 = 25/100 = 1/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q05",
    prompt: "Which is smaller: 0.09 or 0.1?",
    options: [
      { id: "a", text: "0.09" },
      { id: "b", text: "0.1" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "a",
    explanation: "0.10 is greater than 0.09, so 0.09 is smaller.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q06",
    prompt: "What is 0.8 + 0.15?",
    options: [
      { id: "a", text: "0.95" },
      { id: "b", text: "0.23" },
      { id: "c", text: "0.815" },
      { id: "d", text: "1.95" }
    ],
    answerId: "a",
    explanation: "0.80 + 0.15 = 0.95.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q07",
    prompt: "What is 5.0 \u2212 2.3?",
    options: [
      { id: "a", text: "2.7" },
      { id: "b", text: "3.7" },
      { id: "c", text: "7.3" },
      { id: "d", text: "2.3" }
    ],
    answerId: "a",
    explanation: "5.0 \u2212 2.3 = 2.7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q08",
    prompt: "What is 1.5 \u00d7 10?",
    options: [
      { id: "a", text: "0.15" },
      { id: "b", text: "15" },
      { id: "c", text: "150" },
      { id: "d", text: "1.05" }
    ],
    answerId: "b",
    explanation: "\u00d710 moves the point one place right: 1.5 \u2192 15.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q09",
    prompt: "What is 10% as a decimal?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "1.0" },
      { id: "c", text: "0.1" },
      { id: "d", text: "0.01" }
    ],
    answerId: "c",
    explanation: "10% = 10/100 = 0.1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q10",
    prompt: "What is 25% of 40?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "15" },
      { id: "c", text: "8" },
      { id: "d", text: "20" }
    ],
    answerId: "a",
    explanation: "25% is one quarter; 40 \u00f7 4 = 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q11",
    prompt: "Write 7/100 as a decimal.",
    options: [
      { id: "a", text: "0.7" },
      { id: "b", text: "0.07" },
      { id: "c", text: "7.0" },
      { id: "d", text: "0.007" }
    ],
    answerId: "b",
    explanation: "7/100 is seven hundredths = 0.07.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q12",
    prompt: "Which shows three and six hundredths?",
    options: [
      { id: "a", text: "3.6" },
      { id: "b", text: "3.06" },
      { id: "c", text: "3.006" },
      { id: "d", text: "0.36" }
    ],
    answerId: "b",
    explanation: "3 wholes and 6 hundredths is 3.06.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q13",
    prompt: "Arrange in descending order: 1.05, 1.5, 1.005",
    options: [
      { id: "a", text: "1.5, 1.05, 1.005" },
      { id: "b", text: "1.05, 1.5, 1.005" },
      { id: "c", text: "1.005, 1.05, 1.5" },
      { id: "d", text: "1.5, 1.005, 1.05" }
    ],
    answerId: "a",
    explanation: "1.500 > 1.050 > 1.005.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q14",
    prompt: "What is the face value of 6 in 8.46?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "0.6" },
      { id: "c", text: "0.06" },
      { id: "d", text: "60" }
    ],
    answerId: "a",
    explanation: "Face value is the digit itself, which is 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q15",
    prompt: "What is 0.9 + 2.45?",
    options: [
      { id: "a", text: "3.35" },
      { id: "b", text: "2.54" },
      { id: "c", text: "3.25" },
      { id: "d", text: "12.45" }
    ],
    answerId: "a",
    explanation: "0.90 + 2.45 = 3.35.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q16",
    prompt: "What is 6.5 \u2212 2.75?",
    options: [
      { id: "a", text: "3.75" },
      { id: "b", text: "4.25" },
      { id: "c", text: "3.25" },
      { id: "d", text: "4.75" }
    ],
    answerId: "a",
    explanation: "6.50 \u2212 2.75 = 3.75.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q17",
    prompt: "What is 3.2 \u00f7 100?",
    options: [
      { id: "a", text: "0.032" },
      { id: "b", text: "0.32" },
      { id: "c", text: "32" },
      { id: "d", text: "320" }
    ],
    answerId: "a",
    explanation: "\u00f7100 moves the point two places left: 3.2 \u2192 0.032.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q18",
    prompt: "Write 2/5 as a percent.",
    options: [
      { id: "a", text: "20%" },
      { id: "b", text: "25%" },
      { id: "c", text: "40%" },
      { id: "d", text: "50%" }
    ],
    answerId: "c",
    explanation: "2/5 = 0.4 = 40%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q19",
    prompt: "What is 5% of 200?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "10" },
      { id: "c", text: "20" },
      { id: "d", text: "50" }
    ],
    answerId: "b",
    explanation: "5% of 200 = (5/100)\u00d7200 = 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q20",
    prompt: "A ribbon is 1.25 m long. How many centimetres is that?",
    options: [
      { id: "a", text: "12.5 cm" },
      { id: "b", text: "125 cm" },
      { id: "c", text: "1.25 cm" },
      { id: "d", text: "1250 cm" }
    ],
    answerId: "b",
    explanation: "1 m = 100 cm, so 1.25 \u00d7 100 = 125 cm.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q21",
    prompt: "Which decimal equals 3/8?",
    options: [
      { id: "a", text: "0.375" },
      { id: "b", text: "0.38" },
      { id: "c", text: "0.3" },
      { id: "d", text: "0.125" }
    ],
    answerId: "a",
    explanation: "3 \u00f7 8 = 0.375.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q22",
    prompt: "Out of 50 children, 35 like cricket. What percent like cricket?",
    options: [
      { id: "a", text: "35%" },
      { id: "b", text: "70%" },
      { id: "c", text: "65%" },
      { id: "d", text: "50%" }
    ],
    answerId: "b",
    explanation: "35/50 = 70/100 = 70%.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q23",
    prompt: "A bag costs \u20b9250. After a 20% discount, what does it cost?",
    options: [
      { id: "a", text: "\u20b950" },
      { id: "b", text: "\u20b9200" },
      { id: "c", text: "\u20b9230" },
      { id: "d", text: "\u20b9180" }
    ],
    answerId: "b",
    explanation: "20% of 250 is 50; sale price is 250 \u2212 50 = \u20b9200.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g5-maths-dec-b-q24",
    prompt: "What is (0.6 + 0.15) \u00d7 10?",
    options: [
      { id: "a", text: "7.5" },
      { id: "b", text: "6.15" },
      { id: "c", text: "0.75" },
      { id: "d", text: "75" }
    ],
    answerId: "a",
    explanation: "0.6 + 0.15 = 0.75; 0.75 \u00d7 10 = 7.5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "💯",
    title: "Decimals and percentages",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Decimals name tenths and hundredths. Percent means per hundred.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Tenths", reveal: "One of ten equal parts \u2192 0.1", emoji: "1\ufe0f\u20e3" },
      { label: "Hundredths", reveal: "One of a hundred equal parts \u2192 0.01", emoji: "\ud83d\udd22" },
      { label: "Percent", reveal: "Out of 100; 25% = 1/4 = 0.25", emoji: "\ud83d\udcaf" },
      { label: "Point hop", reveal: "\u00d710 moves the point one place right", emoji: "\u27a1\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "What is 25% of 40?",
    options: [
        { id: "a", text: "5" },
        { id: "b", text: "10" },
        { id: "c", text: "15" },
        { id: "d", text: "20" }
    ],
    answerId: "b",
    why: "25% is one quarter; 40 \u00f7 4 = 10.",
    visual: "number-line",
    speak: "What is 25% of 40?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Tenths & hundredths", "Line up decimal points", "Percent = /100", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5MathsDecimals: ChapterDef = {
  id: "decimals-percentages",
  title: "Decimals & Percentages",
  emoji: "💯",
  blurb: "Tenths, hundredths and percent",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "decimals",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "decimals",
      questions: SET_B,
    },
  ],
  paperTopics: ["decimals", "percent", "fractions"],
};

export const g5MathsDecimalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
