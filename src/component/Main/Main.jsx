import { color, motion, scale, spring } from "framer-motion";
import TypeWriter from "./TypeWriter";
import MainText from "./MainText";

export default function Main() {
  return (
    <main id="home">
      <div className="main--elements-style">
        <div className="flex-center">
          <div className="main-bg-radius-picture animate__animated animate__rotateInDownLeft">
            <motion.img
              className="relaative"
              initial={{
                opacity: 0.05,
                x: "20rem",
                filter: `blur(4px)`,
                translateY: 20,
              }}
              animate={{
                opacity: 0.99,
                x: "0",
                filter: "blur(0px)",
                translateY: 0,
              }}
              transition={{ duration: 1 }}
              src="/myself-picture-website.png"
              width={"80%"}
              title="FaramarzRK"
            ></motion.img>
          </div>
        </div>

        <motion.div
          className="flex flex-col gap-2 select-none items-center justify-center"
          initial={{
            scale: 1.5,
            opacity: 0.1,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
        >
          <MainText />

          <div className="typewriter--mainpage">
            <TypeWriter delay={70} deleteSpeed={40} />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
