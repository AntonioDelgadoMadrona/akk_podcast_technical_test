// RESOLVERS
import { getPodcastDetailsResolver } from "../resolvers/podcast-details.resolver";
// INTERFACES
import {
  PodcastDetailsHandlersType,
  PodcastDetailsHandlersReturnType,
} from "./interfaces/podcast-details.handlers.interface";
import { GetPodcastDetailsHandlerType } from "./interfaces/get-podcast-list-handler.interface";
import { PodcastDetailsInfoType, PodcastDetailsEpisodeType } from "./../../../interfaces/PodcastDetails.interface";

const getPodcastDetailsHandler = async ({
  podcastId,
  setPodcastDetails,
  setEpisodeList,
  setIsFetching,
}: GetPodcastDetailsHandlerType): Promise<any> => {
  setIsFetching(true);
  const response = await getPodcastDetailsResolver(podcastId);
  if (response) {
    const { artistName, artworkUrl100, collectionId, collectionName }: PodcastDetailsInfoType = response[0];
    setPodcastDetails({
      artistName,
      artworkUrl100,
      collectionId,
      collectionName,
    });
    const podcastEpisodes: PodcastDetailsEpisodeType[] = response.slice(1).map((episode: PodcastDetailsEpisodeType) => {
      const { trackName, trackId, releaseDate, duration = 10 } = episode;
      return { trackId, trackName, releaseDate, duration };
    });
    setEpisodeList([...podcastEpisodes]);
  } else {
    // setError();
  }
  setIsFetching(false);
};

const PodcastDetailsHandlers = ({
  setPodcastDetails,
  setEpisodeList,
  setIsFetching,
}: PodcastDetailsHandlersType): PodcastDetailsHandlersReturnType => ({
  handleGetPodcastDetails: (podcastId) =>
    getPodcastDetailsHandler({ podcastId, setPodcastDetails, setEpisodeList, setIsFetching }),
});

export default PodcastDetailsHandlers;
