import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoListOutline } from "react-icons/io5";
import { addRoom } from "../../../api/room";

const RoomList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleSubmit, register } = useForm();

  const addMutation = useMutation({
    mutationFn: addRoom,
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return (
    <div className="">
      <div className="w-[1000px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Room's List</h1>
          <button
            onClick={() => {
              isOpen ? setIsOpen(false) : setIsOpen(true);
            }}
            className="bg-blue-700 px-3 py-2 text-white font-semibold rounded-md text-sm"
          >
            Add Room
          </button>
        </section>
        <form
          onSubmit={handleSubmit(() => addMutation.mutate)}
          className={`${
            isOpen ? "w-[400px] opacity-100 right-1/2" : "w-0 opacity-0 right-0"
          } absolute tranform translate-x-1/2 translate-y-1/2  bottom-1/2 rounded-md bg-white flex flex-col shadow-md p-5 backdrop-blur-md duration-150`}
        >
          <section className="flex items-center justify-between mb-5 pl-2">
            <h1 className="font-bold">Add Room</h1>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
              className="font-bold hover:text-black text-red-600 hover:bg-red-500 px-2 rounded duration-200"
            >
              X
            </button>
          </section>
          <section className="flex flex-col gap-5">
            <input
              type="text"
              className="text-center outline-none border-0 p-2 bg-white rounded-t-md font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              placeholder="Room No."
              {...register("roomNum")}
            />
            <input
              type="text"
              className="text-center outline-none border-0 p-2 bg-white rounded-t-md font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              placeholder="Room Building"
              {...register("roomBuilding")}
            />
            <input
              type="text"
              className="text-center outline-none border-0 p-2 bg-white rounded-t-md font-semibold border-b-2 focus:border-b-blue-800 duration-200"
              placeholder="Room Floor"
              {...register("roomFloor")}
            />
            <button
              type="submit"
              className="bg-blue-600 mx-20 mt-3 py-1 text-white font-bold rounded-md hover:bg-blue-700 active:scale-95 duration-200"
            >
              Add
            </button>
          </section>
        </form>
        <section className="mt-5 bg-slate-100 px-5 py-3 rounded-t-md flex justify-between">
          <span className="flex gap-3">
            <button
              className={`bg-blue-600 text-white flex items-center gap-1 px-2 py-2 rounded-md shadow border-t`}
            >
              <p className="font-bold text-lg">
                <IoListOutline />
              </p>
              <p className="text-sm font-semibold">LIST</p>
            </button>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border border-slate-500 rounded-sm px-5"
              placeholder="Q Search..."
            />
          </span>
        </section>
        <section className="py-3">
          <span className="flex gap-5 mb-3">
            <h1 className="w-[250px] font-bold">Room Name</h1>
            <h1 className="w-[150px] font-bold">Building</h1>
            <h1 className="w-[150px] font-bold">Floor</h1>
            <h1 className="w-[230px] font-bold text-center">Action</h1>
          </span>
          <span className="flex gap-5 bg-slate-100 pl-3 py-3 text-sm items-center rounded-md border">
            <h1 className="flex gap-2 items-center w-[240px] pl-4 font-semibold">
              A601
            </h1>
            <h1 className="w-[150px] font-semibold">Building A</h1>
            <h1 className="w-[150px] font-semibold">6th</h1>
            <h1 className="w-[230px] font-semibold flex gap-5 justify-center">
              <button
                type="button"
                className="bg-green-500 px-3 py-1 rounded-md text-white font-semibold hover:bg-green-700 active:scale-95 duration-200"
              >
                Update
              </button>
              <button
                type="button"
                className="bg-red-500 px-3 py-1 rounded-md text-white font-semibold hover:bg-red-700 active:scale-95 duration-200"
              >
                Delete
              </button>
            </h1>
          </span>
        </section>
      </div>
    </div>
  );
};

export default RoomList;
