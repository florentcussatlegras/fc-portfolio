import { cibReact, cibSymfony, cilCode } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Florent C",
  title: "Full-stack Developer",
  social: {
    github: "https://github.com/florentcussatlegras",
    // dribbble: "https://github.com/BraydenTW",
    // twitter: "https://github.com/BraydenTW",
    email: "florent.cussatlegras@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "With over 20 years of experience in software development, I began my career in web development, where I worked for five years on a wide range of projects before moving into the industrial sector. For 15 years, I contributed to the development and evolution of a management software for an industrial company, gaining strong expertise in software architecture and design. Three years ago, I decided to return to web development and become a full-stack developer. Since then, I have specialized in Symfony, earning the Expert-level certification, and explored Symfony UX to enhance user experience. At the same time, I have strengthened my skills in JavaScript, TypeScript, and React, while adopting Tailwind CSS to build modern and responsive interfaces. This combination of long-term experience and up-to-date skills allows me to approach web projects with a comprehensive vision, combining robust backend systems with dynamic user interfaces. My journey reflects my ability to learn, adapt, and deliver reliable and elegant solutions to technical challenges.",
    },
  skills: [
    {
      skillName: "Fullstack",
      skillIcon: (
        <div className="w-16 h-16 mx-auto">
          <CIcon icon={cilCode} className="w-full h-full" />
        </div>
      ),
    },
    {
      skillName: "Symfony",
      skillIcon: (
        <div className="w-16 h-16 mx-auto">
          <CIcon icon={cibSymfony} className="w-full h-full" />
        </div>
      ),
    },
    {
      skillName: "ReactJS",
      skillIcon: (
        <div className="w-16 h-16 mx-auto">
          <CIcon icon={cibReact} className="w-full h-full" />
        </div>
      )
    },
    {
      skillName: "TailwindCSS",
      skillIcon: <RiTailwindCssFill className="text-5xl inline-block" />,
    },
  ],
  projects: [
    {
      title: "Nutrition",
      description:
        "🥗 To help you adopt a healthier and more balanced diet, build with Symfony and TailwindCSS.",
      tags: ["php", "symfony", "tailwindcss", "symfonyux"],
      link: "https://fc-nutrition.com",
      linkGithub: "https://github.com/florentcussatlegras/liveforeat3.0",
    },
    {
      title: "Airbnb Clone",
      description:
        "🌍 A booking website imitating Airbnb, build with NextJS and TailwindCSS.",
      tags: ["typescript", "nextjs", "tailwindcss"],
      link: "https://airbnb-clone-pgpi3ccvd-florent-cussatlegras-projects.vercel.app",
      linkGithub: "https://github.com/florentcussatlegras/airbnb-clone",
    },
    {
      title: "Ten Thousands Hours",
      description:
        "⏳ An app designed to help you manage your work sessions and become an expert, build with NextJS, HeroUI and TailwindCSS.",
      tags: ["typescript", "nextjs", "heroui", "tailwindcss"],
      link: "https://fc-ten-thousand-hours.com",
      linkGithub: "https://github.com/florentcussatlegras/tenthousandshours",
    },
    {
      title: "My Bags Shop",
      description:
        "🛍️ An online shoe shop, build with Symfony, NextJS and MaterialUI.",
      tags: [
        "php",
        "symfony",
        "reactjs",
        "materialui",
        "javascript",
        "tailwindcss",
      ],
      link: "https://fc-bags-shop.com",
      linkGithub:
        "https://github.com/florentcussatlegras/ecommerce-symfony-react",
    },
  ],
};
export default data;
