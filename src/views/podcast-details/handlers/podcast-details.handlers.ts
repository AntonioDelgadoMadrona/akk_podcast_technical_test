import { PodcastDetailsInfoType, PodcastDetailsEpisodeType } from "./../../../interfaces/PodcastDetails.interface";
// RESOLVERS
import { getPodcastDetailsResolver } from "../resolvers/podcast-details.resolver";
// INTERFACES
import {
  PodcastDetailsHandlersType,
  PodcastDetailsHandlersReturnType,
} from "./interfaces/podcast-details.handlers.interface";
import { GetPodcastDetailsHandlerType } from "./interfaces/get-podcast-list-handler.interface";

const getPodcastDetailsHandler = async ({
  podcastId,
  setPodcastDetails,
  setIsFetching,
}: GetPodcastDetailsHandlerType): Promise<any> => {
  setIsFetching(true);
  const response = await getPodcastDetailsResolver(podcastId);
  if (response) {
    const podcastDetails: PodcastDetailsInfoType = response[0];
    const podcastEpisodes: PodcastDetailsEpisodeType[] = response.slice(1);
    setPodcastDetails({
      details: { ...podcastDetails },
      episodes: [...podcastEpisodes],
    });
  } else {
    // setError();
  }
  setIsFetching(false);
};

const PodcastDetailsHandlers = ({
  setPodcastDetails,
  setIsFetching,
}: PodcastDetailsHandlersType): PodcastDetailsHandlersReturnType => ({
  handleGetPodcastDetails: (podcastId) => getPodcastDetailsHandler({ podcastId, setPodcastDetails, setIsFetching }),
});

export default PodcastDetailsHandlers;
