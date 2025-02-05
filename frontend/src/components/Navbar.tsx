import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 flex z-50 w-full flex-row-reverse py-4 font-serif text-black border-b bg-white duration-200">
      <div className="flex gap-x-1 justify-between items-center w-full px-2 md:px-5">
        <div className="flex">
          <Link className="flex text-[8px] font-bold items-center" to="/">
            <img
              src="/aclc-logo.png"
              alt="ACLC"
              className="size-11 md:size-12 rounded-full border border-red-500 object-fit"
            />
            <p className="px-1 text-xs font-bold md:text-base">ACLC COLLEGE</p>
            {/* <span className="text-sm mr-5">🌿</span> */}
          </Link>
        </div>
        <section className="flex gap-3 text-sm md:text-base">
          <div className=" hover:text-blue-700 hover:scale-105 duration-200">
            <Link className="font-bold" to="/">
              Home
            </Link>
          </div>
          <div className=" hover:text-blue-700 hover:scale-105 duration-200">
            <Link className="font-bold" to="/about">
              About
            </Link>
          </div>
          <div className=" hover:text-blue-700 hover:scale-105 duration-200">
            <Link className="font-bold" to="/login">
              Login
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
