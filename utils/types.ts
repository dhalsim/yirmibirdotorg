import events from "../content/events.json";
import episodes from "../content/episodes.json";
import { ArticleSlug } from "./routes";

export interface Episode {
  created: string;
  createdUnixTimestamp: number;
  podcastEpisodeUuid: string;
  description: string;
  descriptionPreview: string;
  duration: number;
  episodeId: string;
  title: string;
  spotifyUrl: string;
  slug: string;
  anchorUrl: string;
}

export type EventType = typeof events[number];
export type EpisodeType = typeof episodes[number];

export type Frontmatter = {
  author: string;
  authorURL: string;
  tags: string[];
  title: string;
  meta: string;
  translator: string;
  translatorURL: string;
  slug: ArticleSlug;
};
