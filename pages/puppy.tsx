import { ChangeEvent, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import Cookies from "js-cookie";

const PuppyPage = () => {
  let cookie = Cookies.get("token");
  console.log(cookie);
  const { data, error } = useSWR("/api/puppies/1", async () => {
    const { data } = await axios.get<any>(
      "http://localhost:1337/api/puppy/me",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM5NjQ5NDkzLCJleHAiOjE2NDIyNDE0OTN9._oa1GBvIpO-1kSETVB2BJFvdVfsFgDPQsV6uSsjVuzo",
        },
      }
    );
    return data.data;
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>Din valp {data.attributes.Name}</div>;
};

export default PuppyPage;
