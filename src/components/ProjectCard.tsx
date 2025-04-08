import { motion } from "framer-motion";

const ProjectCard = ({
  img,
  link,
  tags,
  title,
  inView,
}: {
  img: string;
  link: string;
  tags: string[];
  title: string;
  inView: boolean;
  index: number;
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.1,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.3 + i * 0.05,
      },
    }),
  };

  const arrowVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 45,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors"
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.figure
        className="img-box aspect-square rounded-lg overflow-hidden"
        variants={imageVariants}
      >
        <motion.img
          src={img}
          alt={title}
          loading="lazy"
          className="img-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.figure>

      <div className="flex items-center justify-between gap-4 mt-4">
        <div>
          <motion.h3
            className="title-1 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {title}
          </motion.h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, i) => (
              <motion.span
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                key={i}
                custom={i}
                variants={tagVariants}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="h-11 w-11 rounded-lg grid items-center place-items-center bg-sky-400 text-zinc-950 shrink-0"
          variants={arrowVariants}
          whileHover="hover"
        >
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </motion.div>
      </div>

      <a href={link} target="_blank" className="absolute inset-0"></a>
    </motion.div>
  );
};

export default ProjectCard;
