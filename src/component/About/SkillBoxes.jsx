import { motion } from "framer-motion";
import { getLevelPercent, skillDataWeb } from "../../api/data";
import { useEffect, useState } from "react";

export default function SkillBoxes({ children }) {
  const [scale, setScale] = useState(false);

  useEffect(() => {
    console.log("scale work");
  }, [scale]);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 select-none">
      {skillDataWeb.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
          className={`gpt-skillboxes
                  w-37 md:w-56 p-7 rounded-xl bg-white shadow ${
                    scale
                      ? "hover:shadow-[55px] hover:shadow-accent"
                      : "hvoer:shadow-2xs hover:shadow-accent"
                  } `}
        >
          <h2 className="text-lg md:text-xl font-semibold flex-center">
            {item.skill}
          </h2>
          <p className="text-sm opacity-70 mb-3">{item.level}</p>

          {/* Progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden ">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${getLevelPercent(item.level)}%` }}
              transition={{ duration: 1, delay: 1 }}
              onMouseEnter={() => {
                setScale(true);
              }}
              onMouseLeave={() => {
                setScale(false);
              }}
              className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
