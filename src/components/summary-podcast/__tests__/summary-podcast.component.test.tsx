// DEPENDENCIES
import React from "react";
import { render, screen } from "../../../utils/test-utils";
// COMPONENTS
import SummaryPodcast from "../summary-podcast.component";
// MOCKS
jest.mock("react-router-dom", () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

describe("SummaryPodcast component", () => {
  const mockDetails = {
    artistName: "artistName",
    collectionId: 12345,
    collectionName: "collectionName",
    artworkUrl100: "artworkUrl100",
  };
  it("should render", () => {
    render(<SummaryPodcast details={mockDetails} />);
    expect(screen.getByTestId("summary-podcast-component")).toBeTruthy();
    expect(screen.getByTestId("summary-podcast-component").querySelector("img")).toBeTruthy();
    expect(screen.getByTestId("summary-podcast-component").querySelector("h5")).toBeTruthy();
    expect(screen.getByTestId("summary-podcast-component").querySelector("p")).toBeTruthy();
  });
});
