// INTERFACES
import { PodcastDetailsType } from "../../../../interfaces/PodcastDetails.interface";

export interface PodcastDetailsHookReturnType {
  podcastDetails: PodcastDetailsType | null;
  isFetching: boolean;
}
