// INTERFACES
import { PodcastListItemType } from "../../../../interfaces/PodcastListItem.interface";

export interface PodcastListHookReturnType {
  podcastList: PodcastListItemType[];
  isLoading: boolean;
}
