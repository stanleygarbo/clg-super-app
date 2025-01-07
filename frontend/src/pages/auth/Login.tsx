import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { studentData } from "../../store/StudentData";

const Login = () => {
  const [userPass, setUserPass] = useState<string>("");
  const [userUsn, setUserUsn] = useState<string>("");
  const navigate = useNavigate();

  const snap = useSnapshot(studentData);

  const proceedLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/students/" + snap.usn)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          setUserUsn(resp.id);
          setUserPass(resp.studentData.password);
        })
        .catch((err) => {
          console.log(err.message);
        });
      console.log("okay");
    }
  };

  const validate = () => {
    let result = true;
    if (snap.password === "" || snap.password === null) {
      result = false;
      console.log("Enter Password");
    }
    if (snap.usn === "" || snap.usn === null) {
      result = false;
      console.log("Enter User Name");
    }

    return result;
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
          onClick={() => {
            if (snap.usn === "") {
              console.log("Enter User Name");
            }
            if (snap.password === "") {
              console.log("Enter Password");
            }
            if (snap.usn === userUsn && snap.password === userPass) {
              console.log("Login Successfully");
              navigate("/dashboard");
            } else {
              console.log("Wrong User Name or Password");
            }
          }}
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
