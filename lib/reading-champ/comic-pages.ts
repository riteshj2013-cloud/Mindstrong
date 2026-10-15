/**
 * Group panel beats into a printed comic page: 3–5 panels when the level allows,
 * without crossing the words-per-page ceiling.
 */

import { ceilingFor } from "./levels";
import { bubbleText, wordCount } from "./text";
import type { StoryPage } from "./types";

export function packComicPages(pages: StoryPage[], ladderLevel: number): StoryPage[] {
  const cap = ceilingFor(ladderLevel);
  const panels = pages.flatMap((page) => page.panels);
  if (panels.length === 0) return [];
  const words = panels.map((panel) => wordCount(bubbleText(panel.bubbles)));
  const target = Math.max(3, cap.maxPanelsPerPage);
  let pageCount = Math.max(1, Math.ceil(panels.length / target));

  const sizesFor = (count: number) => {
    const base = Math.floor(panels.length / count);
    const extra = panels.length % count;
    return Array.from({ length: count }, (_, index) => base + (index < extra ? 1 : 0));
  };

  const fits = (count: number) => {
    const sizes = sizesFor(count);
    let start = 0;
    return sizes.every((size) => {
      const slice = words.slice(start, start + size);
      start += size;
      const sum = slice.reduce((total, count) => total + count, 0);
      return size <= cap.maxPanelsPerPage && sum <= cap.maxWordsPerPage;
    });
  };

  while (!fits(pageCount) && pageCount < panels.length) pageCount += 1;

  let start = 0;
  return sizesFor(pageCount).map((size, index) => {
    const slice = panels.slice(start, start + size);
    start += size;
    return { id: `p${index + 1}`, panels: slice };
  });
}
