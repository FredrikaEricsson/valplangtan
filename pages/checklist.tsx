import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/taskList";

interface ITask {
  _id: string;
  week: string;
  isDone: boolean;
  title: string;
  slides: [{ description: string }];
}

interface ITaskResponse {
  id: string;
  status: string;
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

  const changeTaskStatus = async (editedTask: ITaskResponse) => {
    let editedTaskResponse = await axios.put(
      "http://localhost:3001/edit-task",
      editedTask
    );
    setTasks(editedTaskResponse.data);
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
