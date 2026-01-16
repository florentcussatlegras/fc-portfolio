import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import About from "./partials/About";
import Card from "./partials/Card";
import Footer from "./partials/Footer";
import Projects from "./partials/Projects";
import Skills from "./partials/Skills";
import data from "./assets/data";
import AOS from "aos";
import "aos/dist/aos.css";
import dataFr from "./assets/data_fr";
import dataEn from "./assets/data_en";
import { LanguageContext } from "./context/LanguageContext";
import Modal from "./partials/components/Modal";

function App() {
  const { language } = useContext(LanguageContext);
  const data = language === "fr" ? dataFr : dataEn;

  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card
          name={data.name}
          title={data.title}
          social={data.social}
          onOpenCertificate={() => setIsCertificateOpen(true)}
          isCertificateOpen={isCertificateOpen}
          onCloseCertificate={() => setIsCertificateOpen(false)}
        />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Footer github={data.social.github} />
      </div>
      <Modal isOpen={isCertificateOpen} onClose={onCloseCertificate}>
        <img
          src="/certificate-florent_cussatlegras.png"
          alt="Symfony Certification"
          className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
        />
        TOTO
      </Modal>
    </div>
  );
}
export default App;
