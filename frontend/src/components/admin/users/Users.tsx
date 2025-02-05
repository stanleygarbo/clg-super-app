import { CiGrid41 } from "react-icons/ci";
import { FaThList } from "react-icons/fa";
import { IoListOutline } from "react-icons/io5";

const Users = () => {
  return (
    <div className="">
      <div className="w-[1000px] h-[650px]">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">User List</h1>
          <button className="bg-blue-700 px-3 py-2 text-white font-semibold rounded-md text-sm">
            Add User
          </button>
        </section>
        <section className="mt-5 bg-slate-100 px-5 py-3 rounded-t-md flex justify-between">
          <span className="flex gap-3">
            <button className="flex items-center gap-1 bg-white p-2 px-3 rounded-md">
              <p className="">
                <IoListOutline />
              </p>
              <p className="text-sm font-semibold">LIST</p>
            </button>
            <button className="flex items-center gap-1 bg-white p-2 px-3 rounded-md">
              <p className="">
                <CiGrid41 />
              </p>
              <p className="text-sm font-semibold">GRID</p>
            </button>
          </span>
          <span className="flex gap-3 ">
            <input
              type="text"
              className="border border-slate-500 rounded-sm px-5"
              placeholder="Q Search..."
            />
            <select className="border border-slate-500 rounded-sm px-5">
              <option value="">Department</option>
            </select>
            <select className="border border-slate-500 rounded-sm px-5">
              <option value="">Position</option>
            </select>
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
          <span className="flex gap-5 bg-slate-100 pl-3 py-3 text-sm items-center">
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
            <h1 className="w-[100px] text-green-500 font-semibold">Active</h1>
          </span>
        </section>
      </div>
    </div>
  );
};

export default Users;
