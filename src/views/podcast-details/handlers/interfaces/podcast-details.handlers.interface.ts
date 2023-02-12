// INTERFACES
import { PodcastDetailsType } from "./../../../../interfaces/PodcastDetails.interface";

export interface PodcastDetailsHandlersType {
  setPodcastDetails: (podcastDetails: PodcastDetailsType) => void;
  setIsFetching: (isFetching: boolean) => void;
}

export interface PodcastDetailsHandlersReturnType {
  handleGetPodcastDetails: (podcastId: string) => void;
}
