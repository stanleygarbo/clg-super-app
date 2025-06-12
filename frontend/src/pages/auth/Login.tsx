import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { toast } from "react-toastify";
import { authState } from "../../store/auth";
import { jwtDecode } from "jwt-decode";
import { IUser } from "../../interface/IUser";
import { useMutation } from "@tanstack/react-query";
import Input from "../../components/props/Input";
import { LuEye } from "react-icons/lu";
import { RiEyeCloseLine } from "react-icons/ri";

const Login = () => {
  // const auth = useSnapshot(authState);
  const [userPass, setUserPass] = useState<string>("");
  const [userUsn, setUserUsn] = useState<string>("");
  const navigate = useNavigate();
  // const userRoles = auth.user.role;

  // const checkrole = (find: string) => {
  //   return userRoles?.includes(find);
  // };

  // useEffect(() => {
  //   // if (!auth?.user || !auth.user.role) return;

  //   if (checkrole("super") || checkrole("admin")) {
  //     navigate("/dashboard");
  //   } else if (checkrole("registrar")) {
  //     navigate("/registrarlayout/schedule");
  //   } else return;
  //   // console.log(auth);
  // }, [auth?.user]);

  //   const Superadmin = ["super", "admin"].some((role) =>
  //     auth.user.role.includes(role)
  //   );
  // };

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      // console.log(res);
      authState.token = res.token;
      const user = jwtDecode<IUser>(res.token);
      authState.user = user;
      toast.success("Login Successfully");
      navigate("/profile");
    },
    onError: () => {
      toast.error("Invalid credentials", { type: "error" });
    },
  });

  const proceedLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (userUsn && userPass) {
      mutation.mutate({ username: userUsn, password: userPass });
    }
  };

  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <div id="loginPopUp" className="h-screen py-20 px-5">
      <form
        onSubmit={proceedLogin}
        className="flex flex-col m-auto gap-3 mt-28 p-10 w-full xl:w-[450px] rounded-lg border"
      >
        <h1 className="text-base xl:text-2xl text-black font-bold mb-6 flex items-center justify-center">
          <img
            src="/aclc-logo.png"
            alt=""
            className="w-10 rounded-full border-2 border-blue-500 mr-2"
          />
          Welcome back! 🤗
        </h1>
        <Input label="Username" value={userUsn} onChange={setUserUsn} />
        <section className="relative group">
          <Input
            label="Password"
            type={showPass ? "text" : "password"}
            value={userPass}
            onChange={setUserPass}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-4 group-hover:opacity-100 opacity-0 top-1/2 -translate-y-1/2 text-sm text-blue-600 duration-200"
          >
            {showPass ? <RiEyeCloseLine size={20} /> : <LuEye size={20} />}
          </button>
        </section>
        {/* <span className="relative">
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
        </span> */}
        {/* <span className="relative">
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
        </span> */}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="mt-4 flex items-center justify-center pr-3 pl-3 bg-blue-500 rounded-md text-white hover:bg-blue-700 py-2 active:scale-95 font-bold duration-200"
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
