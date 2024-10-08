import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AdmissionLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="m-20">
        <Outlet />
      </div>
    </div>
  );
};

export default AdmissionLayout;
