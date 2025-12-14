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
      "EN _ Avec plus de 20 ans d’expérience en développement logiciel, j’ai commencé ma carrière dans le web, où j’ai travaillé pendant 5 ans sur des projets variés, avant de rejoindre le secteur industriel. Pendant 15 ans, j’ai contribué au développement et à l’évolution d’un logiciel de gestion pour une entreprise industrielle, acquérant une solide expertise en architecture et en conception logicielle. Il y a trois ans, j’ai choisi de me réorienter vers le web pour devenir développeur full stack. Depuis, je me suis spécialisé dans Symfony, obtenant la certification niveau expert, et j’ai exploré Symfony UX pour enrichir l’expérience utilisateur. Parallèlement, j’ai développé mes compétences en JavaScript, TypeScript et React, tout en adoptant Tailwind pour des interfaces modernes et réactives. Cette combinaison d’expérience longue et de compétences récentes me permet d’aborder les projets web avec une vision complète, alliant robustesse backend et interfaces utilisateur dynamiques. Mon parcours reflète ma capacité à apprendre, m’adapter et apporter des solutions fiables et élégantes aux défis techniques.",
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
      link: "https://fc-abb-clone.xyz",
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
