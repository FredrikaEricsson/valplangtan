import { FooterContainer } from "../styles/footer";
import { HeadingWrapper, MainContainer } from "../styles/global";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <HeadingWrapper>
        <Navbar></Navbar>
      </HeadingWrapper>

      <MainContainer>{children}</MainContainer>
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </>
  );
};

export default Layout;
