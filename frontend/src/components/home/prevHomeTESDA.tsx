import React, { useState } from "react";

const PrevHomeTESDA = () => {
  const TESDAcourses = [
    {
      cName: "WAD",
      cDescription: `Web development courses 
      cover a broad range of topics essential for building and maintaining websites and web applications. These include the basics of HTML and CSS, and JavaScript for front-end development. 
      Web application development describes 
      the process of designing, building, 
      testing and deploying web-based applications 
      that will be installed on remote servers and delivered to users or customers via the internet.`,
    },
    {
      cName: "HRT",
      cDescription: `The Tourism, Hotel and Restaurant Technology program will equip students 
      with competencies that are needed to execute operational tasks and 
      management functions in food production (culinary), accommodation, food and beverage service,
       tourism planning and product development, events planning, travel and tour operations and other 
       emerging sectors of hospitality and tourism industry.`,
    },
    {
      cName: "OMT",
      cDescription: `The Diploma in Office Management Technology (DOMT) 
      prepares students for careers in office management and administration, 
      particularly in medical and legal office management. The program gives 
      emphasis on the development of the studentsâ€™ practical skills in book
       and records keeping, administrative support, and information, communication,
        technology and events management.`,
    },
    {
      cName: "OAT",
      cDescription: `The two-year Office Administration Technology program is designed
       to give graduates the greatest possible employability within the administration
        field. During year one, students gain a thorough understanding of the skills 
        required to work in the field with courses in Keyboarding, Transcription, 
        Accounting, Computers, and Communications, amongst others. In year two, 
        students will focus on five areas of specialization that will prepare them 
        for positions within the highly technical fields of Medical, Dental, Legal,
         Engineering, and Records Management administration. It is in year two that 
         we have placed the new in-depth study of Records and Information Management
          which is so important to all of these technical fields. Students will have 
          the opportunity to plan, supervise, and produce work in consultation with 
          numerous community groups and local area businesses. This program also has
           a 4-week work term to help students gain additional real-world experience
            and build a strong network.`,
    },
  ];

  return (
    <div className="relative w-full m-auto grid grid-cols-2 py-20">
      <div className="pb-5 pt-20 relative">
        <h1 className="text-3xl  font-bold flex items-center">
          <div className="w-32 h-1 bg-black mr-4"></div>
          <strong className="text-blue-600 mr-5">02</strong>
          ACLC Offered Courses
        </h1>
        <div className="relative -left-[130px] mt-[200px] animate-spin-slow  w-[650px] h-[650px] bg-blue-500/30  grid place-items-center shadow-xl">
          <div className="w-[400px] h-[400px] bg-blue-500/30  grid place-items-center shadow-xl">
            <div className="w-[250px] h-[250px] bg-blue-500/30 grid place-items-center shadow-xl">
              <div className="w-[100px] h-[100px] bg-blue-500/50 grid place-items-center shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pr-20">
        <h1 className="font-bold pb-2 pt-[90px] text-xl text-start">
          College
          <img src="/line-thin.svg" className="w-36 -ml-5" alt="" />
        </h1>
        <h1 className="font-bold pb-2 pt-[90px] text-xl text-start">
          TESDA
          <img src="/line-thin.svg" className="w-36 -ml-5" alt="" />
        </h1>
        {TESDAcourses.map((TESDAcourses, index) => (
          <div
            className="flex group my-5 px-4 py-4 relative hover:bg-blue-50 transition-all duration-[.30s] rounded-tr-xl rounded-br-xl"
            key={index}
          >
            <div className="w-1 h-full rounded group-hover:bg-blue-500 transition-all duration-[.30s] absolute top-0 left-0"></div>
            <div className="ml-2">
              <p className="pr-5 font-bold">{TESDAcourses.cName}</p>
              <article>{TESDAcourses.cDescription}</article>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrevHomeTESDA;
