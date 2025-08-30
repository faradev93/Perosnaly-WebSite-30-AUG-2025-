import { motion } from "framer-motion";
import AboutBoxs from "./AboutBoxs";
import SkillBox from "./SkillBox";
import SkillBubblesGrid from "./SkillBubbles";
import { useState } from "react";

export default function AboutPart2({ bgcolor, titleImage }) {
  const [active, setActive] = useState("scale-155 rotate-60");

  return (
    <div className={`flex-center md:flex-row ${bgcolor} py-5`}>
      {/* part-1 */}
      <motion.div
        className={`bg-transparent py-5 flex md:size-1/3 md:justify-evenly`}
        initial={{ rotateY: 180, rotateX: 300, opacity: 0 }}
        animate={{ rotateY: 0, rotateX: 0, opacity: 1, y: [0, -20, 0] }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <AboutBoxs text={"Skills"}/>
      </motion.div>

      {/* Part-2 */}
      <motion.div
        className={`animate__animated animate__fadeInUp size-12 md:size-1/12 ml-2 hover:rotate-[-6px] transition-all duration-300 ${
          active ? "scale-100 rotate-60" : "scale-140"
        }`}
      >
        <img
          src="https://www.svgrepo.com/show/90790/science.svg"
          alt={titleImage}
          title={titleImage}
          onMouseLeave={() => {
            setActive(!active);
          }}
          onMouseEnter={() => {
            setActive(!active);
          }}
        />
      </motion.div>

      {/* part-3 */}

      <motion.div className="h-fit px-5 font-rubik animate__animated animate__fadeInUp text-black/70 md:border-l-4 md:border-accent/50 ">
        <div className="grid grid-cols-4 font-comfortaa mx-5 size-fit md:gap-4"></div>
      </motion.div>
    </div>
  );
}
