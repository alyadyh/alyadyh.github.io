export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component size={28} className="fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" style={{ stopColor: "rgb(69, 212, 145)" }} />
          <stop offset="100%" style={{ stopColor: "rgb(56, 189, 248)" }} />
        </linearGradient>
      </svg>
    </>
  );
};
