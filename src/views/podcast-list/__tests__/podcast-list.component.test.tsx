// DEPENDENCIES
import React from "react";
import { render, screen } from "../../../utils/test-utils";
// HOOKS
import usePodcastListHook from "../hooks/podcast-list.hook";
// COMPONENTS
import PodcastList from "../podcast-list.component";
// MOCKS
jest.mock("../hooks/podcast-list.hook");

describe("PodcastList component", () => {
  beforeEach(() => {
    (usePodcastListHook as jest.Mock).mockReturnValue({
      handleFilterPodcastList: jest.fn(),
      podcastList: [],
      isFetching: true,
      filteredPodcastList: [],
      isFiltering: false,
    });
  });

  it("should render", () => {
    render(<PodcastList />);
    expect(screen.getByTestId("podcast-list-component")).toBeTruthy();
    expect(screen.getByTestId("search-bar-component")).toBeTruthy();
    expect(screen.getByTestId("loader-component")).toBeTruthy();
  });
});
