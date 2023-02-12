export interface PodcastDetailsInfoType {
  artistName: string;
  artworkUrl100: string;
  collectionId: number;
  collectionName: string;
}

export interface PodcastDetailsEpisodeType {
  episodeGuid: string;
  releaseDate: string;
  trackName: string;
  duration: number;
}

export interface PodcastDetailsType {
  details: PodcastDetailsInfoType | null;
  episodes: PodcastDetailsEpisodeType[] | null;
}
