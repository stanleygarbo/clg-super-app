import { useEffect, useState } from "react";
import { IPositionGet } from "../../../interface/IPosition";
import { IDepartmentGet } from "../../../interface/IDepartment";
import apiClient from "../../../api/apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getEmployeeById, updateEmployee } from "../../../api/employee";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { IEmployeePost } from "../../../interface/IEmployee";
import { toast } from "react-toastify";
import { IRoles } from "../../../interface/IRoles";
import { getDepartments } from "../../../api/department";
import { getPositions } from "../../../api/position";

const UpdateEmployee = () => {
  // const [position, setPosition] = useState<IPositionGet[]>([]);
  // const [department, setDepartment] = useState<IDepartmentGet[]>([]);
  let { id } = useParams<string>();
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
  // const getDepartments = async () => {
  //   try {
  //     const response = await apiClient.get("/departments");
  //     setDepartment(response.data.results);
  //   } catch {
  //   } finally {
  //   }
  // };

  //  FETCH POSITION
  const position = useQuery({
    queryKey: ["positions"],
    queryFn: getPositions,
  });
  // const getPositions = async () => {
  //   try {
  //     const response = await apiClient.get("/positions");
  //     setPosition(response.data.results);
  //   } catch {
  //   } finally {
  //   }
  // };

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
  });
  const [dRole, setDRole] = useState<any>();

  useEffect(() => {
    const roles: any = [];
    setDRole(query.data);
  }, [query.data]);

  const { handleSubmit, register, control } = useForm<IEmployeePost>();

  // useEffect(() => {
  // getDepartments();
  // getPositions();
  // if (query.data) {
  //   setValue("surname", query.data?.surname);
  //   setValue("firstName", query.data?.firstName);
  //   setValue("middleName", query.data?.middleName);
  //   setValue("username", query.data?.username);
  //   setValue("employmentType", query.data?.employmentType);
  //   setValue("password", query.data?.password);
  //   setValue("birth.sex", query.data?.birth?.sex);
  //   setValue("position", query.data?.position?._id);
  //   setValue("department", query.data?.department?._id);
  // }
  // }, [query.data, setValue]);

  const defaultRoles = roles.filter((role: IRoles) =>
    (query.data?.roles ?? []).includes(role.value)
  );

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
    console.log("Formatted Data:", formattedData); // Check if the data is correct before sending

    updateMutation.mutate({ id, value: { ...formattedData } });
  };

  return (
    <div className="m-10">
      <div className="w-[900px]">
        <h1 className="font-bold text-2xl text-start mt-5 pt-5 px-12 text-blue-800">
          Employee Form
        </h1>
        <form
          onSubmit={handleSubmit(
            onSubmit
            //   () => {
            //   if (!id) {
            //     toast.error("No employee ID found!");
            //     return;
            //   }
            //   // updateMutation.mutate({ id, value: { ...data, ...roles.value } });
            // }
          )}
          className="pt-6 p-5 grid gap-5"
        >
          <section className="grid grid-cols-3 gap-5 px-10">
            <input
              type="text"
              placeholder="Last Name"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              defaultValue={query.data?.surname}
              {...register("surname")}
            />
            <input
              type="text"
              placeholder="First Name"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              defaultValue={query.data?.firstName}
              {...register("firstName")}
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              defaultValue={query.data?.middleName}
              {...register("middleName")}
            />
          </section>
          <section className="grid grid-cols-[1fr_200px] gap-5 px-10">
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Roles :</h1>
              <Controller
                name="roles"
                control={control}
                defaultValue={defaultRoles} // Default value must be an array for isMulti
                render={({ field }) => (
                  <Select
                    {...field}
                    isMulti
                    options={roles}
                    className="w-full"
                    onChange={(selected) => field.onChange(selected)}
                    value={field.value || []} // Ensures value is never undefined
                  />
                )}
              />
            </span>
            <span className="px-5">
              <h1 className="text-sm font-semibold pb-3">Gender:</h1>
              <div className="flex">
                <select
                  {...register("birth.sex")}
                  className="text-center w-[100%] outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
                >
                  <option
                    value="male"
                    selected={query.data?.birth?.sex === "male"}
                  >
                    Male
                  </option>
                  <option
                    value="female"
                    selected={query.data?.birth?.sex === "female"}
                  >
                    Female
                  </option>
                </select>
              </div>
            </span>
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Position :</h1>
              <select
                {...register("position")}
                className="text-center outline-none p-2 bg-transparent font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
                defaultValue={query.data?.position?._id}
              >
                {position.data?.results.map(
                  (pos: IPositionGet, index: number) => (
                    <option
                      key={index}
                      value={pos._id}
                      selected={query.data?.position?._id == pos._id}
                    >
                      {pos.jobTitle}
                    </option>
                  )
                )}
              </select>
            </span>
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Department :</h1>

              <select
                className="text-center outline-none p-2 bg-transparent font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
                defaultValue={query.data?.department?._id}
                {...register("department")}
              >
                {department.data?.results.map(
                  (dept: IDepartmentGet, index: number) => (
                    <option
                      key={index}
                      value={dept._id}
                      selected={query.data?.department?._id == dept._id}
                    >
                      {dept.departmentName}
                    </option>
                  )
                )}
              </select>
            </span>
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Employment Type :</h1>
              <select
                className="text-center outline-none p-2 bg-transparent font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
                defaultValue={query.data?.employmentType}
                {...register("employmentType")}
              >
                <option
                  value="regular"
                  selected={query.data?.employmentType == "regular"}
                >
                  regular
                </option>
                <option
                  value="contractual"
                  selected={query.data?.employmentType == "contractual"}
                >
                  contractual
                </option>
              </select>
            </span>
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <input
              type="text"
              placeholder="Username"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              defaultValue={query.data?.username}
              {...register("username")}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              defaultValue={query.data?.password}
              {...register("password")}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
            />
          </section>
          <button
            type="submit"
            className="mx-80 bg-blue-600 py-1 px-6 rounded-md font-bold text-lg text-white mt-5 hover:bg-blue-800 active:scale-95 duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
