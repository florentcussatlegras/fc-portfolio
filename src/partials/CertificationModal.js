import React, { useState } from "react";

const CertificateModal = ({ src, target, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* L'image cliquable */}
      <img
        src={src}
        alt={alt}
        className="w-24 h-24 mx-auto mt-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {/* Modal */}
      {isOpen && (
        <div
          className="absolute inset-0 flex justify-center items-center z-50 h-full bg-black"
          onClick={() => setIsOpen(false)} // ferme au clic sur le fond
        >
          <div className="relative p-4 max-w-3xl w-full">
            <img
              src={target}
              alt={alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateModal;
