import React from "react";
import { useTranslation } from "react-i18next";

export function Projectos() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="divider divider-center">Projetos</div>
      </div>
      <div className="columns-3 p-10 gap-5">
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Website Pessoal</h2>
            <p>Site desenvolvido em HTML5, CSS3 e Javascript.</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => window.open("https://margaridaromanunes.pt/", "_blank")}
              >
                Abrir Site
              </button>           </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">GitHub Repo</button>
              <button className="btn btn-primary">Images</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end ">
              <button className="btn btn-primary">GitHub Repo</button>
              <button className="btn btn-primary">Images</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
