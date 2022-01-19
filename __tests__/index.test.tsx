import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

test("Welcome message is displayed onload", () => {
  render(<Index />);
  let welcomeMessage = screen.getByText(/Välkommen till valplängtan/i);
  expect(welcomeMessage).toBeInTheDocument;
});
