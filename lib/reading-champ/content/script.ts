/**
 * Compact comic script → pages.
 * A `# page` line starts a page. A blank line starts the next panel.
 * The first line of a panel is `scene character,character`.
 * Later lines are `Speaker: sentence`, `caption: …`, `narration: …`, or `thought: …`.
 */

import { packComicPages } from "../comic-pages";
import type { Bubble, BubbleKind, ComprehensionQ, GlossaryEntry, SceneId, Story, StoryPage, StorySource } from "../types";

const KINDS = new Set<BubbleKind>(["caption", "narration", "thought"]);

export const HOUSE_ART = {
  pipeline: "house-svg" as const,
  notes: "House-style SVG character kits and backgrounds. Every word stays in the text layer.",
};

export function originalSource(extra: Partial<StorySource> = {}): StorySource {
  return {
    origin: "original",
    license: "Original text written for Mindstrong Reading Champ.",
    attribution: "Original Reading Champ story.",
    nc: false,
    sa: false,
    verifiedBy: "Reading Champ content pass — not a legal review",
    verifiedOn: "2026-10-11",
    ...extra,
  };
}

export function adaptedSource(attribution: string, sourceUrl: string, notes: string): StorySource {
  return {
    origin: "adapted",
    license: "Original retelling of a public-domain tale. This wording is original to Reading Champ and is not copied from the source edition.",
    attribution,
    sourceUrl,
    nc: false,
    sa: false,
    verifiedBy: "Reading Champ content pass — not a legal review",
    verifiedOn: "2026-10-11",
    notes,
  };
}

export function parseScript(script: string): StoryPage[] {
  const chunks = script
    .trim()
    .split(/\n(?=# page\b)/)
    .map((chunk) => chunk.replace(/^# page[^\n]*\n?/, "").trim())
    .filter(Boolean);

  return chunks.map((chunk, pageIndex) => {
    const panels = chunk
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .filter(Boolean)
      .map((block, panelIndex) => parsePanel(block, pageIndex, panelIndex));
    return { id: `p${pageIndex + 1}`, panels };
  });
}

function parsePanel(block: string, pageIndex: number, panelIndex: number) {
  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const head = lines[0];
  if (!head) throw new Error("Empty panel");
  const [scene, cast = ""] = head.split(/\s+/, 2);
  const characters = cast ? cast.split(",").filter(Boolean) : [];
  const bubbles: Bubble[] = lines.slice(1).map((line, lineIndex) => {
    const match = line.match(/^([^:]+):\s*(.+)$/);
    if (!match) throw new Error(`Bad script line: ${line}`);
    const who = match[1].trim();
    const kind: BubbleKind = KINDS.has(who.toLowerCase() as BubbleKind) ? (who.toLowerCase() as BubbleKind) : "speech";
    return {
      id: `p${pageIndex + 1}n${panelIndex + 1}b${lineIndex + 1}`,
      kind,
      speaker: kind === "speech" ? who : undefined,
      text: match[2].trim(),
    };
  });
  return {
    id: `p${pageIndex + 1}n${panelIndex + 1}`,
    scene: scene as SceneId,
    characters,
    bubbles,
  };
}

export function q(
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

export function g(word: string, definition: string): GlossaryEntry {
  return { word, definition };
}

export function makeStory(
  draft: {
    id: string;
    title: string;
    seriesId: string;
    episode: number;
    genre: Story["genre"];
    subgenre: string;
    themes: string[];
    ladderLevel: number;
    expectedMinutes: number;
    stretchEligible: boolean;
    glossary: GlossaryEntry[];
    comprehension: ComprehensionQ[];
    talkAbout: string;
    script: string;
    source?: StorySource;
  },
): Story {
  return {
    id: draft.id,
    title: draft.title,
    seriesId: draft.seriesId,
    episode: draft.episode,
    genre: draft.genre,
    subgenre: draft.subgenre,
    themes: draft.themes,
    ladderLevel: draft.ladderLevel,
    ageFloor: 8,
    language: "en",
    pages: packComicPages(parseScript(draft.script), draft.ladderLevel),
    glossary: draft.glossary,
    comprehension: draft.comprehension,
    talkAbout: draft.talkAbout,
    expectedMinutes: draft.expectedMinutes,
    status: "reviewed",
    stretchEligible: draft.stretchEligible,
    source: draft.source ?? originalSource(),
    art: HOUSE_ART,
  };
}
