import StarIcon from "../assets/icons/star.svg";

export const CardHeader = ({
  title,
  desc,
  className,
}: {
  title: string;
  desc: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="text-3xl font-serif">{title}</h3>
      </div>
      <p className="text-xl text-white/60 mt-2">{desc}</p>
    </div>
  );
};
