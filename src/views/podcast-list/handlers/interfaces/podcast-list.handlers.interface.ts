// INTERFACES
import { PodcastListItemType } from "../../../../interfaces/PodcastListItem.interface";

export interface PodcastListHandlersType {
  setPodcastListStoraged: (podcastList: PodcastListItemType[]) => void;
  setPodcastList: (podcastList: PodcastListItemType[]) => void;
  setIsFetching: (isFetching: boolean) => void;
  setFilteredPodcastList: (filteredPodcastList: PodcastListItemType[]) => void;
  setIsFiltering: (isFiltering: boolean) => void;
  podcastList: PodcastListItemType[];
}

export interface PodcastListHandlersReturnType {
  handleGetPodcastList: () => void;
  handleFilterPodcastList: (event: React.FormEvent<HTMLInputElement>) => void;
}
