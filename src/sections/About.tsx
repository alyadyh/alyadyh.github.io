import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import { CardHeader } from "../components/CardHeader";
import { ToolboxItems } from "../components/ToolboxItems";
import bookImage from "../assets/images/book-cover.png";
import mapImage from "../assets/images/map.png";
import winkMemoji from "../assets/images/wink-memoji.png";
import smileMemoji from "../assets/images/smile-memoji.png";
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
    top: "5%",
  },
  {
    title: "Chess",
    emoji: "♟️",
    left: "58%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "55%",
    top: "30%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "35%",
    top: "53%",
  },
  {
    title: "Badminton",
    emoji: "🏸",
    left: "73%",
    top: "43%",
  },
  {
    title: "Cycling",
    emoji: "🚴",
    left: "40%",
    top: "15%",
  },
  {
    title: "Cinephilia",
    emoji: "🎬",
    left: "70%",
    top: "0%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="A Glimpse Into My World"
          desc="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                desc="You speak what you read."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px] flex flex-col gap-4 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                desc="Discover the tools and technologies behind my digital creations."
                className=""
              />
              <div>
                <ToolboxItems items={toolboxItems} className="" />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemWrapperClassName="-translate-x-1/2"
                />
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                desc="The little things that bring joy and inspiration to my life."
                className="px-6 pt-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="object-cover w-full h-full object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30 after:bg-gradient-to-r after:from-emerald-400 after:to-sky-400 after:-z-10">
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
