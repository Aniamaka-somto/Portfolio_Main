const About = () => {
  const aboutItems = [
    {
      label: "Project done",
      number: 10,
    },
    {
      label: " Years of experience",
      number: 3,
    },
  ];
  return (
    <section id="about">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Somto, a professional web developer passionate
            about crafting visually stunning and highly functional websites. By
            combining creativity with technical expertise, I transform your
            vision into digital masterpieces that excel in both appearance and
            performance.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="font-semibold text-sky-400 md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
