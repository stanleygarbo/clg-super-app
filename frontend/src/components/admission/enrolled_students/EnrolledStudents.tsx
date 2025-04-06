import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../../api/student";
import { IStudentsGet } from "../../../interface/IStudents";
import { useState } from "react";
import StudentCard from "./StudentCard";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

interface ItemsProps {
  currentItems: IStudentsGet[];
}

const EnrolledStudents = () => {
  const navigate = useNavigate();
  // Paginate
  const [search, setSearch] = useState("");
  const itemsPerPage = 2;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const query = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  // const filteredStudents = query.data?.results?.length
  //   ? query.data.results.filter((stud: IStudentsGet) =>
  //       `${stud.surname} ${stud.firstName} ${stud.middleName}`
  //         .toLowerCase()
  //         .includes(search.toLowerCase())
  //     )
  //   : [];

  const filteredStudents = query.data?.results?.length
    ? query.data.results
        .filter((stud: IStudentsGet) =>
          `${stud.surname} ${stud.firstName} ${stud.middleName}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .sort((a: IStudentsGet, b: IStudentsGet) =>
          a.surname.localeCompare(b.surname)
        )
    : [];

  // const getFullName = (student: any) => {
  //   return `${student.surname}, ${student.firstName} ${student.middleName}`;
  // };

  function Items({ currentItems }: ItemsProps) {
    return (
      <>
        {currentItems &&
          currentItems.map((student: IStudentsGet, i: number) => (
            <StudentCard student={student} index={i} />
          ))}
      </>
    );
  }
  const currentItems = filteredStudents.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredStudents.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filteredStudents.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="">
      <div className="w-[1100px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold opacity-0">Student's List</h1>
          <button
            onClick={() => {
              navigate("/admission/eform");
            }}
            className="bg-blue-600 px-3 py-2 text-white font-bold font-sans rounded-md hover:bg-blue-800 active:scale-95 duration-200"
          >
            Enroll Student
          </button>
        </section>
        <section className="mt-5 bg-slate-100 px-5 py-2 rounded-md flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-800">Student's List</h1>
          <input
            type="text"
            className="border-0 rounded-md py-2 px-5 outline-none"
            placeholder="Q Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </section>
        <section className="py-3">
          <span className="flex mb-3 text-lg">
            <h1 className="w-[150px] font-bold pl-3">Last Name</h1>
            <h1 className="w-[150px] font-bold">First Name</h1>
            <h1 className="w-[150px] font-bold">Middle Name</h1>
            <h1 className="w-[150px] font-bold text-center">Gender</h1>
            <h1 className="w-[150px] font-bold text-center">Course</h1>
            <h1 className="w-[150px] font-bold text-center">Standing</h1>
            <h1 className="w-[200px] font-bold text-center">Action</h1>
          </span>
          <Items currentItems={currentItems} />
          <div className="flex justify-center w-full mt-2">
            <ReactPaginate
              breakLabel={<BsThreeDots />}
              nextLabel={<FaChevronRight />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={<FaChevronLeft />}
              renderOnZeroPageCount={null}
              className="flex items-center gap-4 font-bold"
              //pageClassName="text-orange-400" // para ni sa tanan numbers pero ma override ang activeClassName
              activeClassName="bg-blue-400 text-white" // para ni sa number nga active
              previousClassName="text-red-400" // Previous button #note icon ako gamit dili text
              nextClassName="text-green-400" // Next button #note icon ako gamit dili text
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnrolledStudents;
