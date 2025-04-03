import React from "react";
import { SkillCard } from "./SkillCard";
import figma from "/src/assets/figma.svg";
const Skills = () => {
  const skillItem = [
    {
      imgSrc: figma,
      label: "Figma",
      desc: "Design tool",
    },
    {
      imgSrc: "/src/assets/css3.svg",
      label: "CSS",
      desc: "User Interface",
    },
    {
      imgSrc: "/src/assets/javascript.svg",
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc: "/src/assets/nodejs.svg",
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: "/src/assets/expressjs.svg",
      label: "ExpressJS",
      desc: "Node Framework",
    },
    {
      imgSrc: "/src/assets/mongodb.svg",
      label: "MongoDB",
      desc: "Database",
    },
    {
      imgSrc: "/src/assets/react.svg",
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc: "/src/assets/tailwindcss.svg",
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
