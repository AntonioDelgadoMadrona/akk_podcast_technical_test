// INTERFACES
import { PodcastDetailsInfoType, PodcastDetailsEpisodeType } from "../../../../interfaces/PodcastDetails.interface";

export interface GetPodcastDetailsHandlerType {
  podcastId: string;
  setPodcastDetailStoraged: (podcastDetailStoraged: any) => void;
  setPodcastDetails: (podcastDetails: PodcastDetailsInfoType) => void;
  setEpisodeList: (episodeList: PodcastDetailsEpisodeType[]) => void;
  setIsFetching: (isFetching: boolean) => void;
}
