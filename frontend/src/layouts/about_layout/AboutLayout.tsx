import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AboutLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="m-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AboutLayout;
