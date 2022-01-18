import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ConfirmUserWrapper } from "../../styles/confirm-user";
import { Headline } from "../../styles/global";
import Link from "next/link";

const ConfirmationPage = () => {
  const router = useRouter();
  let { id } = router.query;
  console.log(id);
  const [confirmUserResponse, setConfirmUserResponse] = useState({
    loading: false,
    message: "",
  });

  useEffect(() => {
    const confirmUser = async () => {
      try {
        if (!id) {
          return;
        }
        let confirmUserResponse = await axios.put<string>(
          `http://localhost:3001/confirm-user/${id}`
        );
        setConfirmUserResponse({
          loading: true,
          message: "Ditt konto är bekräftat! Du kan nu logga in",
        });
      } catch (error) {
        setConfirmUserResponse({ loading: true, message: "Nånting gick fel" });
      }
    };
    confirmUser();
  }, [id]);

  return (
    <ConfirmUserWrapper>
      {confirmUserResponse.loading ? (
        <>
          <Headline>{confirmUserResponse.message}</Headline>
          <Link href='/'>
            <a>Logga in</a>
          </Link>
        </>
      ) : (
        <div>Laddar...</div>
      )}
    </ConfirmUserWrapper>
  );
};

export default ConfirmationPage;
