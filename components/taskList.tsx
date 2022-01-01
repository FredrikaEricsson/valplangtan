import { useEffect, useState } from "react";

interface ITask {
  week: string;
  isDone: boolean;
  title: string;
  slides: [{ description: string }];
}

interface ITaskListProps {
  tasks: ITask[];
  puppyAge: string;
}

const TaskList = (props: ITaskListProps) => {
  const [currentTasks, setCurrentTasks] = useState<ITask[]>([]);
  const [previousTasks, setPreviousTasks] = useState<ITask[]>([]);

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
      <ul>
        {currentTasks.map((currentTask) => {
          return <li key={currentTask.title}>{currentTask.title}</li>;
        })}
      </ul>
      <ul>
        {previousTasks.map((previousTask) => {
          return <li key={previousTask.title}>{previousTask.title}</li>;
        })}
      </ul>
    </>
  );
};

export default TaskList;
