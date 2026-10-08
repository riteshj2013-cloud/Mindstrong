import type { ContentPack } from "../../types";
import { spellingPhase } from "../spelling";

/** Early explorers — size beats, ABB chunks, fresh teen builds. */
export const wednesdayPack67: ContentPack = {
  id: "wed-6-7-v1",
  ageBand: "6-7",
  weekday: "wed",
  title: "Wednesday · Beats & Bundles",
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
          body: ["Wednesday warm-up time!", "Ready for a tiny win?"],
          cta: "Let’s go!",
        },
        {
          id: "wu-tiny",
          type: "choice",
          prompt: "What number fits?",
          sequence: [
            { kind: "number", value: 2 },
            { kind: "number", value: 4 },
            { kind: "number", value: 6 },
            { kind: "blank" },
            { kind: "number", value: 10 },
          ],
          options: [
            { id: "7", text: "7" },
            { id: "8", text: "8" },
            { id: "9", text: "9" },
            { id: "12", text: "12" },
          ],
          answerId: "8",
          hints: [
            "Count: 2, 4, 6… what comes next?",
            "Each number is two bigger.",
          ],
          correct: "Yes — 8! Counting by twos. That warm-up counts!",
          tryAgain: "Close! Jump by twos: two, four, six…",
          rule: "Counting by 2s.",
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
            { kind: "dot", color: "red" },
            { kind: "dot", color: "blue" },
            { kind: "dot", color: "red" },
            { kind: "dot", color: "blue" },
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
            "Look at the colors. What keeps switching?",
            "Say it: red, blue, red, blue…",
          ],
          correct: "Blue! Red, blue, red, blue…",
          tryAgain: "Hmm, look at the colors again.",
          rule: "Colors take turns: red, blue.",
        },
        {
          id: "ra-2",
          type: "choice",
          prompt: "What comes next?",
          sequence: [
            { kind: "shape", shape: "circle", color: "green" },
            { kind: "shape", shape: "triangle", color: "green" },
            { kind: "shape", shape: "circle", color: "green" },
            { kind: "shape", shape: "triangle", color: "green" },
            { kind: "shape", shape: "circle", color: "green" },
            { kind: "blank" },
          ],
          options: [
            {
              id: "circle",
              label: "Circle",
              token: { kind: "shape", shape: "circle", color: "green" },
            },
            {
              id: "triangle",
              label: "Triangle",
              token: { kind: "shape", shape: "triangle", color: "green" },
            },
            {
              id: "square",
              label: "Square",
              token: { kind: "shape", shape: "square", color: "green" },
            },
          ],
          answerId: "triangle",
          hints: [
            "Shapes take turns: circle, triangle…",
            "Say it: circle, triangle, circle, triangle…",
          ],
          correct: "A triangle! Circle and triangle take turns.",
          tryAgain: "Listen for the turn: circle, then…",
          rule: "Shapes take turns: circle, triangle.",
        },
        {
          id: "ra-3",
          type: "choice",
          prompt: "How many stars come next?",
          sequence: [
            { kind: "stars", count: 1 },
            { kind: "stars", count: 3 },
            { kind: "stars", count: 5 },
            { kind: "blank" },
          ],
          options: [
            { id: "6", label: "6 stars", token: { kind: "stars", count: 6 } },
            { id: "7", label: "7 stars", token: { kind: "stars", count: 7 } },
            { id: "8", label: "8 stars", token: { kind: "stars", count: 8 } },
          ],
          answerId: "7",
          hints: [
            "Count the stars in each group.",
            "Each group has two more stars.",
          ],
          correct: "7 stars! Plus two each time.",
          tryAgain: "Count carefully. What’s growing by twos?",
          rule: "Add two stars each time.",
        },
        {
          id: "ra-4",
          type: "choice",
          prompt: "What comes next?",
          sequence: [
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "purple" },
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "yellow" },
            { kind: "blank" },
          ],
          options: [
            { id: "yellow", label: "Yellow", token: { kind: "dot", color: "yellow" } },
            { id: "purple", label: "Purple", token: { kind: "dot", color: "purple" } },
            { id: "green", label: "Green", token: { kind: "dot", color: "green" } },
          ],
          answerId: "purple",
          hints: [
            "Look for a chunk: two yellows, then one purple.",
            "Yellow-yellow-purple… then again.",
          ],
          correct: "Purple! Two yellows, then purple.",
          tryAgain: "Count the yellows before the purple.",
          rule: "Two yellow, one purple.",
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
          id: "mb-model-19",
          type: "model",
          variant: "show_number",
          number: 19,
          title: "Model: 19",
          body: [
            "1 ten and 9 ones.",
            "The left digit is tens. The right digit is ones.",
          ],
        },
        {
          id: "mb-1",
          type: "build",
          mode: "build",
          prompt: "Build 14. How many tens? How many ones?",
          target: 14,
          hints: [
            "Start with one ten rod.",
            "14 means 1 ten and 4 ones.",
          ],
          correct: "1 ten and 4 ones — that’s 14!",
          tryAgain: "Left digit = tens, right = ones.",
        },
        {
          id: "mb-2",
          type: "build",
          mode: "build",
          prompt: "Build 18.",
          target: 18,
          hints: [
            "How many full tens in 18?",
            "1 ten and 8 ones.",
          ],
          correct: "1 ten and 8 ones — eighteen!",
          tryAgain: "Check the ones place — should be 8.",
        },
        {
          id: "mb-3",
          type: "choice",
          prompt: "1 ten + 5 ones → what number?",
          display: { kind: "tensOnes", tens: 1, ones: 5 },
          options: [
            { id: "15", text: "15" },
            { id: "51", text: "51" },
            { id: "105", text: "105" },
            { id: "6", text: "6" },
          ],
          answerId: "15",
          hints: [
            "Tens go on the left. Ones go on the right.",
            "1 ten means ten… then add the ones.",
          ],
          correct: "15 — 1 ten and 5 ones!",
          tryAgain: "Don’t swap the digits. Tens first, then ones.",
          rule: "Tens digit × 10 + ones.",
        },
        {
          id: "mb-4",
          type: "build",
          mode: "bundle",
          prompt: "You have 16 ones. Bundle them into tens!",
          target: 16,
          hints: [
            "Make one group of ten. What’s left?",
            "1 ten and 6 ones.",
          ],
          correct: "1 ten and 6 ones — 16!",
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
          sequence: [3, 6, 9],
          answer: 12,
          hints: [
            "What jumps each time? Look at 3 → 6 → 9.",
            "Each number is 3 bigger.",
            "3, 6, 9… next is?",
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
                { id: "chunks", label: "The two-then-one chunk", emoji: "🟡" },
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
