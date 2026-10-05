import type { ChapterDef, PrepQuestion } from "../types";

/** Large Numbers - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-maths-large-a-q01",
    prompt: "In 52,746, which digit is in the thousands place?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "2" },
      { id: "c", text: "7" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "Reading from the right: 6 ones, 4 tens, 7 hundreds, 2 thousands and 5 ten thousands.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q02",
    prompt: "Which numeral is \"thirty-four thousand two hundred six\"?",
    options: [
      { id: "a", text: "34,260" },
      { id: "b", text: "3,426" },
      { id: "c", text: "34,206" },
      { id: "d", text: "30,426" }
    ],
    answerId: "c",
    explanation: "Thirty-four thousand is 34,000 and two hundred six is 206, so together they make 34,206.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q03",
    prompt: "What is the place value of 6 in 8,615?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "60" },
      { id: "c", text: "6,000" },
      { id: "d", text: "600" }
    ],
    answerId: "d",
    explanation: "The 6 sits in the hundreds place, so it is worth 600.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q04",
    prompt: "Which number is 20,000 + 7,000 + 400 + 5?",
    options: [
      { id: "a", text: "27,405" },
      { id: "b", text: "27,450" },
      { id: "c", text: "2,745" },
      { id: "d", text: "20,745" }
    ],
    answerId: "a",
    explanation: "There are no tens, so a 0 holds the tens place and the number is 27,405.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q05",
    prompt: "Which of these numbers is the greatest?",
    options: [
      { id: "a", text: "9,999" },
      { id: "b", text: "10,002" },
      { id: "c", text: "9,876" },
      { id: "d", text: "8,999" }
    ],
    answerId: "b",
    explanation: "10,002 has five digits while the others have only four, so it is the greatest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q06",
    prompt: "What is the successor of 4,999?",
    options: [
      { id: "a", text: "4,998" },
      { id: "b", text: "5,999" },
      { id: "c", text: "4,000" },
      { id: "d", text: "5,000" }
    ],
    answerId: "d",
    explanation: "The successor is one more, and 4,999 + 1 = 5,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q07",
    prompt: "What is the face value of 3 in 63,108?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "3,000" },
      { id: "c", text: "30" },
      { id: "d", text: "300" }
    ],
    answerId: "a",
    explanation: "Face value is just the digit itself, so it is 3 (its place value would be 3,000).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q08",
    prompt: "Round 3,482 to the nearest 10.",
    options: [
      { id: "a", text: "3,490" },
      { id: "b", text: "3,500" },
      { id: "c", text: "3,480" },
      { id: "d", text: "3,400" }
    ],
    answerId: "c",
    explanation: "The ones digit is 2, which is less than 5, so we round down to 3,480.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q09",
    prompt: "How do we read 40,050?",
    options: [
      { id: "a", text: "Four thousand fifty" },
      { id: "b", text: "Forty thousand fifty" },
      { id: "c", text: "Forty thousand five hundred" },
      { id: "d", text: "Forty thousand five" }
    ],
    answerId: "b",
    explanation: "40,050 has 4 ten thousands and 5 tens, so it is forty thousand fifty.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q10",
    prompt: "What is the greatest 4-digit number?",
    options: [
      { id: "a", text: "9,999" },
      { id: "b", text: "9,000" },
      { id: "c", text: "10,000" },
      { id: "d", text: "1,000" }
    ],
    answerId: "a",
    explanation: "9,999 is the greatest 4-digit number; 10,000 already has five digits.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q11",
    prompt: "What is the greatest 4-digit number you can make with 6, 1, 9 and 4, using each digit once?",
    options: [
      { id: "a", text: "9,614" },
      { id: "b", text: "1,469" },
      { id: "c", text: "9,641" },
      { id: "d", text: "9,461" }
    ],
    answerId: "c",
    explanation: "Put the digits from biggest to smallest: 9, 6, 4, 1 makes 9,641.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q12",
    prompt: "What is the smallest 4-digit number you can make with 5, 0, 8 and 2, using each digit once?",
    options: [
      { id: "a", text: "2,058" },
      { id: "b", text: "2,085" },
      { id: "c", text: "2,508" },
      { id: "d", text: "5,028" }
    ],
    answerId: "a",
    explanation: "Zero cannot go first, so start with 2, then 0, 5 and 8 to make 2,058.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q13",
    prompt: "Which list goes from smallest to greatest?",
    options: [
      { id: "a", text: "36,748; 36,478; 37,468" },
      { id: "b", text: "37,468; 36,748; 36,478" },
      { id: "c", text: "36,478; 37,468; 36,748" },
      { id: "d", text: "36,478; 36,748; 37,468" }
    ],
    answerId: "d",
    explanation: "36,478 and 36,748 both have 36 thousands, but 4 hundreds < 7 hundreds; 37,468 has 37 thousands, so it is greatest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q14",
    prompt: "Round 6,750 to the nearest 100.",
    options: [
      { id: "a", text: "6,700" },
      { id: "b", text: "6,800" },
      { id: "c", text: "7,000" },
      { id: "d", text: "6,760" }
    ],
    answerId: "b",
    explanation: "The tens digit is 5, so we round up to 6,800.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q15",
    prompt: "Round 24,516 to the nearest 1,000.",
    options: [
      { id: "a", text: "24,000" },
      { id: "b", text: "24,500" },
      { id: "c", text: "25,000" },
      { id: "d", text: "30,000" }
    ],
    answerId: "c",
    explanation: "The hundreds digit is 5, so we round up to 25,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q16",
    prompt: "What comes next: 12,500; 13,000; 13,500; ___?",
    options: [
      { id: "a", text: "13,600" },
      { id: "b", text: "14,500" },
      { id: "c", text: "18,500" },
      { id: "d", text: "14,000" }
    ],
    answerId: "d",
    explanation: "Each number is 500 more than the one before, and 13,500 + 500 = 14,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q17",
    prompt: "A stadium in Pune has 18,450 seats. On match day, 9,275 seats are filled. How many seats are empty?",
    options: [
      { id: "a", text: "9,175" },
      { id: "b", text: "9,225" },
      { id: "c", text: "11,225" },
      { id: "d", text: "27,725" }
    ],
    answerId: "a",
    explanation: "Empty seats = 18,450 \u2212 9,275 = 9,175.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q18",
    prompt: "How many hundreds make 4,000?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "40" },
      { id: "c", text: "400" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "10 hundreds make 1,000, so 40 hundreds make 4,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q19",
    prompt: "Which number is 7 thousands + 15 hundreds + 3 ones?",
    options: [
      { id: "a", text: "7,153" },
      { id: "b", text: "71,503" },
      { id: "c", text: "8,503" },
      { id: "d", text: "7,503" }
    ],
    answerId: "c",
    explanation: "15 hundreds is 1,500, so 7,000 + 1,500 + 3 = 8,503.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q20",
    prompt: "In 47,374, what is the difference between the place values of the two 7s?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "6,993" },
      { id: "c", text: "7,070" },
      { id: "d", text: "6,930" }
    ],
    answerId: "d",
    explanation: "One 7 is worth 7,000 and the other is worth 70, and 7,000 \u2212 70 = 6,930.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q21",
    prompt: "What is the greatest 5-digit EVEN number you can make with 3, 8, 1, 6 and 5, using each digit once?",
    options: [
      { id: "a", text: "86,531" },
      { id: "b", text: "85,316" },
      { id: "c", text: "65,318" },
      { id: "d", text: "85,361" }
    ],
    answerId: "b",
    explanation: "It must end in 6 or 8; ending in 6 lets 8 lead, giving 85,316, which beats 65,318.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q22",
    prompt: "A number rounded to the nearest 100 is 5,300. Which of these could the number be?",
    options: [
      { id: "a", text: "5,349" },
      { id: "b", text: "5,350" },
      { id: "c", text: "5,249" },
      { id: "d", text: "5,399" }
    ],
    answerId: "a",
    explanation: "5,349 has tens digit 4, so it rounds down to 5,300; the others round to 5,400 or 5,200.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q23",
    prompt: "Class 4 went on a school trip. The train travelled 1,265 km to Jaipur and the same distance back. About how many km did they travel in all, to the nearest hundred?",
    options: [
      { id: "a", text: "2,530" },
      { id: "b", text: "2,600" },
      { id: "c", text: "2,500" },
      { id: "d", text: "1,300" }
    ],
    answerId: "c",
    explanation: "1,265 + 1,265 = 2,530, and the tens digit 3 is less than 5, so it rounds to 2,500.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-a-q24",
    prompt: "What comes next: 10,001; 10,011; 10,111; 11,111; ___?",
    options: [
      { id: "a", text: "11,121" },
      { id: "b", text: "12,111" },
      { id: "c", text: "20,000" },
      { id: "d", text: "21,111" }
    ],
    answerId: "d",
    explanation: "We add 10, then 100, then 1,000, so next we add 10,000: 11,111 + 10,000 = 21,111.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-maths-large-b-q01",
    prompt: "In 38,915, which digit is in the ten thousands place?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "5" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "The leftmost digit of a 5-digit number is in the ten thousands place, and here it is 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q02",
    prompt: "Which numeral is \"fifty-seven thousand forty\"?",
    options: [
      { id: "a", text: "57,040" },
      { id: "b", text: "57,400" },
      { id: "c", text: "5,740" },
      { id: "d", text: "57,004" }
    ],
    answerId: "a",
    explanation: "Fifty-seven thousand is 57,000 and forty is 40, so the number is 57,040.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q03",
    prompt: "What is the place value of 9 in 29,384?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "900" },
      { id: "c", text: "9,000" },
      { id: "d", text: "90,000" }
    ],
    answerId: "c",
    explanation: "The 9 sits in the thousands place, so it is worth 9,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q04",
    prompt: "What is the expanded form of 61,207?",
    options: [
      { id: "a", text: "60,000 + 1,000 + 20 + 7" },
      { id: "b", text: "60,000 + 1,000 + 200 + 7" },
      { id: "c", text: "6,000 + 100 + 200 + 7" },
      { id: "d", text: "60,000 + 100 + 200 + 7" }
    ],
    answerId: "b",
    explanation: "6 is worth 60,000, 1 is worth 1,000, 2 is worth 200, 0 tens, and 7 ones.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q05",
    prompt: "Which of these numbers is the smallest?",
    options: [
      { id: "a", text: "7,089" },
      { id: "b", text: "7,098" },
      { id: "c", text: "7,809" },
      { id: "d", text: "7,890" }
    ],
    answerId: "a",
    explanation: "All have 7 thousands; 7,089 has 0 hundreds and 8 tens, the smallest start.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q06",
    prompt: "What is the predecessor of 30,000?",
    options: [
      { id: "a", text: "30,001" },
      { id: "b", text: "29,990" },
      { id: "c", text: "29,999" },
      { id: "d", text: "39,999" }
    ],
    answerId: "c",
    explanation: "The predecessor is one less, and 30,000 \u2212 1 = 29,999.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q07",
    prompt: "In 25,814, what is the face value of 8?",
    options: [
      { id: "a", text: "800" },
      { id: "b", text: "80" },
      { id: "c", text: "8,000" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "Face value is just the digit itself, so it is 8 (its place value is 800).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q08",
    prompt: "Round 5,267 to the nearest 10.",
    options: [
      { id: "a", text: "5,260" },
      { id: "b", text: "5,270" },
      { id: "c", text: "5,300" },
      { id: "d", text: "5,200" }
    ],
    answerId: "b",
    explanation: "The ones digit is 7, which is 5 or more, so we round up to 5,270.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q09",
    prompt: "What comes next: 4,200; 4,300; 4,400; ___?",
    options: [
      { id: "a", text: "4,500" },
      { id: "b", text: "4,410" },
      { id: "c", text: "5,400" },
      { id: "d", text: "4,401" }
    ],
    answerId: "a",
    explanation: "Each number is 100 more than the one before, so the next is 4,500.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q10",
    prompt: "A school library has 2,345 Hindi books and 1,420 English books. How many books does it have in all?",
    options: [
      { id: "a", text: "925" },
      { id: "b", text: "3,665" },
      { id: "c", text: "3,765" },
      { id: "d", text: "3,756" }
    ],
    answerId: "c",
    explanation: "Total books = 2,345 + 1,420 = 3,765.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q11",
    prompt: "What is the smallest 5-digit number with all different digits?",
    options: [
      { id: "a", text: "10,000" },
      { id: "b", text: "10,234" },
      { id: "c", text: "12,345" },
      { id: "d", text: "10,023" }
    ],
    answerId: "b",
    explanation: "Start with 1, then use the smallest unused digits 0, 2, 3, 4 to get 10,234.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q12",
    prompt: "What is the greatest 4-digit number you can make with 0, 7, 3 and 9, using each digit once?",
    options: [
      { id: "a", text: "9,703" },
      { id: "b", text: "9,370" },
      { id: "c", text: "7,930" },
      { id: "d", text: "9,730" }
    ],
    answerId: "d",
    explanation: "Put the digits from biggest to smallest, with 0 last: 9,730.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q13",
    prompt: "Which list goes from greatest to smallest?",
    options: [
      { id: "a", text: "52,019; 25,910; 25,091" },
      { id: "b", text: "25,910; 52,019; 25,091" },
      { id: "c", text: "25,091; 25,910; 52,019" },
      { id: "d", text: "52,019; 25,091; 25,910" }
    ],
    answerId: "a",
    explanation: "52,019 has 5 ten thousands, and 25,910 beats 25,091 because 9 hundreds > 0 hundreds.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q14",
    prompt: "Round 8,951 to the nearest 100.",
    options: [
      { id: "a", text: "8,900" },
      { id: "b", text: "8,950" },
      { id: "c", text: "9,000" },
      { id: "d", text: "9,100" }
    ],
    answerId: "c",
    explanation: "The tens digit is 5, so 8,951 rounds up to 9,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q15",
    prompt: "Round 63,499 to the nearest 1,000.",
    options: [
      { id: "a", text: "64,000" },
      { id: "b", text: "63,500" },
      { id: "c", text: "60,000" },
      { id: "d", text: "63,000" }
    ],
    answerId: "d",
    explanation: "The hundreds digit is 4, which is less than 5, so we round down to 63,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q16",
    prompt: "For a recycling drive, Class 4 collected 3,608 old newspapers and Class 5 collected 4,295. How many more did Class 5 collect?",
    options: [
      { id: "a", text: "1,493" },
      { id: "b", text: "687" },
      { id: "c", text: "7,903" },
      { id: "d", text: "697" }
    ],
    answerId: "b",
    explanation: "4,295 \u2212 3,608 = 687 (remember to regroup in the ones and hundreds).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q17",
    prompt: "What number is 1,000 more than 48,650?",
    options: [
      { id: "a", text: "48,750" },
      { id: "b", text: "58,650" },
      { id: "c", text: "49,650" },
      { id: "d", text: "48,660" }
    ],
    answerId: "c",
    explanation: "Adding 1,000 changes only the thousands digit, from 8 to 9: 49,650.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q18",
    prompt: "Which number is 4 ten thousands + 12 thousands + 6 tens?",
    options: [
      { id: "a", text: "52,060" },
      { id: "b", text: "41,260" },
      { id: "c", text: "4,126" },
      { id: "d", text: "52,600" }
    ],
    answerId: "a",
    explanation: "40,000 + 12,000 + 60 = 52,060.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q19",
    prompt: "What is the successor of 99,999?",
    options: [
      { id: "a", text: "99,990" },
      { id: "b", text: "10,000" },
      { id: "c", text: "1,00,001" },
      { id: "d", text: "1,00,000" }
    ],
    answerId: "d",
    explanation: "99,999 + 1 = 1,00,000, which is the first 6-digit number, called one lakh.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q20",
    prompt: "What is the smallest 5-digit ODD number you can make with 4, 0, 7, 2 and 6, using each digit once?",
    options: [
      { id: "a", text: "20,467" },
      { id: "b", text: "20,476" },
      { id: "c", text: "24,067" },
      { id: "d", text: "20,647" }
    ],
    answerId: "a",
    explanation: "It must end in 7; the rest go smallest first without starting with 0: 2, 0, 4, 6 gives 20,467.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q21",
    prompt: "I am a 5-digit number. My ten thousands digit is 6 and my thousands digit is half of it. My hundreds digit is 0. My tens and ones digits are both 1 more than my thousands digit. Who am I?",
    options: [
      { id: "a", text: "63,440" },
      { id: "b", text: "36,044" },
      { id: "c", text: "63,044" },
      { id: "d", text: "63,404" }
    ],
    answerId: "c",
    explanation: "Digits are 6, 3, 0, 4, 4 from left to right, so the number is 63,044.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q22",
    prompt: "A number rounded to the nearest 1,000 is 12,000. Which of these could the number be?",
    options: [
      { id: "a", text: "12,500" },
      { id: "b", text: "11,500" },
      { id: "c", text: "11,499" },
      { id: "d", text: "12,600" }
    ],
    answerId: "b",
    explanation: "11,500 has hundreds digit 5, so it rounds up to 12,000; the others round to 11,000 or 13,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q23",
    prompt: "A stadium has 45,000 seats. For a kabaddi final, 28,750 tickets were sold online and 9,600 at the gate. How many seats were left empty?",
    options: [
      { id: "a", text: "16,250" },
      { id: "b", text: "38,350" },
      { id: "c", text: "7,650" },
      { id: "d", text: "6,650" }
    ],
    answerId: "d",
    explanation: "Tickets sold = 28,750 + 9,600 = 38,350, and 45,000 \u2212 38,350 = 6,650 empty seats.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g4-maths-large-b-q24",
    prompt: "What comes next: 50,000; 45,000; 41,000; 38,000; ___?",
    options: [
      { id: "a", text: "35,000" },
      { id: "b", text: "36,000" },
      { id: "c", text: "37,000" },
      { id: "d", text: "34,000" }
    ],
    answerId: "b",
    explanation: "We take away 5,000, then 4,000, then 3,000, so next we take away 2,000: 36,000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🏟️",
    title: "Big numbers all around us",
    body: [
      "A big cricket stadium can hold 40,000 people!",
      "Today we read, write and play with big numbers.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's go!",
    visual: "place-value",
    speak: "A big cricket stadium can hold forty thousand people! That is a large number. Today, let's read, write and play with big numbers.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "The place value chart",
    lead: "Each place is worth ten times the place on its right. Tap each place for 46,215.",
    visual: "place-value",
    speak: "Each place is worth ten times the place on its right. Nine thousand nine hundred ninety-nine plus one is ten thousand!",
    cards: [
      { label: "Ten thousands", reveal: "4 → 40,000", emoji: "🏆" },
      { label: "Thousands", reveal: "6 → 6,000", emoji: "💯" },
      { label: "Hundreds", reveal: "2 → 200", emoji: "🔟" },
      { label: "Tens", reveal: "1 → 10", emoji: "➕" },
      { label: "Ones", reveal: "5 → 5", emoji: "1️⃣" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Face value, place value, expanded form",
    visual: "place-value",
    speak: "Face value is just the digit. Place value depends on where it sits. In thirty-seven thousand five hundred eighty-two, the seven is worth seven thousand. Expanded form breaks a number into the worth of each digit. Zero holds an empty place, but we don't say it aloud.",
    steps: [
      "Face value of 7 in 37,582 is 7",
      "Place value of 7 in 37,582 is 7,000",
      "46,083 = 40,000 + 6,000 + 80 + 3",
      "Name: forty-six thousand eighty-three (zero not spoken)",
    ],
    punchline: "Same digit, different place → different value.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is the place value of 5 in 25,309?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "500" },
      { id: "c", text: "5,000" },
      { id: "d", text: "50,000" },
    ],
    answerId: "c",
    why: "The 5 sits in the thousands place → 5,000.",
    visual: "place-value",
    speak: "What is the place value of five in twenty-five thousand three hundred nine?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Compare, make, round",
    visual: "number-line",
    speak: "More digits means a bigger number. Same number of digits? Compare from the left. For the greatest number put the biggest digit first; for the smallest, start with the smallest digit, but never zero. Rounding: look at the digit just to the right. Five or more, round up. Less than five, round down.",
    steps: [
      "More digits → bigger; same digits → compare from the left",
      "48,390 > 48,309 (tens: 9 beats 0)",
      "Smallest 4-digit from 3, 0, 8, 5 → 3,058 (zero never first)",
      "6,472 to the nearest hundred → 6,500 (7 is 5 or more)",
    ],
    punchline: "Look left to compare; look right to round.",
  },
  {
    id: "r2",
    type: "reveal",
    title: "Before, after & one lakh",
    lead: "Tap each card.",
    visual: "number-line",
    speak: "The successor is one more. The predecessor is one less. Ninety-nine thousand nine hundred ninety-nine plus one is one lakh!",
    cards: [
      { label: "Successor", reveal: "One more: after 19,999 comes 20,000", emoji: "➡️" },
      { label: "Predecessor", reveal: "One less: before 20,000 is 19,999", emoji: "⬅️" },
      { label: "Patterns", reveal: "25,000 → 26,000 → 27,000 → 28,000", emoji: "🚂" },
      { label: "One lakh", reveal: "99,999 + 1 = 1,00,000", emoji: "🎉" },
    ],
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "Which is bigger, forty-eight thousand three hundred nine, or forty-eight thousand three hundred ninety?",
    question: {
      id: "g4-large-check",
      prompt: "Which is bigger?",
      options: [
        { id: "a", text: "48,309" },
        { id: "b", text: "48,390" },
        { id: "c", text: "They are equal" },
        { id: "d", text: "Cannot tell" },
      ],
      answerId: "b",
      explanation: "Same up to hundreds; tens: 9 vs 0 → 48,390 is bigger.",
      hints: ["Compare from the left.", "Find the first place that differs."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Big-number champ!",
    bullets: [
      "Each place is 10× the one on its right",
      "Place value = digit × its place",
      "Compare from the left; round by looking right",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can read, compare, make and round big numbers. Set A and Set B are ready.",
  },
];

export const g4MathsLargeNumbers: ChapterDef = {
  id: "g4-large-numbers",
  title: "Large Numbers",
  emoji: "\ud83d\udd22",
  blurb: "Place value to 1 lakh, compare & round",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "place-value",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "place-value",
      questions: SET_B,
    },
  ],
  paperTopics: ["place-value", "add-sub"],
};

export const g4MathsLargeNumbersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
