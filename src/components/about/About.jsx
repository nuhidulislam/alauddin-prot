import { faLaptopCode, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { fadeIn } from "../../motion/motions";
import MenuContext from "../Menucontext";

const About = () => {
  const { setActiveMenu } = useContext(MenuContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    setActiveMenu("about");
  }, [isInView, setActiveMenu]);

  return (
    <div
      ref={ref}
      id="about"
      className="h-auto pt-14 md:pt-0 lg:min-h-screen flex flex-col justify-start items-start py-3 lg:py-10 md:px-14 px-8"
    >
      <motion.h3
        variants={fadeIn("left", "tween", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-xl md:text-2xl lg:text-3xl font-outfit font-bold"
      >
        About me
      </motion.h3>

      <motion.h1
        variants={fadeIn("right", "tween", 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="py-4 text-2xl md:text-3xl lg:text-4xl font-outfit font-semibold"
      >
        Who I am?
      </motion.h1>

      <motion.p
        variants={fadeIn("left", "tween", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-xs md:text-sm lg:text-base font-poppins leading-5 md:leading-7 tracking-wide capitalize"
      >
        Currently I&apos;m a student at Gopalganj Science and Technology
        University at the department of English. Beside that formal introduction
        I&apos;m a{" "}
        <span className="border-[1px] border-l-0 border-r-0 border-white bg-softTheme">
          Frontend Web Developer, A Hafiz, A Mawlana, An English Teacher, and A
          Debater
        </span>
        . I always try to stay dedicated, work hard, and keep improving myself
        through every challenge I face in life.
      </motion.p>

      <div className="flex flex-col md:flex-row justify-between items-center w-full pt-10 flex-wrap">
        {/* Figma Designer Card */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          className="w-[265px] my-5 flex justify-center flex-col items-center border-[1px] border-white p-8 md:p-10 rounded-md gap-3 hover:text-purple-500 hover:border-purple-500 hover:scale-105 duration-300 purpleGlow font-bold mx-1"
        >
          <FontAwesomeIcon
            className="h-[25px] md:h-[40px]"
            icon={faLightbulb}
          />
          Figma Designer
        </motion.div>

        {/* Frontend Developer Card */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          className="w-[265px] my-5 flex justify-center flex-col items-center border-[1px] border-white p-8 md:p-10 rounded-md gap-3 hover:text-[#21749b] hover:border-[#21749b] hover:scale-105 duration-300 blueGlow font-bold wordBox mx-1"
        >
          <svg
            className="h-[25px] md:h-[40px] fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path d="M2 8V56H62V8H2ZM60 54H4V10H60V54ZM20 26L14 32L20 38V34H36V30H20V26ZM44 26V30H28V34H44V38L50 32L44 26Z" />
          </svg>
          Frontend Developer
        </motion.div>

        {/* Mern Web Developer Card */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          className="w-[265px] my-5 flex justify-center flex-col items-center border-[1px] border-white p-8 md:p-10 rounded-md gap-3 hover:text-softTheme hover:border-softTheme hover:scale-105 duration-300 greenGlow font-bold mx-1"
        >
          <FontAwesomeIcon
            className="h-[25px] md:h-[40px]"
            icon={faLaptopCode}
          />
          Mern Web Developer
        </motion.div>
      </div>
    </div>
  );
};

export default About;
