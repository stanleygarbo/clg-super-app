import AMAHymn from "../components/about/AMAHymn";
import Mission from "../components/about/Mission";
import OfficeChairmanVice from "../components/about/OfficeChairmanVice";
import Vision from "../components/about/Vision";

const About = () => {
  return (
    <div className="px-10 pt-20 flex flex-col justify-evenly">
      <section className=" flex xs:flex-col 2xl:relative xl:relative sm:flex-col md:flex-col lg:flex-col">
        <img
          src="./students.png"
          alt="Image"
          className="border rounded-md opacity-30 shadow-md xs:w-[500px] xs:h-[250px] xs:mx-2 xs:opacity-45 sm:w-[600px] sm:h-[300px] sm:mx-2 sm:opacity-45 md:w-[900px] md:h-[50%] md:opacity-45 lg:w-[100%] lg:h-[60%] lg:mx-3"
        />
        <div className="flex flex-col items-center px-60 pt-16 2xl:absolute xl:absolute xs:px-2 xs:py-10 xs:gap-3 xs:items-start sm:px-4 sm:py-10 sm:gap-5 md:gap-5 md:px-10 md:py-10 md:items-start lg:px-10 lg:py-10">
          <p className="text-center text-xl font-bold xs:text-base xs:font-semibold xs:text-start sm:font-semibold sm:text-base sm:text-start md:text-start md:text-lg lg:text-start lg:text-lg">
            ACLC College is a member of the AMA Education System and is one of
            the leading computer schools in the country. With a curriculum that
            is based on the requirements of the actual industry, ACLC College
            aims to produce highly competent graduates, especially in the field
            of IT and other fields that require knowledge in today's technology.
          </p>
          <br />

          <p className="text-center text-xl font-bold xs:text-base xs:font-semibold xs:text-start sm:font-semibold sm:text-base sm:text-start md:text-start md:text-lg lg:text-start lg:text-lg">
            AMA Computer Learning Center (ACLC) is a leading computer training
            institution in the country offering full 2-year programs and
            short-term courses. It is focused on producing highly competent and
            skilled graduates to address the growing needs of the local and
            international markets. ACLC offers the most complete and up-to-date
            curriculum to equip students with the necessary skills to pursue an
            IT career. It also has international affiliations that allow ACLC
            graduates to get high paying jobs and continuous promotions.
          </p>
        </div>
      </section>
      <div className="flex px-5 gap-20 py-10 xs:gap-5 xs:px-1 xs:flex-col sm:flex-col sm:px-1 sm:gap-5 md:gap-10 md:px-4  ">
        <Mission />
        <Vision />
      </div>
      <section className="flex flex-col">
        <AMAHymn />
        <OfficeChairmanVice />
      </section>
    </div>
  );
};

export default About;
