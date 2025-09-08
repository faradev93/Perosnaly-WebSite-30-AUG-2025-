import { motion } from "framer-motion";
import { useState } from "react";

const ContactCard = ({
  logoImage,
  date,
  JobDescription,
  abilities = [],
  time,
}) => {
  const [ring, setRing] = useState(false);
  //
  const dateShow = date ? date : null;
  //
  return (
    <motion.div
      onMouseEnter={() => {
        setRing(!ring);
      }}
      onMouseLeave={() => {
        setRing(!ring);
      }}
      id="box"
      className={`contact--card ${
        ring ? "ring-1 ring-netural" : ""
      } bg-white/100`}
      initial={{ opacity: 0, color: "#000000" }}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.05,
        color: "#000000",
      }}
      transition={{ duration: 1.5 }}
    >
      <motion.img
        className="w-20 py-4 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40"
        whileTap={{
          scale: 1.2,
          transition: { yoyo: Infinity },
        }}
        src={logoImage}
        alt="Company Logo"
        title="SFLOGO"
      />

      <div className="text-rubik flex-center flex-col gap-2 text-[0.5rem] sm:text-xl">
        <p className="text-center">{JobDescription}</p>
        <p
          className="text-center text-xs font-extrabold whitespace-nowrap
               bg-gradient-to-r from-accent via-purple-500 to-secondary 
               text-transparent bg-clip-text 
               drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)] 
               animate-pulse"
        >
          {dateShow}
        </p>
        <p className="text-xs bg-accent/50 p-2 rounded-4xl whitespace-nowrap">{time}</p>
      </div>

      <div className="flex-center font-comfortaa pl-6">
        <ol className="text-[0.5rem] font-bold list-disc pl-8 text-start w-40 sm:w-60 flex flex-col gap-2 px-2 overflow-x-clip sm:text-xs border-l-2 border-accent/50">
          {abilities.map((ability, index) => {
            return (
              <li
                className="hover:underline hover:underline-offset-2 transition-all duration-700"
                key={index}
              >
                {ability}
              </li>
            );
          })}
        </ol>
      </div>
    </motion.div>
  );
};

export default ContactCard;
