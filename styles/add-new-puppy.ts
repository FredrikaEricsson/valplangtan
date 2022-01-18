import styled from "styled-components";
import { colors } from "../assets/colors";

export const AddPuppyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  h1 {
    text-align: center;
  }
`;

export const AddPuppyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  align-items: center;
  justify-content: space-evenly;
  padding: 5%;
  form {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  button {
    width: 50%;
    align-self: center;
  }
  input {
    margin-top: 2%;
    margin-bottom: 2%;
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
