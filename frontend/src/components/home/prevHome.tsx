const PrevHome = () => {
  const courses = [
    {
      cName: "Bachelor's of Science in Computer Science (BSCS)",
    },
    {
      cName: "Bachelor's of Science in Information Technology (BSIT)",
    },
    {
      cName: "Bachelor's of Science in Business Administration (BSBA)",
    },
    {
      cName: "Bachelor's of Science in Hospitality Management (BSHM)",
    },
  ];

  return (
    <div className="">
      <section className="w-full h-screen border-b flex items-center">
        <div className="w-full pl-[170px] z-20 ">
          <div className="max-w-[1800px] mx-auto">
            <h1 className="text-[100px] font-bold leading-[100px]">
              ACLC College <br /> of{" "}
              <span className="relative">
                Ormoc
                <img
                  src="/line.svg"
                  className=" absolute left-0 w-full"
                  alt=""
                />
              </span>
            </h1>
            {/* <div className="h-[6px] w-[140px] rounded gradient1"></div>
          <div className="ml-[120px] mt-2 h-[6px] w-[60px] rounded gradient1"></div> */}

            <p className="w-[400px] my-14 text-lg">
              A leading computer training institution in the country offering
              full 2-year programs and short-term courses
            </p>
            <button className="w-64 bg-black border border-black text-white py-4 uppercase rounded-md font-bold text-sm hover:bg-white hover:text-black hover:border-black transition-colors duration-200">
              Contact us
            </button>
          </div>
        </div>
        <div className="absolute w-[60%] z-10 right-0 h-screen bg-[url('/aclc-bldg.jpg')] bg-center bg-cover opacity-70">
          <div className="absolute w-full h-full bg-white opacity-30"></div>
        </div>
      </section>
      <div className="relative max-w-[1600px] m-auto grid grid-cols-2">
        {/* <div className="pb-5 pt-20 relative">
          <h1 className="text-3xl  font-bold flex items-center">
            <div className="w-32 h-1 bg-black mr-4"></div>
            <strong className="text-blue-600 mr-5">01</strong>
            ACLC Offered Courses
          </h1>
          <div className="relative -left-[130px] mt-[200px] animate-spin-slow  w-[650px] h-[650px] bg-blue-500/30  grid place-items-center shadow-xl">
            <div className="w-[400px] h-[400px] bg-blue-500/30  grid place-items-center shadow-xl">
              <div className="w-[250px] h-[250px] bg-blue-500/30 grid place-items-center shadow-xl">
                <div className="w-[100px] h-[100px] bg-blue-500/50 grid place-items-center shadow-xl"></div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className=" pr-20">
          <h1 className="font-bold pb-2 pt-[90px] text-xl text-start">
            College
            <img src="/line-thin.svg" className="w-36 -ml-5" alt="" />
          </h1>
          <h1 className="font-bold pb-2 pt-[90px] text-xl text-start">
            Bachelor's
            <img src="/line-thin.svg" className="w-36 -ml-5" alt="" />
          </h1>
          {courses.map((courses, index) => (
            <div
              className="flex group my-5 px-4 py-4 relative hover:bg-blue-50 transition-all duration-[.30s] rounded-tr-xl rounded-br-xl"
              key={index}
            >
              <div className="w-1 h-full rounded group-hover:bg-blue-500 transition-all duration-[.30s] absolute top-0 left-0"></div>
              <div className="ml-2">
                <p className="pr-5 font-bold">{courses.cName}</p>
              </div>
            </div>
          ))}
          <PrevHomeTESDA />
        </div> */}
      </div>
    </div>
  );
};

export default PrevHome;
