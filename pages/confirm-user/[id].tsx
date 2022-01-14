import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <>
      {confirmUserResponse.loading ? (
        <p>{confirmUserResponse.message}</p>
      ) : (
        <div>Laddar...</div>
      )}
    </>
  );
};

export default ConfirmationPage;
