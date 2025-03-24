import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 flex z-50 w-full flex-row-reverse py-4 font-bold text-black border-b bg-white duration-200">
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
        <section className="flex gap-5">
          <div className="hover:bg-black hover:text-white p-2 rounded-md duration-300">
            <div className=""></div>
            <Link className="font-bold" to="/">
              HOME
            </Link>
          </div>
          <div className="hover:bg-black hover:text-white p-2 rounded-md duration-300">
            <Link className="font-bold" to="/about">
              ABOUT
            </Link>
          </div>
          <div className="hover:bg-black hover:text-white p-2 rounded-md duration-300">
            <Link className="font-bold" to="/login">
              LOGIN
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
