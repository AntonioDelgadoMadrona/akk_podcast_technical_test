// DEPENDENCIES
import { useState, useEffect } from "react";
// HANDLERS
import PodcastListHandlers from "../handlers/podcast-list.handlers";
// INTERFACES
import { PodcastListItemType } from "../../../interfaces/PodcastListItem.interface";
import { PodcastListHookReturnType } from "./interfaces/podcast-list-hook.interface";

const usePodcastListHook = (): PodcastListHookReturnType => {
  const [podcastList, setPodcastList] = useState<PodcastListItemType[] | []>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [filteredPodcastList, setFilteredPodcastList] = useState<PodcastListItemType[] | []>([]);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const { handleGetPodcastList, handleFilterPodcastList } = PodcastListHandlers({
    setPodcastList,
    setIsFetching,
    setFilteredPodcastList,
    setIsFiltering,
    podcastList,
  });

  useEffect(() => {
    handleGetPodcastList();
  }, []);

  return {
    handleFilterPodcastList,
    podcastList,
    isFetching,
    filteredPodcastList,
    isFiltering,
  };
};

export default usePodcastListHook;
