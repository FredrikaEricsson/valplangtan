import axios from "axios";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Hamburger, Header, Logo, MenuLink } from "../styles/global";
const Navbar = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>();
  const [isOpen, setIsOpen] = useState(false);

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
      <Link href='/' passHref>
        <Logo>Valplängtan</Logo>
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Header isOpen={isOpen}>
        {userIsLoggedIn ? (
          <>
            <Link href='/puppy' passHref>
              <MenuLink>Min valp</MenuLink>
            </Link>
            <Link href='/checklist' passHref>
              <MenuLink>Checklista</MenuLink>
            </Link>
            <Link href='/settings' passHref>
              <MenuLink>Inställningar</MenuLink>
            </Link>
            <Link href='/' passHref>
              <MenuLink onClick={handleClick}>Logga ut</MenuLink>
            </Link>
          </>
        ) : (
          <Link href='/login' passHref>
            <MenuLink>Logga in</MenuLink>
          </Link>
        )}
      </Header>
    </>
  );
};

export default Navbar;
