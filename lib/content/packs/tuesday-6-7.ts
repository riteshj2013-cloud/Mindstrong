import type { ContentPack } from "../../types";
import { spellingPhase } from "../spelling";

/** Early explorers — fresh shapes, colour chunks, teen tens/ones. */
export const tuesdayPack67: ContentPack = {
  id: "tue-6-7-v1",
  ageBand: "6-7",
  weekday: "tue",
  title: "Tuesday · Shapes & Teens",
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
          body: ["Tuesday warm-up time!", "Ready for a tiny win?"],
          cta: "Let’s go!",
        },
        {
          id: "wu-tiny",
          type: "choice",
          prompt: "What number fits?",
          sequence: [
            { kind: "number", value: 5 },
            { kind: "number", value: 6 },
            { kind: "number", value: 7 },
            { kind: "blank" },
            { kind: "number", value: 9 },
          ],
          options: [
            { id: "6", text: "6" },
            { id: "8", text: "8" },
            { id: "10", text: "10" },
            { id: "7", text: "7" },
          ],
          answerId: "8",
          hints: [
            "Count on: 5, 6, 7… what comes next?",
            "Each number is just one bigger.",
          ],
          correct: "Yes — 8! Counting by ones. That warm-up counts!",
          tryAgain: "Close! Count slowly: five, six, seven…",
          rule: "Counting by 1s.",
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
      kidTitle: "Patterns",
      emoji: "🧩",
      estimatedMin: 7,
      items: [
        {
          id: "ra-intro",
          type: "intro",
          emoji: "🔎",
          title: "Find the secret rule",
          body: [
            "Patterns hide a secret rule.",
            "We find the rule, then guess what comes next.",
          ],
          cta: "Show me!",
        },
        {
          id: "ra-1",
          type: "choice",
          prompt: "What comes next?",
          sequence: [
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "green" },
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "green" },
            { kind: "dot", color: "yellow" },
            { kind: "blank" },
          ],
          options: [
            { id: "yellow", label: "Yellow", token: { kind: "dot", color: "yellow" } },
            { id: "green", label: "Green", token: { kind: "dot", color: "green" } },
            { id: "blue", label: "Blue", token: { kind: "dot", color: "blue" } },
          ],
          answerId: "green",
          hints: [
            "Look at the colors. What keeps switching?",
            "Say it: yellow, green, yellow, green…",
          ],
          correct: "Green! Yellow, green, yellow, green…",
          tryAgain: "Hmm, look at the colors again.",
          rule: "Colors take turns: yellow, green.",
        },
        {
          id: "ra-2",
          type: "choice",
          prompt: "What comes next?",
          sequence: [
            { kind: "shape", shape: "triangle", color: "blue" },
            { kind: "shape", shape: "square", color: "blue" },
            { kind: "shape", shape: "triangle", color: "blue" },
            { kind: "shape", shape: "square", color: "blue" },
            { kind: "shape", shape: "triangle", color: "blue" },
            { kind: "blank" },
          ],
          options: [
            {
              id: "triangle",
              label: "Triangle",
              token: { kind: "shape", shape: "triangle", color: "blue" },
            },
            {
              id: "square",
              label: "Square",
              token: { kind: "shape", shape: "square", color: "blue" },
            },
            {
              id: "circle",
              label: "Circle",
              token: { kind: "shape", shape: "circle", color: "blue" },
            },
          ],
          answerId: "square",
          hints: [
            "Shapes take turns: triangle, square…",
            "Say it: triangle, square, triangle, square…",
          ],
          correct: "A square! Triangle and square take turns.",
          tryAgain: "Listen for the turn: triangle, then…",
          rule: "Shapes take turns: triangle, square.",
        },
        {
          id: "ra-3",
          type: "choice",
          prompt: "How many stars come next?",
          sequence: [
            { kind: "stars", count: 2 },
            { kind: "stars", count: 3 },
            { kind: "stars", count: 4 },
            { kind: "blank" },
          ],
          options: [
            { id: "4", label: "4 stars", token: { kind: "stars", count: 4 } },
            { id: "5", label: "5 stars", token: { kind: "stars", count: 5 } },
            { id: "6", label: "6 stars", token: { kind: "stars", count: 6 } },
          ],
          answerId: "5",
          hints: [
            "Count the stars in each group.",
            "Each group has one more star.",
          ],
          correct: "5 stars! Plus one each time.",
          tryAgain: "Count carefully. What’s growing?",
          rule: "Add one star each time.",
        },
        {
          id: "ra-4",
          type: "choice",
          prompt: "What comes next?",
          sequence: [
            { kind: "dot", color: "red" },
            { kind: "dot", color: "red" },
            { kind: "dot", color: "blue" },
            { kind: "dot", color: "red" },
            { kind: "dot", color: "red" },
            { kind: "blank" },
          ],
          options: [
            { id: "red", label: "Red", token: { kind: "dot", color: "red" } },
            { id: "blue", label: "Blue", token: { kind: "dot", color: "blue" } },
            { id: "yellow", label: "Yellow", token: { kind: "dot", color: "yellow" } },
          ],
          answerId: "blue",
          hints: [
            "Look for a chunk: two reds, then one blue.",
            "Red-red-blue… then again.",
          ],
          correct: "Blue! Two reds, then blue.",
          tryAgain: "Count the reds before the blue.",
          rule: "Two red, one blue.",
        },
        {
          id: "ra-close",
          type: "intro",
          emoji: "✨",
          title: "You found the rules!",
          body: [
            "Patterns either repeat or grow.",
            "You looked carefully. That’s brave brain work!",
          ],
          cta: "Next: Maths!",
        },
      ],
    },

    focus_b: {
      muscle: "maths",
      title: "Maths",
      kidTitle: "Tens & Ones",
      emoji: "🧮",
      estimatedMin: 7,
      items: [
        {
          id: "mb-intro",
          type: "intro",
          emoji: "🔟",
          title: "Tens & ones",
          body: [
            "10 loose ones make one ten bundle.",
            "Let’s build more teen numbers!",
          ],
          cta: "Show me!",
        },
        {
          id: "mb-model-ten",
          type: "model",
          variant: "bundle_ten",
          title: "One ten = 10 ones",
          body: ["Ten ones snap into one ten rod.", "We write that as 10."],
        },
        {
          id: "mb-model-16",
          type: "model",
          variant: "show_number",
          number: 16,
          title: "Model: 16",
          body: [
            "1 ten and 6 ones.",
            "The left digit is tens. The right digit is ones.",
          ],
        },
        {
          id: "mb-1",
          type: "build",
          mode: "build",
          prompt: "Build 13. How many tens? How many ones?",
          target: 13,
          hints: [
            "Start with one ten rod.",
            "13 means 1 ten and 3 ones.",
          ],
          correct: "1 ten and 3 ones — that’s 13!",
          tryAgain: "Left digit = tens, right = ones.",
        },
        {
          id: "mb-2",
          type: "build",
          mode: "build",
          prompt: "Build 17.",
          target: 17,
          hints: [
            "How many full tens in 17?",
            "1 ten and 7 ones.",
          ],
          correct: "1 ten and 7 ones — seventeen!",
          tryAgain: "Check the ones place — should be 7.",
        },
        {
          id: "mb-3",
          type: "choice",
          prompt: "1 ten + 8 ones → what number?",
          display: { kind: "tensOnes", tens: 1, ones: 8 },
          options: [
            { id: "18", text: "18" },
            { id: "81", text: "81" },
            { id: "108", text: "108" },
            { id: "9", text: "9" },
          ],
          answerId: "18",
          hints: [
            "Tens go on the left. Ones go on the right.",
            "1 ten means ten… then add the ones.",
          ],
          correct: "18 — 1 ten and 8 ones!",
          tryAgain: "Don’t swap the digits. Tens first, then ones.",
          rule: "Tens digit × 10 + ones.",
        },
        {
          id: "mb-4",
          type: "build",
          mode: "bundle",
          prompt: "You have 14 ones. Bundle them into tens!",
          target: 14,
          hints: [
            "Make one group of ten. What’s left?",
            "1 ten and 4 ones.",
          ],
          correct: "1 ten and 4 ones — 14!",
          tryAgain: "Keep bundling until you can’t make another ten.",
        },
        {
          id: "mb-close",
          type: "intro",
          emoji: "🎯",
          title: "Tens tell, ones tell",
          body: [
            "First digit = how many tens.",
            "Second digit = how many ones.",
          ],
          cta: "Spelling!",
        },
      ],
    },

    focus_c: spellingPhase("6-7"),

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
            "This one might feel tricky. That’s the point.",
            "One brave try first. No hint until you tap I tried.",
          ],
          sequence: [5, 10, 15],
          answer: 20,
          hints: [
            "What jumps each time? Look at 5 → 10 → 15.",
            "Each number is 5 bigger.",
            "5, 10, 15… next is?",
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
                { id: "shapes", label: "The shape pattern", emoji: "🔺" },
                { id: "waiting", label: "Waiting for a hint", emoji: "⏳" },
                { id: "saying", label: "Saying my try out loud", emoji: "🗣️" },
                { id: "nothing", label: "Nothing felt hard today", emoji: "😎" },
              ],
            },
            {
              id: "whatTried",
              prompt: "What did you try?",
              options: [
                { id: "pattern", label: "I spotted a pattern", emoji: "🧩" },
                { id: "counted", label: "I counted on", emoji: "🔢" },
                { id: "tens", label: "I looked at the tens", emoji: "🔟" },
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
