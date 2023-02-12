// UTILS
import apiUtils from "../../../utils/apiUtils";

const getPodcastListService = (): Promise<any> =>
  apiUtils.get({
    endpoint: "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
  });

export { getPodcastListService };
