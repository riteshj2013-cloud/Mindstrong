/**
 * Level linter. Ceilings come from `ceilingFor` (words per bubble, panels per
 * page, words per page, plus sentence length and vocabulary).
 * Sample episodes may be shorter than the 10–16 page production target.
 */

import { ceilingFor } from "./levels";
import { pageWordCount, sentences, syllables, wordCount, words } from "./text";
import type { GlossaryEntry, Story, StoryPage } from "./types";

export interface LintIssue {
  severity: "error" | "warn";
  code: string;
  message: string;
  where?: string;
}

const ALLOWED = new Set(
  `a an the and or but if so to of in on at for with from into onto over under
   we you they he she it i me my your our their them is are was were be been being
   this that these those not can will just out up down as do did has have had
   what when where which who why how about after before again then than too very
   because together another around every really something nothing thought through
   friend friends school little people story stories water light night house place
   could would should there here came come said say says look looks looked see saw
   one two three four five six day days time times book books open opened
   like liked make made went go going get got back next first last new old
   big small good help helped`.split(/\s+/),
);

function isAdvanced(word: string, glossary: Set<string>): boolean {
  const key = word.toLowerCase();
  if (ALLOWED.has(key) || glossary.has(key)) return false;
  return syllables(key) >= 3 || key.length >= 10;
}

export function lintPages(
  pages: StoryPage[],
  ladderLevel: number,
  glossary: GlossaryEntry[] = [],
): LintIssue[] {
  const cap = ceilingFor(ladderLevel);
  const issues: LintIssue[] = [];
  const glossarySet = new Set(glossary.map((g) => g.word.toLowerCase()));
  const sentenceLengths: number[] = [];
  let advanced = 0;
  const seenAdvanced = new Set<string>();

  pages.forEach((page, pageIndex) => {
    const where = `page ${pageIndex + 1}`;
    if (page.panels.length > cap.maxPanelsPerPage) {
      issues.push({
        severity: "error",
        code: "panels-per-page",
        where,
        message: `${page.panels.length} panels exceeds ${cap.maxPanelsPerPage} for ${cap.sCode ?? `L${cap.ladder}`}.`,
      });
    }
    const pageWords = pageWordCount(page);
    if (pageWords > cap.maxWordsPerPage) {
      issues.push({
        severity: "error",
        code: "words-per-page",
        where,
        message: `${pageWords} words exceeds ${cap.maxWordsPerPage} on ${where}.`,
      });
    }
    page.panels.forEach((panel, panelIndex) => {
      const panelWhere = `${where} panel ${panelIndex + 1}`;
      const joined = panel.bubbles.map((b) => b.text).join(" ");
      const sentenceList = sentences(joined);
      if (sentenceList.length > cap.maxSentencesPerPanel) {
        issues.push({
          severity: "warn",
          code: "sentences-per-panel",
          where: panelWhere,
          message: `${sentenceList.length} sentences exceeds the ${cap.maxSentencesPerPanel}-sentence style guide.`,
        });
      }
      panel.bubbles.forEach((bubble) => {
        const count = wordCount(bubble.text);
        if (count > cap.maxWordsPerBubble) {
          issues.push({
            severity: "error",
            code: "words-per-bubble",
            where: `${panelWhere} ${bubble.id}`,
            message: `${count} words exceeds ${cap.maxWordsPerBubble}.`,
          });
        }
        for (const sentence of sentences(bubble.text)) {
          const len = wordCount(sentence);
          sentenceLengths.push(len);
          if (len > cap.maxWordsPerSentence) {
            issues.push({
              severity: "error",
              code: "sentence-length",
              where: `${panelWhere} ${bubble.id}`,
              message: `A sentence has ${len} words (max ${cap.maxWordsPerSentence}).`,
            });
          }
        }
        for (const word of words(bubble.text)) {
          const key = word.toLowerCase();
          if (isAdvanced(key, glossarySet) && !seenAdvanced.has(key)) {
            seenAdvanced.add(key);
            advanced += 1;
          }
        }
      });
    });
  });

  if (sentenceLengths.length > 0) {
    const avg = sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length;
    if (avg > cap.maxAvgSentence) {
      issues.push({
        severity: "error",
        code: "avg-sentence",
        message: `Average sentence length is ${avg.toFixed(1)} (max ${cap.maxAvgSentence}).`,
      });
    }
  }
  if (advanced > cap.maxAdvancedWords) {
    issues.push({
      severity: "error",
      code: "vocabulary",
      message: `${advanced} advanced words exceeds ${cap.maxAdvancedWords}. Add them to the glossary or simplify.`,
    });
  }
  return issues;
}

export function lintStory(story: Story): LintIssue[] {
  const issues = lintPages(story.pages, story.ladderLevel, story.glossary);
  if (story.comprehension.length < 2 || story.comprehension.length > 3) {
    issues.push({
      severity: "error",
      code: "comprehension-count",
      message: "A story needs 2 or 3 comprehension questions.",
    });
  }
  const src = story.source;
  if (!src?.license || !src.attribution || !src.origin || !src.verifiedBy || !src.verifiedOn) {
    issues.push({
      severity: "error",
      code: "license-record",
      message: "License, attribution, origin, and verification fields are required.",
    });
  }
  if (typeof src?.nc !== "boolean" || typeof src?.sa !== "boolean") {
    issues.push({
      severity: "error",
      code: "license-flags",
      message: "NC and SA flags must be recorded as true or false.",
    });
  }
  if (!story.sample && story.pages.length < 10) {
    issues.push({
      severity: "warn",
      code: "production-length",
      message: "Production episodes are 10–16 pages (up to 20 at S5). Mark shorts as samples or add pages.",
    });
  }
  if (!story.talkAbout?.trim()) {
    issues.push({
      severity: "error",
      code: "talk-about",
      message: "Each story needs one talk-about-it question for the parent summary.",
    });
  }
  return issues;
}

export function lintErrors(issues: LintIssue[]): LintIssue[] {
  return issues.filter((issue) => issue.severity === "error");
}
