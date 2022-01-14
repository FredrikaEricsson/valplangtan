import styled from "styled-components";
import { colors } from "../assets/colors";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  h1 {
    text-align: center;
  }
`;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  background-color: ${colors.colorBeige};
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

export const CalendarWrapper = styled.div`
  margin-top: 3%;
  .react-calendar {
    margin-top: 1%;
  }
`;
