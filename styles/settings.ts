import styled from "styled-components";
import { colors } from "../assets/colors";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 7% 5%;
  border-radius: 5px;
  @media screen and (min-width: 1024px) {
    padding: 3% 10%;
  }
  h1 {
    text-align: center;
  }
`;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  @media screen and (min-width: 1024px) {
    margin-top: 2%;
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    width: 49%;
  }
  p {
    margin-top: 2%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  @media screen and (min-width: 1024px) {
    width: 75%;
  }
  input {
    margin-top: 1%;
  }
  label {
    @media screen and (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
`;

export const CalendarButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    align-self: center;
    width: 50%;
  }
`;

export const CalendarWrapper = styled.div`
  margin-top: 3%;
  margin-bottom: 5%;
  width: 100%;
  .react-calendar {
    margin-top: 1%;
    border: 2px solid ${colors.colorLightOrange};
    border-radius: 5px;
    @media screen and (min-width: 1024px) {
      font-size: 1rem;
    }
  }
  label {
    @media screen and (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }
`;

export const DeleteButtonWrapper = styled.div`
  margin-top: 10%;
  @media screen and (min-width: 1024px) {
    margin-top: 5%;
  }
  button {
    background-color: ${colors.colorDarkOrange};
  }
`;
