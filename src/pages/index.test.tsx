import { render, screen } from "@testing-library/react";
import Home from ".";

describe("Home", () => {
  it("Should render a component with the given text", () => {
    render(<Home />);
    const text = screen.getByText(
      "Learn more about Create T3 App, the libraries it uses, and how to deploy it.",
    );
    expect(text).toBeInTheDocument();
  });

  it("Should render conditional text if prop is true", () => {
    render(<Home conditionalText={true} />);
    const text = screen.getByText("Conditional text!");
    expect(text).toBeInTheDocument();
  });

  it("Should not render conditional text if prop is false or undefined", () => {
    render(<Home />);
    let notExist = false;
    try {
      screen.getByText("Conditional text!");
    } catch (error) {
      notExist = true;
    }
    expect(notExist).toEqual(true);
  });
});
