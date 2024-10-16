import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { FaRegUser } from "react-icons/fa";
import { LuDoorOpen, LuSchool } from "react-icons/lu";
import { ISidebarItem } from "../components/sidebar/SidebarItems";

const sidebarItems: ISidebarItem[] = [
  {
    name: "Users",
    icon: FaRegUser,
    type: "drawer",
    path: "/users",
    subItems: [
      {
        name: "All Users",
        path: "/users",
      },
      {
        name: "SSC",
        path: "/users/ssc",
        type: "drawer",
        icon: LuSchool,
        subItems: [
          {
            name: "CS Dept.",
            path: "/users/ssc",
          },
          {
            name: "HM Dept.",
            path: "/users/ssc",
          },
          {
            name: "BA Dept.",
            path: "/users/ssc",
          },
        ],
      },
    ],
  },
  {
    name: "Addmission",
    icon: LuDoorOpen,
    type: "drawer",
    path: "/admin/admission",
    subItems: [
      {
        name: "Students",
        path: "/admin/admission/students",
      },
      {
        name: "Enroll Student",
        path: "/admin/admission/enroll-student",
      },
    ],
  },
];

const AdminLayout = () => {
  return (
    <div className="flex pl-[300px]">
      <div className="fixed left-0 top-0 h-screen">
        <Sidebar sidebarItems={sidebarItems} />
      </div>
      <div className="max-w-[1000px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
