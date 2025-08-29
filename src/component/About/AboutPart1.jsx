import { motion } from "framer-motion";
import AboutBoxs from "./AboutBoxs";
import { useState } from "react";

export default function AboutPart1({ bgcolor, titleImage }) {
  const [active, setActive] = useState("scale-155 rotate-60");

  return (
    <div className="container mx-auto">
      <div
        className={`flex-col flex-center gap-4 md:flex-row md:gap-5 ${bgcolor} py-5`}
      >
        {/* part-1 */}

        <motion.div
          className={`bg-transparent py-5 flex md:size-1/2 md:justify-evenly`}
          initial={{ rotateY: 180, rotateX: 300, opacity: 0 }}
          whileInView={{ rotateY: 0, rotateX: 0, opacity: 1, y: [0, -20, 0] }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <AboutBoxs />
        </motion.div>

        {/* Part-2 */}
        <div
          className={`animate__animated animate__fadeInUp size-11 md:size-1/3 transition-all duration-300 ${
            active ? "scale-100 rotate-0" : "scale-120 rotate-180"
          }`}
        >
          <img
            src="https://www.svgrepo.com/show/336829/quote.svg"
            title={titleImage}
            alt={titleImage}
            onMouseLeave={() => {
              setActive(!active);
            }}
            onMouseEnter={() => {
              setActive(!active);
            }}
          />
        </div>

        {/* part-3 */}

        <motion.div className="h-fit px-5 font-rubik animate__animated animate__fadeInUp text-black/70 md:border-l-4 md:border-accent/50 ">
          <div className="text-justify select-none leading-6 tracking-tighter">
            <p>
              Hello, I am Faramarz, a 32-year-old{" "}
              <span className="underline underline-offset-4 decoration-2 hover:decoration-1 transition-all duration-500">
                Front-End
              </span>{" "}
              developer with a passion for building efficient solutions and
              learning new technologies. I started programming in 2024 and have
              been deepening my expertise since 2025. Alongside coding, I
              actively study startups and business models, trade
              cryptocurrencies, and enjoy following my favorite series.
              <br />
            </p>

            <motion.hr
              className="border-t-2 border-primary/30 mx-auto w-1/3 border-dashed mt-7"
              initial={{ x: "10rem", z: 150, opacity: 0.8, fillOpacity: 0.1 }}
              animate={{ opacity: 1, z: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <p>
              <br />I have a strong background in computer hardware, practical
              experience with{" "}
              <span className="underline underline-offset-4 decoration-2 hover:decoration-1 transition-all duration-500 hover:-translate-x-64">
                Google Sheets
              </span>{" "}
              , and I am highly interested in{" "}
              <span className="underline underline-offset-4 decoration-2 hover:decoration-1 transition-all duration-500 hover:-translate-x-64">
                teaching and knowledge sharing
              </span>{" "}
              . My strengths include creativity, adaptability, and a
              collaborative spirit, which help me thrive in team environments
              and bring innovative ideas to the table.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
