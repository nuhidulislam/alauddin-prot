import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motions";

const Banner = () => {
  return (
    <div className="bg-theme md:px-14 px-8 py-5 flex justify-between items-center">
      {/* Left Content */}
      <div className="w-[50%] md:w-[60%]">
        <motion.h3
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-xs md:text-2xl lg:text-3xl"
        >
          I am happy to let you know that 100+ projects have been done
          successfully!
        </motion.h3>

        <motion.a
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          href="#"
          target="_blank"
        >
          <motion.button
            type="button"
            variants={fadeIn("left", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-white border border-white hover:scale-125 duration-300 font-medium rounded-lg text-lg md:text-xl px-3 md:px-5 py-2 text-center mt-4 md:mt-8 me-2 mb-2 flex justify-center items-center gap-2"
          >
            Hire me
          </motion.button>
        </motion.a>
      </div>

      {/* Right Image */}
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-[50%] md:w-[40%]"
      >
        <img
          src="/hireme.png"
          alt="Working Guy Photo"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
