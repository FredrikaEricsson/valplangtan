import { ChangeEvent, useEffect, useRef, useState } from "react";
import Slide from "./slide";
import {
  CheckboxContainer,
  SlideContainer,
  TaskItemContainer,
} from "../styles/checkList";

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
  changeTaskStatus(editedTask: { id: string; isDone: boolean }): void;
}

const TaskItem = (props: ITaskProps) => {
  const [showSlides, setShowSlides] = useState<boolean>(false);

  const [isDone, setIsDone] = useState(props.isDone);

  const toggleSlides = () => {
    setShowSlides(!showSlides);
  };

  useEffect(() => {
    props.changeTaskStatus({ id: props._id, isDone: isDone });
  }, [isDone, props]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDone(!isDone);
  };

  return (
    <>
      <div key={props._id}>
        <TaskItemContainer>
          <CheckboxContainer>
            <input
              type='checkbox'
              id={props._id}
              data-testid='checkbox'
              checked={isDone}
              onChange={handleChange}
            ></input>
          </CheckboxContainer>
          <div>
            <span onClick={toggleSlides}>{props.title}</span>
          </div>
        </TaskItemContainer>
        {showSlides ? (
          <SlideContainer>
            <Slide slides={props.slides} toggleSlides={toggleSlides}></Slide>
          </SlideContainer>
        ) : null}
      </div>
    </>
  );
};

export default TaskItem;
