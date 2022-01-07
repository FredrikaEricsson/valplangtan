import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { DateTime } from "luxon";

interface IPuppy {
  birthDate: string;
  ageInWeeks: number;
  name: string;
}

interface IPuppyResponse {
  birthDate: string;
  ageInWeeks: number;
  name: string;
  updateByWeek: string;
}

interface IPuppyUpdate {
  content: string;
}

const PuppyPage = () => {
  const [puppy, setPuppy] = useState<IPuppy>();
  const [update, setUpdate] = useState<IPuppyUpdate>();
  const router = useRouter();

  useEffect(() => {
    const getPuppy = async () => {
      let puppyResponse = await axios.get<IPuppyResponse>(
        "http://localhost:3001/get-puppy",
        {
          withCredentials: true,
        }
      );

      setPuppy({
        birthDate: puppyResponse.data.birthDate,
        ageInWeeks: puppyResponse.data.ageInWeeks,
        name: puppyResponse.data.name,
      });
      setUpdate({
        content: puppyResponse.data.updateByWeek,
      });
    };
    getPuppy();
  }, [router]);

  if (!puppy || !update) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Din valp {puppy.name}</div>
      <div>är inne i vecka {puppy.ageInWeeks} </div>
      <div>{update?.content}</div>
    </>
  );
};

export default PuppyPage;
