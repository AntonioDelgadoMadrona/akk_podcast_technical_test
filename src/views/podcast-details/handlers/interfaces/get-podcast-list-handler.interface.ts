// INTERFACES
import { PodcastDetailsType } from "../../../../interfaces/PodcastDetails.interface";

export interface GetPodcastDetailsHandlerType {
  podcastId: string;
  setPodcastDetails: (podcastDetails: PodcastDetailsType) => void;
  setIsFetching: (isFetching: boolean) => void;
}
