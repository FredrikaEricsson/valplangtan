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
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 10%;
  height: 60%;
  margin-left: 10%;
  margin-right: 10%;
`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  border-color: white;
  border-style: none;
  align-self: flex-end;
  background-color: white;
  color: ${colors.colorDarkOrange};
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
`;

export const NextButton = styled.button`
  font-size: 1.5rem;
  border-color: ${colors.colorDarkGrey};
  border-style: none;
  position: absolute;
  right: 3em;
  background-color: white;
  color: ${colors.colorDarkOrange};
`;
