// DEPENDENCIES
import { getPodcastDetailsResolver } from "../podcast-details.resolver";
import { getPodcastDetailsService } from "../../services/podcast-details.services";
// MOCKS
jest.mock("../../services/podcast-details.services");

describe("Podcast Details Resolver", () => {
  const mockedResponse: any = {
    contents: {
      results: [
        {
          artistName: "Joe Rogan",
          artworkUrl100: "http://image.com",
          collectionId: "123456",
          collectionName: "The Joe Rogan Experience",
        },
        {
          trackName: "Joe Rogan Experience #1234",
          trackId: "123456",
          releaseDate: "2020-01-01",
          duration: 10,
        },
      ],
    },
  };

  beforeEach(() => {
    (getPodcastDetailsService as jest.Mock).mockReturnValue({ contents: JSON.stringify(mockedResponse.contents) });
  });

  it("should get podcast list", async () => {
    const response = await getPodcastDetailsResolver("1");
    expect(response).toEqual(mockedResponse.contents.results);
  });
});
