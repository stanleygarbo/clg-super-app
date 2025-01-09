import { FaSquareFacebook } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="bg-white text-black flex text-lg xs:text-base xs:flex-col sm:flex-col xs:gap-7 sm:gap-10 xs:items-center sm:items-center justify-evenly xs:p-3 sm:p-4 p-5 border-t w-screen">
      <section>
        <address className="font-bold xs:text-md">
          Lilia Avenue Cogon Ormoc City
        </address>
      </section>
      <section>
        <h1 className="font-bold text-center">Contact US</h1>
        <p></p>
        <a href="https://www.facebook.com/aclccollegeoformoc" target="_blank">
          <h1 className="flex items-center gap-1">
            <p className="">
              <FaSquareFacebook />
            </p>{" "}
            Facebook
          </h1>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqtLCBWQZsQZdFTXVVsPTSzvLfbtsRrFpdsQSkcSfPbQwgGNPGFnbPjRxFgwFBWVDMgdq"
          target="_blank"
        >
          <h1 className="flex items-center gap-1">
            <p className="">
              <TfiEmail />
            </p>
            ACLCOrmoc@gmail.com
          </h1>
        </a>
      </section>
      <section className="">
        <h1 className="font-bold">@Copy Right</h1>
      </section>
    </footer>
  );
};

export default Footer;
