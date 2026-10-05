import type { ContentPack } from "../../types";
import { spellingPhase } from "../spelling";

/** Strategy reasoning, fractions/percents intro, multi-step word problems. */
export const mondayPack1213: ContentPack = {
  id: "mon-12-13-v1",
  ageBand: "12-13",
  weekday: "mon",
  title: "Monday · Strategy & Fractions",
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
          prompt: "Which is ¾ of 20?",
          options: [
            { id: "10", text: "10" },
            { id: "15", text: "15" },
            { id: "5", text: "5" },
            { id: "16", text: "16" },
          ],
          answerId: "15",
          hints: [
            "First find ¼ of 20, then take three of those.",
            "20 ÷ 4 = 5, so ¾ = 3 × 5.",
          ],
          correct: "15 — three quarters of twenty. Warm-up locked!",
          tryAgain: "Split into 4 equal parts, then take 3.",
          rule: "¾ of n = 3 × (n ÷ 4).",
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
          prompt: "Best first move for: “A number times 4 is 36. What is the number?”",
          options: [
            { id: "guess", text: "Guess random numbers" },
            { id: "back", text: "Work backwards: divide 36 by 4" },
            { id: "add", text: "Add 4 to 36" },
            { id: "list", text: "List all factors of 4" },
          ],
          answerId: "back",
          hints: [
            "Undoing multiply-by-4 means…",
            "Inverse operation: divide.",
          ],
          correct: "Work backwards — divide. Strategy first!",
          tryAgain: "Think: what undoes “times 4”?",
          rule: "Use the inverse to work backwards.",
        },
        {
          id: "ra-2",
          type: "choice",
          prompt: "Odd one out — which doesn’t belong?",
          options: [
            { id: "a", text: "2, 4, 8, 16" },
            { id: "b", text: "3, 6, 12, 24" },
            { id: "c", text: "5, 10, 20, 40" },
            { id: "d", text: "7, 14, 21, 28" },
          ],
          answerId: "d",
          hints: [
            "Check how each sequence grows.",
            "A–C double each time; D adds 7.",
          ],
          correct: "D — it adds a constant; the others double.",
          tryAgain: "Compare the growth rule in each row.",
          rule: "Classify by the underlying rule.",
        },
        {
          id: "ra-3",
          type: "choice",
          prompt: "If every △ = 2 and every □ = 5, what is △△□△?",
          options: [
            { id: "9", text: "9" },
            { id: "11", text: "11" },
            { id: "14", text: "14" },
            { id: "7", text: "7" },
          ],
          answerId: "11",
          hints: [
            "Count the shapes: 3 triangles and 1 square.",
            "3×2 + 5.",
          ],
          correct: "11 — substitute, then combine.",
          tryAgain: "Replace each symbol with its value.",
          rule: "Substitute, then compute.",
        },
        {
          id: "ra-4",
          type: "choice",
          prompt: "Pattern: 1 → 4, 2 → 7, 3 → 10. What does 6 map to?",
          options: [
            { id: "13", text: "13" },
            { id: "16", text: "16" },
            { id: "19", text: "19" },
            { id: "22", text: "22" },
          ],
          answerId: "19",
          hints: [
            "Try: 3×input + 1.",
            "1→4, 2→7, 3→10… each output is 3n+1.",
          ],
          correct: "19 = 3×6 + 1. You found the function!",
          tryAgain: "Look for a linear rule: multiply then add.",
          rule: "Output = 3n + 1.",
        },
        {
          id: "ra-5",
          type: "choice",
          prompt: "You have 3 clues. Which strategy helps most?",
          options: [
            {
              id: "elim",
              text: "Elimination: cross out options that break a clue",
            },
            { id: "rush", text: "Pick the first option that sounds right" },
            { id: "ignore", text: "Ignore the hardest clue" },
            { id: "average", text: "Average the three clue numbers" },
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
          prompt: "Which equals ⅖?",
          options: [
            { id: "a", text: "2 out of 5 equal parts" },
            { id: "b", text: "5 out of 2 equal parts" },
            { id: "c", text: "2 + 5" },
            { id: "d", text: "20%" },
          ],
          answerId: "a",
          hints: [
            "Numerator = parts you have. Denominator = equal parts in the whole.",
            "⅖ means two fifths.",
          ],
          correct: "Two out of five equal parts. Spot on!",
          tryAgain: "Read top then bottom of the fraction.",
          rule: "a/b = a parts of b equal shares.",
        },
        {
          id: "mb-2",
          type: "choice",
          prompt: "What is 25% of 80?",
          options: [
            { id: "20", text: "20" },
            { id: "25", text: "25" },
            { id: "40", text: "40" },
            { id: "16", text: "16" },
          ],
          answerId: "20",
          hints: [
            "25% = ¼.",
            "80 ÷ 4 = ?",
          ],
          correct: "20 — a quarter of eighty.",
          tryAgain: "Percent means per hundred; 25% is one fourth.",
          rule: "25% of n = n ÷ 4.",
        },
        {
          id: "mb-3",
          type: "choice",
          prompt: "A shirt costs $40. It’s 30% off. Sale price?",
          options: [
            { id: "28", text: "$28" },
            { id: "12", text: "$12" },
            { id: "30", text: "$30" },
            { id: "37", text: "$37" },
          ],
          answerId: "28",
          hints: [
            "First find 30% of 40, then subtract from 40.",
            "10% of 40 = 4, so 30% = 12. Sale = 40 − 12.",
          ],
          correct: "$28 — discount then subtract.",
          tryAgain: "Discount amount first, then leftover price.",
          rule: "Sale = original − (percent × original).",
        },
        {
          id: "mb-4",
          type: "choice",
          prompt: "Which is larger?",
          options: [
            { id: "a", text: "⅗" },
            { id: "b", text: "½" },
            { id: "c", text: "They are equal" },
            { id: "d", text: "Not enough info" },
          ],
          answerId: "a",
          hints: [
            "Compare using a common denominator or decimals.",
            "⅗ = 0.6, ½ = 0.5.",
          ],
          correct: "⅗ is larger than ½.",
          tryAgain: "Rewrite both with the same denominator.",
          rule: "Common denominator (or decimals) to compare.",
        },
        {
          id: "mb-5",
          type: "choice",
          prompt: "Bus has 36 seats. ¾ are full. How many empty?",
          options: [
            { id: "9", text: "9" },
            { id: "12", text: "12" },
            { id: "27", text: "27" },
            { id: "18", text: "18" },
          ],
          answerId: "9",
          hints: [
            "Full seats = ¾ of 36. Empty = the leftover quarter.",
            "¼ of 36 = 9.",
          ],
          correct: "9 empty — the other quarter.",
          tryAgain: "If ¾ are full, what’s left as a fraction?",
          rule: "Empty = 1 − full fraction.",
        },
        {
          id: "mb-6",
          type: "choice",
          prompt: "True or false-ish: 0.5 = 50% = ½",
          options: [
            { id: "true", text: "All three match" },
            { id: "half", text: "Only 0.5 and ½ match" },
            { id: "pct", text: "Only 50% and ½ match" },
            { id: "none", text: "None match" },
          ],
          answerId: "true",
          hints: [
            "0.5 means 5 tenths = one half.",
            "50 per 100 is also one half.",
          ],
          correct: "All three are the same amount. Fluent!",
          tryAgain: "Convert each form to a fraction over 2 or 100.",
          rule: "0.5 ↔ 50% ↔ ½.",
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
          cta: "Hard try!",
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
            "Stretch: a growing fraction pattern in disguise.",
            "One brave try first. No hint until you tap I tried.",
          ],
          sequence: [2, 3, 5, 8],
          answer: 13,
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
