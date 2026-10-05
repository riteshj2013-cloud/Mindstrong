import type { ContentPack } from "../../types";

/** Early explorers — simple patterns, tens/ones intro, tiny hard try. */
export const mondayPack67: ContentPack = {
  id: "mon-6-7-v1",
  ageBand: "6-7",
  weekday: "mon",
  title: "Monday · Colors & Counting",
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
          body: ["Before the hard bit, let’s warm up.", "Ready for a tiny win?"],
          cta: "Let’s go!",
        },
        {
          id: "wu-tiny",
          type: "choice",
          prompt: "What number fits?",
          sequence: [
            { kind: "number", value: 1 },
            { kind: "number", value: 2 },
            { kind: "number", value: 3 },
            { kind: "blank" },
            { kind: "number", value: 5 },
          ],
          options: [
            { id: "3", text: "3" },
            { id: "4", text: "4" },
            { id: "6", text: "6" },
            { id: "7", text: "7" },
          ],
          answerId: "4",
          hints: [
            "Count: 1, 2, 3… what comes next?",
            "Each number is just one bigger.",
          ],
          correct: "Yes — 4! Counting by ones. That warm-up counts!",
          tryAgain: "Close! Count slowly: one, two, three…",
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
            { kind: "shape", shape: "circle", color: "green" },
            { kind: "shape", shape: "square", color: "green" },
            { kind: "shape", shape: "circle", color: "green" },
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
              id: "square",
              label: "Square",
              token: { kind: "shape", shape: "square", color: "green" },
            },
            {
              id: "triangle",
              label: "Triangle",
              token: { kind: "shape", shape: "triangle", color: "green" },
            },
          ],
          answerId: "square",
          hints: [
            "Find the chunk that comes back: circle, circle, square…",
            "Clap it: circle-circle-square, circle-circle-__",
          ],
          correct: "A square! Two circles, then a square.",
          tryAgain: "Listen for the chunk: two circles, then…",
          rule: "Chunk: circle, circle, square.",
        },
        {
          id: "ra-3",
          type: "choice",
          prompt: "How many stars come next?",
          sequence: [
            { kind: "stars", count: 1 },
            { kind: "stars", count: 2 },
            { kind: "stars", count: 3 },
            { kind: "blank" },
          ],
          options: [
            { id: "3", label: "3 stars", token: { kind: "stars", count: 3 } },
            { id: "4", label: "4 stars", token: { kind: "stars", count: 4 } },
            { id: "5", label: "5 stars", token: { kind: "stars", count: 5 } },
          ],
          answerId: "4",
          hints: [
            "Count the stars in each group.",
            "Each group has one more star.",
          ],
          correct: "4 stars! Plus one each time.",
          tryAgain: "Count carefully. What’s growing?",
          rule: "Add one star each time.",
        },
        {
          id: "ra-4",
          type: "choice",
          prompt: "What comes next?",
          sequence: [
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "green" },
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "yellow" },
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
            "Look for a chunk: three yellows, then one green.",
            "Yellow-yellow-yellow-green… then again.",
          ],
          correct: "Green! Three yellows, then green.",
          tryAgain: "Count the yellows before the green.",
          rule: "Three yellow, one green.",
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
            "Let’s build teen numbers!",
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
          id: "mb-model-12",
          type: "model",
          variant: "show_number",
          number: 12,
          title: "Model: 12",
          body: [
            "1 ten and 2 ones.",
            "The left digit is tens. The right digit is ones.",
          ],
        },
        {
          id: "mb-1",
          type: "build",
          mode: "build",
          prompt: "Build 11. How many tens? How many ones?",
          target: 11,
          hints: [
            "Start with one ten rod.",
            "11 means 1 ten and 1 one.",
          ],
          correct: "1 ten and 1 one — that’s 11!",
          tryAgain: "Left digit = tens, right = ones.",
        },
        {
          id: "mb-2",
          type: "build",
          mode: "build",
          prompt: "Build 15.",
          target: 15,
          hints: [
            "How many full tens in 15?",
            "1 ten and 5 ones.",
          ],
          correct: "1 ten and 5 ones — fifteen!",
          tryAgain: "Check the ones place — should be 5.",
        },
        {
          id: "mb-3",
          type: "choice",
          prompt: "1 ten + 4 ones → what number?",
          display: { kind: "tensOnes", tens: 1, ones: 4 },
          options: [
            { id: "14", text: "14" },
            { id: "41", text: "41" },
            { id: "104", text: "104" },
            { id: "5", text: "5" },
          ],
          answerId: "14",
          hints: [
            "Tens go on the left. Ones go on the right.",
            "1 ten means ten… then add the ones.",
          ],
          correct: "14 — 1 ten and 4 ones!",
          tryAgain: "Don’t swap the digits. Tens first, then ones.",
          rule: "Tens digit × 10 + ones.",
        },
        {
          id: "mb-4",
          type: "build",
          mode: "bundle",
          prompt: "You have 13 ones. Bundle them into tens!",
          target: 13,
          hints: [
            "Make one group of ten. What’s left?",
            "1 ten and 3 ones.",
          ],
          correct: "1 ten and 3 ones — 13!",
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
          cta: "Hard try!",
        },
      ],
    },

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
          sequence: [10, 20, 30],
          answer: 40,
          hints: [
            "What jumps each time? Look at 10 → 20 → 30.",
            "Each number is 10 bigger.",
            "10, 20, 30… next is?",
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
                { id: "counting", label: "The counting jump", emoji: "🦘" },
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
