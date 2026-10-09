import type { ContentPack } from "../../types";
import { spellingPhase } from "../spelling";

/** Friday pack — Clues & Cuts. Fresh set for ages 12-13. */
export const fridayPack1213: ContentPack = {
  id: "fri-12-13-v1",
  ageBand: "12-13",
  weekday: "fri",
  title: "Friday · Clues & Cuts",
  ready: true,
  phases: {
    warm_up: {
      muscle: "confidence",
      title: "Warm-up",
      kidTitle: "Warm-up",
      emoji: "🌅",
      estimatedMin: 2,
      items: [
        {
          id: "wu-intro",
          type: "intro",
          emoji: "💪",
          title: "Brave brain warm-up",
          body: ["Strategy warm-up: pick a path, then check.", "One tiny win first."],
          cta: "Let’s go!",
        },
        {
          id: "wu-tiny",
          type: "choice",
          prompt: "Which is ⅜ of 24?",
          options: [
            { id: "6", text: "6" },
            { id: "9", text: "9" },
            { id: "8", text: "8" },
            { id: "12", text: "12" },
          ],
          answerId: "9",
          hints: [
            "First find ⅛ of 24, then take three of those.",
            "24 ÷ 8 = 3, so ⅜ = 3 × 3.",
          ],
          correct: "9 — three eighths of twenty-four. Warm-up locked!",
          tryAgain: "Split into 8 equal parts, then take 3.",
          rule: "⅜ of n = 3 × (n ÷ 8).",
        },
        {
          id: "wu-ritual",
          type: "ritual",
          title: "Today’s rule",
          body: ["One brave try first.", "Hints wait until you ask."],
          chant: "Try before hint!",
        },
      ],
    },

    focus_a: {
      muscle: "reasoning",
      title: "Reasoning",
      kidTitle: "Strategy",
      emoji: "🧩",
      estimatedMin: 7,
      items: [
        {
          id: "ra-intro",
          type: "intro",
          emoji: "🧠",
          title: "Choose a strategy",
          body: [
            "Good thinkers name the move before they grind.",
            "Compare, eliminate, or work backwards.",
          ],
          cta: "Show me!",
        },
        {
          id: "ra-1",
          type: "choice",
          prompt: "Best first move for: “A number minus 12 is 27. What is the number?”",
          options: [
            { id: "guess", text: "Guess random numbers" },
            { id: "back", text: "Work backwards: add 12 to 27" },
            { id: "mult", text: "Multiply 27 by 12" },
            { id: "list", text: "List all multiples of 12" },
          ],
          answerId: "back",
          hints: [
            "Undoing minus-12 means…",
            "Inverse operation: add.",
          ],
          correct: "Work backwards — add. Strategy first!",
          tryAgain: "Think: what undoes “minus 12”?",
          rule: "Use the inverse to work backwards.",
        },
        {
          id: "ra-2",
          type: "choice",
          prompt: "Odd one out — which doesn’t belong?",
          options: [
            { id: "a", text: "5, 10, 20, 40" },
            { id: "b", text: "7, 14, 28, 56" },
            { id: "c", text: "8, 16, 32, 64" },
            { id: "d", text: "9, 18, 27, 36" },
          ],
          answerId: "d",
          hints: [
            "Check how each sequence grows.",
            "A–C double each time; D adds 9.",
          ],
          correct: "D — it adds a constant; the others double.",
          tryAgain: "Compare the growth rule in each row.",
          rule: "Classify by the underlying rule.",
        },
        {
          id: "ra-3",
          type: "choice",
          prompt: "If every ◇ = 5 and every ● = 2, what is ◇●◇●◇?",
          options: [
            { id: "16", text: "16" },
            { id: "19", text: "19" },
            { id: "17", text: "17" },
            { id: "14", text: "14" },
          ],
          answerId: "19",
          hints: [
            "Count the shapes: 3 diamonds and 2 dots.",
            "3×5 + 2×2.",
          ],
          correct: "19 — substitute, then combine.",
          tryAgain: "Replace each symbol with its value.",
          rule: "Substitute, then compute.",
        },
        {
          id: "ra-4",
          type: "choice",
          prompt: "Pattern: 1 → 6, 2 → 11, 3 → 16. What does 8 map to?",
          options: [
            { id: "36", text: "36" },
            { id: "41", text: "41" },
            { id: "40", text: "40" },
            { id: "46", text: "46" },
          ],
          answerId: "41",
          hints: [
            "Try: 5×input + 1.",
            "1→6, 2→11, 3→16… each output is 5n+1.",
          ],
          correct: "41 = 5×8 + 1. You found the function!",
          tryAgain: "Look for a linear rule: multiply then add.",
          rule: "Output = 5n + 1.",
        },
        {
          id: "ra-5",
          type: "choice",
          prompt: "You have 5 clues. Which strategy helps most?",
          options: [
            {
              id: "elim",
              text: "Elimination: cross out options that break a clue",
            },
            { id: "rush", text: "Pick the first option that sounds right" },
            { id: "ignore", text: "Ignore the hardest clue" },
            { id: "average", text: "Average the five clue numbers" },
          ],
          answerId: "elim",
          hints: [
            "Logic puzzles reward crossing out impossibles.",
            "Each clue rules something out.",
          ],
          correct: "Elimination keeps you honest and fast.",
          tryAgain: "Think like a detective — rule things out.",
          rule: "Eliminate contradictions first.",
        },
        {
          id: "ra-close",
          type: "intro",
          emoji: "✨",
          title: "Strategy named",
          body: [
            "You picked moves on purpose — not by luck.",
            "Name the strategy; the steps get easier.",
          ],
          cta: "Next: Maths!",
        },
      ],
    },

    focus_b: {
      muscle: "maths",
      title: "Maths",
      kidTitle: "Fractions & %",
      emoji: "🧮",
      estimatedMin: 7,
      items: [
        {
          id: "mb-intro",
          type: "intro",
          emoji: "🍕",
          title: "Parts of a whole",
          body: [
            "Fractions and percents describe the same idea: parts.",
            "½ = 50%. Let’s flex both languages.",
          ],
          cta: "Show me!",
        },
        {
          id: "mb-1",
          type: "choice",
          prompt: "Which equals ¾?",
          options: [
            { id: "a", text: "3 out of 4 equal parts" },
            { id: "b", text: "4 out of 3 equal parts" },
            { id: "c", text: "3 × 4" },
            { id: "d", text: "34%" },
          ],
          answerId: "a",
          hints: [
            "Numerator = parts you have. Denominator = equal parts in the whole.",
            "¾ means three quarters.",
          ],
          correct: "Three out of four equal parts. Spot on!",
          tryAgain: "Read top then bottom of the fraction.",
          rule: "a/b = a parts of b equal shares.",
        },
        {
          id: "mb-2",
          type: "choice",
          prompt: "What is 10% of 250?",
          options: [
            { id: "25", text: "25" },
            { id: "10", text: "10" },
            { id: "50", text: "50" },
            { id: "15", text: "15" },
          ],
          answerId: "25",
          hints: [
            "10% = ⅒.",
            "250 ÷ 10 = ?",
          ],
          correct: "25 — one tenth of two hundred fifty.",
          tryAgain: "Percent means per hundred; 10% is one tenth.",
          rule: "10% of n = n ÷ 10.",
        },
        {
          id: "mb-3",
          type: "choice",
          prompt: "A pair of shoes costs ₹900. It’s 20% off. Sale price?",
          options: [
            { id: "72", text: "₹720" },
            { id: "18", text: "₹180" },
            { id: "80", text: "₹800" },
            { id: "70", text: "₹700" },
          ],
          answerId: "72",
          hints: [
            "First find 20% of ₹900, then subtract it from ₹900.",
            "10% of ₹900 = ₹90, so 20% = ₹180. Sale = ₹900 − ₹180.",
          ],
          correct: "₹720 — discount then subtract.",
          tryAgain: "Discount amount first, then leftover price.",
          rule: "Sale = original − (percent × original).",
        },
        {
          id: "mb-4",
          type: "choice",
          prompt: "Which is larger?",
          options: [
            { id: "a", text: "¾" },
            { id: "b", text: "⅘" },
            { id: "c", text: "They are equal" },
            { id: "d", text: "Not enough info" },
          ],
          answerId: "b",
          hints: [
            "Compare using a common denominator or decimals.",
            "¾ = 0.75, ⅘ = 0.8.",
          ],
          correct: "⅘ is larger than ¾.",
          tryAgain: "Rewrite both with the same denominator.",
          rule: "Common denominator (or decimals) to compare.",
        },
        {
          id: "mb-5",
          type: "choice",
          prompt: "Team has 48 seats. ⅝ are taken. How many empty?",
          options: [
            { id: "18", text: "18" },
            { id: "30", text: "30" },
            { id: "12", text: "12" },
            { id: "24", text: "24" },
          ],
          answerId: "18",
          hints: [
            "Taken = ⅝ of 48. Empty = the leftover fraction.",
            "⅜ of 48 = 18.",
          ],
          correct: "18 empty — three eighths left.",
          tryAgain: "If ⅝ are taken, what’s left as a fraction?",
          rule: "Empty = 1 − taken fraction.",
        },
        {
          id: "mb-6",
          type: "choice",
          prompt: "True or false-ish: 0.75 = 75% = ¾",
          options: [
            { id: "true", text: "All three match" },
            { id: "half", text: "Only 0.75 and ¾ match" },
            { id: "pct", text: "Only 75% and ¾ match" },
            { id: "none", text: "None match" },
          ],
          answerId: "true",
          hints: [
            "0.75 means 75 hundredths = three quarters.",
            "75 per 100 is also three quarters.",
          ],
          correct: "All three are the same amount. Fluent!",
          tryAgain: "Convert each form to a fraction over 4 or 100.",
          rule: "0.75 ↔ 75% ↔ ¾.",
        },
        {
          id: "mb-close",
          type: "intro",
          emoji: "🎯",
          title: "Parts language",
          body: [
            "Fractions, decimals, percents — same idea, different outfits.",
            "Translate, then calculate.",
          ],
          cta: "Spelling!",
        },
      ],
    },

    focus_c: spellingPhase("12-13"),

    hard_try: {
      muscle: "confidence",
      title: "Hard try",
      kidTitle: "Hard try",
      emoji: "🦁",
      estimatedMin: 3,
      items: [
        {
          id: "ht-1",
          type: "hard_try",
          frame: [
            "Stretch: each term grows from earlier ones.",
            "One brave try first. No hint until you tap I tried.",
          ],
          sequence: [3, 5, 8, 13],
          answer: 21,
          hints: [
            "Each term is made from earlier ones…",
            "Add the two numbers before it.",
            "2+3=5, 3+5=8, 5+8=?",
          ],
          messages: {
            correctNoHint:
              "You tried first — and you got it. High five for the try AND the answer!",
            correctAfterHint: "Tried, then hint, then finished — smart bravery.",
            wrong: "You did the brave part — you tried. Hint now, or one more try?",
            stuck: "You stayed with it. Trying counted today.",
          },
        },
      ],
    },

    reflect: {
      muscle: "confidence",
      title: "Reflect",
      kidTitle: "Think back",
      emoji: "💭",
      estimatedMin: 1,
      items: [
        {
          id: "rf-1",
          type: "reflect",
          questions: [
            {
              id: "feltHard",
              prompt: "What felt hard?",
              options: [
                { id: "strategy", label: "Choosing a strategy", emoji: "🧭" },
                { id: "fractions", label: "Fractions / percents", emoji: "🍕" },
                { id: "waiting", label: "Waiting for a hint", emoji: "⏳" },
                { id: "nothing", label: "Nothing felt hard today", emoji: "😎" },
              ],
            },
            {
              id: "whatTried",
              prompt: "What did you try?",
              options: [
                { id: "inverse", label: "I used an inverse / worked backwards", emoji: "↩️" },
                { id: "translate", label: "I translated % ↔ fraction", emoji: "🔁" },
                { id: "elim", label: "I eliminated bad options", emoji: "❌" },
                { id: "hintAfter", label: "I asked for a hint after trying", emoji: "💡" },
              ],
            },
          ],
          closing:
            "You used Try before hint. That’s how brave brains grow. See you next time!",
        },
      ],
    },
  },
};
