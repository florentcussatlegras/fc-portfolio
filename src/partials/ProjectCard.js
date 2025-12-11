import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import GitHubButton from "react-github-btn";

const ProjectCard = ({ project: { title, description, tags, link, linkGithub } }) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
      <h1 className="text-xl text-center font-bold">
        {title}{" "}
        <a href={link}>
          <FaExternalLinkAlt className="inline align-baseline" />
        </a>{" "}
        <a href={link}>
          <FaGithub className="inline align-baseline" />
        </a>
      </h1>
      <hr className="my-4" />
      <p className="">{description}</p>
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag) => (
          <div className="px-4 py-1 border-2 rounded-full">{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
