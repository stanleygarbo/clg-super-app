import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-10 pt-20 flex flex-col justify-evenly">
      <img
        src="./students.png"
        alt="Image"
        className="border rounded-md opacity-80 hover:opacity-100  transition-all"
      />

      <div className="px-10 py-10">
        <p className="text-warp ">
          ACLC College is a member of the AMA Education System and is one of the
          leading computer schools in the country. With a curriculum that is
          based on the requirements of the actual industry, ACLC College aims to
          produce highly competent graduates, especially in the field of IT and
          other fields that require knowledge in today's technology.
        </p>
        <br />

        <p className="text-warp">
          AMA Computer Learning Center (ACLC) is a leading computer training
          institution in the country offering full 2-year programs and
          short-term courses. It is focused on producing highly competent and
          skilled graduates to address the growing needs of the local and
          international markets. ACLC offers the most complete and up-to-date
          curriculum to equip students with the necessary skills to pursue an IT
          career. It also has international affiliations that allow ACLC
          graduates to get high paying jobs and continuous promotions.
        </p>
      </div>

      <div className="flex justify-between p-10 ">
        <Link to="/about/mission" className="flex flex-col">
          <h1 className="font-bold p-3 border-b-2 border-white hover:border-b-blue-300 hover:text-red-500 text-slate-500  duration-200">
            MISSION
          </h1>
        </Link>
        <Link to="/about/vision">
          <h1 className="font-bold p-3 border-b-2 border-white hover:border-b-blue-300 hover:text-red-500 text-slate-500  duration-200">
            VISION
          </h1>
        </Link>

        <Link to="/about/ama-hymn">
          <h1 className="font-bold p-3 border-b-2 border-white hover:border-b-blue-300 hover:text-red-500 text-slate-500  duration-200">
            AMA HYMN
          </h1>
        </Link>
        <Link to="office-chairman-vice">
          <h1 className="font-bold p-3 border-b-2 border-white hover:border-b-blue-300 hover:text-red-500 text-slate-500  duration-200">
            OFFICE OF THE CHAIRMAN AND VICE CHAIRMAN
          </h1>
        </Link>
        <Link to="/about/course-offered">
          <h1 className="font-bold p-3 border-b-2 border-white hover:border-b-blue-300 hover:text-red-500 text-slate-500  duration-200">
            COURSES OFFERED
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default About;
