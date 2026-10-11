import { normalizeWord, storyWordCount, words } from "../text";
import type { GlossaryEntry, Story, StoryMeta } from "../types";
import { PLACEMENT_STRIPS, stripByGenreLevel } from "./placement-strips";
import { GENRE_BADGES, SERIES } from "./series";
import { STORIES } from "./stories";

export { GENRE_BADGES, PLACEMENT_STRIPS, SERIES, STORIES, stripByGenreLevel };

const COMMON: Record<string, string> = {
  book: "Pages with a story or facts.",
  glow: "A soft light.",
  door: "A way in or out.",
  friend: "Someone you like and trust.",
  sky: "The blue or grey space above you.",
  light: "What lets you see.",
  train: "A line of cars that rolls on tracks.",
  lion: "A big wild cat.",
  mouse: "A very small animal.",
  help: "To make something easier for someone.",
  story: "Something that happens, told in words.",
  blue: "The color of a clear daytime sky.",
  water: "The clear liquid you drink.",
  sound: "What you hear.",
  storm: "Strong wind, rain, and sometimes thunder.",
  flash: "A sudden bright light.",
  tree: "A tall plant with a trunk.",
  letter: "A written note to someone.",
  change: "When something becomes different.",
  fair: "When people are treated with care.",
  both: "The two of them, not just one.",
  small: "Little in size.",
  free: "Able to go. Not trapped.",
  planet: "A world that travels around a star.",
  quiet: "With very little sound.",
  scared: "Feeling fear.",
  brave: "Ready to try, even with a wobble.",
  kind: "Gentle and helpful.",
};

export function allStories(): Story[] {
  return STORIES;
}

export function reviewedStories(): Story[] {
  return STORIES.filter((story) => story.status === "reviewed");
}

export function toMeta(story: Story): StoryMeta {
  return {
    id: story.id,
    title: story.title,
    seriesId: story.seriesId,
    episode: story.episode,
    genre: story.genre,
    subgenre: story.subgenre,
    themes: story.themes,
    ladderLevel: story.ladderLevel,
    status: story.status,
    stretchEligible: story.stretchEligible,
    expectedMinutes: story.expectedMinutes,
    talkAbout: story.talkAbout,
    wordCount: storyWordCount(story),
    sample: story.sample,
  };
}

export function catalog(): StoryMeta[] {
  return reviewedStories().map(toMeta);
}

export function storyById(id: string): Story | undefined {
  return STORIES.find((story) => story.id === id);
}

export function metaById(id: string): StoryMeta | undefined {
  const story = storyById(id);
  return story ? toMeta(story) : undefined;
}

export function seriesById(id: string) {
  return SERIES.find((series) => series.id === id);
}

export function storiesInSeries(seriesId: string): Story[] {
  return STORIES.filter((story) => story.seriesId === seriesId).sort((a, b) => a.episode - b.episode);
}

export function nextEpisode(story: Story): Story | undefined {
  return storiesInSeries(story.seriesId).find((item) => item.episode === story.episode + 1);
}

export function defineWord(word: string, glossary: GlossaryEntry[] = []): string | null {
  const key = normalizeWord(word);
  if (!key) return null;
  const fromStory = glossary.find((entry) => entry.word.toLowerCase() === key);
  if (fromStory) return fromStory.definition;
  for (const story of STORIES) {
    const hit = story.glossary.find((entry) => entry.word.toLowerCase() === key);
    if (hit) return hit.definition;
  }
  for (const strip of PLACEMENT_STRIPS) {
    const hit = strip.glossary.find((entry) => entry.word.toLowerCase() === key);
    if (hit) return hit.definition;
  }
  return COMMON[key] ?? null;
}

export function storyHasWord(story: Story, word: string): boolean {
  const key = normalizeWord(word);
  return story.pages.some((page) =>
    page.panels.some((panel) => panel.bubbles.some((bubble) => words(bubble.text).some((w) => normalizeWord(w) === key))),
  );
}
