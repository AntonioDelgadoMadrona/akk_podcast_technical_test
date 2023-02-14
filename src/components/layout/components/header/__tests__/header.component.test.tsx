// DEPENDENCIES
import React from "react";
import { render, screen } from "../../../../../utils/test-utils";
// COMPONENTS
import Header from "../header.component";
// MOCKS
jest.mock("react-router-dom");

describe("Header component", () => {
  it("should render", () => {
    render(<Header />);
    expect(screen.getByTestId("header-component")).toBeTruthy();
    expect(screen.getByTestId("nav-menu")).toBeTruthy();
  });
});
