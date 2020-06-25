interface Thumbnails {
  url: string;
  width: number;
  height: number;
}

interface ContentDetails {
  caption: boolean;
  contentRating: {};
  definition: string;
  dimension: string;
  duration: string;
  licensedContent: boolean;
  projection: string;
}

interface Snippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: {
    description: string;
    title: string;
  };
  publishedAt: string;
  tags: string[];
  thumbnails: {
    default: Thumbnails;
    high: Thumbnails;
    maxres: Thumbnails;
    medium: Thumbnails;
    standard: Thumbnails;
  },
  title: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface VideoInfo {
  contentDetails: ContentDetails;
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface YoutubeResponse {
  etag: string;
  items: VideoInfo[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  }
}
