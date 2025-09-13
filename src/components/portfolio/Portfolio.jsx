import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { fadeIn } from "../../motion/motions";
import MenuContext from "../Menucontext";
import Portfoliocard from "../portfoliocard/Portfoliocard";

const featuredWorks = [
  {
    id: 1,
    title: "Restaurant Website",
    img: "/restaurant.png",
    desc: "A modern and professional website for restaurant anywhere around the globe",
    link: "https://restaurant-website-lime-six.vercel.app/",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    img: "/ecommerce.png",
    desc: "In a era of online business, an E-commerce website is a must-have",
    link: "https://nextstylefashion.free.nf/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    img: "/images.jpeg",
    desc: "Nowadays a professional portfolio website is as necessary as your social identity.",
    link: "#",
  },
  {
    id: 4,
    title: "Tech Website",
    img: "/tech.png",
    desc: "In an era where information is everything a blog website can be your best friend",
    link: "#",
  },
];

const Single = ({ title, desc, img, link }) => {
  const { setActiveMenu } = useContext(MenuContext);
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.7 });

  useEffect(() => {
    setActiveMenu("portfolio");
  }, [isInView, setActiveMenu]);

  return (
    <div
      ref={ref}
      className="md:px-14 px-8 lg:min-h-screen h-auto flex justify-normal items-center"
    >
      <div className="py-12 text-white flex flex-col items-start lg:flex-row justify-between lg:items-center gap-5">
        <motion.div
          variants={fadeIn("right", "tween", 0, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <Portfoliocard img={img} />
        </motion.div>

        <div className="flex-1">
          <motion.h1
            variants={fadeIn("left", "tween", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            className="md:text-2xl text-xl lg:text-3xl font-bold pb-2"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn("left", "tween", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-xs md:text-sm text-gray-400 pb-3"
          >
            {desc}
          </motion.p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <motion.button
              variants={fadeIn("left", "tween", 0, 0)}
              initial="hidden"
              whileInView="show"
              type="button"
              className="text-white bg-softTheme duration-300 lg:w-auto hover:text-white hover:bg-theme font-medium rounded-lg text-sm md:text-base px-3 md:px-5 py-2.5 text-center me-2 mb-2 flex justify-center items-center gap-2"
            >
              See Demo
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} id="portfolio" className="relative">
      <div className="sticky top-5 z-10">
        <motion.h1
          variants={fadeIn("up", "tween", 0, 0.2)}
          initial="hidden"
          whileInView="show"
          className="pb-2 text-center md:text-3xl text-2xl lg:text-4xl font-bold"
        >
          Featured Works
        </motion.h1>

        <motion.div
          className="rounded-lg text-center bg-white h-1 md:h-2"
          style={{ scaleX }}
          variants={fadeIn("up", "tween", 0, 0.2)}
          initial="hidden"
          whileInView="show"
        ></motion.div>
      </div>

      {featuredWorks.map((works) => (
        <Single
          key={works.id}
          title={works.title}
          desc={works.desc}
          img={works.img}
          link={works.link}
        />
      ))}
    </div>
  );
};

export default Portfolio;
