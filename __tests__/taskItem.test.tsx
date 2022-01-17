import { render, waitFor, screen } from "@testing-library/react";
import { InputHTMLAttributes } from "react";
import { InputType } from "zlib";

import TaskItem from "../components/taskItem";

interface ITaskProps {
  _id: string;
  week: number;
  isDone: boolean;
  title: string;
  slides: [
    {
      _id: string;
      description: string;
    }
  ];
}

const mockData: ITaskProps = {
  _id: "1",
  week: 1,
  isDone: true,
  title: "Titel",
  slides: [
    {
      _id: "1",
      description: "Innehåll",
    },
  ],
};

test("checkbox is checked when task isDone", () => {
  render(<TaskItem {...mockData} changeTaskStatus={jest.fn} />);

  let checkbox = screen.getByTestId("checkbox") as HTMLInputElement;
  expect(checkbox.checked).toEqual(true);
});
