// DEPENDENCIES
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// HANDLERS
import EpisodeDetailsHandlers from "../handlers/episode-details.handlers";
// INTERFACES
import { EpisodeDetailsHooType } from "./interfaces/episode-details-hook.interface";
import { PodcastDetailsInfoType } from "../../../interfaces/PodcastDetails.interface";
import { EpisodeDetailsType } from "../../../interfaces/EpisodeDetails.interface";

const useEpisodeDetailsHook = (): EpisodeDetailsHooType => {
  const { id = "", episodeId = "" } = useParams();
  const [podcastDetails, setPodcastDetails] = useState<PodcastDetailsInfoType | null>(null);
  const [episodeDetails, setEpisodeDetails] = useState<EpisodeDetailsType | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    handleGetEpisodeDetails(id, episodeId);
  }, []);

  const { handleGetEpisodeDetails } = EpisodeDetailsHandlers({
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
