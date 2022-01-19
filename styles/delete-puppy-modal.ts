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
  @media screen and (min-width: 1024px) {
    width: 40%;
    height: 40%;
    font-size: 1.2rem;
    left: 30%;
    top: 20%;
    padding: 5%;
  }
  .cancel {
    background-color: white;

    @media screen and (min-width: 1024px) {
      padding: 3% 7%;
    }
  }
  .delete {
    background-color: ${colors.colorDarkOrange};
    padding: 4% 10%;
    @media screen and (min-width: 1024px) {
      padding: 3% 7%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 9% 10%;
  @media screen and (min-width: 1024px) {
    margin: 10% 5%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.5);
`;
