import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { CHARACTER_KITS } from "./art";
import { storyHasWord } from "./content";
import { PLACEMENT_STRIPS } from "./content/placement-strips";
import { STORIES } from "./content/stories";
import { lintErrors, lintPages, lintStory } from "./linter";
import type { SceneId, Story } from "./types";

const SCENES = new Set<SceneId>([
  "library",
  "stacks",
  "night",
  "garden",
  "space",
  "burrow",
  "meadow",
  "sky",
  "pond",
  "forest",
  "savanna",
  "time",
  "village",
  "river",
  "moon",
  "market",
  "train",
  "timeline",
]);

describe("level linter", () => {
  it("accepts every sample story and placement strip", () => {
    for (const story of STORIES) {
      const issues = lintStory(story);
      const errors = lintErrors(issues);
      assert.deepEqual(
        errors,
        [],
        `${story.id}: ${errors.map((issue) => `${issue.where ?? ""} ${issue.message}`).join("; ")}`,
      );
      if (!story.sample) {
        assert.ok(story.pages.length >= 3, `${story.id} has ${story.pages.length} pages`);
        for (const page of story.pages) {
          assert.ok(
            page.panels.length >= 3 && page.panels.length <= 5,
            `${story.id} ${page.id} has ${page.panels.length} panels`,
          );
        }
        assert.ok(story.glossary.length >= 2, `${story.id} needs glossary words`);
        assert.equal(story.comprehension.length >= 2 && story.comprehension.length <= 3, true);
        for (const entry of story.glossary) {
          assert.equal(storyHasWord(story, entry.word), true, `${story.id} glossary missing ${entry.word}`);
        }
        const warns = issues.filter((issue) => issue.severity === "warn");
        assert.deepEqual(
          warns,
          [],
          `${story.id} warnings: ${warns.map((issue) => issue.message).join("; ")}`,
        );
      }
      for (const page of story.pages) {
        for (const panel of page.panels) {
          assert.equal(SCENES.has(panel.scene), true, `${story.id} scene ${panel.scene}`);
          for (const id of panel.characters) {
            assert.equal(id in CHARACTER_KITS, true, `${story.id} character ${id}`);
          }
        }
      }
    }
    for (const strip of PLACEMENT_STRIPS) {
      const errors = lintErrors(lintPages(strip.pages, strip.ladderLevel, strip.glossary));
      assert.deepEqual(errors, [], `${strip.id}: ${errors.map((issue) => issue.message).join("; ")}`);
    }
  });

  it("flags a bubble, a crowded page, a long sentence, and extra vocabulary", () => {
    const story = {
      ...STORIES[0],
      id: "too-hard",
      sample: true,
      ladderLevel: 5,
      glossary: [],
      pages: [
        {
          id: "p",
          panels: [
            {
              id: "a",
              scene: "library",
              characters: ["mira"],
              bubbles: [
                {
                  id: "b",
                  kind: "speech",
                  speaker: "Mira",
                  text: "This sentence is deliberately long enough to break the early chapter comic ceiling today.",
                },
              ],
            },
            {
              id: "c",
              scene: "library",
              characters: ["dev"],
              bubbles: [{ id: "d", kind: "speech", speaker: "Dev", text: "Hi." }],
            },
            {
              id: "e",
              scene: "library",
              characters: ["mira"],
              bubbles: [{ id: "f", kind: "speech", speaker: "Mira", text: "Hi again." }],
            },
            {
              id: "g",
              scene: "library",
              characters: ["dev"],
              bubbles: [{ id: "h", kind: "speech", speaker: "Dev", text: "Another panel." }],
            },
            {
              id: "i",
              scene: "library",
              characters: ["mira"],
              bubbles: [{ id: "j", kind: "speech", speaker: "Mira", text: "One more panel." }],
            },
          ],
        },
      ],
    } as Story;
    const codes = new Set(lintErrors(lintStory(story)).map((issue) => issue.code));
    assert.equal(codes.has("words-per-bubble"), true);
    assert.equal(codes.has("sentence-length"), true);
    assert.equal(codes.has("panels-per-page"), true);
  });

  it("requires a license record", () => {
    const story = {
      ...STORIES[0],
      source: { ...STORIES[0].source, license: "", nc: undefined },
    } as unknown as Story;
    const codes = new Set(lintErrors(lintStory(story)).map((issue) => issue.code));
    assert.equal(codes.has("license-record"), true);
    assert.equal(codes.has("license-flags"), true);
  });
});
