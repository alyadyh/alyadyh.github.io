import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import { TechIcon } from "../components/TechIcon";
import { CardHeader } from "../components/CardHeader";
import StarIcon from "../assets/icons/star.svg";
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
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              desc="Explore the book shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>

          <Card>
            <CardHeader
              title="My Toolbox"
              desc="Explore the technologies and tools I used to craft exceptional
                digital experiences."
            />
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg">
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
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
