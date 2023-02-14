// INTERFACES
import { EpisodeDetailsType } from "../../../../interfaces/EpisodeDetails.interface";
import { PodcastDetailsInfoType } from "../../../../interfaces/PodcastDetails.interface";

export interface EpisodeDetailsHandlersType {
  setEpisodeDetailsStoraged: (episodeDetails: any) => void;
  setPodcastDetails: (podcastDetails: PodcastDetailsInfoType) => void;
  setEpisodeDetails: (episodeDetails: EpisodeDetailsType) => void;
  setIsFetching: (isFetching: boolean) => void;
}

export interface EpisodeDetailsHandlersReturnType {
  handleGetEpisodeDetails: (podcastId: string, episodeId: string) => void;
}
