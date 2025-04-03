const ProjectCard = ({
  img,
  link,
  tags,
  title,
  classes,
}: {
  img: string;
  link: string;
  tags: string[];
  title: string;
  classes: string;
}) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg">
        <img src={img} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4 ">
        <div className="">
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, index) => (
              <span
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                key={index}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="h-11 w-11 rounded-lg grid items-center place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>
      <a href={link} target="_blank" className="absolute inset-0"></a>
    </div>
  );
};

export default ProjectCard;
