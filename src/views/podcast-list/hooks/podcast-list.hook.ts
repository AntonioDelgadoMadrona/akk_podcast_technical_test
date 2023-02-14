// DEPENDENCIES
import { useState, useEffect } from "react";
// CONTEXT
import { useAppContext } from "../../../context/app.context";
// HANDLERS
import PodcastListHandlers from "../handlers/podcast-list.handlers";
// UTILS
import { checkUpdateDate } from "./../../../utils/storagedDataUtils";
// INTERFACES
import { PodcastListItemType } from "../../../interfaces/PodcastListItem.interface";
import { PodcastListHookReturnType } from "./interfaces/podcast-list-hook.interface";

const usePodcastListHook = (): PodcastListHookReturnType => {
  const { setPodcastListStoraged, podcastListStoraged } = useAppContext();

  const [podcastList, setPodcastList] = useState<PodcastListItemType[] | []>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [filteredPodcastList, setFilteredPodcastList] = useState<PodcastListItemType[] | []>([]);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  useEffect(() => {
    if (podcastListStoraged?.updatedAt && podcastListStoraged?.content.length > 0) {
      const isOnTime = checkUpdateDate(podcastListStoraged.updatedAt);
      isOnTime ? setPodcastList([...podcastListStoraged.content]) : handleGetPodcastList();
    } else handleGetPodcastList();
  }, []);

  const { handleGetPodcastList, handleFilterPodcastList } = PodcastListHandlers({
    setPodcastListStoraged,
    setPodcastList,
    setIsFetching,
    setFilteredPodcastList,
    setIsFiltering,
    podcastList,
  });

  return {
    handleFilterPodcastList,
    podcastList,
    isFetching,
    filteredPodcastList,
    isFiltering,
  };
};

export default usePodcastListHook;
