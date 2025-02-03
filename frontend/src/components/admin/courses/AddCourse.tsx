import { useSnapshot } from "valtio";
import { departmentData } from "../../../store/DepartmentData";
import { courseData } from "../../../store/CourseData";

const AddCourse = () => {
  const snap = useSnapshot(courseData);

  return (
    <div className="p-4">
      <div className="mb-4">
        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            Course Name
          </p>
          <input
            type="text"
            value={snap.courseName}
            onChange={(e) => (courseData.courseName = e.target.value)}
            className="mt-1 text-center block h-[42px] w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
            required
          />
        </span>
        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            Course Code
          </p>
          <input
            type="text"
            value={snap.courseCode}
            onChange={(e) => (courseData.courseCode = e.target.value)}
            className="mt-1 text-center block h-[42px] w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
            required
          />
        </span>
        <span className="relative">
          <p className="absolute  left-1/2 transform -translate-x-1/2 font-bold text-slate-600 bg-white top-0 -translate-y-1/2 : duration-200 text-xs">
            Course Units
          </p>
          <input
            type="text"
            value={snap.units}
            onChange={(e) => (courseData.units = Number(e.target.value))}
            className="mt-1 text-center block h-[42px] w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </span>
      </div>
    </div>
  );
};

export default AddCourse;
