import { ChangeEvent, useEffect, useState } from "react";
import {
  CurrentTaskListContainer,
  PrevTaskListContainer,
} from "../styles/checkList";
import { Headline } from "../styles/global";

import TaskItem from "./taskItem";

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
  changeTaskStatus(editedTask: { id: string; isDone: boolean }): void;
}

const TaskList = (props: ITaskListProps) => {
  const [currentTasks, setCurrentTasks] = useState<ITask[]>([]);
  const [previousTasks, setPreviousTasks] = useState<ITask[]>([]);
  const [showSlides, setShowSlides] = useState<boolean>(false);

  const toggleSlides = () => {
    setShowSlides(!showSlides);
  };

  useEffect(() => {
    let filteredCurrentTasks = props.tasks.filter((task) => {
      return task.week === props.puppyAge;
    });
    setCurrentTasks(filteredCurrentTasks);

    let filteredPreviousTasks = props.tasks.filter((task) => {
      return task.week < props.puppyAge;
    });

    setPreviousTasks(filteredPreviousTasks);
  }, [props.puppyAge, props.tasks]);

  return (
    <>
      <CurrentTaskListContainer>
        <Headline>Veckans checklista</Headline>
        <div>
          {currentTasks.map((currentTask) => {
            return (
              <div key={currentTask._id}>
                <TaskItem
                  _id={currentTask._id}
                  week={currentTask.week}
                  isDone={currentTask.isDone}
                  title={currentTask.title}
                  slides={currentTask.slides}
                  changeTaskStatus={props.changeTaskStatus}
                ></TaskItem>
              </div>
            );
          })}
        </div>
      </CurrentTaskListContainer>
      <PrevTaskListContainer>
        <Headline>Föregående veckor</Headline>
        <div>
          {previousTasks.map((previousTask) => {
            return (
              <div key={previousTask._id}>
                <TaskItem
                  _id={previousTask._id}
                  week={previousTask.week}
                  isDone={previousTask.isDone}
                  title={previousTask.title}
                  slides={previousTask.slides}
                  changeTaskStatus={props.changeTaskStatus}
                ></TaskItem>
              </div>
            );
          })}
        </div>
      </PrevTaskListContainer>
    </>
  );
};

export default TaskList;
