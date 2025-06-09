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
import Input from "../../props/Input";
import SelectComponent from "../../props/SelectComponent";

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

  const {
    handleSubmit,
    register,
    control,
    reset,
    setValue,
    watch,
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
      roles: Array.isArray(data?.roles)
        ? data?.roles?.map((role) => role?.value)
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
          birthDate: query.data?.birth.birthDate.toString().split("T")[0],
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
    return (
      <div className="flex">
        <img src="/loading.svg" className="p-80 text-center" alt="" />
      </div>
    );
  }

  const lastName = watch("surname") || "";
  const firstName = watch("firstName") || "";
  const middleName = watch("middleName") || "";
  const phone = watch("phone") || "";
  const email = watch("email") || "";
  const birthDate = watch("birth.birthDate") || "";
  const birthPlace = watch("birth.birthPlace") || "";
  const religion = watch("birth.religion") || "";
  const citizenship = watch("birth.citizenship") || "";
  const sss = watch("governmentId.sss") || "";
  const philhealth = watch("governmentId.philhealth") || "";
  const tin = watch("governmentId.tin") || "";
  const pagibig = watch("governmentId.pagibig") || "";

  return (
    <div className={`flex justify-center mt-5 max-w-[1200px]`}>
      <div className="w-full flex flex-col items-center">
        <h1 className="font-bold text-2xl text-center xl:text-start mt-10 text-blue-800 mb-10 xl:mb-20">
          Employee Update Form
        </h1>
        <section className="xl:absolute bg-slate-50 xl:top-[80px] xl:right-[250px] flex rounded-md p-3 shadow-sm border border-slate-100">
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
          className={`${
            isOpen ? "-z-50 xl:z-50" : ""
          } pt-6 p-5 grid gap-3 xl:gap-3`}
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
              <section className="grid xl:grid-cols-3 gap-3 w-[100%] xl:w-full">
                <Input
                  label="Last Name"
                  value={lastName}
                  register={register("surname")}
                  required={true}
                />
                {/* <span
                  className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}
                >
                  <p className="text-sm px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                    Last Name
                  </p>
                  <input
                    required
                    type="text"
                    {...register("surname")}
                    className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
                  />
                </span> */}
                <Input
                  label="First Name"
                  value={firstName}
                  register={register("firstName")}
                  required={true}
                />
                <Input
                  label="Middle Name"
                  value={middleName}
                  register={register("middleName")}
                />
              </section>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <section className="grid xl:grid-cols-[1fr_1fr_2fr] gap-3 w-[100%] xl:w-full">
              <span className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
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
                register={register("maritalStatus")}
                selected={query?.data?.maritalStatus || ""}
              />

              <Input
                label="Email"
                value={email}
                register={register("email")}
                required={true}
                type="email"
              />
            </section>
          </div>
          <div className="flex flex-col items-center">
            <section className="grid xl:grid-cols-5 gap-3 w-[100%] xl:w-full">
              <Input
                label="Birthdate"
                value={birthDate}
                register={register("birth.birthDate")}
                type="date"
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
                selected={query.data?.birth.sex || ""}
                register={register("birth.sex")}
              />
              {/* <span
                className={`${isOpen ? "-z-50 xl:z-50" : ""} relative group`}
              >
                <p className="text-sm px-2 font-bold group-hover:text-red-800 absolute text-blue-800 left-14 transform -translate-x-1/2 -translate-y-1/2 bg-white">
                  Gender
                </p>
                <div className="flex gap-3">
                  <select
                    {...register("birth.sex")}
                    className="border group-hover:border-red-700 font-bold text-slate-900 bg-transparent border-blue-700 outline-none w-[100%] py-3 rounded-md text-center overflow-hidden px-1"
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
              </span> */}
            </section>
          </div>

          <div className="flex flex-col items-center">
            <section className="grid xl:grid-cols-4 gap-3 w-[100%] xl:w-full">
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

          <div className="flex flex-col items-center">
            <section className="grid xl:grid-cols-[2fr_1fr_1fr_1fr] gap-3 w-[100%] xl:w-full items-center">
              <span className="relative w-full pt-5 rounded-lg bg-slate-100">
                <p className="absolute px-1 rounded-lg duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
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
              <SelectComponent
                label="Position"
                options={position?.data?.results.map((prog: IPositionGet) => {
                  return { value: prog._id, label: prog.jobTitle };
                })}
                selected={query.data?.position?._id || ""}
                register={register("position")}
              />
              <SelectComponent
                label="Department"
                options={department.data?.results.map(
                  (dept: IDepartmentGet) => {
                    return { value: dept._id, label: dept.departmentName };
                  }
                )}
                selected={query.data?.department?._id || ""}
                register={register("department")}
              />
              <SelectComponent
                label="Employment Type"
                options={[
                  { value: "regular", label: "Regular" },
                  { value: "contractual", label: "Contractual" },
                ]}
                selected={query.data?.employmentType || ""}
                register={register("employmentType")}
              />
            </section>
          </div>
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
