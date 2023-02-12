// UTILS
import apiUtils from "../../../utils/apiUtils";

const getPodcastDetailsService = (podcastId: string): Promise<any> =>
  apiUtils.get({
    endpoint: `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&attributes=all&entity=podcastEpisode&limit=10&sort=recent`,
  });

export { getPodcastDetailsService };
