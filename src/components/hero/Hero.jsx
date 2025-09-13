import { motion, useInView } from "framer-motion";
import { useContext, useRef, useEffect } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { fadeIn } from "../../motion/motions"; 
import MenuContext from "../Menucontext";


const Hero = () => {
  const { setActiveMenu } = useContext(MenuContext);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  useEffect(() => {
    setActiveMenu("home");
  }, [isInView, setActiveMenu]);

  return (
    <div
      ref={ref}
      id="home"
      className="h-auto py-24 lg:min-h-screen flex flex-col-reverse md:flex-row justify-center items-center md:px-14 px-8"
    >
      <div className="w-full md:w-[60%]">
        <motion.h1
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl z-10 md:text-5xl lg:text-6xl font-outfit"
        >
          Hi I&apos;m <br />{" "}
          <span className="text-softTheme font-bold">Md Alauddin</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("right", "tween", 0.7, 0.5)}
          initial="hidden"
          whileInView="show"
          className="py-4 text-sm md:text-base capitalize font-poppins"
        >
          I&apos;m a passionate MERN Stack Web Developer with expertise in
          React, Next.js, and modern frontend development.
        </motion.p>

        <motion.a
          variants={fadeIn("right", "tween", 0.9, 0.5)}
          initial="hidden"
          whileInView="show"
          href="#"
          target="_blank"
        >
          <motion.button
            variants={fadeIn("right", "tween", 0.9, 0.5)}
            initial="hidden"
            whileInView="show"
            type="button"
            className="text-softTheme hover:text-white border border-theme hover:bg-theme font-medium rounded-lg text-lg md:text-xl px-3 lg:px-5 py-2.5 text-center me-2 mb-2 flex justify-center items-center gap-2"
          >
            Download Resume
            <FontAwesomeIcon icon={faDownload} height={25} />
          </motion.button>
        </motion.a>
      </div>

      <motion.div
        variants={fadeIn("left", "tween", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-[60%] md:w-[40%]"
      >
        <img
          src="/hero.png"
          height={700}
          width={700}
          alt="alauddin"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default Hero;


