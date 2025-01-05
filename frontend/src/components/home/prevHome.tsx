const PrevHome = () => {
  return (
    <div className="overflow-y-hidden no-scrollbar">
      <section className="w-full h-screen border-b flex items-center">
        <div className="sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full 2xl:pl-32 xl:pl-32 lg:p-24 md:p-16 sm:p-8 xs:p-4 z-20 ">
          <div className="flex flex-col">
            <h1 className="font-bold 2xl:text-[100px] xl:text-[100px] lg:text-[80px] md:text-[70px] sm:text-[50px] xs:text-[40px] 2xl:leading-[100px] xl:leading-[100px] lg:leading-[80px] md:leading-[70px] sm:leading-[60px] xs:leading-[50px]">
              ACLC College <br /> of{" "}
              <span className="relative">
                Ormoc
                <img src="/line.svg" className=" absolute left-0" alt="" />
              </span>
            </h1>

            <p className="2xl:w-[500px] xl:w-[400px] lg:w-[350px] md:w-[250px] sm:w-[200px] xs:w-[180px] 2xl:py-20 xl:py-16 lg:py-12 md:py-8 sm:py-6 xs:py-6 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-wrap font-semibold">
              A leading computer training institution in the country offering
              full 2-year programs and short-term courses
            </p>
            <button className="2xl:w-72 xl:w-64 lg:w-52 md:w-40 sm:w-32 xs:w-24 2xl:py-6 xl:py-4 lg:py-3 md:py-3 sm:py-3 xs:py-2 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-xs xs:text-[8px] rounded-md font-bold  hover:bg-white hover:text-black hover:border-black transition-colors bg-black border border-black text-white duration-200">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="absolute w-[60%] xs:w-[62%] z-10 right-0 h-screen bg-[url('/aclc-bldg.jpg')] bg-center bg-fit opacity-70">
          <div className="absolute w-full h-full bg-white opacity-30"></div>
        </div>
      </section>
      {/* <div className="relative max-w-[1600px] m-auto grid grid-cols-2"></div> */}
    </div>
  );
};

export default PrevHome;
