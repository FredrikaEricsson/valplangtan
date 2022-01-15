import axios from "axios";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { Headline, Input, Button } from "../styles/global";

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
      <Headline>Glömt lösenord</Headline>
      <p>Ange den mailadress som användes vid registering</p>
      <label htmlFor='email'>Email</label>
      <Input type='email' name='email' onChange={handleChange}></Input>
      <Button onClick={handleClick}>Skicka</Button>
      {resetMessage ? <div>{resetMessage}</div> : null}
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
