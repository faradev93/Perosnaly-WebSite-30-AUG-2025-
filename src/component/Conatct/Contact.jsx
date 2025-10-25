import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import AboutPart2 from "../About/AboutPart2";

export default function Contact({ color }) {
  return (
    <section 
      className={`flex-center flex-col gap-4 py-5 ${color}`}
      id="portfolio"
    >
      <motion.div className="flex-center">
        <AboutPart2
          titleImage={"Experience Vector"}
          subject={"Experience"}
          srcSvg={"https://www.svgrepo.com/show/412382/experience.svg"}
        />
      </motion.div>
      <motion.div
        className="Contact--main"
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          y: [0, -50, 0],
          scale: 1,
        }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactCard
          logoImage={"./snappfood_logo.png"}
          date={"2020 - 2021"}
          time={"(Full Time)"}
          JobDescription={"Account Manager"}
          abilities={[
            "Strong Communication Skills",
            "Patience and Composure",
            "Problem-Solving and Analytical Thinking ",
            "Teamwork +",
          ]}
        />

        <ContactCard
          logoImage={"./snappfood_logo.png"}
          date={"2021 - 2022"}
          time={"(Full Time)"}
          JobDescription={"NVR Content Team Lead"}
          abilities={[
            "Team training and structured planning",
            "Content team management for goals achievement",
            "Collaboration with related teams, including sales",
            "Managing content and digital production team",
            "Evaluating team performance and reporting to management",
          ]}
        />

        <ContactCard
          logoImage={"./snappfood_logo.png"}
          date={"2022 - 2024"}
          time={"(Full Time)"}
          JobDescription={"IT Support"}
          abilities={["Strong Communication Skills", "Patience and Composure"]}
        />

        <ContactCard
          logoImage={"./crafteo.png"}
          date={"2024 - 2025"}
          time={"(Part Time)"}
          JobDescription={"Front End Dev"}
          abilities={["React JS", "Tailwind HWork", "Ui/UX "]}
        />
      </motion.div>
    </section>
  );
}
