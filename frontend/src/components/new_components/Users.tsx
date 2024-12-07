import { useEffect, useState } from "react";
import { userData } from "../../store/UserData";
import { useSnapshot } from "valtio";
import AddUser from "./AddUser";

const Users = () => {
  const [users, setUsers] = useState<(typeof data)[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>();
  const data = { userData };
  const snap = useSnapshot(userData);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/users");
      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }
      setError("");

      const datas: (typeof data)[] = await response.json();
      setUsers(datas);
      loading;
      console.log(datas);
    } catch (err) {
      setError("Error fetching students");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="flex gap-5 mx-40 my-10 relative">
      {/* display users */}
      <section className="border border-blue-400 px-10 py-5 w-[850px] h-[650px] rounded-md">
        <h1 className="text-center text-xl font-bold">All Users</h1>
        <table className="flex flex-col pt-10">
          <tr className="grid grid-cols-4 text-lg font-bold gap-3 p-2 border-b mb-5 items-center">
            <td className="w-[100%] text-start">Name</td>
            <td className="w-[50%] text-end">USN</td>
            <td className="w-[45%] text-center">Role</td>
            <td className="w-[50%] text-center">Create On</td>
          </tr>
          {users?.map((user, index) => (
            <tr
              key={index}
              className="duration-200 hover:cursor-pointer hover:border-l-2 hover:border-blue-500 font-semibold gap-3 text-sm grid grid-cols-4 p-2 border-l-4 rounded-l-lg border-b m-1"
            >
              <td className="w-[100%] text-start">{user.userData.name}</td>
              <td className="w-[50%] text-end">{user.userData.usn}</td>
              <td className="w-[45%] text-center">{user.userData.role}</td>
              <td className="w-[50%] text-center">{user.userData.createdAt}</td>
            </tr>
          ))}
        </table>
      </section>
      {/* add user */}
      <form className="flex flex-col gap-3  w-[400px] px-10 pb-10 border bg-white border-green-200 mb-20 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <section className="flex justify-between">
          <p></p>
          <button className="text-end font-bold px-3 mt-5 hover:text-red-500 duration-200 hover:bg-slate-100 rounded-md">
            X
          </button>
        </section>

        <h1 className="text-center font-bold font-serif pb-5">Add User</h1>
        <AddUser />
        <button
          type="submit"
          className="text-center border-2 py-1 mt-5 border-blue-500 font-bold text-slate-700 rounded-lg shadow-md 
           hover:border-green-500 w-[100%] active:shadow duration-200"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Users;
