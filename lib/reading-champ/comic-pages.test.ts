import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { STORIES } from "./content/stories";
import { ceilingFor } from "./levels";
import { lintErrors, lintStory } from "./linter";
import { pageWordCount } from "./text";
import { packComicPages } from "./comic-pages";
import type { StoryPage } from "./types";

function beat(words: string): StoryPage {
  return {
    id: "beat",
    panels: [
      {
        id: "a",
        scene: "library",
        characters: ["mira"],
        bubbles: [{ id: "b", kind: "speech", speaker: "Mira", text: words }],
      },
    ],
  };
}

describe("comic pages", () => {
  it("groups beats into 3–5 panel pages", () => {
    const packed = packComicPages(
      Array.from({ length: 10 }, () => beat("One two three.")),
      5,
    );
    assert.deepEqual(
      packed.map((page) => page.panels.length),
      [4, 3, 3],
    );
  });

  it("splits a page that would pass the word ceiling", () => {
    const heavy = beat(
      "one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty",
    );
    const packed = packComicPages(Array.from({ length: 6 }, () => heavy), 5);
    for (const page of packed) {
      assert.ok(pageWordCount(page) <= ceilingFor(5).maxWordsPerPage);
      assert.ok(page.panels.length <= ceilingFor(5).maxPanelsPerPage);
    }
    assert.ok(packed.length > 2);
  });

  it("gives every production episode full pages", () => {
    for (const story of STORIES.filter((item) => !item.sample)) {
      assert.equal(lintErrors(lintStory(story)).length, 0, story.id);
      assert.ok(story.pages.length >= 3, story.id);
      for (const page of story.pages) {
        assert.ok(page.panels.length >= 3 && page.panels.length <= 5, `${story.id} ${page.id}`);
      }
    }
  });
});
