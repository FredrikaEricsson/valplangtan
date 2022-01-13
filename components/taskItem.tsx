import { ChangeEvent, useEffect, useRef, useState } from "react";
import Slide from "./slide";
import { SlideContainer } from "../styles/checkList";
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
interface ISlide {
  _id: string;
  description: string;
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
        <input
          type='checkbox'
          id={props._id}
          checked={isDone}
          onChange={handleChange}
        ></input>
        <div>
          <span onClick={toggleSlides}>{props.title}</span>
        </div>
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
