import { easeIn, motion } from "framer-motion";

const Bganimation = () => {
  return (
 <motion.div className=" w-full h-screen fixed lg:w-[75%] z-[-1] top-0 left-0 lg:left-auto lg:right-0 ">
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:0.8, scale: 1.2, rotate: 360, transition:{ duration:4, ease: easeIn, repeat: Infinity, repeatType: "mirror"}}} className=" md:h-14 md:w-14 w-7 h-7 lg:h-20 lg:w-20 border-softTheme border-2 lg:border-4 bg-transparent absolute top-[20%] left-[49%]"></motion.div>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:0.3, scale: 1.2, rotate: 360, transition:{ duration:8, ease: easeIn, repeat: Infinity, repeatType: "mirror"}}} className=" md:h-14 md:w-14 w-7 h-7 lg:h-20 lg:w-20 border-softTheme border-2 lg:border-4 bg-transparent absolute top-[12%] left-[82%]"></motion.div>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:0.5, scale: 1.2, rotate: 360, transition:{ duration:9, ease: easeIn, repeat: Infinity, repeatType: "mirror"}}} className=" md:h-14 md:w-14 w-7 h-7 lg:h-20 lg:w-20 border-softTheme border-2 lg:border-4 bg-transparent absolute top-[47%] left-[2%]"></motion.div>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:1, scale: 1.2, rotate: 360, transition:{ duration:8, ease: easeIn, repeat: Infinity, repeatType: "mirror"}}} className=" md:h-14 md:w-14 w-7 h-7 lg:h-20 lg:w-20 border-softTheme border-2 lg:border-4 bg-transparent absolute top-[82%] left-[72%]"></motion.div>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:0.9, scale: 1.2, rotate: 360, transition:{ duration:5, ease: easeIn, repeat: Infinity, repeatType: "mirror"}}} className=" md:h-14 md:w-14 w-7 h-7 lg:h-20 lg:w-20 border-softTheme border-2 lg:border-4 bg-transparent absolute top-[8%] left-[5%]"></motion.div>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:0.5, scale: 1.2, rotate: 360, transition:{ duration:6, ease: easeIn, repeat: Infinity, repeatType: "mirror"}}} className=" md:h-14 md:w-14 w-7 h-7 lg:h-20 lg:w-20 border-softTheme border-2 lg:border-4 bg-transparent absolute top-[65%] left-[31%]"></motion.div>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:0.7, scale: 1.2, rotate: 360, transition:{ duration:4, ease: easeIn, repeat: Infinity, repeatType: "mirror"}}} className=" md:h-14 md:w-14 w-7 h-7 lg:h-20 lg:w-20 border-softTheme border-2 lg:border-4 bg-transparent absolute top-[77%] left-[50%]"></motion.div>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:0.2, scale: 1.2, rotate: 360, transition:{ duration:8, ease: easeIn, repeat: Infinity, repeatType: "mirror"}}} className=" md:h-14 md:w-14 w-7 h-7 lg:h-20 lg:w-20 border-softTheme border-2 lg:border-4 bg-transparent absolute top-[54%] left-[33%]"></motion.div>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:0.5, scale: 1.2, rotate: 360, transition:{ duration:9, ease: easeIn, repeat: Infinity, repeatType: "mirror"}}} className=" md:h-14 md:w-14 w-7 h-7 lg:h-20 lg:w-20 border-softTheme border-2 lg:border-4 bg-transparent absolute top-[21%] left-[78%]"></motion.div>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:0.8, scale: 1.2, rotate: 360, transition:{ duration:9, ease: easeIn, repeat: Infinity, repeatType: "mirror"}}} className=" md:h-14 md:w-14 w-7 h-7 lg:h-20 lg:w-20 border-softTheme border-2 lg:border-4 bg-transparent absolute top-[65%] left-[80%]"></motion.div>
    </motion.div>
  );
};

export default Bganimation;
