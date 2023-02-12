// INTERFACES
import { PodcastListItemType } from "../../../../interfaces/PodcastListItem.interface";

export interface GetPodcastListHandlerType {
  setPodcastList: (podcastList: PodcastListItemType[]) => void;
  setIsFetching: (isFetching: boolean) => void;
}
