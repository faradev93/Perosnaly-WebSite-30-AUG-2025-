import { motion } from "framer-motion";

import { useState } from "react";

export default function MsgConnectionItem({
  messenger,
  AddressSVG,
  href,
  title,
}) {
  const [change, setChange] = useState(true);
  return (
    <motion.li
      className={`border-2 rounded-full p-2 hover:backdrop-blur-2xl transition-all duration-500 ${
        change ? "shadow-2xl shadow-blue-600" : null
      }`}
      whileHover={{ boxShadow: "rgb(6 0 255 / 67%) -5px 1px 0px 0px" }}
      transition={{ duration: 0.5, repeat: Infinity }}
      onMouseEnter={() => {
        setChange(!change);
      }}
    >
      <a href={href} target="_blank" title={title}>
        <img className="flex-center" src={AddressSVG} width={20}></img>
      </a>
    </motion.li>
  );
}
