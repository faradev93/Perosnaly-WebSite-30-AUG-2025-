// SkillBubbles.jsx
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: "Expert", grad: "from-yellow-300 to-amber-500" },
  { name: "React", level: "Advanced", grad: "from-cyan-400 to-blue-500" },
  { name: "Node.js", level: "Advanced", grad: "from-lime-400 to-emerald-500" },
  { name: "CSS", level: "Advanced", grad: "from-pink-400 to-fuchsia-500" },
  { name: "Git", level: "Intermediate", grad: "from-orange-400 to-red-500" },
];

function SkillBubble({ name, level, grad, i }) {
  return (
    <motion.div
      className="
        group relative size-28 md:size-54 p-[2px] rounded-full
        bg-gradient-to-br shadow-lg
      "
      style={{ willChange: "transform" }}
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        duration: 2.6,
        delay: 0.06 * i,
      }}
      whileHover={{
        scale: 1.06,
        rotate: 2,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >
      {/* outer gradient ring */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${grad} opacity-60 blur-md transition-all duration-500 group-hover:opacity-90`}
      />

      {/* inner glass circle */}
      <div className="relative z-10 grid place-items-center size-full rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30 overflow-hidden">
        {/* subtle animated glow */}
        <div className="pointer-events-none absolute -inset-10 rotate-12 bg-gradient-to-r from-white/10 via-white/40 to-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

        <div className="flex flex-col items-center">
          <span className="text-sm md:text-base font-semibold tracking-tight select-none">
            {name}
          </span>

          {/* level pill (reveals on hover) */}
          <span
            className="
            mt-1 px-2 py-0.5 rounded-full text-[10px] md:text-xs
            bg-black/50 text-white/90 border border-white/20
            opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
          "
          >
            {level}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillBubblesGrid() {
  return (
    <div className="flex-center gap-6 md:gap-8">
      {skills.map((s, i) => (
        <SkillBubble
          key={s.name}
          name={s.name}
          level={s.level}
          grad={s.grad}
          i={i}
        />
      ))}
    </div>
  );
}
