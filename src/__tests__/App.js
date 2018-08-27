import React from "react";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";
import App from "../App";

describe("The App Component", () => {
  it("renders as expected", () => {
    const tree = renderer.create(<App />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });

  it("renders welcome message", () => {
    const { getByText } = render(<App />);
    expect(getByText("Welcome to React")).toBeInTheDocument();
  });
});
