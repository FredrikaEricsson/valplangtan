import axios from "axios";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

interface IEmail {
  email: string;
}

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState<IEmail>();
  const [resetMessage, setResetMessage] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setEmail({ email: target.value });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const forgotPasswordResponse = await axios.post(
        "http://localhost:3001/forgot-password",
        email
      );
      setResetMessage(
        "Ett mail med en återställningslänk har skickats till dig"
      );
    } catch (error: any) {
      if (error.response.status === 401) {
        setResetMessage("Emailen du angav är inte registrerad hos oss");
      } else {
        setResetMessage("Nånting gick fel. Försök igen senare");
      }
    }
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
