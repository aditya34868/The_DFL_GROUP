import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";
import ru from "./locales/ru/translation.json";
import ar from "./locales/ar/translation.json";
import fr from "./locales/fr/translation.json";
import th from "./locales/th/translation.json";

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    ru: { translation: ru },
    ar: { translation: ar },
    fr: { translation: fr },
    th: { translation: th },
  },
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

document.documentElement.lang = savedLanguage;
document.documentElement.dir = "ltr";

export default i18n;