import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { Headline, Input, Button } from "../styles/global";
import { LoginPageWrapper } from "../styles/login";
import { InputWrapper } from "../styles/login";

const Login = () => {
  const router = useRouter();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<any>();

  const validation = () => {
    let errorMessages = {
      email: "",
      password: "",
    };

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

    setInputError(errorMessages);
  };

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    validation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

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
      let response = await axios.post("http://localhost:3001/login", input, {
        withCredentials: true,
      });

      if (response.data.puppy.name === "") {
        return router.push("/add-new-puppy");
      } else {
        return router.push("/puppy");
      }
    } catch (error: any) {
      if (error.response.status === 403) {
        return setErrorMessage("Din email är inte verifierad");
      }
      if (error.response.status === 401) {
        return setErrorMessage("Fel email eller lösenord");
      } else {
        return setErrorMessage("Nånting gick fel");
      }
    }
  };

  return (
    <LoginPageWrapper>
      <form action=''>
        <InputWrapper>
          <label htmlFor='email'>Email</label>
          <Input
            type='email'
            data-testid='emailInput'
            name='email'
            onChange={handleChange}
          />
          {inputError.email && <small>{inputError.email}</small>}
          <label htmlFor='password'>Lösenord</label>
          <Input
            type='password'
            data-testid='passwordInput'
            name='password'
            onChange={handleChange}
          />
          {inputError.password && <small>{inputError.password}</small>}
          <Button
            disabled={
              inputError.email.length > 0 || inputError.password.length > 0
            }
            onClick={handleClick}
          >
            Logga in
          </Button>
        </InputWrapper>
      </form>
      {errorMessage ? <div>{errorMessage}</div> : null}
      <Link href='/register'>
        <a>Registera</a>
      </Link>
      <Link href='/forgot-password'>
        <a>Glömt lösenord?</a>
      </Link>
    </LoginPageWrapper>
  );
};

export default Login;
