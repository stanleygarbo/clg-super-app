import React from "react";

const PrevHome = () => {
  const courses = [
    {
      cName: "BSCS",
      cDescription: `Bachelor of Science in Computer Science (BSCS) is a four-year
            program that includes the study of computing concepts and theories,
            algorithmic foundations, and new developments in computing.`,
    },
    {
      cName: "BSIT",
      cDescription: `The Bachelor of Science in Information Technology (BS IT) is a
            four-year degree program that equips students with the basic ability
            to conceptualize, design and implement software applications. <br />
            Information Technology is the study of utilization of both hardware
            and software technologies to provide computing solutions that
            address the needs of various users and organizations.`,
    },
    {
      cName: "BSBA",
      cDescription: `A Bachelor of Science in Business Administration (BSBA) degree is
            designed to provide students with a strong academic foundation in
            core business functions including general business administration,
            accounting, finance, project management, information technology,
            human resources, marketing, international business`,
    },
    {
      cName: "BSHM",
      cDescription: `The Bachelor of Science in Hospitality Management (BS HM) is a
            four-year degree program that covers the process of planning,
            development, human resource management of the different aspects of
            the hotel, restaurant, and resorts operations. The program also
            intends to teach entrepreneurship skills.`,
    },
  ];

  return (
    <div className="px-[20rem]">
      <div className="text-center text-3xl pt-5 pb-5">
        <h1 className="font-bold">ACLC Offered Courses</h1>
        <h1 className="font-bold pb-2 pt-4 text-xl text-start">College</h1>
      </div>
      {courses.map((courses) => (
        <div className="flex flex-row group py-5">
          <div className="w-1 rounded group-hover:bg-blue-500 transition-all duration-[.30s]"></div>
          <p className="pr-5 pl-2 font-bold">{courses.cName}</p>
          <article>{courses.cDescription}</article>
        </div>
      ))}
    </div>
  );
};

export default PrevHome;
