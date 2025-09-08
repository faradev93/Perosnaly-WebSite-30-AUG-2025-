import { motion } from "framer-motion";
import AboutBoxs from "./AboutBoxs";
import AboutPart1 from "./AboutPart1";
import { useState } from "react";
import AboutPart2 from "./AboutPart2";
import SkillBoxes from "./SkillBoxes";

export default function About({ color }) {
  const bgcolor = color || "bg-transparent";

  return (
    <section
      className={`flex-center flex-col gap-2 md:gap-5 ${bgcolor} py-5 px-5`}
      id="about"
    >
      <AboutPart1 bgcolor={bgcolor} titleImage={"QouteVector"} />
      <AboutPart2
        bgcolor={bgcolor}
        titleImage={"SkillsVector"}
        subject={"Skills"}
        srcSvg={"https://www.svgrepo.com/show/90790/science.svg"}
      />
      <SkillBoxes />
    </section>
  );
}
