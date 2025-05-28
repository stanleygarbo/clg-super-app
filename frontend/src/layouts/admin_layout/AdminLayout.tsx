import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { LuClipboard, LuDoorOpen, LuSchool } from "react-icons/lu";
import { ISidebarItem } from "../../components/sidebar/SidebarItems";
import { MdOutlineDashboard } from "react-icons/md";
import { BiClinic } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

// const adminItems: ISidebarItem = {
//   name: "Admin",
//   icon: RiAdminFill,
//   type: "drawer",
//   path: "admin",
//   subItems: [
//     {
//       name: "Users",
//       path: "/admin/users",
//     },
//     {
//       name: "Positions & Departments",
//       path: "/admin/list-all",
//     },
//     {
//       name: "Employees",
//       path: "/admin/employees",
//     },
//   ],
// };

const sidebarItemsConditional = [
  {
    name: "Dashboard",
    icon: MdOutlineDashboard,
    path: "/dashboard",
  },
  {
    name: "Profile",
    icon: FaUser,
    path: "/profile",
  },
  {
    name: "Admin",
    icon: RiAdminFill,
    type: "drawer",
    path: "admin",
    subItems: [
      {
        name: "Users",
        path: "/admin/users",
      },
      {
        name: "Departments",
        path: "/admin/departmentdashboard",
      },
      {
        name: "Room List",
        path: "/admin/room-list",
      },
      {
        name: "Positions",
        path: "/admin/positiondashboard",
      },
      {
        name: "Programs",
        path: "/admin/programdashboard",
      },
      {
        name: "Courses",
        path: "/admin/coursedashboard",
      },
      {
        name: "Employees",
        path: "/admin/employees",
      },
      {
        name: "Subject Load",
        path: "/admin/subject-load",
      },
    ],
  },
  {
    name: "Admission",
    icon: LuSchool,
    type: "drawer",
    path: "admission",
    subItems: [
      {
        name: "Enroll Student",
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
      {
        name: "Dashboard",
        path: "/accounting/accounting-dashboard",
      },
      {
        name: "Student Fee",
        path: "/accounting/fee",
      },
    ],
  },
  {
    name: "Registrar",
    icon: LuClipboard,
    type: "drawer",
    path: "registrar",
    subItems: [
      {
        name: "Schedules",
        path: "/registrar/schedule",
      },
    ],
  },
  {
    name: "Faculty",
    icon: LuDoorOpen,
    type: "drawer",
    path: "faculty",
    subItems: [
      {
        name: "Faculty",
        path: "/faculty/faculty",
      },
    ],
  },
  {
    name: "Clinic",
    icon: LuDoorOpen,
    type: "drawer",
    path: "clinic",
    subItems: [
      {
        name: "Clinic",
        path: "/clinic/clinic",
      },
    ],
  },
  {
    name: "SSC",
    icon: BiClinic,
    type: "drawer",
    path: "ssc",
    subItems: [
      {
        name: "SSC",
        path: "/ssc/ssc",
      },
    ],
  },
];

const sidebarItems = sidebarItemsConditional.filter((i) => {
  return i != null;
}) as ISidebarItem[];

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen box-border">
      <Sidebar sidebarItems={sidebarItems} />
      <div className="flex justify-center w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
