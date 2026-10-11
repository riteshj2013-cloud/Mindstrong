import type { Bubble, Story, StoryPage } from "./types";

/** Split on whitespace and punctuation. Apostrophes stay inside the word. */
export function words(text: string): string[] {
  return text
    .replace(/[’]/g, "'")
    .split(/[^A-Za-z0-9']+/)
    .map((w) => w.replace(/^'+|'+$/g, ""))
    .filter(Boolean);
}

export function sentences(text: string): string[] {
  return text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function wordCount(text: string): number {
  return words(text).length;
}

export function bubbleText(bubbles: Bubble[]): string {
  return bubbles.map((b) => b.text).join(" ");
}

export function pageWordCount(page: StoryPage): number {
  return page.panels.reduce((n, panel) => n + wordCount(bubbleText(panel.bubbles)), 0);
}

export function storyWordCount(story: Pick<Story, "pages">): number {
  return story.pages.reduce((n, page) => n + pageWordCount(page), 0);
}

export function flatPanels(story: Pick<Story, "pages">) {
  return story.pages.flatMap((page, pageIndex) =>
    page.panels.map((panel, panelIndex) => ({ page, pageIndex, panel, panelIndex })),
  );
}

/** Rough English syllable count for the vocabulary linter. */
export function syllables(raw: string): number {
  const word = raw.toLowerCase().replace(/[^a-z]/g, "");
  if (!word) return 0;
  const groups = word.replace(/e$/, "").match(/[aeiouy]+/g);
  return Math.max(1, groups ? groups.length : 1);
}

export function normalizeWord(raw: string): string {
  return raw.toLowerCase().replace(/[^a-z']/g, "");
}
