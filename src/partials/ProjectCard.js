import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { tagColors } from "../assets/colors_tags";

const ProjectCard = ({
  project: { title, image, description, tags, link, linkGithub },
}) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300 relative">
      <h1 className="text-xl text-center font-bold gap-4 flex justify-center hover:scale-110 transition">
        <a href={link}>{title} </a>
        {/* <a href={link}>
          <FaExternalLinkAlt className="inline align-baseline" />
        </a>{" "} */}
      </h1>
      <a href={linkGithub} className="absolute top-5 right-5 text-3xl text-gray-700 hover:text-black hover:scale-110 transition">
        <FaGithub className="inline align-baseline" />
      </a>
      <hr className="my-4" />
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <a href={link} className="w-full lg:w-1/2">
          <img src={image} className="hover:scale-110 transition" />
        </a>
        <p className="w-full lg:w-1/2">{description}</p>
      </div>
      <div className="mt-8 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag) => {
          const colorClass =
            tagColors[tag.toLowerCase()] || "bg-gray-200 text-black";
          return (
            <div
              key={tag}
              className={`px-4 py-1 border-2 rounded-full ${colorClass}`}
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
