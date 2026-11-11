import React from "react";
import { useTranslation } from "react-i18next";
import { useTalkModal } from "../context/TalkModalContext";
import { LOGISTICS_IMAGES, aboutCoreValues, aboutHighlights } from "../data/siteData";

export default function About() {
  const { t } = useTranslation();
  const { openModal } = useTalkModal();

  // Arrays from translation.json; English siteData is the fallback
  const coreValues = t("about.coreValues", {
    returnObjects: true,
    defaultValue: aboutCoreValues,
  });
  const highlights = t("about.highlights", {
    returnObjects: true,
    defaultValue: aboutHighlights,
  });

  return (
    <section id="about" className="relative overflow-hidden bg-white px-4 sm:px-6 py-24 text-slate-700 md:px-8 lg:px-12">
      {/* Background Decorative Gradient Blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-amber-50/80 blur-3xl animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1536px] space-y-24">

        {/* 1. HERO / OVERVIEW SECTION */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 2xl:gap-20">

          {/* Images Layout */}
          <div className="group relative cursor-pointer animate-fade-in-up">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
              <img
                src={LOGISTICS_IMAGES.about}
                alt={t("about.imageAboutAlt")}
                className="h-96 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
            </div>

            {/* Floating Secondary Image */}
            <div className="absolute -bottom-8 -right-4 hidden w-2/3 overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-orange-500/30 sm:block animate-float">
              <img
                src={LOGISTICS_IMAGES.warehouse}
                alt={t("about.imageWarehouseAlt")}
                className="h-48 w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute left-4 top-4 rounded-2xl border border-orange-100 bg-white/95 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#E66E19] hover:shadow-orange-500/20">
              <div className="text-3xl font-black text-[#E66E19]">25+</div>
              <div className="text-xs font-semibold text-slate-600">{t("about.yearsExperience")}</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <span className="inline-block rounded-full border border-[#E66E19]/30 bg-[#E66E19]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E66E19] transition-all duration-300 hover:scale-105 hover:bg-[#E66E19] hover:text-white">
              {t("about.badge")}
            </span>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl leading-tight">
              {t("about.heroTitle")} <span className="text-[#E66E19]">{t("about.heroTitleHighlight")}</span>
            </h1>

            <p className="text-base leading-relaxed text-slate-600">
              {t("about.heroPara")}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="group flex cursor-pointer items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 p-3 text-center text-xs font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19] hover:bg-orange-50/50 hover:shadow-md hover:shadow-orange-500/10"
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center rounded-xl bg-[#E66E19] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d55f0f] hover:shadow-2xl hover:shadow-orange-500/40 active:translate-y-0"
              >
                <span>{t("about.talkSpecialist")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. GENERAL INFORMATION CARD */}
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/50 via-white to-slate-50 p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#E66E19] hover:shadow-2xl hover:shadow-orange-500/20 md:p-12 animate-fade-in-up">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E66E19]/15 blur-3xl transition-opacity duration-500 group-hover:bg-[#E66E19]/30" />

          <div className="relative z-10 max-w-4xl space-y-4">
            <span className="inline-block rounded-full border border-[#E66E19]/30 bg-[#E66E19]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19] transition-transform duration-300 group-hover:scale-105">
              {t("about.generalInfoBadge")}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl transition-colors duration-300 group-hover:text-[#E66E19]">
              {t("about.generalInfoTitle")}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              {t("about.generalInfoDesc")}
            </p>
          </div>
        </div>

        {/* 3. VISION & MISSION CARDS */}
        <div className="grid gap-8 md:grid-cols-2 animate-fade-in-up">

          {/* Vision Card */}
          <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#E66E19] hover:shadow-2xl hover:shadow-orange-500/20">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E66E19]">
              {t("about.perspectiveBadge")}
            </span>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#E66E19]">
              {t("about.visionTitle")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {t("about.visionPara")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 italic">
              {t("about.visionExtraPara")}
            </p>
          </div>

          {/* Mission Card */}
          <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#E66E19] hover:shadow-2xl hover:shadow-orange-500/20">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E66E19]">
              {t("about.commitmentBadge")}
            </span>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#E66E19]">
              {t("about.missionTitle")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {t("about.missionPara")}
            </p>
          </div>
        </div>

        {/* 4. HISTORY & CORE PHILOSOPHY */}
        <div className="grid items-start gap-12 md:grid-cols-2 animate-fade-in-up">
          <div className="space-y-4">
            <span className="inline-block rounded-full border border-[#E66E19]/30 bg-[#E66E19]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
              {t("about.journeyBadge")}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              {t("about.historyTitle")}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              {t("about.historyPara1")}
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              {t("about.historyPara2")}
            </p>
          </div>

          {/* Core Values */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-6">
              <h3 className="mb-2 text-xl font-bold text-slate-900">{t("about.coreValuesTitle")}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("about.coreValuesPara")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {coreValues.map((val) => (
                <div
                  key={val.title}
                  className="group cursor-pointer rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#E66E19] hover:bg-white hover:shadow-xl hover:shadow-orange-500/15"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E66E19]">
                    {t("about.coreValueLabel")}
                  </span>
                  <h4 className="mt-1 text-sm font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#E66E19]">
                    {val.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. "TOGETHER WE GROW" SECTION */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 p-8 shadow-xl backdrop-blur-md md:p-12 animate-fade-in-up">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

          <div className="relative z-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block rounded-full border border-[#E66E19]/30 bg-[#E66E19]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#E66E19]">
                {t("about.strategicBadge")}
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                {t("about.togetherWeGrow")} <span className="text-[#E66E19]">{t("about.togetherWeGrowHighlight")}</span>
              </h2>
              <p className="text-base font-medium leading-relaxed text-slate-600">
                {t("about.togetherPara")}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19]/40 hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">{t("about.endToEndTitle")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t("about.endToEndDesc")}</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19]/40 hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">{t("about.multimodalTitle")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t("about.multimodalDesc")}</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E66E19]/40 hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">{t("about.customsTitle")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t("about.customsDesc")}</p>
              </div>
            </div>

            <div className="space-y-4 border-t border-slate-200/80 pt-8 text-sm leading-relaxed text-slate-600 md:text-base">
              <p>{t("about.strategicPara1")}</p>
              <p>{t("about.strategicPara2")}</p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-6 md:p-8">
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-widest text-[#E66E19]">
                  {t("about.guidingPrinciple")}
                </p>
                <h4 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                  {t("about.togetherTitle")}
                </h4>
                <p className="text-sm font-medium leading-relaxed text-slate-700 md:text-base">
                  {t("about.togetherDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. SISTER CONCERN HIGHLIGHT CARD */}
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-amber-50/50 to-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#E66E19] hover:shadow-2xl hover:shadow-orange-500/20 md:p-12 animate-fade-in-up">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block rounded-full bg-[#E66E19] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md shadow-orange-500/20 transition-transform duration-300 group-hover:scale-105">
                {t("about.affiliatedBadge")}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-[#E66E19] md:text-3xl">
                {t("about.delishaTitle")}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {t("about.delishaDesc")}
              </p>
            </div>
            <div className="shrink-0">
              <div className="flex h-16 items-center justify-center rounded-2xl bg-[#E66E19] px-6 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-orange-500/20 transition-all duration-500 group-hover:scale-105">
                {t("about.sisterConcern")}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}