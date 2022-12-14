import { render, screen, fireEvent } from "@testing-library/react";
import { ColorButton, replaceCamelWithSpaces } from "./ColorButton";

test("init conditions", () => {
  render(<ColorButton />);

  const Button = screen.getByRole("button", { name: "Change to blue" });
  const CheckBox = screen.getByRole("checkbox");

  //check that button is enabled
  expect(Button).toBeEnabled();

  //chack that the checkbox is unchecked
  expect(CheckBox).not.toBeChecked();
});

test("button has the correct init color, and updatest whan clicks", () => {
  render(<ColorButton />);

  const Button = screen.getByRole("button", { name: "Change to blue" });

  expect(Button).toHaveClass("btn");
  fireEvent.click(Button);

  expect(Button).toHaveClass("btn isOn");
  expect(Button).toHaveTextContent("Change to red");
});

test("button should be disbled when checkbox is checked", () => {
  render(<ColorButton />);

  const Button = screen.getByRole("button", { name: "Change to blue" });
  const CheckBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(CheckBox);
  expect(Button).toBeDisabled();

  fireEvent.click(CheckBox);
  expect(Button).toBeEnabled();
});

test("Disabled button has gary color and reverts to red", () => {
  render(<ColorButton />);

  const Button = screen.getByRole("button", { name: "Change to blue" });
  const CheckBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(CheckBox);
  expect(Button).toBeDisabled();
  expect(Button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(CheckBox);
  expect(Button).toBeEnabled();
  expect(Button).toHaveClass("btn");
});

test("Disabled button has gary color and reverts to blue", () => {
  render(<ColorButton />);

  const Button = screen.getByRole("button", { name: "Change to blue" });
  const CheckBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(Button);
  fireEvent.click(CheckBox);
  expect(Button).toBeDisabled();
  expect(Button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(CheckBox);
  expect(Button).toBeEnabled();
  expect(Button).toHaveClass("btn isOn");
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
