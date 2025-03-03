const CoursesOfferedTESDA = () => {
  const TESDAcourses = [
    {
      cName: "Web Application Development (WAD)",
    },
    {
      cName: "Hotel and Restaurant Technolog (HRT)",
    },
    {
      cName: "Office Management Technology (OMT)",
    },
    {
      cName: "Office Administration Technology (OAT)",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="font-bold text-xl mb-6">TESDA Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TESDAcourses.map((course, index) => (
          <div
            className="flex group px-4 py-5 relative hover:bg-blue-50 transition-all duration-300 rounded-tr-xl rounded-br-xl shadow-sm"
            key={index}
          >
            <div className="w-1 h-full rounded group-hover:bg-blue-500 transition-all duration-300 absolute top-0 left-0"></div>
            <div className="ml-3">
              <p className="font-bold text-gray-800">{course.cName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesOfferedTESDA;
