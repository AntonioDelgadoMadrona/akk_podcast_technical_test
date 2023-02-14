// DEPENDENCIES
import { getPodcastDetailsService } from "../podcast-details.services";
// UTILS
import apiUtils from "../../../../utils/apiUtils";
// MOCKS
jest.mock("../../../../utils/apiUtils");

describe("Podcast Details Services", () => {
  it("should get podcast details", async () => {
    await getPodcastDetailsService("1");
    expect(apiUtils.get).toHaveBeenCalled();
    expect(apiUtils.get).toHaveBeenCalledWith({
      endpoint:
        "https://itunes.apple.com/lookup?id=1&media=podcast&attributes=all&entity=podcastEpisode&limit=10&sort=recent",
    });
  });
});
