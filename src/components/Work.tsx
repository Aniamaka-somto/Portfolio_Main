import ProjectCard from "./ProjectCard";
import p1 from "/src/assets/project-1.jpg";
import p2 from "/src/assets/project-2.jpg";
import p3 from "/src/assets/project-3.jpg";
import p4 from "/src/assets/project-4.jpg";
import p5 from "/src/assets/project-5.jpg";
import p6 from "/src/assets/project-6.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const works = [
    {
      imgSrc: p1,
      title: "Full stack music app",
      tags: ["API", "MVC", "Development"],
      projectLink: "/",
    },
    {
      imgSrc: p2,
      title: "Free stock photo app",
      tags: ["API", "SPA"],
      projectLink: "/",
    },
    {
      imgSrc: p3,
      title: "Recipe app",
      tags: ["Development", "API"],
      projectLink: "/",
    },
    {
      imgSrc: p4,
      title: "Real state website",
      tags: ["Web-design", "Development"],
      projectLink: "/",
    },
    {
      imgSrc: p5,
      title: "eCommerce website",
      tags: ["eCommerce", "Development"],
      projectLink: "/",
    },
    {
      imgSrc: p6,
      title: "vCard Personal portfolio",
      tags: ["Web-design", "Development"],
      projectLink: "/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="work" className="section">
      <div className="container" ref={ref}>
        <motion.h2
          className="headline-2 mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          Featured projects
        </motion.h2>

        <motion.div
          className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {works.map(({ imgSrc, title, tags, projectLink }, index) => (
            <ProjectCard
              img={imgSrc}
              title={title}
              tags={tags}
              link={projectLink}
              key={index}
              inView={isInView}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
