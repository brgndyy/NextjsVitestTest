import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import Home from "@/app/page";

expect.extend(matchers);

test("Home", () => {
  render(<Home />);

  // find a role
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // button's color is red
  expect(colorButton).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
});
