import { motion } from "framer-motion";

interface ReviewCardProps {
  reviews: string;
  name: string;
  img: string;
  company: string;
}
const ReviewCard: React.FC<ReviewCardProps> = ({
  reviews,
  name,
  img,
  company,
}) => {
  const rating = new Array(5);
  rating.fill({ icon: "star", style: { fontVariationSettings: '"FILL" 1' } });

  return (
    <motion.div
      className="bg-zinc-800 p-5 rounded-xl min-w-[320px] w-[320px] lg:w-[420px] flex flex-col lg:min-w-[420px] h-full"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex items-center gap-1 mb-3">
        {rating.map(({ icon, style }, index) => (
          <motion.span
            className="material-symbols-rounded text-yellow-300 text-[18px]"
            key={index}
            style={style}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.2 }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      <p className="mb-4 flex-grow">{reviews}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <motion.img
            src={img}
            alt={name}
            height={44}
            width={44}
            loading="lazy"
            className="img-cover"
            whileHover={{ scale: 1.1 }}
          />
        </figure>

        <div className="">
          <p>{name}</p>
          <p className="text-xs text-zinc-400 -tracking-wider">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
