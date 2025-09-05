import { color, motion, scale, spring } from "framer-motion";
import Connections from "./Connections";

export default function MainText() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center animate__animated animate__fadeInDown">
        <motion.h6 className="text-secondary text-2xl font-orbitron font-bold">
          Hi There I'm
        </motion.h6>
        <motion.h1 className="text-2xl font-bold md:text-4xl font-rubik">
          Faramarz
        </motion.h1>
        <motion.h1 className="text-3xl font-extrabold md:text-5xl font-rubik">
          Rezakhanlou
        </motion.h1>
        <Connections/>
      </div>
    </div>
  );
}
