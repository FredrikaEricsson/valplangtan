import { useEffect, useState } from "react";

interface ISlide {
  _id: string;
  description: string;
}

interface ISlidesListProps {
  slides: ISlide[];
  toggleSlides(): void;
}

const SlidesList = (props: ISlidesListProps) => {
  let slideList = props.slides;

  const [currentSlide, setCurrentSlide] = useState<ISlide>();
  const [index, setIndex] = useState(0);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const [showPrevArrow, setShowPrevArrow] = useState(false);

  useEffect(() => {
    setCurrentSlide(slideList[index]);
  }, [slideList, index]);

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
      <div>
        {/* {props.slides.map((slide: ISlide) => {
          return (

            <div key={slide._id}>
              <span>{slide.description}</span>
            </div>
          );
        })} */}
        {currentSlide ? (
          <div>
            <div>{currentSlide.description}</div>
            <div onClick={props.toggleSlides}>X</div>
            {showNextArrow ? <div onClick={nextSlide}>Nästa</div> : null}
            {showPrevArrow ? <div onClick={prevSlide}>Förra</div> : null}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SlidesList;
