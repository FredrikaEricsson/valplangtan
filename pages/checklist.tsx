import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import TaskList from "../components/taskList";
import router, { useRouter } from "next/router";
import { ChecklistContainer } from "../styles/checkList";

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
      } catch (error: any) {
        if (error.response.status === 401) {
          return router.push("/login");
        }
        if (error.response.status === 403) {
          return router.push("/add-new-puppy");
        } else {
          return router.push("/error");
        }
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
      } catch (error: any) {
        if (error.response.status === 401) {
          return router.push("/login");
        } else {
          return router.push("/error");
        }
      }
    };
    getTasks();
  }, [puppyAge]);

  const sendTasks = useCallback(async () => {
    await axios.put<ITask[]>("http://localhost:3001/edit-many-tasks", tasks, {
      withCredentials: true,
    });
  }, [tasks]);

  useEffect(() => {
    window.addEventListener("beforeunload", sendTasks);
    return () => {
      window.removeEventListener("beforeunload", sendTasks);
    };
  }, [sendTasks]);

  useEffect(() => {
    router.events.on("routeChangeStart", sendTasks);
    return () => {
      router.events.off("routeChangeStart", sendTasks);
    };
  }, [sendTasks]);

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
        <ChecklistContainer>
          <TaskList
            tasks={tasks}
            puppyAge={puppyAge}
            changeTaskStatus={changeTaskStatus}
          ></TaskList>
        </ChecklistContainer>
      ) : null}
    </>
  );
};

export default ChecklistPage;
