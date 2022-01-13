import styled from "styled-components";
import { colors } from "../assets/colors";
export const SlideContainer = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${colors.colorLightGrey};
  left: 18px;
  top: 200px;
  width: 90%;
  height: 50%;
  padding: 5%;
`;

export const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5%;
`;
export const CheckboxContainer = styled.div`
  padding-right: 5%;
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
