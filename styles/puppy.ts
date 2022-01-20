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
  padding: 5%;

  @media screen and (min-width: 1024px) {
    padding: 2% 5%;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageUpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  background-color: white;
  margin-top: 5%;
  padding: 10% 10% 0% 10%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 4px 0px ${colors.colorDarkBlue};
  @media screen and (min-width: 1024px) {
    margin: 2%;
  }
`;
export const UpdateWrapper = styled.div`
  background-color: ${colors.colorLightOrange};
  margin-top: 5%;
  margin-bottom: 10%;
  padding: 5%;
  border-radius: 4%;
  text-align: center;
  box-shadow: 4px 4px 0px ${colors.colorDarkOrange};
  @media screen and (min-width: 1024px) {
    display: flex;
    margin: 2%;
    padding: 5%;
    width: 60%;
    justify-content: center;
    align-items: center;
    p {
      font-size: 18pt;
    }
  }
`;
