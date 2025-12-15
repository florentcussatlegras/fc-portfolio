import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { LanguageContext } from "../context/LanguageContext";


const Projects = ({ projects }) => {
    const { language } = useContext(LanguageContext);

    return (
        <div>
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">{language === 'fr' ? "Mes projets" : "My projects"}</h1>
            {projects.map((project) => (
                <ProjectCard project={project} />
            ))}
        </div>
    );
};

export default Projects;