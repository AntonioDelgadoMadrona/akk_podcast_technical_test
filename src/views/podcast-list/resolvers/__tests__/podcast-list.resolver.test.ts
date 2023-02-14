// DEPENDENCIES
import { getPodcastListResolver } from "../podcast-list.resolver";
import { getPodcastListService } from "../../services/podcast-list.services";
// MOCKS
jest.mock("../../services/podcast-list.services");

// TESTS
describe("Podcast List Resolver", () => {
  const mockedResponse: any = {
    contents: {
      feed: {
        entry: [
          {
            category: {
              attributes: {
                label: "Comedy",
              },
            },
            id: {
              attributes: {
                "im:id": "123456",
              },
            },
            "im:artist": {
              label: "Joe Rogan",
            },
            "im:image": {
              label: "http://image.com",
            },
            "im:name": {
              label: "The Joe Rogan Experience",
            },
          },
        ],
      },
    },
  };

  beforeEach(() => {
    (getPodcastListService as jest.Mock).mockReturnValue({ contents: JSON.stringify(mockedResponse.contents) });
  });

  it("should get podcast list", async () => {
    const response = await getPodcastListResolver();
    expect(response).toEqual(mockedResponse.contents.feed);
  });
});
