// INTERFACES
import { PodcastListItemType } from "../../../../interfaces/PodcastListItem.interface";

export interface GetPodcastListHandlerType {
  setPodcastListStoraged: (podcastList: any) => void;
  setPodcastList: (podcastList: PodcastListItemType[]) => void;
  setIsFetching: (isFetching: boolean) => void;
}
