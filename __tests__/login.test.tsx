import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../components/login";

test("Login button is disabled when inputs are empty", () => {
  render(<Login />);
  let emailInput = screen.getByTestId("emailInput") as HTMLInputElement;
  let passwordInput = screen.getByTestId("passwordInput") as HTMLInputElement;
  let loginButton = screen.getByRole("button");
  expect(emailInput).toHaveValue("");
  expect(passwordInput).toHaveValue("");
  expect(loginButton).toBeDisabled;
});

test("Login button is enabled when email and password are correctly filled in", () => {
  render(<Login />);
  userEvent.type(screen.getByTestId("emailInput"), "email@email.se");
  userEvent.type(screen.getByTestId("passwordInput"), "password");
  let loginButton = screen.getByRole("button");
  expect(loginButton).toBeEnabled;
});
