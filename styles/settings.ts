import styled from "styled-components";
import { colors } from "../assets/colors";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  h1 {
    text-align: center;
  }
`;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5%;
  border-radius: 4%;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;

  input {
    margin-top: 1%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
    align-self: center;
    width: 50%;
  }
`;

export const CalendarWrapper = styled.div`
  margin-top: 3%;
  margin-bottom: 5%;
  .react-calendar {
    margin-top: 1%;
    border: 2px solid ${colors.colorLightOrange};
    border-radius: 5px;
  }
`;

export const DeleteButtonWrapper = styled.div`
  margin-top: 10%;
  button {
    background-color: ${colors.colorDarkOrange};
  }
`;
