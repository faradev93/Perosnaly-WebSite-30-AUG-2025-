import { motion } from "framer-motion";
import TestJson from "./TestJson";

export default function Contact({ color }) {
  return (
    <section className={`flex-center ${color}`} id="contact">
      <motion.div
        initial={{ opacity: 0, backgroundColor: "#ffffff", color: "#000000" }}
        animate={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          scale: 1.5,
          backgroundColor: "#000000",
          color: "#ffffff",
        }}
        transition={{ duration: 0.5 }}
      >
        salam
      </motion.div>
      <TestJson/>
    </section>
  );
}
