import { useSnapshot } from "valtio";
import { studentData } from "../../store/StudentData";

const Login = () => {
  const snap = useSnapshot(studentData);

  return (
    <div id="loginPopUp" className=" h-screen py-20">
      <form className="flex flex-col m-auto shadow-md gap-2 py-12 px-12 w-[500px] xs:w-[400px] sm:w-[450px] rounded-xl bg-white border mt-[100px]">
        <h1 className="text-2xl text-black font-bold mb-6 flex items-center justify-center">
          <img
            src="/aclc-logo.png"
            alt=""
            className="w-10 rounded-full border-2 border-blue-500 mr-2"
          />
          Welcome back! 🤗
        </h1>

        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            User Name
          </p>
          <input
            className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            type="text"
            required
            value={snap.usn}
            onChange={(e) => {
              studentData.usn = e.target.value;
            }}
          />
        </span>
        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            Password
          </p>
          <input
            className="border border-slate-500 h-[42px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
            type="password"
            required
            value={snap.password}
            onChange={(e) => {
              studentData.password = e.target.value;
            }}
          />
        </span>
        <button
          type="submit"
          className="mt-4 pr-3 pl-3 bg-blue-600 shadow-sm shadow-blue-500/50 rounded-md text-white hover:scale-105 py-2 active:scale-95 font-bold duration-200"
        >
          Log In
        </button>
        <p className="xs:text-xs text-sm mt-8 text-center px-10">
          If you forgot your password please go to the admin to have it changed
          or retrieved.
        </p>
      </form>
    </div>
  );
};

export default Login;
