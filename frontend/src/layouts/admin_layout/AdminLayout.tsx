import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaRegUser } from "react-icons/fa";
import { LuDoorOpen, LuSchool } from "react-icons/lu";
import { ISidebarItem } from "../../components/sidebar/SidebarItems";

const sidebarItems: ISidebarItem[] = [
  {
    name: "Admin",
    icon: FaRegUser,
    type: "drawer",
    path: "admin",
    subItems: [
      {
        name: "Profile",
        path: "/admin/profile",
      },
      {
        name: "Users",
        path: "/admin/users",
      },
    ],
  },
  {
    name: "Addmission",
    icon: LuSchool,
    type: "drawer",
    path: "admission",
    subItems: [
      {
        name: "Enroll",
        path: "/admission/eform",
      },
      {
        name: "Students",
        path: "/admission/enroll-student",
      },
    ],
  },
  {
    name: "Accounting",
    icon: LuDoorOpen,
    type: "drawer",
    path: "accounting",
    subItems: [
      // {
      //   name: "Enroll Student",
      //   path: "/admin/main/eform",
      // },
      // {
      //   name: "Enrolled Students",
      //   path: "/admin/main/enroll-student",
      // },
    ],
  },
  {
    name: "Registrar",
    icon: LuDoorOpen,
    type: "drawer",
    path: "registrar",
    subItems: [
      // {
      //   name: "Enroll Student",
      //   path: "/admin/main/eform",
      // },
      // {
      //   name: "Enrolled Students",
      //   path: "/admin/main/enroll-student",
      // },
    ],
  },
];

const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-screen">
        <Sidebar sidebarItems={sidebarItems} />
      </div>
      <div className="pr-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
