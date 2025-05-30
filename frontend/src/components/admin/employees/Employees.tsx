import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdArchive, MdPageview } from "react-icons/md";
import { FaEdit, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEmployee, getEmployees } from "../../../api/employee";
import { IEmployeeGet } from "../../../interface/IEmployee";
import ReactPaginate from "react-paginate";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";

const ITEMS_PER_PAGE = 10;

const Employees = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0); // zero-based for react-paginate

  const query = useQuery({ queryKey: ["employee"], queryFn: getEmployees });

  const deleteMutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
    onError: (err: any) => {
      toast.error(err.response.data.message);
    },
  });

  const filteredEmployees = query.data?.results?.length
    ? query.data.results
        .filter((employee: IEmployeeGet) =>
          `${employee.surname} ${employee.firstName} ${employee.middleName}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .sort((a: IEmployeeGet, b: IEmployeeGet) =>
          a.surname.localeCompare(b.surname)
        )
    : [];

  const pageCount = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

  const paginatedEmployees = filteredEmployees.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const snap = useSnapshot(sidebarState);
  return (
    <div className="my-10 flex">
      <div className="w-0 xl:w-72"></div>
      <div
        className={`px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${snap.isOpen ? "" : "ml-0"}
      `}
        style={{ minHeight: "650px" }}
      >
        <section className="flex justify-between items-center">
          <h1 className="opacity-0">H</h1>
          <button
            onClick={() => {
              navigate("/admin/add-employee");
            }}
            className="bg-blue-600 px-3 py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
          >
            Add Employee
          </button>
        </section>

        <section className="mt-5 bg-slate-100 px-5 py-2 rounded-md flex justify-between flex-wrap gap-3">
          <h1 className="text-xl font-bold text-blue-800 py-1 flex-1 min-w-[180px]">
            Employee's List
          </h1>
          <input
            type="text"
            className="border-0 text-center rounded-md px-5 py-2 outline-none max-w-[300px] flex-grow"
            placeholder="Q Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(0); // Reset to page 0 on new search
            }}
          />
        </section>

        <section className="py-3">
          {/* Desktop Table Header */}
          <div className="hidden md:flex mb-3 text-lg whitespace-nowrap">
            <h1 className="w-[300px] font-bold text-center">Name</h1>
            <h1 className="w-[100px] font-bold text-center">Position</h1>
            <h1 className="w-[120px] font-bold text-center">Department</h1>
            <h1 className="w-[200px] font-bold text-center">Gender</h1>
            <h1 className="w-[180px] font-bold text-center">Roles</h1>
            <h1 className="w-[100px] font-bold text-center">Status</h1>
            <h1 className="w-[200px] font-bold text-center">Action</h1>
          </div>

          {/* Desktop Table Rows */}
          <div className="hidden md:block">
            {paginatedEmployees.map((employee: IEmployeeGet, index: number) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "rounded-t-md"
                    : index === paginatedEmployees.length - 1
                    ? "rounded-b-md"
                    : ""
                } ${
                  index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                } flex hover:bg-slate-300 py-2 text-sm font-semibold group items-center w-full whitespace-nowrap duration-200`}
              >
                <h1 className="flex items-center pl-3 w-[300px]">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                    alt="."
                    className="bg-blue-600 w-6 mr-2 aspect-square rounded-full"
                  />
                  <p>
                    {employee.surname}, {employee.firstName}{" "}
                    {employee.middleName[0]}.
                  </p>
                </h1>
                <h1 className="w-[100px] text-center">
                  {employee.position?.jobTitle}
                </h1>
                <h1 className="w-[120px] text-center">
                  {employee.department?.departmentName}
                </h1>
                <h1 className="w-[200px] text-center">
                  {employee?.birth?.sex}
                </h1>
                <h1 className="w-[180px] text-center">
                  {employee.roles.join(", ")}
                </h1>
                <h1 className="w-[100px] justify-center text-green-700 font-semibold flex items-center gap-1">
                  <div className="w-[9px] aspect-square bg-green-700 rounded-full"></div>{" "}
                  Active
                </h1>
                <h1 className="w-[200px] flex gap-2 items-center justify-center opacity-50 group-hover:opacity-100 whitespace-nowrap">
                  <button
                    onClick={() => navigate("/" + employee._id + "/profile")}
                    type="button"
                    className="bg-blue-600 text-xl py-2 px-3 rounded-md font-semibold text-white hover:bg-blue-800 active:scale-95 duration-200"
                  >
                    <MdPageview />
                  </button>
                  <button
                    onClick={() =>
                      navigate("/admin/update-employee/" + employee._id)
                    }
                    type="button"
                    className="bg-blue-600 text-xl py-2 px-3 rounded-md font-semibold text-white hover:bg-blue-800 active:scale-95 duration-200"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deleteMutation.mutate(employee._id)}
                    type="button"
                    className="bg-red-600 py-2 px-3 rounded-md text-xl font-semibold text-white hover:bg-red-800 active:scale-95 duration-200"
                  >
                    <MdArchive />
                  </button>
                </h1>
              </div>
            ))}
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {paginatedEmployees.map((employee: IEmployeeGet, index: number) => (
              <div
                key={index}
                className="bg-slate-100 rounded-md p-4 shadow-sm space-y-2 font-semibold"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                      alt="."
                      className="bg-blue-600 w-10 aspect-square rounded-full"
                    />
                    <h2 className="text-sm">
                      {employee.surname}, {employee.firstName}{" "}
                      {employee.middleName[0]}.
                    </h2>
                  </div>
                  <div className="text-green-700 font-semibold flex text-sm items-center gap-1 pr-5">
                    <div className="w-2 h-2 bg-green-700 rounded-full "></div>{" "}
                    Active
                  </div>
                </div>
                <div>
                  <span className="font-bold text-sm">
                    Position: {employee.position?.jobTitle}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-sm">
                    Department: {employee.department?.departmentName}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-sm">
                    Gender: {employee?.birth?.sex.toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-sm">
                    Roles: {employee.roles.join(", ")}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 justify-center items-center mt-2">
                  <button
                    onClick={() => navigate("/" + employee._id + "/profile")}
                    type="button"
                    className="bg-blue-600 text-2xl mx-1 py-2 flex justify-center rounded-md font-semibold text-white hover:bg-blue-800 active:scale-90 duration-200"
                  >
                    <MdPageview />
                  </button>
                  <button
                    onClick={() =>
                      navigate("/admin/update-employee/" + employee._id)
                    }
                    type="button"
                    className="bg-blue-600 text-2xl mx-1 py-2 flex justify-center rounded-md font-semibold text-white hover:bg-blue-800 active:scale-90 duration-200"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deleteMutation.mutate(employee._id)}
                    type="button"
                    className="bg-red-600 text-2xl mx-1 py-2 flex justify-center rounded-md font-semibold text-white hover:bg-red-800 active:scale-90 duration-200"
                  >
                    <MdArchive />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* </section> */}

          {/* Pagination */}
          {filteredEmployees.length > ITEMS_PER_PAGE && (
            <div className="flex justify-center mt-6">
              <ReactPaginate
                breakLabel={<BsThreeDots />}
                nextLabel={<FaChevronRight />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<FaChevronLeft />}
                renderOnZeroPageCount={null}
                containerClassName="flex items-center gap-4 font-bold flex-wrap justify-center"
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

export default Employees;
