/**
 * House-style art kits for Reading Champ.
 * Drawings live in components/reading-champ. This file is the name list
 * so stories and tests can check every character without loading React.
 */

export const CHARACTER_KITS = {
  mira: "Mira",
  dev: "Dev",
  page: "Page, the librarian",
  wombat: "Wonder Wombat",
  dot: "Dot the beetle",
  comet: "Captain Comet",
  pip: "Pip",
  asha: "Asha",
  rafi: "Rafi",
  guard: "Station guard",
  porter: "Porter",
  lion: "Lion",
  mouse: "Mouse",
  tortoise: "Tortoise",
  hare: "Hare",
  ant: "Ant",
  hopper: "Grasshopper",
  monkey: "Monkey",
  croc: "Crocodile",
  jackal: "Jackal",
  bluejackal: "Blue jackal",
  duck: "Duck",
} as const;

export type CharacterId = keyof typeof CHARACTER_KITS;
