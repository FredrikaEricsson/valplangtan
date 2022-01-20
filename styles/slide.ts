import styled from "styled-components";
import { colors } from "../assets/colors";

export const SlideWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    font-family: "Patrick Hand", "Open sans";
    margin-left: 10%;
    margin-right: 10%;
    @media screen and (min-width: 1024px) {
      margin-left: 5%;
      margin-right: 5%;
      font-size: 2rem;
    }
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

export const DescriptionContainer = styled.div`
  margin-top: 10%;
  height: 60%;
  margin-left: 10%;
  margin-right: 10%;
  @media screen and (min-width: 1024px) {
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1.3rem;
  }
`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  border-color: white;
  border-style: none;
  align-self: flex-end;
  background-color: white;
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
export const ToggleButtonWrapper = styled.div`
  height: 30px;
  margin-top: 10%;
`;

export const PrevButton = styled.button`
  font-size: 1.5rem;
  border-color: ${colors.colorDarkGrey};
  border-style: none;
  position: absolute;
  left: 3em;
  background-color: white;
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

export const NextButton = styled.button`
  font-size: 1.5rem;
  border-color: ${colors.colorDarkGrey};
  border-style: none;
  position: absolute;
  right: 3em;
  background-color: white;
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
