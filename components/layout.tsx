import { HeadingWrapper } from "../styles/global";
import Navbar from "./navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <HeadingWrapper>
        <Navbar></Navbar>
      </HeadingWrapper>
      <main>{children}</main>
    </>
  );
};

export default Layout;
