import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../../api/student";
import { IStudentsGet } from "../../../interface/IStudents";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const { data } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  //   const students = data?.results || [];
  const [search, setSearch] = useState("");
  const [by, setBy] = useState("");
  const navigate = useNavigate();

  const filteredStudents = data?.results?.length
    ? data.results
        // First: Filter by year (standing)
        .filter((stud: IStudentsGet) =>
          by
            ? stud.program.programAcronym.toLowerCase() === by.toLowerCase()
            : true
        )
        // Then: Filter by search input
        .filter((stud: IStudentsGet) => {
          const fullName =
            `${stud.surname} ${stud.firstName} ${stud.middleName}`.toLowerCase();
          const searchLower = search?.toLowerCase() || "";
          return fullName.includes(searchLower);
        })
        // Optional: Sort alphabetically by surname
        .sort((a: IStudentsGet, b: IStudentsGet) =>
          a.surname.localeCompare(b.surname)
        )
    : [];

  // Pagination logic
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredStudents.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredStudents.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredStudents.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex xl:pt-10">
      <div className="w-full xl:w-[1200px] flex flex-col my-10">
        <section className="bg-blue-800 p-3 rounded-md flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-white font-bold text-xl">Students List</h1>
          <section className="flex flex-col md:flex-row items-center gap-3">
            <select
              value={by}
              className="py-2 px-2 text-center rounded-md outline-none"
              onChange={(e) => setBy(e.target.value)}
            >
              <option value="">All</option>
              <option value="BSCS">BSCS</option>
              <option value="BSIT">BSIT</option>
            </select>
            <input
              type="search"
              className="outline-none px-2 p-2 text-center rounded-md"
              placeholder="Q search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </section>
        </section>

        {/* Desktop Table Header */}
        <section className="py-3 font-semibold text-lg hidden md:grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] text-center">
          <h1 className="">LastName</h1>
          <h1 className="">FirstName</h1>
          <h1 className="">MiddleName</h1>
          <h1 className="">Course</h1>
          <h1 className="">Standing</h1>
          <h1 className="">Status</h1>
          <h1 className="">Action</h1>
        </section>

        {/* Desktop Rows */}
        <section className="hidden md:block">
          {currentItems.map((student: IStudentsGet, index: number) => (
            <section
              key={student._id}
              className={`${
                index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
              } grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] text-center items-center py-2`}
            >
              <h1>{student.surname}</h1>
              <h1>{student.firstName}</h1>
              <h1>{student.middleName}</h1>
              <h1>{student.program.programAcronym}</h1>
              <h1>{student.standing}</h1>
              <h1>Enrolled</h1>
              <h1>
                not available...
                {/* <button
                  onClick={() => {
                    navigate(`/registrar/students-grade/${student._id}`);
                  }}
                  className="bg-blue-700 px-2 py-1 rounded text-white font-semibold hover:bg-blue-800 active:scale-90 duration-200"
                >
                  View Grade
                </button> */}
              </h1>{" "}
            </section>
          ))}
        </section>

        {/* Mobile Cards */}
        <section className="md:hidden mt-5 space-y-3">
          {currentItems.map((student: IStudentsGet) => (
            <div
              key={student._id}
              className="bg-slate-100 p-4 rounded-md shadow-md text-sm"
            >
              <h2 className="font-bold text-gray-700 text-base">
                <strong className="">Fullname: </strong>
                {student.surname}, {student.firstName}{" "}
                {student.middleName?.[0] || ""}.
              </h2>
              <p className="text-gray-700">
                <strong>Program:</strong> {student.program.programAcronym}
              </p>
              <p className="text-gray-700">
                <strong>Standing:</strong> {student.standing}
              </p>
              <p className="text-gray-700">
                <strong>Status:</strong> Enrolled
              </p>
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => {
                    navigate(`/registrar/students-grade/${student._id}`);
                  }}
                  className="bg-blue-600 px-3 py-1 rounded text-white text-xs hover:bg-blue-800 duration-200"
                >
                  View Grade
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-5">
          <ReactPaginate
            breakLabel={<BsThreeDots />}
            nextLabel={<FaChevronRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<FaChevronLeft />}
            renderOnZeroPageCount={null}
            className="flex items-center gap-3 font-bold"
            activeClassName="bg-blue-600 px-3 py-1 rounded-md text-white"
            previousClassName="text-blue-500"
            nextClassName="text-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentList;
