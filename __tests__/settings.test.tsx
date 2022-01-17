import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";

import SettingsPage from "../pages/settings";

interface IUserResponse {
  id: string;
  userName: string;
  email: string;
  puppy: { name: string; birthDate: string };
}
jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

const mockData: IUserResponse = {
  id: "1",
  userName: "Fredrika",
  email: "email@email.com",
  puppy: { name: "Ada", birthDate: "2020-12-12" },
};

test("Render username in input onload", async () => {
  axios.get = jest.fn().mockResolvedValue({ data: mockData });
  const { getByDisplayValue } = render(<SettingsPage />);

  await waitFor(() => {
    let input = getByDisplayValue(/Fredrika/i);
    expect(input).toBeInTheDocument();
  });
});
