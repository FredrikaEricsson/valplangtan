import { ChangeEvent, useEffect, useState } from "react";

interface ITask {
  _id: string;
  week: string;
  isDone: boolean;
  title: string;
  slides: [{ description: string }];
}

interface ITaskListProps {
  tasks: ITask[];
  puppyAge: string;
  changeTaskStatus(editedTask: { id: string; status: string }): void;
}

const TaskList = (props: ITaskListProps) => {
  console.log(props.tasks);
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const id = target.id;
    const editedTask = {
      id: id,
      status: value.toString(),
    };
    props.changeTaskStatus(editedTask);
  };
  return (
    <>
      <h1>Veckans checklista</h1>
      <div>
        {currentTasks.map((currentTask) => {
          return (
            <div key={currentTask.title}>
              <input
                type='checkbox'
                id={currentTask._id}
                checked={currentTask.isDone}
                onChange={handleChange}
              ></input>
              <span>{currentTask.title}</span>
            </div>
          );
        })}
      </div>
      <h1>Föregående veckor</h1>
      <div>
        {previousTasks.map((previousTask) => {
          return (
            <div key={previousTask.title}>
              <input
                type='checkbox'
                id={previousTask._id}
                checked={previousTask.isDone}
                onChange={handleChange}
              />
              <span>{previousTask.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TaskList;
