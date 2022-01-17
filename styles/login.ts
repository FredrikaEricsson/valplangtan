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
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  width: 100%;
  input {
    margin-top: 2%;
    margin-bottom: 5%;
  }
  button {
    width: 50%;
    align-self: center;
  }
`;
