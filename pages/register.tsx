import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const RegisterPage = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    email: "",
    password: "",
  });

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
    setErrorMessage(errorMessages);
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let response = axios.post("http://localhost:3001/register-user");
    console.log(response);

    /*  axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: input.username,
        email: input.email,
        password: input.password,
      })
      .then((response) => {
        let cookie = "Bearer " + response.data.jwt;
        Cookies.set("token", cookie, { expires: 7 });
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      }); */
  };

  return (
    <>
      <form action=''>
        <input type='text' name='username' onChange={handleChange} />
        {errorMessage.username && <small>{errorMessage.username}</small>}
        <input type='email' name='email' onChange={handleChange} />
        {errorMessage.email && <small>{errorMessage.email}</small>}
        <input type='password' name='password' onChange={handleChange} />
        {errorMessage.password && <small>{errorMessage.password}</small>}
        <button
          type='submit'
          onClick={handleClick}
          disabled={
            errorMessage.username.length > 0 ||
            errorMessage.email.length > 0 ||
            errorMessage.password.length > 0
          }
        >
          Registrera
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
