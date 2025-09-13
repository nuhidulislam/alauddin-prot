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
import { useContext, useState } from "react";
import MenuContext from "../Menucontext";
import Toggle from "./togglebutton/Toggle";

const Floatbar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: { type: "spring", stiffness: 20 },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const { activeMenu, setActiveMenu } = useContext(MenuContext);

  return (
    <motion.div
      variants={variants}
      animate={open ? "open" : "closed"}
      className="lg:hidden flex justify-center items-center sidebarBg"
    >
      <div className="flex flex-col items-center">
        <Toggle setOpen={setOpen} />

        <div className="pb-5">
          <div className="capitalize flex flex-col items-center gap-1">
            <a
              href="https://www.facebook.com/md.alauddin.147287"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/alauddinn.png"
                alt="Md Alauddin"
                className="h-20 w-20 rounded-[50%] border-spacing-4 border-[5px] border-[#008170]"
              />
            </a>
            <h1 className="font-outfit text-center font-semibold text-2xl tracking-wide pt-2">
              Md Alauddin
            </h1>
            <p className="text-center">
              <span className="text-softTheme font-bold">Frontend web</span>{" "}
              Developer
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {[
            { id: "home", label: "Home", icon: faHouse },
            { id: "about", label: "About", icon: faAddressCard },
            { id: "services", label: "Services", icon: faLaptopFile },
            { id: "skills", label: "Skils", icon: faScrewdriverWrench },
            { id: "education", label: "Education", icon: faGraduationCap },
            { id: "portfolio", label: "Portfolio", icon: faMap },
            { id: "contact", label: "Contact", icon: faPhoneVolume },
          ].map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex justify-start items-center gap-4 transition"
              style={{ color: activeMenu === id ? "#008170" : "white" }}
              onClick={() => setActiveMenu(id)}
            >
              <FontAwesomeIcon icon={icon} className="h-6" />
              <h3 className="text-md font-semibold">{label}</h3>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Floatbar;
