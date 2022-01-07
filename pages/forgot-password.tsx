import axios from "axios";
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
    console.log(email);
    const forgotPasswordResponse = await axios.post(
      "http://localhost:3001/forgot-password",
      email
    );
    console.log(forgotPasswordResponse);
  };

  return (
    <>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}></button>
    </>
  );
};

export default ForgotPasswordPage;
