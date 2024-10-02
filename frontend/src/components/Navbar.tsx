import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row-reverse bg-blue-400 pt-5 pb-5 m-auto">
      <div className="flex gap-x-1">
        <div className="pr-2 pl-2 hover:text-red-100 transition-all">
          <Link className="text-xs font-bold" to="/">
            Home
          </Link>
        </div>
        <div className="pr-2 pl-2 hover:text-red-100 transition-all">
          <Link className="text-xs font-bold" to="/about">
            About
          </Link>
        </div>
        <div className="pr-2 pl-2 hover:text-red-100 transition-all">
          <Link className="text-xs font-bold" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
