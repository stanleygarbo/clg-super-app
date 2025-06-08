import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
// import { IoListOutline } from "react-icons/io5";
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
    <div className="flex flex-col xl:flex-row mt-20 xl:mt-1 mb-10 px-2">
      {/* Main content */}
      <div className="w-full max-w-screen-xl mx-auto">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">User List</h1>
        </section>
        <section className="mt-3 bg-slate-100 px-5 py-3 rounded-lg flex flex-col sm:flex-row justify-between">
          <span className="flex gap-3"></span>
          <span className="flex gap-3">
            <input
              type="search"
              className="bg-white rounded-lg px-5 text-center font-semibold outline-none py-2 xl:py-1 w-full"
              placeholder="Q search"
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(0); // Reset to page 0 on new search
              }}
            />
          </span>
        </section>

        {/* Desktop Table Layout */}
        <section className="py-3 hidden xl:grid w-[1200px]">
          <div className="grid grid-cols-[2fr_1fr_2fr_1fr] gap-10 mb-3 font-bold text-">
            <h1 className="text-center">Name</h1>
            <h1>Occupation</h1>
            <h1 className="text-center">Email</h1>
            <h1 className="">Phone No.</h1>
          </div>

          {paginatedUsers.map((user: IStudentsGet, index: number) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "rounded-t-lg"
                  : index === paginatedUsers.length - 1
                  ? "rounded-b-lg"
                  : ""
              } ${
                index % 2 === 0 ? "bg-blue-100" : "bg-slate-100"
              } grid grid-cols-[2fr_1fr_2fr_1fr] pl-3 py-3 gap-10 font-semibold text-sm items-center`}
            >
              <div className="flex gap-2 items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                  alt="."
                  className="bg-blue-600 w-7 aspect-square rounded-full"
                />
                <p>
                  {user?.surname}, {user?.firstName} {user?.middleName}
                </p>
              </div>
              <div className="">
                {user.roles.includes("student") ? "Student" : "Employee"}
              </div>
              <div className="text-center">{user?.email}</div>
              <div className="">{user?.phone}</div>
            </div>
          ))}
        </section>

        {/* Mobile Card Layout */}
        <section className="md:hidden grid gap-3 mt-5">
          {paginatedUsers.map((user: IStudentsGet, index: number) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "bg-blue-50" : "bg-slate-50"
              } rounded-lg p-4 font-semibold grid gap-3`}
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                  alt="."
                  className="bg-blue-600 w-8 aspect-square rounded-full"
                />
                <h2 className="text-base">
                  {user?.surname}, {user?.firstName} {user?.middleName}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm text-blue-900">
                  Occupation:
                </span>{" "}
                {user?.roles.includes("student") ? "Student" : "Employee"}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm text-blue-900">Email:</span>{" "}
                {user?.email}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm text-blue-900">Phone:</span>{" "}
                {user?.phone}
              </div>
            </div>
          ))}
        </section>

        {/* Pagination */}
        {filteredUsers.length > ITEMS_PER_PAGE && (
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
