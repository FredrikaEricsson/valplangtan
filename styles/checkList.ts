import styled, { keyframes } from "styled-components";
import { colors } from "../assets/colors";
import { slideInUp } from "react-animations";
const slideAnimation = keyframes`${slideInUp}`;

export const ChecklistContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5%;
  border-radius: 5px;
  margin-top: 10%;
  box-shadow: 3px 3px 0px ${colors.colorDarkBlue};
  border: 1px solid ${colors.colorDarkBlue};
  @media screen and (min-width: 1024px) {
    margin-top: 0%;
    padding: 0% 5%;
  }
`;

export const SlideContainer = styled.div`
  animation: 0.3s ${slideAnimation};
  position: absolute;
  z-index: 1;
  background-color: white;
  left: 18px;
  top: 30%;
  width: 90%;
  height: fit-content;
  padding: 5%;
  border-radius: 5px;
  border: 2px solid black;
  @media screen and (min-width: 1024px) {
    left: 18%;
    top: 20%;
    width: 60%;
    padding: 3%;
  }
`;

export const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3%;
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 4%;
  border-radius: 5px;
  border: 2px solid ${colors.colorLightOrange};
  box-shadow: 2px 2px 0px ${colors.colorLightOrange};
  @media screen and (min-width: 1024px) {
    font-size: 1.3rem;
    padding: 2%;
  }
`;

export const TitleCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 5%;
  display: flex;
  width: 88%;
  input {
    margin-right: 4%;
  }
`;

export const QuestionMarkContainer = styled.div`
  font-size: 1.2rem;
  color: ${colors.colorDarkOrange};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${colors.colorYellow};
  }
  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const CurrentTaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  h1 {
    font-size: 1.5rem;
    text-decoration: underline;
    text-decoration-color: ${colors.colorLightOrange};
    @media screen and (min-width: 1024px) {
      font-size: 2rem;
    }
  }
`;

export const PrevTaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  @media screen and (min-width: 1024px) {
    padding-top: 5%;
    padding-bottom: 5%;
  }
  h1 {
    font-size: 1.5rem;
    text-decoration: underline;
    text-decoration-color: ${colors.colorLightOrange};
    @media screen and (min-width: 1024px) {
      font-size: 2rem;
    }
  }
`;
