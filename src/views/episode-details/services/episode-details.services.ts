// UTILS
import apiUtils from "../../../utils/apiUtils";

const getEpisodeDetailsService = (podcastId: string, episodeId: string): Promise<any> =>
  apiUtils.get({
    endpoint: `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&attributes=all&entity=podcastEpisode&limit=10&sort=recent&episodeId=${episodeId}`,
  });

export { getEpisodeDetailsService };
