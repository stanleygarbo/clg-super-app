import { useState } from "react";
import Select from "react-select";

function CreateSchedule() {
  const [courses, setCourses] = useState([]);

  return (
    <div className="w-full">
      <header className="flex justify-between items-center h-12">
        <p className="text-2xl font-bold">Schedule</p>
        <div></div>
      </header>
      <section></section>
    </div>
  );
}

export default CreateSchedule;
