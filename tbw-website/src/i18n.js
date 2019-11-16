import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from './Values/locales/en/translation.json';
import translationFR from './Values/locales/fr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
<<<<<<< Updated upstream
          title: "Thompson Boiler Works",
          nav: {
            about: "About",
            services: "Services",
            projects: "Project",
            careers: "Careers",
            contact: "Contact"
          }
=======
          translationEN
>>>>>>> Stashed changes
        }
      },
      fr: {
        translations: {
<<<<<<< Updated upstream
          title: "Thompson Boiler Works",
          nav: {
            about: "About",
            services: "Services",
            projects: "Projects",
            careers: "Careers",
            contact: "Contact"
          }
=======
          translationFR
>>>>>>> Stashed changes
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ","
    },

    react: {
      wait: true
    }
  });

export default i18n;
