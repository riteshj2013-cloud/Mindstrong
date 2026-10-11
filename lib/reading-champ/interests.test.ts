import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  applyLlmOrder,
  decayInterests,
  emptyInterests,
  exploreScore,
  llmRankerHook,
  observeInterest,
  rankCandidates,
  rankWithOptionalLlm,
  topTopics,
} from "./interests";

const space = { id: "space-story", genre: "fiction", themes: ["space"], seriesId: "captain-comet" };
const history = { id: "history-story", genre: "nonfiction", themes: ["history"], seriesId: "time-hop" };

describe("interest agent", () => {
  it("raises topic, genre, and series scores from a finish", () => {
    const next = observeInterest(
      emptyInterests("2026-10-01T00:00:00.000Z"),
      { type: "finished", topics: ["space"], genre: "fiction", seriesId: "captain-comet", at: "2026-10-01T00:00:00.000Z" },
      "2026-10-01T00:00:00.000Z",
    );
    assert.ok((next.topics.space ?? 0) > 0);
    assert.ok((next.genres.fiction ?? 0) > 0);
    assert.ok((next.series["captain-comet"] ?? 0) > 0);
    assert.equal(next.seenTopics.space, 1);
  });

  it("decays scores as days pass", () => {
    const start = observeInterest(
      emptyInterests("2026-10-01T00:00:00.000Z"),
      { type: "finished", topics: ["space"], genre: "fiction", seriesId: "captain-comet", at: "2026-10-01T00:00:00.000Z" },
      "2026-10-01T00:00:00.000Z",
    );
    const later = decayInterests(start, "2026-10-11T00:00:00.000Z");
    assert.ok((later.topics.space ?? 0) < (start.topics.space ?? 0));
  });

  it("ranks a loved topic first when exploration is off, and still keeps a fresh topic in range", () => {
    let state = emptyInterests("2026-10-01T00:00:00.000Z");
    for (let i = 0; i < 4; i++) {
      state = observeInterest(
        state,
        { type: "finished", topics: ["space"], genre: "fiction", seriesId: "captain-comet", at: "2026-10-01T00:00:00.000Z" },
        "2026-10-01T00:00:00.000Z",
      );
    }
    const loved = rankCandidates([space, history], state, { exploreMix: 0 });
    assert.equal(loved[0].item.id, "space-story");
    assert.ok(exploreScore(history, state) > exploreScore(space, state));
    const mixed = rankCandidates([space, history], state, { exploreMix: 1 });
    assert.equal(mixed[0].item.id, "history-story");
  });

  it("ignores scores when personalization is off", () => {
    const state = observeInterest(
      emptyInterests("2026-10-01T00:00:00.000Z"),
      { type: "finished", topics: ["space"], genre: "fiction", seriesId: "captain-comet", at: "2026-10-01T00:00:00.000Z" },
      "2026-10-01T00:00:00.000Z",
    );
    const ranked = rankCandidates([history, space], state, { personalize: false });
    assert.deepEqual(
      ranked.map((row) => row.item.id),
      ["history-story", "space-story"],
    );
  });

  it("drops ids an LLM ranker invents", async () => {
    const ordered = applyLlmOrder([space, history], ["not-a-real-story", "history-story"]);
    assert.deepEqual(
      ordered.map((item) => item.id),
      ["history-story", "space-story"],
    );
    llmRankerHook.current = async () => ["made-up", "history-story"];
    try {
      const result = await rankWithOptionalLlm([space, history], emptyInterests(), { personalize: false });
      assert.deepEqual(
        result.map((item) => item.id),
        ["history-story", "space-story"],
      );
      assert.equal(result.some((item) => item.id === "made-up"), false);
    } finally {
      llmRankerHook.current = null;
    }
  });

  it("summarizes the strongest topics for a parent line", () => {
    let state = emptyInterests("2026-10-01T00:00:00.000Z");
    state = observeInterest(
      state,
      { type: "topic", topic: "space", at: "2026-10-01T00:00:00.000Z" },
      "2026-10-01T00:00:00.000Z",
    );
    state = observeInterest(
      state,
      { type: "topic", topic: "space", at: "2026-10-01T00:00:00.000Z" },
      "2026-10-01T00:00:00.000Z",
    );
    state = observeInterest(
      state,
      { type: "topic", topic: "trains", at: "2026-10-01T00:00:00.000Z" },
      "2026-10-01T00:00:00.000Z",
    );
    assert.deepEqual(topTopics(state, 2), ["space", "trains"]);
  });
});
