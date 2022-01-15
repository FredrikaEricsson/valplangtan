import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface IUpdatedUser {
  userId: string;
  newPassword: string;
}

const ResetPage = () => {
  const router = useRouter();
  let id = router.query.id as string;

  const [resetPasswordMessage, setResetPasswordMessage] = useState<string>();

  const [updatedUser, setUpdatedUser] = useState<IUpdatedUser>();

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
    <>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}></button>
      {resetPasswordMessage ? <p>{resetPasswordMessage}</p> : null}
    </>
  );
};

export default ResetPage;
