// INTERFACES
import { PodcastListItemType } from "../../../../interfaces/PodcastListItem.interface";

export interface PodcastListHookReturnType {
  handleFilterPodcastList: (event: React.FormEvent<HTMLInputElement>) => void;
  podcastList: PodcastListItemType[];
  isFetching: boolean;
  filteredPodcastList: PodcastListItemType[];
  isFiltering: boolean;
}
