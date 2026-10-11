import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { ADAPTIVE, evaluateLevel, isChallengeSlot, minutesOnLevel } from "./adaptive";
import type { Outcome } from "./types";

function outcome(patch: Partial<Outcome> = {}): Outcome {
  return {
    storyId: patch.storyId ?? "s",
    genre: "fiction",
    readerLevel: 6,
    storyLevel: 6,
    isChallenge: false,
    finished: true,
    abandoned: false,
    comprehension: 1,
    lookups: 0,
    wordCount: 100,
    minutes: 25,
    expectedMinutes: 5,
    reread: false,
    at: "2026-10-01T00:00:00.000Z",
    day: "2026-10-01",
    ...patch,
  };
}

const now = "2026-10-20T00:00:00.000Z";

describe("evaluateLevel", () => {
  it("promotes when minutes, finishes, comprehension, and lookups all clear", () => {
    const outcomes = [0, 1, 2].map((i) =>
      outcome({ storyId: `s${i}`, minutes: 20, comprehension: 0.9, lookups: 1, wordCount: 100 }),
    );
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "promote");
    assert.equal(decision.nextLevel, 7);
    assert.equal(decision.kidLabel, "new-stories");
    assert.equal(minutesOnLevel(outcomes, "fiction", 6), 60);
  });

  it("holds below 60 minutes", () => {
    const outcomes = [0, 1, 2].map((i) => outcome({ storyId: `s${i}`, minutes: 10 }));
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "hold");
  });

  it("holds when fewer than 2 of the last 3 are finished", () => {
    const outcomes = [
      outcome({ storyId: "a", finished: true }),
      outcome({ storyId: "b", finished: false, abandoned: false, minutes: 30 }),
      outcome({ storyId: "c", finished: false, abandoned: false, minutes: 30 }),
    ];
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "hold");
  });

  it("holds when comprehension is under 80%", () => {
    const outcomes = [0, 1, 2].map((i) => outcome({ storyId: `s${i}`, comprehension: 0.7, minutes: 25 }));
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "hold");
  });

  it("holds when lookups are over 3 per 100 words", () => {
    const outcomes = [0, 1, 2].map((i) => outcome({ storyId: `s${i}`, lookups: 4, wordCount: 100, minutes: 25 }));
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "hold");
  });

  it("allows exactly 3 lookups per 100 words", () => {
    const outcomes = [0, 1, 2].map((i) => outcome({ storyId: `s${i}`, lookups: 3, wordCount: 100, minutes: 20 }));
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "promote");
  });

  it("holds during the 7 day cooldown", () => {
    const outcomes = [0, 1, 2].map((i) => outcome({ storyId: `s${i}`, minutes: 30 }));
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: "2026-10-14T00:00:00.000Z",
      now,
    });
    assert.equal(decision.action, "hold");
  });

  it("may change once 7 days have passed", () => {
    const outcomes = [0, 1, 2].map((i) => outcome({ storyId: `s${i}`, minutes: 30 }));
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: "2026-10-13T00:00:00.000Z",
      now,
    });
    assert.equal(decision.action, "promote");
  });

  it("demotes quietly after 2 of 3 abandons", () => {
    const outcomes = [
      outcome({ storyId: "a", finished: false, abandoned: true, comprehension: null, minutes: 5 }),
      outcome({ storyId: "b", finished: false, abandoned: true, comprehension: null, minutes: 5 }),
      outcome({ storyId: "c", finished: true, minutes: 20 }),
    ];
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "demote");
    assert.equal(decision.nextLevel, 5);
    assert.equal(decision.kidLabel, "easier-picks");
    assert.equal(/down|demot/i.test(decision.kidLabel), false);
  });

  it("demotes when comprehension is under 50%", () => {
    const outcomes = [0, 1, 2].map((i) => outcome({ storyId: `s${i}`, comprehension: 0.4, minutes: 20 }));
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "demote");
    assert.equal(decision.kidLabel, "easier-picks");
  });

  it("ignores a failed Challenge", () => {
    const outcomes = [
      outcome({ storyId: "a", minutes: 20 }),
      outcome({ storyId: "b", minutes: 20 }),
      outcome({ storyId: "c", minutes: 20 }),
      outcome({
        storyId: "x",
        isChallenge: true,
        finished: false,
        abandoned: true,
        comprehension: 0,
        storyLevel: 7,
        minutes: 2,
      }),
    ];
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "promote");
  });

  it("lets one finished Challenge count extra toward the finish rule", () => {
    const outcomes = [
      outcome({
        storyId: "c",
        isChallenge: true,
        finished: true,
        storyLevel: 7,
        minutes: 30,
        comprehension: 1,
        lookups: 0,
        wordCount: 100,
      }),
      outcome({ storyId: "a", finished: false, abandoned: false, minutes: 20, comprehension: 1 }),
      outcome({ storyId: "b", finished: false, abandoned: false, minutes: 20, comprehension: 1 }),
    ];
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "promote");
    assert.ok(ADAPTIVE.challengeFinishCredit > 1);
  });

  it("does not demote from abandoned Challenges alone", () => {
    const outcomes = [
      outcome({ storyId: "a", finished: false, abandoned: true, minutes: 3 }),
      outcome({ storyId: "x", isChallenge: true, finished: false, abandoned: true, minutes: 3 }),
      outcome({ storyId: "y", isChallenge: true, finished: false, abandoned: true, minutes: 3 }),
    ];
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.equal(decision.action, "hold");
  });

  it("blocks promotion when reading is much faster than expected and comprehension is weak", () => {
    const outcomes = [0, 1, 2].map((i) =>
      outcome({
        storyId: `s${i}`,
        minutes: 1,
        expectedMinutes: 10,
        comprehension: 0.5,
        lookups: 0,
        wordCount: 100,
      }),
    );
    const decision = evaluateLevel({
      genre: "fiction",
      currentLevel: 6,
      outcomes,
      lastLevelChangeAt: null,
      now,
    });
    assert.notEqual(decision.action, "promote");
  });
});

describe("challenge cadence", () => {
  it("marks every 4th story, and the harder nudge, as a Challenge", () => {
    assert.equal(isChallengeSlot(0, 0), false);
    assert.equal(isChallengeSlot(3, 0), true);
    assert.equal(isChallengeSlot(4, 0), false);
    assert.equal(isChallengeSlot(7, 0), true);
    assert.equal(isChallengeSlot(3, -1), false);
    assert.equal(isChallengeSlot(1, 1), true);
  });
});
