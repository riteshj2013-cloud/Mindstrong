import type { ChapterDef, PrepQuestion } from "../types";
import { g6MathsFractionsDecimalsAchievers } from "./g6-maths-fractions-decimals-achievers";

/** Fractions & Decimals - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-maths-frac-a-q01",
    prompt: "What is 3/4 + 1/4?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "4/8" },
      { id: "c", text: "3/8" },
      { id: "d", text: "2/4" }
    ],
    answerId: "a",
    explanation: "Like denominators: 3/4 + 1/4 = 4/4 = 1. 4/8 is tempting if you add the tops and the bottoms instead of matching denominators first; with a common denominator the sum is 1.",
    hints: ["Same denominators: add the numerators of 3/4 and the other quarter. Four quarters make what?"]
  },
  {
    id: "g6-maths-frac-a-q02",
    prompt: "What is 5/6 − 1/6 in its simplest form?",
    options: [
      { id: "a", text: "4/6" },
      { id: "b", text: "2/3" },
      { id: "c", text: "6/6" },
      { id: "d", text: "4/12" }
    ],
    answerId: "b",
    explanation: "5/6 − 1/6 = 4/6, and dividing top and bottom by 2 gives 2/3. 4/6 may look right because it has the same value, but 4 and 6 still share the factor 2, so it is not in its simplest form. 4/6 is tempting, but it does not fit the facts in the question.",
    hints: ["Subtract the tops 5 − 1, keep sixths, then divide top and bottom by 2."]
  },
  {
    id: "g6-maths-frac-a-q03",
    prompt: "Which fraction is equivalent to 2/3?",
    options: [
      { id: "a", text: "3/2" },
      { id: "b", text: "2/6" },
      { id: "c", text: "4/6" },
      { id: "d", text: "6/3" }
    ],
    answerId: "c",
    explanation: "Multiply top and bottom by 2: 2/3 = 4/6. 3/2 is tempting if you multiply or divide only the numerator (or only the denominator) instead of both by the same number.",
    hints: ["Multiply the top and bottom of 2/3 by the same number, such as 2."]
  },
  {
    id: "g6-maths-frac-a-q04",
    prompt: "What is 2/5 of 40?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "20" },
      { id: "c", text: "10" },
      { id: "d", text: "16" }
    ],
    answerId: "d",
    explanation: "2/5 × 40 = 16. 20 is tempting if you multiply only the numerators (or only the denominators) and leave the other pair; multiplying both pairs gives 16.",
    hints: ["Divide by 5, then multiply by 2."]
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
    explanation: "0.7 = 7/10, already simplest. 7/100 is tempting if you stop before dividing numerator and denominator by their greatest common factor.",
    hints: ["The 7 in 0.7 is in the tenths place. Write it over that place value, then check if it simplifies."]
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
    explanation: "3 ÷ 5 = 0.6. 0.35 is tempting if you miscount the decimal places when writing the fraction as a decimal (or the other way round).",
    hints: ["Make the bottom 10: multiply the top and bottom of 3/5 by 2. Then write the tenths as a decimal."]
  },
  {
    id: "g6-maths-frac-a-q07",
    prompt: "Which is greater: 0.45 or 0.5?",
    options: [
      { id: "a", text: "0.45" },
      { id: "b", text: "Equal" },
      { id: "c", text: "0.5" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "c",
    explanation: "0.50 > 0.45, so 0.5 is greater. 0.45 is tempting if you compare the wrong parts of the numbers, but the correct comparison gives 0.5.",
    hints: ["Give both numbers two decimal places by adding a zero, then compare the hundredths with 0.45."]
  },
  {
    id: "g6-maths-frac-a-q08",
    prompt: "What is 1.2 + 0.35?",
    options: [
      { id: "a", text: "1.45" },
      { id: "b", text: "4.7" },
      { id: "c", text: "0.155" },
      { id: "d", text: "1.55" }
    ],
    answerId: "d",
    explanation: "1.20 + 0.35 = 1.55. 1.45 is tempting if you rename 1.20 as 120 hundredths and then slip a place when adding; aligning the points gives 1.55.",
    hints: ["Line up the decimal points: write 1.2 as 1.20, then add 0.35."]
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
    explanation: "4.50 − 1.75 = 2.75. 3.25 is tempting if you add whole-number and decimal parts in separate columns and mis-carry; careful addition gives 2.75.",
    hints: ["Write 4.5 as 4.50, line up the decimal points, then subtract 1.75."]
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
    explanation: "6 × 2 = 12 with two decimal places total → 0.12. 0.012 is tempting if you flip only one fraction when dividing; multiply by the reciprocal of the divisor to get 0.12.",
    hints: ["Multiply 6 × 2, then count the decimal places in 0.6 and 0.2 together."]
  },
  {
    id: "g6-maths-frac-a-q11",
    prompt: "Express 125/100 as a decimal.",
    options: [
      { id: "a", text: "12.5" },
      { id: "b", text: "0.125" },
      { id: "c", text: "1.25" },
      { id: "d", text: "125" }
    ],
    answerId: "c",
    explanation: "125/100 = 1.25. 125 is tempting if you miscount the decimal places when writing the fraction as a decimal (or the other way round).",
    hints: ["Denominator 100 → two digits after the decimal."]
  },
  {
    id: "g6-maths-frac-a-q12",
    prompt: "A ribbon is 3/4 m long. Another is 5/8 m. Total length?",
    options: [
      { id: "a", text: "8/12 m" },
      { id: "b", text: "11/8 m" },
      { id: "c", text: "1 1/8 m" },
      { id: "d", text: "1 3/8 m" }
    ],
    answerId: "d",
    explanation: "3/4 = 6/8; 6/8 + 5/8 = 11/8 = 1 3/8 m. 1 1/8 m is tempting if you subtract tops and bottoms without a common denominator.",
    hints: ["Change 3/4 m into eighths, add 5/8 m, then write the improper fraction as a mixed number."]
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
    explanation: "7 ÷ 20 = 0.35. 0.07 is tempting if you miscount the decimal places when writing the fraction as a decimal (or the other way round).",
    hints: ["Divide 7 by 20."]
  },
  {
    id: "g6-maths-frac-a-q14",
    prompt: "Simplify 18/24.",
    options: [
      { id: "a", text: "9/12" },
      { id: "b", text: "3/4" },
      { id: "c", text: "2/3" },
      { id: "d", text: "6/8" }
    ],
    answerId: "b",
    explanation: "Divide top and bottom by 6: 3/4. 9/12 is tempting if you stop before fully simplifying; the simplest form is 3/4.",
    hints: ["Find the HCF of 18 and 24, then divide the top and bottom by it."]
  },
  {
    id: "g6-maths-frac-a-q15",
    prompt: "What is 2.5 × 4?",
    options: [
      { id: "a", text: "1.0" },
      { id: "b", text: "6.5" },
      { id: "c", text: "10" },
      { id: "d", text: "8.5" }
    ],
    answerId: "c",
    explanation: "2.5 × 4 = 10. 6.5 is tempting if you treat the decimals as fractions with different denominators and add tops only; aligning tenths gives 10.",
    hints: ["Split 2.5 into 2 and 0.5, multiply each part by 4, then add."]
  },
  {
    id: "g6-maths-frac-a-q16",
    prompt: "Ravi walks 2.4 km in the morning and 1.85 km in the evening. Total?",
    options: [
      { id: "a", text: "3.25 km" },
      { id: "b", text: "4.125 km" },
      { id: "c", text: "3.125 km" },
      { id: "d", text: "4.25 km" }
    ],
    answerId: "d",
    explanation: "2.40 + 1.85 = 4.25 km. 3.25. 3.25 km is tempting if you compare numerators alone without a common denominator; matching bottoms first gives 4.25 km.",
    hints: ["Write 2.4 km as 2.40 km, line up the decimal points, then add Ravi's 1.85 km."]
  },
  {
    id: "g6-maths-frac-a-q17",
    prompt: "Which is a proper fraction?",
    options: [
      { id: "a", text: "3/7" },
      { id: "b", text: "5/4" },
      { id: "c", text: "4/4" },
      { id: "d", text: "9/5" }
    ],
    answerId: "a",
    explanation: "A proper fraction has numerator smaller than denominator: 3/7. 5/4 is tempting if you subtract the denominators as well as the numerators; over a common denominator the difference is 3/7.",
    hints: ["Proper means top < bottom."]
  },
  {
    id: "g6-maths-frac-a-q18",
    prompt: "Convert 2 1/4 to an improper fraction.",
    options: [
      { id: "a", text: "5/4" },
      { id: "b", text: "9/4" },
      { id: "c", text: "8/4" },
      { id: "d", text: "6/4" }
    ],
    answerId: "b",
    explanation: "2 × 4 + 1 = 9, so 9/4. 5/4 is tempting if you mishandle the whole-number part when converting between mixed and improper form.",
    hints: ["Each whole has 4 quarters. Find the quarters in 2 wholes, then add 1 more quarter."]
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
    explanation: "240 ÷ 8 = 30; 30 × 3 = ₹90. ₹30 is tempting if you treat a mixed number as an improper fraction with the wrong conversion; converting carefully gives ₹90.",
    hints: ["Find 1/8 of ₹240 by dividing by 8, then multiply by 3."]
  },
  {
    id: "g6-maths-frac-a-q20",
    prompt: "Arrange ascending: 0.09, 0.9, 0.19.",
    options: [
      { id: "a", text: "0.9, 0.19, 0.09" },
      { id: "b", text: "0.09, 0.9, 0.19" },
      { id: "c", text: "0.19, 0.09, 0.9" },
      { id: "d", text: "0.09, 0.19, 0.9" }
    ],
    answerId: "d",
    explanation: "As decimals: 0.09 < 0.19 < 0.90, so ascending order is 0.09, 0.19, 0.9. 0.09, 0.9, 0.19 is tempting if you compare digit strings without lining up place values.",
    hints: ["Write 0.09, 0.9 and 0.19 with two decimal places each, then compare the hundredths."]
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
    explanation: "1.00 − 0.37 = 0.63. 0.73 is tempting if you round one decimal before adding; keeping both decimals exact gives 0.63.",
    hints: ["Write 1 as 1.00, then subtract 0.37. Check: your answer plus 0.37 should make 1."]
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
    explanation: "0.25 = 25/100 = 1/4. 1/2 is tempting if you flip the dividend instead of the divisor when dividing fractions.",
    hints: ["0.25 is 25 hundredths. Write 25/100 and simplify by dividing top and bottom by 25."]
  },
  {
    id: "g6-maths-frac-a-q23",
    prompt: "Compute 7/10 + 0.2.",
    options: [
      { id: "a", text: "0.72" },
      { id: "b", text: "1.0" },
      { id: "c", text: "0.9" },
      { id: "d", text: "0.5" }
    ],
    answerId: "c",
    explanation: "7/10 = 0.7; 0.7 + 0.2 = 0.9. 0.72 is tempting if you forget a trailing zero when lining up tenths and hundredths; lining up from the point gives 0.9 when you revisit the compute.",
    hints: ["Write 7/10 as a decimal first, then add 0.2."]
  },
  {
    id: "g6-maths-frac-a-q24",
    prompt: "A bottle holds 1.5 L. Meera pours out 3/5 L. How much is left?",
    options: [
      { id: "a", text: "1.1 L" },
      { id: "b", text: "0.8 L" },
      { id: "c", text: "1.2 L" },
      { id: "d", text: "0.9 L" }
    ],
    answerId: "d",
    explanation: "3/5 = 0.6; 1.5 − 0.6 = 0.9 L. 1.1 L is tempting if you read 3/5 as 0.4 L, but 3/5 = 0.6, so 0.9 L is left.",
    hints: ["Change Meera's 3/5 L into a decimal by making the bottom 10. Then subtract it from 1.5 L."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-maths-frac-b-q01",
    prompt: "What is 1/3 + 1/6?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "2/9" },
      { id: "c", text: "1/9" },
      { id: "d", text: "2/6" }
    ],
    answerId: "a",
    explanation: "1/3 = 2/6; 2/6 + 1/6 = 3/6 = 1/2. 2/9 is tempting if you add the numerators and the denominators, instead of using a common denominator.",
    hints: ["Common denominator of 3 and 6."]
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
    explanation: "1/4 = 2/8; 5/8 − 2/8 = 3/8. 4/8 is tempting if you subtract tops and bottoms without a common denominator.",
    hints: ["Write 1/4 as eighths first, then subtract it from 5/8."]
  },
  {
    id: "g6-maths-frac-b-q03",
    prompt: "Which pair are equivalent?",
    options: [
      { id: "a", text: "1/2 and 2/3" },
      { id: "b", text: "2/4 and 3/9" },
      { id: "c", text: "3/5 and 6/10" },
      { id: "d", text: "4/6 and 2/2" }
    ],
    answerId: "c",
    explanation: "3/5 × 2/2 = 6/10. 1/2 and 2/3 is tempting if you multiply or divide only the numerator (or only the denominator) instead of both by the same number.",
    hints: ["Simplify both fractions in every pair. An equivalent pair reduces to the same simplest form."]
  },
  {
    id: "g6-maths-frac-b-q04",
    prompt: "What is 3/4 of 2.4?",
    options: [
      { id: "a", text: "0.8" },
      { id: "b", text: "3.2" },
      { id: "c", text: "1.2" },
      { id: "d", text: "1.8" }
    ],
    answerId: "d",
    explanation: "2.4 ÷ 4 = 0.6; 0.6 × 3 = 1.8. 3.2 is tempting if you move the decimal one place instead of two when converting; the correct place shift gives 1.8.",
    hints: ["Quarter of 2.4, then triple it."]
  },
  {
    id: "g6-maths-frac-b-q05",
    prompt: "Convert 0.08 to a fraction in simplest form.",
    options: [
      { id: "a", text: "2/25" },
      { id: "b", text: "8/10" },
      { id: "c", text: "8/100" },
      { id: "d", text: "4/50" }
    ],
    answerId: "a",
    explanation: "0.08 = 8/100 = 2/25. 8/10 is tempting if you stop before dividing numerator and denominator by their greatest common factor.",
    hints: ["0.08 is 8 hundredths. Write it over 100, then divide top and bottom by 4."]
  },
  {
    id: "g6-maths-frac-b-q06",
    prompt: "Convert 9/4 to a mixed number.",
    options: [
      { id: "a", text: "1 1/4" },
      { id: "b", text: "2 1/4" },
      { id: "c", text: "2 1/9" },
      { id: "d", text: "4/9" }
    ],
    answerId: "b",
    explanation: "9 ÷ 4 = 2 remainder 1 → 2 1/4. 2 1/9 is tempting if you mishandle the whole-number part when converting between mixed and improper form.",
    hints: ["How many whole 4s fit in 9? That is the whole part; the remainder stays over 4."]
  },
  {
    id: "g6-maths-frac-b-q07",
    prompt: "What is 2.05 + 3.7?",
    options: [
      { id: "a", text: "5.12" },
      { id: "b", text: "5.775" },
      { id: "c", text: "5.75" },
      { id: "d", text: "23.75" }
    ],
    answerId: "c",
    explanation: "2.05 + 3.70 = 5.75. 5.775 is tempting if you annex zeros unevenly before adding; writing equal decimal places first gives 5.75.",
    hints: ["Write 3.7 as 3.70, line up the decimal points, then add 2.05."]
  },
  {
    id: "g6-maths-frac-b-q08",
    prompt: "What is 6 − 2.48?",
    options: [
      { id: "a", text: "4.52" },
      { id: "b", text: "3.62" },
      { id: "c", text: "4.62" },
      { id: "d", text: "3.52" }
    ],
    answerId: "d",
    explanation: "6.00 − 2.48 = 3.52. 4.52 is tempting if you compare the digits left-to-right without aligning place values.",
    hints: ["Write 6 as 6.00, then subtract."]
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
    explanation: "1.5 ÷ 0.3 = 15 ÷ 3 = 5. 4.5 is tempting if you flip the wrong fraction, or multiply without taking the reciprocal.",
    hints: ["Multiply 0.3 and the other number by 10 to remove the decimals. Then divide."]
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
    explanation: "85.50 + 24.75 = ₹110.25. ₹100. ₹109. ₹109. ₹100. ₹100.25 is tempting if you rename 1.20 as 120 hundredths and then slip a place when adding; aligning the points gives ₹110.25 when you revisit the book.",
    hints: ["Add the rupees ₹85 + ₹24, then the paise 50 + 75, carrying 100 paise over as ₹1."]
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
    explanation: "0.1000 is smaller than 0.1001, 0.1010 and 0.1100. 0.1001 is tempting if you compare the wrong parts of the numbers, but the correct comparison gives 0.1.",
    hints: ["To find the least, write each with four decimal places, so 0.11 becomes 0.1100. Then compare digit by digit."]
  },
  {
    id: "g6-maths-frac-b-q12",
    prompt: "Express 4.2 as a fraction in simplest form.",
    options: [
      { id: "a", text: "42/10" },
      { id: "b", text: "4/2" },
      { id: "c", text: "42/100" },
      { id: "d", text: "21/5" }
    ],
    answerId: "d",
    explanation: "4.2 = 42/10 = 21/5. 42/10 is tempting if you stop before fully simplifying; the simplest form is 21/5.",
    hints: ["Write 4.2 as 42/10, then divide the top and bottom by 2."]
  },
  {
    id: "g6-maths-frac-b-q13",
    prompt: "What is 2/3 × 9/10 in its simplest form?",
    options: [
      { id: "a", text: "3/5" },
      { id: "b", text: "18/30" },
      { id: "c", text: "11/13" },
      { id: "d", text: "2/10" }
    ],
    answerId: "a",
    explanation: "2/3 × 9/10 = 18/30, and dividing top and bottom by 6 gives 3/5. 18/30 may look right because it has the same value, but 18 and 30 still share the factor 6, so it is not in its simplest form. 18/30 is tempting, but it does not fit the facts in the question.",
    hints: ["Multiply tops and bottoms, or first cancel the 3 with the 9. Then simplify fully."]
  },
  {
    id: "g6-maths-frac-b-q14",
    prompt: "A tank is 5/8 full. If capacity is 40 L, how many litres are in it?",
    options: [
      { id: "a", text: "20 L" },
      { id: "b", text: "25 L" },
      { id: "c", text: "32 L" },
      { id: "d", text: "15 L" }
    ],
    answerId: "b",
    explanation: "5/8 × 40 = 25 L. 20 L is tempting if you subtract tops and bottoms without a common denominator.",
    hints: ["Fraction of the whole capacity."]
  },
  {
    id: "g6-maths-frac-b-q15",
    prompt: "Round 3.678 to 2 decimal places.",
    options: [
      { id: "a", text: "3.67" },
      { id: "b", text: "3.70" },
      { id: "c", text: "3.68" },
      { id: "d", text: "3.60" }
    ],
    answerId: "c",
    explanation: "The third decimal is 8 ≥ 5, so 3.68. 3.67 is tempting if you add whole-number and decimal parts in separate columns and mis-carry; careful addition gives 3.68 when you revisit the round.",
    hints: ["Look at the third decimal digit, 8. Since it is 5 or more, round the second digit up."]
  },
  {
    id: "g6-maths-frac-b-q16",
    prompt: "What is 0.4 + 2/5?",
    options: [
      { id: "a", text: "1.0" },
      { id: "b", text: "0.6" },
      { id: "c", text: "0.9" },
      { id: "d", text: "0.8" }
    ],
    answerId: "d",
    explanation: "2/5 = 0.4; 0.4 + 0.4 = 0.8. 0.9 is tempting if you treat the decimals as fractions with different denominators and add tops only; aligning tenths gives 0.8.",
    hints: ["Convert 2/5 to a decimal first."]
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
    explanation: "3 ÷ 8 = 0.375. 0.38 is tempting if you miscount the decimal places when writing the fraction as a decimal (or the other way round).",
    hints: ["Divide 3 by 8."]
  },
  {
    id: "g6-maths-frac-b-q18",
    prompt: "Compute 12.6 ÷ 3.",
    options: [
      { id: "a", text: "3.2" },
      { id: "b", text: "4.2" },
      { id: "c", text: "42" },
      { id: "d", text: "0.42" }
    ],
    answerId: "b",
    explanation: "12.6 ÷ 3 = 4.2. 3.2 is tempting if you flip the wrong fraction, or multiply without taking the reciprocal.",
    hints: ["Divide 12 by 3, then 0.6 by 3, and add the two results."]
  },
  {
    id: "g6-maths-frac-b-q19",
    prompt: "A pizza is cut into 8 equal slices. Mira eats 3. What fraction remains?",
    options: [
      { id: "a", text: "3/8" },
      { id: "b", text: "3/5" },
      { id: "c", text: "5/8" },
      { id: "d", text: "8/5" }
    ],
    answerId: "c",
    explanation: "8 − 3 = 5 slices left → 5/8. 3/8 is tempting because it is the part used up, but the question asks for what is left, which is 5/8.",
    hints: ["Slices left = 8 − 3. Write the slices left over the 8 slices of the whole pizza."]
  },
  {
    id: "g6-maths-frac-b-q20",
    prompt: "What is 7/2 − 1.5?",
    options: [
      { id: "a", text: "3.5" },
      { id: "b", text: "5.5" },
      { id: "c", text: "1" },
      { id: "d", text: "2" }
    ],
    answerId: "d",
    explanation: "7/2 = 3.5; 3.5 − 1.5 = 2. 1 is tempting if you subtract tops and bottoms without a common denominator.",
    hints: ["Divide 7 by the bottom number to make a decimal, then subtract 1.5."]
  },
  {
    id: "g6-maths-frac-b-q21",
    prompt: "Convert 0.125 to a fraction in simplest form.",
    options: [
      { id: "a", text: "1/8" },
      { id: "b", text: "125/1000" },
      { id: "c", text: "1/4" },
      { id: "d", text: "5/40" }
    ],
    answerId: "a",
    explanation: "0.125 = 125/1000 = 1/8. 125/1000 is tempting if you stop before dividing numerator and denominator by their greatest common factor.",
    hints: ["Write 0.125 as 125/1000, then keep dividing the top and bottom by 5."]
  },
  {
    id: "g6-maths-frac-b-q22",
    prompt: "Which statement about 0.7 and 7/10 is true?",
    options: [
      { id: "a", text: "0.7 > 7/10" },
      { id: "b", text: "0.7 = 7/10" },
      { id: "c", text: "0.7 < 7/10" },
      { id: "d", text: "0.07 = 7/10" }
    ],
    answerId: "b",
    explanation: "7/10 = 0.7 exactly. 0.7. 0.7 > 7/10 is tempting if you compare numerators alone without a common denominator; matching bottoms first gives 0.7 = 7/10.",
    hints: ["Change 7/10 into a decimal by dividing 7 by 10. Compare it with 0.7."]
  },
  {
    id: "g6-maths-frac-b-q23",
    prompt: "A rope is 6.4 m. Cut into pieces of 0.8 m each. How many pieces?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "9" },
      { id: "c", text: "8" },
      { id: "d", text: "6" }
    ],
    answerId: "c",
    explanation: "6.4 ÷ 0.8 = 64 ÷ 8 = 8. 7 is tempting if you subtract the denominators as well as the numerators; over a common denominator the difference is 8.",
    hints: ["Divide total length by piece length."]
  },
  {
    id: "g6-maths-frac-b-q24",
    prompt: "What is 5/6 of 18?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "15" }
    ],
    answerId: "d",
    explanation: "18 ÷ 6 = 3; 3 × 5 = 15. 12 is tempting if you treat a mixed number as an improper fraction with the wrong conversion; converting carefully gives 15.",
    hints: ["One-sixth of 18, then five of those."]
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
    {
      id: "set-achievers",
      title: "Achievers",
      questionCount: g6MathsFractionsDecimalsAchievers.length,
      topic: "fractions",
      questions: g6MathsFractionsDecimalsAchievers,
    },
  ],
  paperTopics: ["fractions", "decimals"],
};

export const g6MathsFractionsDecimalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
