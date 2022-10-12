import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "..";

const mockCSection = "about";
const mockSetCSection = jest.fn();

afterEach(cleanup);

describe("Nav component renders", () => {
  it("renders", () => {
    render(<Navbar cSection={mockCSection} setCSection={mockSetCSection} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Navbar cSection={mockCSection} setCSection={mockSetCSection} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Developer's name present", () => {
  it("inserts text into Brand", () => {
    const { getByTestId } = render(
      <Navbar cSection={mockCSection} setCSection={mockSetCSection} />
    );

    expect(getByTestId("developer")).toHaveTextContent("Matt Weber");
  });
});

describe("Links are visible", () => {
  it("inserts text into the links", () => {
    const { getByTestId } = render(
      <Navbar cSection={mockCSection} setCSection={mockSetCSection} />
    );

    expect(getByTestId("about")).toHaveTextContent("About");
    expect(getByTestId("portfolio")).toHaveTextContent("Portfolio");
    expect(getByTestId("contact")).toHaveTextContent("Contact");
    expect(getByTestId("resume")).toHaveTextContent("Resume");
  });
});
