/**
 * STORY REQUEST — OFF BY DEFAULT. Documented only.
 *
 * A future flow could let a grown-up ask for another episode of a series.
 * That episode would be written and reviewed by a person before it entered
 * the library. This build does not collect a request, does not call a model,
 * and does not generate pages. Unreviewed text must never reach the shelf.
 */
export const STORY_REQUEST_ENABLED = false;

export interface StoryRequest {
  enabled: false;
  status: "disabled";
}

export function storyRequestStatus(): StoryRequest {
  return { enabled: false, status: "disabled" };
}

export function submitStoryRequest(): { ok: false; reason: string } {
  return {
    ok: false,
    reason: "Story requests are off. New episodes are added only after a person reviews them.",
  };
}
