import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="m-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
