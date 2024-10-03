import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div id="loginPopUp" className="pt-[10rem] bg-white h-screen ">
      <form className="flex flex-col m-auto pt-12 pb-12 w-[360px] rounded-xl bg-white shadow-2xl">
        <div className="pl-10 pb-5">
          <h1 className="text-xl text-black font-bold pt-2 pr-2 pl-2 rounded-xl">
            Login
          </h1>
        </div>

        <div className="flex flex-col m-auto p-auto pb-1 w-[270px]">
          <input
            className="pl-5 border border-black rounded"
            required
            type="text"
            placeholder="USN"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>

        <div className="flex flex-col m-auto p-auto pb-1 w-[270px]">
          <input
            className="pl-5 border rounded border-black w-[270px]"
            required
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          ></input>
        </div>

        <div className="m-auto pt-4">
          <button className="pr-3 pl-3 bg-blue-500 shadow-lg shadow-blue-500/50 rounded-xl text-white hover:text-black hover:bg-white transition-all w-[270px] py-2">
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
