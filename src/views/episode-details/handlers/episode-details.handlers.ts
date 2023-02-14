// RESOLVERS
import { getEpisodeDetailsResolver } from "../resolvers/episode-details.resolver";
// INTERFACES
import {
  EpisodeDetailsHandlersType,
  EpisodeDetailsHandlersReturnType,
} from "./interfaces/episode-details.handlers.interface";
import { GetEpisodeDetailsHandlerType } from "./interfaces/get-episode-details-handler.interface";
import { EpisodeDetailsType } from "../../../interfaces/EpisodeDetails.interface";
import { PodcastDetailsInfoType } from "../../../interfaces/PodcastDetails.interface";

const getEpisodeDetailsHandler = async ({
  podcastId,
  episodeId,
  setEpisodeDetailsStoraged,
  setPodcastDetails,
  setEpisodeDetails,
  setIsFetching,
}: GetEpisodeDetailsHandlerType): Promise<any> => {
  setIsFetching(true);
  const response = await getEpisodeDetailsResolver(podcastId, episodeId);
  if (response) {
    const { artistName, artworkUrl100, collectionId, collectionName }: PodcastDetailsInfoType = response[0];
    const podcastDetails = { artistName, artworkUrl100, collectionId, collectionName };
    setPodcastDetails({ ...podcastDetails });
    const {
      description = "Empty description",
      previewUrl,
      trackName,
      trackId,
    } = response.find((episode: EpisodeDetailsType) => episode.trackId === Number(episodeId));
    const episodeDetails = { description, previewUrl, trackName, trackId };
    setEpisodeDetails({ ...episodeDetails });
    setEpisodeDetailsStoraged({
      content: {
        podcastDetails: { ...podcastDetails },
        episodeDetails: { ...episodeDetails },
      },
    });
  } else {
    console.error("Error on getEpisodeDetailsHandler()");
  }
  setIsFetching(false);
};

const EpisodeDetailsHandlers = ({
  setEpisodeDetailsStoraged,
  setPodcastDetails,
  setEpisodeDetails,
  setIsFetching,
}: EpisodeDetailsHandlersType): EpisodeDetailsHandlersReturnType => ({
  handleGetEpisodeDetails: (podcastId, episodeId) =>
    getEpisodeDetailsHandler({
      podcastId,
      episodeId,
      setEpisodeDetailsStoraged,
      setPodcastDetails,
      setEpisodeDetails,
      setIsFetching,
    }),
});

export default EpisodeDetailsHandlers;
