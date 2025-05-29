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

  const users = [
    ...(employees.data?.results || []),
    ...(students.data?.results || []),
  ];
  const [search, setSearch] = useState("");

  const pageCount = Math.ceil(users.length / ITEMS_PER_PAGE);

  const filteredUsers = users
    .filter((user: IStudentsGet) =>
      `${user.surname} ${user.firstName} ${user.middleName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => a.surname.localeCompare(b.surname));

  const paginatedUsers = filteredUsers.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div className="flex flex-col xl:flex-row mt-20 xl:mt-10 mb-10 px-2">
      {/* Sidebar spacing */}
      <div className="hidden xl:block xl:w-72"></div>

      {/* Main content */}
      <div className="w-full max-w-screen-xl mx-auto xl:w-[1000px]">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">User List</h1>
        </section>

        <section className="mt-3 bg-slate-100 px-5 py-3 flex flex-col sm:flex-row justify-between">
          <span className="flex gap-3">
            {/* <h1 className="bg-white rounded-sm text-black flex items-center gap-1 px-2 py-2">
              <IoListOutline className="text-lg" />
              <p className="text-sm font-semibold">LIST</p>
            </h1> */}
          </span>
          <span className="flex gap-3">
            <input
              type="text"
              className="bg-white rounded-sm px-5 outline-none py-2 xl:py-1 w-full sm:w-auto"
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(0); // Reset to page 0 on new search
              }}
            />
          </span>
        </section>

        {/* Desktop Table Layout */}
        <section className="py-3 hidden md:block">
          <div className="flex gap-5 mb-3 font-bold text-sm">
            <h1 className="w-[250px]">Name</h1>
            <h1 className="w-[250px] text-center">Email</h1>
            <h1 className="w-[150px] text-center">Phone No.</h1>
          </div>

          {paginatedUsers.map((user: IStudentsGet, index: number) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "bg-slate-100" : "bg-slate-300"
              } flex pl-3 py-3 text-sm items-center`}
            >
              <div className="flex gap-2 items-center w-[250px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                  alt="."
                  className="bg-blue-600 w-7 aspect-square rounded-full"
                />
                <p>
                  {user?.surname}, {user?.firstName} {user?.middleName}
                </p>
              </div>
              <div className="w-[250px] text-center">{user?.email}</div>
              <div className="w-[150px] text-center">{user?.phone}</div>
            </div>
          ))}
        </section>

        {/* Mobile Card Layout */}
        <section className="md:hidden space-y-4 mt-3">
          {paginatedUsers.map((user: IStudentsGet, index: number) => (
            <div
              key={index}
              className="bg-slate-100 rounded-md p-4 shadow-sm space-y-2 font-semibold"
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                  alt="."
                  className="bg-blue-600 w-10 aspect-square rounded-full"
                />
                <h2 className="text-lg">
                  {user?.surname}, {user?.firstName} {user?.middleName}
                </h2>
              </div>
              <div>
                <span className="font-bold">Email:</span> {user?.email}
              </div>
              <div>
                <span className="font-bold">Phone:</span> {user?.phone}
              </div>
            </div>
          ))}
        </section>

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
      </div>
    </div>
  );
};

export default Users;
