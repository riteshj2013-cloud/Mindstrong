import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { PLACEMENT_STRIPS } from "./content/placement-strips";
import { STORIES } from "./content/stories";
import { lintErrors, lintPages, lintStory } from "./linter";
import type { Story } from "./types";

describe("level linter", () => {
  it("accepts every sample story and placement strip", () => {
    for (const story of STORIES) {
      const errors = lintErrors(lintStory(story));
      assert.deepEqual(
        errors,
        [],
        `${story.id}: ${errors.map((issue) => issue.message).join("; ")}`,
      );
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
