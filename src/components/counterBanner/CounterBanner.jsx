import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { fadeIn } from "../../motion/motions";

const CounterBanner = () => {
  const counterRef = useRef(null);
  const inView = useInView(counterRef, { once: false });

  return (
    <div className="h-[50vh] lg:h-screen counterBg">
      <div className="overlay flex flex-col">
        <div className="flex-1 bg-background"></div>
        <div className="flex flex-1 justify-center items-center bg-transparent">
          <div
            ref={counterRef}
            className="h-auto w-full flex justify-between items-center md:px-14 px-8 gap-3 flex-wrap"
          >
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 0.5)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col justify-center items-center"
            >
              {inView && (
                <CountUp
                  end={150}
                  duration={3}
                  className="text-xl md:text-3xl lg:text-5xl font-bold pb-2"
                />
              )}
              <h3 className="text-sm md:text-base lg:text-lg">
                Cups of coffee
              </h3>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.5, 0.5)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col justify-center items-center"
            >
              {inView && (
                <CountUp
                  end={200}
                  duration={3}
                  className="text-xl md:text-3xl lg:text-5xl font-bold pb-2"
                />
              )}
              <h3 className="text-sm md:text-base lg:text-lg">Projects</h3>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.5, 0.5)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col justify-center items-center"
            >
              {inView && (
                <CountUp
                  end={2}
                  duration={3}
                  className="text-xl md:text-3xl lg:text-5xl font-bold pb-2"
                />
              )}
              <h3 className="text-sm md:text-base lg:text-lg">Partners</h3>
            </motion.div>
          </div>
        </div>
        <div className="flex-1 bg-background"></div>
      </div>
    </div>
  );
};

export default CounterBanner;
