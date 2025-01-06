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
    studentData.id = studentData.usn;

    studentData.status = "Enrolled";

    const res = await fetch("http://localhost:8000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datas),
    });
    console.log(datas);

    if (res.ok) {
      navigate("/admission/enroll-student");
    } else {
      alert(`error${res.status}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 xs:w-[500px] sm:w-[600px] md:w-[610px] lg:w-[950px] w-[1100px] xs:mx-1 sm:mx-2 md:mx-60 lg:mx-72 xl:"
    >
      <div className="bg-black py-4 text-white rounded-t-md">
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
            className="text-center bg-blue-600 shadow-sm shadow-blue-500/50 hover:scale-105 font-bold text-white rounded-md
            w-[40%] py-2 duration-200"
          >
            Enroll Student
          </button>
        </section>
      </div>
    </form>
  );
}

export default EForm;
