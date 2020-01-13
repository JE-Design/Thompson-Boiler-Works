import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./Values/locales/en/translation.json";
import translationFR from "./Values/locales/fr/translation.json";

i18n.use(initReactI18next).init({
  lng: "en",
  // we init with resources
  resources: {
    en: {
      translations: translationEN
    },
    fr: {
      translations: translationFR
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: ".", // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
