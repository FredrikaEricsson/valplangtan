import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Button, Headline, Input } from "../../styles/global";
import { ResetPasswordContainer } from "../../styles/reset-password";

interface IUpdatedUser {
  userId: string;
  newPassword: string;
}

const ResetPage = () => {
  const router = useRouter();
  let id = router.query.id as string;

  const [resetPasswordMessage, setResetPasswordMessage] = useState<string>();
  const [errorPasswordMessage, setErrorPasswordMessage] = useState<string>("");

  const [updatedUser, setUpdatedUser] = useState<IUpdatedUser>({
    userId: "",
    newPassword: "",
  });

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    validation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatedUser.newPassword]);
  const validation = () => {
    let errorMessages = {
      password: "",
    };

    if (updatedUser?.newPassword?.length < 7) {
      errorMessages.password = "Lösenordet måste vara minst 7 tecken";
    } else {
      errorMessages.password = "";
    }
    setErrorPasswordMessage(errorMessages.password);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (!id) {
      return;
    }
    setUpdatedUser({
      userId: id,
      newPassword: target.value,
    });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/reset-password", updatedUser);
      setResetPasswordMessage("Ditt lösenord är ändrat. Du kan nu logga in");
    } catch (error) {
      setResetPasswordMessage("Nånting gick fel. Försök igen senare");
    }
  };

  return (
    <ResetPasswordContainer>
      <Headline>Återställ lösenord</Headline>
      <label htmlFor='newPassword'>Nytt lösenord</label>
      <Input type='password' name='newPassword' onChange={handleChange}></Input>
      {errorPasswordMessage ? <p>{errorPasswordMessage}</p> : null}
      <Button disabled={errorPasswordMessage?.length > 0} onClick={handleClick}>
        Spara
      </Button>

      {resetPasswordMessage ? <p>{resetPasswordMessage}</p> : null}
    </ResetPasswordContainer>
  );
};

export default ResetPage;
