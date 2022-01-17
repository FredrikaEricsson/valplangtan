import { render, waitFor } from "@testing-library/react";
import axios from "axios";

import PuppyPage from "../pages/puppy";

interface IPuppyResponse {
  birthDate: string;
  ageInWeeks: number;
  name: string;
  updateByWeek: string;
}
jest.mock("axios");

const mockData: IPuppyResponse = {
  birthDate: "2021-12-12",
  ageInWeeks: 4,
  name: "Ada",
  updateByWeek: "Valpen är större",
};

test("Render puppy name and age in welcome message", async () => {
  axios.get = jest.fn().mockResolvedValue({ data: mockData });
  const { getByText } = render(<PuppyPage />);

  await waitFor(() => {
    let welcomeMessage = getByText(/Din valp Ada är inne i vecka 4/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
