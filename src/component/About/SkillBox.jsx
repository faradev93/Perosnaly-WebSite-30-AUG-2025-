import { motion } from "framer-motion";

export default function SkillBox({ bgColor, skill, level }) {
  const bgBox =
    bgColor === "js"
      ? "bg-yellow-300"
      : bgColor === "css"
      ? "bg-blue-300"
      : bgColor === "react"
      ? "bg-cyan-300"
      : bgColor === "html"
      ? "bg-orange-300"
      : "bg-gray-300";

  const skillshow = skill || "NOThing";
  const levelshow = level || "NOThing Level";

  return (
    <motion.div 
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className={`flex-center size-30 ${bgBox} rounded-2xl flex-col gap-2`}
      >
        <p>{skillshow}</p>
        <p>{levelshow}</p>
      </div>
    </motion.div>
  );
}
