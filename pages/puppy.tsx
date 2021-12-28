import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { DateTime } from "luxon";

interface IPuppy {
  birthDate: string;
  ageInWeeks: number;
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
      let dt = DateTime.now();
      let puppyBirthDate = DateTime.fromISO(puppyResponse.data.birthDate);
      let puppyAge = dt.diff(puppyBirthDate, ["weeks"]);

      setPuppy({
        birthDate: puppyResponse.data.birthDate,
        ageInWeeks: Math.floor(parseInt(puppyAge.weeks.toString())),
        name: puppyResponse.data.name,
      });
    };
    getPuppy();
  }, [router]);

  if (!puppy) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Din valp {puppy.name}</div>
      <div>är {puppy.ageInWeeks} vecka gammal</div>
    </>
  );
};

export default PuppyPage;
