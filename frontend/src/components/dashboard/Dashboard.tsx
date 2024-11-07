import Schedule from "./schedules/Schedules";
import Subjects from "./subjects/Subjects";

const Dashboard = () => {
  return (
    <div className="flex gap-5 p-10 text-slate-600">
      <Schedule />
      <Subjects />
    </div>
  );
};
export default Dashboard;
