import type { ContentPack } from "../../types";
import { spellingPhase } from "../spelling";

/** Thursday pack — Pairs & Place. Fresh set for ages 8-9. */
export const thursdayPack89: ContentPack = {
  id: "thu-8-9-v1",
  ageBand: "8-9",
  weekday: "thu",
  title: "Thursday · Pairs & Place",
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
            { kind: "number", value: 6 },
            { kind: "number", value: 12 },
            { kind: "number", value: 18 },
            { kind: "blank" },
            { kind: "number", value: 30 },
          ],
          options: [
            { id: "22", text: "22" },
            { id: "24", text: "24" },
            { id: "26", text: "26" },
            { id: "20", text: "20" },
          ],
          answerId: "24",
          hints: [
            "What jumps each time? Look at 6 → 12 → 18.",
            "Each number is 6 bigger than the one before.",
          ],
          correct: "Yes — you spotted the pattern. That warm-up counts!",
          tryAgain: "Close! What jumps each time? You’ve got another try.",
          rule: "Counting by 6s.",
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
            { kind: "dot", color: "green" },
            { kind: "dot", color: "purple" },
            { kind: "dot", color: "green" },
            { kind: "dot", color: "purple" },
            { kind: "dot", color: "green" },
            { kind: "blank" },
          ],
          options: [
            { id: "green", label: "Green", token: { kind: "dot", color: "green" } },
            { id: "purple", label: "Purple", token: { kind: "dot", color: "purple" } },
            { id: "yellow", label: "Yellow", token: { kind: "dot", color: "yellow" } },
          ],
          answerId: "purple",
          hints: [
            "Cover the blank. Look only at what you can see. What is repeating?",
            "Point to each one and say the color out loud. Listen for the beat.",
          ],
          correct: "Purple! Green, purple, green, purple…",
          tryAgain: "Hmm, look at the colors again. What keeps switching?",
          rule: "Colors take turns: green, purple.",
        },
        {
          id: "ra-2",
          type: "choice",
          prompt: "What comes next?",
          sequence: [
            { kind: "shape", shape: "triangle", color: "yellow" },
            { kind: "shape", shape: "circle", color: "yellow" },
            { kind: "shape", shape: "triangle", color: "yellow" },
            { kind: "shape", shape: "circle", color: "yellow" },
            { kind: "shape", shape: "triangle", color: "yellow" },
            { kind: "blank" },
          ],
          options: [
            {
              id: "triangle",
              label: "Triangle",
              token: { kind: "shape", shape: "triangle", color: "yellow" },
            },
            {
              id: "circle",
              label: "Circle",
              token: { kind: "shape", shape: "circle", color: "yellow" },
            },
            {
              id: "square",
              label: "Square",
              token: { kind: "shape", shape: "square", color: "yellow" },
            },
          ],
          answerId: "circle",
          hints: [
            "Cover the blank. Look only at what you can see. What is repeating?",
            "Say each shape out loud: triangle… circle… triangle…",
          ],
          correct: "A circle! Shapes take turns.",
          tryAgain: "Look at the shapes — triangle, circle, triangle, circle…",
          rule: "Shapes take turns: triangle, circle.",
        },
        {
          id: "ra-3",
          type: "choice",
          prompt: "How many stars come next?",
          sequence: [
            { kind: "stars", count: 2 },
            { kind: "stars", count: 4 },
            { kind: "stars", count: 6 },
            { kind: "blank" },
          ],
          options: [
            { id: "7", label: "7 stars", token: { kind: "stars", count: 7 } },
            { id: "8", label: "8 stars", token: { kind: "stars", count: 8 } },
            { id: "10", label: "10 stars", token: { kind: "stars", count: 10 } },
          ],
          answerId: "8",
          hints: [
            "Cover the blank. Count the stars in each group.",
            "Each group has two more stars than the one before.",
          ],
          correct: "8 stars! Plus two each time.",
          tryAgain: "Count carefully. What’s growing by twos?",
          rule: "Add two stars each time.",
        },
        {
          id: "ra-4",
          type: "choice",
          prompt: "What letter comes next?",
          sequence: [
            { kind: "letter", char: "B" },
            { kind: "letter", char: "C" },
            { kind: "letter", char: "C" },
            { kind: "letter", char: "B" },
            { kind: "letter", char: "C" },
            { kind: "letter", char: "C" },
            { kind: "letter", char: "B" },
            { kind: "letter", char: "C" },
            { kind: "blank" },
          ],
          options: [
            { id: "B", label: "B", token: { kind: "letter", char: "B" } },
            { id: "C", label: "C", token: { kind: "letter", char: "C" } },
            { id: "D", label: "D", token: { kind: "letter", char: "D" } },
          ],
          answerId: "C",
          hints: [
            "Cover the blank. Look for a chunk that comes back: B C C…",
            "Clap it: B-C-C, B-C-C, B-C-__",
          ],
          correct: "C! One B then two C’s.",
          tryAgain: "Listen for the chunk that repeats. One B, then…",
          rule: "Chunk: B C C, B C C.",
        },
        {
          id: "ra-5",
          type: "choice",
          prompt: "What comes next?",
          sequence: [
            { kind: "dot", color: "yellow", size: "lg" },
            { kind: "dot", color: "green", size: "sm" },
            { kind: "dot", color: "yellow", size: "lg" },
            { kind: "dot", color: "green", size: "sm" },
            { kind: "dot", color: "yellow", size: "lg" },
            { kind: "blank" },
          ],
          options: [
            {
              id: "lg-yellow",
              label: "Big yellow",
              token: { kind: "dot", color: "yellow", size: "lg" },
            },
            {
              id: "sm-green",
              label: "Small green",
              token: { kind: "dot", color: "green", size: "sm" },
            },
            {
              id: "sm-yellow",
              label: "Small yellow",
              token: { kind: "dot", color: "yellow", size: "sm" },
            },
            {
              id: "lg-green",
              label: "Big green",
              token: { kind: "dot", color: "green", size: "lg" },
            },
          ],
          answerId: "sm-green",
          hints: [
            "Cover the blank. Two things change: size AND color.",
            "Say both parts: big-yellow… small-green… big-yellow…",
          ],
          correct: "Small green! Big-yellow, small-green.",
          tryAgain: "Check both size and color — they both take turns.",
          rule: "Big yellow, then small green.",
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
          id: "mb-model-34",
          type: "model",
          variant: "show_number",
          number: 46,
          title: "Model: 46",
          body: [
            "4 tens and 6 ones.",
            "The left digit is tens. The right digit is ones.",
          ],
        },
        {
          id: "mb-1",
          type: "build",
          mode: "build",
          prompt: "Build 31. How many tens? How many ones?",
          target: 31,
          hints: [
            "Count your tens rods first. Then count leftover ones.",
            "The left digit (2) is how many full tens you should have.",
          ],
          correct: "2 tens and 2 ones — that’s 31!",
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
          correct: "4 tens and 0 ones — fifty!",
          tryAgain: "Watch the ones place. Is it zero, or something else?",
        },
        {
          id: "mb-3",
          type: "choice",
          prompt: "4 tens + 2 ones → what number?",
          display: { kind: "tensOnes", tens: 4, ones: 2 },
          options: [
            { id: "42", text: "42" },
            { id: "24", text: "24" },
            { id: "402", text: "402" },
            { id: "46", text: "46" },
          ],
          answerId: "42",
          hints: [
            "Tens go on the left. Ones go on the right.",
            "3 tens means thirty… then add the ones.",
          ],
          correct: "42 — 4 tens and 2 ones!",
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
            left: { tens: 4, ones: 1 },
            right: { tens: 3, ones: 11 },
          },
          options: [
            { id: "left", text: "Left (4 tens + 1)" },
            { id: "right", text: "Right (3 tens + 11)" },
            { id: "same", text: "Same!" },
          ],
          answerId: "same",
          hints: [
            "Build both. Count total ones in each pile.",
            "2 tens + 12 ones = 20 + 12. What does that equal?",
          ],
          correct: "Same! Both make 41. You can regroup ones into tens.",
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
