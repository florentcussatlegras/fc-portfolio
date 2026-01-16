import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { tagColors } from "../assets/colors_tags";

const ProjectCard = ({
  project: { title, image, description, tags, link, linkGithub },
}) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
      <h1 className="text-xl text-center font-bold gap-4 flex justify-center">
        {title}{" "}
        <a href={link}>
          <FaExternalLinkAlt className="inline align-baseline" />
        </a>{" "}
        <a href={linkGithub}>
          <FaGithub className="inline align-baseline" />
        </a>
      </h1>
      <hr className="my-4" />
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <img src={image} className="w-full lg:w-1/2" />
        <p className="w-full lg:w-1/2">{description}</p>
      </div>
      <div className="mt-8 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag) => {
          const colorClass =
            tagColors[tag.toLowerCase()] || "bg-gray-200 text-black";
          return (
            <div
              key={tag}
              className="px-4 py-1 border-2 rounded-full ${colorClass}"
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
