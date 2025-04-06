import { FaSquareFacebook } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-white text-black text-lg flex flex-col sm:justify-center p-5 gap-5 border-t w-[100%]">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 w-[100%]">
        <span className="flex flex-col lg:justify-center lg:items-center xl:w-[100%] gap-5">
          <section className="px-5">
            <h1 className="font-bold font-serif text-lg md:text-xl">
              ACLC College of Ormoc
            </h1>
            <p className="text-xs md:text-base">
              ACLC College of Ormoc is a member of the AMA Education System and
              is one of the leading computer schools in the country.
            </p>
          </section>
        </span>

        <span className="flex gap-5 justify-evenly xs:grid-cols-2 xs:grid lg:w-[100%]">
          <section className="text-sm">
            <h1 className="font-bold text-slate-600 text-lg">Bachelor's</h1>
            <div className="">
              <p>BSCS</p>
              <p>BSIT</p>
              <p>BSHM</p>
              <p>BSBA</p>
            </div>
          </section>
          <section className="text-sm">
            <h1 className="font-bold text-slate-600 text-lg">Diploma</h1>
            <div className="">
              <p>WAD</p>
              <p>HRT</p>
              <p>OMT</p>
            </div>
          </section>
          <section className="text-sm">
            <h1 className="font-bold text-slate-600 text-lg">2 Years</h1>
            <div className="">
              <p>WAD</p>
              <p>HRT</p>
              <p>OMT</p>
            </div>
          </section>
          <section className="text-sm">
            <h1 className="font-semibold text-slate-600">Help ?</h1>
            <div className="font-mono md:text-base">
              {/* <p>Get Started</p>
              <p>Support Center</p> */}
              <section className="flex gap-5 py-2">
                <a
                  href="https://www.facebook.com/aclccollegeoformoc"
                  target="_blank"
                >
                  <h1 className="text-xl">
                    <FaSquareFacebook />
                  </h1>
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqtLCBWQZsQZdFTXVVsPTSzvLfbtsRrFpdsQSkcSfPbQwgGNPGFnbPjRxFgwFBWVDMgdq"
                  target="_blank"
                >
                  <h1 className="text-xl">
                    <TfiEmail />
                  </h1>
                </a>
              </section>
            </div>
          </section>
        </span>
      </div>

      <section className="flex flex-row-reverse justify-between lg:px-5 md:justify-between text-sm pt-5 border-t font-semibold">
        <h1 className="flex gap-5">
          {/* <p>Privacy Policy</p>
          <p>Terms of Use</p> */}
        </h1>
        <h1 className="text-xs text-slate-600 flex items-center">
          © {date.getFullYear()} AMA
        </h1>
      </section>
    </footer>
  );
};

export default Footer;
