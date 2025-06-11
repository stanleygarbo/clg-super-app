import { useNavigate } from "react-router-dom";

const Section = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[1200px]">
      <div className="flex flex-col gap-3 mt-10">
        <section className="flex justify-end my-2 gap-3">
          <button
            type="button"
            onClick={() => {
              navigate("/registrar/add-section");
            }}
            className="text-end bg-blue-700 rounded-lg px-3 py-2 font-semibold text-white hover:bg-blue-800 active:scale-90 duration-200"
          >
            Add Section
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/registrar/add-seat");
            }}
            className="text-end bg-blue-700 rounded-lg px-3 py-2 font-semibold text-white hover:bg-blue-800 active:scale-90 duration-200"
          >
            Add Seat
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/registrar/add-grade");
            }}
            className="text-end bg-blue-700 rounded-lg px-3 py-2 font-semibold text-white hover:bg-blue-800 active:scale-90 duration-200"
          >
            Add Grade
          </button>
        </section>
        <h1 className="text-xl font-bold bg-blue-800 text-white px-5 py-4 rounded-lg">
          Section List
        </h1>
        <section className="flex flex-wrap gap-5">
          <span className="flex flex-col bg-blue-600 text-white p-5 gap-3 rounded-lg hover:bg-blue-700 active:scale-90 duration-200">
            <section className="flex gap-3 text-sm justify-end">
              <h1 className="">2025-2026</h1>
            </section>
            <section className="flex gap-3">
              <h1 className="text-base font-bold">BSCS-1</h1>
              <h1>1st Semester</h1>
            </section>
            <h1>Program : BSCS</h1>
          </span>
        </section>
      </div>
    </div>
  );
};

export default Section;
