import styled, { keyframes } from "styled-components";
import { colors } from "../assets/colors";
import { slideInUp } from "react-animations";
const slideAnimation = keyframes`${slideInUp}`;

export const ChecklistContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5%;
  border-radius: 5px;
  margin-top: 10%;
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
`;

export const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3%;
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 4%;
  border-radius: 5px;
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
  font-size: 15pt;
  color: ${colors.colorDarkOrange};
`;

export const CurrentTaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  h1 {
    font-size: 1.5rem;
  }
`;

export const PrevTaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  h1 {
    font-size: 1.5rem;
  }
`;
