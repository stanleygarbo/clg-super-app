const Subjects = () => {
  const subjects = [
    {
      subs: "Social Issues & Professionalism",
      id: 1,
    },
    {
      subs: "InfoAssurance",
      id: 2,
    },
    {
      subs: "MajorElec",
      id: 3,
    },
    {
      subs: "Architure",
      id: 4,
    },
    {
      subs: "Filipino",
      id: 5,
    },
    {
      subs: "Automata",
      id: 6,
    },
    {
      subs: "SoftEng",
      id: 7,
    },
    {
      subs: "Programming",
      id: 8,
    },
  ];

  return (
    <div className="flex flex-col border border-slate-500 rounded-md p-5 w-[500px] h-[400px] overflow-auto overflow-y-scroll no-scrollbar items-center">
      <h1 className="font-bold text-2xl mb-5 "> Subjects</h1>
      <div className="flex flex-wrap gap-5 justify-center text-center">
        {subjects.map((subjects, id) => (
          <div
            key={id}
            className="font-bold text-lg p-2 border-2 border-red-200 rounded-md w-[40%] hover:border-blue-300 hover:text-slate-800 duration-200"
          >
            <p>{subjects.subs}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
