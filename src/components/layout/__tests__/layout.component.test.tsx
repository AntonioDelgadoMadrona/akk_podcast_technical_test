// DEPENDENCIES
import React from "react";
import { render, screen } from "../../../utils/test-utils";
// COMPONENTS
import Layout from "../layout.component";
// MOCKS
jest.mock('react-router-dom');

describe("Layout component", () => {
  it("should render", () => {
    render(
      <Layout>
        <div>test</div>
      </Layout>
    );
    expect(screen.getByTestId("layout-component")).toBeTruthy();
    expect(screen.getByTestId("header-component")).toBeTruthy();
    expect(screen.getByText("test")).toBeTruthy();
    expect(screen.getByTestId("footer-component")).toBeTruthy();
  });
});
