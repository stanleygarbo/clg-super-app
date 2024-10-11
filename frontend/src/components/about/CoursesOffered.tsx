import CoursesOfferedTESDA from "./CoursesOfferedTESDA";

const CoursesOffered = () => {
  const courses = [
    {
      cName: "Bachelor's of Science in Computer Science (BSCS)",
    },
    {
      cName: "Bachelor's of Science in Information Technology (BSIT)",
    },
    {
      cName: "Bachelor's of Science in Business Administration (BSBA)",
    },
    {
      cName: "Bachelor's of Science in Hospitality Management (BSHM)",
    },
  ];

  return (
    <div>
      <div className=" pr-20">
        <h1 className="font-bold pb-2 pt-10 text-xl text-start  ">College</h1>
        <h1 className="font-bold pb-2 pt-10 text-xl text-start">Bachelor's</h1>
        {courses.map((courses, index) => (
          <div
            className="flex group my-5 px-3 py-4 relative hover:bg-blue-50 transition-all duration-[.30s] rounded-tr-xl rounded-br-xl"
            key={index}
          >
            <div className="w-1 h-full rounded group-hover:bg-blue-500 transition-all duration-[.30s] absolute top-0 left-0"></div>
            <div className="ml-2">
              <p className="pr-5 font-bold">{courses.cName}</p>
            </div>
          </div>
        ))}
      </div>
      <CoursesOfferedTESDA />
    </div>
  );
};

export default CoursesOffered;
