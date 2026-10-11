import type { Bubble, BubbleKind, ComprehensionQ, GlossaryEntry, Story, StorySource } from "../types";
import { FABLE_STORIES } from "./stories-fables";
import { MLC_STORIES } from "./stories-mlc";
import { WOMBAT_STORIES } from "./stories-wombat";

const ART = {
  pipeline: "house-svg" as const,
  notes: "House-style SVG character kits and backgrounds. Keep every word in the text layer.",
};

function source(origin: StorySource["origin"], extra: Partial<StorySource> = {}): StorySource {
  return {
    origin,
    license: "Original sample text written for Mindstrong Reading Champ.",
    attribution: "Original Reading Champ sample.",
    nc: false,
    sa: false,
    verifiedBy: "MVP seed — not a legal review",
    verifiedOn: "2026-10-11",
    ...extra,
  };
}

function bubble(id: string, kind: BubbleKind, text: string, speaker?: string): Bubble {
  return { id, kind, text, speaker };
}

function q(
  prompt: string,
  options: [string, string, string][],
  answerId: string,
  type: ComprehensionQ["type"],
): ComprehensionQ {
  return {
    prompt,
    options: options.map(([id, label, emoji]) => ({ id, label, emoji })),
    answerId,
    type,
  };
}

function base(
  partial: Pick<
    Story,
    | "id"
    | "title"
    | "seriesId"
    | "episode"
    | "genre"
    | "subgenre"
    | "themes"
    | "ladderLevel"
    | "pages"
    | "glossary"
    | "comprehension"
    | "talkAbout"
    | "expectedMinutes"
    | "stretchEligible"
  > & { source?: StorySource },
): Story {
  return {
    ageFloor: 8,
    language: "en",
    status: "reviewed",
    sample: true,
    art: ART,
    source: partial.source ?? source("original"),
    ...partial,
  };
}

const g = (word: string, definition: string): GlossaryEntry => ({ word, definition });

const SAMPLE_STORIES: Story[] = [
base({
    id: "comet-quiet",
    title: "The Quiet Planet",
    seriesId: "captain-comet",
    episode: 1,
    genre: "fiction",
    subgenre: "mystery",
    themes: ["space", "teamwork"],
    ladderLevel: 6,
    expectedMinutes: 5,
    stretchEligible: true,
    glossary: [g("planet", "A world that travels around a star."), g("beacon", "A light that calls for help.")],
    talkAbout: "Pip felt scared and still chose to help. What helps you be brave?",
    comprehension: [
      q(
        "What did Comet and Pip find?",
        [["beacon", "A blinking beacon", "💡"], ["cake", "A cake", "🎂"], ["map", "A paper map", "🗺️"]],
        "beacon",
        "recall",
      ),
      q(
        "Why do they stay together?",
        [["help", "Someone may need help", "🤝"], ["race", "They want to race", "🏁"], ["sleep", "They want to nap", "😴"]],
        "help",
        "inference",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "space",
            characters: ["comet", "pip"],
            bubbles: [
              bubble("a1", "speech", "Pip, this planet is very quiet.", "Comet"),
              bubble("a2", "speech", "No lights. Did everyone leave?", "Pip"),
            ],
          },
          {
            id: "b",
            scene: "space",
            characters: ["comet", "pip"],
            bubbles: [
              bubble("b1", "caption", "A small beacon blinked by the rocks."),
              bubble("b2", "speech", "Someone may need help.", "Comet"),
            ],
          },
        ],
      },
      {
        id: "p2",
        panels: [
          {
            id: "c",
            scene: "space",
            characters: ["pip", "comet"],
            bubbles: [
              bubble("c1", "speech", "I feel a bit scared, but I trust you.", "Pip"),
              bubble("c2", "speech", "We go slow, and we stay together.", "Comet"),
            ],
          },
          {
            id: "d",
            scene: "space",
            characters: ["comet"],
            bubbles: [
              bubble("d1", "caption", "The beacon flashed one more time."),
              bubble("d2", "speech", "Next time we find who called.", "Comet"),
            ],
          },
        ],
      },
    ],
  }),
base({
    id: "comet-signal",
    title: "Signal in the Dark",
    seriesId: "captain-comet",
    episode: 2,
    genre: "fiction",
    subgenre: "mystery",
    themes: ["space", "teamwork"],
    ladderLevel: 8,
    expectedMinutes: 6,
    stretchEligible: true,
    glossary: [
      g("hatch", "A small door on a ship or a rock."),
      g("pinch", "In a pinch means you are stuck and need a plan."),
      g("budge", "To move, even a little."),
    ],
    talkAbout: "The crew was in a pinch. What is a fair way to share when something is running low?",
    comprehension: [
      q(
        "What did the idiom in a pinch mean here?",
        [["stuck", "They might get stuck", "🛟"], ["snack", "They wanted a snack", "🍪"], ["song", "They sang a song", "🎵"]],
        "stuck",
        "inference",
      ),
      q(
        "What answered Pip?",
        [["tap", "A tap from inside", "🚪"], ["bird", "A bird", "🐦"], ["rain", "Rain", "🌧️"]],
        "tap",
        "recall",
      ),
      q(
        "What did Comet share?",
        [["air", "The air tank", "🫧"], ["cake", "A cake", "🎂"], ["map", "A treasure map", "🗺️"]],
        "air",
        "recall",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "space",
            characters: ["comet", "pip"],
            bubbles: [bubble("a1", "narration", "Captain Comet followed the blink across the dark rocks.")],
          },
          {
            id: "b",
            scene: "space",
            characters: ["pip", "comet"],
            bubbles: [
              bubble("b1", "speech", "We are in a pinch if the air runs low.", "Pip"),
              bubble("b2", "speech", "Then we share the tank and keep looking.", "Comet"),
            ],
          },
          {
            id: "c",
            scene: "space",
            characters: ["comet"],
            bubbles: [bubble("c1", "narration", "A hatch sat shut under a drift of dust.")],
          },
        ],
      },
      {
        id: "p2",
        panels: [
          {
            id: "d",
            scene: "space",
            characters: ["pip", "comet"],
            bubbles: [
              bubble("d1", "narration", "Pip pulled, but the hatch did not budge."),
              bubble("d2", "speech", "Three taps. Then we wait.", "Comet"),
            ],
          },
          {
            id: "e",
            scene: "space",
            characters: ["pip"],
            bubbles: [
              bubble("e1", "speech", "I hear a tap back. Someone is inside!", "Pip"),
              bubble("e2", "narration", "The signal stopped, and the rocks went still."),
            ],
          },
        ],
      },
    ],
  }),
base({
    id: "timehop-train",
    title: "The First Passenger Train",
    seriesId: "time-hop",
    episode: 1,
    genre: "nonfiction",
    subgenre: "history",
    themes: ["history", "trains"],
    ladderLevel: 7,
    expectedMinutes: 5,
    stretchEligible: true,
    glossary: [
      g("passenger", "A person who rides, but does not drive."),
      g("carriages", "The cars that people sat in."),
      g("engine", "The machine that pulled the train."),
      g("families", "People who belong together, like parents and children."),
    ],
    talkAbout: "The train was exciting and a little scary. What new thing felt like both to you?",
    comprehension: [
      q(
        "What did Asha and Rafi visit?",
        [["train", "An early train", "🚂"], ["rocket", "A rocket", "🚀"], ["boat", "A boat", "⛵"]],
        "train",
        "recall",
      ),
      q(
        "How did people feel about it?",
        [["both", "Amazed and scared", "😮"], ["only", "Only sleepy", "😴"], ["none", "Nobody noticed", "🙈"]],
        "both",
        "inference",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "time",
            characters: ["asha", "rafi"],
            bubbles: [
              bubble("a1", "speech", "We hopped back to the first passenger train.", "Asha"),
              bubble("a2", "caption", "It was in England, long ago."),
            ],
          },
          {
            id: "b",
            scene: "train",
            characters: ["asha", "rafi"],
            bubbles: [
              bubble("b1", "speech", "People were amazed, but some were scared.", "Rafi"),
              bubble("b2", "caption", "The engine pulled open carriages."),
            ],
          },
          {
            id: "c",
            scene: "train",
            characters: ["asha"],
            bubbles: [bubble("c1", "speech", "A train can carry many people at once.", "Asha")],
          },
        ],
      },
      {
        id: "p2",
        panels: [
          {
            id: "d",
            scene: "train",
            characters: ["rafi"],
            bubbles: [
              bubble("d1", "speech", "This train changed how far families could go.", "Rafi"),
              bubble("d2", "caption", "Towns grew around the new tracks."),
            ],
          },
          {
            id: "e",
            scene: "time",
            characters: ["asha"],
            bubbles: [
              bubble("e1", "speech", "Speed was new, so rules kept people safe.", "Asha"),
              bubble("e2", "caption", "Asha wrote it all in her notebook."),
            ],
          },
        ],
      },
    ],
  }),
base({
    id: "timehop-letter",
    title: "Two Views of the Same Train",
    seriesId: "time-hop",
    episode: 2,
    genre: "nonfiction",
    subgenre: "history",
    themes: ["history", "fairness"],
    ladderLevel: 9,
    expectedMinutes: 6,
    stretchEligible: true,
    glossary: [
      g("porter", "A worker who helped people with bags."),
      g("history", "The story of what people did long ago."),
      g("different", "Not the same."),
      g("everyone", "All of the people."),
      g("timeline", "A simple line that shows what happened first and next."),
    ],
    talkAbout: "The guard and the porter felt differently. How can two people both be telling the truth?",
    comprehension: [
      q(
        "Who missed the quiet road?",
        [["guard", "The station guard", "💂"], ["mouse", "The mouse", "🐭"], ["wombat", "Wombat", "🐾"]],
        "guard",
        "recall",
      ),
      q(
        "Why was the porter glad?",
        [["sister", "He could visit his sister", "💌"], ["race", "He won a race", "🏁"], ["gold", "He found gold", "💰"]],
        "sister",
        "inference",
      ),
      q(
        "What idea are Asha and Rafi holding?",
        [["both", "Both views can matter", "🤝"], ["one", "Only the loudest view", "📣"], ["none", "Stories do not matter", "🚫"]],
        "both",
        "inference",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "time",
            characters: ["asha", "rafi"],
            bubbles: [bubble("a1", "narration", "Asha and Rafi found a letter from a station guard.")],
          },
          {
            id: "b",
            scene: "train",
            characters: ["asha", "rafi"],
            bubbles: [
              bubble("b1", "thought", "The new train is loud, and I miss the quiet road.", "Guard"),
              bubble("b2", "speech", "He sounds upset. The change feels unfair to him.", "Asha"),
            ],
          },
          {
            id: "c",
            scene: "train",
            characters: ["rafi"],
            bubbles: [
              bubble("c1", "narration", "Rafi read a second note from a young porter."),
              bubble("c2", "speech", "The train lets me visit my sister in another town.", "Porter"),
            ],
          },
        ],
      },
      {
        id: "p2",
        panels: [
          {
            id: "d",
            scene: "timeline",
            characters: ["asha", "rafi"],
            bubbles: [
              bubble("d1", "narration", "Two people saw one change in two different ways."),
              bubble("d2", "speech", "Fair does not mean everyone feels glad at first.", "Asha"),
            ],
          },
          {
            id: "e",
            scene: "timeline",
            characters: ["rafi"],
            bubbles: [
              bubble("e1", "speech", "We can hold both stories. Each one is true for them.", "Rafi"),
              bubble("e2", "caption", "The timeline showed the guard, then the porter."),
            ],
          },
          {
            id: "f",
            scene: "time",
            characters: ["asha", "rafi"],
            bubbles: [
              bubble("f1", "speech", "History is bigger when we listen to both.", "Asha"),
              bubble("f2", "narration", "They hopped home with the letter held tight."),
            ],
          },
        ],
      },
    ],
  }),
];

export const STORIES: Story[] = [
  ...MLC_STORIES,
  ...WOMBAT_STORIES,
  ...FABLE_STORIES,
  ...SAMPLE_STORIES,
];
