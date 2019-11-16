import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          title: "Thompson Boiler Works",
          nav: {
            about: "About",
            services: "Services",
            projects: "Project",
            careers: "Careers",
            contact: "Contact"
          }
        }
      },
      fre: {
        translations: {
          title: "Thompson Boiler Works",
          nav: {
            about: "About",
            services: "Services",
            projects: "Projects",
            careers: "Careers",
            contact: "Contact"
          }
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
