// DEPENDENCIES
import { getPodcastListService } from "../podcast-list.services";
// UTILS
import apiUtils from "../../../../utils/apiUtils";
// MOCKS
jest.mock("../../../../utils/apiUtils");

describe("Podcast List Services", () => {
  it("should get podcast list", async () => {
    await getPodcastListService();
    expect(apiUtils.get).toHaveBeenCalled();
    expect(apiUtils.get).toHaveBeenCalledWith({
      endpoint: "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
    });
  });
});
