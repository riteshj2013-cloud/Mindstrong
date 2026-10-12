# Reading Champ

Reading Champ is the comic-reading section of Mindstrong. It is not a separate app. Home shows it beside Daily practice and Olympiad prep. Ages 8–10 are the first content band (grades 3–5). The data model still has the full 24-level ladder for ages about 4–12.

It reuses the Mindstrong child profile (nickname and age) and the grown-up gate. Reading progress is stored on this device under `mindstrong.v1.reading`. Daily-practice streaks are untouched. Reading Champ does not show a streak counter.

## Run and test

From the repository root:

```bash
npm install
npm run dev
npm test
```

Open the app, create a nickname if you have not already, then choose **Reading Champ**.

## What the sample includes

- Story Scout placement. Two short strips at S2 (fiction and non-fiction), then S3 or S1. A strip passes only when both taps are right. The child is placed one level below the highest pass. Non-fiction starts one level lower when the library has room. Parents can override on the Reading summary.
- Page reader. A comic page shows every panel on that page at once, fitted to the screen width. Swipe or tap the edges to turn the page. Non-fiction opens as a book page of paragraphs. Pinch, Zoom page, or tap a picture to enlarge it. One-panel view is an optional toggle on S1–S2, or when the dyslexia font is on.
- Hear it reads the whole page, highlighting each word. Indian English is used when that voice exists.
- Tap a word for a short meaning and a Word Collection.
- Text size and the OpenDyslexic font (SIL Open Font License, see `app/fonts/OpenDyslexic-OFL.txt`).
- End screen: “That is enough for today”, then an optional next-episode button. Nothing autoplays.
- Two or three picture checks. They are not shown as a grade.
- S1–S5 fiction and non-fiction levels, and the promotion / quiet demotion / Challenge rules in `lib/reading-champ/adaptive.ts`.
- Pick 1 of 3: familiar series, a new topic, and either non-fiction or a Challenge (every 4th story, or when the child taps Harder).
- Interest scores on device (topics, genres, series), with decay and a new-topic slot so one genre does not take over. Parents can turn personalization off.
- Cover shelf, forgiving reading-days calendar with up to two rest days, child-set weekly goal, light genre badges.
- Parent weekly summary: days, stories, genres, plain-language level, one talk-about-it question per story, an interests line, reminder settings, a daily time hint, export, and delete.
- 30 reviewed stories. The Midnight Library Club (10 fiction episodes) and Wonder Wombat's Why Files (10 non-fiction episodes) run 10–12 pages across S1–S5. Six more are original retellings of public-domain tales: Aesop (*The Tortoise and the Hare*, *The Lion and the Mouse*, *The Ant and the Grasshopper*), the Kacchapa Jataka, and two Panchatantra tales (*The Monkey and the Crocodile*, *The Blue Jackal*). Each records source, license, and attribution. Captain Comet and Time-Hop Reporters are still short samples. The Project Gutenberg name is not used as a brand.
- The Jataka retelling lands the tortoise safely in a pond. The ant retelling shares a meal. Both notes are on the story source.

Art is a house-style SVG kit (`components/reading-champ/PanelArt.tsx`): reusable characters and backgrounds, thick outlines, no words in the pictures. Character names live in `lib/reading-champ/art.ts`.

## Levels

| Code | Ladder | Words / bubble | Panels / page | Words / page |
|------|--------|----------------|---------------|--------------|
| S1 | 5 | 12 | 4 | 56 |
| S2 | 6 | 16 | 4 | 64 |
| S3 | 7 | 20 | 4 | 70 |
| S4 | 8 | 25 | 5 | 90 |
| S5 | 9 | 30 | 5 | 110 |

Sentence-length and vocabulary ceilings live in `lib/reading-champ/levels.ts`. Rungs outside 5–9 have provisional ceilings only. A production episode is at least 3 full pages, and each of those pages holds 3–5 panels. S1 and S2 word caps are high enough for that full page to stay readable on a phone. Short samples are marked `sample`.

Promote when there are at least 60 minutes at the level, finish credit of 2 from the last 3 stories, comprehension of at least 80%, and at most 3 lookups per 100 words. A finished Challenge counts as 2 finish credit. A missed Challenge is ignored. Demotion is quiet: the child sees “easier picks”, never “down”. At most one change every 7 days.

## Add a story

1. Add a `makeStory` call in `stories-mlc.ts`, `stories-wombat.ts`, `stories-fables.ts`, or `stories.ts`. Each `# page` block is one panel beat (`scene character,character`, then `Name: sentence`, `caption: …`, or `narration: …`). The reader groups those beats into full comic pages of 3–5 panels.
2. Use only character ids from `lib/reading-champ/art.ts` and scene ids from `SceneId`.
3. Set `status: "reviewed"`. Drafts never appear on the shelf. Production episodes are 10–16 pages (up to 20 at S5) and are not marked `sample`.
4. Record `source` (origin, license, attribution, NC, SA, who checked it, and when). Adapted works also need a source URL. Write new wording. Do not copy a translation.
5. Give the story 2 or 3 comprehension taps and glossary words that actually appear in the bubbles.
6. Run `npm test`. `lintStory` checks the ceilings, and the content test checks pages, glossary, scenes, and characters.

The interest ranker only receives stories you pass in. It cannot invent ids. `llmRankerHook` in `lib/reading-champ/interests.ts` is an optional later plug-in. The shelf does not call it.

## Story requests

`STORY_REQUEST_ENABLED` in `lib/reading-champ/story-request.ts` is **false**. There is no request box and no generated episode. A future request would wait for a person to review it before it could enter the library.

## Left out

- A larger catalogue beyond these 30 stories, Hindi, and bands below S1 / above S5 as real comics.
- Painted or layered production art. The current pictures are the open SVG house style.
- Verifiable DPDP consent. The parent page says this is a stub.
- A real push service. Reminders are an on-device opt-in with quiet hours and a one-a-day cap.
- Tablet full-page view, subscriptions, chat, ads, collectibles, and teacher mode.
- An admin importer UI. The story objects are the package format for now.
- Calling an LLM. The hook is typed and tested, and unused by the shelf.
