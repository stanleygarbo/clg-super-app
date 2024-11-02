import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar sidebarItems={[]} />
      <div className="max-w-[1000px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
