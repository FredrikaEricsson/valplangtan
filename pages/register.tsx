import { ChangeEvent, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const RegisterPage = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

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
    axios
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
      });
  };

  return (
    <>
      <form action=''>
        <input type='text' name='username' onChange={handleChange} />
        <input type='email' name='email' onChange={handleChange} />
        <input type='password' name='password' onChange={handleChange} />
        <button type='submit' onClick={handleClick}>
          Registrera
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
