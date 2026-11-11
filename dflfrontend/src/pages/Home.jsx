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
      <section id="home" className="relative flex overflow-hidden bg-white px-4 sm:px-6 lg:px-8 xl:px-10 pt-24 sm:pt-28 pb-4 sm:pb-6">
        <div className="pointer-events-none absolute left-10 top-20 h-96 w-96 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] items-center gap-8 lg:gap-10 xl:gap-14 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-5 sm:mb-6 inline-flex max-w-full self-start items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4.5 py-2 text-xs sm:text-sm font-semibold text-[#64748B] shadow-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E66E19]/80" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E66E19]" />
              </span>
              <span className="break-words">
                {t("home.heroBadge", "Express Courier & Cargo Operations Active Nationwide")}
              </span>
            </div>

            {/* Slide Highlights - Single-cell CSS Grid guarantees stable, unchanging height across all slides & languages */}
            <div className="grid grid-cols-1 grid-rows-1">
              {highlights.map((_, idx) => (
                <h1
                  key={idx}
                  aria-hidden={idx !== activeSlide}
                  className={`col-start-1 row-start-1 text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[54px] 2xl:text-[64px] font-extrabold leading-[1.22] sm:leading-[1.2] py-1 break-words [text-wrap:balance] bg-gradient-to-r from-[#E66E19] from-20% to-[#000000] to-70% bg-clip-text text-transparent transition-opacity duration-700 ease-in-out ${
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

            <p className="max-w-xl lg:max-w-2xl 2xl:max-w-3xl mb-5 text-base sm:text-lg lg:text-xl leading-relaxed text-[#64748B] break-words [text-wrap:balance] opacity-0 [animation:fadeUp_0.7s_0.2s_ease_forwards]">
              {t("home.heroSubtitle", "DFL Express delivers time-sensitive packages, heavy cargo and global supply chain solutions with real-time GPS\u00A0precision.")}
            </p>
          </div>

          <div className="w-full max-w-lg sm:max-w-xl lg:max-w-none flex flex-col items-center justify-center">
            {/* Balanced Artwork Display - Shifted gently downward */}
            <div className="w-full flex flex-col items-center translate-y-1 sm:translate-y-2 lg:translate-y-3 xl:translate-y-4 2xl:translate-y-5">
              {/* Pure PNG Display - Responsive Aspect Ratio */}
              <div className="relative w-full aspect-[16/10] max-h-[360px] sm:max-h-[420px] lg:max-h-[500px] xl:max-h-[560px] flex items-center justify-center">
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
      <section className="overflow-hidden border-t border-slate-200 bg-slate-50/80 py-10 px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto mb-6 max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] text-center">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E66E19]">
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
                      className={`h-10 sm:h-11 w-auto ${partner.color || "text-[#0B132A]"} filter drop-shadow-sm transition-transform duration-300 hover:scale-105`} 
                    />
                  ) : (
                    <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-[#E66E19] via-amber-500 to-[#0B132A] bg-clip-text text-transparent">
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
                      className={`h-10 sm:h-11 w-auto ${partner.color || "text-[#0B132A]"} filter drop-shadow-sm transition-transform duration-300 hover:scale-105`} 
                    />
                  ) : (
                    <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-[#E66E19] via-amber-500 to-[#0B132A] bg-clip-text text-transparent">
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
      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden">
        <div className="mx-auto max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] flex flex-col lg:flex-row items-center gap-10 xl:gap-16">
          <div className="lg:w-5/12 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF6B35]">
                {t("home.ourNetwork", "OUR NETWORK")}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#0B132A] mt-2 leading-tight">
                {t("home.globalPresence", "A Global Presence")}
              </h2>
              <p className="mt-4 text-base sm:text-lg xl:text-xl text-[#64748B] leading-relaxed">
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
      <section id="services" className="border-t border-slate-200 bg-white px-4 sm:px-6 lg:px-8 xl:px-10 pt-14 pb-8">
        <div className="mx-auto max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px]">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="inline-block rounded-md bg-[#E66E19]/10 px-3.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E66E19]">
                {t("home.ourServices", "Our Services")}
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B132A]">
                {t("home.comprehensiveShipping", "Comprehensive Shipping & Freight Solutions")}
              </h2>
              <p className="mt-4 max-w-xl xl:max-w-2xl text-base sm:text-lg xl:text-xl text-[#64748B] leading-relaxed">
                {t("home.shippingDesc", "Tailored logistics services built to handle individual parcels, high-volume e-commerce orders, or enterprise heavy cargo.")}
              </p>
            </div>
          </div>
          <Cards services={services} onInquire={openModal} />
        </div>
      </section>

{/* HOW IT WORKS */}
<section className="relative border-t border-slate-200 bg-white px-4 sm:px-6 lg:px-8 xl:px-10 pt-10 pb-16">
  <div className="mx-auto max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px]">
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B132A]">
      {t("home.howItWorks")}
    </h2>
    <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg xl:text-xl leading-relaxed">
      {t("home.howItWorksDesc")}
    </p>

    <div className="mt-8 border-t border-slate-200">
      {/* Dynamic Key Array matching your JSON keys: "01", "02", "03", "04" */}
      {["01", "02", "03", "04"].map((stepKey, i) => (
        <details
          key={stepKey}
          className="group rounded-lg border-b border-slate-200 transition-all duration-300 hover:bg-slate-50 [&[open]]:bg-slate-50"
        >
          <summary className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-6 py-7 px-4 list-none outline-none [&::-webkit-details-marker]:hidden">
            <span className="font-display text-base sm:text-lg font-bold text-slate-400">
              0{i + 1}
            </span>
            <div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B132A] transition-colors group-hover:text-[#E66E19] group-[&[open]]:text-[#E66E19]">
                {t(`working.${stepKey}.name`)}
              </h3>
              <div className="hidden grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100 [@media(hover:hover)]:grid">
                <p className="max-w-xl overflow-hidden text-base sm:text-lg leading-relaxed text-slate-600">
                  {t(`working.${stepKey}.description`)}
                </p>
              </div>
            </div>
            <span className="font-display text-xl text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#E66E19] group-[&[open]]:translate-x-1 group-[&[open]]:text-[#E66E19]">
              →
            </span>
          </summary>
          <div className="px-4 pb-7 pl-[calc(1rem+2.25rem)] [@media(hover:hover)]:hidden">
            <p className="max-w-xl text-base leading-relaxed text-slate-600">
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
      <section className="py-16 sm:py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4">
            {t("common.faqTitle", "Frequently Asked")} <span className="text-[#E66E19]">{t("common.faqTitleHighlight", "Questions")}</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-xl lg:max-w-2xl mx-auto mb-12 sm:mb-14 lg:mb-16">
            {t("common.faqSubtitle", "Everything you need to know about our logistics services and shipping.")}
          </p>
          <Faq data={HomeFaqData} />
        </div>
      </section>

      {/* CLIENT TESTIMONIALS & STATS */}
<section className="bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-12">
  <div className="mx-auto max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px]">
    <div className="relative flex flex-col lg:flex-row overflow-hidden rounded-3xl shadow-xl bg-[#E66E19]">
      <div className="flex flex-col justify-between p-6 sm:p-8 md:p-12 xl:p-14 lg:w-7/12 text-white">
        <div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-200">
            {t("home.clientSuccess", "CLIENT SUCCESS STORIES")}
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mt-1">
            {t("home.whatClientsSay", "What Our Clients Say")}
          </h2>
          <p className="mt-3 text-sm sm:text-base xl:text-lg text-orange-100 max-w-xl leading-relaxed">
            {t("home.clientsDesc", "Real businesses. Real results. Here's what our clients have to say about working with DFL Group.")}
          </p>
        </div>

       {current && (
    <div className="my-6 flex items-center gap-2">
      <button onClick={prev} className="h-8 w-8 rounded-full bg-white text-[#E65100] flex items-center justify-center font-bold shadow hover:bg-orange-50 shrink-0">‹</button>
      <div className="bg-white text-[#0B132A] p-5 sm:p-6 rounded-2xl shadow-md w-full min-h-[160px] flex flex-col justify-between">
        <p className="text-sm sm:text-base md:text-lg xl:text-xl text-slate-700 font-medium leading-relaxed">
          "{t(`testimonials.${current.id}.quote`, current.quote)}"
        </p>
        <div className="mt-4 flex items-center gap-3">
          <img src={current.avatar} alt={current.name} className="h-10 w-10 rounded-full object-cover border" />
          <div>
            <h4 className="text-sm sm:text-base font-bold">{current.name}</h4>
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
        <div className="relative z-10 w-full max-w-xs sm:max-w-sm bg-slate-900/70 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 text-white space-y-4">
          {bottomstats.map((item, idx) => (
            <React.Fragment key={item.id || idx}>
              <div className="flex items-center gap-3.5">
                <span className="text-xl sm:text-2xl text-[#E66E19]">{item.icon}</span>
                <div>
                  <p className="text-lg sm:text-xl font-extrabold leading-none">{item.value}</p>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] mt-0.5">{t(`home.stats.${item.id || idx}`, item.label)}</p>
                </div>
              </div>
              {idx !== bottomstats.length - 1 && <hr className="border-white/10" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}