import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import { colors } from "../assets/colors";
const slideAnimation = keyframes`${slideInUp}`;

export const DeletePuppyModalContainer = styled.div`
  animation: 0.3s ${slideAnimation};
  position: absolute;
  z-index: 1;
  background-color: ${colors.colorLightGrey};
  left: 18px;
  top: 200px;
  width: 90%;
  height: 20%;
  padding: 5%;
  border-radius: 4%;
  border: 2px solid ${colors.colorDarkGrey};
  display: flex;
  flex-direction: column;
`;
