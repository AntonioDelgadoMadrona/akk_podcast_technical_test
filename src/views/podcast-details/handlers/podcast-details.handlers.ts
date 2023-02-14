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
  setPodcastDetailStoraged,
  setPodcastDetails,
  setEpisodeList,
  setIsFetching,
}: GetPodcastDetailsHandlerType): Promise<any> => {
  setIsFetching(true);
  const response = await getPodcastDetailsResolver(podcastId);
  if (response) {
    const { artistName, artworkUrl100, collectionId, collectionName }: PodcastDetailsInfoType = response[0];
    const podcastDetails: PodcastDetailsInfoType = {
      artistName,
      artworkUrl100,
      collectionId,
      collectionName,
    };
    setPodcastDetails({ ...podcastDetails });
    const episodeList: PodcastDetailsEpisodeType[] = response.slice(1).map((episode: PodcastDetailsEpisodeType) => {
      const { trackName, trackId, releaseDate, duration = 10 } = episode;
      return { trackId, trackName, releaseDate, duration };
    });
    setEpisodeList([...episodeList]);
    setPodcastDetailStoraged({
      content: {
        details: podcastDetails,
        episodes: episodeList,
      },
    });
  } else {
    console.error("Error on getPodcastDetailsHandler()");
  }
  setIsFetching(false);
};

const PodcastDetailsHandlers = ({
  setPodcastDetailStoraged,
  setPodcastDetails,
  setEpisodeList,
  setIsFetching,
}: PodcastDetailsHandlersType): PodcastDetailsHandlersReturnType => ({
  handleGetPodcastDetails: (podcastId) =>
    getPodcastDetailsHandler({ podcastId, setPodcastDetailStoraged, setPodcastDetails, setEpisodeList, setIsFetching }),
});

export default PodcastDetailsHandlers;
