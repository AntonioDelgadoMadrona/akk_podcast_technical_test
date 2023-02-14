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
  setPodcastDetails,
  setEpisodeDetails,
  setIsFetching,
}: GetEpisodeDetailsHandlerType): Promise<any> => {
  setIsFetching(true);
  const response = await getEpisodeDetailsResolver(podcastId, episodeId);
  if (response) {
    const { artistName, artworkUrl100, collectionId, collectionName }: PodcastDetailsInfoType = response[0];
    setPodcastDetails({
      artistName,
      artworkUrl100,
      collectionId,
      collectionName,
    });
    const { description = "Empty description", previewUrl, trackName, trackId }: EpisodeDetailsType = response[1];
    setEpisodeDetails({
      description,
      previewUrl,
      trackName,
      trackId,
    });
  } else {
    console.error("Error on getEpisodeDetailsHandler()");
  }
  setIsFetching(false);
};

const EpisodeDetailsHandlers = ({
  setPodcastDetails,
  setEpisodeDetails,
  setIsFetching,
}: EpisodeDetailsHandlersType): EpisodeDetailsHandlersReturnType => ({
  handleGetEpisodeDetails: (podcastId, episodeId) =>
    getEpisodeDetailsHandler({ podcastId, episodeId, setPodcastDetails, setEpisodeDetails, setIsFetching }),
});

export default EpisodeDetailsHandlers;
