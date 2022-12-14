import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("init conditions", () => {
  render(<App />)

  const Button = screen.getByRole("button", { name: "Change to blue"});
  const CheckBox = screen.getByRole("checkbox");

  //check that button is enabled
  expect(Button).toBeEnabled();

  //chack that the checkbox is unchecked
  expect(CheckBox).not.toBeChecked
});

test("button has the correct init color, and updatest whan clicks", () => {
  render(<App />);

  // find an element with role of button and text "Change to blue"
  const Button = screen.getByRole("button", { name: "Change to blue" });

  //expect the background to be red
  expect(Button).toHaveStyle({ backgroundColor: "red" });

  //Click button
  fireEvent.click(Button)

  //expect the background to be blue
  expect(Button).toHaveStyle({backgroundColor: "blue"})

  //expect to have text content "Change to red"
  expect(Button).toHaveTextContent("Change to red")
});

test("button should be disbled when checkbox is checked", () => {
  render(<App />)

  const Button = screen.getByRole("button", { name: "Change to blue"});
  const CheckBox = screen.getByRole("checkbox");

  //Toggle checkbox
  fireEvent.click(CheckBox)

  //check that button is disabled
  expect(Button).toBeDisabled();

  //Toggle checkbox
  fireEvent.click(CheckBox);

  //chexk that butto is enabled
  expect(Button).toBeEnabled()
});
