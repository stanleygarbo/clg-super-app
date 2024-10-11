import React from "react";
import { FaChevronDown, FaRegUser } from "react-icons/fa";
import { LuDoorOpen, LuSchool } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

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
    path: "/admission",
    subItems: [
      {
        name: "Students",
        path: "/admission/students",
      },
      {
        name: "Enroll Student",
        path: "/admission/enroll-student",
      },
    ],
  },
];

function countItems(items: ISidebarItem[] | undefined) {
  let count = 1;

  if (items) {
    for (const item of items) {
      count += item.subItems?.length || 0;
      count += countItems(item.subItems);
    }
  }

  return count;
}

function countDescendants(item: ISidebarItem) {
  let count = 1;

  count += countItems(item.subItems);
  // for (const i of items) {
  //   // console.log(i.name);
  //   // listHeight +=
  //   //   4 * (i.subItems?.length || 0) + 42 * (i.subItems?.length || 0);
  //   // listHeight += countDescendants(i.subItems);

  //   count += i.subItems?.length || 0;
  //   count += countDescendants(i.subItems);
  // }

  return count;
}

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
  const [open, setOpen] = React.useState<string>("");

  return (
    <ul>
      {data.map((i) => {
        const isActive = pathname === i.path;
        let totalDescendants = countDescendants(i);

        const listHeight =
          4 * (totalDescendants || 0) + 42 * (totalDescendants || 0);

        return (
          <li key={i.name} className="">
            <Link
              to={i.path || ""}
              onClick={(e) => {
                if (i.type === "drawer") {
                  e.preventDefault();
                  if (open === i.name) {
                    setOpen("");
                  } else {
                    setOpen(i.name);
                  }
                }
              }}
              className={twMerge(
                "leading-none text-sm font-medium",
                isActive && depth === 1 ? textActiveStyles : textInactiveStyles
              )}
            >
              <section
                className={twMerge(
                  "rounded-md h-[42px] flex justify-between items-center mb-1 pr-4",
                  isActive && depth === 1 ? "bg-red-50" : "hover:bg-gray-100"
                )}
                style={{
                  paddingLeft: depth > 0 ? `${16 * depth}px` : "",
                }}
              >
                <div className="flex items-center ">
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
                </div>
                {i.type === "drawer" && (
                  <FaChevronDown
                    className={twMerge(
                      "transition-all",
                      open === i.name && "rotate-180"
                    )}
                  />
                )}
              </section>
            </Link>
            <div
              className={twMerge(
                "transition-all duration-300 overflow-hidden"
                // open === i.name ? "h-fit" : "h-0"
              )}
              style={{
                maxHeight: open === i.name ? listHeight : "0",
              }}
            >
              {i.subItems && (
                <SidebarItems data={i.subItems} depth={depth + 1} />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
