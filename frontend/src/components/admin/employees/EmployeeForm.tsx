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
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";
import Input from "../../props/Input";
import SelectComponent from "../../props/SelectComponent";
import { RiEyeCloseLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";

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

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    setValue,
    watch,
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

  const surname = watch("surname") || "";
  const firstName = watch("firstName") || "";
  const middleName = watch("middleName") || "";
  const phone = watch("phone") || "";
  const email = watch("email") || "";
  const birthDate =
    watch("birth.birthDate") || new Date().toISOString().split("T")[0];
  const birthPlace = watch("birth.birthPlace") || "";
  const religion = watch("birth.religion") || "";
  const citizenship = watch("birth.citizenship") || "";
  const sss = watch("governmentId.sss") || "";
  const philhealth = watch("governmentId.philhealth") || "";
  const tin = watch("governmentId.tin") || "";
  const pagibig = watch("governmentId.pagibig") || "";
  const username = watch("username") || "";

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const shouldFloat = isFocused || password.length > 0;

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
    // console.log("Formatted Data:", formattedData); // Check if the data is correct before sending

    addMutation.mutate(formattedData);
  };

  return (
    <div
      className={`${
        isOpen ? "-z-50 xl:z-50" : ""
      } flex xl:justify-center mt-10 max-w-[1200px]`}
    >
      <div className="mb-10">
        <h1 className="font-bold text-2xl text-center xl:text-start mt-5 pt-5 text-blue-800 mb-5">
          Add Employee Form
        </h1>
        <input type="text" {...register("hireDate")} className="hidden" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={` flex flex-col gap-5`}
        >
          {/* <img
            src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
            alt="IMG"
            className="w-24 aspect-square rounded-full shadow-md mx-5 mb-5"
          /> */}
          <div className="flex flex-col gap-3 items-center xl:items-start text-center">
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-[100%] xl:w-full">
              <Input
                label="Last Name"
                value={surname}
                required={true}
                register={register("surname")}
              />
              <Input
                label="First Name"
                value={firstName}
                required={true}
                register={register("firstName")}
              />
              <Input
                label="Middle Name"
                value={middleName}
                register={register("middleName")}
              />
            </section>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <section className="grid grid-cols-1 items-center xl:grid-cols-[1fr_1fr_2fr] gap-3 w-[100%] xl:w-full">
              <span className={` relative`}>
                <Input
                  type="number"
                  label="Phone"
                  value={phone}
                  register={register("phone", {
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
                    className="absolute font-bold text-xs left-28"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </span>
              <SelectComponent
                label="Marital Status"
                options={[
                  { value: "single", label: "Single" },
                  { value: "married", label: "Married" },
                  { value: "widow", label: "Widow" },
                ]}
                selected="single"
                register={register("maritalStatus")}
              />
              <Input
                label="Email"
                type="email"
                value={email}
                register={register("email")}
              />
            </section>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <section className="flex flex-col xl:grid xl:grid-cols-5 gap-3 w-[100%] xl:w-full">
              <Input
                label="Birthdate"
                type="date"
                value={birthDate}
                register={register("birth.birthDate")}
                required={true}
              />
              <Input
                label="Birthplace"
                value={birthPlace}
                register={register("birth.birthPlace")}
              />
              <Input
                label="Religion"
                value={religion}
                register={register("birth.religion")}
              />
              <Input
                label="Citizenship"
                value={citizenship}
                register={register("birth.citizenship")}
              />
              <SelectComponent
                label="Gender"
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
                selected="male"
                register={register("birth.sex")}
              />
            </section>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <section className="grid xl:grid xl:grid-cols-4 gap-3 w-[100%] xl:w-full">
              <Input
                label="SSS"
                value={sss}
                register={register("governmentId.sss")}
              />
              <Input
                label="TIN"
                value={tin}
                register={register("governmentId.tin")}
              />
              <Input
                label="Pag-Ibig"
                value={pagibig}
                register={register("governmentId.pagibig")}
              />
              <Input
                label="Philhealth"
                value={philhealth}
                register={register("governmentId.philhealth")}
              />
            </section>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <section className="grid xl:grid xl:grid-cols-[2fr_1fr_1fr_1fr] gap-3 w-[100%] xl:w-full">
              <span className="relative w-full pt-5 rounded-lg bg-slate-100">
                <p className="absolute px-1 rounded-lg duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
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
              <SelectComponent
                label="Position"
                options={position?.data?.results.map((prog: IPositionGet) => {
                  return { value: prog._id, label: prog.jobTitle };
                })}
                selected={""}
                register={register("position")}
              />
              <SelectComponent
                label="Department"
                options={department.data?.results.map(
                  (dept: IDepartmentGet) => {
                    return { value: dept._id, label: dept.departmentName };
                  }
                )}
                selected={""}
                register={register("department")}
              />
              <SelectComponent
                label="Employment Type"
                options={[
                  { value: "regular", label: "Regular" },
                  { value: "contractual", label: "Contractual" },
                ]}
                selected={""}
                register={register("employmentType")}
              />
            </section>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <section className="grid  xl:grid-cols-3 gap-3 w-[100%] xl:w-full">
              <Input
                label="Username"
                value={username}
                register={register("username")}
              />
              <span className="relative group w-full pt-5 rounded-lg bg-slate-100">
                <p
                  className={`absolute px-1 rounded-lg duration-200 font-semibold pointer-events-none
          ${
            shouldFloat
              ? "top-1 left-3 text-blue-800 text-sm"
              : "top-[37px] left-3 -translate-y-1/2 text-base text-gray-500"
          }`}
                >
                  Password
                </p>
                <input
                  className="peer w-full rounded-lg px-3 bg-inherit text-center py-3 focus:outline-none border-b-2 border-b-blue-600"
                  type={isPasswordVisible ? "text" : "password"}
                  {...register("password")}
                  // value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 duration-200"
                >
                  {isPasswordVisible ? (
                    <RiEyeCloseLine size={22} />
                  ) : (
                    <LuEye size={22} />
                  )}
                </span>
                {errorMessage && (
                  <p
                    style={{ color: "red" }}
                    className="absolute text-xs right-12 text-center"
                  >
                    {errorMessage}
                  </p>
                )}
                {isPasswordValid && (
                  <p
                    style={{ color: "green" }}
                    className="absolute text-xs right-32 text-center"
                  >
                    Password is valid!
                  </p>
                )}
              </span>
              <span className={` relative group`}>
                <Input
                  label="Confirm Password"
                  type={isPasswordVisible ? "text" : "password"}
                  value={conPass}
                  onChange={setConPass}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 duration-200"
                >
                  {isPasswordVisible ? (
                    <RiEyeCloseLine size={22} />
                  ) : (
                    <LuEye size={22} />
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
