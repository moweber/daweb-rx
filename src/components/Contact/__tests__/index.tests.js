import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact component renders", () => {
  it("renders", () => {
    render(<ContactForm />);
  });

  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it("inserts text into form button", () => {
  const { getByTestId } = render(<ContactForm />);
  expect(getByTestId("button")).toHaveTextContent("Submit");
});
