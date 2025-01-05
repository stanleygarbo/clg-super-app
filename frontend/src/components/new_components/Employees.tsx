import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { employeeData } from "../../store/EmployeeData";
import AddEmployee from "./AddEmployee";

const Users = () => {
  const [employees, setEmployees] = useState<(typeof employeesData)[]>();
  const [loading, setLoading] = useState<boolean>(true);
  let { id } = useParams<string>();
  const employeesData = { id, employeeData };
  const [error, setError] = useState<string | null>(null);
  const [addEmployeeForm, setAddEmployeeForm] = useState<boolean>(true);

  const fetchEmployee = async () => {
    try {
      const response = await fetch("http://localhost:8000/employee");
      if (!response.ok) {
        throw new Error("Failed to fetch Employee");
      }

      const datas: (typeof employeesData)[] = await response.json();
      setEmployees(datas);
      console.log(employees);
    } catch (err) {
      setError("Error Occured");
      alert("Error Occured: ");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    const datas = { employeeData };

    const res = await fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datas),
    });
    console.log(datas);

    if (res.ok) {
      alert("Employee Added Successfully");
    } else {
      alert(`error${res.status}`);
    }
  };

  // const handleDelete = async () => {
  //   const res = await fetch("http://localhost:8000/employee/" + id, {
  //     method: "DELETE",
  //   });

  //   if (res.ok) {
  //     alert("Employee Deleted Successfully");
  //   } else {
  //     alert("Error Occured");
  //   }
  // };

  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <div className="">
      <div className=" flex flex-col justify-center relative">
        {/* Add user */}
        <form
          onSubmit={handleSubmit}
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
                className="bg-red-200 px-2 font-bold rounded-md shadow-md hover:scale-105 duration-200"
              >
                X
              </button>
            </h1>
          </section>
          <AddEmployee />
          <h1 className="flex justify-center">
            <button
              type="submit"
              className="w-[50%] bg-gradient-to-t from-blue-600 to-blue-400 shadow-blue-600/50 py-[5px] rounded-md font-bold shadow-md hover:scale-105 text-white active:scale-95 duration-200"
            >
              Add
            </button>
          </h1>
        </form>
        <h1 className="text-center py-5 text-2xl font-bold bg-slate-50 border-t border-r border-l rounded-t-md shadow-sm">
          All Employees
        </h1>
        <table className="w-[1100px] h-[570px] border flex flex-col rounded-b-md shadow-md bg-white duration-200 py-10 px-12">
          <th className="grid grid-cols-4 text-lg font-bold gap-3 p-2 border-b mb-5 text-blue-800 border-blue-300 items-center w-[100%]">
            <td className="w-[300px] text-center">Name</td>
            <td className="w-[200px] text-end pr-2">Position</td>
            <td className="w-[200px text-center">Office</td>
            <td className="w-[200px] text-end">
              <button
                type="button"
                onClick={() => {
                  addEmployeeForm === true
                    ? setAddEmployeeForm(false)
                    : setAddEmployeeForm(true);
                }}
                className="px-6 shadow-md text-bold hover:scale-105 active:scale-95 py-[5px] my-2 font-bold text-white bg-gradient-to-t from-blue-600 to-blue-400 shadow-blue-600/50 rounded-md duration-200"
              >
                Add User
              </button>
            </td>
          </th>
          {error && (
            <div className="flex justify-center items-center">
              Failed to fetch data
            </div>
          )}
          {loading && (
            <div className="flex justify-center items-center">Loading...</div>
          )}
          <section className="overflow-hidden overflow-y-auto no-scrollbar flex flex-col">
            {employees?.map((employee, index) => (
              <tr
                key={index}
                className="duration-200 hover:cursor-pointer font-semibold gap-3 items-center text-sm grid grid-cols-4 px-2 rounded-sm hover:rounded-lg bg-slate-50 group shadow-sm border hover:bg-blue-100 hover:border-blue-100 relative"
              >
                <td className="w-[300px] text-center">
                  {employee.employeeData.lastName}{" "}
                  {employee.employeeData.firstName}{" "}
                  {employee.employeeData.middleName}
                </td>
                <td className="w-[200px] text-end">
                  {employee.employeeData.position}
                </td>
                <td className="w-[200px text-center">
                  {employee.employeeData.office}
                </td>
                <td className="w-[200px] text-end">
                  <button className="opacity-0 group-hover:opacity-100 px-4 group-hover:bg-red-100 shadow-md text-bold hover:scale-105 active:scale-95 py-2 my-2 border font-bold group-hover:border-red-200 rounded-md duration-200">
                    Archived
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
