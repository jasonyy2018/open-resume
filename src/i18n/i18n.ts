import i18n, { InitOptions } from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

interface ConfigOptions extends InitOptions {
  backend: {
    loadPath: string;
  };
  detection: {
    order: string[];
    caches: string[];
  };
  react: {
    useSuspense: boolean;
  };
}

// 确保配置的类型正确
const options: ConfigOptions = {
  fallbackLng: 'en',
  debug: true,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  detection: {
    order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie'],
  },
  react: {
    useSuspense: false,
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);

export default i18n;
