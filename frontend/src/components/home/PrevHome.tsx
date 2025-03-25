const PrevHome = () => {
  return (
    <div className="overflow-y-hidden no-scrollbar">
      <section className="w-full h-screen border-b flex items-center md:px-10 lg:px-10">
        <div className="z-20 p-5">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-10">
              ACLC College <br /> of{" "}
              <span className="relative">
                Ormoc
                <img src="/line.svg" className=" absolute left-0" alt="" />
              </span>
            </h1>

            <p className="w-[70%] md:w-[50%] text-base md:text-lg lg:text-xl xl:w-[350px] py-7 font-semibold">
              A leading computer training institution in the country offering
              full 2-year programs and short-term courses.
            </p>
            <button className="w-[50%] md:w-[40%] xl:w-[90%] py-3 text-base md:text-lg lg:text-xl rounded-md font-bold  hover:bg-white hover:text-black hover:border-black transition-colors bg-black border border-black text-white duration-200">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="absolute w-[100%] md:w-[70%] lg:w-[70%] z-10 right-0 h-screen bg-[url('/aclc-bldg.jpg')] bg-center bg-fit opacity-70">
          <div className="absolute w-full h-full bg-white opacity-50"></div>
        </div>
      </section>
      {/* <div className="relative max-w-[1600px] m-auto grid grid-cols-2"></div> */}
    </div>
  );
};

export default PrevHome;
