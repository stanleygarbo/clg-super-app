import { useEffect, useState } from "react";
import { IPositionGet } from "../../../interface/IPosition";
import { IDepartmentGet } from "../../../interface/IDepartment";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { IEmployeePost } from "../../../interface/IEmployee";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { addEmployee } from "../../../api/employee";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const EmploymentForm = () => {
  const [position, setPosition] = useState<IPositionGet[]>([]);
  const [department, setDepartment] = useState<IDepartmentGet[]>([]);
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
  const getDepartments = async () => {
    try {
      const response = await apiClient.get("/departments");
      setDepartment(response.data.results);
    } catch {
      toast.error("Error while getting the departments");
    } finally {
    }
  };

  //  FETCH POSITION
  const getPositions = async () => {
    try {
      const response = await apiClient.get("/positions");
      setPosition(response.data.results);
    } catch {
      toast.error("Error while getting the departments");
    } finally {
    }
  };

  useEffect(() => {
    getDepartments();
    getPositions();
  }, []);

  // const query = useQuery({
  //   queryKey: ["employee"],
  //   queryFn: () => getEmployees,
  // });

  const addMutation = useMutation({
    mutationFn: (data: IEmployeePost) => addEmployee(data),
    onSuccess: (data) => {
      toast.success(`Employee ${data.firstName} added successfully!`);
      navigate("/admin/employees");
    },
  });

  const onSubmit = (data: IEmployeePost) => {
    const formattedData = {
      ...data,
      roles: Array.isArray(data.roles) ? data.roles.map((role) => role) : [],
    };
    console.log("Formatted Data:", formattedData); // Check if the data is correct before sending

    addMutation.mutate(formattedData);
  };

  const { handleSubmit, register, control } = useForm<IEmployeePost>({
    defaultValues: {
      gender: "male",
      hireDate: new Date().toISOString().split("T")[0],
    },
  });

  return (
    <div className="m-10">
      <div className="w-[900px]">
        <h1 className="font-bold text-2xl text-start mt-5 pt-5 px-12 text-blue-800">
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
            <input
              type="text"
              placeholder="Last Name"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              {...register("surname")}
            />
            <input
              type="text"
              placeholder="First Name"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              {...register("firstName")}
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              {...register("middleName")}
            />
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Birthdate :</h1>
              <input
                type="date"
                className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
                {...register("birthDate")}
              />
            </span>
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Roles :</h1>
              <Controller
                name="roles"
                control={control}
                defaultValue={[]} // Default value must be an array for isMulti
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
              <div className="flex gap-5">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="male"
                    {...register("gender")}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="female"
                    {...register("gender")}
                    className="w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <span className="text-gray-700">Female</span>
                </label>
              </div>
            </span>
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Position :</h1>
              <select
                {...register("position")}
                className="text-center outline-none p-2 bg-transparent font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
              >
                {position.map((pos, index) => (
                  <option key={index} value={pos._id} selected={index == 1}>
                    {pos.jobTitle}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Department :</h1>

              <select
                className="text-center outline-none p-2 bg-transparent font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
                {...register("department")}
              >
                {department.map((dept, index) => (
                  <option key={index} value={dept._id} selected={index == 0}>
                    {dept.departmentName}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Employment Type :</h1>
              <select
                className="text-center outline-none p-2 bg-transparent font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
                {...register("employmentType")}
              >
                <option value="regular" selected>
                  regular
                </option>
                <option value="contractual">contractual</option>
              </select>
            </span>
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <input
              type="text"
              placeholder="Username"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              {...register("username")}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
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
            className="bg-blue-600 py-1 px-6 rounded-md font-bold text-lg text-white mt-5 hover:bg-blue-800 active:scale-95 duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmploymentForm;
