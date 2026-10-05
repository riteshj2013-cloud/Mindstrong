import type { ChapterDef, PrepQuestion } from "../types";

/** Large Numbers — authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-maths-large-a-q01",
    prompt: "In the number 4,73,58,216, which digit is in the ten-lakhs place?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "7" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "Reading from the left, 4 is in crores and 7 is in ten lakhs, so 3 (lakhs) is a common off-by-one-place trap.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q02",
    prompt: "Which numeral stands for \"six lakh five thousand forty\"?",
    options: [
      { id: "a", text: "6,05,040" },
      { id: "b", text: "6,05,400" },
      { id: "c", text: "6,50,040" },
      { id: "d", text: "65,040" }
    ],
    answerId: "a",
    explanation: "Six lakh is 6,00,000, five thousand is 5,000 and forty is 40, which together make 6,05,040.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q03",
    prompt: "What is the place value of 8 in 3,28,415?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "800" },
      { id: "c", text: "80,000" },
      { id: "d", text: "8,000" }
    ],
    answerId: "d",
    explanation: "The 8 sits in the thousands place, so its place value is 8,000, while 8 alone is only its face value.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q04",
    prompt: "Which number is equal to 5,00,000 + 30,000 + 700 + 9?",
    options: [
      { id: "a", text: "5,37,009" },
      { id: "b", text: "5,30,709" },
      { id: "c", text: "5,03,709" },
      { id: "d", text: "53,709" }
    ],
    answerId: "b",
    explanation: "There is no thousands part, so a 0 fills the thousands place and the number is 5,30,709.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q05",
    prompt: "Which of these numbers is the greatest?",
    options: [
      { id: "a", text: "9,99,999" },
      { id: "b", text: "10,00,001" },
      { id: "c", text: "9,99,990" },
      { id: "d", text: "1,00,000" }
    ],
    answerId: "b",
    explanation: "10,00,001 has seven digits while the others have six, so it is the greatest even though it has many zeros.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q06",
    prompt: "How is 72081354 written using commas in the Indian system?",
    options: [
      { id: "a", text: "72,081,354" },
      { id: "b", text: "72,08,1354" },
      { id: "c", text: "720,81,354" },
      { id: "d", text: "7,20,81,354" }
    ],
    answerId: "d",
    explanation: "Indian commas go after the first three digits from the right and then after every two digits, giving 7,20,81,354, while 72,081,354 is the international style.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q07",
    prompt: "Round 46,382 to the nearest thousand.",
    options: [
      { id: "a", text: "46,000" },
      { id: "b", text: "47,000" },
      { id: "c", text: "46,400" },
      { id: "d", text: "50,000" }
    ],
    answerId: "a",
    explanation: "The hundreds digit is 3, which is less than 5, so we round down to 46,000.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q08",
    prompt: "What is the greatest 5-digit number you can make using the digits 3, 0, 8, 6 and 1, each only once?",
    options: [
      { id: "a", text: "86,301" },
      { id: "b", text: "10,368" },
      { id: "c", text: "86,310" },
      { id: "d", text: "68,310" }
    ],
    answerId: "c",
    explanation: "Arranging the digits from largest to smallest gives 8, 6, 3, 1, 0, which is 86,310.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q09",
    prompt: "What is the smallest 5-digit number you can make using the digits 4, 0, 7, 2 and 9, each only once?",
    options: [
      { id: "a", text: "02,479" },
      { id: "b", text: "20,749" },
      { id: "c", text: "24,079" },
      { id: "d", text: "20,479" }
    ],
    answerId: "d",
    explanation: "A number cannot start with 0, so we start with 2, put 0 next, and then place 4, 7, 9 in increasing order.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q10",
    prompt: "What comes next in the pattern 2,15,000; 2,25,000; 2,35,000; ___ ?",
    options: [
      { id: "a", text: "2,36,000" },
      { id: "b", text: "2,45,000" },
      { id: "c", text: "3,35,000" },
      { id: "d", text: "2,40,000" }
    ],
    answerId: "b",
    explanation: "Each number is 10,000 more than the one before, so the next number is 2,45,000.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q11",
    prompt: "What is the difference between the place values of the two 6s in 6,42,615?",
    options: [
      { id: "a", text: "5,99,400" },
      { id: "b", text: "0" },
      { id: "c", text: "6,00,600" },
      { id: "d", text: "5,94,000" }
    ],
    answerId: "a",
    explanation: "The place values are 6,00,000 and 600, and 6,00,000 − 600 = 5,99,400, while 0 is the trap of using face values.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q12",
    prompt: "The populations of four towns are: Rampur Kalan 4,08,912; Sonagiri 4,80,129; Devgarh 4,09,821; Malkapur 4,08,921. Which list shows them from smallest to largest?",
    options: [
      { id: "a", text: "Rampur Kalan, Devgarh, Malkapur, Sonagiri" },
      { id: "b", text: "Malkapur, Rampur Kalan, Devgarh, Sonagiri" },
      { id: "c", text: "Rampur Kalan, Malkapur, Devgarh, Sonagiri" },
      { id: "d", text: "Sonagiri, Devgarh, Malkapur, Rampur Kalan" }
    ],
    answerId: "c",
    explanation: "Comparing place by place gives 4,08,912 < 4,08,921 < 4,09,821 < 4,80,129, so the tens digit separates Rampur Kalan and Malkapur.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q13",
    prompt: "A number rounded to the nearest hundred becomes 7,300. Which of these could the number be?",
    options: [
      { id: "a", text: "7,401" },
      { id: "b", text: "7,350" },
      { id: "c", text: "7,249" },
      { id: "d", text: "7,349" }
    ],
    answerId: "d",
    explanation: "7,349 has 49 in its last two places so it rounds down to 7,300, while 7,350 rounds up to 7,400.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q14",
    prompt: "A cricket match drew 38,712 fans on Day 1 and 41,265 fans on Day 2. Rounding each day to the nearest thousand, what is the estimated total?",
    options: [
      { id: "a", text: "79,000" },
      { id: "b", text: "80,000" },
      { id: "c", text: "81,000" },
      { id: "d", text: "70,000" }
    ],
    answerId: "b",
    explanation: "38,712 rounds to 39,000 and 41,265 rounds to 41,000, and 39,000 + 41,000 = 80,000.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q15",
    prompt: "A school fair collected ₹2,45,680 and spent ₹1,78,950 on stalls and prizes. How much money is left?",
    options: [
      { id: "a", text: "₹1,66,730" },
      { id: "b", text: "₹67,730" },
      { id: "c", text: "₹66,730" },
      { id: "d", text: "₹76,730" }
    ],
    answerId: "c",
    explanation: "₹2,45,680 − ₹1,78,950 = ₹66,730, which checks out because ₹1,78,950 + ₹66,730 = ₹2,45,680.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q16",
    prompt: "What is the greatest 6-digit EVEN number that can be made using the digits 5, 2, 9, 1, 7 and 3, each only once?",
    options: [
      { id: "a", text: "9,75,312" },
      { id: "b", text: "9,75,321" },
      { id: "c", text: "9,75,132" },
      { id: "d", text: "9,57,312" }
    ],
    answerId: "a",
    explanation: "The only even digit, 2, must go in the ones place, and the rest go in decreasing order to give 9,75,312 (9,75,321 is odd).",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q17",
    prompt: "What number is 7 lakhs + 4 thousands + 12 hundreds + 5 tens?",
    options: [
      { id: "a", text: "7,04,125" },
      { id: "b", text: "7,16,050" },
      { id: "c", text: "7,41,250" },
      { id: "d", text: "7,05,250" }
    ],
    answerId: "d",
    explanation: "12 hundreds is 1,200, so 7,00,000 + 4,000 + 1,200 + 50 = 7,05,250.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q18",
    prompt: "How do we read 3,07,00,050 in words?",
    options: [
      { id: "a", text: "Three crore seventy lakh fifty" },
      { id: "b", text: "Three crore seven thousand fifty" },
      { id: "c", text: "Three crore seven lakh fifty" },
      { id: "d", text: "Thirty lakh seven thousand fifty" }
    ],
    answerId: "c",
    explanation: "The periods are 3 crore, 07 lakh, 00 thousand and 050, so the number is three crore seven lakh fifty.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q19",
    prompt: "Add the number just before 10,00,000 to the number just after 99,999. What do you get?",
    options: [
      { id: "a", text: "11,00,000" },
      { id: "b", text: "10,99,999" },
      { id: "c", text: "10,99,998" },
      { id: "d", text: "19,99,999" }
    ],
    answerId: "b",
    explanation: "The numbers are 9,99,999 and 1,00,000, and their sum is 10,99,999.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q20",
    prompt: "Using the digits 0, 3, 5, 8, 1 and 6 once each, what is the difference between the greatest and the smallest 6-digit numbers that can be made?",
    options: [
      { id: "a", text: "9,68,878" },
      { id: "b", text: "7,62,742" },
      { id: "c", text: "7,51,742" },
      { id: "d", text: "7,61,742" }
    ],
    answerId: "d",
    explanation: "The greatest is 8,65,310 and the smallest is 1,03,568, so the difference is 7,61,742 (9,68,878 is their sum, a trap).",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q21",
    prompt: "I am a 6-digit number. My lakhs digit is 4. My ten-thousands digit is double my lakhs digit. My thousands digit is 0. My hundreds digit is one less than my lakhs digit. My tens and ones digits are both 5. Who am I?",
    options: [
      { id: "a", text: "4,80,355" },
      { id: "b", text: "4,08,355" },
      { id: "c", text: "4,80,535" },
      { id: "d", text: "8,40,355" }
    ],
    answerId: "a",
    explanation: "Filling the places in order gives 4, 8, 0, 3, 5, 5, which is 4,80,355.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q22",
    prompt: "What is the smallest whole number that becomes 5,60,000 when rounded to the nearest ten thousand?",
    options: [
      { id: "a", text: "5,50,000" },
      { id: "b", text: "5,54,999" },
      { id: "c", text: "5,55,000" },
      { id: "d", text: "5,59,999" }
    ],
    answerId: "c",
    explanation: "5,55,000 has 5 in the thousands place so it rounds up to 5,60,000, while 5,54,999 rounds down to 5,50,000.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q23",
    prompt: "The town of Neelpur had 3,46,250 people. In one year, 12,875 babies were born, 4,560 people moved out and 9,300 people moved in. What is the new population?",
    options: [
      { id: "a", text: "3,54,565" },
      { id: "b", text: "3,63,865" },
      { id: "c", text: "3,72,985" },
      { id: "d", text: "3,64,865" }
    ],
    answerId: "b",
    explanation: "3,46,250 + 12,875 − 4,560 + 9,300 = 3,63,865, and adding the 4,560 instead of subtracting gives the trap 3,72,985.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-a-q24",
    prompt: "A pattern goes 1,08,000; 1,20,000; 1,32,000; and so on. What is the first number in this pattern that is greater than 2,00,000?",
    options: [
      { id: "a", text: "2,00,000" },
      { id: "b", text: "1,92,000" },
      { id: "c", text: "2,16,000" },
      { id: "d", text: "2,04,000" }
    ],
    answerId: "d",
    explanation: "Adding 12,000 each time gives 1,92,000 and then 2,04,000, so 2,00,000 never appears in the pattern.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-maths-large-b-q01",
    prompt: "In the number 5,18,06,473, which digit is in the ten-thousands place?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "4" },
      { id: "c", text: "8" },
      { id: "d", text: "0" }
    ],
    answerId: "d",
    explanation: "The places from the right are ones 3, tens 7, hundreds 4, thousands 6 and ten thousands 0, so 6 is the thousands-digit trap.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q02",
    prompt: "Which numeral stands for \"two crore forty lakh nine thousand\"?",
    options: [
      { id: "a", text: "2,40,90,000" },
      { id: "b", text: "2,04,09,000" },
      { id: "c", text: "2,40,09,000" },
      { id: "d", text: "24,09,000" }
    ],
    answerId: "c",
    explanation: "Two crore, then 40 lakh, then 09 thousand and 000 gives 2,40,09,000.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q03",
    prompt: "What is the place value of 5 in 9,57,203?",
    options: [
      { id: "a", text: "50,000" },
      { id: "b", text: "5,000" },
      { id: "c", text: "5" },
      { id: "d", text: "5,00,000" }
    ],
    answerId: "a",
    explanation: "The 5 is in the ten-thousands place, so its place value is 50,000.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q04",
    prompt: "Which is the correct expanded form of 8,06,040?",
    options: [
      { id: "a", text: "8,00,000 + 60,000 + 40" },
      { id: "b", text: "8,00,000 + 6,000 + 40" },
      { id: "c", text: "8,00,000 + 6,000 + 400" },
      { id: "d", text: "80,000 + 6,000 + 40" }
    ],
    answerId: "b",
    explanation: "The 8 is in lakhs, the 6 in thousands and the 4 in tens, so the number is 8,00,000 + 6,000 + 40.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q05",
    prompt: "Which sign goes in the box: 6,09,875 ☐ 6,10,002?",
    options: [
      { id: "a", text: ">" },
      { id: "b", text: "=" },
      { id: "c", text: "<" },
      { id: "d", text: "Cannot be decided" }
    ],
    answerId: "c",
    explanation: "Both have the same lakhs digit, but the ten-thousands digit is 0 in the first and 1 in the second, so the first is smaller.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q06",
    prompt: "What is the smallest 7-digit number, written in words?",
    options: [
      { id: "a", text: "One lakh" },
      { id: "b", text: "Ten lakh" },
      { id: "c", text: "One crore" },
      { id: "d", text: "Nine lakh ninety-nine thousand nine hundred ninety-nine" }
    ],
    answerId: "b",
    explanation: "The smallest 7-digit number is 10,00,000, which we read as ten lakh.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q07",
    prompt: "Round 2,384 to the nearest hundred.",
    options: [
      { id: "a", text: "2,300" },
      { id: "b", text: "2,000" },
      { id: "c", text: "2,380" },
      { id: "d", text: "2,400" }
    ],
    answerId: "d",
    explanation: "The tens digit is 8, which is 5 or more, so 2,384 rounds up to 2,400.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q08",
    prompt: "What is the greatest 5-digit number you can make using the digits 2, 7, 0, 5 and 4, each only once?",
    options: [
      { id: "a", text: "75,420" },
      { id: "b", text: "75,402" },
      { id: "c", text: "20,457" },
      { id: "d", text: "57,420" }
    ],
    answerId: "a",
    explanation: "Putting the digits in decreasing order, 7, 5, 4, 2, 0, gives 75,420.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q09",
    prompt: "What comes next in the pattern 50,000; 45,000; 40,000; ___ ?",
    options: [
      { id: "a", text: "30,000" },
      { id: "b", text: "39,000" },
      { id: "c", text: "35,000" },
      { id: "d", text: "36,000" }
    ],
    answerId: "c",
    explanation: "Each number is 5,000 less than the one before, so the next number is 35,000.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q10",
    prompt: "The cricket ground in Kesarnagar has 52,400 seats. For a match, 48,750 tickets were sold. How many seats were left empty?",
    options: [
      { id: "a", text: "3,650" },
      { id: "b", text: "4,650" },
      { id: "c", text: "3,750" },
      { id: "d", text: "4,350" }
    ],
    answerId: "a",
    explanation: "52,400 − 48,750 = 3,650, which checks out because 48,750 + 3,650 = 52,400.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q11",
    prompt: "What is the sum of the place values of the two 3s in 3,40,135?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "3,30,000" },
      { id: "c", text: "3,00,300" },
      { id: "d", text: "3,00,030" }
    ],
    answerId: "d",
    explanation: "The 3s stand for 3,00,000 and 30, so their sum is 3,00,030, while 6 is the trap of adding face values.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q12",
    prompt: "Four trains travelled these distances in a year: Train P 1,25,480 km; Train Q 1,52,048 km; Train R 1,25,804 km; Train S 1,52,480 km. Which list shows them from greatest to smallest distance?",
    options: [
      { id: "a", text: "Q, S, R, P" },
      { id: "b", text: "S, Q, R, P" },
      { id: "c", text: "P, R, Q, S" },
      { id: "d", text: "S, Q, P, R" }
    ],
    answerId: "b",
    explanation: "1,52,480 > 1,52,048 > 1,25,804 > 1,25,480, so the order is S, Q, R, P, and the trap lies in the swapped digits 4 and 0, and 4 and 8.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q13",
    prompt: "Round 8,45,672 to the nearest ten thousand.",
    options: [
      { id: "a", text: "8,40,000" },
      { id: "b", text: "8,46,000" },
      { id: "c", text: "8,50,000" },
      { id: "d", text: "9,00,000" }
    ],
    answerId: "c",
    explanation: "The thousands digit is 5, so we round the ten-thousands digit up from 4 to 5 to get 8,50,000.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q14",
    prompt: "A school library has 6,812 Hindi books and 3,295 English books. Rounding each to the nearest hundred, what is the estimated total?",
    options: [
      { id: "a", text: "10,100" },
      { id: "b", text: "10,000" },
      { id: "c", text: "10,107" },
      { id: "d", text: "9,100" }
    ],
    answerId: "a",
    explanation: "6,812 rounds to 6,800 and 3,295 rounds to 3,300, giving 10,100, while 10,107 is the exact sum and not an estimate.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q15",
    prompt: "The district of Sundarvan planted 18,46,300 trees in 2025 and 21,05,750 trees in 2026. How many more trees were planted in 2026?",
    options: [
      { id: "a", text: "2,59,550" },
      { id: "b", text: "3,59,450" },
      { id: "c", text: "2,69,450" },
      { id: "d", text: "2,59,450" }
    ],
    answerId: "d",
    explanation: "21,05,750 − 18,46,300 = 2,59,450, which checks out because 18,46,300 + 2,59,450 = 21,05,750.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q16",
    prompt: "What is the smallest 6-digit ODD number that can be made using the digits 4, 0, 8, 3, 6 and 2, each only once?",
    options: [
      { id: "a", text: "2,03,468" },
      { id: "b", text: "0,24,683" },
      { id: "c", text: "2,04,683" },
      { id: "d", text: "2,04,863" }
    ],
    answerId: "c",
    explanation: "The only odd digit, 3, must be in the ones place, and the rest are arranged smallest first without a leading zero to give 2,04,683.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q17",
    prompt: "What number is 9 crore + 5 lakh + 30 thousand + 7?",
    options: [
      { id: "a", text: "9,50,30,007" },
      { id: "b", text: "9,05,30,007" },
      { id: "c", text: "9,05,03,007" },
      { id: "d", text: "95,30,007" }
    ],
    answerId: "b",
    explanation: "Writing 9 crore, then 05 lakh, then 30 thousand and 007 gives 9,05,30,007.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q18",
    prompt: "A news report says a city has \"1 million\" trees. How many lakh trees is that?",
    options: [
      { id: "a", text: "1 lakh" },
      { id: "b", text: "1 crore" },
      { id: "c", text: "100 lakh" },
      { id: "d", text: "10 lakh" }
    ],
    answerId: "d",
    explanation: "1 million is 10,00,000, which is the same as 10 lakh.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q19",
    prompt: "How many ten-thousands make 5 lakh?",
    options: [
      { id: "a", text: "50" },
      { id: "b", text: "5" },
      { id: "c", text: "500" },
      { id: "d", text: "5,000" }
    ],
    answerId: "a",
    explanation: "1 lakh is 10 ten-thousands, so 5 lakh is 5 × 10 = 50 ten-thousands.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q20",
    prompt: "Using the digits 7, 1, 0, 4 and 9 once each, which 5-digit number is closest to 50,000?",
    options: [
      { id: "a", text: "70,149" },
      { id: "b", text: "41,079" },
      { id: "c", text: "49,710" },
      { id: "d", text: "49,170" }
    ],
    answerId: "c",
    explanation: "49,710 is only 290 below 50,000, while the closest number starting with 7, which is 70,149, is more than 20,000 away.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q21",
    prompt: "In 4,25,340, the place value of the 4 in the lakhs place is how many times the place value of the 4 in the tens place?",
    options: [
      { id: "a", text: "100" },
      { id: "b", text: "10,000" },
      { id: "c", text: "1,000" },
      { id: "d", text: "1,00,000" }
    ],
    answerId: "b",
    explanation: "The place values are 4,00,000 and 40, and 4,00,000 ÷ 40 = 10,000.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q22",
    prompt: "A number becomes 64,000 when rounded to the nearest thousand and 63,600 when rounded to the nearest hundred. Which could be the number?",
    options: [
      { id: "a", text: "63,660" },
      { id: "b", text: "63,480" },
      { id: "c", text: "64,040" },
      { id: "d", text: "63,640" }
    ],
    answerId: "d",
    explanation: "Only 63,640 meets both conditions, because it rounds to 63,600 by hundreds and is at least 63,500, so it rounds to 64,000 by thousands.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q23",
    prompt: "At Vidya Niketan School's 3-day mela, 12,450 tickets were sold on Day 1, 15,080 on Day 2 and 18,375 on Day 3. Each ticket cost ₹20. How much money was collected in all?",
    options: [
      { id: "a", text: "₹9,18,100" },
      { id: "b", text: "₹91,810" },
      { id: "c", text: "₹9,08,100" },
      { id: "d", text: "₹4,59,050" }
    ],
    answerId: "a",
    explanation: "The total number of tickets is 45,905, and 45,905 × 20 = ₹9,18,100, while ₹4,59,050 comes from wrongly multiplying by 10.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  },
  {
    id: "g5-maths-large-b-q24",
    prompt: "A pattern goes 7,50,000; 7,25,000; 7,00,000; 6,75,000; and so on. What is the 10th number in the pattern?",
    options: [
      { id: "a", text: "5,00,000" },
      { id: "b", text: "5,50,000" },
      { id: "c", text: "5,25,000" },
      { id: "d", text: "4,75,000" }
    ],
    answerId: "c",
    explanation: "The 10th number comes after 9 steps of 25,000 each, so 7,50,000 − 2,25,000 = 5,25,000.",
    hints: ["Look at place value carefully.","Check digit count before comparing."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🏟️",
    title: "Big numbers all around us",
    body: [
      "A cricket stadium can hold more than fifty thousand people!",
      "Today we read, write, and compare really big numbers — Indian place value.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Start counting!",
    visual: "place-value",
    speak: "Have you ever wondered how many people fit in a big cricket stadium? Today we will learn to read, write and play with really big numbers.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Indian place value",
    lead: "Tap each period. Commas: first 3 from the right, then every 2.",
    visual: "place-value",
    speak: "In India we group digits as ones, thousands, lakhs and crores. Commas come after the first three digits from the right, and then after every two digits.",
    cards: [
      { label: "Ones period", reveal: "Hundreds | Tens | Ones (3 digits)", emoji: "1️⃣" },
      { label: "Thousands", reveal: "Ten Thousands | Thousands", emoji: "🔟" },
      { label: "Lakhs", reveal: "Ten Lakhs | Lakhs", emoji: "💯" },
      { label: "Crores", reveal: "Crores (and up)", emoji: "🏆" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Place value vs face value",
    visual: "place-value",
    speak: "The face value of a digit is the digit itself. Its place value depends on where it sits. In 4,70,312 the seven is worth seventy thousand.",
    steps: [
      "Face value = the digit itself (7 is just 7)",
      "Place value = digit × its place",
      "In 4,70,312 the 7 is in ten-thousands → 70,000",
      "Expanded form adds each place value",
    ],
    punchline: "Same digit, different place → different value.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is the place value of 6 in 2,61,045?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "600" },
      { id: "c", text: "6,000" },
      { id: "d", text: "60,000" },
    ],
    answerId: "d",
    why: "The 6 sits in the ten-thousands place → 60,000.",
    visual: "place-value",
    speak: "What is the place value of 6 in 2 lakh 61 thousand 45?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Compare, form, round",
    visual: "number-line",
    speak: "First count the digits. More digits means bigger. If equal, compare from the left. For the greatest number put big digits left. Never start the smallest with zero. Rounding: 5 or more rounds up.",
    steps: [
      "More digits → greater number",
      "Same length → compare left to right",
      "Greatest: biggest digits on the left",
      "Smallest: small digits left, but never lead with 0",
      "Round: look right; 5+ → round up",
    ],
    punchline: "Count digits, then compare places.",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "Which is greater: 5,08,999 or 5,09,001?",
    question: {
      id: "math-check",
      prompt: "Which is greater?",
      options: [
        { id: "a", text: "5,08,999" },
        { id: "b", text: "5,09,001" },
        { id: "c", text: "They are equal" },
        { id: "d", text: "Cannot tell" },
      ],
      answerId: "b",
      explanation: "Same lakhs digit; ten-thousands: 0 vs 0; thousands: 8 vs 9 → 5,09,001 is greater.",
      hints: ["Compare from the left.", "Look at the thousands place."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Large-number legend!",
    bullets: [
      "Indian commas: 3, then pairs",
      "Place value ≠ face value",
      "Compare digits, form extremes, round smart",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can read, compare, form and round large numbers the Indian way.",
  },
];

export const g5MathsLargeNumbers: ChapterDef = {
  id: "large-numbers",
  title: "Large Numbers",
  emoji: "🔢",
  blurb: "Indian place value to crores",
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
  paperTopics: ["place-value","add-sub"],
};

export const g5MathsLargeNumbersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
