import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

import { fadeIn } from "../../motion/motions";
import MenuContext from "../Menucontext";
import ProgressBar from "../progressBar/ProgressBar";

const Skils = () => {
  const { setActiveMenu } = useContext(MenuContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });

  useEffect(() => {
    setActiveMenu("skils");
  }, [isInView, setActiveMenu]);

  return (
    <div
      id="skils"
      className="h-auto pb-14 lg:min-h-screen md:px-14 px-8 flex justify-center items-center"
    >
      <div ref={ref}>
        <motion.h3
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="md:text-lg text-base lg:text-xl font-bold"
        >
          My Speciality
        </motion.h3>

        <motion.h1
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="md:text-3xl text-2xl lg:text-4xl font-bold pt-4 md:pb-10 pb-5 lg:pb-16"
        >
          My Skils
        </motion.h1>

        <motion.p
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-xs md:text-sm text-gray-400 w-[90%]"
        >
          A passionate Frontend Web Developer with expertise in React.js and
          Next.js, skilled in building dynamic and responsive web applications.
          Experienced in crafting modern user interfaces, optimizing
          performance, and delivering seamless user experiences with a strong
          focus on clean and intuitive design.
        </motion.p>

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5 md:gap-0 pt-7 md:pt-10">
          <div className="w-full flex flex-col justify-center flex-1 gap-5 text-sm md:text-base">
            <div className="w-[95%]">
              Html and Css
              <ProgressBar percentage={95} color="#2C98F0" />
            </div>
            <div className="w-[95%]">
              Vanila Javascript
              <ProgressBar percentage={90} color="#F9BF3F" />
            </div>
            <div className="w-[95%]">
              React and Next js
              <ProgressBar percentage={80} color="#EC5453" />
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-start flex-1 gap-5">
            <div className="w-[95%]">
              Express and Node js
              <ProgressBar percentage={95} color="#A84CB8" />
            </div>
            <div className="w-[95%]">
              TailwindCSS
              <ProgressBar percentage={95} color="#2FA499" />
            </div>
            <div className="w-[95%]">
              Figma and Canva
              <ProgressBar percentage={90} color="#4054B2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
