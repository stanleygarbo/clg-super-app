import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../../api/student";
import { IStudentsGet } from "../../../interface/IStudents";
import { useState } from "react";
import StudentCard from "./StudentCard";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
// import SelectButton from "./SelectButtonProps";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";

interface ItemsProps {
  currentItems: IStudentsGet[];
}

const EnrolledStudents = () => {
  const navigate = useNavigate();
  // Paginate
  const [search, setSearch] = useState("");
  const [by, setBy] = useState<string>("");
  const itemsPerPage = 10;
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

  // const filteredStudents = query.data?.results?.length
  //   ? query.data.results
  //       .filter((stud: IStudentsGet) =>
  //         `${stud.surname} ${stud.firstName} ${stud.middleName} ${stud.standing}`
  //           .toLowerCase()
  //           .includes(by.toLowerCase() || search.toLowerCase())
  //       )
  //       .sort((a: IStudentsGet, b: IStudentsGet) =>
  //         a.surname.localeCompare(b.surname)
  //       )
  //   : [];

  const filteredStudents = query.data?.results?.length
    ? query.data.results
        // First: Filter by year (standing)
        .filter((stud: IStudentsGet) =>
          by ? stud.standing.toLowerCase() === by.toLowerCase() : true
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

  // const getFullName = (student: any) => {
  //   return `${student.surname}, ${student.firstName} ${student.middleName}`;
  // };

  // console.log(query.data);

  // const [checkedStudents, setCheckedStudents] = useState<
  //   Record<string, boolean>
  // >({});

  // const toggleCheck = (_id: string) => {
  //   setCheckedStudents((prev) => ({
  //     ...prev,
  //     [_id]: !prev[_id],
  //   }));
  // };

  // Add batchSize and batchIndex state
  // const batchSize = 5;
  // const [batchIndex, setBatchIndex] = useState(0);

  // const selectBatch = (startIndex: number) => {
  //   const endIndex = startIndex + batchSize;
  //   const newChecked: Record<string, boolean> = {};

  //   const batch = filteredStudents.slice(startIndex, endIndex);

  //   batch.forEach((student: IStudentsGet) => {
  //     newChecked[student._id] = true;
  //   });

  //   setCheckedStudents((prev) => ({ ...prev, ...newChecked }));
  // };

  // const handleSelectBatch = () => {
  //   const start = batchIndex * batchSize;
  //   const end = start + batchSize;

  //   const currentBatch = filteredStudents.slice(start, end);
  //   const allChecked = currentBatch.every(
  //     (student: IStudentsGet) => checkedStudents[student._id]
  //   );

  //   if (!allChecked) {
  //     // Select only the unchecked students in the current batch
  //     const newChecked: Record<string, boolean> = {};
  //     currentBatch.forEach((student: IStudentsGet) => {
  //       if (!checkedStudents[student._id]) {
  //         newChecked[student._id] = true;
  //       }
  //     });
  //     setCheckedStudents((prev) => ({ ...prev, ...newChecked }));
  //   } else {
  //     // Move to the next batch
  //     setBatchIndex((prev) => prev + 1);
  //     selectBatch(end);
  //   }
  // };

  function Items({ currentItems }: ItemsProps) {
    return (
      <>
        {currentItems &&
          currentItems.map((student: IStudentsGet, i: number) => (
            <StudentCard
              currentItems={currentItems}
              student={student}
              index={i}
              // checkedStudents={checkedStudents}
              // onToggle={() => toggleCheck(student._id)}
            />
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

  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;

  return (
    <div className={`flex mt-5`}>
      <div
        className={`${
          isOpen ? "-z-50 xl:z-50" : ""
        } w-full xl:w-[1200px] xl:h-[650px] relative`}
      >
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
        <section className="my-5 bg-slate-100 px-5 ml-1 w-[330px] xl:w-full py-2 flex flex-col xl:flex-row rounded-md items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-800 py-3">
            Student's List
          </h1>
          <section className="flex flex-col xl:flex-row gap-5 items-center">
            {/* <SelectButton onSelect={handleSelectBatch} /> */}
            <select
              value={by}
              onChange={(e) => {
                setBy(e.target.value);
              }}
              className="rounded-md px-4 py-2 w-60 xl:w-40 bg-white text-center outline-none"
            >
              <option value="">All</option>
              <option value="freshman">1st Year</option>
              <option value="sophomore">2nd Year</option>
              <option value="junior">3rd Year</option>
              <option value="senoir">4th Year</option>
            </select>
            <input
              type="text"
              className="border-0 rounded-md w-60 xl:w-72 text-center py-2 px-5 outline-none"
              placeholder="Q Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </section>
        </section>
        <section className="py-3 pl-1">
          <span className="md:flex hidden mb-3 text-lg">
            <h1 className="w-[150px] font-bold pl-3">Last Name</h1>
            <h1 className="w-[150px] font-bold">First Name</h1>
            <h1 className="w-[150px] font-bold">Middle Name</h1>
            <h1 className="w-[150px] font-bold text-center">Gender</h1>
            <h1 className="w-[150px] font-bold text-center">Course</h1>
            <h1 className="w-[150px] font-bold text-center">Standing</h1>
            <h1 className="w-[200px] font-bold text-center">Action</h1>
          </span>
          <div className="text-xl font-bold mb-3 flex flex-col gap-2 xl:gap-0">
            <Items currentItems={currentItems} />
          </div>
          {/* <section
            className={`${
              isOpen ? "-z-50" : ""
            } max-h-[80hv] overflow-auto no-scrollbar`}
          >
            <Items currentItems={currentItems} />
          </section> */}
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
              activeClassName="bg-blue-600 px-2 font-semibold rounded-md text-white" // para ni sa number nga active
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
