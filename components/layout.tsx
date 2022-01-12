import { HeadingWrapper, MainContainer } from "../styles/global";
import Navbar from "./navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <HeadingWrapper>
        <Navbar></Navbar>
      </HeadingWrapper>

      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default Layout;
