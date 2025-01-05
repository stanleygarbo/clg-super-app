import { useNavigate } from "react-router-dom";
import { RiSidebarFoldFill } from "react-icons/ri";
import SidebarItems, { ISidebarItem } from "./SidebarItems";
import { useSnapshot } from "valtio";
import { Data } from "../../store/Data";

const Sidebar = ({ sidebarItems }: { sidebarItems: ISidebarItem[] }) => {
  const navigate = useNavigate();
  const isOpen = useSnapshot(Data);

  return (
    <aside
      className={` ${
        isOpen ? "xs:w-[400px] sm:w-[400px] w-[250px]" : "w-[10px]"
      } relative duration-200 h-full bg-white xs:pr-4 sm:pr-4 border-r p-5  flex flex-col justify-between overflow-hidden`}
    >
      <button
        className={`absolute -right-3 top-9 w-7 text-xl md:hidden lg:hidden xl:hidden 2xl:hidden`}
        onClick={() => {
          Data.isOpen = false;
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
            sessionStorage.removeItem("");
            navigate("/login");
          }}
          className="rounded-md bg-gradient-to-t from-red-600 to-red-400 shadow-md shadow-red-500/50 hover:scale-105 active:scale-95 text-white font-bold w-full py-2 duration-200"
        >
          Log out
        </button>
      </section>
    </aside>
  );
};

export default Sidebar;
