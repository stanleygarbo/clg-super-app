import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuDoorOpen, LuSchool } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { proxy } from "valtio";

const sidebarStore = proxy({
  currentOpen: "",
});

type ISidebarItem = {
  name: string;
  icon?: React.ElementType;
  subItems?: ISidebarItem[];
  type?: "drawer";
  path: string;
};

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
        path: "/admin/users/ssc",
        icon: LuSchool,
        subItems: [
          {
            name: "CS Dept. ",
            path: "/admin/users/ssc",
          },
          {
            name: "HM Dept. ",
            path: "/admin/users/ssc",
          },
        ],
      },
    ],
  },
  {
    name: "Addmission",
    icon: LuDoorOpen,
    type: "drawer",
    path: "/admission",
    subItems: [
      {
        name: "Students",
        path: "/admission",
      },
      {
        name: "Enroll Student",
        path: "/admin/users/ssc",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="w-[260px] bg-white border-r p-5">
      <img src="/aclc-logo-text.png" className="pl-4 w-36 mb-8" alt="" />
      <SidebarItems data={sidebarItems} depth={1} />
    </aside>
  );
};

const SidebarItems = ({
  data,
  depth,
}: {
  data: ISidebarItem[];
  depth: number;
}) => {
  const { pathname } = useLocation();
  const textInactiveStyles = "text-gray-600";
  const textActiveStyles = "text-red-600";

  return (
    <ul className="">
      {data.map((i) => {
        const isActive = pathname === i.path;
        return (
          <li key={i.name}>
            <Link
              to={i.path || ""}
              onClick={(e) => {
                if (i.type === "drawer") e.preventDefault();
              }}
              className={twMerge(
                "leading-none text-sm font-medium",
                isActive && depth === 1 ? textActiveStyles : textInactiveStyles
              )}
            >
              <section
                className={twMerge(
                  "rounded-md h-[42px] flex items-center mb-1",
                  isActive && depth === 1 ? "bg-red-50" : "hover:bg-gray-100"
                )}
                style={{
                  paddingLeft: depth > 0 ? `${16 * depth}px` : "",
                }}
              >
                {i.icon ? (
                  <i.icon
                    size={18}
                    className={twMerge(
                      "mr-4",
                      isActive ? textActiveStyles : textInactiveStyles
                    )}
                  />
                ) : (
                  depth > 0 && (
                    <div
                      className={twMerge(
                        "w-4 h-4 rounded-full mr-4 flex items-center justify-center",
                        isActive && "bg-red-200"
                      )}
                    >
                      <span
                        className={twMerge(
                          "w-2 h-2 rounded-full",
                          isActive ? "bg-red-500" : "bg-gray-400"
                        )}
                      />
                    </div>
                  )
                )}
                {i.name}
              </section>
            </Link>
            {i.subItems && <SidebarItems data={i.subItems} depth={depth + 1} />}
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
