import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { LuClipboard, LuDoorOpen, LuSchool } from "react-icons/lu";
import { ISidebarItem } from "../../components/sidebar/SidebarItems";
import { MdOutlineDashboard, MdSchedule } from "react-icons/md";
import { BiClinic } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useSnapshot } from "valtio";
import { authState } from "../../store/auth";
import { FaNoteSticky } from "react-icons/fa6";
import { BsFileSpreadsheet } from "react-icons/bs";

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

const registrarRole = ["super", "admin", "registrar"];
const adminRole = ["super", "admin"];
const admissionRole = ["super", "admin", "admission"];
const facultyRole = ["super", "admin", "faculty"];
const sccRole = ["super", "admin", "scc"];
const clinicRole = ["super", "admin", "clinic"];
const accountingRole = ["super", "admin", "accounting"];
const studentRole = ["student"];

const registrar: ISidebarItem = {
  name: "Registrar",
  icon: LuClipboard,
  type: "drawer",
  path: "registrar",
  allowedRoles: registrarRole,
  subItems: [
    {
      name: "Schedules",
      path: "/registrar/schedule",
    },
    {
      name: "Students",
      path: "/registrar/students",
    },
  ],
};

const admin: ISidebarItem = {
  name: "Admin",
  icon: RiAdminFill,
  type: "drawer",
  path: "admin",
  allowedRoles: adminRole,
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
};

const admission: ISidebarItem = {
  name: "Admission",
  icon: LuSchool,
  type: "drawer",
  path: "admission",
  allowedRoles: admissionRole,
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
};

const accounting: ISidebarItem = {
  name: "Accounting",
  icon: LuDoorOpen,
  type: "drawer",
  path: "accounting",
  allowedRoles: accountingRole,
};

const clinic: ISidebarItem = {
  name: "Clinic",
  icon: LuDoorOpen,
  type: "drawer",
  path: "clinic",
  allowedRoles: clinicRole,
  subItems: [
    {
      name: "Clinic",
      path: "/clinic/clinic",
    },
  ],
};

const faculty: ISidebarItem = {
  name: "Faculty",
  icon: LuDoorOpen,
  type: "drawer",
  path: "faculty",
  allowedRoles: facultyRole,
  subItems: [
    {
      name: "Faculty",
      path: "/faculty/faculty",
    },
  ],
};

const scc: ISidebarItem = {
  name: "SSC",
  icon: BiClinic,
  type: "drawer",
  path: "ssc",
  allowedRoles: sccRole,
  subItems: [
    {
      name: "SSC",
      path: "/ssc/ssc",
    },
  ],
};

const sidebarItemsConditional: ISidebarItem[] = [
  {
    name: "Dashboard",
    icon: MdOutlineDashboard,
    path: "/dashboard",
    allowedRoles: adminRole,
  },
  {
    name: "Profile",
    icon: FaUser,
    path: "/profile",
  },
  {
    name: "Grade",
    icon: FaNoteSticky,
    path: "/grade",
    allowedRoles: studentRole,
  },
  {
    name: "SubjectLoad",
    icon: BsFileSpreadsheet,
    path: "/subject-load",
    allowedRoles: studentRole,
  },
  {
    name: "Schedule",
    icon: MdSchedule,
    path: "/schedule",
    allowedRoles: studentRole,
  },
  admin,
  admission,
  registrar,
  accounting,
  faculty,
  clinic,
  scc,
];

// const sidebarItems = sidebarItemsConditional.filter((i) => {
//   return i != null;
// }) as ISidebarItem[];

const AdminLayout = () => {
  const snap = useSnapshot(authState);
  const userRoles = snap.user?.role || [];

  function filterItemsByRole(items: ISidebarItem[]): ISidebarItem[] {
    return items
      .filter((item) => {
        // If no allowedRoles, it's public
        if (!item.allowedRoles) return true;
        return item.allowedRoles.some((role) => userRoles.includes(role));
      })
      .map((item) => ({
        ...item,
        // Recursively filter subItems too
        subItems: item.subItems ? filterItemsByRole(item.subItems) : undefined,
      }));
  }

  const sidebarItems = filterItemsByRole(sidebarItemsConditional);

  return (
    <div className="flex min-h-screen box-border">
      <Sidebar sidebarItems={sidebarItems} />
      <div className="flex justify-center w-full">
        <div className="w-0 xl:w-80"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
