import type { ChapterDef, PrepQuestion } from "../types";
import { g5MathsDecimalsAchievers } from "./g5-maths-decimals-achievers";

/** Decimals & Percentages - original olympiad-style content (not affiliated with SOF). */

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
    explanation: "3 tenths means 3/10, which is written as 0.3. 0.03 is tempting if you put the digit in the hundredths place instead of the tenths; tenths are 0.3.",
    hints: ["Tenths is the first place after the decimal point. Which decimal has 3 in that place and nothing else?"]
  },
  {
    id: "g5-maths-dec-a-q02",
    prompt: "What decimal represents 7 hundredths?",
    options: [
      { id: "a", text: "0.7" },
      { id: "b", text: "0.07" },
      { id: "c", text: "7.0" },
      { id: "d", text: "0.007" }
    ],
    answerId: "b",
    explanation: "7 hundredths is 7/100, written as 0.07 with the 7 in the hundredths place. 0.007 is tempting if you place the digit one column too far left or right; hundredths are 0.07.",
    hints: ["Hundredths is the second place after the decimal point. Which decimal has 7 there and no tenths?"]
  },
  {
    id: "g5-maths-dec-a-q03",
    prompt: "In 4.86, which digit is in the tenths place?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "0" }
    ],
    answerId: "c",
    explanation: "Just after the decimal point is the tenths place, so the digit is 8. 6 is tempting if you put the digit one column too far left after the decimal point.",
    hints: ["In 4.86, the first digit after the decimal point is the tenths digit."]
  },
  {
    id: "g5-maths-dec-a-q04",
    prompt: "Which number is equal to 0.5?",
    options: [
      { id: "a", text: "1/5" },
      { id: "b", text: "5" },
      { id: "c", text: "1/50" },
      { id: "d", text: "1/2" }
    ],
    answerId: "d",
    explanation: "0.5 = 5/10 = 1/2. 1/5 is tempting if you read the 5 as the denominator (as in “one over five”) instead of five tenths.",
    hints: ["0.5 means 5 tenths, or 5/10. Simplify 5/10."]
  },
  {
    id: "g5-maths-dec-a-q05",
    prompt: "Which is greater: 0.8 or 0.75?",
    options: [
      { id: "a", text: "0.8" },
      { id: "b", text: "0.75" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "a",
    explanation: "Write both with hundredths: 0.80 and 0.75. Since 80 > 75, 0.8 is greater. 0.75 is tempting if you decide the number with more digits after the point must be larger.",
    hints: ["Is 0.75 more or less than the other number once both are written with two decimal places?"]
  },
  {
    id: "g5-maths-dec-a-q06",
    prompt: "What is 1.2 + 0.5?",
    options: [
      { id: "a", text: "1.25" },
      { id: "b", text: "1.7" },
      { id: "c", text: "0.7" },
      { id: "d", text: "6.2" }
    ],
    answerId: "b",
    explanation: "Line up tenths: 1.2 + 0.5 = 1.7. 1.25 is tempting if you treat 0.5 as five hundredths (0.05) and add 1.20 + 0.05 = 1.25.",
    hints: ["Line up the decimal points of 1.2 and 0.5, then add the tenths first, then the ones."]
  },
  {
    id: "g5-maths-dec-a-q07",
    prompt: "What is 3.6 \u2212 1.4?",
    options: [
      { id: "a", text: "2.0" },
      { id: "b", text: "5.0" },
      { id: "c", text: "2.2" },
      { id: "d", text: "1.2" }
    ],
    answerId: "c",
    explanation: "Subtract tenths then ones: 3.6 − 1.4 = 2.2. 2.0 is tempting if you line the decimals up wrongly when subtracting; the difference is 2.2.",
    hints: ["Line up the decimal points of 3.6 and 1.4, then subtract the tenths first, then the ones."]
  },
  {
    id: "g5-maths-dec-a-q08",
    prompt: "What is 0.4 \u00d7 10?",
    options: [
      { id: "a", text: "0.04" },
      { id: "b", text: "40" },
      { id: "c", text: "0.4" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "×10 moves the point one place right: 0.4 → 4. 0.4 is tempting if you leave the decimal point unmoved instead of shifting it for ×10.",
    hints: ["Multiplying by 10 moves every digit one place to the left, so tenths become ones. What does the decimal become?"]
  },
  {
    id: "g5-maths-dec-a-q09",
    prompt: "What is 25% as a fraction in simplest form?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "25/100" },
      { id: "c", text: "1/25" },
      { id: "d", text: "4/1" }
    ],
    answerId: "a",
    explanation: "25% = 25/100 = 1/4 after dividing top and bottom by 25. 25/100 is tempting if you forget that percent means hundredths; the correct amount is 1/4.",
    hints: ["25% means 25 out of 100. Write 25/100 and divide the top and bottom by 25."]
  },
  {
    id: "g5-maths-dec-a-q10",
    prompt: "What is 50% of 80?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "40" },
      { id: "c", text: "50" },
      { id: "d", text: "16" }
    ],
    answerId: "b",
    explanation: "50% means half, and half of 80 is 40. 30 is tempting if you read tenths as hundredths (or the other way round).",
    hints: ["50% means 50 out of every 100, which is one half. Use that on 80."]
  },
  {
    id: "g5-maths-dec-a-q11",
    prompt: "Write 3/10 as a decimal.",
    options: [
      { id: "a", text: "3.0" },
      { id: "b", text: "0.03" },
      { id: "c", text: "0.3" },
      { id: "d", text: "0.003" }
    ],
    answerId: "c",
    explanation: "3/10 is three tenths, written as 0.3. 0.03 is tempting if you move the decimal point the wrong number of places; dividing gives 0.3.",
    hints: ["Tenths go in the first place after the decimal point. Where does the 3 of 3/10 go?"]
  },
  {
    id: "g5-maths-dec-a-q12",
    prompt: "Which shows one and twenty-five hundredths?",
    options: [
      { id: "a", text: "1.025" },
      { id: "b", text: "12.5" },
      { id: "c", text: "0.125" },
      { id: "d", text: "1.25" }
    ],
    answerId: "d",
    explanation: "1 whole and 25 hundredths is 1.25. 1.025 is tempting if you line the decimals up wrongly when subtracting; the difference is 1.25.",
    hints: ["Write the whole number before the point, then twenty-five hundredths as two digits after it."]
  },
  {
    id: "g5-maths-dec-a-q13",
    prompt: "Arrange in ascending order: 0.4, 0.35, 0.405",
    options: [
      { id: "a", text: "0.35, 0.4, 0.405" },
      { id: "b", text: "0.4, 0.35, 0.405" },
      { id: "c", text: "0.35, 0.405, 0.4" },
      { id: "d", text: "0.405, 0.4, 0.35" }
    ],
    answerId: "a",
    explanation: `Align to thousandths: 0.350, 0.400, 0.405. Ascending order is 0.35, 0.4, 0.405. 0.4, 0.35, 0.405 is tempting if you read the digits after the point as whole numbers (4 < 35 < 405) instead of comparing place values.`,
    hints: ["Give each number three decimal places: 0.400, 0.350, 0.405. Then put them in ascending order."]
  },
  {
    id: "g5-maths-dec-a-q14",
    prompt: "What is the place value of 9 in 5.391?",
    options: [
      { id: "a", text: "9 ones" },
      { id: "b", text: "9 hundredths" },
      { id: "c", text: "9 tenths" },
      { id: "d", text: "9 thousandths" }
    ],
    answerId: "b",
    explanation: `After the point the places are tenths, hundredths, thousandths; in 5.391 the 9 is in the hundredths place. 9 ones is tempting if you give only the face value of the digit (9) and forget that its place after the point changes what it is worth.`,
    hints: ["Name the places after the decimal point in 5.391 one by one. Which place does the 9 sit in?"]
  },
  {
    id: "g5-maths-dec-a-q15",
    prompt: "What is 2.05 + 1.3?",
    options: [
      { id: "a", text: "3.08" },
      { id: "b", text: "2.18" },
      { id: "c", text: "3.35" },
      { id: "d", text: "4.35" }
    ],
    answerId: "c",
    explanation: "Write 1.3 as 1.30; 2.05 + 1.30 = 3.35. 3.08 is tempting if you add the 3 of 1.3 into the hundredths place of 2.05 (5 + 3 = 8) instead of into the tenths place (0 + 3).",
    hints: ["Write 1.3 as 1.30 so both have two decimal places, then add 2.05 column by column."]
  },
  {
    id: "g5-maths-dec-a-q16",
    prompt: "What is 4.2 \u2212 0.85?",
    options: [
      { id: "a", text: "3.45" },
      { id: "b", text: "4.65" },
      { id: "c", text: "3.15" },
      { id: "d", text: "3.35" }
    ],
    answerId: "d",
    explanation: "4.20 − 0.85 = 3.35. 3.45 is tempting if you line the decimals up wrongly; the difference is 3.35.",
    hints: ["Write 4.2 as 4.20, line up the points with 0.85, then subtract, borrowing where needed."]
  },
  {
    id: "g5-maths-dec-a-q17",
    prompt: "What is 0.56 \u00d7 100?",
    options: [
      { id: "a", text: "56" },
      { id: "b", text: "5.6" },
      { id: "c", text: "560" },
      { id: "d", text: "0.0056" }
    ],
    answerId: "a",
    explanation: "×100 moves the point two places right: 0.56 → 56. 5.6 is tempting if you move the point only one place (as for ×10) instead of two places.",
    hints: ["Multiplying by 100 moves every digit two places to the left, so hundredths become ones. What does the decimal become?"]
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
    explanation: "0.75 × 100 = 75%, so 0.75 = 75%. 7.5% is tempting if you multiply by 10 instead of by 100 when converting decimal to percent.",
    hints: ["To change a decimal to a percent, multiply 0.75 by 100."]
  },
  {
    id: "g5-maths-dec-a-q19",
    prompt: "What is 10% of 250?",
    options: [
      { id: "a", text: "2.5" },
      { id: "b", text: "250" },
      { id: "c", text: "25" },
      { id: "d", text: "10" }
    ],
    answerId: "c",
    explanation: "10% means one tenth, so 250 ÷ 10 = 25. 10 is tempting if you report the percentage figure itself instead of taking 10% of 250.",
    hints: ["10% is one tenth. Divide 250 by 10."]
  },
  {
    id: "g5-maths-dec-a-q20",
    prompt: "A bottle holds 0.75 L. How many millilitres is that?",
    options: [
      { id: "a", text: "75 ml" },
      { id: "b", text: "7.5 ml" },
      { id: "c", text: "7500 ml" },
      { id: "d", text: "750 ml" }
    ],
    answerId: "d",
    explanation: "1 L = 1000 ml, so 0.75 × 1000 = 750 ml. 75 ml is tempting if you multiply by 100 instead of by 1000.",
    hints: ["1 L = 1000 ml, so multiply 0.75 by 1000."]
  },
  {
    id: "g5-maths-dec-a-q21",
    prompt: "Which fraction equals 0.2?",
    options: [
      { id: "a", text: "1/5" },
      { id: "b", text: "1/2" },
      { id: "c", text: "2/5" },
      { id: "d", text: "1/20" }
    ],
    answerId: "a",
    explanation: "0.2 = 2/10 = 1/5. 1/2 is tempting if you read 0.2 as “a half” by confusing it with 0.5.",
    hints: ["0.2 means 2 tenths, or 2/10. Simplify 2/10."]
  },
  {
    id: "g5-maths-dec-a-q22",
    prompt: "Riya scored 18 marks out of 20. What percent did she score?",
    options: [
      { id: "a", text: "18%" },
      { id: "b", text: "90%" },
      { id: "c", text: "80%" },
      { id: "d", text: "95%" }
    ],
    answerId: "b",
    explanation: "18/20 = 90/100 = 90%. 18% is tempting if you report the raw score 18 as a percent without scaling out of 100.",
    hints: ["Write 18 marks out of 20 as a fraction, then multiply top and bottom by 5 to get a denominator of 100."]
  },
  {
    id: "g5-maths-dec-a-q23",
    prompt: "A shirt costs \u20b9400. A shop offers 25% off. What is the sale price?",
    options: [
      { id: "a", text: "\u20b9100" },
      { id: "b", text: "\u20b9325" },
      { id: "c", text: "\u20b9300" },
      { id: "d", text: "\u20b9375" }
    ],
    answerId: "c",
    explanation: "25% of ₹400 is ₹100, so the sale price is 400 − 100 = ₹300. ₹100 is tempting if you stop after finding the discount and report the discount instead of the sale price.",
    hints: ["Find 25% of ₹400 (one quarter), then subtract it from ₹400."]
  },
  {
    id: "g5-maths-dec-a-q24",
    prompt: "What is 6.04 \u00f7 10?",
    options: [
      { id: "a", text: "60.4" },
      { id: "b", text: "0.064" },
      { id: "c", text: "6.4" },
      { id: "d", text: "0.604" }
    ],
    answerId: "d",
    explanation: "÷10 moves the point one place left: 6.04 → 0.604. 0.064 is tempting if you drop the 0 in 6.04, but ÷ 10 keeps the digits 6, 0, 4: 0.604.",
    hints: ["Dividing by 10 moves every digit of 6.04 one place to the right."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-dec-b-q01",
    prompt: "What decimal represents 9 tenths?",
    options: [
      { id: "a", text: "0.9" },
      { id: "b", text: "0.09" },
      { id: "c", text: "9.0" },
      { id: "d", text: "0.009" }
    ],
    answerId: "a",
    explanation: "9 tenths is 9/10 = 0.9. 0.09 is tempting if you put the 9 in the hundredths place instead of the tenths place.",
    hints: ["Tenths is the first place after the decimal point. Which decimal has 9 in that place and nothing else?"]
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
    explanation: "4 hundredths is 4/100 = 0.04. 0.004 is tempting if you place the digit one column too far left or right; hundredths are 0.04.",
    hints: ["Hundredths is the second place after the decimal point. Which decimal has 4 there and no tenths?"]
  },
  {
    id: "g5-maths-dec-b-q03",
    prompt: "In 7.253, which digit is in the hundredths place?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "5" },
      { id: "d", text: "7" }
    ],
    answerId: "c",
    explanation: "Tenths is 2, hundredths is 5, thousandths is 3. 3 is tempting if you ignore a trailing zero that still marks a place value.",
    hints: ["In 7.253, count two places after the decimal point to reach the hundredths digit."]
  },
  {
    id: "g5-maths-dec-b-q04",
    prompt: "Which number is equal to 0.25?",
    options: [
      { id: "a", text: "1/2" },
      { id: "b", text: "1/25" },
      { id: "c", text: "2/5" },
      { id: "d", text: "1/4" }
    ],
    answerId: "d",
    explanation: "0.25 = 25/100 = 1/4. 1/2 is tempting if you confuse 0.25 with 0.5 (a half).",
    hints: ["0.25 means 25 hundredths, or 25/100. Simplify by dividing top and bottom by 25."]
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
    explanation: `Write both with hundredths: 0.09 and 0.10. Since 9 < 10, 0.09 is smaller. 0.1 is tempting if you ignore the zeros and compare 9 with 1, thinking 0.09 is bigger because 9 > 1.`,
    hints: ["Write 0.1 with two decimal places, then compare the hundredths of both numbers."]
  },
  {
    id: "g5-maths-dec-b-q06",
    prompt: "What is 0.8 + 0.15?",
    options: [
      { id: "a", text: "0.23" },
      { id: "b", text: "0.95" },
      { id: "c", text: "0.815" },
      { id: "d", text: "1.95" }
    ],
    answerId: "b",
    explanation: "Write 0.8 as 0.80; 0.80 + 0.15 = 0.95. 0.815 is tempting if you join the digits of 0.8 and 0.15 into one number 0.815 instead of lining up the decimal points.",
    hints: ["Write 0.8 as 0.80, line up the decimal points with 0.15, then add."]
  },
  {
    id: "g5-maths-dec-b-q07",
    prompt: "What is 5.0 \u2212 2.3?",
    options: [
      { id: "a", text: "3.7" },
      { id: "b", text: "7.3" },
      { id: "c", text: "2.7" },
      { id: "d", text: "2.3" }
    ],
    answerId: "c",
    explanation: "5.0 − 2.3 = 2.7. 2.3 is tempting if you line the decimals up wrongly; the difference is 2.7.",
    hints: ["Line up the decimal points of 5.0 and 2.3. Borrow from the ones to subtract the tenths."]
  },
  {
    id: "g5-maths-dec-b-q08",
    prompt: "What is 1.5 \u00d7 10?",
    options: [
      { id: "a", text: "0.15" },
      { id: "b", text: "150" },
      { id: "c", text: "1.05" },
      { id: "d", text: "15" }
    ],
    answerId: "d",
    explanation: "×10 moves the point one place right: 1.5 → 15. 0.15 is tempting if you move the point one place left (÷10) instead of one place right.",
    hints: ["Multiplying by 10 moves every digit of 1.5 one place to the left."]
  },
  {
    id: "g5-maths-dec-b-q09",
    prompt: "What is 10% as a decimal?",
    options: [
      { id: "a", text: "0.1" },
      { id: "b", text: "10" },
      { id: "c", text: "1.0" },
      { id: "d", text: "0.01" }
    ],
    answerId: "a",
    explanation: "10% = 10/100 = 0.1. 10 is tempting if you leave the percent as a whole number and skip dividing by 100.",
    hints: ["10% means 10 out of 100. Divide 10 by 100 to get a decimal."]
  },
  {
    id: "g5-maths-dec-b-q10",
    prompt: "What is 25% of 40?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "10" },
      { id: "c", text: "8" },
      { id: "d", text: "20" }
    ],
    answerId: "b",
    explanation: "25% is one quarter; 40 ÷ 4 = 10. 8 is tempting if you put the digit one column too far right after the decimal point.",
    hints: ["25% is one quarter. Split 40 into 4 equal parts."]
  },
  {
    id: "g5-maths-dec-b-q11",
    prompt: "Write 7/100 as a decimal.",
    options: [
      { id: "a", text: "0.7" },
      { id: "b", text: "7.0" },
      { id: "c", text: "0.07" },
      { id: "d", text: "0.007" }
    ],
    answerId: "c",
    explanation: "7/100 is seven hundredths = 0.07. 0.007 is tempting if you move the decimal point the wrong number of places; dividing gives 0.07.",
    hints: ["Hundredths take two places after the decimal point. Put the 7 of 7/100 in the second place."]
  },
  {
    id: "g5-maths-dec-b-q12",
    prompt: "Which shows three and six hundredths?",
    options: [
      { id: "a", text: "3.6" },
      { id: "b", text: "3.006" },
      { id: "c", text: "0.36" },
      { id: "d", text: "3.06" }
    ],
    answerId: "d",
    explanation: "Three wholes and six hundredths is 3.06 (0 in the tenths place). 3.6 is tempting if you put the 6 in the tenths place, reading “six tenths” instead of “six hundredths”.",
    hints: ["Write the whole number three before the point. Six hundredths goes in the second place after it; what fills the tenths?"]
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
    explanation: `Align to thousandths: 1.500, 1.050, 1.005. Descending order is 1.5, 1.05, 1.005. 1.005, 1.05, 1.5 is tempting if you think the number with more digits after the point is larger.`,
    hints: ["Give each number three decimal places: 1.050, 1.500, 1.005. Then put them in descending order."]
  },
  {
    id: "g5-maths-dec-b-q14",
    prompt: "What is the face value of 6 in 8.46?",
    options: [
      { id: "a", text: "0.6" },
      { id: "b", text: "6" },
      { id: "c", text: "0.06" },
      { id: "d", text: "60" }
    ],
    answerId: "b",
    explanation: `Face value is the digit itself, which is 6. 0.06 is tempting if you give the place value of the 6 (it is in the hundredths place, so 6 hundredths = 0.06) instead of its face value.`,
    hints: ["Face value is just the digit itself, whatever its place. Place value would depend on its position in 8.46."]
  },
  {
    id: "g5-maths-dec-b-q15",
    prompt: "What is 0.9 + 2.45?",
    options: [
      { id: "a", text: "2.54" },
      { id: "b", text: "3.25" },
      { id: "c", text: "3.35" },
      { id: "d", text: "12.45" }
    ],
    answerId: "c",
    explanation: "Write 0.9 as 0.90; 0.90 + 2.45 = 3.35. 2.54 is tempting if you treat 0.9 as nine hundredths (0.09) and add 2.45 + 0.09 = 2.54.",
    hints: ["Write 0.9 as 0.90, line up the decimal points with 2.45, then add column by column."]
  },
  {
    id: "g5-maths-dec-b-q16",
    prompt: "What is 6.5 \u2212 2.75?",
    options: [
      { id: "a", text: "4.25" },
      { id: "b", text: "3.25" },
      { id: "c", text: "4.75" },
      { id: "d", text: "3.75" }
    ],
    answerId: "d",
    explanation: "6.50 − 2.75 = 3.75. 3.25 is tempting if you line the decimals up wrongly; the difference is 3.75.",
    hints: ["Write 6.5 as 6.50, line up the points with 2.75, then subtract, borrowing where needed."]
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
    explanation: "÷100 moves the point two places left: 3.2 → 0.032. 0.32 is tempting if you move the decimal point the wrong number of places; dividing gives 0.032.",
    hints: ["Dividing by 100 moves every digit of 3.2 two places to the right. Fill the gaps with zeros."]
  },
  {
    id: "g5-maths-dec-b-q18",
    prompt: "Write 2/5 as a percent.",
    options: [
      { id: "a", text: "20%" },
      { id: "b", text: "40%" },
      { id: "c", text: "25%" },
      { id: "d", text: "50%" }
    ],
    answerId: "b",
    explanation: `2/5 = 40/100 = 40%. 20% is tempting if you multiply top and bottom by 10 to get 20/50 and then read the 20 as a percent, forgetting that a percent needs a denominator of 100.`,
    hints: ["Make the denominator of 2/5 equal to 100 by multiplying the top and bottom by 20."]
  },
  {
    id: "g5-maths-dec-b-q19",
    prompt: "What is 5% of 200?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "20" },
      { id: "c", text: "10" },
      { id: "d", text: "50" }
    ],
    answerId: "c",
    explanation: "5% of 200 = (5/100)×200 = 10. 5 is tempting if you ignore a trailing zero that still marks a place value.",
    hints: ["5% means 5 in every 100. How many hundreds are in 200?"]
  },
  {
    id: "g5-maths-dec-b-q20",
    prompt: "A ribbon is 1.25 m long. How many centimetres is that?",
    options: [
      { id: "a", text: "12.5 cm" },
      { id: "b", text: "1.25 cm" },
      { id: "c", text: "1250 cm" },
      { id: "d", text: "125 cm" }
    ],
    answerId: "d",
    explanation: "1 m = 100 cm, so 1.25 × 100 = 125 cm. 12.5 cm is tempting if you multiply by 10 instead of by 100.",
    hints: ["1 m = 100 cm, so multiply 1.25 by 100."]
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
    explanation: "3 ÷ 8 = 0.375 exactly. 0.38 is tempting if you round 0.375 to two decimal places instead of keeping the exact three-place value.",
    hints: ["Divide 3 by 8 using long division, adding zeros after the decimal point."]
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
    explanation: "35/50 = 70/100 = 70%. 35% is tempting if you report the raw count 35 as a percent without scaling to 100.",
    hints: ["Write 35 children out of 50 as a fraction, then double the top and bottom to make the denominator 100."]
  },
  {
    id: "g5-maths-dec-b-q23",
    prompt: "A bag costs \u20b9250. After a 20% discount, what does it cost?",
    options: [
      { id: "a", text: "\u20b950" },
      { id: "b", text: "\u20b9230" },
      { id: "c", text: "\u20b9200" },
      { id: "d", text: "\u20b9180" }
    ],
    answerId: "c",
    explanation: "20% of ₹250 is ₹50; sale price is 250 − 50 = ₹200. ₹50 is tempting if you stop after finding the discount and report that instead of the sale price.",
    hints: ["Find 20% of ₹250 (one fifth), then subtract it from ₹250."]
  },
  {
    id: "g5-maths-dec-b-q24",
    prompt: "What is (0.6 + 0.15) \u00d7 10?",
    options: [
      { id: "a", text: "6.15" },
      { id: "b", text: "0.75" },
      { id: "c", text: "75" },
      { id: "d", text: "7.5" }
    ],
    answerId: "d",
    explanation: "0.6 + 0.15 = 0.75, then 0.75 × 10 = 7.5. 0.75 is tempting if you add correctly but forget to multiply by 10.",
    hints: ["Do the operation in brackets (or the sum) first, then scale by 10 or 100."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcaf",
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
  emoji: "\ud83d\udcaf",
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
    {
      id: "set-achievers",
      title: "Achievers",
      questionCount: g5MathsDecimalsAchievers.length,
      topic: "decimals",
      questions: g5MathsDecimalsAchievers,
    },
  ],
  paperTopics: ["decimals", "percent", "fractions"],
};

export const g5MathsDecimalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
