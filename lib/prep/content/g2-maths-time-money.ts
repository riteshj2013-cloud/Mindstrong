import type { ChapterDef, PrepQuestion } from "../types";

/** Time & Money - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-maths-timemoney-a-q01",
    prompt: "How many minutes are in 1 hour?",
    options: [
      { id: "a", text: "60" },
      { id: "b", text: "30" },
      { id: "c", text: "100" },
      { id: "d", text: "24" }
    ],
    answerId: "a",
    explanation: "1 hour has 60 minutes; the minute hand goes all the way round once. 100 is tempting because we count many things in hundreds, but time uses 60.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q02",
    prompt: "A clock shows 3:00. The hour hand points to\u2026",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "3" },
      { id: "c", text: "6" },
      { id: "d", text: "9" }
    ],
    answerId: "b",
    explanation: "At 3:00 the hour hand is on 3.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q03",
    prompt: "\u20b910 + \u20b95 = ?",
    options: [
      { id: "a", text: "\u20b910" },
      { id: "b", text: "\u20b920" },
      { id: "c", text: "\u20b915" },
      { id: "d", text: "\u20b95" }
    ],
    answerId: "c",
    explanation: "₹10 and ₹5 more make 10 + 5 = ₹15. ₹5 is tempting, but that takes away instead of adding.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q04",
    prompt: "There are ___ days in a week.",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "7" }
    ],
    answerId: "d",
    explanation: "A week has 7 days, from Monday to Sunday. 5 is tempting if you count only Monday to Friday, but Saturday and Sunday make 7.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q05",
    prompt: "Morning comes ___ night.",
    options: [
      { id: "a", text: "after" },
      { id: "b", text: "before the sun sets" },
      { id: "c", text: "never" },
      { id: "d", text: "only in winter" }
    ],
    answerId: "a",
    explanation: "First comes night, then the Sun rises and it is morning, so morning comes after night. 'Before the sun sets' is tempting, but morning comes before sunset, not before night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q06",
    prompt: "A \u20b91 coin and a \u20b92 coin make\u2026",
    options: [
      { id: "a", text: "\u20b92" },
      { id: "b", text: "\u20b93" },
      { id: "c", text: "\u20b94" },
      { id: "d", text: "\u20b91" }
    ],
    answerId: "b",
    explanation: "A ₹1 coin and a ₹2 coin make 1 + 2 = ₹3. ₹2 is tempting, but that counts only the bigger coin.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q07",
    prompt: "Half past 2 is written as\u2026",
    options: [
      { id: "a", text: "2:00" },
      { id: "b", text: "2:15" },
      { id: "c", text: "2:30" },
      { id: "d", text: "3:00" }
    ],
    answerId: "c",
    explanation: "Half past 2 is 30 minutes after 2 o'clock, written 2:30. 3:00 is tempting, but that is a full hour after 2.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q08",
    prompt: "Which is more money: \u20b920 or \u20b912?",
    options: [
      { id: "a", text: "\u20b912" },
      { id: "b", text: "same" },
      { id: "c", text: "\u20b90" },
      { id: "d", text: "\u20b920" }
    ],
    answerId: "d",
    explanation: "₹20 is 2 tens and ₹12 is 1 ten and 2 ones, so ₹20 is more. ₹12 is tempting because 2 is in both, but it has fewer tens.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q09",
    prompt: "How many hours in a day?",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "12" },
      { id: "c", text: "60" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "A whole day and night has 24 hours: the hour hand goes round the clock twice. 12 is tempting, but that is only one trip round the clock.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q10",
    prompt: "A notebook costs \u20b910. You give \u20b920. Change?",
    options: [
      { id: "a", text: "\u20b95" },
      { id: "b", text: "\u20b910" },
      { id: "c", text: "\u20b920" },
      { id: "d", text: "\u20b90" }
    ],
    answerId: "b",
    explanation: "You give ₹20 for a ₹10 notebook, so the change is 20 − 10 = ₹10. ₹20 is tempting, but that is the money you gave, not what comes back.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q11",
    prompt: "The short hand on a clock is the\u2026",
    options: [
      { id: "a", text: "minute hand" },
      { id: "b", text: "second only always" },
      { id: "c", text: "hour hand" },
      { id: "d", text: "date" }
    ],
    answerId: "c",
    explanation: "The short hand points to the hour, so it is the hour hand. 'Minute hand' is tempting, but the minute hand is the long one.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q12",
    prompt: "\u20b95 \u00d7 2 = ?",
    options: [
      { id: "a", text: "\u20b95" },
      { id: "b", text: "\u20b915" },
      { id: "c", text: "\u20b97" },
      { id: "d", text: "\u20b910" }
    ],
    answerId: "d",
    explanation: "₹5 × 2 means two lots of ₹5: 5 + 5 = ₹10. ₹7 is tempting, but that adds 5 + 2 instead of taking two fives.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q13",
    prompt: "School often starts in the\u2026",
    options: [
      { id: "a", text: "morning" },
      { id: "b", text: "midnight only" },
      { id: "c", text: "only at 3 a.m." },
      { id: "d", text: "never" }
    ],
    answerId: "a",
    explanation: "Most schools start in the morning, after breakfast. 'Midnight only' is tempting if you mix up the times, but midnight is when everyone is asleep.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q14",
    prompt: "Which coin is worth more: \u20b91 or \u20b95?",
    options: [
      { id: "a", text: "\u20b91" },
      { id: "b", text: "\u20b95" },
      { id: "c", text: "same" },
      { id: "d", text: "neither" }
    ],
    answerId: "b",
    explanation: "₹5 is worth more than ₹1: one ₹5 coin buys as much as five ₹1 coins. 'Same' is tempting because coins can look alike, but their values differ.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q15",
    prompt: "Quarter past 4 is\u2026",
    options: [
      { id: "a", text: "4:30" },
      { id: "b", text: "4:45" },
      { id: "c", text: "4:15" },
      { id: "d", text: "4:00" }
    ],
    answerId: "c",
    explanation: "Quarter past = 15 minutes past \u2192 4:15.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q16",
    prompt: "You buy a pencil for \u20b97 with a \u20b910 note. Change?",
    options: [
      { id: "a", text: "\u20b92" },
      { id: "b", text: "\u20b97" },
      { id: "c", text: "\u20b910" },
      { id: "d", text: "\u20b93" }
    ],
    answerId: "d",
    explanation: "You give ₹10 for a ₹7 pencil, so the change is 10 − 7 = ₹3. ₹7 is tempting, but that is the price of the pencil, not the change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-maths-timemoney-b-q01",
    prompt: "How many seconds in 1 minute?",
    options: [
      { id: "a", text: "60" },
      { id: "b", text: "30" },
      { id: "c", text: "100" },
      { id: "d", text: "24" }
    ],
    answerId: "a",
    explanation: "1 minute has 60 seconds, just as 1 hour has 60 minutes. 100 is tempting because we count many things in hundreds, but time uses 60.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q02",
    prompt: "A clock shows 6:00. Hour hand on\u2026",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "6" },
      { id: "c", text: "3" },
      { id: "d", text: "9" }
    ],
    answerId: "b",
    explanation: "At 6:00 the short hour hand points to 6. 12 is tempting, but at 6:00 it is the long minute hand that points to 12.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q03",
    prompt: "\u20b920 \u2212 \u20b95 = ?",
    options: [
      { id: "a", text: "\u20b910" },
      { id: "b", text: "\u20b925" },
      { id: "c", text: "\u20b915" },
      { id: "d", text: "\u20b95" }
    ],
    answerId: "c",
    explanation: "₹20 take away ₹5 is 20 − 5 = ₹15. ₹25 is tempting, but that adds ₹5 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q04",
    prompt: "Sunday is a day of the\u2026",
    options: [
      { id: "a", text: "hour" },
      { id: "b", text: "minute" },
      { id: "c", text: "coin" },
      { id: "d", text: "week" }
    ],
    answerId: "d",
    explanation: "Sunday is one of the 7 days of the week. Hour is tempting because it is also a unit of time, but an hour is much shorter than a day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q05",
    prompt: "Evening comes ___ afternoon.",
    options: [
      { id: "a", text: "after" },
      { id: "b", text: "before" },
      { id: "c", text: "never" },
      { id: "d", text: "only underwater" }
    ],
    answerId: "a",
    explanation: "The day goes morning, afternoon, then evening, so evening comes after afternoon. 'Before' is tempting, but afternoon comes first.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q06",
    prompt: "Three \u20b92 coins make\u2026",
    options: [
      { id: "a", text: "\u20b92" },
      { id: "b", text: "\u20b96" },
      { id: "c", text: "\u20b94" },
      { id: "d", text: "\u20b98" }
    ],
    answerId: "b",
    explanation: "Three ₹2 coins make 2 + 2 + 2 = ₹6. ₹4 is tempting, but that counts only two of the three coins.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q07",
    prompt: "Half past 5 is\u2026",
    options: [
      { id: "a", text: "5:00" },
      { id: "b", text: "5:15" },
      { id: "c", text: "5:30" },
      { id: "d", text: "6:00" }
    ],
    answerId: "c",
    explanation: "Half past 5 is 30 minutes after 5 o'clock, written 5:30. 6:00 is tempting, but that is a full hour after 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q08",
    prompt: "Which is less: \u20b99 or \u20b919?",
    options: [
      { id: "a", text: "\u20b919" },
      { id: "b", text: "same" },
      { id: "c", text: "\u20b990" },
      { id: "d", text: "\u20b99" }
    ],
    answerId: "d",
    explanation: "₹9 has no tens and ₹19 has 1 ten, so ₹9 is less. ₹19 is tempting because it ends in 9 too, but it is the bigger amount.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q09",
    prompt: "Lunch time is often around\u2026",
    options: [
      { id: "a", text: "noon" },
      { id: "b", text: "midnight only" },
      { id: "c", text: "3 a.m. only" },
      { id: "d", text: "7 p.m. only" }
    ],
    answerId: "a",
    explanation: "Lunch is often around noon, 12 o'clock in the daytime (also called midday). 7 p.m. is nearer dinner time; midnight and 3 a.m. are in the night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q10",
    prompt: "A toy costs \u20b925. You have \u20b930. Can you buy it?",
    options: [
      { id: "a", text: "no" },
      { id: "b", text: "yes" },
      { id: "c", text: "only with \u20b910" },
      { id: "d", text: "never" }
    ],
    answerId: "b",
    explanation: "You have ₹30 and the toy costs ₹25; 30 is more than 25, so yes, with ₹5 left over. 'No' is tempting if you compare only the ones digits, 0 and 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q11",
    prompt: "The long hand on a clock is the\u2026",
    options: [
      { id: "a", text: "hour hand" },
      { id: "b", text: "date" },
      { id: "c", text: "minute hand" },
      { id: "d", text: "year" }
    ],
    answerId: "c",
    explanation: "The long hand points to the minutes, so it is the minute hand. 'Hour hand' is tempting, but the hour hand is the short one.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q12",
    prompt: "\u20b910 + \u20b910 = ?",
    options: [
      { id: "a", text: "\u20b910" },
      { id: "b", text: "\u20b930" },
      { id: "c", text: "\u20b9100" },
      { id: "d", text: "\u20b920" }
    ],
    answerId: "d",
    explanation: "₹10 + ₹10 is 1 ten + 1 ten = 2 tens = ₹20. ₹100 is tempting, but that is 10 tens, not 2 tens.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q13",
    prompt: "Night comes after\u2026",
    options: [
      { id: "a", text: "evening" },
      { id: "b", text: "morning only forever" },
      { id: "c", text: "noon forever" },
      { id: "d", text: "never" }
    ],
    answerId: "a",
    explanation: "The day goes afternoon, evening and then night, so night comes after evening. 'Morning only forever' is tempting, but morning comes after night, not before it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q14",
    prompt: "A \u20b95 note is worth ___ \u20b91 coins.",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "5" },
      { id: "c", text: "10" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "A ₹5 note is worth the same as five ₹1 coins: 1 + 1 + 1 + 1 + 1 = 5. 1 is tempting, but one ₹1 coin is only ₹1.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q15",
    prompt: "Quarter to 3 is\u2026",
    options: [
      { id: "a", text: "3:15" },
      { id: "b", text: "3:45" },
      { id: "c", text: "2:45" },
      { id: "d", text: "2:15" }
    ],
    answerId: "c",
    explanation: "Quarter to 3 = 15 minutes before 3 \u2192 2:45.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q16",
    prompt: "You pay \u20b950 for books costing \u20b940. Change?",
    options: [
      { id: "a", text: "\u20b95" },
      { id: "b", text: "\u20b920" },
      { id: "c", text: "\u20b940" },
      { id: "d", text: "\u20b910" }
    ],
    answerId: "d",
    explanation: "You pay ₹50 for books costing ₹40, so the change is 50 − 40 = ₹10. ₹40 is tempting, but that is the price of the books, not the change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd52",
    title: "Time & Money",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "none",
    speak: "Clocks tell time. Coins and notes are money.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "none",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Hour", reveal: "Short hand", emoji: "\ud83d\udd50" },
      { label: "Minutes", reveal: "Long hand", emoji: "\u23f1\ufe0f" },
      { label: "Rupees", reveal: "Money in rupees", emoji: "\ud83d\udcb0" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "10 rupees + 5 rupees = ?",
    options: [
        { id: "a", text: "10 rupees" },
        { id: "b", text: "15 rupees" },
        { id: "c", text: "20 rupees" },
        { id: "d", text: "5 rupees" }
    ],
    answerId: "b",
    why: "10 + 5 = 15 rupees.",
    visual: "none",
    speak: "10 rupees + 5 rupees = ?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Read the clock", "Add and give change in rupees", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g2MathsTimeMoney: ChapterDef = {
  id: "time-money",
  title: "Time & Money",
  emoji: "\ud83d\udd52",
  blurb: "Clocks and rupees",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "measurement",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "measurement",
      questions: SET_B,
    },
  ],
  paperTopics: ["measurement", "add-sub"],
};

export const g2MathsTimeMoneyQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
