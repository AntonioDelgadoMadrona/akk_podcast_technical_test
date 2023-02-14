// INTERFACES
import { EpisodeDetailsType } from "../../../../interfaces/EpisodeDetails.interface";
import { PodcastDetailsInfoType } from "../../../../interfaces/PodcastDetails.interface";

export interface GetEpisodeDetailsHandlerType {
  podcastId: string;
  episodeId: string;
  setEpisodeDetailsStoraged: (episodeDetails: any) => void;
  setPodcastDetails: (podcastDetails: PodcastDetailsInfoType) => void;
  setEpisodeDetails: (episodeDetails: EpisodeDetailsType) => void;
  setIsFetching: (isFetching: boolean) => void;
}
