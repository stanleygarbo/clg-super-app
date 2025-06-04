import { IPositionGet } from "../../../interface/IPosition";
import { IDepartmentGet } from "../../../interface/IDepartment";
import { toast } from "react-toastify";
import { customStyles, IEmployeePost } from "../../../interface/IEmployee";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { addEmployee } from "../../../api/employee";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { getDepartments } from "../../../api/department";
import { getPositions } from "../../../api/position";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";

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
    if (!(password === conPass)) {
      return toast.error("password dont match");
    }
    const formattedData = {
      ...data,
      roles: Array.isArray(data.roles)
        ? data.roles.map((role) => role.value)
        : [],
    };
    console.log("Formatted Data:", formattedData); // Check if the data is correct before sending

    addMutation.mutate(formattedData);
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
  } = useForm<IEmployeePost>({
    defaultValues: {
      // gender: "male",
      hireDate: new Date().toISOString().split("T")[0],
    },
  });

  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState<string>("");
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

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget.value;
    input = input.replace(/\D/g, ""); // Remove non-digits
    if (input.length > 11) input = input.slice(0, 11); // Limit to 6 digits
    setValue("phone", input); // Set clean value
  };

  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;

  return (
    <div className="flex xl:justify-center mt-10">
      <div className="mb-10">
        <h1 className="font-bold text-2xl text-center xl:text-start mt-5 pt-5 text-blue-800 mb-5">
          Employee Form
        </h1>
        <input type="text" {...register("hireDate")} className="hidden" />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* <img
            src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
            alt="IMG"
            className="w-24 aspect-square rounded-full shadow-md mx-5 mb-5"
          /> */}
          <div className="flex flex-col gap-3 items-center xl:items-start text-center">
            <section className="flex">
              <h1 className="font-bold text-lg mb-3 text-start">
                Personal Information
              </h1>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-[100%] xl:w-full">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 text-xs">
                  Last Name
                </p>
                <input
                  className="border border-slate-500 h-10 w-full px-10 py-1 rounded-md font-bold text-center text-sm"
                  type="text"
                  {...register("surname")}
                />
              </span>

              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 text-xs">
                  First Name
                </p>
                <input
                  className="border border-slate-500 h-10 w-full py-1 rounded-md font-bold text-center text-sm"
                  type="text"
                  {...register("firstName")}
                />
              </span>

              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 text-xs">
                  Middle Name
                </p>
                <input
                  className="border border-slate-500 h-10 w-full py-1 rounded-md font-bold text-center text-sm"
                  type="text"
                  {...register("middleName")}
                />
              </span>
            </section>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <section className="grid grid-cols-1 items-center xl:grid-cols-[1fr_1fr_2fr] gap-3 w-[100%] xl:w-full">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 duration-200 text-xs">
                  Phone No.
                </p>
                <input
                  type="text"
                  placeholder="e.g. 09*********"
                  className="border border-slate-500 h-[40px] w-full py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  inputMode="numeric"
                  {...register("phone", {
                    pattern: {
                      value: /^0\d{0,11}$/, // Must start with 0, max 11 digits
                      message: "Must start with 0",
                    },
                  })}
                  onInput={handleInput}
                />
                {errors.phone && (
                  <p
                    style={{ color: "red" }}
                    className="absolute font-bold text-xs left-16"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Marital Status
                </p>
                <select
                  {...register("maritalStatus")}
                  className="border border-slate-500 bg-white h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                >
                  <option value="single" selected>
                    Single
                  </option>
                  <option value="married">Married</option>
                  <option value="widow">Widow</option>
                </select>
                {/* <input
                className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                type="text"
                
              /> */}
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Email
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("email", {
                    // required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p
                    style={{ color: "red" }}
                    className="absolute text-xs top-10 font-bold right-[129px]"
                  >
                    {errors.email.message}
                  </p>
                )}
              </span>
            </section>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <section className="flex flex-col xl:grid xl:grid-cols-5 gap-3 w-[100%] xl:w-full">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  BirthDate
                </p>
                <input
                  className="border border-slate-500 bg-white h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="date"
                  {...register("birth.birthDate")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  BirthPlace
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("birth.birthPlace")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Religion
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("birth.religion")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Citizzenship
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("birth.citizenship")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Gender
                </p>
                <div className="flex gap-3">
                  <select
                    {...register("birth.sex")}
                    className="border border-slate-500 bg-white h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  >
                    <option value="male" selected>
                      Male
                    </option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </span>
            </section>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <section className="grid xl:grid xl:grid-cols-4 gap-3 w-[100%] xl:w-full">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  SSS
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("governmentId.sss")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  TIN
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("governmentId.tin")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Pag-Ibig
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("governmentId.pagibig")}
                />
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Philhealth
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("governmentId.philhealth")}
                />
              </span>
            </section>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <section className="grid xl:grid xl:grid-cols-[2fr_1fr_1fr_1fr] gap-3 w-[100%] xl:w-full">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
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
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Position
                </p>
                <select
                  {...register("position")}
                  className="border border-slate-500 bg-white h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                >
                  {position.data?.results?.map(
                    (pos: IPositionGet, index: number) => (
                      <option
                        key={index}
                        value={pos._id}
                        selected={index === 0}
                      >
                        {pos.jobTitle}
                      </option>
                    )
                  )}
                </select>
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Department
                </p>
                <select
                  className="border border-slate-500 bg-white h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  {...register("department")}
                >
                  {department?.data?.results?.map(
                    (dept: IDepartmentGet, index: number) => (
                      <option
                        key={index}
                        value={dept._id}
                        selected={index === 0}
                      >
                        {dept.departmentName}
                      </option>
                    )
                  )}
                </select>
              </span>
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute w-[102px] left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Employment Type
                </p>
                <select
                  className="border border-slate-500 bg-white h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  {...register("employmentType")}
                >
                  <option value="regular" selected>
                    Regular
                  </option>
                  <option value="contractual">Contractual</option>
                </select>
              </span>
            </section>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <section className="grid  xl:grid-cols-3 gap-3 w-[100%] xl:w-full">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Username
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("username")}
                />
              </span>
              <span
                className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}
              >
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
              <span
                className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}
              >
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Confirm Password
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type={isPasswordVisible ? "text" : "password"}
                  value={conPass}
                  onChange={(e) => {
                    setConPass(e.target.value);
                  }}
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
              </span>
            </section>
          </div>
          <button
            type="submit"
            className="bg-blue-600 py-1 xl:mx-72 px-6 rounded-md font-bold text-lg text-white mt-5 hover:bg-blue-800 active:scale-90 duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmploymentForm;
