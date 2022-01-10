import Link from "next/link";

const Header = () => {
  return (
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
      <Link href='/login'>
        <a>Logga in</a>
      </Link>
    </>
  );
};

export default Header;
