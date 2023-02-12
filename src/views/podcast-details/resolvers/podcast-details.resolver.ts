// SERVICES
import { getPodcastDetailsService } from "../services/podcast-details.services";
// INTERFACES

const getPodcastDetailsResolver = async (podcastId: string): Promise<any> => {
  const response = await getPodcastDetailsService(podcastId);
  return response?.contents ? JSON.parse(response.contents)?.results : null;
};

export { getPodcastDetailsResolver };
