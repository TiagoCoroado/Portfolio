import React from "react";
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  return (
    
    <div className="hero bg-base-400 p-5">
      <div className="hero-content  ">
        <div>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{t('welcome')}</h1>
          <p className="py-6">
          {t('intro')}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    
  );
}
