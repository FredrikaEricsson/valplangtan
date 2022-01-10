import Link from "next/link";
import { Header } from "../styles/global";
const Navbar = () => {
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
        <Link href='/login'>
          <a>Logga in</a>
        </Link>
      </Header>
    </>
  );
};

export default Navbar;
