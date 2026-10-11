import { SeriesClient } from "./series-client";
import { SERIES } from "@/lib/reading-champ/content/series";

export function generateStaticParams() {
  return SERIES.map((series) => ({ seriesId: series.id }));
}

export default function SeriesPage() {
  return <SeriesClient />;
}
