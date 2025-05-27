import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoListOutline } from "react-icons/io5";
import { getEmployees } from "../../../api/employee";
import { getStudents } from "../../../api/student";
import { IStudentsGet } from "../../../interface/IStudents";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const ITEMS_PER_PAGE = 10;

const Users = () => {
  const [currentPage, setCurrentPage] = useState<number>(0); // zero-based for ReactPaginate

  const employees = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  const students = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  const users = employees.data?.results.concat(students.data?.results) || [];

  const pageCount = Math.ceil(users.length / ITEMS_PER_PAGE);

  const paginatedUsers = users.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div className="">
      <div className="w-[1200px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">User List</h1>
        </section>

        <section className="mt-5 bg-slate-100 px-5 py-3 flex justify-between">
          <span className="flex gap-3">
            <h1
              className={`bg-white rounded-sm text-black flex items-center gap-1 px-2 py-2`}
            >
              <p className="font-bold text-lg">
                <IoListOutline />
              </p>
              <p className="text-sm font-semibold">LIST</p>
            </h1>
          </span>
          <span className="flex gap-3">
            <input
              type="text"
              className="bg-white rounded-sm px-5 outline-none hidden"
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

          {paginatedUsers.map((user: IStudentsGet, index: number) => (
            <span
              key={index}
              className={`${
                index % 2 === 0 ? "bg-slate-100" : "bg-slate-300"
              } flex pl-3 py-3 text-sm items-center`}
            >
              <h1 className="flex gap-2 items-center w-[250px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                  alt="."
                  className="bg-blue-600 w-7 aspect-square rounded-full"
                />
                <p>
                  {user?.surname}, {user?.firstName} {user?.middleName}
                </p>
              </h1>

              <h1 className="w-[250px] text-center">{user?.email}</h1>
              <h1 className="w-[150px] text-center">{user?.phone}</h1>
            </span>
          ))}

          {/* Pagination */}
          {users.length > ITEMS_PER_PAGE && (
            <div className="flex justify-center mt-6">
              <ReactPaginate
                breakLabel={<BsThreeDots />}
                nextLabel={<FaChevronRight />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<FaChevronLeft />}
                renderOnZeroPageCount={null}
                containerClassName="flex items-center gap-4 font-bold"
                activeClassName="bg-blue-600 px-2 font-semibold rounded-md text-white"
                previousClassName="text-red-400"
                nextClassName="text-green-400"
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Users;
