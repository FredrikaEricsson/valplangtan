import axios from "axios";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

interface IEmail {
  email: string;
}

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState<IEmail>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setEmail({ email: target.value });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const forgotPasswordResponse = await axios.post(
      "http://localhost:3001/forgot-password",
      email
    );
    console.log(forgotPasswordResponse);
  };

  return (
    <>
      <h1>Glömt lösenord</h1>
      <p>Ange den mailadress som användes vid registering</p>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' onChange={handleChange}></input>
      <button onClick={handleClick}></button>
      <Link href='/login'>
        <a>Logga in</a>
      </Link>
      <Link href='/register'>
        <a>Registrera</a>
      </Link>
    </>
  );
};

export default ForgotPasswordPage;
