import type { PlacementStrip } from "../types";

function q(
  prompt: string,
  options: [string, string, string][],
  answerId: string,
  type: "recall" | "inference",
) {
  return {
    prompt,
    options: options.map(([id, label, emoji]) => ({ id, label, emoji })),
    answerId,
    type,
  };
}

export const PLACEMENT_STRIPS: PlacementStrip[] = [
  {
    id: "place-f-s2",
    genre: "fiction",
    ladderLevel: 6,
    title: "The Last Cookie",
    glossary: [{ word: "sorry", definition: "Feeling bad about what you did." }],
    questions: [
      q(
        "Who is the cookie for?",
        [["mira", "Mira", "🍪"], ["lion", "The lion", "🦁"], ["none", "Nobody", "🚫"]],
        "mira",
        "recall",
      ),
      q(
        "How does Dev feel?",
        [["kind", "Sorry, then kind", "💛"], ["angry", "Angry", "😠"], ["asleep", "Asleep", "😴"]],
        "kind",
        "inference",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "library",
            characters: ["dev", "mira"],
            bubbles: [{ id: "a1", kind: "speech", speaker: "Mira", text: "Dev hid the last cookie, but he looked sorry." }],
          },
          {
            id: "b",
            scene: "library",
            characters: ["dev"],
            bubbles: [{ id: "b1", kind: "speech", speaker: "Dev", text: "I saved it for you. I hope you are glad." }],
          },
        ],
      },
    ],
  },
  {
    id: "place-n-s2",
    genre: "nonfiction",
    ladderLevel: 6,
    title: "Why Bees Visit Flowers",
    glossary: [{ word: "pollen", definition: "The dusty grains flowers use to make seeds." }],
    questions: [
      q(
        "What do bees sip?",
        [["sweet", "A sweet drink", "🍯"], ["rain", "Rain", "🌧️"], ["soup", "Soup", "🥣"]],
        "sweet",
        "recall",
      ),
      q(
        "What do they carry?",
        [["pollen", "Pollen", "🌼"], ["rocks", "Rocks", "🪨"], ["books", "Books", "📚"]],
        "pollen",
        "recall",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "meadow",
            characters: ["wombat"],
            bubbles: [{ id: "a1", kind: "speech", speaker: "Wombat", text: "Bees visit flowers to sip a sweet drink." }],
          },
          {
            id: "b",
            scene: "meadow",
            characters: ["wombat"],
            bubbles: [{ id: "b1", kind: "caption", text: "They carry pollen from bloom to bloom." }],
          },
        ],
      },
    ],
  },
  {
    id: "place-f-s3",
    genre: "fiction",
    ladderLevel: 7,
    title: "Two Books",
    glossary: [{ word: "worried", definition: "Thinking something might go wrong." }],
    questions: [
      q(
        "What did they decide?",
        [["turns", "To take turns", "🔁"], ["stop", "To stop reading", "🚫"], ["hide", "To hide the books", "🙈"]],
        "turns",
        "inference",
      ),
      q(
        "How did Dev feel at first?",
        [["worried", "Worried", "😟"], ["hungry", "Hungry", "🍎"], ["bored", "Bored", "😐"]],
        "worried",
        "inference",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "library",
            characters: ["mira", "dev"],
            bubbles: [
              { id: "a1", kind: "narration", text: "Mira wanted the glowing book, but Dev wanted the map book." },
              { id: "a2", kind: "speech", speaker: "Mira", text: "We can read yours first, and mine after." },
            ],
          },
          {
            id: "b",
            scene: "library",
            characters: ["dev"],
            bubbles: [{ id: "b1", kind: "speech", speaker: "Dev", text: "That feels fair. I was worried you would mind." }],
          },
        ],
      },
    ],
  },
  {
    id: "place-n-s3",
    genre: "nonfiction",
    ladderLevel: 7,
    title: "What a Seed Needs",
    glossary: [{ word: "root", definition: "The part of a plant that grows down and drinks water." }],
    questions: [
      q(
        "What do leaves catch?",
        [["light", "Light", "☀️"], ["snow", "Snow", "❄️"], ["toys", "Toys", "🧸"]],
        "light",
        "recall",
      ),
      q(
        "What happens with no light?",
        [["food", "Leaves cannot make food", "🍃"], ["run", "The root runs away", "🏃"], ["sing", "The pot sings", "🎵"]],
        "food",
        "inference",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "meadow",
            characters: ["wombat"],
            bubbles: [{ id: "a1", kind: "speech", speaker: "Wombat", text: "A seed needs water, light, and a place to grow." }],
          },
          {
            id: "b",
            scene: "meadow",
            characters: ["wombat"],
            bubbles: [{ id: "b1", kind: "caption", text: "The root takes in water. The leaves catch light." }],
          },
          {
            id: "c",
            scene: "meadow",
            characters: ["wombat"],
            bubbles: [{ id: "c1", kind: "speech", speaker: "Wombat", text: "Without light, the leaves cannot make food." }],
          },
        ],
      },
    ],
  },
  {
    id: "place-f-s1",
    genre: "fiction",
    ladderLevel: 5,
    title: "Soft Cat",
    glossary: [{ word: "soft", definition: "Nice to touch. Not hard." }],
    questions: [
      q(
        "Where is the cat?",
        [["mat", "On the mat", "🐱"], ["sea", "In the sea", "🌊"], ["tree", "Up a tree", "🌳"]],
        "mat",
        "recall",
      ),
      q(
        "How is the cat?",
        [["soft", "Soft and warm", "🤗"], ["sharp", "Sharp and cold", "🧊"], ["loud", "Very loud", "📢"]],
        "soft",
        "recall",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "library",
            characters: ["mira"],
            bubbles: [{ id: "a1", kind: "speech", speaker: "Mira", text: "The cat sat on the mat." }],
          },
          {
            id: "b",
            scene: "library",
            characters: ["dev"],
            bubbles: [{ id: "b1", kind: "speech", speaker: "Dev", text: "The cat is soft and warm." }],
          },
        ],
      },
    ],
  },
  {
    id: "place-n-s1",
    genre: "nonfiction",
    ladderLevel: 5,
    title: "Fish",
    glossary: [{ word: "fins", definition: "The flat parts a fish uses to swim." }],
    questions: [
      q(
        "Where do fish live?",
        [["water", "In water", "💧"], ["nest", "In a nest", "🪺"], ["book", "In a book", "📘"]],
        "water",
        "recall",
      ),
      q(
        "What helps them swim?",
        [["fins", "Fins", "🐟"], ["boots", "Boots", "👢"], ["hats", "Hats", "🎩"]],
        "fins",
        "recall",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "meadow",
            characters: ["wombat"],
            bubbles: [{ id: "a1", kind: "speech", speaker: "Wombat", text: "Fish live in water." }],
          },
          {
            id: "b",
            scene: "meadow",
            characters: ["wombat"],
            bubbles: [{ id: "b1", kind: "caption", text: "They use fins to swim." }],
          },
        ],
      },
    ],
  },
];

export function stripByGenreLevel(genre: PlacementStrip["genre"], level: PlacementStrip["ladderLevel"]) {
  return PLACEMENT_STRIPS.find((strip) => strip.genre === genre && strip.ladderLevel === level);
}
