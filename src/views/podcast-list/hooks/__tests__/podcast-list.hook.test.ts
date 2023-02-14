// DEPENDENCIES
import { renderHook } from "../../../../utils/test-utils";
// CONTEXT
import { useAppContext } from "../../../../context/app.context";
// HOOK
import usePodcastListHook from "../podcast-list.hook";
// HANDLERS
import PodcastListHandlers from "../../handlers/podcast-list.handlers";
// MOCKS
jest.mock("../../handlers/podcast-list.handlers");
jest.mock("../../../../context/app.context");

describe("Podcast List Hook", () => {
  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({
      setPodcastListStoraged: jest.fn(),
      podcastListStoraged: {
        updatedAt: "2021-01-01T00:00:00.000Z",
        content: [],
      },
    });
    (PodcastListHandlers as jest.Mock).mockReturnValue({
      handleGetPodcastList: jest.fn(),
      handleFilterPodcastList: jest.fn(),
    });
  });

  it("should provide the hook data", () => {
    const hookReturnProps = [
      "handleFilterPodcastList",
      "podcastList",
      "isFetching",
      "filteredPodcastList",
      "isFiltering",
    ];
    const { result } = renderHook(() => usePodcastListHook());

    const keys = Object.keys(result.current);
    expect(keys.length).toBe(hookReturnProps.length);
    hookReturnProps.forEach((data) => expect(keys.includes(data)));
  });
});
