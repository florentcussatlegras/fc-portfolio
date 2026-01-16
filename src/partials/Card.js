import React, { useContext } from "react";
import profile from "../images/profile.png";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import CertificateModal from "./CertificationModal";

function Card({ name, title, social: { github, dribbble, twitter, email } }) {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="w-full border">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <button
          onClick={toggleLanguage}
          className="absolute right-0 top-0 mr-2 mt-2 px-3 py-1 text-sm
                    bg-white rounded-lg shadow-sm
                    hover:bg-gray-100 transition"
        >
          {language === "fr" ? "EN" : "FR"}
        </button>
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full"
            src={profile}
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            {name}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            {title}
          </p>

          <CertificateModal
            src="/logo-symfony-certified.png"
            target="/certificate-florent_cussatlegras.png"
            alt="SensioLabs Certified Symfony Developer Expert"
          />

          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={github}
            >
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            {/* <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
              href={dribbble}
            >
              <FaDribbble />
              <span class="sr-only">Dribble</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href={twitter}
            >
              <FaTwitter />
              <span class="sr-only">Twitter</span>
            </a> */}
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
              href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
            >
              <FaRegEnvelope />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
