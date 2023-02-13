// DEPENDENCIES
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// HANDLERS
import PodcastDetailsHandlers from "../handlers/podcast-details.handlers";
// INTERFACES
import { PodcastDetailsHookReturnType } from "./interfaces/podcast-details-hook.interface";
import { PodcastDetailsInfoType, PodcastDetailsEpisodeType } from "../../../interfaces/PodcastDetails.interface";

const usePodcastDetailsHook = (): PodcastDetailsHookReturnType => {
  const { id = "" } = useParams();
  const [podcastDetails, setPodcastDetails] = useState<PodcastDetailsInfoType | null>(null);
  const [episodeList, setEpisodeList] = useState<PodcastDetailsEpisodeType[] | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    handleGetPodcastDetails(id);
  }, []);

  const { handleGetPodcastDetails } = PodcastDetailsHandlers({
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
