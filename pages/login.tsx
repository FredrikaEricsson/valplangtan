import { ChangeEvent, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

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
    let response = await axios.post("http://localhost:3001/login", input, {
      withCredentials: true,
    });
    if (response.status === 200) {
      return router.push("/add-new-puppy");
    } else {
      console.log("Det fungerar inte");
    }

    /*     let loginResponse = await axios.post(
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
    if (puppyResponse.data.length === 1) {
      router.push("/puppy");
    } else {
      router.push("/add-new-puppy");
    } */
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
