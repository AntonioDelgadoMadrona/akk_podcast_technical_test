// INTERFACES
import { PodcastListItemType } from "../../../../interfaces/PodcastListItem.interface";

export interface GetPodcastListHandlerType {
  setPodcastList: (podcastList: PodcastListItemType[]) => void;
  setIsLoading: (isLoading: boolean) => void;
}
