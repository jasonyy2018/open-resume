import React from 'react';
import i18n from 'i18next';

const LanguageSwitcher: React.FC = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh')}>中文</button>
    </div>
  );
};

export default LanguageSwitcher;
