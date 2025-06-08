import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { IPositionGet, IPositionPost } from "../../../interface/IPosition";
import { AiFillDelete } from "react-icons/ai";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addPosition,
  deletePosition,
  getPositions,
} from "../../../api/position";
import { twMerge } from "tailwind-merge";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";

const PositionDashboard = () => {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<IPositionPost>();

  const query = useQuery({
    queryKey: ["/positions"],
    queryFn: getPositions,
  });

  const addPostMutation = useMutation({
    mutationFn: addPosition,
    onSuccess: () => {
      toast.success("Added Successfully");
      query.refetch();
      setValue("jobTitle", "");
      setValue("hourlyWage", 0);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePosition,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  const filteredData =
    query.data?.results?.filter((post: IPositionGet) =>
      post.jobTitle.toLowerCase().includes(search.toLowerCase())
    ) || [];

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;

  return (
    <div className="p-5 max-w-screen-lg mx-auto">
      {/* ADD POSITION */}
      <section className="flex flex-col gap-5 mb-6">
        <h1 className="text-xl font-bold text-blue-800">Add Position</h1>
        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          onSubmit={handleSubmit((data) => addPostMutation.mutate(data))}
        >
          <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
            <input
              type="text"
              {...register("jobTitle", { required: "Job Title is required" })}
              placeholder="Job Title"
              className={twMerge(
                "outline-none w-full border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                errors.jobTitle?.message &&
                  "focus:border-b-red-500 border-b-red-500"
              )}
            />
            <p className="absolute text-[11px] text-red-500 font-semibold bottom-[-15px] left-[50px]">
              {errors.jobTitle?.message}
            </p>
          </section>

          <section className={`${isOpen ? "-z-50 xl:z-50" : ""} relative`}>
            <input
              type="number"
              {...register("hourlyWage", {
                required: "Hourly Wage is required",
              })}
              placeholder="Hourly Wage"
              className={twMerge(
                "outline-none w-full border-0 py-1 px-2 text-lg font-semibold text-center border-b-2 border-b-black focus:border-b-blue-800",
                errors.hourlyWage?.message &&
                  "focus:border-b-red-500 border-b-red-500"
              )}
            />
            <p className="absolute text-[11px] text-red-500 font-semibold bottom-[-15px] left-[50px]">
              {errors.hourlyWage?.message}
            </p>
          </section>

          <button
            type="submit"
            className="bg-blue-600 w-full flex justify-center py-2 text-white font-bold rounded-lg hover:bg-blue-800 active:scale-95 duration-200"
          >
            {addPostMutation.isPending ? (
              <img src="/loading.svg" className="invert w-5 h-5" alt="" />
            ) : (
              "Add Position"
            )}
          </button>
        </form>
      </section>

      {/* SEARCH BAR */}
      <section className="bg-slate-100 px-4 py-3 rounded-lg flex flex-col md:flex-row md:justify-between items-center gap-2">
        <h1 className="text-xl font-bold text-blue-800">Positions List</h1>
        <input
          type="search"
          className="rounded-lg px-4 py-2 outline-none text-center w-full md:w-64"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* TABLE VIEW (Desktop) */}
      <section className="mt-4 overflow-x-auto hidden md:block">
        <table className="w-full text-sm font-semibold">
          <thead>
            <tr className="text-left grid grid-cols-[2fr_1fr_1fr_1fr]">
              <th className="p-3">Position ID</th>
              <th className="p-3 text-center">Job Title</th>
              <th className="p-3 text-center">Hourly Wage</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="grid">
            {paginatedData.map((post: IPositionGet, index: number) => (
              <tr
                key={post._id}
                className={`${
                  index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                } hover:bg-slate-300 transition-colors grid grid-cols-[2fr_1fr_1fr_1fr] ${
                  index === 0
                    ? "rounded-t-lg "
                    : index === paginatedData.length - 1
                    ? "rounded-b-lg "
                    : ""
                }`}
              >
                <td className="p-3 break-words">{post._id}</td>
                <td className="p-3 text-center">{post.jobTitle}</td>
                <td className="p-3 text-center">₱ {post.hourlyWage}.00</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => deletePostMutation.mutate(post._id)}
                    className="bg-red-500 py-2 px-3 text-white rounded-lg hover:bg-red-700 active:scale-95 duration-200"
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {paginatedData.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            No positions found.
          </div>
        )}
      </section>

      {/* CARD VIEW (Mobile) */}
      <section className="mt-4 block md:hidden">
        {paginatedData.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No positions found.
          </div>
        ) : (
          paginatedData.map((post: any) => (
            <div
              key={post._id}
              className="bg-slate-100 mb-3 p-4 rounded-lg shadow-sm space-y-2"
            >
              <div className="flex gap-5">
                <span className="font-bold text-blue-800">ID:</span>{" "}
                <p className="break-words">{post._id}</p>
              </div>
              <div className="flex gap-5">
                <span className="font-bold text-blue-800">Job Title:</span>{" "}
                <p>{post.jobTitle}</p>
              </div>
              <div className="flex gap-5">
                <span className="font-bold text-blue-800">Hourly Wage:</span>{" "}
                <p>₱ {post.hourlyWage}.00</p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => deletePostMutation.mutate(post._id)}
                  className="bg-red-500 py-2 px-3 text-white rounded-lg hover:bg-red-700 active:scale-95 duration-200"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))
        )}

        {/* Empty state */}
        {paginatedData.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            No positions found.
          </div>
        )}
      </section>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`${
            isOpen ? "-z-50 xl:z-50" : ""
          } px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50`}
        >
          <FaArrowAltCircleLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-800 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`${
            isOpen ? "-z-50 xl:z-50" : ""
          } px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50`}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default PositionDashboard;
