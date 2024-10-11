import { FaSquareFacebook } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="bg-blue-900 font-bold text-white flex justify-between px-10 border-t-[1px]">
      <section>
        <address className="">Lilia Avenue </address>
        <address className="">Cogon Ormoc City</address>
      </section>
      <section>
        <h1 className="">Contact US</h1>
        <p></p>
        <a href="https://www.facebook.com/aclccollegeoformoc" target="_blank">
          <h1 className="flex p-2">
            <p className="pt-1 pr-1">
              <FaSquareFacebook />
            </p>{" "}
            Facebook
          </h1>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqtLCBWQZsQZdFTXVVsPTSzvLfbtsRrFpdsQSkcSfPbQwgGNPGFnbPjRxFgwFBWVDMgdq"
          target="_blank"
        >
          <h1 className="flex p-2">
            <p className="pt-1 pr-1">
              <TfiEmail />
            </p>
            ACLCOrmoc@gmail.com
          </h1>
        </a>
      </section>
      <section>
        <h1>Course Offered</h1>
      </section>
    </footer>
  );
};

export default Footer;
