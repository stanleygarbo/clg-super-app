import { useState } from "react";
import { RiSidebarFoldFill } from "react-icons/ri";

const TestSidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex">
      <section
        className={`${
          open ? "w-72" : "w-20"
        } h-screen bg-slate-100 relative duration-200`}
      >
        <button
          className={`absolute -right-3 top-9 w-7 text-xl ${
            !open && "rotate-180"
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <RiSidebarFoldFill />
        </button>
      </section>
    </div>
  );
};

export default TestSidebar;
