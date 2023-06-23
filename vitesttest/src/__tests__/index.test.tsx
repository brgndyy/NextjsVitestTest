import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import Header from "@/components/Header";

expect.extend(matchers);

test("button has correct initial color, and updates when clicked", () => {
  render(<Header />);

  // find a role
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // button's color is red
  expect(colorButton).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" });

  // expect the button text to be 'Change to red'

  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", async () => {
  render(<Header />);

  // check that the button starts out enabled
  const colorBtn = await screen.findByRole("button", {
    name: "Change to blue",
  });
  expect(colorBtn).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
