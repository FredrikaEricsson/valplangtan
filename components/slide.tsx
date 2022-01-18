import { useState } from "react";
import {
  CloseButton,
  DescriptionContainer,
  NextButton,
  PrevButton,
  SlideWrapper,
  ToggleButtonWrapper,
} from "../styles/slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

interface ISlideProps {
  slides: [{ _id: string; description: string }];
  title: string;
  toggleSlides(): void;
}
const Slide = (props: ISlideProps) => {
  const [index, setIndex] = useState<number>(0);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
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
      <SlideWrapper>
        <CloseButton onClick={props.toggleSlides}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </CloseButton>
        <h2>{props.title}</h2>
        <DescriptionContainer>
          <div>{props.slides[index].description}</div>
        </DescriptionContainer>
        <ToggleButtonWrapper>
          {showPrevArrow ? (
            <PrevButton onClick={prevSlide}>
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            </PrevButton>
          ) : null}
          {showNextArrow ? (
            <NextButton onClick={nextSlide}>
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </NextButton>
          ) : null}
        </ToggleButtonWrapper>
      </SlideWrapper>
    </>
  );
};

export default Slide;
