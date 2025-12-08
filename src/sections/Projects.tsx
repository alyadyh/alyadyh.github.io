import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { portfolioProjects } from "@/data/projectsData";
import { TechProjectIcon } from "@/components/TechIcon";
import { Tooltip } from "@/components/Tooltip";

export default function ProjectsSection() {
  return (
    <section id="projects" className="pb-20 lg:py-28 relative">
      {/* Sentinel for intersection observer */}
      <div id="projects-sentinel" className="h-[1px] w-full"></div>

      <div className="container">
        <SectionHeader
          title="My Projects"
          eyebrow="Some things I've built"
          desc="Check out some of my noteworthy projects."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:px-10 lg:pt-16 lg:px-20 md:pt-12 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 30}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-purple-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <p
                    className="mt-4 md:mt-5 text-sm md:text-base text-white/50 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  <ul className="flex flex-row gap-4 md:gap-5 mt-4 md:mt-5">
                    {project.icons.map((icon, index) => (
                      <li key={index} className="flex text-sm md:text-base">
                        <Tooltip label={icon.title}>
                          <TechProjectIcon component={icon.iconType} />
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-purple-300/50 active:bg-purple-300/50 hover:text-white active:text-white cursor-pointer border border-white">
                      <span>View Project</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
