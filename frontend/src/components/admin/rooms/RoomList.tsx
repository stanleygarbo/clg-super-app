import { useForm } from "react-hook-form";
import { IRoomGet, IRoomPost } from "../../../interface/IRoom";
import { deleteRoom, getRooms } from "../../../api/room";
import { addRoom } from "../../../api/room";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSnapshot } from "valtio";
import { sidebarState } from "../../../store/auth";
const RoomList = () => {
  const { handleSubmit, register, setValue, formState } = useForm<IRoomPost>();
  const [search, setSearch] = useState<string>("");
  const { errors } = formState;

  const addRoomMutation = useMutation({
    mutationFn: addRoom,
    onSuccess: () => {
      toast.success("Added Successfully");
      query.refetch();
      setValue("room", "");
      setValue("building", "");
      setValue("floor", "");
    },
    onError: (err: any) => {
      console.log(err.message);
    },
  });

  const deleteRoomMutation = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      query.refetch();
    },
    onError: () => {
      toast.error("Error while deleting");
    },
  });

  const query = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  const filteredData = query.data?.filter((room: IRoomGet) =>
    room.room.toLowerCase().includes(search.toLowerCase())
  );

  const snap = useSnapshot(sidebarState);
  const isOpen = snap.isOpen;

  return (
    <div className="flex flex-col xl:flex-row my-10 items-center xl:items-start px-4">
      <div className="w-full max-w-[1100px] h-auto xl:h-[650px]">
        <form
          onSubmit={handleSubmit((data) => addRoomMutation.mutate(data))}
          className="rounded-md bg-white flex flex-col xl:flex-row justify-center items-center gap-5 px-4 py-5"
        >
          <h1 className="text-xl font-bold text-blue-800">Add Room</h1>

          <section className="flex flex-col md:flex-row gap-3">
            {/* Room Name */}
            <section
              className={`${
                isOpen ? "-z-50 xl:z-50" : ""
              } relative flex-1 min-w-[200px]`}
            >
              <p className="text-sm font-semibold mb-1">Room Name:</p>
              <input
                type="text"
                className={twMerge(
                  "w-full text-center outline-none border-0 p-2 bg-white font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200",
                  errors.room?.message &&
                    "focus:border-b-red-500 border-b-red-500"
                )}
                {...register("room", { required: "Room Name is required" })}
              />
              <p className="text-[11px] text-red-500 font-semibold absolute left-0 top-full mt-1">
                {errors.room?.message}
              </p>
            </section>

            {/* Building */}
            <section
              className={`${
                isOpen ? "-z-50 xl:z-50" : ""
              } relative flex-1 min-w-[200px]`}
            >
              <p className="text-sm font-semibold mb-1">Building:</p>
              <select
                {...register("building")}
                className="w-full text-center outline-none border-0 p-2 bg-white font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
              >
                <option value="A" selected>
                  A
                </option>
                <option value="B">B</option>
              </select>
            </section>

            {/* Floor */}
            <section
              className={`${
                isOpen ? "-z-50 xl:z-50" : ""
              } relative flex-1 min-w-[200px]`}
            >
              <p className="text-sm font-semibold mb-1">Floor:</p>
              <select
                {...register("floor")}
                className="w-full text-center outline-none border-0 p-2 bg-white font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
              >
                <option value={2} selected>
                  2
                </option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </section>

            {/* Submit Button */}
            <div className="flex-1 min-w-[200px] flex items-end">
              <button
                type="submit"
                className="bg-blue-600 w-full md:w-auto px-5 py-2 text-white font-semibold rounded-md text-base hover:bg-blue-800 active:scale-95 duration-200"
              >
                Add Room
              </button>
            </div>
          </section>
        </form>
        {/* <section className="flex justify-between items-center"></section> */}
        <section className="bg-slate-100 px-5 py-2 gap-5 rounded-md flex justify-between">
          <span className="flex gap-3 items-center">
            <h1 className="text-xl font-bold text-blue-700">Room's List</h1>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border-0 rounded-md w-40 px-5 text-center py-2 outline-none"
              placeholder="Q Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </span>
        </section>
        <section className="py-3">
          {/* Desktop View */}
          <div className="hidden md:block">
            <span className="flex mb-3 text-lg">
              <h1 className="w-[200px] font-bold pl-2">Room</h1>
              <h1 className="w-[150px] font-bold text-center">Building</h1>
              <h1 className="w-[150px] font-bold text-center">Floor</h1>
              <h1 className="w-[200px] font-bold text-center">Action</h1>
            </span>
            <section className="flex flex-col overflow-auto no-scrollbar h-[470px] rounded-md">
              {filteredData?.map((room: IRoomGet, index: number) => (
                <span
                  key={index}
                  className={`${
                    index == filteredData?.length - 1
                      ? "rounded-b-md"
                      : index == 0
                      ? "rounded-t-md"
                      : ""
                  } ${
                    index % 2 == 0 ? "bg-slate-200" : "bg-slate-100"
                  } hover:bg-slate-300 group flex py-2 text-sm items-center duration-200`}
                >
                  <h1 className="w-[200px] pl-3 font-semibold">{room.room}</h1>
                  <h1 className="w-[150px] font-semibold text-center">
                    {room.building}
                  </h1>
                  <h1 className="w-[150px] font-semibold text-center">
                    {room.floor}
                    {room.floor === 2 ? (
                      <sup className={`${isOpen ? "-z-50 xl:z-50" : ""}`}>
                        nd
                      </sup>
                    ) : room.floor === 3 ? (
                      <sup>rd</sup>
                    ) : room.floor >= 4 ? (
                      <sup>th</sup>
                    ) : (
                      ""
                    )}
                  </h1>
                  <h1 className="w-[200px] font-semibold flex gap-3 justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => deleteRoomMutation.mutate(room._id)}
                      type="button"
                      className="bg-red-500 px-3 py-2 rounded-md text-lg text-white font-semibold hover:bg-red-700 active:scale-95 duration-200"
                    >
                      <AiFillDelete />
                    </button>
                  </h1>
                </span>
              ))}
            </section>
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex flex-col gap-3">
            {filteredData?.map((room: IRoomGet, index: number) => (
              <div
                key={index}
                className="bg-slate-100 p-4 rounded-md shadow-sm text-sm font-semibold space-y-2"
              >
                <p>
                  <span className="text-blue-800">Room:</span> {room.room}
                </p>
                <p>
                  <span className="text-blue-800">Building:</span>{" "}
                  {room.building}
                </p>
                <p>
                  <span className="text-blue-800">Floor:</span> {room.floor}
                  {room.floor === 2 ? (
                    <sup className={`${isOpen ? "-z-50 xl:z-50" : ""}`}>nd</sup>
                  ) : room.floor === 3 ? (
                    <sup className={`${isOpen ? "-z-50 xl:z-50" : ""}`}>rd</sup>
                  ) : room.floor >= 4 ? (
                    <sup className={`${isOpen ? "-z-50 xl:z-50" : ""}`}>th</sup>
                  ) : (
                    ""
                  )}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => deleteRoomMutation.mutate(room._id)}
                    type="button"
                    className="bg-red-500 px-3 py-2 rounded-md text-lg text-white font-semibold hover:bg-red-700 active:scale-95 duration-200"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoomList;
