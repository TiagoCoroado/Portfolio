import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-3">
      <label className="swap">
        <input
          type="checkbox"
          className=""
          onClick={() => {
            changeLanguage(i18n.language === "pt" ? "en" : "pt");
          }}
        />
        <div className="swap-on join-item" style={{ fontSize: "22px", fontWeight: "bold", paddingRight: "10px" }}>PT</div>
        <div className="swap-off join-item" style={{ fontSize: "22px", fontWeight: "bold", paddingRight: "10px" }}>EN</div>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
