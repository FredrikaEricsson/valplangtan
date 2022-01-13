import styled from "styled-components";
import { colors } from "../assets/colors";

export const SlideWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  margin-top: 10%;
  height: 70%;
  margin-left: 10%;
  margin-right: 10%;
`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  border-color: ${colors.colorDarkGrey};
  border-style: none;
  align-self: flex-end;
`;
export const ToggleButtonWrapper = styled.div``;

export const PrevButton = styled.button`
  font-size: 1.5rem;
  border-color: ${colors.colorDarkGrey};
  border-style: none;
  position: absolute;
  left: 3em;
`;

export const NextButton = styled.button`
  font-size: 1.5rem;
  border-color: ${colors.colorDarkGrey};
  border-style: none;
  position: absolute;
  right: 3em;
`;
