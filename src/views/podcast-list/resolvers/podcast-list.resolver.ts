// SERVICES
import { getPodcastListService } from "../services/podcast-list.services";

const getPodcastListResolver = async (): Promise<any> => {
  const response = await getPodcastListService();
  return response?.contents ? JSON.parse(response.contents)?.feed : null;
};

export { getPodcastListResolver };
