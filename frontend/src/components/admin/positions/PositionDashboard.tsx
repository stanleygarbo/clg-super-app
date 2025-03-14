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

const PositionDashboard = () => {
  const [search, setSearch] = useState<string>("");

  const { handleSubmit, register, setValue } = useForm<IPositionPost>();

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
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePosition,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
  });

  const filteredData = query.data?.results?.filter((post: IPositionGet) =>
    post.jobTitle.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="w-[1100px] h-[650px]">
        {/* ADD POSITION */}
        <section className={`p-5 flex items-center gap-5`}>
          <h1 className="text-xl font-bold text-blue-800 w-[200px]">
            Add Position
          </h1>
          <form
            className="grid grid-cols-3 gap-10"
            onSubmit={handleSubmit((data: IPositionPost) =>
              addPostMutation.mutate(data)
            )}
          >
            <input
              type="text"
              {...register("jobTitle")}
              placeholder="Job Title"
              className="outline-none w-[200px] border-0 py-1 px-2 text-lg text-blue-900 font-semibold text-center border-b-2 border-b-blue-800"
            />
            <input
              type="number"
              {...register("hourlyWage")}
              placeholder="Hourly Wage"
              className="outline-none w-[200px] border-0 py-1 px-2 text-lg text-blue-900 font-semibold text-center border-b-2 border-b-blue-800"
            />
            <button
              type="submit"
              className="bg-blue-600 w-[190px] flex justify-center py-2 text-white font-bold rounded-md hover:bg-blue-800 active:scale-95 duration-200"
            >
              {addPostMutation.isPending ? (
                <img src="/loading.svg" className="invert" alt="" />
              ) : (
                "Add Department"
              )}
            </button>
          </form>
        </section>

        <section className="bg-slate-200 px-5 py-2 rounded-md flex items-center justify-between">
          <span className="flex gap-3">
            <h1 className="text-xl font-bold text-blue-800 py-1">
              Positions List
            </h1>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border-0 rounded-md px-5 py-2 outline-none text-center"
              placeholder="Q Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </span>
        </section>
        <section>
          <span className="flex flex-col">
            <span className="flex gap-5 mb-3 mt-2 text-lg">
              <h1 className="w-[240px] font-bold text-start pl-3">
                Position ID
              </h1>
              <h1 className="w-[120px] font-bold text-center">Job Title</h1>
              <h1 className="w-[140px] font-bold text-center">Hourly Wage</h1>
              <h1 className="w-[200px] font-bold text-center pr-10">Action</h1>
            </span>
            <span className="h-[470px] overflow-scroll no-scrollbar">
              {filteredData?.map((post: IPositionGet, index: number) => (
                <section
                  key={post._id}
                  className={`${
                    index == 0
                      ? "rounded-t-md"
                      : index == filteredData.length - 1
                      ? "rounded-b-md"
                      : ""
                  } ${
                    index % 2 == 0
                      ? "bg-blue-100 hover:bg-blue-600 hover:text-white"
                      : "bg-slate-100 hover:bg-slate-400 hover:text-white"
                  } flex items-center gap-5 py-2 text-sm font-semibold duration-200`}
                >
                  <h1 className="w-[240px] pl-3">{post._id}</h1>
                  <h1 className="w-[120px] text-center">{post.jobTitle}</h1>
                  <h1 className="w-[120px] text-center">
                    ₱ {post.hourlyWage}.00
                  </h1>
                  <h1 className="w-[200px] flex justify-center">
                    <button
                      onClick={() => {
                        deletePostMutation.mutate(post._id);
                      }}
                      className="bg-red-500 py-2 px-3 font-semibold text-xl text-white rounded-md hover:bg-red-700 active:scale-95 duration-200"
                    >
                      <AiFillDelete />
                    </button>
                  </h1>
                </section>
              ))}
            </span>
          </span>
        </section>
      </div>
    </div>
  );
};

export default PositionDashboard;
