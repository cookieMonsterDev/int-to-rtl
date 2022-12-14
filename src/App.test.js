import { render, screen, fireEvent } from "@testing-library/react";
import { App, replaceCamelWithSpaces } from "./App";

test("init conditions", () => {
  render(<App />);

  const Button = screen.getByRole("button", { name: "Change to blue" });
  const CheckBox = screen.getByRole("checkbox");

  //check that button is enabled
  expect(Button).toBeEnabled();

  //chack that the checkbox is unchecked
  expect(CheckBox).not.toBeChecked();
});

test("button has the correct init color, and updatest whan clicks", () => {
  render(<App />);

  const Button = screen.getByRole("button", { name: "Change to blue" });

  expect(Button).toHaveClass("button");
  fireEvent.click(Button);

  expect(Button).toHaveClass("button isOn");
  expect(Button).toHaveTextContent("Change to red");
});

test("button should be disbled when checkbox is checked", () => {
  render(<App />);

  const Button = screen.getByRole("button", { name: "Change to blue" });
  const CheckBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(CheckBox);
  expect(Button).toBeDisabled();

  fireEvent.click(CheckBox);
  expect(Button).toBeEnabled();
});

test("Disabled button has gary color and reverts to red", () => {
  render(<App />);

  const Button = screen.getByRole("button", { name: "Change to blue" });
  const CheckBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(CheckBox);
  expect(Button).toBeDisabled();
  expect(Button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(CheckBox);
  expect(Button).toBeEnabled();
  expect(Button).toHaveClass("button");
});

test("Disabled button has gary color and reverts to blue", () => {
  render(<App />);

  const Button = screen.getByRole("button", { name: "Change to blue" });
  const CheckBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(Button);
  fireEvent.click(CheckBox);
  expect(Button).toBeDisabled();
  expect(Button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(CheckBox);
  expect(Button).toBeEnabled();
  expect(Button).toHaveClass("button isOn");
});

/////////////////////////////////////////////////////

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letter", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlueTest")).toBe(
      "Midnight Blue Test"
    );
  });
});
