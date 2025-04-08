import { motion } from "framer-motion";

export const SkillCard = ({
  img,
  label,
  desc,
  index,
}: {
  img: string;
  label: string;
  desc: string;
  index: number;
}) => {
  return (
    <motion.div
      className="flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          delay: 0.1 * index, // Stagger based on index
        },
      }}
      viewport={{ margin: "-50px" }}
    >
      <motion.figure
        className="bg-zinc-700/50 rounded-lg overflow-hidden h-12 w-12 p-2 group-hover:bg-zinc-900 transition-colors"
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, -3, 0],
          transition: { duration: 0.3 },
        }}
      >
        <img src={img} alt={label} width={32} height={32} />
      </motion.figure>
      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
};
