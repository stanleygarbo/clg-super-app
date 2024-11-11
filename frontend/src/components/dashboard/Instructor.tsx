import Subjects from "./subjects/Subjects";

const Instructor = () => {
  const instructors = [
    {
      fullName: "Jai",
      subjects: "HCI",
    },
    {
      fullName: "Jai",
      subjects: "HCI",
    },
    {
      fullName: "Jai",
      subjects: "HCI",
    },
    {
      fullName: "Jai",
      subjects: "HCI",
    },
    {
      fullName: "Jai",
      subjects: "HCI",
    },
    {
      fullName: "Jai",
      subjects: "HCI",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-5 border border-slate-500 overflow-auto overflow-y-scroll no-scrollbar rounded-md p-5 w-[659px] h-[400px]">
      {instructors.map((instructors, index) => (
        <section
          key={index}
          className="flex flex-col items-center  gap-5 p-3 rounded-md border-2 border-red-200 w-[180px]"
        >
          <p>
            Intructor : <b>{instructors.fullName}</b>
          </p>
          <p>Subject Handled :</p>
          <p className="flex flex-col">
            <b>{instructors.subjects}</b>
          </p>
        </section>
      ))}
    </div>
  );
};

export default Instructor;
