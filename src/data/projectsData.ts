import eventRadarWebPage from "../assets/images/projects/event-radar-web.png";
import ibarberpalPage from "../assets/images/projects/ibarberpal.png";
import kulinariaPage from "../assets/images/projects/kulinaria.png";

import {
  SiBootstrap,
  SiJavascript,
  SiLaravel,
  SiCss,
  SiHtml5,
  SiXampp,
  SiPhp,
  SiSass,
  SiNodedotjs,
  SiBlender,
  SiCanva,
} from "@icons-pack/react-simple-icons";

export const portfolioProjects = [
  {
    company: "Front-end Developer",
    year: "2023",
    title: "EventRadar",
    description:
      "EventRadar is a student website to democratize youth event information ranging from webinars and competitions.",
    icons: [
      { title: "NodeJS", iconType: SiNodedotjs },
      { title: "Bootstrap", iconType: SiBootstrap },
      { title: "SASS", iconType: SiSass },
    ],
    link: "https://github.com/alyadyh/EventRadar",
    image: eventRadarWebPage,
  },
  {
    company: "Full Stack Developer",
    year: "2023",
    title: "iBarberPal",
    description:
      "iBarberPal is a web application that helps barbershop customers in choosing hairstyles to be more effective so they are not confused and doubtful if the specified hairstyle does not match the shape of their face.",
    icons: [
      { title: "Laravel", iconType: SiLaravel },
      { title: "Bootstrap", iconType: SiBootstrap },
      { title: "XAMPP", iconType: SiXampp },
      { title: "PHP", iconType: SiPhp },
    ],
    link: "https://github.com/alyadyh/iBarberPal",
    image: ibarberpalPage,
  },
  {
    company: "Front-end Developer",
    year: "2022",
    title: "Kulinaria Landing Page",
    description:
      "Kulinaria website is a platform that introduces Indonesian culinary culture by providing downloadable AR cards and access to the Kulinaria AR mobile app for an interactive 3D experience.",
    icons: [
      { title: "HTML", iconType: SiHtml5 },
      { title: "CSS", iconType: SiCss },
      { title: "JavaScript", iconType: SiJavascript },
      { title: "Blender 3D", iconType: SiBlender },
      { title: "Canva", iconType: SiCanva },
    ],
    link: "https://drive.google.com/file/d/1GxhfrABnqeXqkZLBQQm8NmE8NppBM7sE/view?usp=sharing",
    image: kulinariaPage,
  },
];
