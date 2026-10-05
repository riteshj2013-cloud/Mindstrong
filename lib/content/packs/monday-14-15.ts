import type { ContentPack } from "../../types";
import { spellingPhase } from "../spelling";

/** Abstract reasoning, algebra-lite / proportional thinking — still kid-respectful. */
export const mondayPack1415: ContentPack = {
  id: "mon-14-15-v1",
  ageBand: "14-15",
  weekday: "mon",
  title: "Monday · Abstract & Proportions",
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
          body: ["Abstract warm-up: name the relationship.", "Then we stretch."],
          cta: "Let’s go!",
        },
        {
          id: "wu-tiny",
          type: "choice",
          prompt: "If 3 notebooks cost $12, what do 5 cost (same rate)?",
          options: [
            { id: "15", text: "$15" },
            { id: "20", text: "$20" },
            { id: "18", text: "$18" },
            { id: "24", text: "$24" },
          ],
          answerId: "20",
          hints: [
            "Find the unit rate first.",
            "$12 ÷ 3 = $4 each → 5 × $4.",
          ],
          correct: "$20 — proportional thinking. Warm-up locked!",
          tryAgain: "Price per notebook, then scale up.",
          rule: "Unit rate × quantity.",
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
      kidTitle: "Abstract",
      emoji: "🧩",
      estimatedMin: 7,
      items: [
        {
          id: "ra-intro",
          type: "intro",
          emoji: "🔮",
          title: "Think in relationships",
          body: [
            "Abstract means: look past the story to the structure.",
            "Same structure → same move.",
          ],
          cta: "Show me!",
        },
        {
          id: "ra-1",
          type: "choice",
          prompt: "All cats are mammals. Some mammals are pets. Which must be true?",
          options: [
            { id: "a", text: "All cats are pets" },
            { id: "b", text: "Some cats might be pets — we can’t force it" },
            { id: "c", text: "No cats are pets" },
            { id: "d", text: "All pets are cats" },
          ],
          answerId: "b",
          hints: [
            "“Some mammals are pets” doesn’t say which mammals.",
            "Cats are inside mammals, but not forced into the pet circle.",
          ],
          correct: "We can’t force it — careful with “some.”",
          tryAgain: "Watch for over-reaching from “some.”",
          rule: "Don’t invent certainty from “some.”",
        },
        {
          id: "ra-2",
          type: "choice",
          prompt: "Machine: in → out. 2→5, 4→9, 7→15. What’s 10→?",
          options: [
            { id: "20", text: "20" },
            { id: "21", text: "21" },
            { id: "19", text: "19" },
            { id: "17", text: "17" },
          ],
          answerId: "21",
          hints: [
            "Try 2n + 1.",
            "2→5 = 2×2+1, 4→9 = 2×4+1…",
          ],
          correct: "21 = 2×10 + 1. Function found!",
          tryAgain: "Guess a linear rule: multiply then add.",
          rule: "out = 2·in + 1.",
        },
        {
          id: "ra-3",
          type: "choice",
          prompt: "Which statement matches: “y is 3 less than twice x”?",
          options: [
            { id: "a", text: "y = 2x − 3" },
            { id: "b", text: "y = 2(x − 3)" },
            { id: "c", text: "y = 3 − 2x" },
            { id: "d", text: "y = x/2 − 3" },
          ],
          answerId: "a",
          hints: [
            "Twice x first, then take away 3.",
            "“3 less than …” subtracts after the double.",
          ],
          correct: "y = 2x − 3. Words → symbols.",
          tryAgain: "Order of operations in the English matters.",
          rule: "Translate phrase structure carefully.",
        },
        {
          id: "ra-4",
          type: "choice",
          prompt: "Analogy: 8 is to 2 as 27 is to ?",
          options: [
            { id: "3", text: "3" },
            { id: "9", text: "9" },
            { id: "6", text: "6" },
            { id: "4", text: "4" },
          ],
          answerId: "3",
          hints: [
            "8 = 2³. What’s special about 27?",
            "Cube roots: ∛8 = 2, ∛27 = ?",
          ],
          correct: "3 — both are cube roots.",
          tryAgain: "Look for a power / root relationship.",
          rule: "Preserve the same structural relation.",
        },
        {
          id: "ra-5",
          type: "choice",
          prompt: "If p ⇒ q is true, and q is false, what about p?",
          options: [
            { id: "true", text: "p must be true" },
            { id: "false", text: "p must be false" },
            { id: "maybe", text: "p could be either" },
            { id: "unknown", text: "The rule breaks; ignore it" },
          ],
          answerId: "false",
          hints: [
            "If p were true, q would have to be true.",
            "q is false, so p can’t be true.",
          ],
          correct: "p must be false — contrapositive vibes.",
          tryAgain: "Imagine p true and see the contradiction.",
          rule: "From p⇒q and ¬q, conclude ¬p.",
        },
        {
          id: "ra-close",
          type: "intro",
          emoji: "✨",
          title: "Structure over story",
          body: [
            "You translated words, functions, and logic.",
            "That’s abstract muscle — respectfully flexed.",
          ],
          cta: "Next: Maths!",
        },
      ],
    },

    focus_b: {
      muscle: "maths",
      title: "Maths",
      kidTitle: "Algebra-lite",
      emoji: "🧮",
      estimatedMin: 7,
      items: [
        {
          id: "mb-intro",
          type: "intro",
          emoji: "𝑥",
          title: "Unknowns & ratios",
          body: [
            "Letters stand for numbers we haven’t pinned yet.",
            "Proportions keep ratios equal while sizes change.",
          ],
          cta: "Show me!",
        },
        {
          id: "mb-1",
          type: "choice",
          prompt: "Solve: x + 7 = 15",
          options: [
            { id: "8", text: "x = 8" },
            { id: "22", text: "x = 22" },
            { id: "7", text: "x = 7" },
            { id: "15", text: "x = 15" },
          ],
          answerId: "8",
          hints: [
            "Undo +7 by subtracting 7 from both sides.",
            "15 − 7 = ?",
          ],
          correct: "x = 8. Balance both sides!",
          tryAgain: "Do the same operation to both sides.",
          rule: "Inverse ops keep equality.",
        },
        {
          id: "mb-2",
          type: "choice",
          prompt: "Solve: 3x = 21",
          options: [
            { id: "7", text: "x = 7" },
            { id: "18", text: "x = 18" },
            { id: "63", text: "x = 63" },
            { id: "3", text: "x = 3" },
          ],
          answerId: "7",
          hints: [
            "Divide both sides by 3.",
            "21 ÷ 3 = ?",
          ],
          correct: "x = 7.",
          tryAgain: "Multiplication undoes with division.",
          rule: "Divide both sides by the coefficient.",
        },
        {
          id: "mb-3",
          type: "choice",
          prompt: "3 : 5 = 6 : ?",
          options: [
            { id: "8", text: "8" },
            { id: "10", text: "10" },
            { id: "9", text: "9" },
            { id: "12", text: "12" },
          ],
          answerId: "10",
          hints: [
            "Left side scaled by 2 (3→6). Scale the right the same way.",
            "Or cross-multiply: 3 × ? = 5 × 6.",
          ],
          correct: "10 — ratios stay equal when scaled together.",
          tryAgain: "Whatever multiplies 3 to get 6 must multiply 5.",
          rule: "a:b = ka:kb.",
        },
        {
          id: "mb-4",
          type: "choice",
          prompt: "A recipe needs 2 cups flour for 3 cups milk. For 9 cups milk?",
          options: [
            { id: "4", text: "4 cups flour" },
            { id: "6", text: "6 cups flour" },
            { id: "5", text: "5 cups flour" },
            { id: "8", text: "8 cups flour" },
          ],
          answerId: "6",
          hints: [
            "Milk scaled 3→9 (×3). Scale flour the same.",
            "2 × 3 = 6.",
          ],
          correct: "6 cups flour — keep the recipe ratio.",
          tryAgain: "Same scale factor on both ingredients.",
          rule: "Proportional recipes scale together.",
        },
        {
          id: "mb-5",
          type: "choice",
          prompt: "Solve: 2(x − 3) = 10",
          options: [
            { id: "8", text: "x = 8" },
            { id: "2", text: "x = 2" },
            { id: "5", text: "x = 5" },
            { id: "13", text: "x = 13" },
          ],
          answerId: "8",
          hints: [
            "Divide both sides by 2 first: x − 3 = 5.",
            "Then add 3.",
          ],
          correct: "x = 8. Peel the layers carefully.",
          tryAgain: "Undo outside operations first (÷2), then +3.",
          rule: "Work from the outside in.",
        },
        {
          id: "mb-6",
          type: "choice",
          prompt: "Distance = rate × time. 60 km/h for 2.5 h → distance?",
          options: [
            { id: "120", text: "120 km" },
            { id: "150", text: "150 km" },
            { id: "90", text: "90 km" },
            { id: "180", text: "180 km" },
          ],
          answerId: "150",
          hints: [
            "60 × 2 = 120, plus half an hour more (30).",
            "60 × 2.5 = 60 × (5/2).",
          ],
          correct: "150 km. Formula plugged in cleanly.",
          tryAgain: "Multiply rate by time — watch the decimal.",
          rule: "d = r × t.",
        },
        {
          id: "mb-close",
          type: "intro",
          emoji: "🎯",
          title: "Balance & scale",
          body: [
            "Equations stay true when both sides match.",
            "Proportions stay true when ratios match.",
          ],
          cta: "Hard try!",
        },
      ],
    },

    focus_c: spellingPhase("14-15"),

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
            "Challenging stretch — still just one brave try first.",
            "No hint until you tap I tried.",
          ],
          sequence: [3, 6, 12, 24],
          answer: 48,
          hints: [
            "Is this adding a fixed amount — or multiplying?",
            "Each term is double the one before.",
            "3 → 6 → 12 → 24 → ?",
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
                { id: "abstract", label: "Abstract / logic wording", emoji: "🔮" },
                { id: "algebra", label: "Solving for x / ratios", emoji: "𝑥" },
                { id: "waiting", label: "Waiting for a hint", emoji: "⏳" },
                { id: "nothing", label: "Nothing felt hard today", emoji: "😎" },
              ],
            },
            {
              id: "whatTried",
              prompt: "What did you try?",
              options: [
                { id: "structure", label: "I looked for the structure", emoji: "🏗️" },
                { id: "balance", label: "I balanced both sides", emoji: "⚖️" },
                { id: "scale", label: "I scaled a ratio / unit rate", emoji: "📐" },
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
