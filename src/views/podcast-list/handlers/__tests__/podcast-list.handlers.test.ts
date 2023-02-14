// HANDLERS
import PodcastListHandlers from "../podcast-list.handlers";
// RESOLVERS
import { getPodcastListResolver } from "../../resolvers/podcast-list.resolver";
import { PodcastListItemType } from "../../../../interfaces/PodcastListItem.interface";
// MOCKS
jest.mock("../../resolvers/podcast-list.resolver");

describe("Podcast List Handlers", () => {
  const mockedResponse: any = {
    entry: [
      {
        id: {
          attributes: {
            "im:id": "123456",
          },
        },
        "im:artist": {
          label: "Joe Rogan",
        },
        "im:image": [
          {
            label: "http://image.com",
          },
        ],
        "im:name": {
          label: "The Joe Rogan Experience",
        },
      },
    ],
  };
  const mockedResponseUpdated: PodcastListItemType[] = [
    {
      id: "123456",
      artistName: "Joe Rogan",
      image: "http://image.com",
      name: "The Joe Rogan Experience",
    },
  ];

  beforeEach(() => {
    (getPodcastListResolver as jest.Mock).mockReturnValue(mockedResponse);
  });

  const params = {
    setPodcastListStoraged: jest.fn(),
    setPodcastList: jest.fn(),
    setIsFetching: jest.fn(),
    setFilteredPodcastList: jest.fn(),
    setIsFiltering: jest.fn(),
    podcastList: [],
  };

  const handlers = PodcastListHandlers(params);

  it("should handle get podcast list", async () => {
    await handlers.handleGetPodcastList();
    expect(params.setIsFetching).toHaveBeenCalled();
    expect(params.setIsFetching).toHaveBeenCalledWith(true);
    expect(params.setPodcastList).toHaveBeenCalled();
    expect(params.setPodcastList).toHaveBeenCalledWith(mockedResponseUpdated);
    expect(params.setPodcastListStoraged).toHaveBeenCalled();
    expect(params.setPodcastListStoraged).toHaveBeenCalledWith({ content: mockedResponseUpdated });
    expect(params.setIsFetching).toHaveBeenCalledWith(false);
  });

  it("should handle filter podcast list", () => {
    const event: any = {
      target: {
        value: "Joe Rogan",
      },
    };
    const podcastListHandlers = PodcastListHandlers({ ...params, podcastList: mockedResponseUpdated });
    podcastListHandlers.handleFilterPodcastList(event);
    expect(params.setIsFiltering).toHaveBeenCalled();
    expect(params.setIsFiltering).toHaveBeenCalledWith(true);
    expect(params.setFilteredPodcastList).toHaveBeenCalled();
    expect(params.setFilteredPodcastList).toHaveBeenCalledWith(mockedResponseUpdated);
  });
});
