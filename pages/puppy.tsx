import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface IPuppy {
  birthDate: string;
  name: string;
}

const PuppyPage = () => {
  const [puppy, setPuppy] = useState<IPuppy>();

  const router = useRouter();

  useEffect(() => {
    const getPuppy = async () => {
      let puppyResponse = await axios.get<IPuppy>(
        "http://localhost:3001/get-puppy",
        {
          withCredentials: true,
        }
      );

      setPuppy(puppyResponse.data);
    };
    getPuppy();
  }, [router]);

  if (!puppy) {
    return <div>Loading...</div>;
  }

  return <div>Din valp {puppy.name}</div>;
};

export default PuppyPage;
