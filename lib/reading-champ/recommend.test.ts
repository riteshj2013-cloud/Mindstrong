import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { catalog } from "./content";
import { emptyInterests, observeInterest } from "./interests";
import { buildShelf } from "./recommend";
import { defaultReadingState } from "./state";
import type { StoryMeta } from "./types";

function input(patch: Partial<Parameters<typeof buildShelf>[0]> = {}) {
  return {
    catalog: catalog(),
    fictionLevel: 6,
    nonfictionLevel: 5,
    finishedIds: [],
    startedSeries: ["midnight-library"],
    lastSeriesId: "midnight-library",
    storiesStarted: 0,
    interests: emptyInterests(),
    personalize: true,
    nudge: 0 as const,
    ...patch,
  };
}

describe("Pick 1 of 3", () => {
  it("offers a familiar series, a new topic, and non-fiction", () => {
    const shelf = buildShelf(input());
    assert.equal(shelf[0]?.role, "familiar");
    assert.equal(shelf[0]?.story.seriesId, "midnight-library");
    assert.equal(shelf[1]?.role, "new-topic");
    assert.equal(shelf.some((slot) => slot.role === "nonfiction"), true);
    assert.equal(shelf.every((slot) => slot.story.status === "reviewed"), true);
  });

  it("puts a Challenge one level up on every 4th story", () => {
    const shelf = buildShelf(input({ storiesStarted: 3, fictionLevel: 5, nonfictionLevel: 5 }));
    const challenge = shelf.find((slot) => slot.role === "challenge");
    assert.ok(challenge);
    assert.equal(challenge.story.ladderLevel, 6);
  });

  it("does not offer a Challenge while easier picks are on", () => {
    const shelf = buildShelf(input({ storiesStarted: 3, nudge: -1 }));
    assert.equal(shelf.some((slot) => slot.role === "challenge"), false);
  });

  it("never returns a draft, even if it matches the level", () => {
    const draft: StoryMeta = {
      ...catalog()[0],
      id: "draft-secret",
      status: "draft",
      ladderLevel: 6,
      seriesId: "midnight-library",
      episode: 9,
    };
    const shelf = buildShelf(input({ catalog: [...catalog(), draft] }));
    assert.equal(shelf.some((slot) => slot.story.id === "draft-secret"), false);
  });

  it("uses a fresh theme for the new-topic slot after several space finishes", () => {
    let interests = emptyInterests("2026-10-01T00:00:00.000Z");
    for (let i = 0; i < 3; i++) {
      interests = observeInterest(
        interests,
        { type: "finished", topics: ["space"], genre: "fiction", seriesId: "captain-comet", at: "2026-10-01T00:00:00.000Z" },
        "2026-10-01T00:00:00.000Z",
      );
    }
    const shelf = buildShelf(
      input({
        fictionLevel: 6,
        startedSeries: ["captain-comet", "midnight-library"],
        lastSeriesId: "captain-comet",
        interests,
      }),
    );
    const newer = shelf.find((slot) => slot.role === "new-topic");
    assert.ok(newer);
    assert.notEqual(newer.story.themes[0], "space");
  });

  it("keeps personalization off the shelf order when the parent disables it", () => {
    const state = defaultReadingState();
    assert.equal(state.personalize, true);
    const off = buildShelf(input({ personalize: false, storiesStarted: 1 }));
    const again = buildShelf(input({ personalize: false, storiesStarted: 1 }));
    assert.deepEqual(
      off.map((slot) => slot.story.id),
      again.map((slot) => slot.story.id),
    );
  });
});
