import { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/taskList";

interface ITask {
  week: string;
  isDone: boolean;
  title: string;
  slides: [{ description: string }];
}

interface IPuppyAge {
  puppyAge: string;
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

  return (
    <>
      {tasks && puppyAge ? (
        <>
          <TaskList tasks={tasks} puppyAge={puppyAge}></TaskList>
        </>
      ) : null}
    </>
  );
};

export default ChecklistPage;
