import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { inQuietHours, reminderDue } from "./schedule";
import { STORY_REQUEST_ENABLED, storyRequestStatus, submitStoryRequest } from "./story-request";
import { weeklyMetrics } from "./analytics";
import { defaultReadingState, finishStory } from "./state";
import { metaById } from "./content";

describe("story request stub", () => {
  it("stays off and refuses to accept a request", () => {
    assert.equal(STORY_REQUEST_ENABLED, false);
    assert.deepEqual(storyRequestStatus(), { enabled: false, status: "disabled" });
    const result = submitStoryRequest();
    assert.equal(result.ok, false);
  });
});

describe("reminders", () => {
  it("sends at most one calm reminder, and never during quiet hours", () => {
    assert.equal(inQuietHours(21 * 60, "20:00", "07:00"), true);
    assert.equal(inQuietHours(12 * 60, "20:00", "07:00"), false);
    assert.equal(
      reminderDue({
        enabled: true,
        time: "17:00",
        quietStart: "20:00",
        quietEnd: "07:00",
        lastSentDay: null,
        nowMinutes: 17 * 60,
        today: "2026-10-11",
      }),
      true,
    );
    assert.equal(
      reminderDue({
        enabled: true,
        time: "17:00",
        quietStart: "20:00",
        quietEnd: "07:00",
        lastSentDay: "2026-10-11",
        nowMinutes: 18 * 60,
        today: "2026-10-11",
      }),
      false,
    );
    assert.equal(
      reminderDue({
        enabled: true,
        time: "21:00",
        quietStart: "20:00",
        quietEnd: "07:00",
        lastSentDay: null,
        nowMinutes: 21 * 60,
        today: "2026-10-11",
      }),
      false,
    );
  });
});

describe("weekly metrics", () => {
  it("counts finishes and reading days, and treats minutes as diagnostic", () => {
    const story = metaById("mlc-glow");
    assert.ok(story);
    let state = defaultReadingState("2026-10-06T00:00:00.000Z");
    state = {
      ...state,
      placed: true,
      fictionLevel: 5,
      current: { storyId: story.id, panelIndex: 0, startedAt: "2026-10-06T00:00:00.000Z", lookups: [], isChallenge: false },
    };
    state = finishStory(state, story, {
      comprehensionCorrect: 2,
      comprehensionTotal: 2,
      minutes: 4,
      day: "2026-10-06",
      now: "2026-10-06T00:10:00.000Z",
    });
    const week = weeklyMetrics(state.events, "2026-10-06");
    assert.equal(week.storiesCompleted, 1);
    assert.equal(week.activeDays, 1);
    assert.equal(week.minutes, 4);
    assert.equal(state.finishedIds.includes("mlc-glow"), true);
    assert.equal(state.badges.includes("books"), true);
  });
});
