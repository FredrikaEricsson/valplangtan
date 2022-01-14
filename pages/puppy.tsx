import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { DateTime } from "luxon";
import {
  HeaderWrapper,
  ImageWrapper,
  PuppyPageWrapper,
  UpdateWrapper,
} from "../styles/puppy";
import { Headline } from "../styles/global";
import Image from "next/image";
import puppyImage from "../public/puppy.png";
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
      try {
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
      } catch (error: any) {
        if (error.response.status === 401) {
          return router.push("/login");
        }
        if (error.response.status === 403) {
          return router.push("/add-new-puppy");
        } else {
          return router.push("/error");
        }
      }
    };
    getPuppy();
  }, [router]);

  if (!puppy || !update) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PuppyPageWrapper>
        <HeaderWrapper>
          <Headline>
            Din valp {puppy.name} är inne i vecka {puppy.ageInWeeks}
          </Headline>
        </HeaderWrapper>
        <ImageWrapper>
          <Image src={puppyImage} alt='puppy'></Image>
        </ImageWrapper>
        <UpdateWrapper>
          <p>{update?.content}</p>
        </UpdateWrapper>
      </PuppyPageWrapper>
    </>
  );
};

export default PuppyPage;
