import { SkillCard } from "./SkillCard";
import figma from "/src/assets/figma.svg";
import CSS from "/src/assets/css3.svg";
import Nextjs from "/src/assets/Nextjs.svg";
import NodeJS from "/src/assets/nodejs.svg";
import ExpressJS from "/src/assets/expressjs.svg";
import MongoDB from "/src/assets/mongodb.svg";
import Reactimg from "/src/assets/react.svg";
import TailwindCSS from "/src/assets/tailwindcss.svg";
import { motion } from "framer-motion";

const Skills = () => {
  const skillItem = [
    {
      imgSrc: figma,
      label: "Figma",
      desc: "Design tool",
    },
    {
      imgSrc: CSS,
      label: "CSS",
      desc: "User Interface",
    },
    {
      imgSrc: Nextjs,
      label: "Nextjs",
      desc: "Framework",
    },
    {
      imgSrc: NodeJS,
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: ExpressJS,
      label: "ExpressJS",
      desc: "Node Framework",
    },
    {
      imgSrc: MongoDB,
      label: "MongoDB",
      desc: "Database",
    },
    {
      imgSrc: Reactimg,
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc: TailwindCSS,
      label: "TailwindCSS",
      desc: "User Interface",
    },
  ];

  // Heading animations
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 70,
      },
    },
  };

  // Paragraph animations
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 70,
        delay: 0.1,
      },
    },
  };

  return (
    <section className="section">
      <div className="container">
        <motion.h2
          className="headline-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          variants={headingVariants}
        >
          Essential tools I use
        </motion.h2>

        <motion.p
          className="text-zinc-400 mt-3 mb-8 max-w-[50ch]"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          variants={paragraphVariants}
        >
          Explore the cutting-edge technologies and tools I leverage to build
          exceptional, high-performing websites & applications.
        </motion.p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, index) => (
            <SkillCard
              img={imgSrc}
              label={label}
              desc={desc}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
