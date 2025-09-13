import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { fadeIn } from "../../motion/motions";

import MenuContext from "../Menucontext";
import EduCard from "../eduCard.jsx/EduCard";

const Education = () => {
  const { setActiveMenu } = useContext(MenuContext);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    setActiveMenu("education");
  }, [isInView, setActiveMenu]);

  return (
    <div ref={ref} id="education" className="md:px-14 px-8 pb-10">
      <motion.h3
        variants={fadeIn("left", "tween", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-sm md:text-base lg:text-xl font-bold"
      >
        Education
      </motion.h3>
      <motion.h1
        variants={fadeIn("right", "tween", 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="md:text-3xl text-2xl lg:text-4xl font-bold pt-4 pb-16"
      >
        My Overall Studies So Far
      </motion.h1>

      <div className="relative">
        <div className="left-[1.15rem] absolute w-1 h-full bg-softBackground z-[-1]"></div>

        <motion.div
          variants={fadeIn("left", "tween", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <EduCard
            title="Bachelor of Arts in English"
            description="Currently studying at Gopalganj Science And Technology University at the department of English as a first Year student."
            year="2024 - Running..."
            color="#2C98F0"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <EduCard
            title="Higher Secondary School"
            description="Completed my Higher Secondary School from Fulbaria Degree College as a student of Huminities faculty. Got my HSC certification from there."
            year="2020-2022"
            color="#A84CB8"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <EduCard
            title="Secondary School"
            description="Completed my Secondary School from Fulbaria Pilot High School as a student of science faculty. Got my SSC certification from there."
            year="2018-2020"
            color="#EC5453"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <EduCard
            title="Junior School"
            description="It is the same as my secondary school. Achieved my JSC certificate from there."
            year="2015-2018"
            color="#2FA499"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <EduCard
            title="Primary School"
            description="Completed my primary School from Fulbaria Bazar Primary School and got my PSC certification from there"
            year="2010-2015"
            color="#4054B2"
          />
        </motion.div>
      </div>

      <div className="h-10 w-10 border-4 border-softBackground rounded-full"></div>
    </div>
  );
};

export default Education;
