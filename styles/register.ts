import styled from "styled-components";
import { colors } from "../assets/colors";

export const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 70%;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

  form {
    width: 75%;
  }
`;

export const RegisterPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
  }
  a {
    margin: 3%;
    color: black;
    @media screen and (min-width: 1024px) {
      margin: 1%;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  width: 100%;

  input {
    margin-top: 2%;
    margin-bottom: 1%;
    @media screen and (min-width: 1024px) {
      width: 40%;
      align-self: center;
      margin-top: 1%;
      margin-bottom: 1%;
    }
  }
  button {
    width: 50%;
    align-self: center;
    margin-top: 3%;
    @media screen and (min-width: 1024px) {
      width: 15%;
      margin-top: 2%;
    }
    
  }
  label {
    margin-top: 3%;
    @media screen and (min-width: 1024px) {
      font-size: 1.2rem;
    }
`;
