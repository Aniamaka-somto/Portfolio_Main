const ReviewCard = ({
  reviews,
  name,
  img,
  company,
}: {
  reviews: string;
  name: string;
  img: string;
  company: string;
}) => {
  const rating = new Array(5);
  rating.fill({ icon: "star", style: { fontVariationSettings: '"FILL" 1' } });
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {rating.map(({ icon, style }, index) => (
          <span
            className="material-symbols-rounded text-yellow-300 text-[18px]"
            key={index}
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>
      <p className="">{reviews}</p>
      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={img}
            alt={name}
            height={44}
            width={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>
        <div className="">
          <p>{name}</p>
          <p className="text-xs text-zinc-400 -tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
