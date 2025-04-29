import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <span>{t('language')}: </span>
      <button onClick={() => changeLanguage('pt')}>🇵🇹 PT</button>
      <button onClick={() => changeLanguage('en')}>🇺🇸 EN</button>
    </div>
  );
};

export default LanguageSwitcher;


