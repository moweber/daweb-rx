import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Project from "..";

afterEach(cleanup);

describe("Project is rendering", () => {
  it("renders", () => {
    render(<Project />);
  });

  it("renders", () => {
    const { asFragment } = render(<Project />);
    expect(asFragment()).toMatchSnapshot();
  });
});
