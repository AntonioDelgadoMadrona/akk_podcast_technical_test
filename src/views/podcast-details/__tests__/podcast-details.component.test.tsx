// DEPENDENCIES
import React from "react";
import { render, screen } from "../../../utils/test-utils";
// HOOKS
import usePodcastDetailsHook from "../hooks/podcast-details.hook";
// COMPONENTS
import PodcastDetails from "../podcast-details.component";
// MOCKS
jest.mock("../hooks/podcast-details.hook");

describe("PodcastDetails component", () => {
  beforeEach(() => {
    (usePodcastDetailsHook as jest.Mock).mockReturnValue({
      podcastDetails: {
        id: "1",
        title: "title",
        description: "description",
        image: "https://image.com",
      },
      episodeList: [
        {
          trackId: "1",
          trackName: "trackName",
        },
      ],
      isFetching: true,
      podcastId: "1",
    });
  });

  it("should render", () => {
    render(<PodcastDetails />);
    expect(screen.getByTestId("podcast-details-component")).toBeTruthy();
    expect(screen.getByTestId("loader-component")).toBeTruthy();
  });
});
