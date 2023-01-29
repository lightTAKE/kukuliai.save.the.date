import i18next from "i18next";
import { initReactI18next } from "react-i18next";
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

i18next.use(initReactI18next).init({
  lng: "lt",
  debug: true,
  resources,
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
  },
});
