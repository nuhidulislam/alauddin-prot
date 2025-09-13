import {
  faAddressCard,
  faGraduationCap,
  faHouse,
  faLaptopFile,
  faMap,
  faPhoneVolume,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useContext } from "react";

import { fadeIn } from "../../motion/motions";
import MenuContext from "../Menucontext";

const Sidebar = () => {
  const { activeMenu } = useContext(MenuContext);

  return (
    <motion.div
      variants={fadeIn("right", "tween", 0, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="hidden lg:flex justify-center items-center w-[25%] sticky top-0 bg-softBackground h-screen border-r-4 border-softTheme"
    >
      <div className="flex flex-col items-center">
        <div className="pb-5">
          <div className="capitalize flex flex-col items-center gap-1">
            <motion.a
              variants={fadeIn("right", "tween", 0.1, 0.5)}
              href="https://www.facebook.com/md.alauddin.147287"
              target="_blank"
              rel="noreferrer"
            >
              {/* 👇 Next.js Image এর জায়গায় React এর <img /> */}
              <img
                src="/alauddinn.png"
                height={80}
                width={80}
                alt="Md Alauddin"
                className="h-20 w-20 rounded-[50%] border-spacing-4 border-[5px] border-[#008170]"
              />
            </motion.a>

            <motion.h1
              variants={fadeIn("right", "tween", 0.15, 0.5)}
              className="font-outfit text-center font-semibold text-2xl tracking-wide pt-2"
            >
              Md Alauddin
            </motion.h1>
            <motion.p
              variants={fadeIn("right", "tween", 0.2, 0.5)}
              className="text-center"
            >
              <span className="text-softTheme font-bold">Frontend web</span>{" "}
              Developer
            </motion.p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start gap-5">
          <a
            href="#home"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "home" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.21, 0.5)}>
              <FontAwesomeIcon icon={faHouse} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.21, 0.5)}
              className="text-md font-semibold"
            >
              Home
            </motion.h3>
          </a>

          <a
            href="#about"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "about" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.23, 0.5)}>
              <FontAwesomeIcon icon={faAddressCard} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.23, 0.5)}
              className="text-md font-semibold"
            >
              About
            </motion.h3>
          </a>

          <a
            href="#services"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "services" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.25, 0.5)}>
              <FontAwesomeIcon icon={faLaptopFile} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.25, 0.5)}
              className="text-md font-semibold"
            >
              Services
            </motion.h3>
          </a>

          <a
            href="#skils"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "skils" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.27, 0.5)}>
              <FontAwesomeIcon icon={faScrewdriverWrench} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.27, 0.5)}
              className="text-md font-semibold"
            >
              Skils
            </motion.h3>
          </a>

          <a
            href="#education"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "education" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.29, 0.5)}>
              <FontAwesomeIcon icon={faGraduationCap} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.29, 0.5)}
              className="text-md font-semibold"
            >
              Education
            </motion.h3>
          </a>

          <a
            href="#portfolio"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "portfolio" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.31, 0.5)}>
              <FontAwesomeIcon icon={faMap} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.31, 0.5)}
              className="text-md font-semibold"
            >
              Portfolio
            </motion.h3>
          </a>

          <a
            href="#contact"
            className="flex justify-start items-center gap-4 transition"
            style={{ color: activeMenu === "contact" ? "#008170" : "white" }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.33, 0.5)}>
              <FontAwesomeIcon icon={faPhoneVolume} className="h-6" />
            </motion.div>
            <motion.h3
              variants={fadeIn("right", "tween", 0.33, 0.5)}
              className="text-md font-semibold"
            >
              Contact
            </motion.h3>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
