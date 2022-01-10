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
          message: confirmUserResponse.data,
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
        <h2>{confirmUserResponse.message}</h2>
      ) : (
        <div>Laddar...</div>
      )}
    </>
  );
};

export default ConfirmationPage;
