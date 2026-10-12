import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { STORIES } from "./content/stories";
import { READING_TIME, estimateReadingMinutes, estimateReadingSeconds } from "./reading-time";
import type { StoryPage } from "./types";

describe("reading time", () => {
  it("adds word time, panel looking, lookups, and comprehension taps", () => {
    const pages: StoryPage[] = [
      {
        id: "p",
        panels: [
          {
            id: "a",
            scene: "library",
            characters: ["mira"],
            bubbles: [{ id: "b", kind: "speech", speaker: "Mira", text: "One two three four five." }],
          },
        ],
      },
    ];
    const seconds = estimateReadingSeconds({ pages, ladderLevel: 5, questionCount: 2 });
    const read = (5 / 65) * 60;
    const look = 10;
    const lookups = (5 / 100) * 2 * 12;
    const questions = 2 * 22;
    assert.ok(Math.abs(seconds - (read + look + lookups + questions)) < 0.001);
  });

  it("keeps every reviewed story at or above the 10 minute minimum", () => {
    for (const story of STORIES) {
      const minutes = estimateReadingMinutes(story);
      assert.ok(
        minutes >= READING_TIME.minimumMinutes,
        `${story.id} estimates ${minutes.toFixed(1)} minutes`,
      );
    }
  });
});
