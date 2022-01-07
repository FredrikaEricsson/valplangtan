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
    if (!id) {
      return;
    }
    axios
      .put<string>(`http://localhost:3001/confirm-user/${id}`)
      .then((res) => {
        setConfirmUserResponse({ loading: true, message: res.data });
      });
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
