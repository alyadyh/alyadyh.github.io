import eventRadarWebPage from "@/assets/images/projects/event-radar-web.png";
import eventRadarMobile from "@/assets/images/projects/event-radar-mobile.png";
import ibarberpalPage from "@/assets/images/projects/ibarberpal.png";
import kulinariaPage from "@/assets/images/projects/kulinaria.png";
import pokedexPage from "@/assets/images/projects/pokedex.png";
import amostMobile from "@/assets/images/projects/amost.png";
import jasarumahkuMobile from "@/assets/images/projects/jasarumahku.png";
import loneslyscapeAR from "@/assets/images/projects/lonelyscape.png";

import NativewindIcon from "@/assets/icons/nativewind-logo.svg";

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
  SiMui,
  SiReact,
  SiReactrouter,
  SiTypescript,
  SiAsana,
  SiFigma,
  SiExpo,
  SiNextdotjs,
  SiSupabase,
  SiVercel,
} from "@icons-pack/react-simple-icons";

export const portfolioProjects = [
  {
    company: "App Developer",
    year: "2025",
    title: "AMOST",
    description: `AMOST stands for <i>Ayo Minum Obat Secara Teratur</i> (Let's Take Medicine Regularly). It is an Android application that helps individuals take their medicine according to the instructions of medical personnel or even self-medication practices.`,
    icons: [
      { title: "React Native", iconType: SiReact },
      { title: "NativeWind", iconType: NativewindIcon },
      { title: "TypeScript", iconType: SiTypescript },
      { title: "Supabase", iconType: SiSupabase },
      { title: "Expo Dev", iconType: SiExpo },
    ],
    link: "https://drive.google.com/file/d/1lwtB8ZWmr5ds7MDLFqnF4EFWFuEgpzaX/view?usp=sharing",
    image: amostMobile,
  },
  {
    company: "Project Manager",
    year: "2023",
    title: "LonelyScape AR",
    description: `LonelyScape AR is an escape room game app using Augmented Reality technology. The method used in developing this app is Rapid Application Development (RAD).

      Paper published in ICIMTech 2023
      DOI:10.1109/ICIMTech59029.2023.10277954`,
    icons: [
      { title: "Asana", iconType: SiAsana },
      { title: "Figma", iconType: SiFigma },
    ],
    link: "https://drive.google.com/file/d/1kYRgwThY0vYDKs5AEVTBUQPlTx6W6KD4/view?usp=sharing",
    image: loneslyscapeAR,
  },
  {
    company: "Front-end Developer",
    year: "2024",
    title: "Pokedex",
    description:
      "Pokédex is a web application that allows users to perform CRUD operations on Pokémon data in an interactive digital Pokédex.",
    icons: [
      { title: "NextJS", iconType: SiNextdotjs },
      { title: "Router DOM", iconType: SiReactrouter },
      { title: "MUI", iconType: SiMui },
      { title: "TypeScript", iconType: SiTypescript },
      { title: "Vercel", iconType: SiVercel },
    ],
    link: "https://drive.google.com/file/d/17MLu59GXWoaj5B4mHKtSMSlnafTmggmc/view?usp=sharing",
    image: pokedexPage,
  },
  {
    company: "Front-end Developer",
    year: "2023",
    title: "EventRadar Web",
    description:
      "EventRadar is a student-driven platform that broadens access to information on youth events, from webinars to competitions, website version.",
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
  {
    company: "UI/UX Designer",
    year: "2024",
    title: "JasaRumahku",
    description:
      "JasaRumahku is a platform that connects homeowners with trusted service providers for home improvement and maintenance tasks.",
    icons: [{ title: "Figma", iconType: SiFigma }],
    link: "https://www.figma.com/proto/43pJXFnsZ6IwalYxBUJ1ul/JasaRumahku?node-id=0-1&p=f&t=0XeGsjJotXABAvSX-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=490%3A865&show-proto-sidebar=1",
    image: jasarumahkuMobile,
  },
  {
    company: "UI/UX Designer",
    year: "2023",
    title: "EventRadar Mobile",
    description:
      "EventRadar is a student-driven platform that broadens access to information on youth events, from webinars to competitions, mobile version.",
    icons: [{ title: "Figma", iconType: SiFigma }],
    link: "https://www.figma.com/proto/ebNy76GRXGFvtxktHEb2jR/EventRadar-Mobile-Copy?node-id=84-640&p=f&t=qyR73UOqaVX3cp80-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=114%3A618&show-proto-sidebar=1",
    image: eventRadarMobile,
  },
];
