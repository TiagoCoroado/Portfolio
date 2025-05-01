import React from "react";
import { useTranslation } from "react-i18next";

// CarouselComponent.jsx
export default function Carousel() {
  const { t } = useTranslation();
  return (
    <>
          <div className="flex w-full flex-col">
        <div className="divider divider-center">Certificados</div>
      </div>
    <div className="flex w-full flex-col p-5">
    <div className="carousel w-auto h-[50vh]">
      {/* Imagem 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://picsum.photos/1600/900?random=1" alt="Imagem 1" className="w-full h-full object-cover"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Imagem 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://picsum.photos/1600/900?random=2" alt="Imagem 2" className="w-full h-full object-cover"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Imagem 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://picsum.photos/1600/900?random=3" alt="Imagem 3" className="w-full h-full object-cover"/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    </div>
    
    </>
  );
}
