import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div id="loginPopUp" className="oppUp pt-[20%]">
      <form className="flex flex-col m-auto pt-10 pb-10 w-[360px] bg-red-300 rounded-xl">
        <div className="m-auto pb-5">
          <h1 className="text-xl text-black font-bold bg-blue-200 pb-2 pt-2 pr-2 pl-2 rounded-xl">
            Login
          </h1>
        </div>

        <div className="flex flex-col m-auto p-auto pb-1">
          <input
            className="pl-10 pr-10 border-2 border-black rounded-xl"
            required
            type="text"
            placeholder="USN"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>

        <div className="flex flex-col m-auto p-auto pb-1">
          <input
            className="pl-10 pr-10 border-2 border-black rounded-xl"
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
          <button className="bg-grey pr-3 pl-3 bg-red-500 rounded-xl text-white">
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
