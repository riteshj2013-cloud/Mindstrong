import type { ChapterDef, PrepQuestion } from "../types";

/** Time & Money - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-maths-timemoney-a-q01",
    prompt: "How many minutes are in 1 hour?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "60" },
      { id: "c", text: "100" },
      { id: "d", text: "24" }
    ],
    answerId: "b",
    explanation: "1 hour = 60 minutes.",
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
      { id: "b", text: "\u20b915" },
      { id: "c", text: "\u20b920" },
      { id: "d", text: "\u20b95" }
    ],
    answerId: "b",
    explanation: "10 + 5 = \u20b915.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q04",
    prompt: "There are ___ days in a week.",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "A week has 7 days.",
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
    explanation: "Morning comes after night.",
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
    explanation: "1 + 2 = \u20b93.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q07",
    prompt: "Half past 2 is written as\u2026",
    options: [
      { id: "a", text: "2:00" },
      { id: "b", text: "2:30" },
      { id: "c", text: "2:15" },
      { id: "d", text: "3:00" }
    ],
    answerId: "b",
    explanation: "Half past 2 = 2:30.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q08",
    prompt: "Which is more money: \u20b920 or \u20b912?",
    options: [
      { id: "a", text: "\u20b912" },
      { id: "b", text: "\u20b920" },
      { id: "c", text: "same" },
      { id: "d", text: "\u20b90" }
    ],
    answerId: "b",
    explanation: "\u20b920 is more than \u20b912.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q09",
    prompt: "How many hours in a day?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "24" },
      { id: "c", text: "60" },
      { id: "d", text: "7" }
    ],
    answerId: "b",
    explanation: "A day has 24 hours.",
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
    explanation: "20 \u2212 10 = \u20b910 change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q11",
    prompt: "The short hand on a clock is the\u2026",
    options: [
      { id: "a", text: "minute hand" },
      { id: "b", text: "hour hand" },
      { id: "c", text: "second only always" },
      { id: "d", text: "date" }
    ],
    answerId: "b",
    explanation: "The short hand shows the hour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q12",
    prompt: "\u20b95 \u00d7 2 = ?",
    options: [
      { id: "a", text: "\u20b95" },
      { id: "b", text: "\u20b910" },
      { id: "c", text: "\u20b915" },
      { id: "d", text: "\u20b97" }
    ],
    answerId: "b",
    explanation: "Two \u20b95 make \u20b910.",
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
    explanation: "School often starts in the morning.",
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
    explanation: "\u20b95 is worth more than \u20b91.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q15",
    prompt: "Quarter past 4 is\u2026",
    options: [
      { id: "a", text: "4:15" },
      { id: "b", text: "4:30" },
      { id: "c", text: "4:45" },
      { id: "d", text: "4:00" }
    ],
    answerId: "a",
    explanation: "Quarter past = 15 minutes past \u2192 4:15.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-a-q16",
    prompt: "You buy a pencil for \u20b97 with a \u20b910 note. Change?",
    options: [
      { id: "a", text: "\u20b92" },
      { id: "b", text: "\u20b93" },
      { id: "c", text: "\u20b97" },
      { id: "d", text: "\u20b910" }
    ],
    answerId: "b",
    explanation: "10 \u2212 7 = \u20b93.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-maths-timemoney-b-q01",
    prompt: "How many seconds in 1 minute?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "60" },
      { id: "c", text: "100" },
      { id: "d", text: "24" }
    ],
    answerId: "b",
    explanation: "1 minute = 60 seconds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q02",
    prompt: "A clock shows 6:00. Hour hand on\u2026",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "3" },
      { id: "c", text: "6" },
      { id: "d", text: "9" }
    ],
    answerId: "c",
    explanation: "At 6:00 hour hand on 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q03",
    prompt: "\u20b920 \u2212 \u20b95 = ?",
    options: [
      { id: "a", text: "\u20b910" },
      { id: "b", text: "\u20b915" },
      { id: "c", text: "\u20b925" },
      { id: "d", text: "\u20b95" }
    ],
    answerId: "b",
    explanation: "20 \u2212 5 = \u20b915.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q04",
    prompt: "Sunday is a day of the\u2026",
    options: [
      { id: "a", text: "week" },
      { id: "b", text: "hour" },
      { id: "c", text: "minute" },
      { id: "d", text: "coin" }
    ],
    answerId: "a",
    explanation: "Sunday is a day of the week.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q05",
    prompt: "Evening comes ___ afternoon.",
    options: [
      { id: "a", text: "before" },
      { id: "b", text: "after" },
      { id: "c", text: "never" },
      { id: "d", text: "only underwater" }
    ],
    answerId: "b",
    explanation: "Evening comes after afternoon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q06",
    prompt: "Three \u20b92 coins make\u2026",
    options: [
      { id: "a", text: "\u20b92" },
      { id: "b", text: "\u20b94" },
      { id: "c", text: "\u20b96" },
      { id: "d", text: "\u20b98" }
    ],
    answerId: "c",
    explanation: "2 + 2 + 2 = \u20b96.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q07",
    prompt: "Half past 5 is\u2026",
    options: [
      { id: "a", text: "5:00" },
      { id: "b", text: "5:30" },
      { id: "c", text: "5:15" },
      { id: "d", text: "6:00" }
    ],
    answerId: "b",
    explanation: "Half past 5 = 5:30.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q08",
    prompt: "Which is less: \u20b99 or \u20b919?",
    options: [
      { id: "a", text: "\u20b99" },
      { id: "b", text: "\u20b919" },
      { id: "c", text: "same" },
      { id: "d", text: "\u20b990" }
    ],
    answerId: "a",
    explanation: "\u20b99 is less than \u20b919.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q09",
    prompt: "Lunch time is often around\u2026",
    options: [
      { id: "a", text: "noon / midday" },
      { id: "b", text: "midnight only" },
      { id: "c", text: "3 a.m. only" },
      { id: "d", text: "never" }
    ],
    answerId: "a",
    explanation: "Lunch is often around midday.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q10",
    prompt: "A toy costs \u20b925. You have \u20b930. Can you buy it?",
    options: [
      { id: "a", text: "yes" },
      { id: "b", text: "no" },
      { id: "c", text: "only with \u20b910" },
      { id: "d", text: "never" }
    ],
    answerId: "a",
    explanation: "30 is more than 25 \u2014 yes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q11",
    prompt: "The long hand on a clock is the\u2026",
    options: [
      { id: "a", text: "hour hand" },
      { id: "b", text: "minute hand" },
      { id: "c", text: "date" },
      { id: "d", text: "year" }
    ],
    answerId: "b",
    explanation: "The long hand shows minutes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q12",
    prompt: "\u20b910 + \u20b910 = ?",
    options: [
      { id: "a", text: "\u20b910" },
      { id: "b", text: "\u20b920" },
      { id: "c", text: "\u20b930" },
      { id: "d", text: "\u20b9100" }
    ],
    answerId: "b",
    explanation: "10 + 10 = \u20b920.",
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
    explanation: "Night comes after evening.",
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
    explanation: "\u20b95 = five \u20b91 coins.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q15",
    prompt: "Quarter to 3 is\u2026",
    options: [
      { id: "a", text: "2:45" },
      { id: "b", text: "3:15" },
      { id: "c", text: "3:45" },
      { id: "d", text: "2:15" }
    ],
    answerId: "a",
    explanation: "Quarter to 3 = 15 minutes before 3 \u2192 2:45.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-timemoney-b-q16",
    prompt: "You pay \u20b950 for books costing \u20b940. Change?",
    options: [
      { id: "a", text: "\u20b95" },
      { id: "b", text: "\u20b910" },
      { id: "c", text: "\u20b920" },
      { id: "d", text: "\u20b940" }
    ],
    answerId: "b",
    explanation: "50 \u2212 40 = \u20b910.",
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
