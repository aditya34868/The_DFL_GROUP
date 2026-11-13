import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTalkModal } from "../context/TalkModalContext";
import Faq from "../components/Faq";
import { Customer_clearance } from "../data/siteData";
import {
  FiFileText,
  FiShield,
  FiZap,
  FiAward,
  FiArrowRight,
  FiPercent,
  FiClock,
  FiCpu,
  FiLayers,
  FiBriefcase,
  FiActivity,
  FiGlobe,
} from "react-icons/fi";

const customsHighlightIcons = [FiShield, FiGlobe, FiFileText];
const whyChooseIcons = [FiZap, FiAward, FiCpu, FiShield];
const valuePropIcons = [FiPercent, FiClock, FiShield, FiLayers];

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#E66E19] ${className}`}
  >
    {children}
  </span>
);

const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="text-center max-w-2xl mx-auto space-y-3">
    <Badge>{badge}</Badge>
    <h2 className="text-3xl font-black text-slate-900">{title}</h2>
    {subtitle && (
      <p className="text-sm text-slate-600 font-medium">{subtitle}</p>
    )}
  </div>
);

export default function CustomsClearance() {
  const { t } = useTranslation();
  const homepage = () => {
    window.location.href = "https://express.thedflgroup.com/";
  };

  const { openModal } = useTalkModal();

  const highlights = [0, 1, 2];
  const whyIndices = [0, 1, 2, 3];
  const valueIndices = [0, 1, 2, 3];
  const industryIndices = [0, 1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-28 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 font-sans">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] space-y-16 xl:space-y-20">
        {/* MONITOR STRIP */}
        <div className="relative w-full rounded-2xl bg-white p-4 text-slate-700 shadow-md border border-slate-200">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2 px-2">
            <span className="flex items-center gap-1.5 text-[#E66E19]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E66E19]" />
              </span>
              {t("customClearance.monitorTitle", "Digital Customs Portal")}
            </span>
            <span className="font-bold text-slate-600">
              {t("customClearance.activeStatus", "Automated e-Customs & Duty Clearance Status: Active")}
            </span>
          </div>

          <div className="relative h-9 w-full rounded-xl bg-orange-50/60 border border-orange-100 overflow-hidden flex items-center px-3">
            <div className="w-full border-b border-dashed border-orange-300 absolute left-0 top-1/2 -translate-y-1/2" />
            <div className="absolute top-7 -translate-y-1/2 animate-scan z-10 flex items-center gap-2 bg-[#E66E19] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md shadow-orange-500/20 whitespace-nowrap">
              <FiFileText className="h-3.5 w-3.5" />
              <span>{t("customClearance.verifying", "Verifying Shipping Bills")}</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-3xl bg-white text-slate-800 p-6 sm:p-10 md:p-14 shadow-xl border border-slate-200">
          <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-[#E66E19]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <Badge>
                <FiShield className="h-3.5 w-3.5" />
                {t("customClearance.badge", "Customs Clearance Services")}
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
                {t("customClearance.heroTitle", "Seamless Compliance for Global Trade with")}{" "}
                <span className="text-[#E66E19]">
                  {t("customClearance.heroTitleHighlight", "The DFL Group")}
                </span>
              </h1>

              <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
                {t(
                  "customClearance.heroDesc",
                  "Choosing the right customs broker can be a complex and overwhelming task for shippers, importers, and exporters. The DFL Group simplifies this with direct customs brokerage services through our platform—delivering fast turnarounds at competitive rates."
                )}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={homepage}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#E66E19] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:bg-[#d55f0f] hover:scale-105 active:scale-95"
                >
                  <span>{t("customClearance.consultButton", "Consult Brokerage Expert")}</span>
                  <FiArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-md transition-all duration-500 hover:border-[#E66E19] hover:shadow-xl">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
                    alt="Customs Clearance Documentation and Compliance"
                    className="h-64 sm:h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between px-2 pb-1">
                  <div>
                    <span className="block text-xs font-bold text-slate-800">
                      {t("customClearance.compliancePortal", "Trade Compliance Portal")}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {t("customClearance.dutyAssessment", "Instant Duty & Incentive Assessment")}
                    </span>
                  </div>
                  <FiActivity className="h-5 w-5 text-[#E66E19]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMS HIGHLIGHTS */}
        <section className="space-y-10">
          <SectionHeader
            badge={t("customClearance.overviewBadge", "Clearance & Support")}
            title={t("customClearance.overviewTitle", "Comprehensive Customs & Trade Documentation")}
            subtitle={t(
              "customClearance.overviewSubtitle",
              "Simplifying international procedures, import/export duties, and regulatory compliance."
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((idx) => {
              const Icon = customsHighlightIcons[idx] || FiShield;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E66E19] hover:shadow-xl"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 border border-orange-100 text-[#E66E19] group-hover:bg-[#E66E19] group-hover:text-white transition-colors mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#E66E19] transition-colors">
                      {t(`customClearance.highlights.${idx}.title`)}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                      {t(`customClearance.highlights.${idx}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHY CHOOSE DFL GROUP */}
        <section className="space-y-10">
          <SectionHeader
            badge={t("customClearance.whyBadge", "Customs Capabilities")}
            title={t("customClearance.whyTitle", "Why Choose The DFL Group?")}
            subtitle={t(
              "customClearance.whySubtitle",
              "We leverage experienced trade specialists and automated platforms to expedite your port clearance."
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyIndices.map((idx) => {
              const Icon = whyChooseIcons[idx] || FiZap;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E66E19] hover:bg-[#E66E19] hover:shadow-xl cursor-pointer"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 border border-orange-100 text-[#E66E19] group-hover:bg-white/20 group-hover:border-white/30 group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-slate-800 group-hover:text-white transition-colors">
                      {t(`customClearance.whyItems.${idx}.title`)}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 group-hover:text-orange-50 font-medium transition-colors">
                      {t(`customClearance.whyItems.${idx}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="lg:col-span-5 space-y-5">
            <Badge>{t("customClearance.benefitsBadge", "Tangible Benefits")}</Badge>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              {t("customClearance.benefitsTitle", "The Strategic Value We Provide to Your Business")}
            </h2>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {t(
                "customClearance.benefitsDesc",
                "Customs compliance is not just about avoiding penalties—it's a competitive advantage that accelerates your entire supply chain."
              )}
            </p>
            <div className="pt-2">
              <Link
                to="/contactUs"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200 px-5 py-2.5 text-xs font-bold text-[#E66E19] hover:bg-[#E66E19] hover:text-white transition-all"
              >
                <span>{t("customClearance.talkCompliance", "Talk to Compliance Team")}</span>
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valueIndices.map((i) => {
              const Icon = valuePropIcons[i] || FiPercent;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#E66E19] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <Icon className="h-5 w-5 text-[#E66E19]" />
                    </div>
                    <h4 className="font-bold text-sm text-slate-800">
                      {t(`customClearance.valueProps.${i}.title`)}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {t(`customClearance.valueProps.${i}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* INDUSTRIES SUPPORTED */}
        <section className="space-y-8">
          <SectionHeader
            badge={t("customClearance.industriesBadge", "Specialized Clearance")}
            title={t("customClearance.industriesTitle", "Industries We Support")}
            subtitle={t(
              "customClearance.industriesSubtitle",
              "Customized clearance protocols tailored for commodity-specific regulations and trade licenses."
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {industryIndices.map((idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#E66E19] hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#E66E19] group-hover:bg-[#E66E19] group-hover:text-white transition-colors">
                  <FiBriefcase className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-slate-800 group-hover:text-[#E66E19] transition-colors">
                  {t(`customClearance.industries.${idx}`)}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {t("common.faqTitle", "Frequently Asked")}{" "}
              <span className="text-[#E66E19]">
                {t("common.faqTitleHighlight", "Questions")}
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mb-12">
              {t("common.faqSubtitle", "Everything you need to know about our logistics services and shipping.")}
            </p>
            <Faq data={Customer_clearance} category="customs" />
          </div>
        </section>

        {/* BOTTOM CTA BAR */}
        <section className="rounded-3xl bg-orange-50 border border-orange-200 text-slate-800 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {t("customClearance.ctaTitle", "Ready for hassle-free customs clearance?")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              {t("customClearance.ctaDesc", "Generate shipping documentation and clear port duties without delays.")}
            </p>
          </div>
          <button
            className="shrink-0 rounded-xl bg-[#E66E19] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d55f0f] hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20 cursor-pointer"
            onClick={openModal}
          >
            {t("customClearance.ctaButton", "Clear Shipment Now →")}
          </button>
        </section>
      </div>
    </div>
  );
}