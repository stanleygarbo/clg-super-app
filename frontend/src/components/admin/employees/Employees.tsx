import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { employeeData } from "../../../store/EmployeeData";
import AddEmployee from "./AddEmployee";
import { IoMdPersonAdd } from "react-icons/io";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { updateEmployeeData } from "../../../store/UpdateEmployeeData";
import UpdateEmployee from "./UpdateEmployee";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../../api/employee";
import { IoListOutline } from "react-icons/io5";
import { IEmployee, IEmployeeFetch } from "../../../interface/IEmployee";
// import { useSnapshot } from "valtio";

const Employees = () => {
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    let { id } = useParams<string>();
    const [error, setError] = useState<string | null>(null);
    // const [viewEmployeeForm, setViewEmployeeForm] = useState<boolean>(true);
    const [addEmployeeForm, setAddEmployeeForm] = useState<boolean>(true);
    const [updateEmployeeForm, setUpdateEmployeeForm] = useState<boolean>(true);
    const navigate = useNavigate();

    // FETCH TO BE UPDATED EMPLOYEE
    const fetchUpdateEmployee = async () => {
        try {
            const response = await apiClient.get("/employees/" + id);
            // setEmployees(response.data.results);
            // console.log("Update Res", response.data);
            const res = response.data;
            employeeData._id = res._id;
            employeeData.password = res.password;
            // employeeData.departmentId = res.department._id;
            employeeData.department = res.department.departmentName;
            employeeData.employmentType = res.employmentType;
            employeeData.firstName = res.firstName;
            employeeData.hireDate = res.hireDate;
            employeeData.middleName = res.middleName;
            employeeData.position = res.position.jobTitle;
            // employeeData.positionId = res.position._id;
            employeeData.roles = res.roles;
            employeeData.surname = res.surname;
            employeeData.username = res.username;

            // console.log(
            //   "Data to be updated :: ",
            //   employeeData.departmentId,
            //   " ",
            //   employeeData.positionId
            // );
        } catch (err) {
            setError("Error Occured");
        } finally {
            setLoading(false);
        }
    };

    // FETCH EMPLOYEE
    const fetchEmployee = async () => {
        try {
            const response = await apiClient.get("/employees");
            setEmployees(response.data.results);
        } catch {
            toast.error("Error while getting data");
        } finally {
            setLoading(false);
        }
    };

    // ADD EMLOYEE
    const addEmployee = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setLoading(true);
        employeeData.hireDate = new Date().toISOString();
        try {
            const data = {
                firstName: employeeData.firstName,
                surname: employeeData.surname,
                middleName: employeeData.middleName,
                username: employeeData.username,
                password: employeeData.password,
                department: employeeData.department,
                position: employeeData.position,
                hireDate: employeeData.hireDate,
                employmentType: employeeData.employmentType,
                roles: employeeData.roles
                    ? JSON.parse(JSON.stringify(employeeData.roles))
                    : [],
            };
            await apiClient.post("/employees", data);
            toast.success("Employee added successfully!");
        } catch (err) {
            setError("Error adding employee");
            toast.error(error);
        } finally {
            setLoading(false);
            setAddEmployeeForm(true);
        }
    };

    // DELETE EMPLOYEE
    const deleteEmployee = async () => {
        try {
            await apiClient.delete("/employees/" + id);
            toast.success("Successfully deleted employee");
        } catch {
            toast.error("Error in deleting employee");
        } finally {
        }
    };

    // UPDATE EMPLOYEE
    const hanldeUpdateEmployee = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            setLoading(true);
            const updatedEmployee = {
                firstName: employeeData.firstName,
                middleName: employeeData.middleName,
                surname: employeeData.surname,
                roles: employeeData.roles,
                employmentType: employeeData.employmentType,
                // department: employeeData.departmentId,
                // position: employeeData.positionId,
            };
            id = employeeData._id;
            // console.log("ID :: ", id);
            console.log(updatedEmployee);
            console.log(employeeData.department);
            const response = await apiClient.patch(
                "/employees/" + id,
                updatedEmployee
            );
            console.log("Resposnde::: ", response.data.results);
            toast.success("Employee updated successfully!");
        } catch {
            setError("Error updating employee");
            toast.error(error);
        } finally {
            setLoading(false);
            setUpdateEmployeeForm(true);
        }
    };

    // const query = useQuery({ queryKey: ["employees"], queryFn: getEmployees });
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchEmployee();
    }, []);

    return (
        <div className="">
            <div className="w-[1000px] h-[650px] relative">
                <section className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Employee's List</h1>
                    <button
                        onClick={() => {
                            isOpen ? setIsOpen(false) : setIsOpen(true);
                        }}
                        className="bg-blue-700 px-3 py-2 text-white font-semibold rounded-md text-sm"
                    >
                        Add Employee
                    </button>
                </section>
                <form
                    className={`${
                        isOpen
                            ? "w-[400px] opacity-100 right-1/2"
                            : "w-0 opacity-0 right-0"
                    } absolute tranform translate-x-1/2 translate-y-1/2  bottom-1/2 rounded-md bg-white flex flex-col shadow-md p-5 backdrop-blur-md duration-150`}
                >
                    <section className="flex items-center justify-between mb-5 pl-2">
                        <h1 className="font-bold">Add User</h1>
                        <button
                            type="button"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            className="font-bold hover:text-black text-red-600 hover:bg-red-500 px-2 rounded duration-200"
                        >
                            X
                        </button>
                    </section>
                    {/* <AddUser /> */}
                    <button className="bg-blue-600 mt-3 py-1 text-white font-bold rounded-md hover:bg-blue-700 active:scale-95 duration-200">
                        Add
                    </button>
                </form>
                <section className="mt-5 bg-slate-100 px-5 py-3 rounded-t-md flex justify-between">
                    <span className="flex gap-3">
                        <button
                            className={`bg-blue-600 text-white flex items-center gap-1 px-2 py-2 rounded-md shadow border-t`}
                        >
                            <p className="font-bold text-lg">
                                <IoListOutline />
                            </p>
                            <p className="text-sm font-semibold">LIST</p>
                        </button>
                    </span>
                    <span className="flex gap-3 ">
                        <input
                            type="text"
                            className="border border-slate-500 rounded-sm px-5"
                            placeholder="Q Search..."
                        />
                    </span>
                </section>
                <section className="py-3">
                    <span className="flex gap-5 mb-3">
                        <h1 className="w-[230px] font-bold">Name</h1>
                        <h1 className="w-[120px] font-bold">Position</h1>
                        <h1 className="w-[120px] font-bold">Department</h1>
                        <h1 className="w-[230px] font-bold">Employment Type</h1>
                        <h1 className="w-[100px] font-bold">Roles</h1>
                        <h1 className="w-[100px] font-bold">Status</h1>
                    </span>
                    {employees.map((employee, index) => (
                        <span
                            key={index}
                            className="flex gap-5 bg-slate-100 pl-3 py-3 text-sm items-center rounded-md border"
                        >
                            <h1 className="flex gap-2 items-center w-[220px]">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                                    alt="."
                                    className="bg-blue-600 w-7 aspect-square rounded-full"
                                />
                                <p>
                                    {employee.surname}, {employee.firstName}{" "}
                                    {employee.middleName}
                                </p>
                            </h1>
                            <h1 className="w-[120px]">
                                {employee.position
                                    ? employee.position.jobTitle
                                    : "N/A"}
                            </h1>
                            <h1 className="w-[120px]">
                                {employee.position
                                    ? employee.department.departmentName
                                    : "N/A"}
                            </h1>
                            <h1 className="w-[230px]">
                                mhegryanlimpangog@gmail.com
                            </h1>
                            <h1 className="w-[100px]">09317619652</h1>
                            <h1 className="w-[50px] text-green-500 font-semibold">
                                Active
                            </h1>
                            <h1 className="font-bold hover:cursor-pointer px-2">
                                :
                            </h1>
                        </span>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Employees;
