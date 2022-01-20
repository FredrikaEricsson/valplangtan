import styled from "styled-components";
export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;

  h1 {
    text-align: center;
  }
  a {
    margin: 3%;
    color: black;
    @media screen and (min-width: 1024px) {
      margin: 2%;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  width: 100%;
  @media screen and (min-width: 1024px) {
    margin-top: 5%;
  }
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
  label {
    margin-top: 3%;
    @media screen and (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }
  button {
    width: 50%;
    align-self: center;
    margin-top: 3%;
    @media screen and (min-width: 1024px) {
      width: 15%;
    }
  }
`;
