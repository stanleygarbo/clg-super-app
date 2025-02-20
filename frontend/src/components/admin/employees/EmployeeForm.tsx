import { useEffect, useState } from "react";
import { IPositionGet } from "../../../interface/IPosition";
import { IDepartmentGet } from "../../../interface/IDepartment";
import RoleSelect from "./RoleSelect";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { employeeGetData, employeePostData } from "../../../store/EmployeeData";
import { useSnapshot } from "valtio";
import { useParams } from "react-router-dom";
import { IEmployeeGet } from "../../../interface/IEmployee";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const EmploymentForm = () => {
  const [gender, setGender] = useState<string>("");
  const [position, setPosition] = useState<IPositionGet[]>([]);
  const [employee, setEmployee] = useState<IEmployeeGet[]>([]);
  const [department, setDepartment] = useState<IDepartmentGet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const snap = useSnapshot(employeePostData);
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const { id } = useParams();

  const handleCheckboxChange = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const roles = [
    "user",
    "student",
    "admin",
    "admission",
    "accounting",
    "registrar",
    "faculty",
    "clinic",
    "ssc",
    "super",
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

  // ADD EMPLOYEE
  const addEmployee = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      employeePostData.hireDate = new Date().toISOString();
      employeePostData.birthDate = new Date(
        day + "-" + month + "-" + year
      ).toISOString();
      try {
        const data = {
          firstName: employeePostData.firstName,
          surname: employeePostData.surname,
          middleName: employeePostData.middleName,
          username: employeePostData.username,
          password: employeePostData.password,
          department: employeePostData.department,
          position: employeePostData.position,
          hireDate: employeePostData.hireDate,
          employmentType: employeePostData.employmentType,
          roles: employeePostData.roles
            ? JSON.parse(JSON.stringify(employeePostData.roles))
            : [],
        };
        console.log("DATA :: ", data);
        await apiClient.post("/employees", data);
        toast.success("Employee added successfully!");
      } catch (err) {
        setError("Error adding employee");
        toast.error(error);
      } finally {
        // fetchEmployee();
        setIsLoading(false);
        // setIsOpen(false);
      }
    } catch {}
  };

  useEffect(() => {
    getDepartments();
    getPositions();
  }, []);

  const addMutation = useMutation({
    mutationFn: addEmployee,
    onSuccess: () => {
      toast.success("New employee added successfully");
    },
  });

  const { handleSubmit, register } = useForm();

  return (
    <div className="m-10">
      <div className="w-[900px]">
        <h1 className="font-bold text-2xl text-start mt-5 pt-5 px-12 text-blue-800">
          Employee Form
        </h1>
        <form
          onSubmit={handleSubmit(() => addMutation)}
          className="pt-6 p-5 grid gap-5"
        >
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
              value={snap.firstName}
              onChange={(e) => {
                employeePostData.firstName = e.target.value;
              }}
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              value={snap.middleName}
              onChange={(e) => {
                employeePostData.middleName = e.target.value;
              }}
            />
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Birthdate :</h1>
              <span className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder="dd"
                  className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
                  value={day}
                  onChange={(e) => {
                    setDay(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="mm"
                  className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="yyyy"
                  className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                />
              </span>
            </span>
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Roles :</h1>
              <RoleSelect roles={roles} />
            </span>
            <span className="px-5">
              <h1 className="text-sm font-semibold pb-3">Gender:</h1>
              <div className="flex gap-5">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={gender === "male"}
                    onChange={() => {
                      handleCheckboxChange("male");
                    }}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={gender === "female"}
                    onChange={() => {
                      handleCheckboxChange("female");
                    }}
                    className="w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <span className="text-gray-700">Female</span>
                </label>
              </div>
            </span>
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <input
              type="text"
              placeholder="Brgy/Street"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
            />
            <input
              type="text"
              placeholder="City"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
            />
            <input
              type="text"
              placeholder="Province"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
            />
          </section>
          <section className="grid grid-cols-3 gap-5 px-10">
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Position :</h1>

              <select
                className="text-center outline-none p-2 bg-transparent font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
                value={snap.position}
                onChange={(e) => {
                  employeePostData.position = e.target.value;
                }}
              >
                {position.map((pos, index) => (
                  <option key={index} value={pos._id} selected={true}>
                    {pos.jobTitle}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Department :</h1>

              <select
                className="text-center outline-none p-2 bg-transparent font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
                value={snap.department}
                onChange={(e) => {
                  employeePostData.department = e.target.value;
                }}
              >
                {department.map((dept, index) => (
                  <option key={index} value={dept._id} selected>
                    {dept.departmentName}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">Employment Type :</h1>
              <select
                className="text-center outline-none p-2 bg-transparent font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
                value={snap.employmentType}
                onChange={(e) => {
                  employeePostData.employmentType = e.target.value;
                }}
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
              value={snap.username}
              onChange={(e) => {
                employeePostData.username = e.target.value;
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              value={snap.password}
              onChange={(e) => {
                employeePostData.password = e.target.value;
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="text-center outline-none border-0 p-2 bg-transparent font-semibold border-b-2 focus:border-b-blue-800 duration-200"
            />
          </section>
          <section className="flex items-center justify-end px-10">
            <button
              type="submit"
              className="bg-blue-600 py-1 px-6 rounded-md font-bold text-lg text-white mt-5 hover:bg-blue-800 active:scale-95 duration-200"
            >
              Submit
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default EmploymentForm;
