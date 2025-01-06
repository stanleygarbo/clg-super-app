import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 flex z-50 w-full flex-row-reverse xs:py-3 py-4 font-serif text-black border-b bg-white duration-200">
      <div className="flex gap-x-1 justify-between items-center w-full xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex pr-2 pl-2">
          <Link className=" flex text-xs font-bold items-center" to="/">
            <img
              src="/aclc-logo.png"
              alt="ACLC"
              className="size-11 rounded-full border border-red-500 object-fit"
            />
            <p className="ml-2 xs:text-xs  text-sm font-bold">ACLC COLLEGE</p>
            <span className="text-2xl xs:text-sm sm:text-lg md:text-lg lg:text-xl ml-2">
              🌿
            </span>
          </Link>
        </div>
        <section className="flex gap-5">
          <div className=" hover:text-blue-700 hover:scale-105 duration-200">
            <Link className="xs:text-sm sm:text-sm font-bold" to="/">
              Home
            </Link>
          </div>
          <div className=" hover:text-blue-700 hover:scale-105 duration-200">
            <Link className="xs:text-sm sm:text-sm font-bold" to="/about">
              About
            </Link>
          </div>
          <div className=" hover:text-blue-700 hover:scale-105 duration-200">
            <Link className="xs:text-sm sm:text-sm font-bold" to="/login">
              Login
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
