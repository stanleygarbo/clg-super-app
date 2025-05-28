import { IPositionGet } from "../../../interface/IPosition";
import { IDepartmentGet } from "../../../interface/IDepartment";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getEmployeeById, updateEmployee } from "../../../api/employee";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { customStyles, IEmployeePost } from "../../../interface/IEmployee";
import { toast } from "react-toastify";
import { getDepartments } from "../../../api/department";
import { getPositions } from "../../../api/position";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";

export interface IOption {
  label: string;
  value: string;
}

const UpdateEmployee = () => {
  // const [position, setPosition] = useState<IPositionGet[]>([]);
  // const [department, setDepartment] = useState<IDepartmentGet[]>([]);
  const { id } = useParams<string>();
  const navigate = useNavigate();

  const roles: IOption[] = [
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

  const updateMutation = useMutation({
    mutationFn: updateEmployee,
    onSuccess: () => {
      toast.success("Successfully updated employee");
      navigate("/admin/employees");
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });

  const query = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeById({ id }),
    enabled: !!id,
  });

  console.log(query.data);

  const {
    handleSubmit,
    register,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IEmployeePost>({
    defaultValues: {},
  });

  const deaf = roles?.filter((prog) =>
    (query.data?.roles?.map((role: string) => role) ?? []).includes(prog.value)
  );

  // console.log("Deaf :: ", deaf);

  const onSubmit = (data: IEmployeePost) => {
    if (!id) {
      toast.error("No employee ID found!");
      return;
    }
    const formattedData = {
      ...data,
      roles: Array.isArray(data.roles)
        ? data.roles.map((role) => role.value)
        : [],
    };
    // console.log("Formatted Data:", formattedData); // Check if the data is correct before sending

    updateMutation.mutate({ id, value: { ...formattedData } });
    // query.refetch();
  };

  // set default value for update
  useEffect(() => {
    if (query.data) {
      reset({
        hireDate: query.data?.hireDate,
        firstName: query.data?.firstName,
        surname: query.data?.surname,
        middleName: query.data?.middleName,
        email: query.data?.email,
        roles: deaf,
        phone: query.data?.phone,
        documents: query.data?.documents,
        governmentId: {
          sss: query.data?.governmentId?.sss,
          tin: query.data?.governmentId?.tin,
          philhealth: query.data?.governmentId?.philhealth,
          pagibig: query.data?.governmentId?.pagibig,
        },
        birth: {
          birthDate: query.data?.birth.birthDate,
          birthPlace: query.data?.birth.birthPlace,
          religion: query.data?.birth.religion,
          citizenship: query.data?.birth.citizenship,
        },
      });
    }
  }, [query.data, reset]);

  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget.value;
    input = input.replace(/\D/g, ""); // Remove non-digits
    if (input.length > 11) input = input.slice(0, 11); // Limit to 6 digits
    setValue("phone", input); // Set clean value
  };

  // console.log(query.data);

  if (query.isFetching) {
    return <img src="/loading.svg" className="p-80" alt="" />;
  }

  return (
    <div className=" flex justify-center">
      <div className="w-0 xl:w-72"></div>
      <div className="w-max flex flex-col items-center">
        <h1 className="font-bold text-2xl text-center xl:text-start mt-10 text-blue-800 mb-10 xl:mb-20">
          Employee Update Form
        </h1>
        <section className="xl:absolute bg-slate-50 xl:top-[80px] xl:right-[225px] flex rounded-md p-3 shadow-sm border border-slate-100">
          <div className="flex flex-col">
            <span className="flex gap-1 items-center p-1">
              <input
                type="checkbox"
                id="nso"
                {...register("documents.birthCertificate")}
                // defaultChecked={query.data?.documents?.birthCertificate}
              />
              <label htmlFor="nso">NSO</label>
            </span>
            <span className="flex gap-1 items-center p-1">
              <input
                type="checkbox"
                id="tin"
                {...register("documents.tin")}
                // defaultChecked={query.data?.documents?.tin}
              />
              <label htmlFor="tin">TIN</label>
            </span>
            <span className="flex gap-1 items-center p-1">
              <input
                type="checkbox"
                id="nbi"
                {...register("documents.nbiClearance")}
                // defaultChecked={query.data?.documents?.tin}
              />
              <label htmlFor="nbi">NBI Clearance</label>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex gap-1 items-center p-1">
              <input
                type="checkbox"
                id="pagibig"
                {...register("documents.pagibig")}
                // defaultChecked={query.data?.documents?.birthCertificate}
              />
              <label htmlFor="pagibig">Pag-ibig</label>
            </span>
            <span className="flex gap-1 items-center p-1">
              <input
                type="checkbox"
                id="tor"
                {...register("documents.tor")}
                // defaultChecked={query.data?.documents?.tin}
              />
              <label htmlFor="tor">TOR</label>
            </span>
            <span className="flex gap-1 items-center p-1">
              <input
                type="checkbox"
                id="philhealth"
                {...register("documents.philhealth")}
                // defaultChecked={query.data?.documents?.tin}
              />
              <label htmlFor="philhealth">Philhealth</label>
            </span>
          </div>
        </section>
        {/* <input type="text" {...register("hireDate")} className="hidden" /> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pt-6 p-5 grid gap-3 xl:gap-5"
        >
          {/* <img
                src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg"
                alt="IMG"
                className="w-24 aspect-square rounded-full shadow-md mx-5 mb-5"
              /> */}
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-lg mb-3 text-center xl:text-start">
              Personal Information
            </h1>
            <div className="flex flex-col items-center">
              <section className="grid xl:grid-cols-3 gap-3 w-[450px] xl:w-full">
                <span className={`${isOpen ? "-z-50" : ""} relative`}>
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Last Name
                  </p>
                  <input
                    className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    {...register("surname")}
                  />
                </span>
                <span className={`${isOpen ? "-z-50" : ""} relative`}>
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    First Name
                  </p>
                  <input
                    className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    {...register("firstName")}
                  />
                </span>
                <span className={`${isOpen ? "-z-50" : ""} relative`}>
                  <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                    Middle Name
                  </p>
                  <input
                    className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    {...register("middleName")}
                  />
                </span>
                {/* <span className={`${isOpen ? "-z-50" : ""} relative`}>
                    <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                      Gender
                    </p>
                    <select
                      className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                      {...register("birth.sex")}
                    >
                      <option value="male" selected>
                        Male
                      </option>
                      <option value="female">Female</option>
                    </select>
                  </span> */}
              </section>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <section className="grid xl:grid-cols-[1fr_1fr_2fr] gap-3 w-[450px] xl:w-full">
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Phone No.
                </p>
                <input
                  type="text"
                  placeholder="e.g. 09*********"
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
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
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Marital Status
                </p>
                <select
                  {...register("maritalStatus")}
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                >
                  <option
                    value="single"
                    selected={query?.data?.maritalStatus === "single"}
                  >
                    Single
                  </option>
                  <option
                    value="married"
                    selected={query?.data?.maritalStatus === "married"}
                  >
                    Married
                  </option>
                  <option
                    value="widow"
                    selected={query?.data?.maritalStatus === "widow"}
                  >
                    Widow
                  </option>
                </select>
                {/* <input
                    className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                    type="text"
                    
                  /> */}
              </span>
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
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
          <div className="flex flex-col items-center">
            <section className="grid xl:grid-cols-5 gap-3 w-[450px] xl:w-full">
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  BirthDate
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="date"
                  {...register("birth.birthDate")}
                />
              </span>
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  BirthPlace
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("birth.birthPlace")}
                />
              </span>
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Religion
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("birth.religion")}
                />
              </span>
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Citizzenship
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("birth.citizenship")}
                />
              </span>
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Gender
                </p>
                <div className="flex gap-3">
                  <select
                    {...register("birth.sex")}
                    className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  >
                    <option
                      value="male"
                      selected={query.data?.birth.sex === "male"}
                    >
                      Male
                    </option>
                    <option
                      value="female"
                      selected={query.data?.birth.sex === "female"}
                    >
                      Female
                    </option>
                  </select>
                </div>
              </span>
            </section>
          </div>

          <div className="flex flex-col items-center">
            <section className="grid xl:grid-cols-4 gap-3 w-[450px] xl:w-full">
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  SSS
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("governmentId.sss")}
                />
              </span>
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  TIN
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("governmentId.tin")}
                />
              </span>
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Pag-Ibig
                </p>
                <input
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  type="text"
                  {...register("governmentId.pagibig")}
                />
              </span>
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
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

          <div className="flex flex-col items-center">
            <section className="grid xl:grid-cols-[2fr_1fr_1fr_1fr] gap-3 w-[450px] xl:w-full">
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 duration-200 text-xs z-50">
                  Roles
                </p>
                <Controller
                  name="roles"
                  control={control}
                  defaultValue={[]} // Default value must be an array for isMulti
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
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Position
                </p>
                <select
                  {...register("position")}
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                >
                  {position.data?.results?.map(
                    (pos: IPositionGet, index: number) => (
                      <option
                        key={index}
                        value={pos._id}
                        selected={query.data?.position._id === pos._id}
                      >
                        {pos.jobTitle}
                      </option>
                    )
                  )}
                </select>
              </span>
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Department
                </p>
                <select
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  {...register("department")}
                >
                  {department?.data?.results?.map(
                    (dept: IDepartmentGet, index: number) => (
                      <option
                        key={index}
                        value={dept._id}
                        selected={query.data?.department._id === dept._id}
                      >
                        {dept.departmentName}
                      </option>
                    )
                  )}
                </select>
              </span>
              <span className={`${isOpen ? "-z-50" : ""} relative`}>
                <p className="absolute w-[102px] left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
                  Employment Type
                </p>
                <select
                  className="border border-slate-500 h-[40px] w-[100%] py-1 rounded-md font-bold text-center overflow-hidden text-sm"
                  {...register("employmentType")}
                >
                  <option
                    value="regular"
                    selected={query.data?.employmentType === "regular"}
                  >
                    Regular
                  </option>
                  <option
                    value="contractual"
                    selected={query.data?.employmentType === "contractual"}
                  >
                    Contractual
                  </option>
                </select>
              </span>
            </section>
          </div>
          {/* <section className="grid grid-cols-3 gap-3 px-10">
                <span className={`${isOpen ? "-z-50" : ""} relative`}>
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
                <span className="relative group">
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
              </section> */}
          <button
            type="submit"
            className="bg-blue-600 py-1 xl:mx-64 px-6 rounded-md font-bold text-lg text-white mt-5 hover:bg-blue-800 active:scale-90 duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
