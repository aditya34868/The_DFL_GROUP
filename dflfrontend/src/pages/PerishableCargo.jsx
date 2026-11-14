import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTalkModal } from "../context/TalkModalContext";
import Faq from "../components/Faq";
import {
  perishableEndToEndServices,
  perishableSmartFeatures,
  perishableCargoFaq,
} from "../data/siteData";
import {
  FiThermometer,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowRight,
  FiPackage,
  FiNavigation,
  FiZap,
  FiWind,
  FiAnchor,
  FiSun,
} from "react-icons/fi";

const spectrumIcons = [FiWind, FiThermometer, FiSun];
const spectrumTemps = ["-18°C to -25°C", "+2°C to +8°C", "+15°C to +25°C"];

const BADGE_CLS =
  "inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]";
const CARD_HOVER_CLS =
  "group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#E66E19] hover:bg-[#E66E19]";

const Badge = ({ children }) => <span className={BADGE_CLS}>{children}</span>;

const ImageCard = ({ src, alt, tag, title, icon: Icon = FiTrendingUp }) => (
  <div className="group rounded-xl border border-slate-200 bg-slate-50 p-2 transition hover:border-[#E66E19]">
    <div className="overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className="h-56 sm:h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="mt-3 flex items-center justify-between px-2 pb-1">
      <div>
        <span className="block text-xs font-bold text-slate-800">{tag}</span>
        <span className="text-[11px] text-slate-500 font-medium">{title}</span>
      </div>
      <Icon className="h-4 w-4 text-[#E66E19]" />
    </div>
  </div>
);

export default function PerishableCargo() {
  const { t } = useTranslation();
  const { openModal } = useTalkModal();

  const expressPortal = () => {
    window.location.href = "https://express.thedflgroup.com/";
  };

  useEffect(() => {
    const prevTitle = document.title;
    document.title = t(
      "perishable.metaTitle",
      "Perishable & Temperature-Controlled Cargo Logistics | DFL Group"
    );

    const metaDescContent = t(
      "perishable.metaDescription",
      "Reliable cold chain freight forwarding and temperature-controlled air & ocean shipping for fresh produce and frozen food by The DFL Group."
    );
    let metaTag = document.querySelector('meta[name="description"]');
    const createdMeta = !metaTag;
    const prevDesc = metaTag ? metaTag.getAttribute("content") : null;

    if (!metaTag) {
      metaTag = document.createElement("meta");
      metaTag.setAttribute("name", "description");
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute("content", metaDescContent);

    return () => {
      document.title = prevTitle;
      if (createdMeta && metaTag.parentNode) {
        metaTag.parentNode.removeChild(metaTag);
      } else if (prevDesc !== null) {
        metaTag.setAttribute("content", prevDesc);
      }
    };
  }, [t]);

  const spectrumItems = [
    {
      title: "Deep Frozen (-18°C to -25°C)",
      description: "Seafood, meat, poultry, and processed foods.",
    },
    {
      title: "Chilled (+2°C to +8°C)",
      description: "Fresh fruits, vegetables, dairy, and confectionery.",
    },
    {
      title: "Controlled Ambient (+15°C to +25°C)",
      description: "Specialized FMCG and healthcare goods.",
    },
  ];

  return (
    <div className="bg-white text-slate-800 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 font-sans">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] space-y-12 sm:space-y-16 xl:space-y-20">
        {/* LIVE COLD-CHAIN TELEMETRY STRIP */}
        <div className="rounded-xl bg-white p-3 text-slate-700 shadow-sm border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500 mb-1.5 px-1">
            <span className="flex items-center gap-1.5 text-[#E66E19]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E66E19]" />
              </span>
              {t("perishable.liveMonitor", "24/7 Cold-Chain Telemetry")}
            </span>
            <span className="font-bold text-slate-600">
              {t(
                "perishable.routeLabel",
                "Route: BOM → DXB (-18°C Reefer Active • Live IoT Tracking)"
              )}
            </span>
          </div>

          <div className="relative h-8 w-full rounded-lg bg-orange-50 border border-orange-100 overflow-hidden flex items-center px-3">
            <div className="w-full border-b border-dashed border-orange-300 absolute left-0 top-1/2 -translate-y-1/2" />
            <div className="absolute top-6 -translate-y-1/2 animate-scan z-10 flex items-center gap-1.5 bg-[#E66E19] text-white px-2.5 py-0.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap">
              <FiNavigation className="h-3 w-3 rotate-45 animate-pulse" />
              <span>
                {t("perishable.activeStatus", "Cold Chain Integrity (-18°C / +4°C)")}
              </span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="rounded-2xl bg-white p-6 md:p-10 border border-slate-200 animate-fade-up">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge>
                <FiThermometer className="h-3.5 w-3.5" />{" "}
                {t("perishable.badge", "Perishable & Temperature-Controlled Cargo")}
              </Badge>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                {t(
                  "perishable.heroTitle",
                  "Temperature-Controlled & Perishable Cargo Logistics"
                )}{" "}
                <span className="text-[#E66E19]">
                  {t("perishable.heroTitleHighlight", "by The DFL Group")}
                </span>
              </h1>
              <p className="text-sm sm:text-base font-bold text-[#E66E19]">
                {t(
                  "perishable.subHeadline",
                  "Preserving Freshness, Safety & Quality Worldwide"
                )}
              </p>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">
                {t(
                  "perishable.heroDesc",
                  "DFL provides specialized, compliant cold-chain freight solutions engineered to protect perishable goods from origin to destination. Leveraging our global air and ocean reefer network, we ensure precise temperature control, expedited customs clearance, and real-time shipment monitoring for fresh, chilled, and frozen cargo."
                )}
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E66E19] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#d55f0f] cursor-pointer"
                >
                  <span>{t("perishable.quoteButton", "Get Instant Quote")}</span>
                  <FiArrowRight className="h-3.5 w-3.5 animate-arrow-nudge" />
                </button>
                <button
                  type="button"
                  onClick={expressPortal}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-bold text-slate-800 transition hover:border-[#E66E19] hover:text-[#E66E19] cursor-pointer"
                >
                  <span>{t("perishable.bookButton", "Book Cold-Chain Shipment")}</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ImageCard
                src="https://ik.imagekit.io/d4cjfvwoy/Arctic%20Reefer%20and%20Fresh%20Catch%20Display.png"
                alt="Arctic Reefer and Fresh Catch Cold Chain Logistics"
                tag={t("perishable.heroImageTag", "Cold Chain Integrity")}
                title={t(
                  "perishable.heroImageTitle",
                  "End-to-end temperature protection from -25°C to +25°C"
                )}
                icon={FiThermometer}
              />
            </div>
          </div>
        </section>

        {/* SECTION 1: MULTI-TEMPERATURE SPECTRUM */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge>
              {t("perishable.spectrumBadge", "Multi-Temperature Spectrum")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t(
                "perishable.spectrumTitle",
                "Precision Thermal Zones for Every Commodity"
              )}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spectrumItems.map((item, idx) => {
              const Icon = spectrumIcons[idx] || FiThermometer;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 transition duration-300 hover:border-[#E66E19] hover:bg-white hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-[#E66E19]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-white border border-orange-200 px-3 py-1 text-[11px] font-extrabold text-[#E66E19]">
                        {spectrumTemps[idx]}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                      {t(`perishable.spectrum.${idx}.title`, item.title)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {t(`perishable.spectrum.${idx}.description`, item.description)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: AIR & OCEAN REEFER SOLUTIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <Badge>
              {t("perishable.reeferBadge", "Air & Ocean Reefer Solutions")}
            </Badge>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 leading-snug">
              {t(
                "perishable.reeferTitle",
                "Unbroken Cold Chain Integrity Across Air & Ocean Routes"
              )}
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
              {t(
                "perishable.reeferDesc",
                "Fast-track air freight with thermal packaging and dry ice, alongside 20ft & 40ft active refrigerated (Reefer) ocean containers engineered to keep fresh produce, frozen food, and healthcare cargo stable throughout international transit."
              )}
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg border border-slate-200 bg-white">
                <FiPackage className="h-5 w-5 text-[#E66E19] mb-1" />
                <h4 className="font-bold text-xs text-slate-800">
                  {t("perishable.airThermalTitle", "Thermal Air & Dry Ice")}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {t(
                    "perishable.airThermalDesc",
                    "Fast-track air freight with insulated packaging and dry ice."
                  )}
                </p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-white">
                <FiAnchor className="h-5 w-5 text-[#E66E19] mb-1" />
                <h4 className="font-bold text-xs text-slate-800">
                  {t("perishable.oceanReeferTitle", "20ft & 40ft Ocean Reefers")}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {t(
                    "perishable.oceanReeferDesc",
                    "Active refrigerated marine containers for global sea trade."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <ImageCard
              src="https://ik.imagekit.io/d4cjfvwoy/Frozen%20Harbor%20Refrigeration%20Operations.png"
              alt="Frozen Harbor Refrigeration Operations"
              tag={t("perishable.harborTag", "HARBOR COLD-CHAIN OPS")}
              title={t(
                "perishable.harborTitle",
                "Direct Port Refrigeration & Cold-Storage Transfers"
              )}
              icon={FiShield}
            />
          </div>
        </section>

        {/* SECTION 3: COLD-CHAIN INFRASTRUCTURE GALLERY */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <Badge>
                {t("perishable.facilitiesBadge", "Cold-Chain Facilities")}
              </Badge>
              <h2 className="mt-1 text-xl sm:text-2xl font-black text-slate-900">
                {t(
                  "perishable.facilitiesTitle",
                  "Global Reefer Terminals & Priority Clearance"
                )}
              </h2>
            </div>
            <p className="text-xs text-slate-600 max-w-md font-medium">
              {t(
                "perishable.facilitiesDesc",
                "Dedicated port-side reefer plugging stations, cold storage bays, and priority customs lanes built for zero thermal drift."
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                src: "https://ik.imagekit.io/d4cjfvwoy/Reefer%20Container%20at%20Golden%20Harbor%20Dusk.png",
                icon: FiClock,
                tag: t("perishable.facilities.0.tag", "20ft & 40ft Active Reefers"),
                title: t(
                  "perishable.facilities.0.title",
                  "Global Port & Terminal Reefer Network"
                ),
                desc: t(
                  "perishable.facilities.0.desc",
                  "Continuous power-monitored refrigerated containers maintaining exact humidity and temperature profiles across major shipping lanes."
                ),
              },
              {
                src: "https://ik.imagekit.io/d4cjfvwoy/Modern%20Cold%20Storage%20Warehouse.png",
                icon: FiZap,
                tag: t("perishable.facilities.1.tag", "Green-Channel Clearance"),
                title: t(
                  "perishable.facilities.1.title",
                  "Expedited Phytosanitary & Cold Inspection"
                ),
                desc: t(
                  "perishable.facilities.1.desc",
                  "Accelerated customs release and climate-controlled inspection coordination to eliminate tarmac or port waiting times."
                ),
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-[#E66E19]"
              >
                <div className="overflow-hidden h-56 sm:h-64">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#E66E19]">
                    <card.icon className="h-3.5 w-3.5" />
                    <span>{card.tag}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{card.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: END-TO-END COLD-CHAIN WORKFLOW */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="max-w-2xl mb-6">
            <Badge>{t("perishable.workflowBadge", "Complete Workflow")}</Badge>
            <h2 className="mt-2 text-xl sm:text-2xl font-black text-slate-900">
              {t(
                "perishable.workflowTitle",
                "Comprehensive End-to-End Cold-Chain Execution"
              )}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perishableEndToEndServices.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-[#E66E19] hover:bg-[#E66E19]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#E66E19] group-hover:bg-white transition">
                    <FiCheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 group-hover:text-white transition">
                      {t(`perishable.endToEnd.${index}.title`, service.title)}
                    </h4>
                    <p className="text-[11px] text-slate-500 group-hover:text-orange-50 mt-0.5 font-medium transition">
                      {t(`perishable.endToEnd.${index}.detail`, service.detail)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: KEY CAPABILITIES & IOT TELEMETRY */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <Badge>{t("perishable.capabilitiesBadge", "Key Capabilities")}</Badge>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {t(
                "perishable.capabilitiesTitle",
                "Smart, Compliant & Unbroken Cold Chain"
              )}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perishableSmartFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={CARD_HOVER_CLS}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 border border-orange-100 text-[#E66E19] group-hover:bg-white/20 group-hover:text-white transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-800 group-hover:text-white transition">
                    {t(`perishable.smartFeatures.${idx}.title`, item.title)}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 group-hover:text-orange-50 font-medium transition">
                    {t(
                      `perishable.smartFeatures.${idx}.description`,
                      item.description
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {t("common.faqTitle", "Frequently Asked")}{" "}
              <span className="text-[#E66E19]">
                {t("common.faqTitleHighlight", "Questions")}
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mb-12">
              {t(
                "common.faqSubtitle",
                "Everything you need to know about our logistics services and shipping."
              )}
            </p>
            <Faq data={perishableCargoFaq} category="perishable" />
          </div>
        </section>

        {/* BOTTOM CTA BAR */}
        <section className="rounded-2xl bg-orange-50 border border-orange-200 text-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-slate-900">
              {t(
                "perishable.ctaTitle",
                "Ready to ship your perishable & temperature-controlled cargo?"
              )}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5 font-medium">
              {t(
                "perishable.ctaDesc",
                "Get an instant cold-chain quote with end-to-end temperature assurance and priority customs support."
              )}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-lg bg-[#E66E19] px-5 py-2.5 text-xs font-bold uppercase text-white transition hover:bg-[#d55f0f] cursor-pointer"
            onClick={openModal}
          >
            {t("perishable.ctaButton", "Get Custom Quote →")}
          </button>
        </section>
      </div>
    </div>
  );
}
