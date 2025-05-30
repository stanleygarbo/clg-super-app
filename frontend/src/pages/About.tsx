import AMAHymn from "../components/about/AMAHymn";
import Mission from "../components/about/Mission";
import OfficeChairmanVice from "../components/about/OfficeChairmanVice";
import Vision from "../components/about/Vision";

const About = () => {
  return (
    <div className="flex flex-col justify-evenly w-screen">
      <section className=" flex flex-col">
        <img
          src="./students.png"
          alt="Image"
          className="border rounded-md opacity-30 shadow-md"
        />
        <div className="flex flex-col items-center p-20 gap-5">
          <p className="text-center text-xl">
            ACLC College is a member of the AMA Education System and is one of
            the leading computer schools in the country. With a curriculum that
            is based on the requirements of the actual industry, ACLC College
            aims to produce highly competent graduates, especially in the field
            of IT and other fields that require knowledge in today's technology.
          </p>
          <br />

          <p className="text-center text-xl font-bold">
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
      <div className="flex flex-col px-5">
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
