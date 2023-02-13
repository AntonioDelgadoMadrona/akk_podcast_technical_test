// INTERFACES
import { EpisodeDetailsType } from "../../../../interfaces/EpisodeDetails.interface";
import { PodcastDetailsInfoType } from "../../../../interfaces/PodcastDetails.interface";

export interface GetEpisodeDetailsHandlerType {
  podcastId: string;
  episodeId: string;
  setPodcastDetails: (podcastDetails: PodcastDetailsInfoType) => void;
  setEpisodeDetails: (episodeDetails: EpisodeDetailsType) => void;
  setIsFetching: (isFetching: boolean) => void;
}
