import React from "react";
import { FaChevronDown } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export type ISidebarItem = {
  name: string;
  icon?: React.ElementType;
  subItems?: ISidebarItem[];
  type?: "drawer";
  path: string;
};

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
        const isActive = pathname.includes(i.path);
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
                "leading-none text-sm font-semibold",
                isActive && depth === 1 ? textActiveStyles : textInactiveStyles
              )}
            >
              <section
                className={twMerge(
                  "rounded-md h-[42px] flex justify-between items-center mb-1 pr-4",
                  isActive && depth === 1 ? "bg-red-50" : "hover:bg-gray-100"
                )}
                style={{
                  paddingLeft: depth > 0 ? ` ${16 * depth}px` : "",
                }}
              >
                <div className="flex items-center">
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
                          "w-4 h-4 rounded-sm mr-4 flex items-center justify-center",
                          isActive && "bg-red-200"
                        )}
                      >
                        <span
                          className={twMerge(
                            "w-2 h-2 rounded-sm",
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
                      "duration-200",
                      open === i.name && "rotate-180"
                    )}
                  />
                )}
              </section>
            </Link>
            <div
              className={twMerge(
                "duration-300 overflow-hidden"
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

export default SidebarItems;
