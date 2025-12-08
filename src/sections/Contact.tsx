import { ArrowUpRight } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
// import cv from "@/assets/documents/resume.pdf";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 pt-14 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-purple-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage})` }}
          ></div>
          <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let&apos;s Connect
                </h2>
                <p className="mt-2 md:text-base text-sm">
                  I&apos;m always up for new opportunities&mdash;whether
                  it&apos;s building cool projects, brainstorming fresh ideas,
                  or teaming up to bring your vision to life.
                </p>
              </div>
              <div className="flex mt-4 gap-4 justify-center md:justify-start">
                <a href="mailto:alya.mdyh@gmail.com?subject=Hello Alya!" target="_blank">
                  <FaEnvelope size={30} className="hover:text-purple-700" />
                </a>
                <a
                  href="https://linkedin.com/in/alya-mardhiyyah/"
                  target="_blank"
                >
                  <FaLinkedin size={30} className="hover:text-purple-700" />
                </a>
                <a href="https://github.com/alyadyh/" target="_blank">
                  <FaGithub size={30} className="hover:text-purple-700" />
                </a>
                <a href="https://instagram.com/alyadya_" target="_blank">
                  <FaInstagram size={30} className="hover:text-purple-700" />
                </a>
              </div>
            </div>
            <div>
              <a href="/documents/resume.pdf" target="_blank">
                <button className="text-white bg-gray-900 hover:bg-purple-300/50 active:bg-purple-300/50 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max cursor-pointer border border-gray-900/50 hover:border-white active:border-white">
                  <span className="font-semibold">Check out my CV</span>
                  <ArrowUpRight size={16} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
