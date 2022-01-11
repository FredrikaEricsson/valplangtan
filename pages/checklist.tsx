import { useEffect, useRef, useState } from "react";
import axios from "axios";
import TaskList from "../components/taskList";
import router from "next/router";

interface ITask {
  _id: string;
  week: number;
  isDone: boolean;
  title: string;
  slides: [{ _id: string; description: string }];
}

interface ITaskResponse {
  id: string;
  isDone: boolean;
}

const ChecklistPage = () => {
  const [puppyAge, setPuppyAge] = useState<number>();
  const [tasks, setTasks] = useState<ITask[]>();

  useEffect(() => {
    const getPuppyAge = async () => {
      try {
        let puppyAgeResponse = await axios.get<number>(
          "http://localhost:3001/get-puppy-age",
          {
            withCredentials: true,
          }
        );

        setPuppyAge(puppyAgeResponse.data + 1);
      } catch (error) {
        return router.push("/login");
      }
    };
    getPuppyAge();
  }, []);

  useEffect(() => {
    const getTasks = async () => {
      try {
        let checklistResponse = await axios.get<ITask[]>(
          "http://localhost:3001/get-tasks",
          {
            withCredentials: true,
          }
        );

        setTasks(checklistResponse.data);
      } catch (error) {
        return router.push("/login");
      }
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
