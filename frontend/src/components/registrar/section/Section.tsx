import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getSections } from "../../../api/section";
import { ISectionGet } from "../../../interface/ISection";
import { useEffect } from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";

const Section = () => {
  const navigate = useNavigate();

  const sections = useQuery({
    queryKey: ["sections"],
    queryFn: getSections,
  });

  useEffect(() => {
    sections.refetch();
  }, [sections.data]);

  // console.log(sections.data);
  return (
    <div className="w-full max-w-[1270px]">
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
          {sections?.data?.map((section: ISectionGet) => (
            <span
              key={section?._id}
              className="flex flex-col bg-slate-200 text-black p-5 gap-3 rounded-lg relative"
            >
              <section className="absolute right-2 top-2 flex gap-3 items-center">
                <button
                  onClick={() => {
                    navigate(`/registrar/update-section/${section._id}`);
                  }}
                  className="hover:text-green-700 active:scale-75 duration-200"
                >
                  <MdEditSquare size={20} />
                </button>
                <button className="hover:text-red-600 active:scale-75 duration-200">
                  <MdDelete size={20} />
                </button>
              </section>
              <h1 className="text-base font-bold">{section?.sectionName}</h1>
              <section className="flex">
                <h1>{section?.semester}Sem.</h1>
                <h1 className="">S.Y.{section?.academicYear}</h1>
              </section>
            </span>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Section;
