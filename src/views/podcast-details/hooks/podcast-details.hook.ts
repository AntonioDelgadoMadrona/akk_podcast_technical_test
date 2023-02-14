// DEPENDENCIES
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// HANDLERS
import PodcastDetailsHandlers from "../handlers/podcast-details.handlers";
// UTILS
import { useAppContext } from "./../../../context/app.context";
// INTERFACES
import { PodcastDetailsHookReturnType } from "./interfaces/podcast-details-hook.interface";
import { PodcastDetailsInfoType, PodcastDetailsEpisodeType } from "../../../interfaces/PodcastDetails.interface";
import { checkUpdateDate } from "../../../utils/storagedDataUtils";

const usePodcastDetailsHook = (): PodcastDetailsHookReturnType => {
  const { podcastDetailStoraged, setPodcastDetailStoraged } = useAppContext();

  const { id = "" } = useParams();
  const [podcastDetails, setPodcastDetails] = useState<PodcastDetailsInfoType | null>(null);
  const [episodeList, setEpisodeList] = useState<PodcastDetailsEpisodeType[] | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    // Check if podcastListStoraged.updatedAt is less than 24 hours and if is the same as actual id
    if (podcastDetailStoraged?.updatedAt && podcastDetailStoraged?.content?.details) {
      const isOnTime = checkUpdateDate(podcastDetailStoraged.updatedAt);
      const isSameId = podcastDetailStoraged.content.details.collectionId === Number(id);
      if (isOnTime && isSameId) {
        setPodcastDetails({ ...podcastDetailStoraged.content?.details });
        setEpisodeList([...podcastDetailStoraged.content.episodes]);
      } else handleGetPodcastDetails(id);
    } else handleGetPodcastDetails(id);
  }, []);

  const { handleGetPodcastDetails } = PodcastDetailsHandlers({
    setPodcastDetailStoraged,
    setPodcastDetails,
    setEpisodeList,
    setIsFetching,
  });

  return {
    podcastDetails,
    episodeList,
    isFetching,
    podcastId: id,
  };
};

export default usePodcastDetailsHook;
