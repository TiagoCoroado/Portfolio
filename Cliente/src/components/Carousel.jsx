import React from "react";
import { useTranslation } from "react-i18next";
import certificado1 from "../img/CertificateOfCompletion_Career Essentials in Cybersecurity by Microsoft and LinkedIn.png";
import certificado2 from "../img/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.png";
import certificado3 from "../img/CertificateOfCompletion_Excel Essential Training Microsoft 365 2022.png";
import certificado4 from "../img//CertificateOfCompletion_JavaScript Foundations Professional Certificate by Mozilla.png";

// CarouselComponent.jsx
export default function Carousel() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="divider divider-center">Certificados</div>
      </div>
      <div className="flex w-full flex-col p-5">
        <div className="carousel w-auto h-[100vh]">
          {/* Imagem 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={certificado1}
              alt="Imagem 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Imagem 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={certificado2}
              alt="Imagem 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Imagem 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={certificado3}
              alt="Imagem 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Imagem 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={certificado4}
              alt="Imagem 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
