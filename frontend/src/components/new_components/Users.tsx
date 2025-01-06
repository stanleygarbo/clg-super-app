import { useEffect, useState } from "react";
import { userData } from "../../store/UserData";
import AddUser from "./AddUser";
import { useParams } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState<(typeof usersData)[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [addUserForm, setAddUserForm] = useState<boolean>(true);
    let { id } = useParams<string>();
    const usersData = { id, userData };

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:8000/users");
        const res = response.json();

        if (!response.ok) {
            setError("Error Occured");
        } else {
            setUsers(await res);
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        const datas = { userData };

        const res = await fetch("http://localhost:8000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datas),
        });
        console.log(datas);

        if (res.ok) {
        } else {
            alert(`error${res.status}`);
        }
    };

    // const handleDelete = async () => {
    //   const res = await fetch("http://localhost:8000/users/" + id, {
    //     method: "DELETE",
    //   });

    //   if (res.ok) {
    //     alert("User Deleted Successfully");
    //   } else {
    //     alert("Error Occured");
    //   }
    // };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="">
            <div className=" flex flex-col justify-center relative">
                {/* Add user */}
                <form
                    onSubmit={handleSubmit}
                    className={`${
                        addUserForm
                            ? "w-[0px] opacity-0 left-0"
                            : "w-[350px] z-50 left-1/2 opacity-100"
                    } absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 pb-5 bg-white border shadow-md rounded-lg flex flex-col gap-3 duration-150`}
                >
                    <section className="flex flex-col-reverse">
                        <h1 className="text-center font-bold pb-3">Add User</h1>
                        <h1 className="flex justify-end mt-2">
                            <button
                                type="button"
                                onClick={() => {
                                    setAddUserForm(true);
                                }}
                                className="bg-red-200 px-2 font-bold rounded-md shadow-md hover:scale-105 duration-200"
                            >
                                X
                            </button>
                        </h1>
                    </section>
                    <AddUser />
                    <button
                        type="submit"
                        className="bg-gradient-to-t from-blue-600 to-blue-400 shadow-blue-600/50 py-[5px] rounded-md font-bold shadow-md hover:scale-105 text-white active:scale-95 duration-200"
                    >
                        Add
                    </button>
                </form>
                <h1 className="text-center py-5 text-2xl font-bold bg-slate-50 border-t border-r border-l rounded-t-md shadow-sm">
                    All Users
                </h1>
                <table className="w-full h-[570px] border flex flex-col rounded-b-md shadow-md bg-white duration-200 py-10 px-12">
                    <th className="grid grid-cols-4 text-lg font-bold gap-3 p-2 border-b mb-5 text-blue-800 border-blue-300 items-center w-[100%]">
                        <td className="w-[500px] text-start">Name</td>
                        <td className="w-[200px] text-end pr-2">USN</td>
                        <td className="w-[200px text-center">Role</td>
                        <td className="w-[200px] text-end">
                            <button
                                type="button"
                                onClick={() => {
                                    addUserForm === true
                                        ? setAddUserForm(false)
                                        : setAddUserForm(true);
                                }}
                                className="px-6 shadow-md text-bold hover:scale-105 active:scale-95 py-[5px] my-2 font-bold text-white bg-gradient-to-t from-blue-600 to-blue-400 shadow-blue-600/50 rounded-md duration-200"
                            >
                                Add User
                            </button>
                        </td>
                    </th>
                    {error && (
                        <div className="flex justify-center items-center">
                            Failed to fetch data
                        </div>
                    )}
                    {loading && (
                        <div className="flex justify-center items-center">
                            Loading...
                        </div>
                    )}
                    <section className="overflow-hidden overflow-y-auto no-scrollbar flex flex-col">
                        {users?.map((user, index) => (
                            <tr
                                key={index}
                                className="duration-200 hover:cursor-pointer font-semibold gap-3 items-center text-sm grid grid-cols-4 px-2 rounded-sm hover:rounded-lg bg-slate-50 group shadow-sm border hover:bg-blue-100 hover:border-blue-100 relative"
                            >
                                <td className="w-[500px] text-start">
                                    {user.userData.name}
                                </td>
                                <td className="w-[200px] text-end">
                                    {user.userData.usn}
                                </td>
                                <td className="w-[200px text-center">
                                    {user.userData.role}
                                </td>
                                <td className="w-[200px] text-end">
                                    <button className="opacity-0 group-hover:opacity-100 px-4 group-hover:bg-red-100 shadow-md text-bold hover:scale-105 active:scale-95 py-2 my-2 border font-bold group-hover:border-red-200 rounded-md duration-200">
                                        Archived
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </section>
                </table>
            </div>
        </div>
    );
};

export default Users;
