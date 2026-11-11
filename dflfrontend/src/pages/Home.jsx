import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTalkModal } from "../context/TalkModalContext";
// import Counter from "../components/Counter";
import Cards from "../components/Cards";
import FeaturesCards from "../components/FeaturesCards";
import Faq from "../components/Faq";
import flight from "../assets/DFL Group Cargo Jet in Flight.png";

import { 
  LOGISTICS_IMAGES,
  services, 
  highlights, 
  heroSlideImages,
  techFeaturesData, 
  bottomstats, 
  testimonials,
  partners,
  HomeFaqData
} from "../data/siteData";

export default function Home() {
  const { t } = useTranslation();
  const { openModal } = useTalkModal();
  const location = useLocation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const current = testimonials[index];

  useEffect(() => {
    const id = setInterval(() => setActiveSlide((i) => (i + 1) % highlights.length), 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <>

      {/* HERO SECTION */}
      <section id="home" className="relative flex overflow-hidden bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-24 sm:pt-28 pb-4 sm:pb-6">
        <div className="pointer-events-none absolute left-10 top-20 h-96 w-96 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl 2xl:max-w-[1536px] items-center gap-8 lg:gap-10 xl:gap-14 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-3 sm:mb-4 inline-flex self-start items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-[#64748B] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E66E19]/80" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E66E19]" />
              </span>
              {t("home.heroBadge", "Express Courier & Cargo Operations Active Nationwide")}
            </div>

            {/* Slide Highlights - Single-cell CSS Grid guarantees stable, unchanging height across all slides */}
            <div className="grid grid-cols-1 grid-rows-1">
              {highlights.map((_, idx) => (
                <h1
                  key={idx}
                  aria-hidden={idx !== activeSlide}
                  className={`col-start-1 row-start-1 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.18] bg-gradient-to-r from-[#E66E19] from-20% to-[#000000] to-70% bg-clip-text text-transparent transition-opacity duration-700 ease-in-out ${
                    idx === activeSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  {t(`home.highlights.${idx}`, highlights[idx])}
                </h1>
              ))}
            </div>

            <div className="my-4 sm:my-5 h-1 w-40 origin-left bg-[#E66E19] [animation:lineDraw_2s_0.20s_ease-out_forwards]" />

            <p className="max-w-xl 2xl:max-w-2xl mb-5 text-sm sm:text-base leading-relaxed text-[#64748B] opacity-0 [animation:fadeUp_0.7s_0.2s_ease_forwards]">
              {t("home.heroSubtitle", "DFL Express delivers time-critical packages, heavy cargo, and global supply chain solutions with real-time GPS precision and guaranteed arrival times.")}
            </p>
          </div>

          <div className="w-full max-w-lg sm:max-w-xl lg:max-w-none flex flex-col items-center justify-center">
            {/* Pure PNG Display - Responsive Aspect Ratio (No extra empty vertical space) */}
            <div className="relative w-full aspect-[16/10] max-h-[340px] sm:max-h-[400px] lg:max-h-[460px] xl:max-h-[500px] flex items-center justify-center">
              {heroSlideImages.map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  alt={highlights[idx] || "DFL Express Logistics"}
                  aria-hidden={idx !== activeSlide}
                  className={`absolute inset-0 h-full w-full object-contain filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-opacity duration-700 ease-in-out ${
                    idx === activeSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 pointer-events-none z-0"
                  }`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>

            {/* Slide Dots Indicator - Cleanly positioned directly below the artwork */}
            <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2">
              {heroSlideImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeSlide ? "w-8 bg-[#E66E19] shadow-sm shadow-[#E66E19]/30" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AIR CARGO FLIGHT ANIMATION */}
      <section className="relative w-full h-16 sm:h-20 lg:h-24 -mt-4 sm:-mt-6 lg:-mt-8 bg-white overflow-hidden pointer-events-none select-none">
        <div className="absolute animate-plane-fly">
          <img
            src={flight}
            alt="DFL Cargo Jet Flight"
            className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>
      

      {/* PARTNERS MARQUEE (Seamless Infinite Loop) */}
      <section className="overflow-hidden border-t border-slate-200 bg-slate-50/80 py-10">
        <div className="mx-auto mb-6 max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 md:px-8 text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#E66E19]">
            {t("home.trustedNetwork", "Trusted Integration & Global Carrier Network")}
          </p>
        </div>

        <div className="relative flex w-full overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex min-w-full shrink-0 items-center justify-around gap-12 sm:gap-16 animate-marquee py-2">
            {partners.concat(partners).map((partner, i) => {
              const IconComp = partner.icon;
              return (
                <div key={`p1-${i}`} className="flex shrink-0 items-center justify-center min-w-[100px]">
                  {IconComp ? (
                    <IconComp 
                      className={`h-9 w-auto ${partner.color || "text-[#0B132A]"} filter drop-shadow-sm transition-transform duration-300 hover:scale-105`} 
                    />
                  ) : (
                    <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-[#E66E19] via-amber-500 to-[#0B132A] bg-clip-text text-transparent">
                      {partner.text}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div aria-hidden="true" className="flex min-w-full shrink-0 items-center justify-around gap-12 sm:gap-16 animate-marquee py-2">
            {partners.concat(partners).map((partner, i) => {
              const IconComp = partner.icon;
              return (
                <div key={`p2-${i}`} className="flex shrink-0 items-center justify-center min-w-[100px]">
                  {IconComp ? (
                    <IconComp 
                      className={`h-9 w-auto ${partner.color || "text-[#0B132A]"} filter drop-shadow-sm transition-transform duration-300 hover:scale-105`} 
                    />
                  ) : (
                    <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-[#E66E19] via-amber-500 to-[#0B132A] bg-clip-text text-transparent">
                      {partner.text}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR NETWORK */}
      <section className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] flex flex-col lg:flex-row items-center gap-10 xl:gap-16">
          <div className="lg:w-5/12 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B35]">
                {t("home.ourNetwork", "OUR NETWORK")}
              </span>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#0B132A] mt-1 leading-tight">
                {t("home.globalPresence", "A Global Presence")}
              </h2>
              <p className="mt-3 text-sm xl:text-base text-[#64748B] leading-relaxed">
                {t("home.networkDesc", "With a strong international network and strategic partners, we connect businesses to markets across the globe.")}
              </p>
            </div>
          </div>

          <div className="lg:w-7/12 relative w-full">
            <img 
              src="https://ik.imagekit.io/t3zpyptj9/Global%20Locations%20Infographic%20Map.png" 
              alt="Global Map Network"
              className="w-full max-w-full h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-slate-200 bg-white px-4 sm:px-6 pt-12 pb-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px]">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="inline-block rounded-md bg-[#E66E19]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#E66E19]">
                {t("home.ourServices", "Our Services")}
              </div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B132A] md:text-4xl xl:text-5xl">
                {t("home.comprehensiveShipping", "Comprehensive Shipping & Freight Solutions")}
              </h2>
              <p className="mt-3 max-w-md xl:max-w-lg text-sm xl:text-base text-[#64748B]">
                {t("home.shippingDesc", "Tailored logistics services built to handle individual parcels, high-volume e-commerce orders, or enterprise heavy cargo.")}
              </p>
            </div>
          </div>
          <Cards services={services} onInquire={openModal} />
        </div>
      </section>

{/* HOW IT WORKS */}
<section className="relative border-t border-slate-200 bg-white px-4 sm:px-6 pt-6 pb-12 md:px-8 lg:px-12">
  <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
    <h2 className="font-display text-3xl font-bold tracking-tight text-[#0B132A] md:text-4xl xl:text-5xl">
      {t("home.howItWorks")}
    </h2>
    <p className="mt-2 text-slate-600 max-w-xl text-sm sm:text-base">
      {t("home.howItWorksDesc")}
    </p>

    <div className="mt-6 border-t border-slate-200">
      {/* Dynamic Key Array matching your JSON keys: "01", "02", "03", "04" */}
      {["01", "02", "03", "04"].map((stepKey, i) => (
        <details
          key={stepKey}
          className="group rounded-lg border-b border-slate-200 transition-all duration-300 hover:bg-slate-50 [&[open]]:bg-slate-50"
        >
          <summary className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-6 py-7 px-4 list-none outline-none [&::-webkit-details-marker]:hidden">
            <span className="font-display text-sm font-semibold text-slate-400">
              0{i + 1}
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-[#0B132A] transition-colors group-hover:text-[#E66E19] group-[&[open]]:text-[#E66E19] md:text-2xl">
                {t(`working.${stepKey}.name`)}
              </h3>
              <div className="hidden grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100 [@media(hover:hover)]:grid">
                <p className="max-w-md overflow-hidden text-sm leading-relaxed text-slate-600">
                  {t(`working.${stepKey}.description`)}
                </p>
              </div>
            </div>
            <span className="font-display text-lg text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#E66E19] group-[&[open]]:translate-x-1 group-[&[open]]:text-[#E66E19]">
              →
            </span>
          </summary>
          <div className="px-4 pb-7 pl-[calc(1rem+2.25rem)] [@media(hover:hover)]:hidden">
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              {t(`working.${stepKey}.description`)}
            </p>
          </div>
        </details>
      ))}
    </div>
  </div>
</section>

      {/* ADVANCED TECH FEATURES */}
      <section className="min-h-screen bg-[#0B132A]">
        <FeaturesCards features={techFeaturesData} />
      </section>

      {/* FAQ SECTION */}
      <section className="py-14 sm:py-18 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t("common.faqTitle", "Frequently Asked")} <span className="text-[#E66E19]">{t("common.faqTitleHighlight", "Questions")}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl lg:max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14">
            {t("common.faqSubtitle", "Everything you need to know about our logistics services and shipping.")}
          </p>
          <Faq data={HomeFaqData} />
        </div>
      </section>

      {/* CLIENT TESTIMONIALS & STATS */}
<section className="mx-auto max-w-7xl 2xl:max-w-[1536px] bg-white px-4 sm:px-6 py-10 md:px-8 lg:px-12">
  <div className="relative flex flex-col lg:flex-row overflow-hidden rounded-3xl shadow-xl bg-[#E66E19]">
    <div className="flex flex-col justify-between p-6 sm:p-8 md:p-12 xl:p-14 lg:w-7/12 text-white">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-orange-200">
          {t("home.clientSuccess", "CLIENT SUCCESS STORIES")}
        </span>
        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold mt-1">
          {t("home.whatClientsSay", "What Our Clients Say")}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-orange-100 max-w-lg">
          {t("home.clientsDesc", "Real businesses. Real results. Here's what our clients have to say about working with DFL Group.")}
        </p>
      </div>

     {current && (
  <div className="my-6 flex items-center gap-2">
    <button onClick={prev} className="h-8 w-8 rounded-full bg-white text-[#E65100] flex items-center justify-center font-bold shadow hover:bg-orange-50 shrink-0">‹</button>
    <div className="bg-white text-[#0B132A] p-5 sm:p-6 rounded-2xl shadow-md w-full min-h-[160px] flex flex-col justify-between">
      <p className="text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed">
        "{t(`testimonials.${current.id}.quote`, current.quote)}"
      </p>
      <div className="mt-4 flex items-center gap-3">
        <img src={current.avatar} alt={current.name} className="h-9 w-9 rounded-full object-cover border" />
        <div>
          <h4 className="text-xs font-bold">{current.name}</h4>
        </div>
      </div>
    </div>
    <button onClick={next} className="h-8 w-8 rounded-full bg-white text-[#E65100] flex items-center justify-center font-bold shadow hover:bg-orange-50 shrink-0">›</button>
  </div>
)}
      <div className="flex justify-center gap-1.5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/40"}`}
          />
        ))}
      </div>
    </div>

    <div className="relative lg:w-5/12 bg-slate-900 min-h-[350px] lg:min-h-full flex items-center justify-center p-6 xl:p-8">
      <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" alt="Cargo Ship" className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="relative z-10 w-full max-w-xs sm:max-w-sm bg-slate-900/70 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 text-white space-y-3">
        {bottomstats.map((item, idx) => (
          <React.Fragment key={item.id || idx}>
            <div className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <div>
                <p className="text-base font-extrabold leading-none">{item.value}</p>
                <p className="text-[11px] text-[#CBD5E1]">{t(`home.stats.${item.id || idx}`, item.label)}</p>
              </div>
            </div>
            {idx !== bottomstats.length - 1 && <hr className="border-white/10" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
</section>
    </>
  );
}