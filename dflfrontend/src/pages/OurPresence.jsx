import React from "react";
import { useTranslation } from "react-i18next";
import PresenceLocations from "../components/PresenceLocations";
import { keyHighlights } from "../data/siteData";

export default function OurPresence() {
  const { t } = useTranslation();

  return (
    <main className="bg-white px-4 sm:px-6 py-20 text-[#0B132A] md:px-8 lg:px-12 pt-32 min-h-screen">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1536px]">
        
        {/* HERO SECTION */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E66E19] shadow-sm">
            {t("presence.badge", "Our Presence")}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl xl:text-6xl">
            {t("presence.heroTitle", "Local Expertise, Global Reach")}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base font-medium">
            {t(
              "presence.heroDesc",
              "At The DFL Group, our presence defines our strength, reliability, and commitment to delivering exceptional logistics solutions worldwide. We are more than just a logistics provider – we are a trusted partner, ensuring seamless connectivity and operational excellence across industries and borders."
            )}
          </p>
        </div>

        {/* HIGHLIGHTS CARD */}
        <div className="mb-16 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl xl:text-4xl">
              {t("presence.strategicTitle", "Strategic Locations Driving Operations")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              {t(
                "presence.strategicDesc",
                "Our operations span multiple regions, blending local insights with global standards to create logistics solutions that cater to diverse market needs. From bustling metropolitan cities to remote industrial hubs, The DFL Group ensures your cargo reaches its destination, no matter where it needs to go."
              )}
            </p>
          </div>

          {/* RESPONSIVE GRID FOR HIGHLIGHT CARDS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((item, index) => (
              <div 
                key={index}
                className="w-full rounded-2xl border border-slate-200 bg-orange-50/50 p-6 transition-all duration-300 hover:border-[#E66E19] hover:bg-white hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#E66E19] font-black text-lg">0{index + 1}.</div>
                  <h3 className="mt-2 font-bold text-slate-900">
                    {t(`presence.highlights.${index}.title`, item.title)}
                  </h3>
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {t(`presence.highlights.${index}.description`, item.description)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LOCATIONS SECTION */}
        <PresenceLocations />

      </div>
    </main>
  );
}