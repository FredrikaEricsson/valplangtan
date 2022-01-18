import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import { colors } from "../assets/colors";
const slideAnimation = keyframes`${slideInUp}`;

export const DeletePuppyModalContainer = styled.div`
  animation: 0.3s ${slideAnimation};
  position: absolute;
  z-index: 1;
  background-color: ${colors.colorYellow};
  left: 18px;
  top: 40%;
  width: 90%;
  height: 25%;
  padding: 10%;
  border-radius: 5px;
  border: 2px solid ${colors.colorDarkGrey};
  display: flex;
  flex-direction: column;
  .cancel {
    background-color: white;
    padding: 4% 10%;
  }
  .delete {
    background-color: ${colors.colorDarkOrange};
    padding: 4% 10%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 9% 10%;
`;
