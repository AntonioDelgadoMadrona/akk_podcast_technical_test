// INTERFACES
import { PodcastDetailsInfoType, PodcastDetailsEpisodeType } from "../../../../interfaces/PodcastDetails.interface";

export interface PodcastDetailsHookReturnType {
  podcastDetails: PodcastDetailsInfoType | null;
  episodeList: PodcastDetailsEpisodeType[] | null;
  isFetching: boolean;
  podcastId: string;
}
