import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en_translation from "./en/translations.json";
import lt_translation from "./lt/translations.json";

export const resources = {
  en: {
    translation: en_translation,
  },
  lt: {
    translation: lt_translation,
  },
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: "languageFromPath",
  lookup(): string | string[] | undefined {
    const queryParams = new URLSearchParams(document.location.search);
    const language = queryParams.get("language");
    switch (language) {
      case "en":
        return "en";
      case "lt":
        return "lt";
      default:
        return undefined;
    }
  },
});

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["languageFromPath"],
    },
    fallbackLng: "en",
    debug: true,
    resources,
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    },
  });
