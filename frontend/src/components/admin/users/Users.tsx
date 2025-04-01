import { useState } from "react";
import { IoListOutline } from "react-icons/io5";

const Users = () => {
  // const [listActive, setListActive] = useState<boolean>(false);
  // const [filterActive, setFilterActive] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="">
      <div className="w-[1000px] h-[650px] relative">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">User List</h1>
          <button
            onClick={() => {
              isOpen ? setIsOpen(false) : setIsOpen(true);
            }}
            className="bg-blue-700 px-3 py-2 text-white font-semibold rounded-md text-sm"
          >
            Add User
          </button>
        </section>
        <form
          className={`${
            isOpen ? "w-[400px] opacity-100 right-1/2" : "w-0 opacity-0 right-0"
          } absolute tranform translate-x-1/2 translate-y-1/2  bottom-1/2 rounded-md bg-white flex flex-col shadow-md p-5 backdrop-blur-md duration-150`}
        >
          <section className="flex items-center justify-between mb-5 pl-2">
            <h1 className="font-bold">Add User</h1>
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
          <button className="bg-blue-600 mt-3 py-1 text-white font-bold rounded-md hover:bg-blue-700 active:scale-95 duration-200">
            Add
          </button>
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
            <h1 className="w-[220px] font-bold">Name</h1>
            <h1 className="w-[120px] font-bold">Position</h1>
            <h1 className="w-[120px] font-bold">Department</h1>
            <h1 className="w-[230px] font-bold">Email</h1>
            <h1 className="w-[100px] font-bold">Phone No.</h1>
            <h1 className="w-[100px] font-bold">Status</h1>
          </span>
          <span className="flex gap-5 bg-slate-100 pl-3 py-3 text-sm items-center rounded-md border">
            <h1 className="flex gap-2 items-center w-[210px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LXNJFTmLzCoExghcATlCWG85kI8dsnhJng&s"
                alt="."
                className="bg-blue-600 w-7 aspect-square rounded-full"
              />
              <p>Mheg Ryan Limpangog</p>
            </h1>
            <h1 className="w-[120px]">Teacher</h1>
            <h1 className="w-[120px]">Faculty</h1>
            <h1 className="w-[230px]">mhegryanlimpangog@gmail.com</h1>
            <h1 className="w-[100px]">09317619652</h1>
            <h1 className="w-[50px] text-green-500 font-semibold">Active</h1>
            <h1 className="font-bold hover:cursor-pointer px-2">:</h1>
          </span>
        </section>
      </div>
    </div>
  );
};

export default Users;
