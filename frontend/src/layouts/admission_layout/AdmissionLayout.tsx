import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaRegUser } from "react-icons/fa";
import { LuDoorOpen, LuSchool } from "react-icons/lu";
import { ISidebarItem } from "../../components/sidebar/SidebarItems";

const AdmissionLayout = () => {
  const sidebarItems: ISidebarItem[] = [
    {
      name: "User",
      icon: FaRegUser,
      type: "drawer",
      path: "user",
      subItems: [
        {
          name: "Profile",
          path: "user/profile",
        },
      ],
    },
    {
      name: "Addmission",
      icon: LuDoorOpen,
      type: "drawer",
      path: "admission/main",
      subItems: [
        {
          name: "Student",
          path: "/users/ssc",
          type: "drawer",
          icon: FaRegUser,
          subItems: [
            {
              name: "Enroll Student",
              path: "/admission/main/eform",
            },
            {
              name: "Student Enrolled",
              path: "/admission/main/enrolledstudent",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex pl-[300px]">
      <div className="fixed left-0 top-0 h-screen">
        <Sidebar sidebarItems={sidebarItems} />
      </div>
      <div className="m-20">
        <Outlet />
      </div>
    </div>
  );
};

export default AdmissionLayout;
