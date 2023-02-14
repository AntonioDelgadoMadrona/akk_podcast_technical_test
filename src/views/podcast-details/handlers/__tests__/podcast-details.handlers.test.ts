// HANDLERS
import PodcastDetailsHandlers from "../podcast-details.handlers";
// RESOLVERS
import { getPodcastDetailsResolver } from "../../resolvers/podcast-details.resolver";
// MOCKS
jest.mock("../../resolvers/podcast-details.resolver");

describe("Podcast Details Handlers", () => {
  const mockedResponse = [
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
  ];

  beforeEach(() => {
    (getPodcastDetailsResolver as jest.Mock).mockReturnValue(mockedResponse);
  });

  const params = {
    setPodcastDetailStoraged: jest.fn(),
    setPodcastDetails: jest.fn(),
    setEpisodeList: jest.fn(),
    setIsFetching: jest.fn(),
  };

  const handlers = PodcastDetailsHandlers(params);

  it("should handle get podcast details", async () => {
    await handlers.handleGetPodcastDetails("1");
    expect(params.setIsFetching).toHaveBeenCalled();
    expect(params.setIsFetching).toHaveBeenCalledWith(true);
    expect(params.setPodcastDetails).toHaveBeenCalled();
    expect(params.setPodcastDetails).toHaveBeenCalledWith(mockedResponse[0]);
    expect(params.setEpisodeList).toHaveBeenCalled();
    expect(params.setEpisodeList).toHaveBeenCalledWith([mockedResponse[1]]);
    expect(params.setPodcastDetailStoraged).toHaveBeenCalled();
    expect(params.setPodcastDetailStoraged).toHaveBeenCalledWith({
      content: {
        details: mockedResponse[0],
        episodes: [mockedResponse[1]],
      },
    });
    expect(params.setIsFetching).toHaveBeenCalledWith(false);
  });
});
