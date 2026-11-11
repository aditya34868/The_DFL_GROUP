import { useState, useEffect, useRef } from "react";
import { FiGlobe, FiChevronDown, FiCheck } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", nativeName: "English"},
  { code: "hi", name: "Hindi", nativeName: "हिन्दी"},
  { code: "ru", name: "Russian", nativeName: "Русский"},
  { code: "ar", name: "Arabic", nativeName: "العربية"},
  { code: "fr", name: "French", nativeName: "Français"},
  { code: "th", name: "Thai", nativeName: "ไทย",},
];

export default function LanguageSwitcher({ inline = false }) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeLangCode = (i18n.resolvedLanguage || i18n.language || "en").toLowerCase();
  const currentLanguage =
    languages.find(
      (lang) => lang.code === activeLangCode || activeLangCode.startsWith(lang.code)
    ) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language.code);
    localStorage.setItem("language", language.code);

    document.documentElement.lang = language.code;
    document.documentElement.dir = "ltr";

    setOpen(false);
  };

  const menuPosition = inline
    ? "relative mt-2 w-full"
    : "absolute right-0 z-50 mt-2 w-48";

  return (
    <div
      className={`relative text-left ${inline ? "block w-full" : "inline-block"}`}
      ref={dropdownRef}
    >
      {/* Selected language button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-bold text-[#0B132A] shadow-sm transition-all hover:border-[#E66E19] hover:text-[#E66E19] ${
          inline ? "w-full justify-between" : ""
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="flex items-center gap-1.5">
          <span className="text-xs xl:text-sm font-bold uppercase tracking-wider">
            {currentLanguage.code}
          </span>
        </span>
        <FiChevronDown
          size={14}
          className={`text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180 text-[#E66E19]" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className={`${menuPosition} max-w-[calc(100vw-3rem)] max-h-56 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl`}
        >
          <div className="mb-1 flex items-center border-b border-slate-100 px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <FiGlobe size={12} className="mr-1.5 inline" />
            {t("language.selectLanguage", "Select Language")}
          </div>

          <div className="flex flex-col gap-0.5">
            {languages.map((language) => {
              const selected = language.code === currentLanguage.code;

              return (
                <button
                  type="button"
                  key={language.code}
                  onClick={() => changeLanguage(language)}
                  className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left transition-all ${
                    selected
                      ? "bg-orange-50 font-bold text-[#E66E19]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#0B132A]"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs font-bold leading-tight">
                      {language.nativeName}
                    </div>
                    <div className="truncate text-[10px] text-slate-400">
                      {language.name}
                    </div>
                  </div>

                  {selected && (
                    <FiCheck size={14} className="shrink-0 text-[#E66E19]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}