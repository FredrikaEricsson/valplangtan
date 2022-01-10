import axios from "axios";
import Link from "next/link";
import router from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../styles/global";
const Navbar = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>();

  useEffect(() => {
    const getUser = async () => {
      try {
        let res = await axios.get("http://localhost:3001/get-user", {
          withCredentials: true,
        });
        console.log(res);
        setUserIsLoggedIn(true);
      } catch (error) {
        setUserIsLoggedIn(false);
      }
    };
    getUser();
  }, []);

  const handleClick = async () => {
    try {
      await axios.get("http://localhost:3001/logout", {
        withCredentials: true,
      });
      return router.push("/login");
    } catch (error) {
      console.log("Någonting gick fel");
    }
  };

  return (
    <>
      <Header>
        <Link href='/puppy'>
          <a>Min valp</a>
        </Link>
        <Link href='/checklist'>
          <a>Checklista</a>
        </Link>
        <Link href='/settings'>
          <a>Inställningar</a>
        </Link>
        {userIsLoggedIn ? (
          <Link href='/'>
            <a onClick={handleClick}>Logga ut</a>
          </Link>
        ) : (
          <Link href='/login'>
            <a>Logga in</a>
          </Link>
        )}
      </Header>
    </>
  );
};

export default Navbar;
