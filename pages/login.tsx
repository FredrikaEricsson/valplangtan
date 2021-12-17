import { ChangeEvent, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

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

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let loginResponse = await axios.post(
      "http://localhost:1337/api/auth/local",
      {
        identifier: input.email,
        password: input.password,
      }
    );
    let cookie = "Bearer " + loginResponse.data.jwt;
    Cookies.set("token", cookie, { expires: 7 });

    let puppyResponse = await axios.get(`http://localhost:1337/api/puppy/me`, {
      headers: {
        Authorization: cookie,
      },
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
