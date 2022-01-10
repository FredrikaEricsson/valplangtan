import { useEffect, useRef, useState } from "react";
import axios from "axios";
import TaskList from "../components/taskList";

interface ITask {
  _id: string;
  week: string;
  isDone: boolean;
  title: string;
  slides: [{ _id: string; description: string }];
}

interface ITaskResponse {
  id: string;
  isDone: boolean;
}

const ChecklistPage = () => {
  const [puppyAge, setPuppyAge] = useState<string>();
  const [tasks, setTasks] = useState<ITask[]>();

  useEffect(() => {
    const getPuppyAge = async () => {
      let puppyAgeResponse = await axios.get<string>(
        "http://localhost:3001/get-puppy-age",
        {
          withCredentials: true,
        }
      );

      setPuppyAge(puppyAgeResponse.data);
    };
    getPuppyAge();
  }, []);

  useEffect(() => {
    const getTasks = async () => {
      let checklistResponse = await axios.get<ITask[]>(
        "http://localhost:3001/get-tasks",
        {
          withCredentials: true,
        }
      );

      setTasks(checklistResponse.data);
    };
    getTasks();
  }, [puppyAge]);

  useEffect(() => {
    const onbeforeunloadFn = async () => {
      await axios.put<ITask[]>("http://localhost:3001/edit-many-tasks", tasks);
    };

    window.addEventListener("beforeunload", onbeforeunloadFn);
    return () => {
      window.removeEventListener("beforeunload", onbeforeunloadFn);
    };
  }, [tasks]);

  const changeTaskStatus = async (editedTask: ITaskResponse) => {
    let taskToBeUpdated = tasks?.find((task) => {
      return task._id === editedTask.id;
    });
    if (taskToBeUpdated) {
      taskToBeUpdated.isDone = editedTask.isDone;
    }
  };

  return (
    <>
      {tasks && puppyAge ? (
        <>
          <TaskList
            tasks={tasks}
            puppyAge={puppyAge}
            changeTaskStatus={changeTaskStatus}
          ></TaskList>
        </>
      ) : null}
    </>
  );
};

export default ChecklistPage;
