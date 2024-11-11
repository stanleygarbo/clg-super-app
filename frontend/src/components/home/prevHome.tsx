const PrevHome = () => {
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
      <div className="relative max-w-[1600px] m-auto grid grid-cols-2"></div>
    </div>
  );
};

export default PrevHome;
