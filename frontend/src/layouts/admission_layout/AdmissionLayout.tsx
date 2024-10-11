import { Outlet } from "react-router-dom";

const AdmissionLayout = () => {
  return (
    <div>
      <div className="m-20">
        <Outlet />
      </div>
    </div>
  );
};

export default AdmissionLayout;
