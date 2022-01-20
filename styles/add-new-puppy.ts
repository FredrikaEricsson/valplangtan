import styled from "styled-components";
import { colors } from "../assets/colors";

export const AddPuppyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  @media screen and (min-width: 1024px) {
    margin-top: 0%;
    align-items: center;
  }
  h1 {
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const AddPuppyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  align-items: center;
  justify-content: space-evenly;
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  @media screen and (min-width: 1024px) {
    padding: 2%;
  }
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
    @media screen and (min-width: 1024px) {
      width: 50%;
    }
  }
  input {
    margin-top: 2%;
    margin-bottom: 2%;
    @media screen and (min-width: 1024px) {
      margin-bottom: 3%;
    }
  }
`;

export const CalendarWrapper = styled.div`
  margin-top: 3%;
  margin-bottom: 5%;

  .react-calendar {
    margin-top: 1%;
    border: 2px solid ${colors.colorLightOrange};
    border-radius: 5px;
    box-shadow: 2px 2px 0px ${colors.colorLightOrange};
  }
`;
