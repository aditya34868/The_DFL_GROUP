import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Faq = ({ data, category }) => {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(null);

  // If a specific category is passed (e.g., 'airFreight', 'transportation'), use it; otherwise use top-level 'faqs'
  const targetObj = category
    ? t(`faqs.${category}`, { returnObjects: true }) || {}
    : t("faqs", { returnObjects: true }) || {};

  // Extract keys that have a question
  let faqKeys = [];
  if (typeof targetObj === "object" && targetObj !== null && !Array.isArray(targetObj)) {
    faqKeys = Object.keys(targetObj).filter(
      (key) => typeof targetObj[key] === "object" && targetObj[key] !== null && targetObj[key].question
    );
  }

  // Dual fallback: If translation keys exist, use them. Otherwise fallback to data prop (e.g. HomeFaqData)
  const items = faqKeys.length > 0
    ? faqKeys.map((key, index) => {
        const itemObj = targetObj[key] || {};
        return {
          id: key,
          num: String(index + 1).padStart(2, "0"),
          question: category
            ? t(`faqs.${category}.${key}.question`, itemObj.question)
            : t(`faqs.${key}.question`, itemObj.question),
          answer: category
            ? t(`faqs.${category}.${key}.answer`, itemObj.answer)
            : t(`faqs.${key}.answer`, itemObj.answer),
        };
      })
    : (Array.isArray(data)
        ? data.map((item, index) => ({
            id: String(item.id || index + 1),
            num: item.num || String(index + 1).padStart(2, "0"),
            question: item.question,
            answer: item.answer,
          }))
        : []);

  return (
    <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1520px] mx-auto text-left">
      <div className="divide-y divide-slate-200">
        {items.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="group py-4 sm:py-5 lg:py-6"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between text-left cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                  <span className="bg-[#E66E19]/15 text-[#E66E19] text-xs sm:text-sm font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shrink-0 border border-[#E66E19]/30">
                    {item.num}
                  </span>
                  <h3
                    className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                      isOpen
                        ? "text-[#E66E19]"
                        : "text-slate-900 group-hover:text-[#E66E19]"
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>

                <span
                  className={`text-xl sm:text-2xl font-bold ml-4 shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "text-[#E66E19] rotate-45"
                      : "text-slate-400 group-hover:text-[#E66E19]"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden pl-9 sm:pl-12 md:pl-14 lg:pl-16 transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100 mt-3 sm:mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed font-medium">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
