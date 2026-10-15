/**
 * Estimated reading time for a child aged 8–10 reading a comic at the story's level.
 *
 * These constants are the knobs. Change them here, then run `npm test`.
 * The linter fails any story under `minimumMinutes`.
 *
 * Words per minute sit a little under typical oral-fluency midpoints for
 * grades 3–5 (Hasbrouck & Tindal). A comic splits attention between the
 * words and the picture, so the rate is not a plain-prose speed.
 * Panel time is for looking at the art. Lookup time assumes about 2 taps
 * per 100 words, under the "more than 3 per 100 feels hard" rule.
 * Comprehension taps are timed at the end.
 *
 * minutes =
 *   words / wordsPerMinute
 *   + panels * secondsPerPanel / 60
 *   + (words / 100) * lookupsPerHundredWords * secondsPerLookup / 60
 *   + questions * secondsPerQuestion / 60
 */

import { bubbleText, wordCount } from "./text";
import type { Story, StoryPage } from "./types";

export const READING_TIME = {
  minimumMinutes: 10,
  /** Ladder level → careful comic words per minute. S1–S5 are levels 5–9. */
  wordsPerMinute: {
    5: 65,
    6: 80,
    7: 95,
    8: 110,
    9: 125,
  } as Record<number, number>,
  /** Seconds to look at one panel. */
  secondsPerPanel: {
    5: 10,
    6: 9,
    7: 8,
    8: 7,
    9: 6,
  } as Record<number, number>,
  lookupsPerHundredWords: 2,
  secondsPerLookup: 12,
  secondsPerQuestion: 22,
};

export function readingPace(ladderLevel: number): { wordsPerMinute: number; secondsPerPanel: number } {
  const level = Math.min(9, Math.max(5, Math.round(ladderLevel)));
  return {
    wordsPerMinute: READING_TIME.wordsPerMinute[level] ?? 95,
    secondsPerPanel: READING_TIME.secondsPerPanel[level] ?? 8,
  };
}

export function countStoryWordsAndPanels(pages: StoryPage[]): { words: number; panels: number } {
  let words = 0;
  let panels = 0;
  for (const page of pages) {
    panels += page.panels.length;
    for (const panel of page.panels) words += wordCount(bubbleText(panel.bubbles));
  }
  return { words, panels };
}

export function estimateReadingSeconds(input: {
  pages: StoryPage[];
  ladderLevel: number;
  questionCount: number;
}): number {
  const pace = readingPace(input.ladderLevel);
  const { words, panels } = countStoryWordsAndPanels(input.pages);
  const read = (words / pace.wordsPerMinute) * 60;
  const look = panels * pace.secondsPerPanel;
  const lookups = (words / 100) * READING_TIME.lookupsPerHundredWords * READING_TIME.secondsPerLookup;
  const questions = input.questionCount * READING_TIME.secondsPerQuestion;
  return read + look + lookups + questions;
}

export function estimateReadingMinutes(story: Pick<Story, "pages" | "ladderLevel" | "comprehension">): number {
  return (
    estimateReadingSeconds({
      pages: story.pages,
      ladderLevel: story.ladderLevel,
      questionCount: story.comprehension.length,
    }) / 60
  );
}

/** Whole minutes for cards and the story page. */
export function displayMinutes(minutes: number): number {
  return Math.max(1, Math.round(minutes));
}
