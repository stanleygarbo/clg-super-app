import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row-reverse gap-4 bg-white pt-5 pb-5 m-auto border-b">
      <div className="flex gap-x-1 justify-between w-full px-5">
        <div className="flex items-start pr-2 pl-2">
          <Link className=" flex text-xs font-bold items-center" to="/">
            <img
              src="./src/Pictures/images.png"
              alt="ACLC"
              className="size-[2rem] rounded-full"
            />
            <p className="ml-3 text-sm font-black">ACLC COLLEGE</p>
          </Link>
        </div>
        <section className="flex">
          <div className="pr-2 pl-2 hover:text-red-500 transition-all hover:scale-110">
            <Link className="text-xs font-bold  " to="/">
              Home
            </Link>
          </div>
          <div className="pr-2 pl-2 hover:text-red-500 transition-all hover:scale-110">
            <Link className="text-xs font-bold" to="/about">
              About
            </Link>
          </div>
          <div className="pr-2 pl-2 hover:text-red-500 transition-all hover:scale-110">
            <Link className="text-xs font-bold" to="/login">
              Login
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
