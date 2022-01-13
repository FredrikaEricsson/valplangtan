import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../assets/colors";

export const PuppyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  text-align: center;
  margin-top: 5%%;
  padding: 5%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  background-color: ${colors.colorLightGrey};
  margin-top: 5%;
  padding: 10% 10% 0% 10%;
  background-color: ${colors.colorLightGrey};
  border-radius: 4%;
`;
export const UpdateWrapper = styled.div`
  background-color: ${colors.colorLightGrey};
  margin-top: 5%;
  padding: 5%;
  border-radius: 4%;
`;
