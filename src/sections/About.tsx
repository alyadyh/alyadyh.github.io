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
    title: "Listening Music",
    emoji: "🎵",
    left: "5%",
    top: "67%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "10%",
    top: "32%",
  },
  {
    title: "Graphic Design",
    emoji: "🎨",
    left: "5%",
    top: "8%",
  },
  {
    title: "Playing Board Games",
    emoji: "♟️",
    left: "49%",
    top: "62%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "60%",
    top: "29%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "28%",
    top: "53%",
  },
  {
    title: "Badminton",
    emoji: "🏸",
    left: "75%",
    top: "48%",
  },
  {
    title: "Cycling",
    emoji: "🚴",
    left: "40%",
    top: "35%",
  },
  {
    title: "Cinephilia",
    emoji: "🎬",
    left: "70%",
    top: "10%",
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
              desc="Discover the tools and technologies behind my digital creations."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemWrapperClassName="-translate-x-1/2"
            />
          </Card>

          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond the Code"
              desc="The little things that bring joy and inspiration to my life."
              className="px-6 pt-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
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
