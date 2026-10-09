import type { ContentPack } from "../../types";
import { spellingPhase } from "../spelling";

/** Sunday pack — Steady Structure. Fresh set for ages 14-15. */
export const sundayPack1415: ContentPack = {
  id: "sun-14-15-v1",
  ageBand: "14-15",
  weekday: "sun",
  title: "Sunday · Steady Structure",
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
          prompt: "If 4 notebooks cost ₹160, what do 9 cost (same rate)?",
          options: [
            { id: "36", text: "₹360" },
            { id: "32", text: "₹320" },
            { id: "40", text: "₹400" },
            { id: "28", text: "₹280" },
          ],
          answerId: "36",
          hints: [
            "Find the unit rate first.",
            "₹160 ÷ 4 = ₹40 each → 9 × ₹40.",
          ],
          correct: "₹360 — proportional thinking. Warm-up locked!",
          tryAgain: "Price per eraser, then scale up.",
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
          prompt: "All triangles are polygons. Some polygons are red. Which must be true?",
          options: [
            { id: "a", text: "All triangles are red" },
            { id: "b", text: "Some triangles might be red — we can’t force it" },
            { id: "c", text: "No triangles are red" },
            { id: "d", text: "All red things are triangles" },
          ],
          answerId: "b",
          hints: [
            "“Some polygons are red” doesn’t say which polygons.",
            "Triangles are inside polygons, but not forced into the red circle.",
          ],
          correct: "We can’t force it — careful with “some.”",
          tryAgain: "Watch for over-reaching from “some.”",
          rule: "Don’t invent certainty from “some.”",
        },
        {
          id: "ra-2",
          type: "choice",
          prompt: "Machine: in → out. 4→9, 6→13, 9→19. What’s 11→?",
          options: [
            { id: "22", text: "22" },
            { id: "23", text: "23" },
            { id: "21", text: "21" },
            { id: "20", text: "20" },
          ],
          answerId: "23",
          hints: [
            "Try 2n + 1.",
            "4→9 = 2×4+1, 6→13 = 2×6+1…",
          ],
          correct: "23 = 2×11 + 1. Function found!",
          tryAgain: "Guess a linear rule: multiply then add.",
          rule: "out = 2·in + 1.",
        },
        {
          id: "ra-3",
          type: "choice",
          prompt: "Which statement matches: “y is 4 less than twice x”?",
          options: [
            { id: "a", text: "y = 2x − 4" },
            { id: "b", text: "y = 2(x − 4)" },
            { id: "c", text: "y = 4 − 2x" },
            { id: "d", text: "y = x/2 − 4" },
          ],
          answerId: "a",
          hints: [
            "Twice x first, then subtract 4.",
            "“4 less than …” subtracts after the double.",
          ],
          correct: "y = 2x − 4. Words → symbols.",
          tryAgain: "Order of operations in the English matters.",
          rule: "Translate phrase structure carefully.",
        },
        {
          id: "ra-4",
          type: "choice",
          prompt: "Analogy: 9 is to 3 as 36 is to ?",
          options: [
            { id: "6", text: "6" },
            { id: "12", text: "12" },
            { id: "9", text: "9" },
            { id: "18", text: "18" },
          ],
          answerId: "6",
          hints: [
            "9 = 3². What’s special about 36?",
            "Square roots: √9 = 3, √36 = ?",
          ],
          correct: "6 — both are square roots.",
          tryAgain: "Look for a power / root relationship.",
          rule: "Preserve the same structural relation.",
        },
        {
          id: "ra-5",
          type: "choice",
          prompt: "If p ⇒ q is true, and q is false, what about p?",
          options: [
            { id: "false", text: "p must be false" },
            { id: "true", text: "p must be true" },
            { id: "maybe", text: "p could be either" },
            { id: "unknown", text: "The rule breaks; ignore it" },
          ],
          answerId: "false",
          hints: [
            "p ⇒ q means: if p holds, q must hold.",
            "q is false, so p cannot have been true.",
          ],
          correct: "p must be false — modus tollens vibes.",
          tryAgain: "If the result is off, the trigger can’t have fired.",
          rule: "From p⇒q and not-q, conclude not-p.",
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
          prompt: "Solve: x − 6 = 19",
          options: [
            { id: "25", text: "x = 25" },
            { id: "13", text: "x = 13" },
            { id: "19", text: "x = 19" },
            { id: "6", text: "x = 6" },
          ],
          answerId: "25",
          hints: [
            "Undo −6 by adding 6 to both sides.",
            "19 + 6 = ?",
          ],
          correct: "x = 25. Balance both sides!",
          tryAgain: "Do the same operation to both sides.",
          rule: "Inverse ops keep equality.",
        },
        {
          id: "mb-2",
          type: "choice",
          prompt: "Solve: 4x = 36",
          options: [
            { id: "9", text: "x = 9" },
            { id: "32", text: "x = 32" },
            { id: "144", text: "x = 144" },
            { id: "4", text: "x = 4" },
          ],
          answerId: "9",
          hints: [
            "Divide both sides by 4.",
            "36 ÷ 4 = ?",
          ],
          correct: "x = 9.",
          tryAgain: "Multiplication undoes with division.",
          rule: "Divide both sides by the coefficient.",
        },
        {
          id: "mb-3",
          type: "choice",
          prompt: "3 : 8 = 9 : ?",
          options: [
            { id: "24", text: "24" },
            { id: "18", text: "18" },
            { id: "16", text: "16" },
            { id: "27", text: "27" },
          ],
          answerId: "24",
          hints: [
            "Left side scaled by 3 (3→9). Scale the right the same way.",
            "Or cross-multiply: 3 × ? = 8 × 9.",
          ],
          correct: "24 — ratios stay equal when scaled together.",
          tryAgain: "Whatever multiplies 3 to get 9 must multiply 8.",
          rule: "a:b = ka:kb.",
        },
        {
          id: "mb-4",
          type: "choice",
          prompt: "A mix needs 4 cups rice for 7 cups water. For 21 cups water?",
          options: [
            { id: "12", text: "12 cups rice" },
            { id: "14", text: "14 cups rice" },
            { id: "10", text: "10 cups rice" },
            { id: "16", text: "16 cups rice" },
          ],
          answerId: "12",
          hints: [
            "Water scaled 7→21 (×3). Scale rice the same.",
            "4 × 3 = 12.",
          ],
          correct: "12 cups rice — keep the recipe ratio.",
          tryAgain: "Same scale factor on both ingredients.",
          rule: "Proportional recipes scale together.",
        },
        {
          id: "mb-5",
          type: "choice",
          prompt: "Solve: 4(x − 1) = 28",
          options: [
            { id: "8", text: "x = 8" },
            { id: "7", text: "x = 7" },
            { id: "6", text: "x = 6" },
            { id: "29", text: "x = 29" },
          ],
          answerId: "8",
          hints: [
            "Divide both sides by 4 first: x − 1 = 7.",
            "Then add 1.",
          ],
          correct: "x = 8. Peel the layers carefully.",
          tryAgain: "Undo outside operations first (÷4), then +1.",
          rule: "Work from the outside in.",
        },
        {
          id: "mb-6",
          type: "choice",
          prompt: "Distance = rate × time. 55 km/h for 2.4 h → distance?",
          options: [
            { id: "110", text: "110 km" },
            { id: "132", text: "132 km" },
            { id: "120", text: "120 km" },
            { id: "140", text: "140 km" },
          ],
          answerId: "132",
          hints: [
            "55 × 2 = 110, plus 0.4 × 55 = 22.",
            "55 × 2.4 = 55 × (12/5).",
          ],
          correct: "132 km. Formula plugged in cleanly.",
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
          sequence: [1, 2, 4, 8],
          answer: 16,
          hints: [
            "Is this adding a fixed amount — or multiplying?",
            "Each term is triple the one before.",
            "3 → 9 → 27 → 81 → ?",
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
