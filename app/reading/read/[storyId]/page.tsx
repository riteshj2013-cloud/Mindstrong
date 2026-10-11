import { ReadClient } from "./read-client";
import { STORIES } from "@/lib/reading-champ/content/stories";

export function generateStaticParams() {
  return STORIES.filter((story) => story.status === "reviewed").map((story) => ({ storyId: story.id }));
}

export default function ReadPage() {
  return <ReadClient />;
}
