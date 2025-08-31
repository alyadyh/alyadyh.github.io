import Image from "next/image";
import memojiImage from "../assets/images/memoji-computer.png";
import { ArrowDown } from "lucide-react";
import { HeroBackground } from "../components/HeroBackground";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <HeroBackground />

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[150px]"
            alt="Person peeking from behind the laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping scale-[1.2]"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl md:text-5xl font-serif text-center mt-8 tracking-wide">
              Hi, I&apos;m Alya Dhiya
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I&apos;m a passionate software engineer with a focus on building
              user-friendly applications.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a href="#projects">
              <button className="inline-flex items-center gap-2 border border-white/15 px-5 h-12 rounded-xl cursor-pointer">
                <span className="font-semibold">Explore my work</span>
                <ArrowDown size={18} />
              </button>
            </a>

            <a href="#contact">
              <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer">
                <span className="text-2xl">👋</span>
                <span className="font-semibold">Let&apos;s connect</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
