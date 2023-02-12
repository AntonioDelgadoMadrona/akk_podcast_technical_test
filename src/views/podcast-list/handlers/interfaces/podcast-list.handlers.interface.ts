// INTERFACES
import { PodcastListItemType } from "../../../../interfaces/PodcastListItem.interface";

export interface PodcastListHandlersType {
  setPodcastList: (podcastList: PodcastListItemType[]) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export interface PodcastListHandlersReturnType {
  handleGetPodcastList: () => void;
}
