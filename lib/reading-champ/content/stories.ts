import type { Story } from "../types";
import { COMET_STORIES } from "./stories-comet";
import { FABLE_STORIES } from "./stories-fables";
import { MLC_STORIES } from "./stories-mlc";
import { TIMEHOP_STORIES } from "./stories-timehop";
import { WOMBAT_STORIES } from "./stories-wombat";

export const STORIES: Story[] = [
  ...MLC_STORIES,
  ...WOMBAT_STORIES,
  ...FABLE_STORIES,
  ...COMET_STORIES,
  ...TIMEHOP_STORIES,
];
