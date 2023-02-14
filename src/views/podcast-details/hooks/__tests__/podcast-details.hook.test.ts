// DEPENDENCIES
import { renderHook } from "../../../../utils/test-utils";
// HOOK
import usePodcastDetailsHook from "../podcast-details.hook";
// HANDLERS
import PodcastDetailsHandlers from "../../handlers/podcast-details.handlers";
// MOCKS
jest.mock("../../handlers/podcast-details.handlers");

describe("Podcast Details Hook", () => {
  beforeEach(() => {
    (PodcastDetailsHandlers as jest.Mock).mockReturnValue({
      handleGetPodcastDetails: jest.fn(),
    });
  });

  it("should provide the hook data", () => {
    const hookReturnProps = ["podcastDetails", "episodeList", "isFetching", "podcastId"];
    const { result } = renderHook(() => usePodcastDetailsHook());

    const keys = Object.keys(result.current);
    expect(keys.length).toBe(hookReturnProps.length);
    hookReturnProps.forEach((data) => expect(keys.includes(data)));
  });
});
