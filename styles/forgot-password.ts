import styled from "styled-components";

export const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 70%;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const ForgotPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
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
    @media screen and (min-width: 1024px) {
      width: 40%;
      align-self: center;
      margin-bottom: 2%;
      margin-top: 1%;
    }
  }
  button {
    width: 50%;
    align-self: center;
    margin-top: 5%;
    @media screen and (min-width: 1024px) {
      width: 15%;
      margin-top: 2%;
    }
  }
`;
