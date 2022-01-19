import axios from "axios";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import {
  ForgotPasswordContainer,
  ForgotPasswordWrapper,
  InputWrapper,
} from "../styles/forgot-password";
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
    <ForgotPasswordContainer>
      <ForgotPasswordWrapper>
        <Headline>Glömt lösenord</Headline>
        <p>Ange den mailadress som användes vid registering</p>
        <InputWrapper>
          <label htmlFor='email'>Email</label>
          <Input
            type='email'
            name='email'
            data-testid='emailInput'
            onChange={handleChange}
          ></Input>
          <Button onClick={handleClick}>Skicka</Button>
          {resetMessage ? <div>{resetMessage}</div> : null}
        </InputWrapper>
        <Link href='/'>
          <a>Logga in</a>
        </Link>
        <Link href='/register'>
          <a>Registrera</a>
        </Link>
      </ForgotPasswordWrapper>
    </ForgotPasswordContainer>
  );
};

export default ForgotPasswordPage;
