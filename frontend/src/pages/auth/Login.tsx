import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div id="loginPopUp" className="">
      <form className="flex flex-col m-auto gap-2 py-12 px-12 w-[450px] rounded-xl bg-white border mt-[100px]">
        <h1 className="text-2xl text-black font-bold mb-6 flex items-center justify-center">
          <img
            src="/aclc-logo.png"
            alt=""
            className="w-10 rounded-full border-2 border-blue-500 mr-2"
          />
          Welcome back! 🤗
        </h1>

        <input
          className="py-2 px-4 rounded-md border border-gray-300"
          required
          type="text"
          placeholder="USN"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <input
          className="py-2 px-4 rounded-md border border-gray-300"
          required
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        ></input>
        <button className="mt-4 pr-3 pl-3 bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-red-500/50 rounded-md text-white hover:bg-red-500 hover:text-white transition-all duration-300 py-2">
          Log In
        </button>
        <p className="text-xs mt-8 text-center px-10">
          If you forgot your password please go to the admin to have it changed
          or retrieved.
        </p>
      </form>
    </div>
  );
};

export default Login;
