import type { SeriesInfo } from "../types";

export const SERIES: SeriesInfo[] = [
  {
    id: "midnight-library",
    title: "The Midnight Library Club",
    genre: "fiction",
    blurb: "After school, Mira and Dev follow a book that glows.",
    themes: ["books", "friendship"],
    emoji: "📚",
  },
  {
    id: "captain-comet",
    title: "Captain Comet's Crew",
    genre: "fiction",
    blurb: "Comet and Pip chase a quiet signal between the stars.",
    themes: ["space", "teamwork"],
    emoji: "🚀",
  },
  {
    id: "wonder-wombat",
    title: "Wonder Wombat's Why Files",
    genre: "nonfiction",
    blurb: "Wombat asks a science question and checks the facts.",
    themes: ["science", "sky"],
    emoji: "🔍",
  },
  {
    id: "time-hop",
    title: "Time-Hop Reporters",
    genre: "nonfiction",
    blurb: "Asha and Rafi interview people from long ago.",
    themes: ["history", "fairness"],
    emoji: "⏳",
  },
  {
    id: "aesop-fables",
    title: "Fables we can share",
    genre: "fiction",
    blurb: "A public-domain fable, retold in our own words.",
    themes: ["kindness", "animals"],
    emoji: "🦁",
  },
];

export const GENRE_BADGES: { id: string; seriesId: string; label: string; emoji: string }[] = [
  { id: "books", seriesId: "midnight-library", label: "Book adventurer", emoji: "📚" },
  { id: "space", seriesId: "captain-comet", label: "Space explorer", emoji: "🚀" },
  { id: "science", seriesId: "wonder-wombat", label: "Science detective", emoji: "🔬" },
  { id: "history", seriesId: "time-hop", label: "History hopper", emoji: "⏳" },
  { id: "fables", seriesId: "aesop-fables", label: "Fable friend", emoji: "🦁" },
];
