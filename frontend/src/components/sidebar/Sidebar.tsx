import { useNavigate } from "react-router-dom";
import { RiSidebarFoldFill } from "react-icons/ri";
import SidebarItems, { ISidebarItem } from "./SidebarItems";
import { useState } from "react";

const Sidebar = ({ sidebarItems }: { sidebarItems: ISidebarItem[] }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <aside>
      <div
        className={` ${
          isOpen
            ? "w-[10px]"
            : "xs:w-[400px] sm:w-[400px] w-[250px] xl:w-[300px]"
        } duration-200 min-h-screen h-full bg-white xs:pr-4 sm:pr-4 fixed border-r p-5 flex flex-col justify-between overflow-y-scroll no-scrollbar`}
      >
        <button
          className={`absolute -right-3 top-9 w-7 text-xl md:hidden lg:hidden xl:hidden 2xl:hidden`}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <RiSidebarFoldFill />
        </button>
        {/* <section
        className={`${
          open ? "w-72" : "w-20"
        } h-screen bg-slate-100 relative duration-200`}
      ></section> */}
        <div>
          <section className="flex justify-center mb-10">
            <img src="/aclc-logo.png" className="w-[100px] h-[100px]" alt="" />
          </section>
          <section>
            <SidebarItems data={sidebarItems} depth={1} />
          </section>
        </div>

        <section>
          {/* <div className="w-full h-px bg-gray-300 mb-5"></div> */}
          <button
            onClick={() => {
              localStorage.removeItem("auth");
              navigate("/login");
            }}
            className="rounded-md bg-gradient-to-t from-red-600 to-red-400 shadow-md shadow-red-500/50 hover:scale-105 active:scale-95 text-white font-bold w-full py-2 duration-200"
          >
            Log out
          </button>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
