import { color, motion, scale, spring } from "framer-motion";

export default function AboutBoxs({ text, sizeDiv }) {
  const textMain = () => {
    if (text) return text;
    else return "I love being a developer!";
  };

  const sizediv = sizeDiv || "";

  return (
    <div className={`${sizediv}`}>
      <motion.h1 className="font-orbitron font-bold text-primary p-2 whitespace-nowrap text-2xl select-none text-center">
        {textMain()}
      </motion.h1>
    </div>
  );
}
