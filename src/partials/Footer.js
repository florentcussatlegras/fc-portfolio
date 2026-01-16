import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Footer = ({ github }) => {
  return (
    <footer className="mt-20 py-6 text-center text-sm text-gray-500">
      <p className="font-medium text-gray-700">
        Florent C — Full-stack Developer
      </p>

      <div className="flex justify-center gap-4 mt-3 text-lg">
        <a
          href={github}
          aria-label="GitHub"
          className="hover:text-black transition"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:florent.cussatlegras@gmail.com"
          aria-label="Email"
          className="hover:text-black transition"
        >
          <FaRegEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/"
          aria-label="LinkedIn"
          className="hover:text-black transition"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="mt-4 text-xs">
        © {new Date().getFullYear()} Florent C. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
