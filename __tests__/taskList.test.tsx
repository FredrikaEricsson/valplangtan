import { render, screen } from "@testing-library/react";

import TaskList from "../components/taskList";

interface ITask {
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
interface ITaskListProps {
  tasks: ITask[];
  puppyAge: number;
}

const mockProps: ITaskListProps = {
  tasks: [
    {
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
    },
  ],
  puppyAge: 2,
};

test("Previous tasks title displayed when puppy is over 2 weeks old", () => {
  render(<TaskList {...mockProps} changeTaskStatus={jest.fn} />);
  let previousTasksTitle = screen.getByText("Föregående veckor");
  expect(previousTasksTitle).toBeInTheDocument;
});
