import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import Header from "@/components/Header";

expect.extend(matchers);

test("Home", () => {
  render(<Header />);

  // find a role
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // button's color is red
  expect(colorButton).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
});
