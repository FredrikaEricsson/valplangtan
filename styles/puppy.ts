import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../assets/colors";

export const PuppyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: black;
    align-self: center;
    font-size: 16pt;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  text-align: center;
  margin-top: 5%%;
  padding: 5%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  background-color: white;
  margin-top: 5%;
  padding: 10% 10% 0% 10%;
  background-color: white;
  border-radius: 4%;
`;
export const UpdateWrapper = styled.div`
  background-color: ${colors.colorLightOrange};
  margin-top: 5%;
  margin-bottom: 10%;
  padding: 5%;
  border-radius: 4%;
  text-align: center;
`;
