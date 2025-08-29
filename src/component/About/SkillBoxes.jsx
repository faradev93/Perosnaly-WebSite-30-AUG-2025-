import { motion } from "framer-motion";
import { getLevelPercent, skillDataWeb } from "../../api/data";
import { useState } from "react";

export default function SkillBoxes({ children }) {
  const [scale, setScale] = useState(false);

  return (
    <div className="md:flex md:justify-center md:items-center md:flex-wrap gap-6 flex flex-wrap max-sm:w-1/2 max-sm:h-1">
      {skillDataWeb.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
          className={`gpt-skillboxes ${scale ? "scale-150" : "scale-100"}`}
        >
          {/* Subject */}
          <h2 className="text-lg md:text-xl font-semibold">{item.skill}</h2>
          <p className="text-sm opacity-70 mb-3">{item.level}</p>

          {/* Progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden ">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${getLevelPercent(item.level)}%` }}
              transition={{ duration: 1, delay: 1 }}
              onMouseEnter={() => {
                setScale(!scale);
              }}
              className={`h-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 `}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
