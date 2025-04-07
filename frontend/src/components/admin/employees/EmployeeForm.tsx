import { IPositionGet } from "../../../interface/IPosition";
import { IDepartmentGet } from "../../../interface/IDepartment";
import { toast } from "react-toastify";
import { IEmployeePost } from "../../../interface/IEmployee";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { addEmployee } from "../../../api/employee";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { getDepartments } from "../../../api/department";
import { getPositions } from "../../../api/position";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const customStyles = {
  control: (base: any, state: any) => ({
    ...base,
    height: "40px",
    width: "100%",
    padding: "0.25rem",
    borderRadius: "0.375rem", // rounded-md
    // borderColor: "#64748b", // border-slate-500
    fontWeight: "700", // font-bold
    fontSize: "0.875rem", // text-sm
    textAlign: "center",
    borderColor: state.isFocused ? "#2563eb" : "#64748b", // border-blue-600 when focused, border-slate-500 when not focused

    overflow: "hidden",
    transition: "border-color 0.3s",
    "&:hover": {
      borderColor: state.isFocused ? "#2563eb" : "#64748b", // no change on hover
    },
  }),
  singleValue: (base: any) => ({
    ...base,
    textAlign: "center", // center the selected value text
  }),
  option: (base: any) => ({
    ...base,
    textAlign: "center", // center the option text
  }),
  menu: (base: any) => ({
    ...base,
    textAlign: "center", // center the dropdown menu
  }),
  placeholder: (base: any) => ({
    ...base,
    textAlign: "center", // center the placeholder
  }),
};

const EmploymentForm = () => {
  const navigate = useNavigate();

  const roles = [
    { value: "user", label: "user" },
    { value: "student", label: "student" },
    { value: "admin", label: "admin" },
    { value: "admission", label: "admission" },
    { value: "accounting", label: "accounting" },
    { value: "registrar", label: "registrar" },
    { value: "faculty", label: "faculty" },
    { value: "clinic", label: "clinic" },
    { value: "ssc", label: "ssc" },
    { value: "super", label: "super" },
  ];

  // FETCH DEPARTMENT
  const department = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });

  //  FETCH POSITION
  const position = useQuery({
    queryKey: ["positions"],
    queryFn: getPositions,
  });

  const addMutation = useMutation({
    mutationFn: addEmployee,
    onSuccess: (data) => {
      toast.success(`Employee ${data.firstName} added successfully!`);
      navigate("/admin/employees");
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  const onSubmit = (data: IEmployeePost) => {
    const formattedData = {
      ...data,
      roles: Array.isArray(data.roles)
        ? data.roles.map((role) => role.value)
        : [],
    };
    console.log("Formatted Data:", formattedData); // Check if the data is correct before sending

    addMutation.mutate(formattedData);
  };

  const { handleSubmit, register, control } = useForm<IEmployeePost>({
    defaultValues: {
      // gender: "male",
      hireDate: new Date().toISOString().split("T")[0],
    },
  });

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const minLength = 8;
  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasNumber = /[0-9]/;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validatePassword = (password: string) => {
    if (password.length < minLength) {
      setErrorMessage(
        `Password must be at least ${minLength} characters long.`
      );
      setIsPasswordValid(false);
    } else if (!hasUppercase.test(password)) {
      setErrorMessage("Password must contain at least one uppercase letter.");
      setIsPasswordValid(false);
    } else if (!hasLowercase.test(password)) {
      setErrorMessage("Password must contain at least one lowercase letter.");
      setIsPasswordValid(false);
    } else if (!hasNumber.test(password)) {
      setErrorMessage("Password must contain at least one number.");
      setIsPasswordValid(false);
    } else if (!hasSpecialChar.test(password)) {
      setErrorMessage("Password must contain at least one special character.");
      setIsPasswordValid(false);
    } else {
      setErrorMessage("");
      setIsPasswordValid(true);
    }
  };

  // Handle password change event
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState); // Toggle the state
  };

  return (
    <div className="m-10">
      <div className="w-[900px]">
        <h1 className="font-bold text-2xl text-start mt-5 pt-5 px-12 text-blue-800 mb-10">
          Employee Form
        </h1>
        <input type="text" {...register("hireDate")} className="hidden" />
        <form onSubmit={handleSubmit(onSubmit)} className="pt-6 p-5 grid gap-5">
          {/* <img
            src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
            alt="IMG"
            className="w-24 aspect-square rounded-full shadow-md mx-5 mb-5"
          /> */}
          <section className="grid grid-cols-3 gap-5 px-10">
            <span className={` relative`}>
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                Last Name
              </p>
              <input
                className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                type="text"
                {...register("surname")}
              />
            </span>
            <span className={` relative`}>
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                First Name
              </p>
              <input
                className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                type="text"
                {...register("firstName")}
              />
            </span>
            <span className={` relative`}>
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                Middle Name
              </p>
              <input
                className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                type="text"
                {...register("middleName")}
              />
            </span>
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <span className={` relative`}>
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                BirthDate
              </p>
              <input
                className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                type="text"
                {...register("birth.birthDate")}
              />
            </span>
            <span className="relative">
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 duration-200 text-xs z-50">
                Roles
              </p>
              <Controller
                name="roles"
                control={control}
                defaultValue={[roles[0]]} // Default value must be an array for isMulti
                render={({ field }) => (
                  <Select
                    {...field}
                    isMulti
                    styles={customStyles}
                    options={roles}
                    className="w-full"
                    onChange={(selected) => field.onChange(selected)}
                    value={field.value || []} // Ensures value is never undefined
                  />
                )}
              />
            </span>
            <span className="relative">
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                Gender
              </p>
              <div className="flex gap-5">
                <select
                  {...register("birth.sex")}
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                >
                  <option value="male" selected>
                    Male
                  </option>
                  <option value="female">Female</option>
                </select>
              </div>
            </span>
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <span className="relative">
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                Position
              </p>
              <select
                {...register("position")}
                className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
              >
                {position.data?.results?.map(
                  (pos: IPositionGet, index: number) => (
                    <option key={index} value={pos._id} selected={index === 0}>
                      {pos.jobTitle}
                    </option>
                  )
                )}
              </select>
            </span>
            <span className="relative">
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                Department
              </p>
              <select
                className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                {...register("department")}
              >
                {department?.data?.results?.map(
                  (dept: IDepartmentGet, index: number) => (
                    <option key={index} value={dept._id} selected={index === 0}>
                      {dept.departmentName}
                    </option>
                  )
                )}
              </select>
            </span>
            <span className="relative">
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                Employment Type
              </p>
              <select
                className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                {...register("employmentType")}
              >
                <option value="regular" selected>
                  Regular
                </option>
                <option value="contractual">Contractual</option>
              </select>
            </span>
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <span className={` relative`}>
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                Username
              </p>
              <input
                className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                type="text"
                {...register("username")}
              />
            </span>
            <span className={` relative group`}>
              <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                Password
              </p>
              <input
                className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                type={isPasswordVisible ? "text" : "password"}
                {...register("password")}
                value={password}
                onChange={handlePasswordChange}
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 duration-200"
              >
                {isPasswordVisible ? (
                  <FaEye size={20} />
                ) : (
                  <FaEyeSlash size={20} />
                )}
              </span>
              {errorMessage && (
                <p
                  style={{ color: "red" }}
                  className="absolute text-xs right-1 text-center"
                >
                  {errorMessage}
                </p>
              )}
              {isPasswordValid && (
                <p
                  style={{ color: "green" }}
                  className="absolute text-xs right-20 text-center"
                >
                  Password is valid!
                </p>
              )}
            </span>
            {/* <input
              type="password"
              placeholder="Confirm Password"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
            /> */}
          </section>
          <button
            type="submit"
            className="bg-blue-600 py-1 mx-64 px-6 rounded-md font-bold text-lg text-white mt-5 hover:bg-blue-800 active:scale-90 duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmploymentForm;
