import { Outlet } from "react-router-dom";
import TestSidebar from "../components/sidebar/TestSidebar";

const TestLayout = () => {
  return (
    <div className="">
      <TestSidebar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default TestLayout;
