import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import { IoListOutline } from "react-icons/io5";
import { getEmployees } from "../../../api/employee";
import { getStudents } from "../../../api/student";
import { IStudentsGet } from "../../../interface/IStudents";

const Users = () => {
  // const [currentPage, setcurrentPage] = useState<number>(1);

  const employees = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  const students = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  const users = employees.data?.results.concat(students.data?.results);

  // useEffect(() => {
  //   if (!users)
  //     employees.data?.results.map((employee: any) => {
  //       return employee;
  //     });
  //   students.data?.results.map((student: any) => {
  //     return student;
  //   });
  // }, [users, employees, students]);

  console.log(users);

  return (
    <div className="">
      <div className="w-[1200px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">User List</h1>
          {/* <button
            onClick={() => {
              isOpen ? setIsOpen(false) : setIsOpen(true);
            }}
            className="bg-blue-700 px-3 py-2 text-white font-semibold rounded-md text-sm"
          >
            Add User
          </button> */}
        </section>
        {/* <form
          className={`${
            isOpen ? "w-[400px] opacity-100 right-1/2" : "w-0 opacity-0 right-0"
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
          <button className="bg-blue-600 mt-3 py-1 text-white font-bold rounded-md hover:bg-blue-700 active:scale-95 duration-200">
            Add
          </button>
        </form> */}
        <section className="mt-5 bg-slate-100 px-5 py-3 rounded-t-md flex justify-between">
          <span className="flex gap-3 opacity-0">
            <h1
              className={`bg-blue-600 text-white flex items-center gap-1 px-2 py-2 rounded-md shadow border-t`}
            >
              <p className="font-bold text-lg">
                <IoListOutline />
              </p>
              <p className="text-sm font-semibold">LIST</p>
            </h1>
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
            <h1 className="w-[250px] font-bold">Name</h1>
            <h1 className="w-[250px] font-bold">Email</h1>
            <h1 className="w-[100px] font-bold">Phone No.</h1>
          </span>
          {users?.length > 0
            ? users.map((user: IStudentsGet, index: number) => (
                <span
                  key={index}
                  className="flex bg-slate-100 pl-3 py-3 text-sm items-center rounded-md border"
                >
                  <h1 className="flex gap-2 items-center w-[250px] border">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                      alt="."
                      className="bg-blue-600 w-7 aspect-square rounded-full"
                    />
                    <p>
                      {user?.surname}, {user?.firstName} {user?.middleName}
                    </p>
                  </h1>

                  <h1 className="w-[250px] border text-center">
                    {user?.email}
                  </h1>
                  <h1 className="w-[150px] text-center border">
                    {user?.phone}
                  </h1>
                  {/* <h1 className="font-bold hover:cursor-pointer px-2">:</h1> */}
                </span>
              ))
            : ""}
        </section>
      </div>
    </div>
  );
};

export default Users;
