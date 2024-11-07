import Date from "./Date";

const Schedule = () => {
  return (
    <div className="flex flex-col p-5 rounded-md w-[500px] h-[400px] overflow-auto overflow-y-scroll no-scrollbar border border-slate-500">
      <h1 className="text-center pb-5 font-bold text-2xl">Classes</h1>
      <Date />
    </div>
  );
};

export default Schedule;
