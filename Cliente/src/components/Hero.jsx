import React from "react";
import { useTranslation } from "react-i18next";
import perfilImg from "../img/perfil.png"; // Importando a imagem corretamente

export function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero bg-base-400 p-5">
      <div className="hero-content  ">
        <div>
          <img src={perfilImg} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{t("welcome")}</h1>
          <p className="py-6">{t("intro")}</p>
          <a
            className="btn btn-primary"
            href="/pdf/CV Tiago Coroado.pdf"
            download="CV Tiago Coroado"
          >
            {t("download")}
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
