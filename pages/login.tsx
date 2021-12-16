import { ChangeEvent, useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [input, setInput] = useState({
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
      .post("http://localhost:1337/api/auth/local", {
        identifier: input.email,
        password: input.password,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <>
      <form action=''>
        <input type='email' name='email' onChange={handleChange} />
        <input type='password' name='password' onChange={handleChange} />
        <button type='submit' onClick={handleClick}>
          Logga in
        </button>
      </form>
    </>
  );
};

export default LoginPage;
