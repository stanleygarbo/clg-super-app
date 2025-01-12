import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { employeeData } from "../../store/EmployeeData";
import AddEmployee from "./AddEmployee";
import { IoMdPersonAdd } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import apiClient from "../../api/apiClient";
import { toast } from "react-toastify";
import EmployeeInfo from "./EmployeeInfo";

const Users = () => {
  const [employees, setEmployees] = useState<(typeof employeeData)[]>();
  const [addedEmployee, setAddedEmployee] = useState<typeof employeeData>();
  const [loading, setLoading] = useState<boolean>(true);
  let { id } = useParams<string>();
  const [error, setError] = useState<string | null>(null);
  const [addEmployeeForm, setAddEmployeeForm] = useState<boolean>(true);
  const [viewEmployeeForm, setViewEmployeeForm] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchEmployee = async () => {
    try {
      const response = await apiClient.get("/employees");
      setEmployees(response.data.results);
    } catch (err) {
      setError("Error Occured");
    } finally {
      setLoading(false);
    }
  };

  const addEmployee = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true at the beginning
    // console.log("Employee data: ", employees);
    employeeData.hireDate = new Date().toISOString();
    // setAddedEmployee(employeeData);
    // console.log("To be added : ", );
    try {
      const data = {
        firstName: employeeData?.firstName,
        surname: employeeData?.surname,
        middleName: employeeData?.middleName,
        username: employeeData?.username,
        password: employeeData?.password,
        department: employeeData?.department,
        position: employeeData?.position,
        hireDate: employeeData?.hireDate,
        employmentType: employeeData?.employmentType,
        roles: employeeData?.roles
          ? JSON.parse(JSON.stringify(employeeData.roles))
          : [],
      };
      console.log("2nd", data);
      await apiClient.post("/employees", data);
      // console.log(response);
      toast.success("Employee added successfully!");
    } catch (err: any) {
      console.error(err.response); // Log the error for debugging
      setError("Error adding employee");
      toast.error("Error adding employee");
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <div className="">
      <div className=" flex flex-col justify-center relative">
        {/* Add user */}
        <form
          onSubmit={addEmployee}
          className={`${
            addEmployeeForm
              ? "w-[0px] opacity-0 left-0"
              : "w-[550px] z-50 left-1/2 opacity-100"
          } absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 pb-5 bg-white border shadow-md rounded-lg flex flex-col gap-3 duration-150`}
        >
          <section className="flex flex-col-reverse">
            <h1 className="text-center font-bold pb-3">Add Employee</h1>
            <h1 className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => {
                  setAddEmployeeForm(true);
                }}
                className="bg-red-600 px-2 font-bold rounded-md text-white shadow-md hover:scale-105 duration-200"
              >
                X
              </button>
            </h1>
          </section>
          <AddEmployee />
          <h1 className="flex justify-center">
            <button
              type="submit"
              className="w-[50%] bg-blue-600 shadow-blue-600/50 py-[5px] rounded-md font-bold shadow-sm hover:scale-105 text-white active:scale-95 duration-200"
            >
              Add
            </button>
          </h1>
        </form>
        {/* view employee */}
        <form
          className={`${
            viewEmployeeForm
              ? "w-[0px] opacity-0 left-0"
              : "w-[550px] z-50 left-1/2 opacity-100"
          } absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 pb-5 bg-white border shadow-md rounded-lg flex flex-col gap-3 duration-150`}
        >
          <h1>Employee Info</h1>
          <EmployeeInfo />
        </form>
        <h1 className="text-center py-5 text-2xl font-bold bg-blue-600 text-white border-t border-r border-l rounded-t-md shadow-sm">
          All Employees
        </h1>
        <table className="w-[1100px] h-[570px] border flex flex-col rounded-b-md shadow-md bg-white duration-200 py-10 px-12">
          <thead>
            <tr className="grid grid-cols-4 text-lg font-bold gap-3 p-2 border-b mb-5 text-slate-800 border-slate-300 items-center w-[100%]">
              <th className="w-[300px] text-start">Name</th>
              <th className=" text-center ">Position</th>
              <th className="text-center">Office</th>
              <th className=" text-center">
                <button
                  type="button"
                  onClick={() => {
                    addEmployeeForm === true
                      ? setAddEmployeeForm(false)
                      : setAddEmployeeForm(true);
                  }}
                  className="px-3 shadow-sm text-bold hover:scale-105 active:scale-95 py-[5px] my-2 font-bold text-white bg-blue-600 shadow-blue-600/50 rounded-md duration-200"
                >
                  <p className="flex justify-center items-center gap-2">
                    <IoMdPersonAdd /> Employee
                  </p>
                </button>
              </th>
            </tr>
          </thead>
          {error && (
            <div className="flex justify-center items-center">
              Failed to fetch data
            </div>
          )}
          {loading && (
            <div className="flex justify-center items-center">Loading...</div>
          )}
          <section className="overflow-hidden overflow-y-auto no-scrollbar flex flex-col">
            {employees?.length === 0 && (
              <div className="text-center">No Employees Added</div>
            )}
            {employees?.map((employee, index) => (
              <tr
                key={index}
                className="duration-200 hover:cursor-pointer font-semibold gap-3 items-center text-sm grid grid-cols-4 px-2 rounded-sm  bg-slate-50 group shadow-sm border hover:bg-blue-600 hover:border-blue-600 hover:text-white"
              >
                <td className="w-[300px] text-start">
                  {employee.surname} {employee.firstName} {employee.middleName}
                </td>
                <td className=" text-center">{employee.position}</td>
                <td className=" text-center">{employee.department}</td>
                <td className=" text-center flex gap-3 justify-center">
                  <button className="opacity-0 group-hover:opacity-100 px-4 bg-red-600 text-white shadow-md text-bold hover:scale-110 active:scale-95 py-2 my-2 border font-bold border-red-600 rounded-md duration-200">
                    Archive
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/${employee._id}/profile`);
                    }}
                    className="opacity-0 group-hover:opacity-100 px-4 bg-green-500 text-white shadow-md text-bold hover:scale-110 active:scale-95 py-2 my-2 border font-bold border-green-500 rounded-md duration-200"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </section>
        </table>
      </div>
    </div>
  );
};

export default Users;
