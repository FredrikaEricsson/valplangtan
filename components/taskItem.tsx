import { ChangeEvent, useEffect, useRef, useState } from "react";
import Slide from "./slide";
import {
  TitleCheckboxContainer,
  QuestionMarkContainer,
  SlideContainer,
  TaskItemContainer,
} from "../styles/checkList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

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
          <TitleCheckboxContainer>
            <input
              type='checkbox'
              id={props._id}
              checked={isDone}
              onChange={handleChange}
              data-testid='checkbox'
            ></input>

            <div>
              <span>{props.title}</span>
            </div>
          </TitleCheckboxContainer>
          <QuestionMarkContainer onClick={toggleSlides}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </QuestionMarkContainer>
        </TaskItemContainer>
        {showSlides ? (
          <SlideContainer>
            <Slide
              title={props.title}
              slides={props.slides}
              toggleSlides={toggleSlides}
            ></Slide>
          </SlideContainer>
        ) : null}
      </div>
    </>
  );
};

export default TaskItem;
