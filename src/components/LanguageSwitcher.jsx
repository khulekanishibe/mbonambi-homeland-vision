import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div style={{ marginLeft: 'auto' }}>
      <button onClick={() => i18n.changeLanguage('en')}>🇬🇧 EN</button>
      <button onClick={() => i18n.changeLanguage('zu')}>🇿🇦 ZU</button>
    </div>
  );
};

export default LanguageSwitcher;
