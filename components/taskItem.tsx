import { ChangeEvent, useEffect, useState } from "react";

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
  const [index, setIndex] = useState<number>(0);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [isDone, setIsDone] = useState(props.isDone);

  const toggleSlides = () => {
    setShowSlides(!showSlides);
  };

  useEffect(() => {
    const editedTask = {
      id: props._id,
      isDone: isDone,
    };
    props.changeTaskStatus(editedTask);
  }, [isDone, props]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDone(!isDone);
  };

  const nextSlide = () => {
    setIndex(index + 1);
    if (index > 0) {
      setShowNextArrow(false);
    } else {
      setShowPrevArrow(true);
    }
  };

  const prevSlide = () => {
    setIndex(index - 1);

    if (index === 1) {
      setShowPrevArrow(false);
    } else {
      setShowNextArrow(true);
    }
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
          <div>
            <div>{props.slides[index].description}</div>

            {showNextArrow ? <div onClick={nextSlide}>Nästa</div> : null}
            {showPrevArrow ? <div onClick={prevSlide}>Förra</div> : null}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default TaskItem;
