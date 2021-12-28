import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

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
      <Link href='/register'>
        <a>Registera</a>
      </Link>
    </>
  );
};

export default LoginPage;
