import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaRegUser } from "react-icons/fa";
import { LuClipboard, LuDoorOpen, LuSchool } from "react-icons/lu";
import { ISidebarItem } from "../../components/sidebar/SidebarItems";
import { BiClinic } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";

const sidebarItems: ISidebarItem[] = [
    {
        name: "Dashboard",
        icon: MdOutlineDashboard,
        path: "/dashboard",
    },
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
            {
                name: "Employees",
                path: "/admission/employees",
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
        icon: LuClipboard,
        type: "drawer",
        path: "registrar",
        subItems: [
            {
                name: "Grades",
                path: "/registrar/grades",
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

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar sidebarItems={sidebarItems} />
            <div className="flex justify-center w-full px-20 xs:px-5 mt-10">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
