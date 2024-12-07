import EFormSchoolYear from "./EFormSchoolYear";
import EFormStudent from "./EFormStudent";
import EFormParents from "./EFormParents";
import EformSiblings from "./EformSiblings";
import { useNavigate } from "react-router-dom";
import { studentData } from "../../../store/StudentData";

function EForm() {
  const navigate = useNavigate();
  // let id: string;
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const datas = { studentData };

    studentData.status = "Enrolled";

    const res = await fetch("http://localhost:8000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datas),
    });
    console.log(datas);

    if (res.ok) {
      navigate("/admin/admission/enroll-student");
    } else {
      alert(`error${res.status}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10  xs:w-[68%] sm:w-[600px] md:w-[610px] lg:w-[950px] xl:[1000px] xs:mx-1 sm:mx-2 md:mx-60 lg:mx-72 xl:ml-60"
    >
      <div className="bg-black p-2 text-white rounded-t-md">
        <h1 className="text-2xl text-center font-bold justify-items-stretch">
          EForm
        </h1>
      </div>
      <div className="flex flex-col gap-2 mx-auto border-4 border-black mb-20 p-10 rounded-b-md">
        <EFormSchoolYear />
        <EFormStudent />
        <EFormParents />
        <EformSiblings />
        <section className="flex justify-center px-7 mx-2">
          <button
            type="submit"
            className="text-center border-2 py-1 w-[500px] border-blue-500 font-bold text-slate-700 rounded-lg shadow-md 
           hover:border-green-500 active:shadow duration-200"
          >
            Enroll Student
          </button>
        </section>
      </div>
    </form>
  );
}

export default EForm;
