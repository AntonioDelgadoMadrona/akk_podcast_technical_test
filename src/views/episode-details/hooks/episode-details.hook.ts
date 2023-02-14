// DEPENDENCIES
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// CONTEXT
import { useAppContext } from "../../../context/app.context";
// HANDLERS
import EpisodeDetailsHandlers from "../handlers/episode-details.handlers";
// UTILS
import { checkUpdateDate } from "../../../utils/storagedDataUtils";
// INTERFACES
import { EpisodeDetailsHooType } from "./interfaces/episode-details-hook.interface";
import { PodcastDetailsInfoType } from "../../../interfaces/PodcastDetails.interface";
import { EpisodeDetailsType } from "../../../interfaces/EpisodeDetails.interface";

const useEpisodeDetailsHook = (): EpisodeDetailsHooType => {
  const { episodeDetailsStoraged, setEpisodeDetailsStoraged } = useAppContext();

  const { id = "", episodeId = "" } = useParams();
  const [podcastDetails, setPodcastDetails] = useState<PodcastDetailsInfoType | null>(null);
  const [episodeDetails, setEpisodeDetails] = useState<EpisodeDetailsType | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    // Check if episodeDetailsStoraged.updatedAt is less than 24 hours and if is the same as actual id
    if (episodeDetailsStoraged?.updatedAt && episodeDetailsStoraged?.content?.podcastDetails) {
      const isOnTime = checkUpdateDate(episodeDetailsStoraged.updatedAt);
      const isSameId =
        episodeDetailsStoraged.content.podcastDetails.collectionId === Number(id) &&
        episodeDetailsStoraged.content.episodeDetails.trackId === Number(episodeId);
      if (isOnTime && isSameId) {
        setPodcastDetails({ ...episodeDetailsStoraged.content.podcastDetails });
        setEpisodeDetails({ ...episodeDetailsStoraged.content.episodeDetails });
      } else handleGetEpisodeDetails(id, episodeId);
    } else handleGetEpisodeDetails(id, episodeId);
  }, []);

  const { handleGetEpisodeDetails } = EpisodeDetailsHandlers({
    setEpisodeDetailsStoraged,
    setPodcastDetails,
    setEpisodeDetails,
    setIsFetching,
  });

  return {
    podcastDetails,
    episodeDetails,
    isFetching,
  };
};

export default useEpisodeDetailsHook;
