import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { fadeIn } from "../../motion/motions";
import MenuContext from "../Menucontext";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const ref = useRef();

  const { setActiveMenu } = useContext(MenuContext);

  const ifInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (ifInView) {
      setActiveMenu("contact");
    }
  }, [ifInView, setActiveMenu]);

  return (
    <div ref={ref} className="px-5 h-auto w-full bg-gray-900">
      {/* Social Links */}
      <motion.div
        variants={fadeIn("left", "tween", 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="flex justify-center items-center gap-4 pt-10"
      >
        <div className="h-8 w-8 rounded-full flex justify-center items-center bg-white text-background">
          <a
            href="https://www.facebook.com/md.alauddin.147287"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>

        <div className="h-8 w-8 rounded-full flex justify-center items-center bg-white text-background">
          <a href="#" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>

        <div className="h-8 w-8 rounded-full flex justify-center items-center bg-white text-background">
          <a href="#" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="h-8 w-8 rounded-full flex justify-center items-center bg-white text-background">
          <a href="#" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <div className="h-8 w-8 rounded-full flex justify-center items-center bg-white text-background">
          <a href="#" target="_blank" rel="noreferrer">
            <svg
              width={18}
              fill="#021526"
              viewBox="-2.5 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              className="jam jam-fiverr"
            >
              <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"></path>
              <circle cx="14.375" cy="1.875" r="1.875"></circle>
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Footer Text */}
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-center pt-5 pb-10 text-sm font-medium text-white"
      >
        © 2024 All rights reserved ||{" "}
        <a
          href="https://www.facebook.com/md.alauddin.147287"
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-bold text-softTheme">Md Alauddin</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Footer;
