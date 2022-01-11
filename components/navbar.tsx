import axios from "axios";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../styles/global";
const Navbar = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>();

  const getRouter = useRouter();
  const routerPath = getRouter.pathname;
  useEffect(() => {
    const getUser = async () => {
      try {
        await axios.get("http://localhost:3001/get-user", {
          withCredentials: true,
        });
        setUserIsLoggedIn(true);
      } catch (error) {
        setUserIsLoggedIn(false);
      }
    };
    getUser();
  }, [routerPath]);

  const handleClick = async () => {
    try {
      await axios.get("http://localhost:3001/logout", {
        withCredentials: true,
      });
      return router.push("/");
    } catch (error) {
      console.log("Någonting gick fel");
    }
  };

  return (
    <>
      <Header>
        {userIsLoggedIn ? (
          <>
            <Link href='/puppy'>
              <a>Min valp</a>
            </Link>
            <Link href='/checklist'>
              <a>Checklista</a>
            </Link>
            <Link href='/settings'>
              <a>Inställningar</a>
            </Link>
            <Link href='/'>
              <a onClick={handleClick}>Logga ut</a>
            </Link>
          </>
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
