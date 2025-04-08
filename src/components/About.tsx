import { motion } from "framer-motion";

const About = () => {
  const aboutItems = [
    {
      label: "Project done",
      number: 10,
    },
    {
      label: "Years of experience",
      number: 3,
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Stats animation variants
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  // Number counter animation
  const Counter = ({
    number,
    duration = 2,
  }: {
    number: number;
    duration?: number;
  }) => {
    return (
      <motion.span
        className="text-2xl font-bold md:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration }}
        >
          {Math.floor(number)}
        </motion.span>
      </motion.span>
    );
  };

  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="bg-zinc-800/50 p-7 rounded-2xl md:p-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
        >
          <motion.p
            className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]"
            variants={textVariants}
          >
            Welcome! I&apos;m Somto, a professional web developer passionate
            about crafting visually stunning and highly functional websites. By
            combining creativity with technical expertise, I transform your
            vision into digital masterpieces that excel in both appearance and
            performance.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 md:gap-7"
            variants={textVariants}
          >
            {aboutItems.map(({ label, number }, key) => (
              <motion.div
                key={key}
                variants={statsVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="flex items-center md:mb-2">
                  <Counter number={number} />
                  <motion.span
                    className="font-semibold text-sky-400 md:text-3xl"
                    initial={{ rotate: 0 }}
                    whileInView={{
                      rotate: [0, 20, 0],
                      transition: { delay: 1.5, duration: 0.5 },
                    }}
                    viewport={{ once: false }}
                  >
                    +
                  </motion.span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
