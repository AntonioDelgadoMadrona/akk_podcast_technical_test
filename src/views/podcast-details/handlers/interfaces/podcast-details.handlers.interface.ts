// INTERFACES
import { PodcastDetailsInfoType, PodcastDetailsEpisodeType } from "./../../../../interfaces/PodcastDetails.interface";

export interface PodcastDetailsHandlersType {
  setPodcastDetails: (podcastDetails: PodcastDetailsInfoType) => void;
  setEpisodeList: (episodeList: PodcastDetailsEpisodeType[]) => void;
  setIsFetching: (isFetching: boolean) => void;
}

export interface PodcastDetailsHandlersReturnType {
  handleGetPodcastDetails: (podcastId: string) => void;
}
