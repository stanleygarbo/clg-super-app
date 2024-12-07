import { useNavigate } from "react-router-dom";
import { RiSidebarFoldFill } from "react-icons/ri";
import SidebarItems, { ISidebarItem } from "./SidebarItems";
import { useSnapshot } from "valtio";
import { userData } from "../../store/UserData";

const Sidebar = ({ sidebarItems }: { sidebarItems: ISidebarItem[] }) => {
  const navigate = useNavigate();
  const snap = useSnapshot(userData);

  return (
    <aside
      className={` ${
        snap.open ? "xs:w-[400px] sm:w-[400px] w-[250px]" : "w-[10px]"
      } relative duration-200 h-full bg-white xs:pr-4 sm:pr-4 border-r p-5  flex flex-col justify-between overflow-hidden`}
    >
      <button
        className={`absolute -right-3 top-9 w-7 text-xl md:hidden lg:hidden xl:hidden 2xl:hidden`}
        onClick={() => {
          userData.open = !snap.open;
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
        <img src="/aclc-logo-text.png" className="pl-4 mb-8 w-[200px]" alt="" />
        <SidebarItems data={sidebarItems} depth={1} />
      </div>
      <section>
        {/* <div className="w-full h-px bg-gray-300 mb-5"></div> */}
        <button
          onClick={() => {
            sessionStorage.removeItem("");
            navigate("/login");
          }}
          className="rounded-md bg-red-500 text-white w-full py-2 hover:scale-105 duration-200"
        >
          Log out
        </button>
      </section>
    </aside>
  );
};

export default Sidebar;
