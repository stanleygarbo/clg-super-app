import SidebarItems, { ISidebarItem } from "./SidebarItems";

const Sidebar = ({ sidebarItems }: { sidebarItems: ISidebarItem[] }) => {
  return (
    <aside className="w-[260px] h-full bg-white border-r p-5 flex flex-col justify-between">
      <div>
        <img src="/aclc-logo-text.png" className="pl-4 w-36 mb-8" alt="" />
        <SidebarItems data={sidebarItems} depth={1} />
      </div>
      <section>
        <div className="w-full h-px bg-gray-300 mb-5"></div>
        <button className="rounded-md bg-red-500 text-white w-full py-2">
          Log out
        </button>
      </section>
    </aside>
  );
};

export default Sidebar;
