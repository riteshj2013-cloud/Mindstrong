import type { Bubble, BubbleKind, ComprehensionQ, GlossaryEntry, Story, StorySource } from "../types";

const ART = {
  pipeline: "placeholder-svg" as const,
  notes: "Placeholder scene kit. Swap for layered house-style art later. Keep every word in the text layer.",
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

export const STORIES: Story[] = [
  base({
    id: "mlc-glow",
    title: "The Glowing Book",
    seriesId: "midnight-library",
    episode: 1,
    genre: "fiction",
    subgenre: "adventure",
    themes: ["books", "friendship"],
    ladderLevel: 5,
    expectedMinutes: 4,
    stretchEligible: false,
    glossary: [g("glow", "A soft light."), g("brave", "Ready to try, even if you feel a wobble.")],
    talkAbout: "Would you open a glowing book if a friend stayed with you?",
    comprehension: [
      q("What was glowing?", [["book", "The book", "📘"], ["window", "The window", "🪟"], ["lamp", "A lamp", "💡"]], "book", "recall"),
      q(
        "How do the friends feel?",
        [["brave", "Brave together", "🤝"], ["mad", "Mad", "😠"], ["sleepy", "Sleepy", "😴"]],
        "brave",
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
              bubble("a1", "speech", "Look, Dev. That book glows.", "Mira"),
              bubble("a2", "speech", "It is after school.", "Dev"),
            ],
          },
          {
            id: "b",
            scene: "library",
            characters: ["mira", "dev"],
            bubbles: [
              bubble("b1", "speech", "The glow is blue and soft.", "Mira"),
              bubble("b2", "caption", "They stepped closer."),
            ],
          },
        ],
      },
      {
        id: "p2",
        panels: [
          {
            id: "c",
            scene: "library",
            characters: ["mira", "dev"],
            bubbles: [
              bubble("c1", "speech", "I feel brave because you are here.", "Dev"),
              bubble("c2", "speech", "We can open it, but we stay close.", "Mira"),
            ],
          },
          {
            id: "d",
            scene: "library",
            characters: ["mira"],
            bubbles: [
              bubble("d1", "caption", "The book showed a tiny door."),
              bubble("d2", "speech", "A door. Should we peek?", "Mira"),
            ],
          },
        ],
      },
    ],
  }),
  base({
    id: "mlc-door",
    title: "The Door in the Shelf",
    seriesId: "midnight-library",
    episode: 2,
    genre: "fiction",
    subgenre: "adventure",
    themes: ["books", "friendship"],
    ladderLevel: 6,
    expectedMinutes: 5,
    stretchEligible: true,
    glossary: [
      g("nervous", "A fluttery feeling before something new."),
      g("fable", "A very old story that teaches a kind idea."),
      g("lonely", "Feeling alone and wishing for a friend."),
    ],
    talkAbout: "Dev felt nervous and then glad. When have you felt both?",
    comprehension: [
      q(
        "Where did the tiny door lead?",
        [["garden", "A quiet garden", "🌿"], ["sea", "The sea", "🌊"], ["shop", "A shop", "🏪"]],
        "garden",
        "recall",
      ),
      q(
        "How did Dev feel at first?",
        [["nervous", "A bit nervous", "😟"], ["angry", "Angry", "😠"], ["bored", "Bored", "😐"]],
        "nervous",
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
              bubble("a1", "caption", "The tiny door led into a quiet garden."),
              bubble("a2", "speech", "I think the book is glad we came.", "Mira"),
            ],
          },
          {
            id: "b",
            scene: "library",
            characters: ["dev", "mira"],
            bubbles: [
              bubble("b1", "speech", "I was nervous, but your smile helped.", "Dev"),
              bubble("b2", "speech", "We can look, but we will go back.", "Mira"),
            ],
          },
        ],
      },
      {
        id: "p2",
        panels: [
          {
            id: "c",
            scene: "savanna",
            characters: ["mira", "dev"],
            bubbles: [
              bubble("c1", "caption", "A lion slept under a big tree."),
              bubble("c2", "speech", "He looks strong, but he looks lonely too.", "Dev"),
            ],
          },
          {
            id: "d",
            scene: "library",
            characters: ["mira", "dev"],
            bubbles: [
              bubble("d1", "speech", "This is an old fable. We can read it next.", "Mira"),
              bubble("d2", "caption", "The door faded, and they were back."),
            ],
          },
        ],
      },
    ],
  }),
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
    id: "wombat-sky",
    title: "Why Is the Sky Blue?",
    seriesId: "wonder-wombat",
    episode: 1,
    genre: "nonfiction",
    subgenre: "science",
    themes: ["science", "sky"],
    ladderLevel: 5,
    expectedMinutes: 4,
    stretchEligible: false,
    glossary: [
      g("sunlight", "Light that comes from the sun."),
      g("scatters", "Spreads out in many directions."),
    ],
    talkAbout: "Look outside together. What color is the sky right now, and what else can you notice?",
    comprehension: [
      q(
        "What color light scatters to make the sky look blue?",
        [["blue", "Blue light", "🔵"], ["mud", "Mud", "🟤"], ["ink", "Ink", "🖤"]],
        "blue",
        "recall",
      ),
      q(
        "When can red light reach you more?",
        [["sunset", "At sunset", "🌅"], ["lunch", "At lunch", "🥪"], ["class", "In class", "✏️"]],
        "sunset",
        "recall",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "burrow",
            characters: ["wombat"],
            bubbles: [
              bubble("a1", "speech", "Why is the sky blue?", "Wombat"),
              bubble("a2", "caption", "Wombat looked up on a clear day."),
            ],
          },
          {
            id: "b",
            scene: "burrow",
            characters: ["wombat"],
            bubbles: [
              bubble("b1", "speech", "Sunlight has many colors.", "Wombat"),
              bubble("b2", "caption", "Blue light scatters in the air."),
            ],
          },
        ],
      },
      {
        id: "p2",
        panels: [
          {
            id: "c",
            scene: "meadow",
            characters: ["wombat"],
            bubbles: [
              bubble("c1", "speech", "The blue light bounces to your eyes.", "Wombat"),
              bubble("c2", "caption", "That is why the sky looks blue."),
            ],
          },
          {
            id: "d",
            scene: "burrow",
            characters: ["wombat"],
            bubbles: [
              bubble("d1", "speech", "At sunset, red light can reach you too.", "Wombat"),
              bubble("d2", "caption", "Wombat smiled at the blue sky."),
            ],
          },
        ],
      },
    ],
  }),
  base({
    id: "wombat-storm",
    title: "Why Do We See Lightning First?",
    seriesId: "wonder-wombat",
    episode: 2,
    genre: "nonfiction",
    subgenre: "science",
    themes: ["science", "weather"],
    ladderLevel: 7,
    expectedMinutes: 5,
    stretchEligible: true,
    glossary: [
      g("lightning", "A giant spark in a storm cloud."),
      g("thunder", "The sound that the spark makes."),
      g("rumbles", "A long, low rolling sound."),
    ],
    talkAbout: "What is your family's plan when you hear thunder?",
    comprehension: [
      q(
        "What is lightning?",
        [["spark", "A huge spark", "⚡"], ["bird", "A bird", "🐦"], ["drum", "A drum", "🥁"]],
        "spark",
        "recall",
      ),
      q(
        "Why do you see the flash first?",
        [["fast", "Light is faster than sound", "💡"], ["eyes", "Eyes are louder", "👀"], ["wind", "Wind hides sound", "💨"]],
        "fast",
        "inference",
      ),
      q(
        "Where should you go in a storm?",
        [["inside", "Inside a strong building", "🏠"], ["tree", "Under a tall tree", "🌳"], ["pool", "Into a pool", "🏊"]],
        "inside",
        "recall",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "burrow",
            characters: ["wombat"],
            bubbles: [
              bubble("a1", "speech", "Lightning is a huge spark in a storm cloud.", "Wombat"),
              bubble("a2", "caption", "The spark is very hot."),
            ],
          },
          {
            id: "b",
            scene: "burrow",
            characters: ["wombat"],
            bubbles: [
              bubble("b1", "speech", "Thunder is the sound that spark makes.", "Wombat"),
              bubble("b2", "caption", "Sound travels slower than light."),
            ],
          },
          {
            id: "c",
            scene: "burrow",
            characters: ["wombat"],
            bubbles: [bubble("c1", "speech", "You see the flash first because light is fast.", "Wombat")],
          },
        ],
      },
      {
        id: "p2",
        panels: [
          {
            id: "d",
            scene: "burrow",
            characters: ["wombat"],
            bubbles: [
              bubble("d1", "speech", "If you hear thunder, the storm is close.", "Wombat"),
              bubble("d2", "caption", "Go inside a strong building."),
            ],
          },
          {
            id: "e",
            scene: "burrow",
            characters: ["wombat"],
            bubbles: [
              bubble("e1", "speech", "Stay away from tall trees in a storm.", "Wombat"),
              bubble("e2", "caption", "Wombat waits until the rumbles stop."),
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
  base({
    id: "aesop-lion-mouse",
    title: "The Lion and the Mouse",
    seriesId: "aesop-fables",
    episode: 1,
    genre: "fiction",
    subgenre: "fable",
    themes: ["kindness", "animals"],
    ladderLevel: 6,
    expectedMinutes: 5,
    stretchEligible: true,
    glossary: [g("gnaw", "To chew through something bit by bit."), g("net", "Ropes tied to trap an animal.")],
    talkAbout: "The mouse was small and still helped. Who is a helper in your life?",
    source: source("adapted", {
      license: "Public domain fable. This comic script is an original adaptation, not a copy of a modern translation.",
      attribution: "Adapted from the public-domain fable “The Lion and the Mouse,” attributed to Aesop.",
      sourceUrl: "https://www.gutenberg.org/ebooks/21",
      notes:
        "Plot only. Wording is original. Do not brand this episode with the Project Gutenberg name. NC false, SA false. Not a legal review.",
    }),
    comprehension: [
      q(
        "Who woke the lion?",
        [["mouse", "The mouse", "🐭"], ["bird", "A bird", "🐦"], ["boy", "A boy", "👦"]],
        "mouse",
        "recall",
      ),
      q(
        "How did the mouse help later?",
        [["ropes", "Chewed the ropes", "🪢"], ["sang", "Sang a song", "🎵"], ["hid", "Hid the lion", "🙈"]],
        "ropes",
        "inference",
      ),
    ],
    pages: [
      {
        id: "p1",
        panels: [
          {
            id: "a",
            scene: "savanna",
            characters: ["lion", "mouse"],
            bubbles: [
              bubble("a1", "caption", "A lion slept in the warm sun."),
              bubble("a2", "speech", "Oh! I ran right over his paw.", "Mouse"),
            ],
          },
          {
            id: "b",
            scene: "savanna",
            characters: ["lion", "mouse"],
            bubbles: [
              bubble("b1", "speech", "A tiny mouse woke me. I could eat you.", "Lion"),
              bubble("b2", "speech", "Please let me go. I may help you one day.", "Mouse"),
            ],
          },
        ],
      },
      {
        id: "p2",
        panels: [
          {
            id: "c",
            scene: "savanna",
            characters: ["lion", "mouse"],
            bubbles: [
              bubble("c1", "speech", "You are small, but I will let you go.", "Lion"),
              bubble("c2", "caption", "Later, a rope net held the lion."),
            ],
          },
          {
            id: "d",
            scene: "savanna",
            characters: ["lion", "mouse"],
            bubbles: [
              bubble("d1", "speech", "I can gnaw the ropes. Then you will be free.", "Mouse"),
              bubble("d2", "caption", "The lion was free, and he thanked his small friend."),
            ],
          },
        ],
      },
    ],
  }),
];
