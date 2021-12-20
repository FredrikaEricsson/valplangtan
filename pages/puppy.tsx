import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface IPuppy {
  BirthDate: string;
  Name: string;
  id: Number;
}

interface IPuppyResponse {
  [index: number]: { attributes: IPuppy };
}

const PuppyPage = () => {
  const [puppy, setPuppy] = useState<IPuppy>();

  const router = useRouter();

  useEffect(() => {
    const getPuppy = async () => {
      let cookie = Cookies.get("token");
      if (!cookie) {
        return router.push("/login");
      }
      let puppyResponse = await axios.get<IPuppyResponse>(
        "http://localhost:1337/api/puppy/me",
        {
          headers: {
            Authorization: cookie,
          },
        }
      );
      setPuppy(puppyResponse.data[0].attributes);
    };
    getPuppy();
  }, [router]);

  console.log(puppy);

  if (!puppy) {
    return <div>Loading...</div>;
  }

  return <div>Din valp {puppy.Name}</div>;
};

export default PuppyPage;
