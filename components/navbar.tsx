import axios from "axios";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Hamburger, Header, Logo, MenuLink, Headline } from "../styles/global";

const Navbar = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>();
  const [userHasPuppy, setUserHasPuppy] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const getRouter = useRouter();
  const routerPath = getRouter.pathname;
  useEffect(() => {
    const getUser = async () => {
      try {
        let userResponse = await axios.get("http://localhost:3001/get-user", {
          withCredentials: true,
        });
        if (userResponse.data.puppy.name !== "") {
          setUserHasPuppy(true);
        }
        setUserIsLoggedIn(true);
        setIsOpen(false);
      } catch (error) {
        setUserIsLoggedIn(false);
        setIsOpen(false);
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
        <Logo>
          <Headline>Valplängtan</Headline>
        </Logo>
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Header isOpen={isOpen}>
        {userIsLoggedIn ? (
          <>
            {userHasPuppy ? (
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
              </>
            ) : (
              <Link href='/add-new-puppy' passHref>
                <MenuLink>Ny valp</MenuLink>
              </Link>
            )}
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
