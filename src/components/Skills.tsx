import { SkillCard } from "./SkillCard";
import figma from "/src/assets/figma.svg";
import CSS from "/src/assets/css3.svg";
import Nextjs from "/src/assets/Nextjs.svg";
import NodeJS from "/src/assets/nodejs.svg";
import ExpressJS from "/src/assets/expressjs.svg";
import MongoDB from "/src/assets/mongodb.svg";
import Reactimg from "/src/assets/react.svg";
import TailwindCSS from "/src/assets/tailwindcss.svg";
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
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential tools i use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Explore the cutting-edge technologies and tools I leverage to build
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => {
            return (
              <SkillCard
                img={imgSrc}
                label={label}
                desc={desc}
                key={key}
                classes="reveal-up"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
