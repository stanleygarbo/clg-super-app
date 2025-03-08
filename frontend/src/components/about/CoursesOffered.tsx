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
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="font-bold text-3xl mb-8">Programs Offered</h1>
        <h2 className="font-bold text-xl mb-6">College Programs</h2>
        {courses.map((course, index) => (
          <div
            className="flex group mb-4 px-4 py-5 relative hover:bg-blue-50 transition-all duration-300 rounded-tr-xl rounded-br-xl shadow-sm"
            key={index}
          >
            <div className="w-1 h-full rounded group-hover:bg-blue-500 transition-all duration-300 absolute top-0 left-0"></div>
            <div className="ml-3">
              <p className="font-bold text-gray-800">{course.cName}</p>
            </div>
          </div>
        ))}
      </div>
      <CoursesOfferedTESDA />
    </div>
  );
};

export default CoursesOffered;
