import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 flex z-50 w-full flex-row-reverse gap-4 bg-white pt-5 pb-5 m-auto border-b">
      <div className="flex gap-x-1 justify-between items-center w-full px-10">
        <div className="flex items-start pr-2 pl-2">
          <Link className=" flex text-xs font-bold items-center" to="/">
            <img
              src="./src/Pictures/images.png"
              alt="ACLC"
              className="size-11 rounded-full border-2 border-red-500"
            />
            <p className="ml-3 text-sm font-black">ACLC COLLEGE</p>
            <span className="text-2xl ml-2">🌿</span>
          </Link>
        </div>
        <section className="flex gap-5 ">
          <div className="pr-2 pl-2 hover:text-red-500 transition-all hover:scale-110">
            <Link className="text-base font-bold  " to="/">
              Home
            </Link>
          </div>
          <div className="pr-2 pl-2 hover:text-red-500 transition-all hover:scale-110">
            <Link className="text-base font-bold" to="/about">
              About
            </Link>
          </div>
          <div className="pr-2 pl-2 hover:text-red-500 transition-all hover:scale-110">
            <Link className="text-base font-bold" to="/login">
              Login
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
