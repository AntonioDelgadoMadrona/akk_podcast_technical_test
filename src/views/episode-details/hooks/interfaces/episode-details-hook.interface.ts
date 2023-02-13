// INTERFACES
import { PodcastDetailsInfoType } from "../../../../interfaces/PodcastDetails.interface";
import { EpisodeDetailsType } from "../../../../interfaces/EpisodeDetails.interface";

export interface EpisodeDetailsHooType {
  podcastDetails: PodcastDetailsInfoType | null;
  episodeDetails: EpisodeDetailsType | null;
  isFetching: boolean;
}
