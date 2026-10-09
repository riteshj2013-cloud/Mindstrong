import type { ContentPack } from "../../types";
import { spellingPhase } from "../spelling";

/** Thursday pack — Forms & Factors. Fresh set for ages 14-15. */
export const thursdayPack1415: ContentPack = {
  id: "thu-14-15-v1",
  ageBand: "14-15",
  weekday: "thu",
  title: "Thursday · Forms & Factors",
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
          prompt: "If 6 pencils cost ₹90, what do 8 cost (same rate)?",
          options: [
            { id: "12", text: "₹120" },
            { id: "10", text: "₹100" },
            { id: "15", text: "₹150" },
            { id: "14", text: "₹140" },
          ],
          answerId: "12",
          hints: [
            "Find the unit rate first.",
            "₹90 ÷ 6 = ₹15 each → 8 × ₹15.",
          ],
          correct: "₹120 — proportional thinking. Warm-up locked!",
          tryAgain: "Price per pen, then scale up.",
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
          prompt: "All squares are rectangles. Some rectangles are blue. Which must be true?",
          options: [
            { id: "a", text: "All squares are blue" },
            { id: "b", text: "Some squares might be blue — we can’t force it" },
            { id: "c", text: "No squares are blue" },
            { id: "d", text: "All blue things are squares" },
          ],
          answerId: "b",
          hints: [
            "“Some rectangles are blue” doesn’t say which rectangles.",
            "Squares are inside rectangles, but not forced into the blue circle.",
          ],
          correct: "We can’t force it — careful with “some.”",
          tryAgain: "Watch for over-reaching from “some.”",
          rule: "Don’t invent certainty from “some.”",
        },
        {
          id: "ra-2",
          type: "choice",
          prompt: "Machine: in → out. 3→7, 5→11, 8→17. What’s 12→?",
          options: [
            { id: "24", text: "24" },
            { id: "25", text: "25" },
            { id: "23", text: "23" },
            { id: "19", text: "19" },
          ],
          answerId: "25",
          hints: [
            "Try 2n + 1.",
            "3→7 = 2×3+1, 5→11 = 2×5+1…",
          ],
          correct: "25 = 2×12 + 1. Function found!",
          tryAgain: "Guess a linear rule: multiply then add.",
          rule: "out = 2·in + 1.",
        },
        {
          id: "ra-3",
          type: "choice",
          prompt: "Which statement matches: “y is 5 more than three times x”?",
          options: [
            { id: "a", text: "y = 3x + 5" },
            { id: "b", text: "y = 3(x + 5)" },
            { id: "c", text: "y = 5 − 3x" },
            { id: "d", text: "y = x/3 + 5" },
          ],
          answerId: "a",
          hints: [
            "Three times x first, then add 5.",
            "“5 more than …” adds after the triple.",
          ],
          correct: "y = 3x + 5. Words → symbols.",
          tryAgain: "Order of operations in the English matters.",
          rule: "Translate phrase structure carefully.",
        },
        {
          id: "ra-4",
          type: "choice",
          prompt: "Analogy: 16 is to 4 as 25 is to ?",
          options: [
            { id: "5", text: "5" },
            { id: "10", text: "10" },
            { id: "6", text: "6" },
            { id: "9", text: "9" },
          ],
          answerId: "5",
          hints: [
            "16 = 4². What’s special about 25?",
            "Square roots: √16 = 4, √25 = ?",
          ],
          correct: "5 — both are square roots.",
          tryAgain: "Look for a power / root relationship.",
          rule: "Preserve the same structural relation.",
        },
        {
          id: "ra-5",
          type: "choice",
          prompt: "If p ⇒ q is true, and p is true, what about q?",
          options: [
            { id: "true", text: "q must be true" },
            { id: "false", text: "q must be false" },
            { id: "maybe", text: "q could be either" },
            { id: "unknown", text: "The rule breaks; ignore it" },
          ],
          answerId: "true",
          hints: [
            "p ⇒ q means: whenever p holds, q holds.",
            "p is true, so q follows.",
          ],
          correct: "q must be true — modus ponens vibes.",
          tryAgain: "If the rule fires and the trigger is on, the result follows.",
          rule: "From p⇒q and p, conclude q.",
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
          prompt: "Solve: x − 7 = 18",
          options: [
            { id: "25", text: "x = 25" },
            { id: "11", text: "x = 11" },
            { id: "18", text: "x = 18" },
            { id: "7", text: "x = 7" },
          ],
          answerId: "25",
          hints: [
            "Undo −7 by adding 7 to both sides.",
            "18 + 7 = ?",
          ],
          correct: "x = 25. Balance both sides!",
          tryAgain: "Do the same operation to both sides.",
          rule: "Inverse ops keep equality.",
        },
        {
          id: "mb-2",
          type: "choice",
          prompt: "Solve: 6x = 42",
          options: [
            { id: "7", text: "x = 7" },
            { id: "36", text: "x = 36" },
            { id: "252", text: "x = 252" },
            { id: "6", text: "x = 6" },
          ],
          answerId: "7",
          hints: [
            "Divide both sides by 6.",
            "42 ÷ 6 = ?",
          ],
          correct: "x = 7.",
          tryAgain: "Multiplication undoes with division.",
          rule: "Divide both sides by the coefficient.",
        },
        {
          id: "mb-3",
          type: "choice",
          prompt: "3 : 5 = 9 : ?",
          options: [
            { id: "12", text: "12" },
            { id: "15", text: "15" },
            { id: "18", text: "18" },
            { id: "20", text: "20" },
          ],
          answerId: "15",
          hints: [
            "Left side scaled by 3 (2→6). Scale the right the same way.",
            "Or cross-multiply: 2 × ? = 7 × 6.",
          ],
          correct: "15 — ratios stay equal when scaled together.",
          tryAgain: "Whatever multiplies 2 to get 6 must multiply 7.",
          rule: "a:b = ka:kb.",
        },
        {
          id: "mb-4",
          type: "choice",
          prompt: "A mix needs 3 cups oats for 5 cups milk. For 15 cups milk?",
          options: [
            { id: "6", text: "6 cups oats" },
            { id: "9", text: "9 cups oats" },
            { id: "8", text: "8 cups oats" },
            { id: "12", text: "12 cups oats" },
          ],
          answerId: "9",
          hints: [
            "Milk scaled 5→15 (×3). Scale oats the same.",
            "3 × 3 = 9.",
          ],
          correct: "9 cups oats — keep the recipe ratio.",
          tryAgain: "Same scale factor on both ingredients.",
          rule: "Proportional recipes scale together.",
        },
        {
          id: "mb-5",
          type: "choice",
          prompt: "Solve: 3(x + 2) = 21",
          options: [
            { id: "5", text: "x = 5" },
            { id: "7", text: "x = 7" },
            { id: "4", text: "x = 4" },
            { id: "19", text: "x = 19" },
          ],
          answerId: "5",
          hints: [
            "Divide both sides by 3 first: x + 2 = 7.",
            "Then subtract 2.",
          ],
          correct: "x = 5. Peel the layers carefully.",
          tryAgain: "Undo outside operations first (÷3), then −2.",
          rule: "Work from the outside in.",
        },
        {
          id: "mb-6",
          type: "choice",
          prompt: "Distance = rate × time. 60 km/h for 2.5 h → distance?",
          options: [
            { id: "120", text: "120 km" },
            { id: "150", text: "150 km" },
            { id: "100", text: "100 km" },
            { id: "180", text: "180 km" },
          ],
          answerId: "150",
          hints: [
            "45 × 3 = 135, plus 0.2 × 45 = 9.",
            "45 × 3.2 = 45 × (16/5).",
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
          cta: "Spelling!",
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
          sequence: [3, 9, 27, 81],
          answer: 243,
          hints: [
            "Is this adding a fixed amount — or multiplying?",
            "Each term is triple the one before.",
            "2 → 6 → 18 → 54 → ?",
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
