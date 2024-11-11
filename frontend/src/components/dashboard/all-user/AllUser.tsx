const all_user = [
  {
    user: "Mhegz",
  },
  {
    user: "Ryan",
  },
  {
    user: "Limpangog",
  },
  {
    user: "Limpangog",
  },
  {
    user: "Limpangog",
  },
  {
    user: "Limpangog",
  },
  {
    user: "Limpangog",
  },
  {
    user: "Limpangog",
  },
  {
    user: "Limpangog",
  },
  {
    user: "Limpangog",
  },
  {
    user: "Limpangog",
  },
];
const AllUser = () => {
  return (
    <div className="flex flex-col gap-5 justify-start rounded-md border-2 border-slate-500 p-5 m-10 w-[500px] h-[400px] overflow-auto overflow-y-scroll no-scrollbar">
      <section className="flex justify-evenly mb-5 sticky">
        <p className="text-center bg-red-200 rounded-lg text-slate-800 font-bold text-xl py-1 px-5">
          All Users
        </p>
        <p>
          <input
            type="text"
            className="h-[35px] border-2 border-slate-800 text-center rounded-l-md"
          />
          <button
            type="submit"
            className="py-1 px-3 border-2 border-slate-800 rounded-r-md"
          >
            S
          </button>
        </p>
      </section>
      <section className="flex flex-col gap-5">
        {all_user.map((all_user, index) => (
          <section key={index} className="">
            <p>{all_user.user}</p>
          </section>
        ))}
      </section>
    </div>
  );
};

export default AllUser;
