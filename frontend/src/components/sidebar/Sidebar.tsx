import { useNavigate } from "react-router-dom";
import { RiSidebarFoldFill, RiMenuFill } from "react-icons/ri";
import SidebarItems, { ISidebarItem } from "./SidebarItems";
// import { useState } from "react";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../store/auth";
// import { useEffect } from "react";

const Sidebar = ({ sidebarItems }: { sidebarItems: ISidebarItem[] }) => {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState<boolean>(true);
  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   // Cleanup on unmount
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpen]);

  return (
    <>
      {/* Toggle button: shows hamburger when closed, fold icon when open */}
      <button
        onClick={() => (sidebarState.isOpen = !sidebarState.isOpen)}
        className="fixed top-5 left-2 z-50 p-2 bg-white border rounded-md shadow-md md:hidden"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <RiSidebarFoldFill size={20} /> : <RiMenuFill size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bg-white p-5 h-full overflow-y-auto no-scrollbar border-r flex flex-col justify-between duration-200
          ${isOpen ? "w-80 xl:w-72" : "w-0 left-[-50px] overflow-hidden"}
        `}
      >
        {isOpen && (
          <>
            <section className="flex justify-center mb-10">
              <img
                src="/aclc-logo.png"
                className="w-[100px] h-[100px]"
                alt="Logo"
              />
            </section>
            <section>
              <SidebarItems data={sidebarItems} depth={1} />
            </section>

            <section>
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
          </>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
