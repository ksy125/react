import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full m-auto max-w-3xl mt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
