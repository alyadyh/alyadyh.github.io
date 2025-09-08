export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component size={28} className="fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" style={{ stopColor: "rgb(218, 178, 255)" }} />
          <stop offset="100%" style={{ stopColor: "rgb(56, 189, 248)" }} />
        </linearGradient>
      </svg>
    </>
  );
};

export const TechProjectIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="w-7 h-7 md:w-9 md:h-9 fill-[url(#tech-project-icon-gradient)]" />
      <svg className="absolute size-0">
        <linearGradient id="tech-project-icon-gradient">
          <stop offset="0%" style={{ stopColor: "rgb(218, 178, 255)" }} />
          <stop offset="100%" style={{ stopColor: "rgb(56, 189, 248)" }} />
        </linearGradient>
      </svg>
    </>
  );
};
