const Date = () => {
  const subject = {
    sub1: "SocProf",
    sub2: "Calculus",
    sub3: "Automata",
    sub4: "SoftEngr",
    sub5: "Programming",
    sub6: "ArchOrg",
    sub7: "Flipino",
    sub8: "InfoAsurance",
    sub9: "MajorElective",
  };

  return (
    <div className="flex flex-col items-center gap-7 justify-center">
      {/* Monday */}
      <section className="group flex flex-col gap-3 text-lg border-2 border-red-200 hover:border-blue-300 p-5 rounded-md w-[90%]">
        <h1 className="font-bold text-center">Monday</h1>
        <span className="flex justify-between border-b border-b-blue-300 pr-2 pb-2 group-hover:border-b-red-200">
          <p>7:30 - 9:00</p>
          <h2>Soc Prof</h2>
        </span>
        <span className="flex justify-between border-b border-b-blue-300 pr-2 pb-21 group-hover:border-b-red-200">
          <p>9:00 - 10:30</p>
          <h2>Info Assurance (LAB)</h2>
        </span>
        <span className="flex justify-between border-b border-b-blue-300 pr-2 pb-2 group-hover:border-b-red-200">
          <p>10:30 - 11:30</p>
          <h2>Info Assurance (LEC)</h2>
        </span>
      </section>
      {/* Tuesday */}
      <section className="flex flex-col gap-3 text-lg border-2 border-red-200 hover:border-blue-300 p-5 rounded-md w-[90%]">
        <h1 className="font-bold text-center">Tuesday</h1>
        <span className="flex gap-3">
          <p>8:00 - 9:00</p>
          <h2>Major Elective (LEC)</h2>
        </span>
        <span className="flex gap-3">
          <p>9:00 - 10:30</p>
          <h2>Archi. & Org. (LAB)</h2>
        </span>
        <span className="flex gap-3">
          <p>10:30 - 12:00</p>
          <h2>Major Elective (LAB)</h2>
        </span>
        <span className="flex gap-3">
          <p>2:30 - 3:30</p>
          <h2>Archi. & Org. (LEC)</h2>
        </span>
        <span className="flex gap-3">
          <p>4:00 - 5:30</p>
          <h2>Automata Theory (LEC)</h2>
        </span>
      </section>
      {/* Wednesday */}
      <section className="flex flex-col gap-3 text-lg border-2 border-red-200 hover:border-blue-300 p-5 rounded-md w-[90%]">
        <h1 className="font-bold text-center">Wednesday</h1>
        <span className="flex gap-3">
          <p>7:30 - 9:00</p>
          <h2>Soc Prof</h2>
        </span>
        <span className="flex gap-3">
          <p>9:00 - 10:30</p>
          <h2>Info Assurance (LAB)</h2>
        </span>
        <span className="flex gap-3">
          <p>10:30 - 11:30</p>
          <h2>Info Assurance (LEC)</h2>
        </span>
      </section>
      {/* Thursday */}
      <section className="flex flex-col gap-3 text-lg border-2 border-red-200 hover:border-blue-300 p-5 rounded-md w-[90%]">
        <h1 className="font-bold text-center">Thursday</h1>
        <span className="flex gap-3">
          <p>8:00 - 9:00</p>
          <h2>Major Elective (LEC)</h2>
        </span>
        <span className="flex gap-3">
          <p>9:00 - 10:30</p>
          <h2>Archi. & Org. (LAB)</h2>
        </span>
        <span className="flex gap-3">
          <p>10:30 - 12:00</p>
          <h2>Major Elective (LAB)</h2>
        </span>
        <span className="flex gap-3">
          <p>2:30 - 3:30</p>
          <h2>Archi. & Org. (LEC)</h2>
        </span>
        <span className="flex gap-3">
          <p>4:00 - 5:30</p>
          <h2>Automata Theory (LEC)</h2>
        </span>
      </section>
      {/* Friday */}
      <section className="flex flex-col gap-3 text-lg border-2 border-red-200 hover:border-blue-300 p-5 rounded-md w-[90%]">
        <h1 className="font-bold text-center">Friday</h1>
      </section>
      {/* Saturday */}
      <section className="flex flex-col gap-3 text-lg border-2 border-red-200 hover:border-blue-300 p-5 rounded-md w-[90%]">
        <h1 className="font-bold text-center">Saturday</h1>
      </section>
    </div>
  );
};

export default Date;
