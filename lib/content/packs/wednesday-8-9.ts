import type { ContentPack } from "../../types";
import { spellingPhase } from "../spelling";

/** Ages 8–9 — size/color turns, letter chunks, twenties place value. */
export const wednesdayPack89: ContentPack = {
  id: "wed-8-9-v1",
  ageBand: "8-9",
  weekday: "wed",
  title: "Wednesday · Turns & Twenties",
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
          body: [
            "Before the hard bit, let’s warm up.",
            "Ready for a tiny win?",
          ],
          cta: "Let’s go!",
        },
        {
          id: "wu-tiny",
          type: "choice",
          prompt: "What number fits?",
          sequence: [
            { kind: "number", value: 4 },
            { kind: "number", value: 8 },
            { kind: "number", value: 12 },
            { kind: "blank" },
            { kind: "number", value: 20 },
          ],
          options: [
            { id: "14", text: "14" },
            { id: "16", text: "16" },
            { id: "18", text: "18" },
            { id: "15", text: "15" },
          ],
          answerId: "16",
          hints: [
            "What jumps each time? Look at 4 → 8 → 12.",
            "Each number is 4 bigger than the one before.",
          ],
          correct: "Yes — you spotted the pattern. That warm-up counts!",
          tryAgain: "Close! What jumps each time? You’ve got another try.",
          rule: "Counting by 4s.",
        },
        {
          id: "wu-ritual",
          type: "ritual",
          title: "Today’s rule",
          body: [
            "One brave try first.",
            "Hints wait until you ask.",
          ],
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
            { kind: "dot", color: "blue" },
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "blue" },
            { kind: "dot", color: "yellow" },
            { kind: "dot", color: "blue" },
            { kind: "blank" },
          ],
          options: [
            { id: "blue", label: "Blue", token: { kind: "dot", color: "blue" } },
            { id: "yellow", label: "Yellow", token: { kind: "dot", color: "yellow" } },
            { id: "red", label: "Red", token: { kind: "dot", color: "red" } },
          ],
          answerId: "yellow",
          hints: [
            "Cover the blank. Look only at what you can see. What is repeating?",
            "Point to each one and say the color out loud. Listen for the beat.",
          ],
          correct: "Yellow! Blue, yellow, blue, yellow…",
          tryAgain: "Hmm, look at the colors again. What keeps switching?",
          rule: "Colors take turns: blue, yellow.",
        },
        {
          id: "ra-2",
          type: "choice",
          prompt: "What comes next?",
          sequence: [
            { kind: "shape", shape: "square", color: "red" },
            { kind: "shape", shape: "triangle", color: "red" },
            { kind: "shape", shape: "square", color: "red" },
            { kind: "shape", shape: "triangle", color: "red" },
            { kind: "shape", shape: "square", color: "red" },
            { kind: "blank" },
          ],
          options: [
            {
              id: "square",
              label: "Square",
              token: { kind: "shape", shape: "square", color: "red" },
            },
            {
              id: "triangle",
              label: "Triangle",
              token: { kind: "shape", shape: "triangle", color: "red" },
            },
            {
              id: "circle",
              label: "Circle",
              token: { kind: "shape", shape: "circle", color: "red" },
            },
          ],
          answerId: "triangle",
          hints: [
            "Cover the blank. Look only at what you can see. What is repeating?",
            "Say each shape out loud: square… triangle… square…",
          ],
          correct: "A triangle! Shapes take turns.",
          tryAgain: "Look at the shapes — square, triangle, square, triangle…",
          rule: "Shapes take turns: square, triangle.",
        },
        {
          id: "ra-3",
          type: "choice",
          prompt: "How many stars come next?",
          sequence: [
            { kind: "stars", count: 3 },
            { kind: "stars", count: 5 },
            { kind: "stars", count: 7 },
            { kind: "blank" },
          ],
          options: [
            { id: "8", label: "8 stars", token: { kind: "stars", count: 8 } },
            { id: "9", label: "9 stars", token: { kind: "stars", count: 9 } },
            { id: "10", label: "10 stars", token: { kind: "stars", count: 10 } },
          ],
          answerId: "9",
          hints: [
            "Cover the blank. Count the stars in each group.",
            "Each group has two more stars than the one before.",
          ],
          correct: "9 stars! Plus two each time.",
          tryAgain: "Count carefully. What’s growing by twos?",
          rule: "Add two stars each time.",
        },
        {
          id: "ra-4",
          type: "choice",
          prompt: "What letter comes next?",
          sequence: [
            { kind: "letter", char: "A" },
            { kind: "letter", char: "A" },
            { kind: "letter", char: "B" },
            { kind: "letter", char: "A" },
            { kind: "letter", char: "A" },
            { kind: "letter", char: "B" },
            { kind: "letter", char: "A" },
            { kind: "letter", char: "A" },
            { kind: "blank" },
          ],
          options: [
            { id: "A", label: "A", token: { kind: "letter", char: "A" } },
            { id: "B", label: "B", token: { kind: "letter", char: "B" } },
            { id: "C", label: "C", token: { kind: "letter", char: "C" } },
          ],
          answerId: "B",
          hints: [
            "Cover the blank. Look for a chunk that comes back: A A B…",
            "Clap it: A-A-B, A-A-B, A-A-__",
          ],
          correct: "B! Two A’s then one B.",
          tryAgain: "Listen for the chunk that repeats. Two A’s, then…",
          rule: "Chunk: A A B, A A B.",
        },
        {
          id: "ra-5",
          type: "choice",
          prompt: "What comes next?",
          sequence: [
            { kind: "dot", color: "red", size: "sm" },
            { kind: "dot", color: "blue", size: "lg" },
            { kind: "dot", color: "red", size: "sm" },
            { kind: "dot", color: "blue", size: "lg" },
            { kind: "dot", color: "red", size: "sm" },
            { kind: "blank" },
          ],
          options: [
            {
              id: "sm-red",
              label: "Small red",
              token: { kind: "dot", color: "red", size: "sm" },
            },
            {
              id: "lg-blue",
              label: "Big blue",
              token: { kind: "dot", color: "blue", size: "lg" },
            },
            {
              id: "lg-red",
              label: "Big red",
              token: { kind: "dot", color: "red", size: "lg" },
            },
            {
              id: "sm-blue",
              label: "Small blue",
              token: { kind: "dot", color: "blue", size: "sm" },
            },
          ],
          answerId: "lg-blue",
          hints: [
            "Cover the blank. Two things change: size AND color.",
            "Say both parts: small-red… big-blue… small-red…",
          ],
          correct: "Big blue! Small-red, big-blue.",
          tryAgain: "Check both size and color — they both take turns.",
          rule: "Small red, then big blue.",
        },
        {
          id: "ra-close",
          type: "intro",
          emoji: "✨",
          title: "You found the rules!",
          body: [
            "Patterns either repeat or grow.",
            "Say it in your words: “I look for what repeats / what grows.”",
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
            "1 ten = 10 ones. Let’s build numbers!",
          ],
          cta: "Show me!",
        },
        {
          id: "mb-model-ten",
          type: "model",
          variant: "bundle_ten",
          title: "One ten = 10 ones",
          body: [
            "Ten ones snap into one ten rod.",
            "We write that as 10.",
          ],
        },
        {
          id: "mb-model-27",
          type: "model",
          variant: "show_number",
          number: 27,
          title: "Model: 27",
          body: [
            "2 tens and 7 ones.",
            "The left digit is tens. The right digit is ones.",
          ],
        },
        {
          id: "mb-1",
          type: "build",
          mode: "build",
          prompt: "Build 26. How many tens? How many ones?",
          target: 26,
          hints: [
            "Count your tens rods first. Then count leftover ones.",
            "The left digit (2) is how many full tens you should have.",
          ],
          correct: "2 tens and 6 ones — that’s 26!",
          tryAgain: "Check your bundles. Left digit = tens, right = ones.",
        },
        {
          id: "mb-2",
          type: "build",
          mode: "build",
          prompt: "Build 50. How many tens and ones?",
          target: 50,
          hints: [
            "Count bundles first. What’s left over?",
            "50 means 5 tens and 0 ones — no leftovers.",
          ],
          correct: "5 tens and 0 ones — fifty!",
          tryAgain: "Watch the ones place. Is it zero, or something else?",
        },
        {
          id: "mb-3",
          type: "choice",
          prompt: "4 tens + 1 ones → what number?",
          display: { kind: "tensOnes", tens: 4, ones: 1 },
          options: [
            { id: "41", text: "41" },
            { id: "14", text: "14" },
            { id: "401", text: "401" },
            { id: "45", text: "45" },
          ],
          answerId: "41",
          hints: [
            "Tens go on the left. Ones go on the right.",
            "4 tens means forty… then add the ones.",
          ],
          correct: "41 — 4 tens and 1 one!",
          tryAgain: "Don’t swap the digits. Tens first, then ones.",
          rule: "Tens digit × 10 + ones.",
        },
        {
          id: "mb-4",
          type: "build",
          mode: "bundle",
          prompt: "You have 35 ones. Bundle them into tens!",
          target: 35,
          hints: [
            "Make groups of ten. What’s left over?",
            "Left digit = how many full tens. Check your bundles.",
          ],
          correct: "3 tens and 5 ones — 35!",
          tryAgain: "Keep bundling until you can’t make another ten.",
        },
        {
          id: "mb-5",
          type: "choice",
          prompt: "Which pile is bigger?",
          display: {
            kind: "compare",
            left: { tens: 2, ones: 5 },
            right: { tens: 1, ones: 15 },
          },
          options: [
            { id: "left", text: "Left (2 tens + 5)" },
            { id: "right", text: "Right (1 ten + 15)" },
            { id: "same", text: "Same!" },
          ],
          answerId: "same",
          hints: [
            "Build both. Count total ones in each pile.",
            "1 ten + 15 ones = 10 + 15. What does that equal?",
          ],
          correct: "Same! Both make 25. You can regroup ones into tens.",
          tryAgain: "Trade 10 ones for 1 ten on the right pile. Look again.",
          rule: "Same total, different grouping.",
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

    focus_c: spellingPhase("8-9"),

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
          sequence: [28, 38, 48],
          answer: 58,
          hints: [
            "Adding 1… or adding 10 each time?",
            "Look at the tens digit — what’s changing?",
            "28, 38, 48… tens go 2, 3, 4… so next?",
          ],
          messages: {
            correctNoHint:
              "You tried first — and you got it. High five for the try AND the answer!",
            correctAfterHint:
              "Tried, then hint, then finished — smart bravery.",
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
                { id: "jump10", label: "The big jump (by 10s)", emoji: "🦘" },
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
                { id: "tens", label: "I looked at the tens place", emoji: "🔟" },
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
