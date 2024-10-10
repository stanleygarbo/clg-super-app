import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-[1000px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
