import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen pb-[104px]">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
