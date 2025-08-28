import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import { CardHeader } from "../components/CardHeader";
import { ToolboxItems } from "../components/ToolboxItems";
import bookImage from "../assets/images/book-cover.png";
import mapImage from "../assets/images/map.png";
import winkMemoji from "../assets/images/wink-memoji.png";
import Image from "next/image";
import {
  SiAndroidstudio,
  SiBootstrap,
  SiDocker,
  SiFigma,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiVuedotjs,
  SiDotnet,
} from "@icons-pack/react-simple-icons";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: SiJavascript,
  },
  {
    title: "TypeScript",
    iconType: SiTypescript,
  },
  {
    title: "React",
    iconType: SiReact,
  },
  {
    title: "Next.js",
    iconType: SiNextdotjs,
  },
  {
    title: "Vue.js",
    iconType: SiVuedotjs,
  },
  {
    title: "React Native",
    iconType: SiReact,
  },
  {
    title: "Tailwind CSS",
    iconType: SiTailwindcss,
  },
  {
    title: "Bootstrap",
    iconType: SiBootstrap,
  },
  {
    title: "Supabase",
    iconType: SiSupabase,
  },
  {
    title: "PostgreSQL",
    iconType: SiPostgresql,
  },
  {
    title: ".NET",
    iconType: SiDotnet,
  },
  {
    title: "Android Studio",
    iconType: SiAndroidstudio,
  },
  {
    title: "Docker",
    iconType: SiDocker,
  },
  {
    title: "Figma",
    iconType: SiFigma,
  },
  {
    title: "Unity",
    iconType: SiUnity,
  },
];

const hobbies = [
  {
    title: "Music",
    emoji: "🎵",
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Graphic Design",
    emoji: "🎨",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Cooking",
    emoji: "🍳",
  },
  {
    title: "Badminton",
    emoji: "🏸",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="A Glimpse Into My World"
          desc="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              desc="Explore the book shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>

          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              desc="Explore the technologies and tools I used to craft exceptional
                digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemWrapperClassName="-translate-x-1/2"
            />
          </Card>

          <Card>
            <CardHeader
              title="Beyond the Code"
              desc="Explore my interests and hobbies beyond the digital realm."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <Image src={mapImage} alt="Map" />
            <Image src={winkMemoji} alt="Wink Memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
