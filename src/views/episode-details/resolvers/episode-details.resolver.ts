// SERVICES
import { getEpisodeDetailsService } from "../services/episode-details.services";

const getEpisodeDetailsResolver = async (podcastId: string, episodeId: string): Promise<any> => {
  const response = await getEpisodeDetailsService(podcastId, episodeId);
  return response?.contents ? JSON.parse(response.contents)?.results : null;
};

export { getEpisodeDetailsResolver };
