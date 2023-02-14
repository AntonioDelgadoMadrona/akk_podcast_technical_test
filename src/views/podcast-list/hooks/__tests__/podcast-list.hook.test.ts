// DEPENDENCIES
import { renderHook } from "../../../../utils/test-utils";
// HOOK
import usePodcastListHook from "../podcast-list.hook";
// HANDLERS
import PodcastListHandlers from "../../handlers/podcast-list.handlers";
// MOCKS
jest.mock("../../handlers/podcast-list.handlers");

describe("Podcast List Hook", () => {
  beforeEach(() => {
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
