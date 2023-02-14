// DEPENDENCIES
import { renderHook } from "../../../../utils/test-utils";
// CONTEXT
import { useAppContext } from "../../../../context/app.context";
// HOOK
import usePodcastDetailsHook from "../podcast-details.hook";
// HANDLERS
import PodcastDetailsHandlers from "../../handlers/podcast-details.handlers";
// MOCKS
jest.mock("../../handlers/podcast-details.handlers");
jest.mock("../../../../context/app.context");

describe("Podcast Details Hook", () => {
  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({
      setPodcastDetailStoraged: jest.fn(),
      podcastDetailStoraged: {
        updatedAt: "2021-01-01T00:00:00.000Z",
        content: {},
      },
    });
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
