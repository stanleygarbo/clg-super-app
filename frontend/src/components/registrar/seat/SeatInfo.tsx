import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getSeat } from "../../../api/seat";
import { ISeatsGet } from "../../../interface/ISeats";
import { getCourse } from "../../../api/course";
import { ICourseGet } from "../../../interface/ICourse";
import ButtonComponent from "../../props/ButtonComponent";
import { FaEdit } from "react-icons/fa";
import { useEffect } from "react";

const SeatInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return;

  const seat = useQuery<ISeatsGet>({
    queryKey: ["seat", id],
    queryFn: () => getSeat(id),
    // refetchOnWindowFocus: true,
    // refetchOnMount: true,
  });

  //   console.log(seat.data);

  const CourseName = ({ id }: { id: string }) => {
    const { data } = useQuery<ICourseGet>({
      queryKey: ["course", id],
      queryFn: () => getCourse({ id: id }),
      enabled: !!id,
    });

    return (
      <h1 className="font-semibold">{`${data?.courseName}` || "Loading..."}</h1>
    );
  };

  useEffect(() => {
    seat.refetch();
  }, [seat.data]);

  return (
    <div className="w-full max-w-[1100px] mt-10">
      <div>
        <section className="flex flex-col">
          <h1 className="font-bold text-xl text-blue-700">Seat Info</h1>
          <span className="mt-5">
            <h1 className="font-semibold flex gap-2">
              ID : <p className="font-normal">{seat.data?._id}</p>
            </h1>
            <h1 className="font-semibold flex gap-2">
              Section :
              <p className="font-normal">{seat.data?.section?.sectionName}</p>
            </h1>
            <section className="flex justify-between items-center">
              <h1 className="mt-5 font-bold text-blue-700 text-lg">
                Grades List
              </h1>
              <section className="flex gap-3 items-center">
                <ButtonComponent
                  label="Section"
                  style="text-white w-20"
                  onClick={() => {
                    navigate(
                      `/registrar/update-section/${seat.data?.section?._id}`
                    );
                  }}
                />
                <ButtonComponent
                  label="Add"
                  style="text-white w-20"
                  onClick={() => {
                    navigate(`/registrar/add-grade/${id}`);
                  }}
                />
              </section>
            </section>
            <section className="mt-5 flex flex-wrap gap-3">
              {seat.data?.grades?.map((grade: any) => (
                <h1 className="bg-slate-100 p-2 rounded-lg w-52 relative pt-5">
                  <section className="absolute top-0.5 right-1">
                    <ButtonComponent
                      label={<FaEdit size={18} />}
                      color="none"
                      style="text-green-600 hover:text-green-800"
                      onClick={() => {
                        navigate(`/registrar/update-grade/${grade._id}`);
                      }}
                    />
                  </section>
                  <CourseName id={grade.course} />
                  <p> Final Grade : {grade?.finalGrade}</p>
                </h1>
              ))}
            </section>
          </span>
        </section>
      </div>
    </div>
  );
};

export default SeatInfo;
