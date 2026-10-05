import type { ChapterDef, PrepQuestion } from "../types";

/** Numbers - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-maths-numbers-a-q01",
    prompt: "In 547, which digit is in the tens place?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "7" },
      { id: "d", text: "47" }
    ],
    answerId: "a",
    explanation: "In 547, 5 is in hundreds, 4 is in tens and 7 is in ones.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q02",
    prompt: "Which number has 3 hundreds, 2 tens and 6 ones?",
    options: [
      { id: "a", text: "623" },
      { id: "b", text: "362" },
      { id: "c", text: "326" },
      { id: "d", text: "3026" }
    ],
    answerId: "c",
    explanation: "Write the hundreds first, then the tens, then the ones: 3, 2, 6 makes 326.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q03",
    prompt: "How do we write 409 in words?",
    options: [
      { id: "a", text: "Four hundred ninety" },
      { id: "b", text: "Four hundred nine" },
      { id: "c", text: "Forty-nine" },
      { id: "d", text: "Nine hundred four" }
    ],
    answerId: "b",
    explanation: "409 has 4 hundreds, no tens and 9 ones, so it is four hundred nine.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q04",
    prompt: "Which number comes just after 299?",
    options: [
      { id: "a", text: "298" },
      { id: "b", text: "399" },
      { id: "c", text: "290" },
      { id: "d", text: "300" }
    ],
    answerId: "d",
    explanation: "One more than 299 is 300.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q05",
    prompt: "Which of these numbers is even?",
    options: [
      { id: "a", text: "33" },
      { id: "b", text: "51" },
      { id: "c", text: "46" },
      { id: "d", text: "87" }
    ],
    answerId: "c",
    explanation: "46 ends in 6, and numbers ending in 0, 2, 4, 6 or 8 are even.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q06",
    prompt: "Which number is bigger: 618 or 681?",
    options: [
      { id: "a", text: "681" },
      { id: "b", text: "618" },
      { id: "c", text: "Both are the same" },
      { id: "d", text: "We cannot tell" }
    ],
    answerId: "a",
    explanation: "Both have 6 hundreds, but 681 has 8 tens and 618 has only 1 ten.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q07",
    prompt: "What is 400 + 70 + 2?",
    options: [
      { id: "a", text: "427" },
      { id: "b", text: "4702" },
      { id: "c", text: "742" },
      { id: "d", text: "472" }
    ],
    answerId: "d",
    explanation: "4 hundreds, 7 tens and 2 ones make 472.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q08",
    prompt: "Count by 5s: 15, 20, 25, ___. What comes next?",
    options: [
      { id: "a", text: "26" },
      { id: "b", text: "30" },
      { id: "c", text: "35" },
      { id: "d", text: "50" }
    ],
    answerId: "b",
    explanation: "When we count by 5s, we add 5 each time, and 25 + 5 = 30.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q09",
    prompt: "Which number comes just before 500?",
    options: [
      { id: "a", text: "499" },
      { id: "b", text: "501" },
      { id: "c", text: "400" },
      { id: "d", text: "490" }
    ],
    answerId: "a",
    explanation: "One less than 500 is 499.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q10",
    prompt: "What is the 8 worth in 832?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "80" },
      { id: "c", text: "832" },
      { id: "d", text: "800" }
    ],
    answerId: "d",
    explanation: "The 8 is in the hundreds place, so it is worth 800.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q11",
    prompt: "What is the biggest number you can make with 5, 2 and 9, using each digit once?",
    options: [
      { id: "a", text: "925" },
      { id: "b", text: "952" },
      { id: "c", text: "259" },
      { id: "d", text: "529" }
    ],
    answerId: "b",
    explanation: "Put the biggest digit first, then the next biggest: 9, 5, 2 makes 952.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q12",
    prompt: "What is the smallest 3-digit number you can make with 7, 0 and 4, using each digit once?",
    options: [
      { id: "a", text: "047" },
      { id: "b", text: "470" },
      { id: "c", text: "407" },
      { id: "d", text: "704" }
    ],
    answerId: "c",
    explanation: "Zero cannot go first, so start with 4, then put 0, then 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q13",
    prompt: "Which number comes between 389 and 391?",
    options: [
      { id: "a", text: "388" },
      { id: "b", text: "380" },
      { id: "c", text: "392" },
      { id: "d", text: "390" }
    ],
    answerId: "d",
    explanation: "389, 390, 391: the number in the middle is 390.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q14",
    prompt: "Which list goes from smallest to biggest?",
    options: [
      { id: "a", text: "226, 256, 265" },
      { id: "b", text: "256, 265, 226" },
      { id: "c", text: "265, 256, 226" },
      { id: "d", text: "226, 265, 256" }
    ],
    answerId: "a",
    explanation: "All have 2 hundreds, so we look at the tens: 2 tens, then 5 tens, then 6 tens.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q15",
    prompt: "What comes next: 215, 225, 235, ___?",
    options: [
      { id: "a", text: "236" },
      { id: "b", text: "335" },
      { id: "c", text: "245" },
      { id: "d", text: "240" }
    ],
    answerId: "c",
    explanation: "Each number is 10 more than the one before, so the next is 245.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q16",
    prompt: "Riya has 3 big packs of 100 toffees, 5 small packs of 10 toffees and 8 loose toffees. How many toffees does she have?",
    options: [
      { id: "a", text: "385" },
      { id: "b", text: "358" },
      { id: "c", text: "16" },
      { id: "d", text: "853" }
    ],
    answerId: "b",
    explanation: "3 hundreds, 5 tens and 8 ones make 358 toffees.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q17",
    prompt: "How many tens make 200?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "10" },
      { id: "c", text: "200" },
      { id: "d", text: "20" }
    ],
    answerId: "d",
    explanation: "10 tens make 100, so 20 tens make 200.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q18",
    prompt: "How many odd numbers are there between 20 and 30?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "10" }
    ],
    answerId: "a",
    explanation: "The odd numbers are 21, 23, 25, 27 and 29, which makes 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q19",
    prompt: "Which number has 6 hundreds and 14 ones?",
    options: [
      { id: "a", text: "6014" },
      { id: "b", text: "614" },
      { id: "c", text: "641" },
      { id: "d", text: "620" }
    ],
    answerId: "b",
    explanation: "14 ones is 1 ten and 4 ones, so the number is 600 + 10 + 4 = 614.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q20",
    prompt: "I am a 3-digit number. My hundreds digit is 4. My tens digit is 2 more than my hundreds digit. My ones digit is 0. Who am I?",
    options: [
      { id: "a", text: "640" },
      { id: "b", text: "406" },
      { id: "c", text: "460" },
      { id: "d", text: "420" }
    ],
    answerId: "c",
    explanation: "Hundreds is 4, tens is 4 + 2 = 6 and ones is 0, so the number is 460.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q21",
    prompt: "How many different 3-digit numbers can you make with 1, 3 and 5, using each digit once?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "5" },
      { id: "c", text: "3" },
      { id: "d", text: "9" }
    ],
    answerId: "a",
    explanation: "The numbers are 135, 153, 315, 351, 513 and 531, which makes 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q22",
    prompt: "In 365, what is the difference between what the 6 is worth and the digit 6 itself?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "66" },
      { id: "c", text: "59" },
      { id: "d", text: "54" }
    ],
    answerId: "d",
    explanation: "The 6 is in the tens place, so it is worth 60, and 60 \u2212 6 = 54.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q23",
    prompt: "What is the biggest EVEN number you can make with 3, 8 and 5, using each digit once?",
    options: [
      { id: "a", text: "853" },
      { id: "b", text: "583" },
      { id: "c", text: "538" },
      { id: "d", text: "358" }
    ],
    answerId: "c",
    explanation: "An even number must end in 8, and then 5 and 3 go first, biggest first, to make 538.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-a-q24",
    prompt: "What comes next: 105, 110, 120, 135, ___?",
    options: [
      { id: "a", text: "140" },
      { id: "b", text: "155" },
      { id: "c", text: "150" },
      { id: "d", text: "160" }
    ],
    answerId: "b",
    explanation: "We add 5, then 10, then 15, so next we add 20, and 135 + 20 = 155.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-maths-numbers-b-q01",
    prompt: "In 836, which digit is in the hundreds place?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "3" },
      { id: "c", text: "8" },
      { id: "d", text: "36" }
    ],
    answerId: "c",
    explanation: "In 836, 8 is in hundreds, 3 is in tens and 6 is in ones.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q02",
    prompt: "Which number has 5 hundreds, 0 tens and 7 ones?",
    options: [
      { id: "a", text: "507" },
      { id: "b", text: "570" },
      { id: "c", text: "75" },
      { id: "d", text: "5007" }
    ],
    answerId: "a",
    explanation: "5 hundreds, no tens and 7 ones make 507, and the zero holds the tens place.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q03",
    prompt: "How do we write 760 in words?",
    options: [
      { id: "a", text: "Seven hundred six" },
      { id: "b", text: "Six hundred seventy" },
      { id: "c", text: "Seventy-six" },
      { id: "d", text: "Seven hundred sixty" }
    ],
    answerId: "d",
    explanation: "760 has 7 hundreds and 6 tens, so it is seven hundred sixty.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q04",
    prompt: "Which number comes just after 609?",
    options: [
      { id: "a", text: "608" },
      { id: "b", text: "610" },
      { id: "c", text: "700" },
      { id: "d", text: "6010" }
    ],
    answerId: "b",
    explanation: "One more than 609 is 610.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q05",
    prompt: "Which of these numbers is odd?",
    options: [
      { id: "a", text: "75" },
      { id: "b", text: "62" },
      { id: "c", text: "40" },
      { id: "d", text: "98" }
    ],
    answerId: "a",
    explanation: "75 ends in 5, and numbers ending in 1, 3, 5, 7 or 9 are odd.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q06",
    prompt: "Which number is smaller: 432 or 423?",
    options: [
      { id: "a", text: "432" },
      { id: "b", text: "We cannot tell" },
      { id: "c", text: "Both are the same" },
      { id: "d", text: "423" }
    ],
    answerId: "d",
    explanation: "Both have 4 hundreds, but 423 has only 2 tens and 432 has 3 tens.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q07",
    prompt: "What is 900 + 5?",
    options: [
      { id: "a", text: "950" },
      { id: "b", text: "9005" },
      { id: "c", text: "905" },
      { id: "d", text: "95" }
    ],
    answerId: "c",
    explanation: "9 hundreds, no tens and 5 ones make 905.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q08",
    prompt: "Count by 10s: 340, 350, 360, ___. What comes next?",
    options: [
      { id: "a", text: "361" },
      { id: "b", text: "370" },
      { id: "c", text: "460" },
      { id: "d", text: "380" }
    ],
    answerId: "b",
    explanation: "When we count by 10s, we add 10 each time, and 360 + 10 = 370.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q09",
    prompt: "Which number comes just before 1000?",
    options: [
      { id: "a", text: "1001" },
      { id: "b", text: "990" },
      { id: "c", text: "900" },
      { id: "d", text: "999" }
    ],
    answerId: "d",
    explanation: "One less than 1000 is 999.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q10",
    prompt: "What is the 3 worth in 435?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "3" },
      { id: "c", text: "300" },
      { id: "d", text: "35" }
    ],
    answerId: "a",
    explanation: "The 3 is in the tens place, so it is worth 30.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q11",
    prompt: "What is the smallest number you can make with 6, 1 and 8, using each digit once?",
    options: [
      { id: "a", text: "186" },
      { id: "b", text: "168" },
      { id: "c", text: "861" },
      { id: "d", text: "618" }
    ],
    answerId: "b",
    explanation: "Put the smallest digit first, then the next smallest: 1, 6, 8 makes 168.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q12",
    prompt: "What is the biggest 3-digit number you can make with 0, 5 and 3, using each digit once?",
    options: [
      { id: "a", text: "503" },
      { id: "b", text: "350" },
      { id: "c", text: "530" },
      { id: "d", text: "035" }
    ],
    answerId: "c",
    explanation: "Put 5 first, then 3, and zero goes last to make 530.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q13",
    prompt: "Which number is between 498 and 502 AND is even?",
    options: [
      { id: "a", text: "500" },
      { id: "b", text: "499" },
      { id: "c", text: "501" },
      { id: "d", text: "502" }
    ],
    answerId: "a",
    explanation: "The numbers between are 499, 500 and 501, and only 500 is even.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q14",
    prompt: "Which list goes from biggest to smallest?",
    options: [
      { id: "a", text: "781, 187, 718" },
      { id: "b", text: "718, 781, 187" },
      { id: "c", text: "187, 718, 781" },
      { id: "d", text: "781, 718, 187" }
    ],
    answerId: "d",
    explanation: "781 and 718 both have 7 hundreds, but 781 has more tens, and 187 has only 1 hundred.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q15",
    prompt: "What comes next: 450, 400, 350, ___?",
    options: [
      { id: "a", text: "340" },
      { id: "b", text: "250" },
      { id: "c", text: "300" },
      { id: "d", text: "349" }
    ],
    answerId: "c",
    explanation: "Each number is 50 less than the one before, so the next is 300.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q16",
    prompt: "Arjun has 7 boxes of 100 crayons, 2 packs of 10 crayons and 5 loose crayons. How many crayons does he have?",
    options: [
      { id: "a", text: "752" },
      { id: "b", text: "725" },
      { id: "c", text: "527" },
      { id: "d", text: "14" }
    ],
    answerId: "b",
    explanation: "7 hundreds, 2 tens and 5 ones make 725 crayons.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q17",
    prompt: "How many hundreds make 1000?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "1" },
      { id: "c", text: "100" },
      { id: "d", text: "9" }
    ],
    answerId: "a",
    explanation: "10 hundreds make one thousand.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q18",
    prompt: "How many even numbers are there from 11 to 21?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "10" },
      { id: "c", text: "6" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "The even numbers are 12, 14, 16, 18 and 20, which makes 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q19",
    prompt: "Which number has 2 hundreds and 13 tens?",
    options: [
      { id: "a", text: "213" },
      { id: "b", text: "2130" },
      { id: "c", text: "330" },
      { id: "d", text: "230" }
    ],
    answerId: "c",
    explanation: "13 tens is 130, and 200 + 130 = 330.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q20",
    prompt: "I am a 3-digit number. My ones digit is 5. My tens digit is 1 less than my ones digit. My hundreds digit is 2 more than my ones digit. Who am I?",
    options: [
      { id: "a", text: "547" },
      { id: "b", text: "745" },
      { id: "c", text: "754" },
      { id: "d", text: "735" }
    ],
    answerId: "b",
    explanation: "Ones is 5, tens is 5 \u2212 1 = 4 and hundreds is 5 + 2 = 7, so the number is 745.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q21",
    prompt: "How many different 3-digit numbers can you make with 2, 7 and 0, using each digit once?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "6" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "Zero cannot go first, so we get only 207, 270, 702 and 720.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q22",
    prompt: "What is the 7 worth in 728, minus what the 7 is worth in 172?",
    options: [
      { id: "a", text: "630" },
      { id: "b", text: "0" },
      { id: "c", text: "693" },
      { id: "d", text: "770" }
    ],
    answerId: "a",
    explanation: "In 728 the 7 is worth 700 and in 172 it is worth 70, and 700 \u2212 70 = 630.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q23",
    prompt: "What is the smallest ODD number you can make with 4, 9 and 2, using each digit once?",
    options: [
      { id: "a", text: "429" },
      { id: "b", text: "294" },
      { id: "c", text: "249" },
      { id: "d", text: "942" }
    ],
    answerId: "c",
    explanation: "An odd number must end in 9, and then 2 and 4 go first, smallest first, to make 249.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g3-maths-numbers-b-q24",
    prompt: "What comes next: 200, 199, 197, 194, ___?",
    options: [
      { id: "a", text: "189" },
      { id: "b", text: "190" },
      { id: "c", text: "191" },
      { id: "d", text: "192" }
    ],
    answerId: "b",
    explanation: "We take away 1, then 2, then 3, so next we take away 4, and 194 \u2212 4 = 190.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🧺",
    title: "Bundles of sticks",
    body: [
      "Ten loose sticks make one bundle — a ten.",
      "Ten bundles of ten make a big bundle — one hundred!",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's count!",
    visual: "place-value",
    speak: "Let's count sticks! Ten loose sticks make one bundle. We call it a ten. Ten bundles of ten make a big bundle. That is one hundred!",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Hundreds, tens and ones",
    lead: "Every digit lives in a house. Tap each house for 347.",
    visual: "place-value",
    speak: "Every digit lives in a house. The houses are hundreds, tens and ones. In three hundred forty-seven, three is in the hundreds house, four in tens, seven in ones.",
    cards: [
      { label: "Hundreds (H)", reveal: "3 → worth 300", emoji: "💯" },
      { label: "Tens (T)", reveal: "4 → worth 40", emoji: "🔟" },
      { label: "Ones (O)", reveal: "7 → worth 7", emoji: "1️⃣" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "What is a digit worth?",
    visual: "place-value",
    speak: "A digit's worth depends on its house. Four hundred seventy-two is four hundred, plus seventy, plus two. Four zero nine is four hundred nine. The zero means there are no tens, so we don't say it!",
    steps: [
      "472 = 400 + 70 + 2",
      "8 in the hundreds house of 832 is worth 800",
      "409 in words: four hundred nine",
      "Zero holds the tens place — we don't say it",
    ],
    punchline: "Same digit, different house → different worth.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is 8 worth in 832?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "80" },
      { id: "c", text: "800" },
      { id: "d", text: "832" },
    ],
    answerId: "c",
    why: "The 8 lives in the hundreds house, so it is worth 800.",
    visual: "place-value",
    speak: "What is eight worth in eight hundred thirty-two?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Bigger, biggest, smallest",
    visual: "number-line",
    speak: "To compare, look at the hundreds first. If the hundreds are the same, check the tens, then the ones. For the biggest number put the biggest digit first. For the smallest, put the smallest digit first, but zero can never go first!",
    steps: [
      "Compare hundreds first, then tens, then ones",
      "618 vs 681 → same hundreds, 8 tens beats 1 ten → 681",
      "Biggest from 5, 2, 9 → 952",
      "Smallest from 7, 0, 4 → 407 (zero never first)",
    ],
    punchline: "Look left first — the hundreds decide.",
  },
  {
    id: "r2",
    type: "reveal",
    title: "Even, odd and patterns",
    lead: "Tap each card.",
    visual: "number-line",
    speak: "Even numbers end in 0, 2, 4, 6 or 8. Odd numbers end in 1, 3, 5, 7 or 9. The number just after is one more; the number just before is one less.",
    cards: [
      { label: "Even", reveal: "Ends in 0, 2, 4, 6, 8 — makes pairs", emoji: "👫" },
      { label: "Odd", reveal: "Ends in 1, 3, 5, 7, 9 — one left alone", emoji: "🧍" },
      { label: "Skip count", reveal: "By 5s: 15, 20, 25, 30 · By 10s: 340, 350, 360", emoji: "🐸" },
      { label: "Before / after", reveal: "Just after 299 is 300 · just before 500 is 499", emoji: "🚂" },
    ],
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "Make the smallest number with seven, zero and four.",
    question: {
      id: "g3-numbers-check",
      prompt: "Make the smallest 3-digit number with 7, 0 and 4.",
      options: [
        { id: "a", text: "047" },
        { id: "b", text: "407" },
        { id: "c", text: "470" },
        { id: "d", text: "704" },
      ],
      answerId: "b",
      explanation: "Zero can't go first, so start with 4, then 0, then 7 → 407.",
      hints: ["Smallest digit first — but not zero.", "Then put the smallest digit left."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Number ninja!",
    bullets: [
      "Hundreds | tens | ones",
      "Digit worth = digit × its house",
      "Compare from the left; zero never first",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can read, write, compare and make 3-digit numbers. Set A and Set B are ready.",
  },
];

export const g3MathsNumbers: ChapterDef = {
  id: "numbers",
  title: "Numbers",
  emoji: "\ud83e\uddf1",
  blurb: "Place value, compare & patterns to 999",
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

export const g3MathsNumbersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
