import { useSnapshot } from "valtio";
import { authState } from "../../../store/auth";
import { useQuery } from "@tanstack/react-query";
import { getStudentById } from "../../../api/student";
import { ISeatsGet } from "../../../interface/ISeats";
import { getSeats } from "../../../api/seat";
import { ISubjectSchedule } from "../../../interface/ISchedule";
// import { getGrades } from "../../../api/grade";
// import { IGradesGet } from "../../../interface/IGrades";
import { ICourseGet } from "../../../interface/ICourse";
import { getCourse } from "../../../api/course";
import { useEffect } from "react";

const SubjectLoad = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const snap = useSnapshot(authState);
  const user = snap.user;
  const id = user.id;

  if (!user.id) return;

  const query = useQuery({
    queryKey: ["student", user.id],
    queryFn: () => getStudentById({ id }),
  });

  // const grades = useQuery({
  //   queryKey: ["grades"],
  //   queryFn: getGrades,
  // });

  const seats = useQuery({
    queryKey: ["seats"],
    queryFn: getSeats,
  });

  const getSeat: ISeatsGet = seats.data
    ?.filter((s: ISeatsGet) => s?.student) // Only include seats with student
    .find((seat: ISeatsGet) => seat?.student._id === id);

  // const getGrade = grades.data?.filter(
  //   (grade: IGradesGet) => grade.seat?._id === getSeat?._id
  // );

  const Course = ({ id }: { id: string }) => {
    const query = useQuery<ICourseGet>({
      queryKey: ["course", id],
      queryFn: () => getCourse({ id }),
    });

    return (
      <section key={id} className="grid grid-cols-3 text-center bg-slate-100">
        <h1>{query.data?.courseCode}</h1>
        <h1>{query.data?.courseName}</h1>
        <h1>{query.data?.units}</h1>
      </section>
    );
  };
  // console.log("Student : ", query.data);
  // console.log("Seat : ", getSeat);

  useEffect(() => {
    if (id) {
      query.refetch();
    }
  }, [user.id, id, query.data]);

  return (
    <div className="mt-10">
      <div className="w-full max-w-[1100px]">
        <h1>
          {getSeat?.section?.sectionName} {getSeat.section?.semester}.sem.S.Y.
          {getSeat?.section?.academicYear}
        </h1>
        <section className="flex flex-col gap-2 mt-10">
          <span className="grid grid-cols-3 text-center">
            <h1>Course Code</h1>
            <h1>Course Name</h1>
            <h1>Units</h1>
          </span>
          {getSeat?.schedule?.subjectSchedules?.map((s: ISubjectSchedule) => (
            // <h1 key={s.courseID}>
            <Course id={s?.courseID} />
            // </h1>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SubjectLoad;
