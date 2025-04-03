import ProjectCard from "./ProjectCard";
import p1 from "/src/assets/project-1.jpg";
import p2 from "/src/assets/project-2.jpg";
import p3 from "/src/assets/project-3.jpg";
import p4 from "/src/assets/project-4.jpg";
import p5 from "/src/assets/project-5.jpg";
import p6 from "/src/assets/project-6.jpg";

const Work = () => {
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
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-2 reveal-up">Featured projects</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              img={imgSrc}
              title={title}
              tags={tags}
              link={projectLink}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
