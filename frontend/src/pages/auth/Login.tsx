import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { toast } from "react-toastify";
import { authState } from "../../store/auth";
import { jwtDecode } from "jwt-decode";
import { IUser } from "../../interface/IUser";
import { useMutation } from "@tanstack/react-query";
import { useSnapshot } from "valtio";

const Login = () => {
  const auth = useSnapshot(authState);
  const [userPass, setUserPass] = useState<string>("");
  const [userUsn, setUserUsn] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) {
      navigate("/login");
    }
  }, []);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      console.log(res);
      authState.token = res.token;
      const user = jwtDecode<IUser>(res.token);
      authState.user = user;

      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error("Invalid credentials", { type: "error" });
    },
  });

  const proceedLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (userUsn && userPass) {
      mutation.mutate({ username: userUsn, password: userPass });
    }
  };

  return (
    <div id="loginPopUp" className=" h-screen py-20">
      <form
        onSubmit={proceedLogin}
        className="flex flex-col m-auto shadow-md gap-2 py-12 px-12 w-[500px] xs:w-[400px] sm:w-[450px] rounded-xl bg-white border mt-[100px]"
      >
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
            value={userUsn}
            onChange={(e) => {
              setUserUsn(e.target.value);
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
            value={userPass}
            onChange={(e) => {
              setUserPass(e.target.value);
            }}
          />
        </span>
        <button
          type="submit"
          disabled={mutation.isPending}
          className="mt-4 flex items-center justify-center pr-3 pl-3 bg-blue-600 shadow-sm shadow-blue-500/50 rounded-md text-white hover:scale-105 py-2 active:scale-95 font-bold duration-200"
        >
          {mutation.isPending ? (
            <img src="/loading.svg" className="invert" alt="" />
          ) : (
            "Log In"
          )}
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
