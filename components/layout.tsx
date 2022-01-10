import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
