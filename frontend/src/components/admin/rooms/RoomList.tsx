import { useForm } from "react-hook-form";
import { IRoomGet, IRoomPost } from "../../../interface/IRoom";
import { deleteRoom, getRooms } from "../../../api/room";
import { addRoom } from "../../../api/room";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
const RoomList = () => {
  const { handleSubmit, register, setValue } = useForm<IRoomPost>();
  const [search, setSearch] = useState<string>("");

  const addRoomMutation = useMutation({
    mutationFn: addRoom,
    onSuccess: () => {
      toast.success("Added Successfully");
      query.refetch();
      setValue("room", "");
      setValue("building", "");
      setValue("floor", "");
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

  return (
    <div className="">
      <div className="w-[1100px] h-[650px]">
        <form
          onSubmit={handleSubmit((data) => addRoomMutation.mutate(data))}
          className={`rounded-md bg-white flex items-center gap-3 px-4 py-2 pb-5 duration-150`}
        >
          <h1 className="pr-20 text-xl font-bold text-blue-800">Add Room </h1>
          <section className="flex gap-5">
            <input
              type="text"
              required
              className="text-center outline-none border-0 p-2 bg-white font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              placeholder="Room Name"
              {...register("room")}
            />
            <select
              {...register("building")}
              className="text-center w-[200px] outline-none border-0 p-2 bg-white font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
            >
              <option value="" selected>
                Building
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            <select
              {...register("floor")}
              className="text-center w-[200px] outline-none border-0 p-2 bg-white font-semibold border-b-2 border-b-black focus:border-b-blue-800 duration-200"
            >
              <option value="" selected>
                Floor
              </option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 px-5 py-2 text-white font-semibold rounded-md text-base ml-10 hover:bg-blue-800 active:scale-95 duration-200"
            >
              Add Room
            </button>
          </section>
        </form>
        <section className="flex justify-between items-center"></section>
        <section className="bg-slate-100 px-5 py-2 rounded-md flex justify-between">
          <span className="flex gap-3 items-center">
            <h1 className="text-xl font-bold text-blue-700">Room's List</h1>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border-0 rounded-md px-5 text-center py-2 outline-none"
              placeholder="Q Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </span>
        </section>
        <section className="py-3">
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
                <h1 className="w-[150px] font-semibold text-center">{`${room.building}`}</h1>
                <h1 className="w-[150px] font-semibold text-center">
                  {room.floor}
                  {room.floor == 2 ? (
                    <sup>nd</sup>
                  ) : room.floor == 3 ? (
                    <sup>rd</sup>
                  ) : room.floor == 4 || 5 || 6 ? (
                    <sup>th</sup>
                  ) : (
                    ""
                  )}
                </h1>
                <h1 className="w-[200px] font-semibold flex gap-3 justify-center opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => {
                      deleteRoomMutation.mutate(room._id);
                    }}
                    type="button"
                    className="bg-red-500 px-3 py-2 rounded-md text-lg text-white font-semibold hover:bg-red-700 active:scale-95 duration-200"
                  >
                    <AiFillDelete />
                  </button>
                </h1>
              </span>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

export default RoomList;
