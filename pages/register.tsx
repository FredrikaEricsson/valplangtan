import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button, ErrorMessageStyle, Headline, Input } from "../styles/global";
import {
  RegisterPageWrapper,
  InputWrapper,
  RegisterPageContainer,
} from "../styles/register";

const RegisterPage = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [inputError, setInputError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState<string>();

  const [registrationSuccessful, setRegistrationSuccessful] =
    useState<boolean>(false);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    validation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const validation = () => {
    let errorMessages = {
      username: "",
      email: "",
      password: "",
    };

    if (input.username === "") {
      errorMessages.username = "Användarnamn krävs";
    } else {
      if (input.username.length > 20 || input.username.length < 2) {
        errorMessages.username =
          "Användarnamnet måste vara mellan 2-20 tecken långt";
      } else {
        errorMessages.username = "";
      }
    }
    if (input.email === "") {
      errorMessages.email = "Email krävs";
    } else {
      if (!/\S+@\S+\.\S+/.test(input.email)) {
        errorMessages.email = "Email har ogiltigt format";
      } else {
        errorMessages.email = "";
      }
    }
    if (input.password === "") {
      errorMessages.password = "Lösenord krävs";
    } else {
      errorMessages.password = "";
    }

    if (input.password.length < 7) {
      errorMessages.password = "Lösenordet måste vara minst 7 tecken";
    } else {
      errorMessages.password = "";
    }
    setInputError(errorMessages);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/register-user", input);
      setConfirmationMessage(
        "Registrering klar! Ett mail med en bekräftelselänk har skickats till dig!"
      );
      setRegistrationSuccessful(true);
    } catch (error: any) {
      if (error.response.status === 400) {
        return setConfirmationMessage("Emailen finns redan registrerad");
      } else {
        setConfirmationMessage("Nånting gick fel! Försök igen senare!");
      }
    }
  };

  return (
    <RegisterPageContainer>
      <RegisterPageWrapper>
        <Headline>Registrera</Headline>
        {!registrationSuccessful ? (
          <form action=''>
            <InputWrapper>
              <label htmlFor='username'>Användarnamn</label>
              <Input type='text' name='username' onChange={handleChange} />
              {inputError.username && (
                <ErrorMessageStyle>{inputError.username}</ErrorMessageStyle>
              )}
              <label htmlFor='email'>Email</label>
              <Input type='email' name='email' onChange={handleChange} />
              {inputError.email && (
                <ErrorMessageStyle>{inputError.email}</ErrorMessageStyle>
              )}
              <label htmlFor='password'>Lösenord</label>
              <Input type='password' name='password' onChange={handleChange} />
              {inputError.password && (
                <ErrorMessageStyle>{inputError.password}</ErrorMessageStyle>
              )}
              <Button
                type='submit'
                onClick={handleClick}
                disabled={
                  inputError.username.length > 0 ||
                  inputError.email.length > 0 ||
                  inputError.password.length > 0
                }
              >
                Registrera
              </Button>
            </InputWrapper>
          </form>
        ) : null}
        {confirmationMessage && (
          <ErrorMessageStyle>{confirmationMessage}</ErrorMessageStyle>
        )}
        <Link href='/'>
          <a>Logga in</a>
        </Link>
        <Link href='/forgot-password'>
          <a>Glömt lösenord?</a>
        </Link>
      </RegisterPageWrapper>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
