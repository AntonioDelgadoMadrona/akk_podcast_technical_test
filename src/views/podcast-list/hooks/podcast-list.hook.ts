// DEPENDENCIES
import { useState, useEffect } from "react";
// HANDLERS
import PodcastListHandlers from "../handlers/podcast-list.handlers";
// INTERFACES
import { PodcastListItemType } from "../../../interfaces/PodcastListItem.interface";
import { PodcastListHookReturnType } from "./interfaces/podcast-list-hook.interface";

const usePodcastListHook = (): PodcastListHookReturnType => {
  const [podcastList, setPodcastList] = useState<PodcastListItemType[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleGetPodcastList } = PodcastListHandlers({
    setPodcastList,
    setIsLoading,
  });

  useEffect(() => {
    handleGetPodcastList();
  }, []);

  return {
    podcastList,
    isLoading,
  };
};

export default usePodcastListHook;
