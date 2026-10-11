import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { levelsForLibrary } from "./levels";
import { advancePlacement, initialPlacement, placementForLibrary, placementResult, stripPassed } from "./placement";

describe("placement", () => {
  it("starts at S2 fiction and non-fiction", () => {
    const start = initialPlacement();
    assert.deepEqual(start.pending, [
      { genre: "fiction", level: 6 },
      { genre: "nonfiction", level: 6 },
    ]);
  });

  it("needs both taps to pass a strip", () => {
    assert.equal(stripPassed(2, 2), true);
    assert.equal(stripPassed(1, 2), false);
  });

  it("tries S3 after a pass and S1 after a miss", () => {
    let state = initialPlacement();
    state = advancePlacement(state, true);
    state = advancePlacement(state, false);
    assert.deepEqual(state.pending, [
      { genre: "fiction", level: 7 },
      { genre: "nonfiction", level: 5 },
    ]);
  });

  it("places one level below the highest passed, with non-fiction one lower", () => {
    let state = initialPlacement();
    state = advancePlacement(state, true);
    state = advancePlacement(state, true);
    state = advancePlacement(state, true);
    state = advancePlacement(state, true);
    const raw = placementResult(state);
    assert.deepEqual(raw, { fiction: 6, nonfiction: 5 });
    assert.deepEqual(placementForLibrary(state)?.served, { fiction: 6, nonfiction: 5 });
  });

  it("floors a below-S1 result onto the sample library", () => {
    let state = initialPlacement();
    state = advancePlacement(state, false);
    state = advancePlacement(state, false);
    state = advancePlacement(state, true);
    state = advancePlacement(state, true);
    const raw = placementResult(state);
    assert.deepEqual(raw, { fiction: 4, nonfiction: 3 });
    assert.deepEqual(levelsForLibrary(raw!), { fiction: 5, nonfiction: 5 });
  });

  it("stays at S1 when every strip is missed", () => {
    let state = initialPlacement();
    state = advancePlacement(state, false);
    state = advancePlacement(state, false);
    state = advancePlacement(state, false);
    state = advancePlacement(state, false);
    assert.deepEqual(placementResult(state), { fiction: 5, nonfiction: 4 });
    assert.deepEqual(placementForLibrary(state)?.served, { fiction: 5, nonfiction: 5 });
  });
});
